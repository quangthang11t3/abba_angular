import { Component, OnInit } from '@angular/core';
import { INgxMyDpOptions } from 'ngx-mydatepicker';

@Component({
  selector: 'app-report-filter',
  templateUrl: './report-filter.component.html',
  styleUrls: ['./report-filter.component.css']
})
export class ReportFilterComponent implements OnInit {
  model1: any ; 
  model2: any ;
  dateOptions1: INgxMyDpOptions = {
    dateFormat: 'dd -mm -yyyy'
  };

  dateOptions2: INgxMyDpOptions = {
    dateFormat: 'dd -mm -yyyy',
  };

  constructor() {}

  ngOnInit() {
  }

  onDateChanged(event) {
  }
}
