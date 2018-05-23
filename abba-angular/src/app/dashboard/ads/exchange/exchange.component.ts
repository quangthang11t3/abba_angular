import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  rows = [
    { prop1: '2018-04-27', prop2: '0',  prop3: '0', prop4: '0', prop5: '0'},
    { prop1: '2018-04-27', prop2: '0',  prop3: '0', prop4: '0', prop5: '0'},
    { prop1: '2018-04-27', prop2: '0',  prop3: '0', prop4: '0', prop5: '0'},
    { prop1: '2018-04-27', prop2: '0',  prop3: '0', prop4: '0', prop5: '0'},
    { prop1: '2018-04-27', prop2: '0',  prop3: '0', prop4: '0', prop5: '0'},
    { prop1: '2018-04-27', prop2: '0',  prop3: '0', prop4: '0', prop5: '0'}    
    
  ];
  columns = [
    { prop: 'prop1', name: 'Ngày' },
    { prop: 'prop2',  name: 'Số lần giao dịch' },
    { prop: 'prop3', name: 'Số nhà QC giao dịch' },
    { prop: 'prop4',name: 'Số tiền giao dịch' },
    { prop: 'prop5',name: 'Số tiền còn nợ' }
  ];

  rows2 = [
    { prop1: 'game đánh bài', prop2: 'ABBA',  prop3: '111', prop4: '111/222', prop5: '111'},
    { prop1: 'game đánh bài', prop2: 'ABBA',  prop3: '111', prop4: '111/222', prop5: '111'},
    { prop1: 'game đánh bài', prop2: 'ABBA',  prop3: '111', prop4: '111/222', prop5: '111'},
    { prop1: 'game đánh bài', prop2: 'ABBA',  prop3: '111', prop4: '111/222', prop5: '111'},
    { prop1: 'game đánh bài', prop2: 'ABBA',  prop3: '111', prop4: '111/222', prop5: '111'},
    { prop1: 'game đánh bài', prop2: 'ABBA',  prop3: '111', prop4: '111/222', prop5: '111'}    
    
  ];
  columns2 = [
    { prop: 'prop1', name: 'Tên app' },
    { prop: 'prop2',  name: 'Tên nhà QC' },
    { prop: 'prop3', name: 'Số tiền đặt cọc' },
    { prop: 'prop4',name: 'Số lượt đã QC' },
    { prop: 'prop5',name: 'Số tiền còn lại' }
  ];

  rows3 = [
    { prop1: 'ABBA', prop2: '0',  prop3: '0', prop4: '0/100', prop5: '0'},
    { prop1: 'ABBA', prop2: '0',  prop3: '0', prop4: '0/100', prop5: '0'},
    { prop1: 'ABBA', prop2: '0',  prop3: '0', prop4: '0/100', prop5: '0'},
    { prop1: 'ABBA', prop2: '0',  prop3: '0', prop4: '0/100', prop5: '0'},
    { prop1: 'ABBA', prop2: '0',  prop3: '0', prop4: '0/100', prop5: '0'},
    { prop1: 'ABBA', prop2: '0',  prop3: '0', prop4: '0/100', prop5: '0'}    
    
  ];
  columns3 = [
    { prop: 'prop1',  name: 'Tên nhà QC' },
    { prop: 'prop2', name: 'Số ứng dụng' },
    { prop: 'prop3', name: 'Số tiền đặt cọc' },
    { prop: 'prop4',name: 'Số lượt đã QC' },
    { prop: 'prop5',name: 'Số tiền còn lại' }
  ];

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.exchange').addClass('active').attr("selected", "selected");
    });
  }

}
