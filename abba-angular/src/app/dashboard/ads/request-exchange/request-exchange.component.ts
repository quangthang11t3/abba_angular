import { ChangeDetectionStrategy, Component, OnInit, Input} from '@angular/core';
import { RequestPaymentService } from '../../../shared/services/request-payment.service';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-request-exchange',
  templateUrl: './request-exchange.component.html',
  styleUrls: ['./request-exchange.component.css']
})
export class RequestExchangeComponent implements OnInit {

  private requests : any;
  public page: number;
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
    this.getPage();
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

  getPage() {
    this.loading = true;
    this.requestPaymentService.getAll().subscribe((response)=>{
      this.loading = false;
      if(response['success']){
        let data = response['data'] && response['data']['requests'];
        this.count = response['data'] && response['data']['count'];
        if(data && data.length > 0){
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
