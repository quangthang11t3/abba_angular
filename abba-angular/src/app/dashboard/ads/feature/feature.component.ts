import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.promotion').addClass('active').attr("selected", "selected");
      $('.data_cnt .data_cnt_inner .submit').hide();
    });
  }

}
