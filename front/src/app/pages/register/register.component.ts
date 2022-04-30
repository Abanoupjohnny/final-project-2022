import { Component , OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';

import { Router } from '@angular/router';
// toastr
import { ToastrService } from 'ngx-toastr';
// in global
import { GlobalUserService } from 'src/app/services/user/global-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userRegistrationFormData = new FormGroup({
    firstName: new FormControl('abanoup', Validators.required),
    lastName: new FormControl('johnny', Validators.required),
    email: new FormControl('bebojo@gmail.com', Validators.required),
    phone: new FormControl('01267897543', Validators.required),
    password: new FormControl('123', Validators.required),
    role: new FormControl('user', Validators.required),
  })

  constructor(private globalUserRegistration : GlobalUserService , private toastr:ToastrService , private router : Router) { }

  ngOnInit(): void {
  }

  get firstName(){return this.userRegistrationFormData.get('firstName')}
  get lastName(){return this.userRegistrationFormData.get('lastName')}
  get email(){return this.userRegistrationFormData.get('email')}
  get phone(){return this.userRegistrationFormData.get('phone')}
  get password(){return this.userRegistrationFormData.get('password')}
  get role(){return this.userRegistrationFormData.get('role')}
  get registerData() {return this.userRegistrationFormData.controls}

  handleRegistration() {
    if(this.userRegistrationFormData.valid){
      this.globalUserRegistration.registerUser(this.userRegistrationFormData.value).subscribe(res=>{
        if(res.errors) {
          this.toastr.error(`${res.errors.email[0]} errorr`)
          console.log(res.errors.email[0])
        }
        else {
          this.toastr.success('Register Successfuly')
          this.router.navigateByUrl("/login")
        }
      })
    }
  }
}
