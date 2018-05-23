import { Component, OnInit } from '@angular/core';
import { ICountry } from 'ngx-country-picker';
import { CountryPickerService } from 'ngx-country-picker';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public countries: ICountry[] = [];
  constructor(protected countryPicker: CountryPickerService) { }

  ngOnInit() {
    this.countryPicker.getCountries()
      .subscribe((countries: ICountry[]) => this.countries = countries);
    
    $(document).ready(function() {
      // $('#signuplink').click(function(){
      //   $('#loginbox').hide(); 
      //   $('#signupbox').show()
      // });

      // $('#signinlink').click(function(){
      //   $('#signupbox').hide();
      //   $('#loginbox').show();
      // });

      $('#signuplink').click(function(){
        $('#loginbox').hide(); 
        $('#signupbox').slideDown()
      });

      $('#signinlink').click(function(){
        $('#signupbox').hide();
        $('#loginbox').slideDown();
      });
    });
  }

}
