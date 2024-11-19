import { Component, OnInit } from '@angular/core';
import { BooktripService } from 'src/app/services/booktrip.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-yourtrips',
  templateUrl: './yourtrips.component.html',
  styleUrls: ['./yourtrips.component.css']
})
export class YourtripsComponent implements OnInit {
  public bookedtrips=[{
    id:'',
    username:'',
    tripname:'',
    startDate:'',
    endDate:'',
    totalCost:'',
   }];

   public dataflag=false;
  constructor(private booktripservice:BooktripService,private login:LoginService) { }

  user:any=null;

  ngOnInit(): void {
    this.user=this.login.getUser();
    this.getTrips();
  }
  public getTrips(){
    this.booktripservice.getbookedtrips(this.user.username).subscribe(
      (data:any)=>{
        this.bookedtrips=data;

        console.log(data);
      },
    (error)=>{
        alert("Error")
      });
  }

  public deleteTrip(id:any){

    Swal.fire({
      icon:'warning',
      title: "Are you sure ?",
      confirmButtonText:'Cancel Trip',
      cancelButtonText:'No',
      showCancelButton:true,
    }).then((result)=>{
      if(result.isConfirmed){
        this.booktripservice.cancelTrip(id).subscribe(
          (data)=>{
            this.bookedtrips=this.bookedtrips.filter((trip)=>trip.id!=id);
            Swal.fire('Success','Trip Cancelled !!','success');
          },
          (error)=>{
            Swal.fire('Error','Error is cancelling trip','error');
          });
      }
    })



  }

}
