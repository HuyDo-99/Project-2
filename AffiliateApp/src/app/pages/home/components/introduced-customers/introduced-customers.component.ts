import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../service/home.service";
import { IntroducedCustomersServices } from "../../service/introduced-customers.service";

@Component({
  selector: "app-introduced-customers",
  templateUrl: "./introduced-customers.component.html",
  styleUrls: ["./introduced-customers.component.scss"],
})
export class IntroducedCustomersComponent implements OnInit {
  [x: string]: any;
  constructor(
    private backToPrevious: HomeService,
    public introducedCustomersServices: IntroducedCustomersServices
    ) {}

  listIntroCus: any;
  ngOnInit(): void {
    this.getIntroducedCustomers()
  }

  backClicked() {
    this.backToPrevious.backClicked();
  }
  getIntroducedCustomers(){
    this.introducedCustomersServices.list().subscribe(res => {
    this.listIntroCus= res;
    console.log(this.listIntroCus);     
    })
  }
}
