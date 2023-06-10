import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private route:Router) { }
  LoginIn()
  {
    return localStorage.setItem('isLoggedIn','true');
  }
  loggedIn()
  {
    return localStorage.getItem('isLoggedIn');
  }
  logout()
  {
    localStorage.removeItem('isLoggedIn');
    this.route.navigate([''])
  }
}
