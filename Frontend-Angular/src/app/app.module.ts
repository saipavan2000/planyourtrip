import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { authInterceptorProviders} from './services/auth.interceptor';
import { DashboardComponent } from './pages/ADMIN/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/USER/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/ADMIN/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/ADMIN/welcome/welcome.component';
import { TripPackagesComponent } from './pages/ADMIN/trip-packages/trip-packages.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { AddtripComponent } from './pages/ADMIN/addtrip/addtrip.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UpdatetripComponent } from './pages/ADMIN/updatetrip/updatetrip.component';
import { UsersidebarComponent } from './pages/USER/usersidebar/usersidebar.component';
import { UserwelcomeComponent } from './pages/USER/userwelcome/userwelcome.component';
import { UserTripPackagesComponent } from './pages/USER/user-trip-packages/user-trip-packages.component';
import { ConfirmbookingComponent } from './pages/USER/confirmbooking/confirmbooking.component';
import { YourtripsComponent } from './pages/USER/yourtrips/yourtrips.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    TripPackagesComponent,
    AddtripComponent,
    UpdatetripComponent,
    UsersidebarComponent,
    UserwelcomeComponent,
    UserTripPackagesComponent,
    ConfirmbookingComponent,
    YourtripsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
