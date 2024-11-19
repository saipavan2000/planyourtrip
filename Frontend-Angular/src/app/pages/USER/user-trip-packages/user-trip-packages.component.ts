import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddtripService } from 'src/app/services/addtrip.service';
import { BooktripService } from 'src/app/services/booktrip.service';
import { ConfirmbookingComponent } from '../confirmbooking/confirmbooking.component';

@Component({
  selector: 'app-user-trip-packages',
  templateUrl: './user-trip-packages.component.html',
  styleUrls: ['./user-trip-packages.component.css']
})
export class UserTripPackagesComponent implements OnInit {

  public trips=[{
    id:'',
    name:'',
    city:'',
    country:'',
    price:'',
   }];

  constructor(private tripService:AddtripService,private dialog: MatDialog,private snack:MatSnackBar,private booktripservice:BooktripService) { }

  ngOnInit(): void {
    this.getAllTrips();
  }
  public getAllTrips(){
    this.tripService.getTrip().subscribe({
      next:(data:any)=>{
        console.log(data);
        this.trips=data;

      },
      error:(error)=>{
        alert("Error")
      }
    });
  }

  public openBookingDialog(id:any){
    this.booktripservice.bookTripId=id;
    this.dialog.open(ConfirmbookingComponent, {
      width:'auto',
    });
  }




}
