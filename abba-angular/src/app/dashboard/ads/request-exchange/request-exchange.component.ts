import { ChangeDetectionStrategy, Component, OnInit, Input} from '@angular/core';
import { RequestPaymentService } from '../../../shared/services/request-payment.service';
import { ToastrService} from 'ngx-toastr';
import {PaginationInstance} from 'ngx-pagination';

@Component({
  selector: 'app-request-exchange',
  templateUrl: './request-exchange.component.html',
  styleUrls: ['./request-exchange.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class RequestExchangeComponent implements OnInit {

  @Input('data') meals: string[] = [];

  private requests : any;
  private page: number;
  public loading: boolean;
  public count: number;
  public email: string;

  constructor(
    private toastr: ToastrService,
    private requestPaymentService: RequestPaymentService) { }

  ngOnInit() {
    this.page = 1;
    this.loading = false;
    this.requests = [];
    this.count = 0;
    // this.getAllRequest();
    this.getPage(1);
  }

  getAllRequest(){
    this.requestPaymentService.getAll(this.page).subscribe((response)=>{
      console.log(response);
      this.loading = false;
      if(response['success']){
        this.requests = [];
        console.log('response:', response);
        let data = response['data']['requests'];
        this.page = response['data']['index'];
        this.count = response['data']['count'];
        console.log('data:', data);
        if(data.length > 0){
          data.forEach(element => {
            this.requests.push({
              id: element['id'],
              type: element['type'],
              amount: element['amount'],
              date: element['createdAt'],
              user: element['userId']['email']
            });
          });
          console.log(this.requests);
        }
      } else {
        this.toastr.error('Cannot get list request.');
      }
    },
    error=>{
      console.log(error);
      this.loading = false;
      this.toastr.error('Network error');
    });
  }

  pay(id) {
    console.log('pay:', id);
  }

  getPage(page: number) {
    this.loading = true;
    this.requestPaymentService.getAll(page).subscribe((response)=>{
      console.log(response);
      this.loading = false;
      if(response['success']){
        this.requests = [];
        console.log('response:', response);
        let data = response['data']['requests'];
        this.page = response['data']['index'];
        this.count = response['data']['count'];
        console.log('data:', data);
        if(data.length > 0){
          data.forEach(element => {
            this.requests.push({
              id: element['id'],
              type: element['type'],
              amount: element['amount'],
              date: element['createdAt'],
              user: element['userId']['email']
            });
          });
          console.log(this.requests);
        }
      } else {
        this.toastr.error('Cannot get list request.');
      }
    },
    error=>{
      console.log(error);
      this.loading = false;
      this.toastr.error('Network error');
    });
  }

}
