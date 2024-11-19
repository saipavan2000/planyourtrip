import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddtripService } from 'src/app/services/addtrip.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addtrip',
  templateUrl: './addtrip.component.html',
  styleUrls: ['./addtrip.component.css']
})
export class AddtripComponent implements OnInit {

  constructor(private tripService:AddtripService,private snack:MatSnackBar) { }

  public tripPackage={
    name:'',
    city:'',
    country:'',
    price:'',
  };

  ngOnInit(): void {
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

    this.tripService.addTrip(this.tripPackage).subscribe(
      (data:any)=>{
        console.log(data);
        Swal.fire('Success','Trip '+this.tripPackage.name+' is added !','success')
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
