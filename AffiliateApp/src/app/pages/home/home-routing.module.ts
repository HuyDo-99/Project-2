import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { NotificationsComponent } from "./components/notifications/notifications.component";
import { NotificationDetailsComponent } from "./components/notifications/notification-details/notification-details.component";
import { IntroduceCustomersComponent } from "./components/introduce-customers/introduce-customers.component";
import { IntroducedCustomersComponent } from "./components/introduced-customers/introduced-customers.component";
import { CustomersInformationComponent } from "./components/introduced-customers/customers-information/customers-information.component";
import { HierarchyComponent } from "./components/introduced-customers/hierarchy/hierarchy.component";
import { StatisticalComponent } from "./components/statistical/statistical.component";
import { ListComponent } from "./components/statistical/list/list.component";
import { AffiliateRankComponent } from "./components/affiliate-rank/affiliate-rank.component";
import { LinkIntroduceComponent } from "./components/introduce-customers/link-introduce/link-introduce.component";
import { LinkIntroduce1Component } from "./components/introduce-customers/link-introduce/component/link-introduce1/link-introduce1.component";
import { LinkIntroduceStepperComponent } from "./components/introduce-customers/link-introduce/component/link-introduce-stepper.component";
import { LinkIntroduce2Component } from "./components/introduce-customers/link-introduce/component/link-introduce2/link-introduce2.component";
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "notifications",
    component: NotificationsComponent,
  },
  {
    path: "introduced-customer",
    component: IntroducedCustomersComponent,
  },
  {
    path: "introduced-customer/hierarchy",
    component: HierarchyComponent,
  },
  {
    path: "introduced-customer/information/:CustomerID",
    component: CustomersInformationComponent,
  },

  {
    path: "statistical",
    component: StatisticalComponent,
  },
  {
    path: "statistical/list",
    component: ListComponent,
  },

  {
    path: "introduce-customer",
    component: IntroduceCustomersComponent,
  },
  {
    path: "affiliate-rank",
    component: AffiliateRankComponent,
  },
  {
    path: "notifications/details/:notiId",
    component: NotificationDetailsComponent,
  },
  {
    path: "link-introduce",
    component: LinkIntroduceComponent,
  },
  {
    path: "link-introduce1",
    component: LinkIntroduceStepperComponent,
  },
  {
    path: "link-introduce2",
    component: LinkIntroduce2Component,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
