import { Component, OnInit } from '@angular/core';
import { OrderService } from "../service/order.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details-order',
  templateUrl: './details-order.component.html',
  styleUrls: ['./details-order.component.scss']
})
export class DetailsOrderComponent implements OnInit {

  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute
  ) { }
  contractId: number;
  contractList: any;
  contractDetail: any;
  contractContent: string;
  SurgerySubServiceName: string;
  Amount: any;
  imgUrl: string;
  TotalContractPayment: any;
  signedDate: string;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => this.contractId = +param.get('contractId'));
    console.log(this.contractId);
    this.getListContractUserLogin();
  }
  getListContractUserLogin() {
    this.orderService.list().subscribe(res => {
      this.contractList = res;
      this.contractDetail = this.contractList.find(x => x.ContractId === this.contractId);
      this.contractContent = this.contractDetail.ContractContent;
      this.SurgerySubServiceName = this.contractDetail.SurgerySubServiceName;
      if (this.contractDetail.SignedDate != null) {
        this.signedDate = this.contractDetail.SignedDate.split('T')[0];
      } else {
        this.signedDate = "";
      }
      this.Amount = this.contractDetail.Amount;
      this.imgUrl = this.contractDetail.ContractImageURL;
      this.TotalContractPayment = this.contractDetail.TotalContractPayment;
      console.log(this.contractDetail);
    });
  }

}
