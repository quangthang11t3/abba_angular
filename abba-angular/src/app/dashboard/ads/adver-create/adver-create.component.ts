import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adver-create',
  templateUrl: './adver-create.component.html',
  styleUrls: ['./adver-create.component.css']
})
export class AdverCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     $(document).ready(function () {
      $('.adver_create').addClass('active').attr("selected", "selected");
  });
}

}
