import { Component, OnInit } from '@angular/core';
import { INgxMyDpOptions } from 'ngx-mydatepicker';

@Component({
  selector: 'app-report-filter',
  templateUrl: './report-filter.component.html',
  styleUrls: ['./report-filter.component.css']
})
export class ReportFilterComponent implements OnInit {
  // now: any = new Date()
  model: any ; 
  model1: any ;
  dateOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'dd -mm -yyyy'
  };

  dateOptions2: INgxMyDpOptions = {
    // other options...
    dateFormat: 'dd -mm -yyyy',
  };

  constructor() {}

  ngOnInit() {
  }

  onDateChanged(event) {
    // console.log('time selected', this.model.date)
    // let dateRage = [{begin: {year: 1900, month: 1, day: 1}, end: this.model.date}]
    // this.dateOptions.disableDateRanges = dateRage
  }
}
