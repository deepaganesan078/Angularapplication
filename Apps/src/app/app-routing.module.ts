import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './Admin/Admin.component';
import { CustomerComponent } from './Customer/Customer.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { AuthGuard } from './auth.guard';
import { EditProductsComponent } from './EditProducts/EditProducts.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },

  {
    path:"products",
    component:ProductsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"Editproducts",
    component:EditProductsComponent
  },
  {
    path:"Admin",
    component:AdminComponent
  },
  {
    path:"Customer",
    component:CustomerComponent
  },
  {
    path:"Login",
    component:LoginComponent
  },
  {
    path:"Register",
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
