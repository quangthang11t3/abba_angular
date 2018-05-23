import { Component, ViewChild, OnInit } from '@angular/core';


@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.css']
})
export class EarningsComponent implements OnInit {
  rows = [
    { prop1: '2018-04-27', prop2: '0',  prop3: '0', prop4: '0', prop5: '0', prop6: '0', prop7: '0', prop8: '0', prop9: '0', },
    { prop1: '2018-04-27', prop2: '0',  prop3: '0', prop4: '0', prop5: '0', prop6: '0', prop7: '0', prop8: '0', prop9: '0', },
    { prop1: '2018-04-27', prop2: '0',  prop3: '0', prop4: '0', prop5: '0', prop6: '0', prop7: '0', prop8: '0', prop9: '0', },
    { prop1: '2018-04-27', prop2: '0',  prop3: '0', prop4: '0', prop5: '0', prop6: '0', prop7: '0', prop8: '0', prop9: '0', },
    { prop1: '2018-04-27', prop2: '0',  prop3: '0', prop4: '0', prop5: '0', prop6: '0', prop7: '0', prop8: '0', prop9: '0', },
    { prop1: '2018-04-27', prop2: '0',  prop3: '0', prop4: '0', prop5: '0', prop6: '0', prop7: '0', prop8: '0', prop9: '0', }    
    
  ];
  columns = [
    { prop: 'prop1', name: 'Ngày' },
    { prop: 'prop2',  name: 'Số lượt tải ứng dụng' },
    { prop: 'prop3', name: 'Số lần tương tác web' },
    { prop: 'prop4',name: 'Số lần like fanpage' },
    { prop: 'prop5',name: 'Số lần xem video' },
    { prop: 'prop6',name: 'Số lần chia sẻ' },
    { prop: 'prop7',name: 'Số coin đổi thưởng' },
    { prop: 'prop8',name: 'Tổng coin kiếm được' },
    { prop: 'prop9',name: 'Số nhà QC hoạt động' } 
  ];

  rows2 = [
    { prop1: '2018-04-27', prop2: 'Máu và Oxi',  prop3: '111', prop4: '111', prop5: '111', prop6: '111', prop7: '111', prop8: '111'},
    { prop1: '2018-04-27', prop2: 'Máu và Oxi',  prop3: '111', prop4: '111', prop5: '111', prop6: '111', prop7: '111', prop8: '111'},
    { prop1: '2018-04-27', prop2: 'Máu và Oxi',  prop3: '111', prop4: '111', prop5: '111', prop6: '111', prop7: '111', prop8: '111'},
    { prop1: '2018-04-27', prop2: 'Máu và Oxi',  prop3: '111', prop4: '111', prop5: '111', prop6: '111', prop7: '111', prop8: '111'},
    { prop1: '2018-04-27', prop2: 'Máu và Oxi',  prop3: '111', prop4: '111', prop5: '111', prop6: '111', prop7: '111', prop8: '111'},
    { prop1: '2018-04-27', prop2: 'Máu và Oxi',  prop3: '111', prop4: '111', prop5: '111', prop6: '111', prop7: '111', prop8: '111'}    
    
  ];
  columns2 = [
    { prop: 'prop1', name: 'Tài khoản' },
    { prop: 'prop2',  name: 'Số app tải' },
    { prop: 'prop3', name: 'Số lần tương tác web' },
    { prop: 'prop4',name: 'Số lần like fanpage' },
    { prop: 'prop5',name: 'Số lần xem video' },
    { prop: 'prop6',name: 'Số lần chia sẻ' },
    { prop: 'prop7',name: 'Số nhà QC' },
    { prop: 'prop8',name: 'Tổng coin kiếm được' }
  ];

  rows3 = [
    { prop1: 'game đánh bài', prop2: '0',  prop3: '0', prop4: '0', prop5: '0', prop6: '0', prop7: 'ABBA', prop8: '0'},
    { prop1: 'game đánh bài', prop2: '0',  prop3: '0', prop4: '0', prop5: '0', prop6: '0', prop7: 'ABBA', prop8: '0'},
    { prop1: 'game đánh bài', prop2: '0',  prop3: '0', prop4: '0', prop5: '0', prop6: '0', prop7: 'ABBA', prop8: '0'},
    { prop1: 'game đánh bài', prop2: '0',  prop3: '0', prop4: '0', prop5: '0', prop6: '0', prop7: 'ABBA', prop8: '0'},
    { prop1: 'game đánh bài', prop2: '0',  prop3: '0', prop4: '0', prop5: '0', prop6: '0', prop7: 'ABBA', prop8: '0'},
    { prop1: 'game đánh bài', prop2: '0',  prop3: '0', prop4: '0', prop5: '0', prop6: '0', prop7: 'ABBA', prop8: '0'}    
    
  ];
  columns3 = [
    { prop: 'prop1', name: 'Tên app/fanpage/video...' },
    { prop: 'prop2',  name: 'Số lượt tải' },
    { prop: 'prop3', name: 'Số tài khoản tải' },
    { prop: 'prop4',name: 'Số lần like' },
    { prop: 'prop5',name: 'Số lần xem video' },
    { prop: 'prop6',name: 'Số lần chia sẻ' },
    { prop: 'prop7',name: 'Tên nhà QC' },
    { prop: 'prop8',name: 'Số nhà QC hoạt động' } 
  ];

  rows4 = [
    { prop1: 'ABBA', prop2: '0',  prop3: '0', prop4: '0', prop5: '0', prop6: '0', prop7: '0', prop8: '0', prop9: '0', prop10: '0', },
    { prop1: 'ABBA', prop2: '0',  prop3: '0', prop4: '0', prop5: '0', prop6: '0', prop7: '0', prop8: '0', prop9: '0', prop10: '0', },
    { prop1: 'ABBA', prop2: '0',  prop3: '0', prop4: '0', prop5: '0', prop6: '0', prop7: '0', prop8: '0', prop9: '0', prop10: '0', },
    { prop1: 'ABBA', prop2: '0',  prop3: '0', prop4: '0', prop5: '0', prop6: '0', prop7: '0', prop8: '0', prop9: '0', prop10: '0', },
    { prop1: 'ABBA', prop2: '0',  prop3: '0', prop4: '0', prop5: '0', prop6: '0', prop7: '0', prop8: '0', prop9: '0', prop10: '0', },
    { prop1: 'ABBA', prop2: '0',  prop3: '0', prop4: '0', prop5: '0', prop6: '0', prop7: '0', prop8: '0', prop9: '0', prop10: '0', }    
    
  ];
  columns4 = [
    { prop: 'prop1', name: 'Tên nhà phát triển' },
    { prop: 'prop2',  name: 'Số lượt tải' },
    { prop: 'prop3', name: 'Số tài khoản tải' },
    { prop: 'prop4',name: 'Số lần like' },
    { prop: 'prop5',name: 'Số lần xem video' },
    { prop: 'prop6',name: 'Số lần chia sẻ' },
    { prop: 'prop7',name: 'Số ứng dụng được tải, like,...' },
    { prop: 'prop8',name: 'Tổng tiền nạp vào' },
    { prop: 'prop9',name: 'Số tiền đã tiêu' },
    { prop: 'prop10',name: 'Số tiền còn lại' }     
  ];


  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.earnings').addClass('active').attr("selected", "selected");
    });
  }

}
