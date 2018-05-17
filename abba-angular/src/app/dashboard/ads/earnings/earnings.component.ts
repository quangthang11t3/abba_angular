import { Component, ViewChild, OnInit } from '@angular/core';


@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.css']
})
export class EarningsComponent implements OnInit {
  rows = [
    // { date: '2018-04-27', name1: '0'}
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
    // { date: '2018-04-27', name1: '0'}
    { prop1: '2018-04-27', prop2: '111',  prop3: '111', prop4: '111', prop5: '111', prop6: '111', prop7: '111', prop8: '111', prop9: '111', },
    { prop1: '2018-04-27', prop2: '111',  prop3: '111', prop4: '111', prop5: '111', prop6: '111', prop7: '111', prop8: '111', prop9: '111', },
    { prop1: '2018-04-27', prop2: '111',  prop3: '111', prop4: '111', prop5: '111', prop6: '111', prop7: '111', prop8: '111', prop9: '111', },
    { prop1: '2018-04-27', prop2: '111',  prop3: '111', prop4: '111', prop5: '111', prop6: '111', prop7: '111', prop8: '111', prop9: '111', },
    { prop1: '2018-04-27', prop2: '111',  prop3: '111', prop4: '111', prop5: '111', prop6: '111', prop7: '111', prop8: '111', prop9: '111', },
    { prop1: '2018-04-27', prop2: '111',  prop3: '111', prop4: '111', prop5: '111', prop6: '111', prop7: '111', prop8: '111', prop9: '111', }    
    
  ];
  columns2 = [
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

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.earnings').addClass('active').attr("selected", "selected");

    //   $(function() {
    //     $('#datetimepicker1').datetimepicker({
    //         format: 'DD/MM/YYYY'
    //     });
    //     $('#datetimepicker2').datetimepicker({
    //         format: 'DD/MM/YYYY',
    //         useCurrent: false //Important! See issue #1075
    //     });
    //     $("#datetimepicker1").on("dp.change", function(e) {
    //         $('#datetimepicker2').data("DateTimePicker").minDate(e.date);
    //     });
    //     $("#datetimepicker2").on("dp.change", function(e) {
    //         $('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
    //     });
    // });
    });
  }

}
