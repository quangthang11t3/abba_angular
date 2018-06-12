import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  rows = [
    { prop1: '2018-04-27', prop2: '0',  prop3: '0/500', prop4: '0/200', prop5: '0/100',  prop6: '0', },
    { prop1: '2018-04-27', prop2: '0',  prop3: '0/500', prop4: '0/200', prop5: '0/100',  prop6: '0', },
    { prop1: '2018-04-27', prop2: '0',  prop3: '0/500', prop4: '0/200', prop5: '0/100',  prop6: '0', },
    { prop1: '2018-04-27', prop2: '0',  prop3: '0/500', prop4: '0/200', prop5: '0/100',  prop6: '0', },
    { prop1: '2018-04-27', prop2: '0',  prop3: '0/500', prop4: '0/200', prop5: '0/100',  prop6: '0', },
    { prop1: '2018-04-27', prop2: '0',  prop3: '0/500', prop4: '0/200', prop5: '0/100',  prop6: '0', }    
  ];

  columns = [
    { prop: 'prop1', name: 'Ngày' },
    { prop: 'prop2',  name: 'Tổng số user' },
    { prop: 'prop3', name: 'Số user hoạt động' },
    { prop: 'prop4',name: 'Số user bị khóa' },
    { prop: 'prop5',name: 'Số user không hoạt động' },
    { prop: 'prop6',name: 'Vừa là user vừa là NQC' }    
  ];

  rows2 = [
    { prop1: '2018-04-30', prop2: '1234',  prop3: '111/333', prop4: '111/222', prop5: '111/450'},
    { prop1: '2018-04-30', prop2: '1234',  prop3: '111/333', prop4: '111/222', prop5: '111/450'},
    { prop1: '2018-04-30', prop2: '1234',  prop3: '111/333', prop4: '111/222', prop5: '111/450'},
    { prop1: '2018-04-30', prop2: '1234',  prop3: '111/333', prop4: '111/222', prop5: '111/450'},
    { prop1: '2018-04-30', prop2: '1234',  prop3: '111/333', prop4: '111/222', prop5: '111/450'},
    { prop1: '2018-04-30', prop2: '1234',  prop3: '111/333', prop4: '111/222', prop5: '111/450'}    
    
  ];
  columns2 = [
    { prop: 'prop1', name: 'Ngày' },
    { prop: 'prop2',  name: 'Tổng số nhà QC' },
    { prop: 'prop3', name: 'Số nhà QC hoạt động' },
    { prop: 'prop4', name: 'Số NQC bị khóa' },
    { prop: 'prop5', name: 'Số NQC không hoạt động' }
  ];

  constructor() { }

  ngOnInit() {
    $('.other').addClass('active').attr("selected", "selected");
  }

}
