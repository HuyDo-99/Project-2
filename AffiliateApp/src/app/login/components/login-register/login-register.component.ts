import { Component, OnInit } from '@angular/core';
import { AccountRegisterModel } from '../../models/account-register.model';
import { AccountRegisterService } from '../../services/account-register.service';
import { AlertService } from '../../../shared/services/alert.service';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  password: string;
  referenId: number;
  userAvatarString: any;

  constructor(
    private accountRegisterService: AccountRegisterService,
    private alertService: AlertService,
    
  ) { }

  ngOnInit(): void {
  }



  processFileUserAvatar(files: File) {
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.userAvatarString = reader.result;
    };
  }

  createAccount() {
    let accountModel = new AccountRegisterModel();
    accountModel.FirstName = this.name;
    accountModel.Email = this.email;
    accountModel.Phone = this.phone;
    accountModel.Password = this.password;
    accountModel.ProfileImage = this.userAvatarString;
    accountModel.ReferencedCustomerId = this.referenId;
    this.accountRegisterService.create(accountModel).subscribe(res => {
      console.log(accountModel);
      
      this.alertService.changeMessage({
        text: 'Tạo tài khoản thành công',
        color: 'green'
      });
    });
  }

}
