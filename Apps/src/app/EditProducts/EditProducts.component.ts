import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-EditProducts',
  templateUrl: './EditProducts.component.html',
  styleUrls: ['./EditProducts.component.css']
})
export class EditProductsComponent implements OnInit {

  constructor(private service:ProductserviceService,private http:HttpClient) { }

  ngOnInit() {
    this.getMyProduct();
  }
  Product:any;
  getMyProduct()
  {
    this.service.getproduct().subscribe(res=>{
      this.Product=res;
    });
  }
  deleteproduct(productid:any)
  {
    const url= 'http://localhost:3000/products/'+productid;
    this.http.delete(url).subscribe(res=>
      {
        alert(productid +" is deleted succesfully");
      })
  }
}
