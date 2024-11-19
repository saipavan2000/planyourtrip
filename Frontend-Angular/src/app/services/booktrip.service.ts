import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class BooktripService {

  constructor(private http:HttpClient) { }

  public bookTripId:any;

  public getUserByName(name:any){
    return this.http.get(`${baseUrl}/user/${name}`);
  }

  public bookTrip(bookedtrip:any){
    return this.http.post(`${baseUrl}/booktrip/`,bookedtrip,{responseType:'text'});
  }

  public getbookedtrips(username:any){
    return this.http.get(`${baseUrl}/booktrip/${username}`)
  }

  public cancelTrip(id:any){
    return this.http.delete(`${baseUrl}/booktrip/cancel/${id}`);
  }
}
