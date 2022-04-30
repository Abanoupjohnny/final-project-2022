import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// ReactiveFormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// req http on click handler
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
// ToastrModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MyStoreComponent } from './pages/my-store/my-store.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginInterceptor } from './interceptors/user/login.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    LoginComponent,
    HomeComponent,
    MyStoreComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
