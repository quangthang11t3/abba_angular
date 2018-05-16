import { Component, ViewChild, OnInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.css']
})
export class EarningsComponent implements OnInit {
  rows = [
    // { date: '2018-04-27', name1: '0'}
    { date: '2018-04-27', 'Số lần tương tác web': '0'}
    
  ];
  columns = [
    { prop: 'date' },
    { name: 'Số lần tương tác web' }
    // { name: 'name1' }
    
    // { name: 'Số lần tương tác web' },
    // { name: 'Số lần like fanpage' },
    // { name: 'Số lần xem video' },
    // { name: 'Số lần chia sẻ' },
    // { name: 'Số coin đổi thưởng' },
    // { name: 'Tổng coin kiếm được' },
    // { name: 'Số nhà QC hoạt động' }    
  ];

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.earnings').addClass('active').attr("selected", "selected");
    });
  }

}
