import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-exchange',
  templateUrl: './request-exchange.component.html',
  styleUrls: ['./request-exchange.component.css']
})
export class RequestExchangeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      console.log(1);
    });
  }

}
