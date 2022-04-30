import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GlobalUserService } from 'src/app/services/user/global-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginFormData = new FormGroup({
    email: new FormControl('bebojo@gmail.com', Validators.required),
    password: new FormControl('123', Validators.required),
    role: new FormControl('admin', Validators.required)
  })
  constructor(private globalUserLogin: GlobalUserService, private toastr:ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  get email() {return this.userLoginFormData.get('email')}
  get password() {return this.userLoginFormData.get('password')}
  get role() {return this.userLoginFormData.get('role')}
  get userLoginData() {return this.userLoginFormData.controls}

  handleLoginUser(){
    if(this.userLoginFormData.valid){
      this.globalUserLogin.loginUser(this.userLoginFormData.value).subscribe(res => {
        if(res.error){
          this.toastr.error("unauthorized")         
        }
        else{
          localStorage.setItem("token" , res.data.token)
          this.toastr.success('Login Successfuly')
          this.router.navigate(['products'])
        }
      },(err)=>{
        console.log(err)
        this.toastr.error(err.error.message)
      },()=>{

      })
    }
  }

}
