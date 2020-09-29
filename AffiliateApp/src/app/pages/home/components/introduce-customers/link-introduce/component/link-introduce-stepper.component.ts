import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RegisterService } from "../../../../service/register.service";
import { RegisterModel } from "../../../../models/register.model";
import { AlertService } from "../../../../../../shared/services/alert.service";
@Component({
  selector: 'app-link-introduce-stepper',
  templateUrl: './link-introduce-stepper.component.html',
  styleUrls: ['./link-introduce-stepper.component.scss']
})
export class LinkIntroduceStepperComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  createCustomer: FormGroup;
  isOptional = false;
  referralCode: any;
  constructor(private formBuilder: FormBuilder,
              private registerService: RegisterService,
              private alertService: AlertService
    ) { }
  ngOnInit(): void {
    
    this.referralCode = localStorage.getItem('code');
    console.log(this.referralCode);
    
    this.createCustomer = this.formBuilder.group({
      ReferencedCustomerId: [+this.referralCode, Validators.required],
      FirstName: ['', Validators.required],
      Email: ['', Validators.required],
      Phone: ['', Validators.required],
      Password: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }
  registerCustomer(){
    let data = this.createCustomer.value;
    this.registerService.create(data).subscribe((res) => {
      console.log('createCustomer', data);
      this.alertService.changeMessage({
        text: "Đăng ký thành công!",
        color: "green",
      });
    });
  }

}

