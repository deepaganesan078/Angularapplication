import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-Admin',
  templateUrl: './Admin.component.html',
  styleUrls: ['./Admin.component.css']
})
export class AdminComponent implements OnInit {

  pid:any="";
  pname:any=" ";
  quantity:any="";
  price:any="";
  url:any="";
  msg:any="";
  constructor(private http:HttpClient) { }

  ngOnInit() {

  }
  Addproduct(product:any)
  {
    console.warn(product);
    var Myproduct={
      id:this.pid,
      pname:this.pname,
      quantity:this.quantity,
      price:this.price,
      url:this.url,
    };
    this.http.post<any>("http://localhost:3000/products",Myproduct).subscribe(res=>{
      alert("You are successfully added product");
    },err=>{
      alert("something went worng")
    })
  }

}

// select(event:any)
// {
//    if(!event.target.files[0]||event.target.files[0].length==0)
//    {
//      this.msg='you have to select image';
//      return;
//    }

// var mintype=event.target.files[0].type;
// if(mintype.match(/image\/*/)==null)
// {
//   this.msg="only images are supported";
//   return;
// }
// var reader=new FileReader();
// reader.onload=(_event)=>{
//   this.msg="";
//   this.url=reader.result;
//  }
//  reader.readAsDataURL(event.target.files[0]);

// }
