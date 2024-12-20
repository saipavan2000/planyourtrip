import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn=false;
  user:any = null;

  constructor(public login:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data)=>{
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
    });
  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }
  public profile(){
    if(this.login.getUserRole()=="ADMIN"){
      this.router.navigate(['admin']);
    }else{
      this.router.navigate(['user']);
    }
  }
}
