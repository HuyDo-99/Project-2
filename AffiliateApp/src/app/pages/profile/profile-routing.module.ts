import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from "./profile.component";
import { LoginComponent } from "../../login/components/forms/login/login.component";
import { ForgotPasswordComponent } from "../../login/components/forms/forgot-password/forgot-password.component";
import { DetailsOrderComponent } from "../profile/details-order/details-order.component";
import { ChangePassWordComponent } from './change-password/change-password.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'forgot-pass',
        component: ForgotPasswordComponent
    },
    {
        path: 'details-order/:contractId',
        component: DetailsOrderComponent
    },
    {
        path: 'change-pass',
        component: ChangePassWordComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }
