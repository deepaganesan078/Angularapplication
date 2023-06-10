import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder, Validators}from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styles: ['input.ng-valid{border-left:5px solid green;}']

})

export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder,private _http:HttpClient,private router:Router,private service:AuthserviceService) {}
   LoginForm:FormGroup|any;
   retUrl:any="";
    ngOnInit(){
      this.LoginForm=new FormGroup({
        "emailid":new FormControl,
        "password":new FormControl
      });
    }


Loginuser(LoginForm:FormGroup)
{
  this._http.get<any>("http://localhost:3000/User").subscribe(res=>{
    const user=res.find((a:any)=>{
      return a.emailid === this.LoginForm.value.emailid && a.password===this.LoginForm.value.password
    });
    if(user)
    {
       alert("successfully logged in");
       this.LoginForm.reset();
       this.service.LoginIn();
       this.router.navigate(['products']);
    }
    else{
      alert("invalid user");
      localStorage.setItem('isLoggedIn', 'false');
      this.router.navigate(['Login']);
    }
  },
  err=>
  {
    alert("something went worng..");
  });
}


}
