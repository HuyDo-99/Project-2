import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../service/customer.service';
import { HomeService } from '../../../service/home.service';

@Component({
  selector: 'app-introduced-customer-list',
  templateUrl: './introduced-customer-list.component.html',
  styleUrls: ['./introduced-customer-list.component.scss']
})
export class IntroducedCustomerListComponent implements OnInit {
  height: number;
  customers: any;
  introducedCustomers: any;
  customerSum: number = 0;
  l6Count: number = 0;
  l7Count: number = 0;
  l8Count: number = 0;
  otherCount: number = 0;

  constructor(
    public customerService: CustomerService,
    public homeService: HomeService
  ) { }
  testA = [];
  ngOnInit(): void {
    this.height = innerHeight - 320;
    this.getIntroducedCustomers();
    this.getIntroducedCustomersReport();
  }

  getIntroducedCustomers() {
    this.customerService.list().subscribe(res => {
      this.customers = res;      
    })
  }

  getIntroducedCustomersReport() {
    this.homeService.sumIntroducedCustomer().subscribe(res => {
      this.introducedCustomers = res;
      console.log('Kh da gioi thieu', this.introducedCustomers);
      this.customerSum = this.introducedCustomers.Total;
      this.l6Count = this.introducedCustomers.L6Count;
      this.l7Count = this.introducedCustomers.L7Count;
      this.l8Count = this.introducedCustomers.L8Count;
      this.otherCount = this.introducedCustomers.OtherCount;
    })
  }

}
