import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { observable, of } from 'rxjs';
import { AddtripService } from 'src/app/services/addtrip.service';
import { BooktripService } from 'src/app/services/booktrip.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirmbooking',
  templateUrl: './confirmbooking.component.html',
  styleUrls: ['./confirmbooking.component.css']
})
export class ConfirmbookingComponent implements OnInit {

  public sDate: any
  public eDate: any
  public start:any;
  public end:any;
  public referral:any;
  public discount='Not Applicable';
  public booktripId:any;
  public days='';
  public finalCost:any;
  currentUser:any=null;
  public bookedtrip={
    username:'',
    tripname:'',
    startDate:'',
    endDate:'',
    totalCost:'',
  }
  public user:any;
  public trip={
    id:'',
    name:'',
    city:'',
    country:'',
    price:'',
  }

  constructor(private booktripservice:BooktripService,private tripService:AddtripService,private loginservice:LoginService, private snack:MatSnackBar) { }


  ngOnInit(): void {
    this.currentUser=this.loginservice.getUser();
    this.booktripId = this.booktripservice.bookTripId;
    this.tripService.getTripById(this.booktripId).subscribe(
      (data:any)=>{
        this.trip=data;
      }
    )
  }


  public setDays(){
    this.sDate = new Date(this.start);
    this.eDate = new Date(this.end);
    var diff_in_time = this.eDate.getTime() - this.sDate.getTime();
    var diff_in_days =Math.round(diff_in_time/(1000*3600*24));
    this.days = diff_in_days.toString();
    this.bookedtrip.startDate = this.sDate.toLocaleDateString('en-GB').toString();
    this.bookedtrip.endDate = this.eDate.toLocaleDateString('en-GB').toString();
    var totalcost_days = Number(this.trip.price)*Number(this.days);
    this.finalCost= totalcost_days;
    console.log(this.days);
    console.log(this.finalCost);
  }

  public findReferral(name:any){
    console.log(this.bookedtrip.startDate);
      this.booktripservice.getUserByName(name).subscribe(
        (data:any)=>{
          this.user=data;
          if(this.user!=null){
            if(this.user.username==this.currentUser.username){
              this.snack.open('You cannot use your username!','',{
                duration:3000
              })
              return;
            }
            else{
            this.discount='1000'
            var final=Number(this.finalCost)-Number(this.discount);
            this.finalCost=final.toString();
            console.log(this.finalCost)
            }
          }
          if(data==null){
            this.snack.open('No user exits, enter a valid username !!','',{
              duration:3000
            })
          }
        }

      );
  }

  public submitForm(){
    this.bookedtrip.username=this.currentUser.username;
    this.bookedtrip.tripname=this.trip.name;
    this.bookedtrip.totalCost=this.finalCost;
    console.log(this.bookedtrip);
    if(this.bookedtrip.startDate=='' || this.bookedtrip.startDate==null){
      this.snack.open('Start Date is required !!','',{
        duration:3000
      })
      return;
    }
    if(this.bookedtrip.endDate=='' || this.bookedtrip.endDate==null){
      this.snack.open('End Date is required !!','',{
        duration:3000
      })
      return;
    }

    this.booktripservice.bookTrip(this.bookedtrip).subscribe(
      (data:any)=>{
        console.log(data);
        Swal.fire('Success',this.bookedtrip.tripname+' is booked !','success')
      },
      (error)=>{
        console.log(error);
         this.snack.open('Something went wrong!!','',{
         duration:3000
     })
  });

  }

}
