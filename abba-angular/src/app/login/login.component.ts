import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICountry } from 'ngx-country-picker';
import { CountryPickerService } from 'ngx-country-picker';
import { User } from '../models/user';

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
  public countries: ICountry[] = [];
  public loading = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService,
    protected countryPicker: CountryPickerService){}

  ngOnInit() {
    let user = localStorage.getItem('user');
    if(user) {
      this.router.navigate(['dashboard']);
    }
    this.countryPicker.getCountries()
      .subscribe((countries: ICountry[]) => this.countries = countries);
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
    this.loading = true;
    let data = this.loginForm.value;
    this.loginService.login(data.email, data.password).subscribe((response)=> {
      this.loading = false;
      if(response['success']){
        let user = new User(response['data'].data);
        let userJson = JSON.stringify(user);
        localStorage.setItem('user', userJson);
        this.router.navigate(['dashboard']);
      } else{
        let errors = response['error'];
        if(errors instanceof Object){
          console.log(errors);
          this.toastr.error(errors[0].msg);
        } else {
          this.toastr.error(errors);
        }
      }
    },
    error=> {
      this.loading = false;
      this.toastr.error('Network error');
    });
  }
}
