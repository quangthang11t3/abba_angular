import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray} from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
import { AdsService } from '../../../shared/services/ads.service';
import {INgxMyDpOptions} from 'ngx-mydatepicker';

@Component({
  selector: 'app-adver-create',
  templateUrl: './adver-create.component.html',
  styleUrls: ['./adver-create.component.css']
})
export class AdverCreateComponent implements OnInit {

  dateOptions: INgxMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
  };

  appForm: FormGroup;
  webForm: FormGroup;
  fbForm: FormGroup;
  adsForm: FormGroup;
  adsDetailForm: FormGroup;
  ageFroms = [];
  ageTos = [];
  isApp = false;
  public loading = false;
  adsType = -1;

  types = [
    'Trò chơi',
    'Nhạc và phim ảnh',
    'Giáo dục',
    'Sức khỏe làm đẹp',
    'Thiết bị điện tử và phần mềm',
    'Ẩm thực',
    'Thời trang'
  ];

  app = {
    appType: 0,
    appId: '',
    appCampaign: ''
  }

  web = {
    type: 0,
    webUrl: '',
    webCampaign: ''
  }

  fb = {
    type: 0,
    fbUrl: '',
    fbCampaign: ''
  }

  ads = {
    address: '',
    sex: 0,
    ageFrom: 15,
    ageTo: 100,
    isAndroid: true,
    isIos : true
  }

  now = new Date();

  adsDetail = {
    dateFrom: 
      { 
        date: { 
          year: this.now.getFullYear(), 
          month:  this.now.getMonth(), 
          day: this.now.getDay() 
        }
      }
    ,
    dateTo: { 
      date: { 
        year: this.now.getFullYear(), 
        month:  this.now.getMonth(), 
        day: this.now.getDay()
      } 
    },
    amount: 0,
    isInstall: true,
    isView: true,
    keyword: '',
    coin: 0,
    priority: 0,
    type: []
  }

  constructor(
    private toastr: ToastrService,
    private adsService: AdsService
  ) { }

  ngOnInit() {
    $('.adver_create').addClass('display').attr("selected", "selected");
    
    //  forms
    this.appForm = new FormGroup({
      'appType': new FormControl(this.app.appType,[
        Validators.required
      ]),
      'appId': new FormControl(this.app.appId, [
        Validators.required,
        Validators.minLength(6)
      ]),
      'appCampaign': new FormControl(this.app.appCampaign, [
        Validators.required,
        Validators.minLength(6)
      ])
    });

    //  web
    this.webForm = new FormGroup({
      'webUrl': new FormControl(this.web.webUrl, [
        Validators.required,
        Validators.minLength(6)
      ]),
      'webCampaign': new FormControl(this.web.webCampaign, [
        Validators.required,
        Validators.minLength(6)
      ])
    });

    //  fb
    this.fbForm = new FormGroup({
      'fbUrl': new FormControl(this.fb.fbUrl, [
        Validators.required,
        Validators.minLength(6)
      ]),
      'fbCampaign': new FormControl(this.fb.fbCampaign, [
        Validators.required,
        Validators.minLength(6)
      ])
    });

    //  ads
    this.adsForm = new FormGroup({
      'address': new FormControl(this.ads.address, [
        Validators.required,
        Validators.minLength(6)
      ]),
      'sex': new FormControl(this.ads.sex,[

      ]),
      'ageFrom': new FormControl(this.ads.ageFrom,[

      ]),
      'ageTo': new FormControl(this.ads.ageTo,[

      ]),
      'isAndroid': new FormControl(this.ads.isAndroid,[

      ]),
      'isIos': new FormControl(this.ads.isIos, [

      ])
    });

    //  ads detail
    this.adsDetailForm = new FormGroup({
      'dateFrom': new FormControl(this.adsDetail.dateFrom, [
        Validators.required
      ]),
      'dateTo': new FormControl(this.adsDetail.dateTo, [
        Validators.required
      ]),
      'amount': new FormControl(this.adsDetail.amount,[
        Validators.min(1)
      ]),
      'isInstall': new FormControl(this.adsDetail.isInstall),
      'isView': new FormControl(this.adsDetail.isView),
      'keyword': new FormControl(this.adsDetail.keyword),
      'coin': new FormControl(this.adsDetail.coin, [
        Validators.min(1)
      ]),
      'priority': new FormControl(this.adsDetail.priority),
      'type': new FormControl(this.adsDetail.type)
    });

    for(let i = 15; i< 100; i++){
      this.ageFroms.push(i);
      this.ageTos.push(i+1);
    }
  }

  step2(component) {
    $(`.${component}_state1`).css("display", "none");
    $(`.${component}_state2`).css("display", "block");
  }

  //  app
  get appId(){
    return this.appForm.get('appId');
  }

  get appCampaign(){
    return this.appForm.get('appCampaign');
  }

  get appType(){
    return this.appForm.get('appType');
  }

  //  web
  get webUrl(){
    return this.webForm.get('webUrl');
  }

  get webCampaign(){
    return this.webForm.get('webCampaign');
  }

  //  fb
  get fbUrl(){
    return this.fbForm.get('fbUrl');
  }

  get fbCampaign(){
    return this.fbForm.get('fbCampaign');
  }

  get address(){
    return this.adsForm.get('address');
  }

  get sex(){
    return this.adsForm.get('sex');
  }

  get ageFrom(){
    return this.adsForm.get('ageFrom');
  }

  get ageTo(){
    return this.adsForm.get('ageTo');
  }

  get isAndroid(){
    return this.adsForm.get('isAndroid');
  }

  get isIos(){
    return this.adsForm.get('isIos');
  }

  get dateFrom(){
    return this.adsDetailForm.get('dateFrom');
  }
  get dateTo(){
    return this.adsDetailForm.get('dateTo');
  }
  get amount() {
    return this.adsDetailForm.get('amount');
  }
  get isInstall() {
    return this.adsDetailForm.get('isInstall');
  }

  get isView(){
    return this.adsDetailForm.get('isView');
  }
  get keyword(){
    return this.adsDetailForm.get('keyword');
  }
  get coin(){
    return this.adsDetailForm.get('coin');
  }
  get priority(){
    return this.adsDetailForm.get('priority');
  }
  
  get type(){
    return this.adsDetailForm.get('type');
  }

  //  event handle
  registerApp(){
    this.loading = true;
    let data = this.appForm.value;
    let $this = this;
    this.adsService.checkApp(data.appType, data.appId).subscribe((response)=>{
      console.log(response);
      this.loading = false;
      if(response['success']){
        this.isApp = true;
        this.adsType = $this.appForm.value.appType;
        this.step3();
      } else {
        this.toastr.error('appID not found.');
      }
    },
    error=>{
      console.log(error);
      this.loading = false;
      this.toastr.error('Network error');
      this.step3();
    });
  }

  registerWeb(){
    this.loading = true;
    let data = this.webForm.value;
    this.adsService.checkWebUrl(data.webUrl).subscribe((response)=>{
      this.loading = false;
      if(response['success']){
        this.adsType = 2;
        this.step3();
      } else {
        this.toastr.error('website not found.');
      }
    },
    error=>{
      this.loading = false;
      this.toastr.error('Network error');
      this.step3();
    });
  }

  registerFb(){
    let data = this.fbForm.value;

    if(!this.checkFBLink(data.fbUrl)){
      this.toastr.error('Invalid link');
    } else {
      this.adsType = 3;
      this.step3();
    }
  }

  step3(){
    console.log('step3');
    $('.state_1_2').css("display", "none");

    $('.state3').css("display", "block");
  }

  createAds(){
    this.loading = true;
    if(this.adsForm.value.ageFrom >= this.adsForm.value.ageTo){
      this.toastr.error('Độ tuổi không hợp lệ');
      this.loading = false;
      return;
    }
    let platform = 0;
    let isAndroid = this.adsForm.value.isAndroid;
    let isIos = this.adsForm.value.isIos;
    if(isAndroid && isIos) platform = 2;
    else if(isIos) platform =1;
    else if(isAndroid) platform = 0;
    else {
      this.toastr.error('Bạn phải chọn nền tảng.');
      this.loading = false;
      return;
    }
    let startTime = this.adsDetailForm.value.dateFrom;
    let endTime = this.adsDetailForm.value.dateTo;
    let isInstall = this.adsDetailForm.value.isInstall;
    let isView = this.adsDetailForm.value.isView;

    let startDate = new Date(startTime.date.year, startTime.date.month, startTime.date.day);
    let endDate = new Date(endTime.date.year, endTime.date.month, endTime.date.day);

    if(startDate.getTime() >= endDate.getTime()) {
      this.toastr.error('Lịch chạy không hợp lệ');
      this.loading = false;
      return;
    }

    let packages ='';

    if( this.adsType > 1){
      if(!isInstall && !isView){
        this.toastr.error('Bạn phải chọn gói trước');
        this.loading = false;
        return;
      }

      if(isInstall && isView)  packages = '2';
      else if(isInstall) packages = '0';
      else if(isView) packages = '1';
    }

    let link = '';

    if(this.adsType <=1) {
      link = this.appForm.value.appId;
    }

    if(this.adsType === 2) link = this.webForm.value.webUrl;
    if(this.adsType === 3) link = this.fbForm.value.fbUrl;

    let adsObj = {
      address: this.adsForm.value.address,
      sex: this.adsForm.value.sex,
      startAge: this.adsForm.value.ageFrom,
      endAge: this.adsForm.value.ageTo,
      platform: platform,
      type: this.adsType,
      startTime: new Date(startTime.date.year, startTime.date.month, startTime.date.day),
      endTime: new Date(endTime.date.year, endTime.date.month, endTime.date.day),
      amount: this.adsDetailForm.value.amount,
      link: link,
      keyword: this.adsDetailForm.value.keyword,
      coin: this.adsDetailForm.value.coin,
      priority: this.adsDetailForm.value.priority,
      package: packages
    }

    this.adsService.createAds(adsObj).subscribe((response)=>{
      this.loading = false;
      console.log(response);
      if(response['success']){
        this.toastr.success('Create ads success');
        this.cancel();
      } else {
        this.toastr.error('Create ads failed.');
      }
    },
    error=>{
      this.loading = false;
      this.toastr.error('Network error');
    });
  }

  checkFBLink(link){
    return link.indexOf('https://www.facebook.com/groups/') >= 0;
  }

  closeState2(component){
    console.log('click');
    $(`.${component}_state1`).css("display", "block");
    $(`.${component}_state2`).css("display", "none");
  }

  cancel(){
    $('.state_1_2').css("display", "block");
    $('.state3').css("display", "none");
  }
}
