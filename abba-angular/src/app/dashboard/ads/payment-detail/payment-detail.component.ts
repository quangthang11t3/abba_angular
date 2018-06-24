import { ChangeDetectionStrategy, Component, OnInit, Input} from '@angular/core';
import { RequestPaymentService } from '../../../shared/services/request-payment.service';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  private requests : any;
  private page: number;
  public loading: boolean;
  public count: number;
  public approved: number;
  public pending: number;

  constructor(
    private toastr: ToastrService,
    private requestPaymentService: RequestPaymentService) { }

  ngOnInit() {
    this.page = 1;
    this.loading = false;
    this.requests = [];
    this.count = 0;
    this.approved = 0;
    this.pending = 0;
    this.getPage(1);
  }

  getPage(page: number) {
    this.loading = true;
    this.requestPaymentService.getCards(page).subscribe((response)=>{
      console.log(response);
      this.loading = false;
      if(response['success']){
        this.requests = [];
        console.log('response:', response);  
        let data = response['data'] && response['data']['requests'];
        this.page = response['data'] && response['data']['index'];
        this.count = response['data'] && response['data']['count'];
        this.approved = response['data'] && response['data']['approved'];
        this.pending = response['data'] && response['data']['pending'];
        console.log('data:', data);
        if(data && data.length > 0){
          data.forEach(element => {
            this.requests.push({
              id: element['id'],
              type: element['type'],
              amount: element['amount'],
              date: element['createdAt'],
              user: element['userId'] && element['userId']['email'],
              code: element['code'],
              serial: element['serial']
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
