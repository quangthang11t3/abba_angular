import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  loginForm: FormGroup;
  msg : string;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService){}

  ngOnInit() {
    $('#signuplink').click(function(){
      $('#loginbox').hide(); 
      $('#signupbox').show()
    });

    $('#signinlink').click(function(){
      $('#signupbox').hide();
      $('#loginbox').show();
    });

    // $('#signuplink').click(function(){
    //   $('#loginbox').hide(); 
    //   $('#signupbox').slideDown()
    // });

    // $('#signinlink').click(function(){
    //   $('#signupbox').hide();
    //   $('#loginbox').slideDown();
    // });

    this.loginForm = new FormGroup({
      'password': new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(6)
      ]),
      'email': new FormControl(this.user.email, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/)
      ])
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
      return this.loginForm.get('password');
  }

  login() {
    console.log('Login');
    this.toastr.success('Login');
    this.loginService.login('viettienbk@gmail.com', '123456').subscribe((response)=> {
      if(response['success']){
        console.log('login thanh cong');
      } else{
        console.log('login that bai');
        console.log(response);
        // let errors = response['error'];
        // console.log('loi:', errors[0].msg);
      }
    },
    error=> {
      console.log('error:', error.message);
      this.toastr.success("asfasdf");
    });
  }

}
