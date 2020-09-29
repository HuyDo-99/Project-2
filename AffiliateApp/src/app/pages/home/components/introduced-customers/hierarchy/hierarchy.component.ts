import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { HomeService } from "../../../service/home.service";



@Component({
  selector: "app-hierarchy",
  templateUrl: "./hierarchy.component.html",
  styleUrls: ["./hierarchy.component.scss"],
})
export class HierarchyComponent implements OnInit {


  constructor(private homeService: HomeService) {

  }
  height: number;
  isShowl1: boolean = false;
  currentCustomerId: number;
  customerListFirst: any;
  customerListNext: any;
  customerListNext1: any;
  customerListNext2: any;
  children = [];
  ngOnInit(): void {
    this.height = innerHeight - 90;
    this.getCustomerHierarchy();
  }
  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
  options = {};

  getCustomerHierarchy() {
    this.homeService.getCustomerDetail().subscribe(res => {
      this.currentCustomerId = res.CustomerID;
      this.homeService.getCustomerHierarchy(this.currentCustomerId).subscribe(data => {
        this.customerListFirst = data;
        console.log('cap 1', this.customerListFirst);
        
      });
    });
  }
  showDiv() {
    this.isShowl1 = !this.isShowl1;
  }

  getCustomerHierarchyNext(id: number) {
    this.isShowl1 = !this.isShowl1;
    this.homeService.getCustomerHierarchy(id).subscribe(data => {
      this.customerListNext = data;
      console.log("caaps 2", this.customerListNext);
      
    });
  }
  getCustomerHierarchyNext1(id: number) {

    this.homeService.getCustomerHierarchy(id).subscribe(data => {
      this.customerListNext1 = data;
      // console.log('next1', this.customerListNext1);
    });
  }
  getCustomerHierarchyNext2(id: number) {
    this.homeService.getCustomerHierarchy(id).subscribe(data => {
      this.customerListNext2 = data;
    });
  }

  backClicked() {
    this.homeService.backClicked();
  }

}
