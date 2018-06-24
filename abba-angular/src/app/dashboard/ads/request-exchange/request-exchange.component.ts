import { ChangeDetectionStrategy, Component, OnInit, Input} from '@angular/core';
import { RequestPaymentService } from '../../../shared/services/request-payment.service';
import { ToastrService} from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  private searchForm: FormGroup;
  private search = {
    email: '',
    datefrom: 0,
    dateto: 0
  };

  constructor(
    private toastr: ToastrService,
    private requestPaymentService: RequestPaymentService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'email': new FormControl(this.search.email, [
        Validators.required,
        Validators.email
      ])
    });
    this.page = 1;
    this.loading = false;
    this.requests = [];
    this.count = 0;
    this.getPage(1);
  }

  get email(){
    return this.searchForm.get('email');
  }

  pay(id) {
    this.loading = true;
    this.requestPaymentService.pay(id).subscribe((response)=>{
      this.loading = false;
      console.log(response);
      if(response['success']){
        $(`.${id}`).hide();
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

  getPage(page: number) {
    this.loading = true;
    this.requestPaymentService.getAll(page).subscribe((response)=>{
      console.log(response);
      this.loading = false;
      if(response['success']){
        this.requests = [];
        console.log('response:', response);
        let data = response['data'] && response['data']['requests'];
        this.page = response['data'] && response['data']['index'];
        this.count = response['data'] && response['data']['count'];
        console.log('data:', data);
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
