import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
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
    });
  }

}
