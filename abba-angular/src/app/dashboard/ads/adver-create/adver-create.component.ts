import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray} from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
import { AdsService } from '../../../shared/services/ads.service';

@Component({
  selector: 'app-adver-create',
  templateUrl: './adver-create.component.html',
  styleUrls: ['./adver-create.component.css']
})
export class AdverCreateComponent implements OnInit {

  appForm: FormGroup;
  webForm: FormGroup;
  fbForm: FormGroup;
  public loading = false;

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
  }

  step2(component) {
    console.log('component:', component);
    console.log(`.${component}_state1`);
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

  //  event handle
  registerApp(){
    this.loading = true;
    console.log('app');
    console.log(this.appForm.value);
    let data = this.appForm.value;
    this.adsService.checkApp(data.appType, data.appId).subscribe((response)=>{
      console.log(response);
      this.loading = false;
      if(response['success']){
        this.step3();
      } else {
        this.toastr.error('appID not found.');
      }
    },
    error=>{
      console.log(error);
      this.loading = false;
      this.toastr.error('Network error');
    });
  }

  registerWeb(){
    console.log('web');
    console.log(this.webForm.value);
  }

  registerFb(){
    console.log('fb');
    console.log(this.fbForm.value);
  }

  step3(){
    console.log('step3');
  }
}
