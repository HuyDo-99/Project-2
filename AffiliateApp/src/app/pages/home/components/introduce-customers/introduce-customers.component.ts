import { Component, OnInit } from '@angular/core';
import { HomeService } from "../../service/home.service";
@Component({
  selector: 'app-introduce-customers',
  templateUrl: './introduce-customers.component.html',
  styleUrls: ['./introduce-customers.component.scss']
})
export class IntroduceCustomersComponent implements OnInit {
  link: string;

  constructor(
    private homeService: HomeService
  ) { }
   customerCurrent: any;
   customerId: any;
  ngOnInit(): void {
    
    this.getCustomerCurrent();
  }

  getCustomerCurrent(){
    this.homeService.getCustomerDetail().subscribe(data => {
        this.customerCurrent = data;
        this.customerId = this.customerCurrent.CustomerID;
        this.link = this.customerCurrent.AffiliationLink;
        localStorage.setItem('code', this.customerId);
    });
  }


}
