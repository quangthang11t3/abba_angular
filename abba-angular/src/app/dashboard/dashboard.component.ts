import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalBankService } from '../shared/services/localbank.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private localBankService : LocalBankService
  ) { }

  ngOnInit() {
  }

  logout(){
    // localStorage.removeItem('user');
    // this.router.navigate(['login']);
    this.localBankService.deposit('10000').subscribe(respose => {
      console.log('respose:', respose);
    },
    error => {
      console.log('error:', error);
    });
  }

}
