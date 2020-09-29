import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// component
import { LoginRegisterComponent } from "./components/login-register/login-register.component";
import { LoginComponent } from "./components/forms/login/login.component";


const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: 'register',
    component: LoginRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
