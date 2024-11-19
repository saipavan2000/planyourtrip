import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AddtripService {

  constructor(private http:HttpClient) { }

  public editId:any;

  public addTrip(tripPackage:any){
    return this.http.post(`${baseUrl}/packages/add`,tripPackage,{responseType:'text'});
  }

  public getTrip(){
    return this.http.get(`${baseUrl}/packages/all`);
  }

  public getTripById(id:any){
    return this.http.get(`${baseUrl}/packages/find/${id}`);
  }

  public editTrip(tripPackage:any){
    return this.http.put(`${baseUrl}/packages/update`,tripPackage,{responseType:'text'});
  }

  public deleteTrip(id:any){
    return this.http.delete(`${baseUrl}/packages/delete/${id}`);
  }
}
