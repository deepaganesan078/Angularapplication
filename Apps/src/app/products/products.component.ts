import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private service:ProductserviceService) { }

  ngOnInit() {
    this.getMyProduct();
  }
Product:any;
getMyProduct()
{
  this.service.getproduct().subscribe(res=>{
    this.Product=res
  });
}
}
