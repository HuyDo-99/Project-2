import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { HomeService } from "../../../service/home.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  isSearch = false;

  constructor(private homeService: HomeService
  ) { }

  commissionList: any;
  total : number = 0;
  ngOnInit(): void { 
    this.getListCommission();
  }

  onIsSearch() {
    this.isSearch = true;
  }

  onCancel() {
    this.isSearch = false;
  }


  getListCommission() {
    this.homeService.getAffiliationCommission().subscribe(res => {
      this.commissionList = res;
      // console.log(this.commissionList);
      for(let i = 0; i< this.commissionList.length; i++){
        this.total += this.commissionList[i].Amount;
      }
      // console.log(this.total); 
    });

  }

  backClicked() {
    this.homeService.backClicked();
  }
}
