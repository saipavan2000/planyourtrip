import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddtripService } from 'src/app/services/addtrip.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatetrip',
  templateUrl: './updatetrip.component.html',
  styleUrls: ['./updatetrip.component.css']
})
export class UpdatetripComponent implements OnInit {

  public editId:any;
  constructor(private tripService:AddtripService,private snack:MatSnackBar) { }

  public tripPackage={
    name:'',
    city:'',
    country:'',
    price:'',
  };

  ngOnInit(): void {
    this.editId=this.tripService.editId;
    console.log(this.tripService.getTripById(this.editId));
    this.tripService.getTripById(this.editId).subscribe(
      (data:any)=>{
        this.tripPackage=data;
        console.log(this.tripPackage);
      }
    )
  }

  formSubmit(){
    console.log(this.tripPackage);
    if(this.tripPackage.name==''||this.tripPackage.name==null){
      this.snack.open('Trip Name is required !!','',{
        duration:3000
      })
      return;
    }
    if(this.tripPackage.city==''||this.tripPackage.city==null){
      this.snack.open('City is required !!','',{
        duration:3000
      })
      return;
    }
    if(this.tripPackage.country==''||this.tripPackage.country==null){
      this.snack.open('Country is required !!','',{
        duration:3000
      })
      return;
    }
    if(this.tripPackage.price==''||this.tripPackage.price==null){
      this.snack.open('Price is required !!','',{
        duration:3000
      })
      return;
    }

    this.tripService.editTrip(this.tripPackage).subscribe(
      (data:any)=>{
        console.log(data);
        Swal.fire('Success',this.tripPackage.name+' is updated !','success')

      },
      (error)=>{
         console.log(error);
          this.snack.open('Something went wrong!!','',{
          duration:3000
      })
    });

  }

  public reloadPage(){
    window.location.reload();
  }


}
