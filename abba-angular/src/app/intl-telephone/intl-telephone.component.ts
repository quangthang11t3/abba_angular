// import { Component, Output, Input, OnInit, EventEmitter, ViewChild } from '@angular/core';
// import { CountryCode } from './resource/country-code';
// import { Country } from './model/country.model';
// import * as _ from 'google-libphonenumber';

// import * as $ from 'jquery'
// @Component({
//   selector: 'gocar-intl-tel-input',
//   templateUrl: './intl-telephone.html'
// })
// export class GocarIntlTelInputComponent implements OnInit {
//   @Input() value = '';
//   @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
//   @ViewChild('telephone') inputTel: any
//   phone_number = '';
//   dropdownWidth: string
//   isToggle:boolean = false
//   allCountries: Array<Country> = [];
//   preferredCountriesInDropDown: Array<Country> = [];
//   selectedCountry: Country = new Country();
//   constructor(
//       private countryCodeData: CountryCode
//   ) {
//     this.fetchCountryData();
//   }

//   ngOnInit() {
//     this.dropdownWidth = $('#telephone').width() + 'px'
//   }

//   public onPhoneNumberChange(): void {
//     this.value = this.selectedCountry.dialCode + this.phone_number;
//     this.valueChange.emit({value: this.value, dialCode: this.selectedCountry.dialCode, phone: this.phone_number});
//   }

//   public onCountrySelect(country: Country, el): void {
//     this.selectedCountry = country;
//     this.isToggle = !this.isToggle
//     if (this.phone_number.length > 0) {
//       this.value = this.selectedCountry.dialCode + this.phone_number;
//       this.valueChange.emit({value: this.value, dialCode: this.selectedCountry.dialCode, phone: this.phone_number});
//     }
//     el.focus();
//   }

//   public onInputKeyPress(event): void {
//     const pattern = /[0-9\+\-\ ]/;
//     let inputChar = String.fromCharCode(event.charCode);
//     if (!pattern.test(inputChar)) {
//       event.preventDefault();
//     }
//   }

//   protected toggle() {
//     this.isToggle = !this.isToggle
//   }

//   protected fetchCountryData(): void {
//     this.countryCodeData.allCountries.forEach(c => {
//       let country = new Country();
//       country.name = c[0].toString();
//       country.iso2 = c[1].toString();
//       country.dialCode = c[2].toString();
//       country.priority = +c[3] || 0;
//       country.areaCode = +c[4] || null;
//       country.flagClass = country.iso2.toLocaleLowerCase();
//       country.placeHolder = this.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
//       if(country.dialCode == '60') {
//           this.selectedCountry = country
//       }
//       this.allCountries.push(country);
//     });
//   }

//   protected getPhoneNumberPlaceHolder(countryCode: string): string {
//     const phoneUtil = _.PhoneNumberUtil.getInstance();
//     const pnf = _.PhoneNumberFormat;
//     try {
//       let phoneNumber = phoneUtil.parse('2236512366', countryCode);
//       return phoneUtil.format(phoneNumber, pnf.NATIONAL);
//     } catch (e) {
//       console.log('CountryCode: "' + countryCode + '" ' + e);
//       return e;
//     }
//   }
// }