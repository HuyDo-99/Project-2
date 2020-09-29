import { Component, OnInit } from '@angular/core';
import { ChangePasswordService } from '../service/change-passwork.serive';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePassWordComponent implements OnInit {
    model: any = {};
    constructor(
        private ChangePassWorkService: ChangePasswordService,
        private alertService: AlertService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    onChangePassWord = async () => {
        try {
            if (!this.model.NewPassword ||
                this.model.NewPassword.length < 6 ||
                !this.model.ConfirmPassword ||
                this.model.NewPassword !== this.model.ConfirmPassword
            ) return;
            await this.ChangePassWorkService.create(this.model).subscribe(() => {
                this.alertService.changeMessage({
                    text: "Cập nhật mật khẩu thành công",
                    color: "green",
                });
                this.router.navigateByUrl('login')
            }, () => this.alertService.changeMessage({
                color: 'red',
                text: `Vui lòng kiểm tra lại mật khẩu`
            }));
        } catch (ex) {
            console.log(ex);
        }
    }

}
