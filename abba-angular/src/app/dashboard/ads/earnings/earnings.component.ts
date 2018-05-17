import { Component, ViewChild, OnInit } from '@angular/core';

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

      $(function() {
        $('#datetimepicker1').datetimepicker({
            format: 'DD/MM/YYYY'
        });
        $('#datetimepicker2').datetimepicker({
            format: 'DD/MM/YYYY',
            useCurrent: false //Important! See issue #1075
        });
        $("#datetimepicker1").on("dp.change", function(e) {
            $('#datetimepicker2').data("DateTimePicker").minDate(e.date);
        });
        $("#datetimepicker2").on("dp.change", function(e) {
            $('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
        });
    });
    });
  }

}
