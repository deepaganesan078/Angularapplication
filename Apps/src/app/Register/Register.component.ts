import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../Conformed.validator';
import { HttpClient } from '@angular/common/http';
import { RouteReuseStrategy, Router } from '@angular/router';
@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styles: ['input.ng-valid{border-left:5px solid green;}']
})
export class RegisterComponent implements OnInit {
  constructor(private fb:FormBuilder,private http:HttpClient,private _route:Router) { }
  ngOnInit()
  {

  }

Register=this.fb.group({
  fname:["",[Validators.required,Validators.minLength(5),Validators.pattern('[A-Za-z]+')]],
  lname:["",[Validators.required,Validators.minLength(1),Validators.pattern('[A-Z]+')]],
  emailid:["",[Validators.required,Validators.email]],
  password:["",[Validators.required,Validators.minLength(8),Validators.pattern('[a-z][0-9][@/./*]*')]],
  cpassword:["",[Validators.required,Validators.minLength(8)]],
},{validator:ConfirmedValidator('password','cpassword')});

Submitform(Register:FormGroup)
{
  this.http.post<any>("http://localhost:3000/User",this.Register.value).subscribe(res=>{
    alert("You are successfully signup");
    this.Register.reset();
    this._route.navigate(['Login']);
  },err=>{
    alert("something went worng")
  })
}

}

