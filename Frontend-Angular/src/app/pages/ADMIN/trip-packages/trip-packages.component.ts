import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddtripService } from 'src/app/services/addtrip.service';
import { AddtripComponent } from '../addtrip/addtrip.component';
import { Dialog } from '@angular/cdk/dialog';
import { UpdatetripComponent } from '../updatetrip/updatetrip.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trip-packages',
  templateUrl: './trip-packages.component.html',
  styleUrls: ['./trip-packages.component.css']
})
export class TripPackagesComponent implements OnInit {

 public trips=[{
  id:'',
  name:'',
  city:'',
  country:'',
  price:'',
 }];

  constructor(private dialog: MatDialog,private snack:MatSnackBar,private tripService:AddtripService) { }

  ngOnInit(): void {
    this.getAllTrips();
  }


  public openDialog() {
    this.dialog.open(AddtripComponent, {
      width:"30%",
    });
  }

  public getAllTrips(){
    this.tripService.getTrip().subscribe({
      next:(data:any)=>{
        this.trips=data;

      },
      error:(error)=>{
        alert("Error")
      }
    });
  }
  public editTrip(id:any){
    this.tripService.editId=id;
    this.dialog.open(UpdatetripComponent,{
      width:'30%',
    })
  }

  public deleteTrip(id:any){

    Swal.fire({
      icon:'warning',
      title:'Are you Sure!',
      confirmButtonText:'Delete',
      cancelButtonText:'Cancel',
      showCancelButton:true
    }).then((result)=>{
      if(result.isConfirmed){
        this.tripService.deleteTrip(id).subscribe(
          (data:any)=>{
            this.trips=this.trips.filter((trip)=>trip.id!=id)
            Swal.fire('Success','Trip Deleted','success');
          },
          (error)=>{
            Swal.fire('Error','Error is deleting trip','error');
          }
        )
      }
    })

  }

}
