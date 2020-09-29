import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../../service/home.service";
import { CustomersInformationService } from "../../../service/customers-information.service";
import { CustomersInformationModel } from "../../../models/customers-information.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-customers-information",
  templateUrl: "./customers-information.component.html",
  styleUrls: ["./customers-information.component.scss"],

})
export class CustomersInformationComponent implements OnInit {
  [x: string]: any;
  constructor(
    private backToPrevious: HomeService,
    private customerInformationServices: CustomersInformationService,
    public activatedRoute: ActivatedRoute
    ) {}
    affiliateName: any;
    imageURL: any;
    customerid: any;
    fullname :any;
    listNoti : any;
    listA : any;
    CustomerID : number;

  // currentDetail: any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => this.CustomerID = +param.get('CustomerID'));
    console.log(this.CustomerID);
    this.getCustomersInformation();
    this.getInformation();
  }

  backClicked() {
    this.backToPrevious.backClicked();
  }
  getCustomersInformation(){
    this.customerInformationServices.getCustomersInformation(this.CustomerID).subscribe(res => {
    this.listNoti = res;
    console.log(this.listNoti);     
    })
  }

  getInformation(){
    this.customerInformationServices. getInformation(this.CustomerID).subscribe(res => {
    this.listA = res;
    this.fullname = this.listA.FullNameAndID;
    this.customerid = this.listA.CustomerID;
    this.imageURL = this.listA.ProfileImageURL;
    this.affiliateName = this.listA.AffiliationCustomerFullName;
    console.log(this.listA);     
    })
  }

}
