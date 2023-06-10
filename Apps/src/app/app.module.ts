import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { AdminComponent } from './Admin/Admin.component';
import { CustomerComponent } from './Customer/Customer.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { EditProductsComponent } from './EditProducts/EditProducts.component';
@NgModule({
  declarations: [	
    AppComponent,
      HomeComponent,
      LoginComponent,
      RegisterComponent,
      AdminComponent,
      CustomerComponent,
      ProductsComponent,
      EditProductsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
