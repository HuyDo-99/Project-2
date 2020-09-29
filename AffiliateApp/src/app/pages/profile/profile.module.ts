import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { DetailsOrderComponent } from './details-order/details-order.component';
import { ChangePassWordComponent } from './change-password/change-password.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
    declarations: [ProfileComponent,
        DetailsOrderComponent,
        ChangePassWordComponent,
        LogoutComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        SharedModule
    ]
})
export class ProfileModule { }
