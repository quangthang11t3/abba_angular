import { ChangeDetectionStrategy, Component, OnInit, Input} from '@angular/core';
import { RequestPaymentService } from '../../../shared/services/request-payment.service';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-request-exchange',
  templateUrl: './request-exchange.component.html',
  styleUrls: ['./request-exchange.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class RequestExchangeComponent implements OnInit {

  private requests : any;
  private page: number;
  public loading: boolean;
  public count: number;
  public queryString: string;
  public filter: string;

  constructor(
    private toastr: ToastrService,
    private requestPaymentService: RequestPaymentService) { }

  ngOnInit() {
    this.page = 1;
    this.loading = false;
    this.requests = [];
    this.count = 0;
    this.filter = '';
    this.getPage(1);
  }

  pay(id) {
    this.loading = true;
    this.requestPaymentService.pay(id).subscribe((response)=>{
      this.loading = false;
      console.log(response);
      if(response['success']){
        this.removeRequest(id);
        this.toastr.success('Thanh toán thành công.');
      } else {
        this.toastr.error('Thanh toán thất bại.');
      }
    },
    error=>{
      this.loading = false;
      this.toastr.error('Network error');
    });
  }

  removeRequest(id){
    for(let i =0; i< this.requests.length; i++){
      if(this.requests[i].id === id){
        this.requests.splice(i, 1);
        break;
      }
    }
  }

  getPage(page: number) {
    this.loading = true;
    this.requestPaymentService.getAll(page).subscribe((response)=>{
      this.loading = false;
      if(response['success']){
        this.requests = [];
        let data = response['data'] && response['data']['requests'];
        this.page = response['data'] && response['data']['index'];
        this.count = response['data'] && response['data']['count'];
        if(data.length > 0){
          data.forEach(element => {
            this.requests.push({
              id: element['id'],
              type: element['type'],
              amount: element['amount'],
              date: element['createdAt'],
              phone: element['phone'],
              user: element['userId'] && element['userId']['email']
            });
          });
        }
      } else {
        this.toastr.error('Cannot get list request.');
      }
    },
    error=>{
      this.loading = false;
      this.toastr.error('Network error');
    });
  }
}
