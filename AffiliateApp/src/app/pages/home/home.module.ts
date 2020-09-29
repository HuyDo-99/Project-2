import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {ClipboardModule} from '@angular/cdk/clipboard';
//module
import { SharedModule } from "../../shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";

//component
import { HomeComponent } from "./home.component";
import { NotificationsComponent } from "./components/notifications/notifications.component";
import { NotificationDetailsComponent } from "./components/notifications/notification-details/notification-details.component";
import { IntroduceCustomersComponent } from "./components/introduce-customers/introduce-customers.component";
import { IntroducedCustomersComponent } from "./components/introduced-customers/introduced-customers.component";
import { StatisticalComponent } from "./components/statistical/statistical.component";
import { ListComponent } from "./components/statistical/list/list.component";
import { AffiliateRankComponent } from './components/affiliate-rank/affiliate-rank.component';
import { CustomersInformationComponent } from "./components/introduced-customers/customers-information/customers-information.component";
import { HierarchyComponent } from "./components/introduced-customers/hierarchy/hierarchy.component";
import { IntroducedCustomerListComponent } from './components/introduced-customers/introduced-customer-list/introduced-customer-list.component';
import { LinkIntroduceComponent } from './components/introduce-customers/link-introduce/link-introduce.component';
import { LinkIntroduce1Component } from './components/introduce-customers/link-introduce/component/link-introduce1/link-introduce1.component';
import { LinkIntroduce2Component } from './components/introduce-customers/link-introduce/component/link-introduce2/link-introduce2.component';
import { RegisterComponent } from './components/introduce-customers/link-introduce/component/register/register.component';
import { LinkIntroduceStepperComponent } from './components/introduce-customers/link-introduce/component/link-introduce-stepper.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotificationsComponent,
    NotificationDetailsComponent,
    IntroduceCustomersComponent,
    IntroducedCustomersComponent,
    StatisticalComponent,
    ListComponent,
    AffiliateRankComponent,
    CustomersInformationComponent,
    HierarchyComponent,
    IntroducedCustomerListComponent,
    LinkIntroduceComponent,
    LinkIntroduce1Component,
    LinkIntroduce2Component,
    RegisterComponent,
    LinkIntroduceStepperComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, ClipboardModule],
})
export class HomeModule {}
