import { Component, OnInit, ViewChild } from "@angular/core";
import { ProfileService } from "../profile/service/profile.service";
import { HomeService } from "./service/home.service";
import { CustomerService } from './service/customer.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
  ApexStates,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  date: Date = new Date();
  year = this.date.getFullYear();
  affiliateReport: any;
  customerDetail: any;
  commissionList: any;
  total: number = 0;
  accountBalance: any;
  dataSource = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  introducedCustomers: any;
  customerSum: number = 0;
  l6Count: number = 0;
  l7Count: number = 0;
  l8Count: number = 0;
  otherCount: number = 0;
  rankingValue: number;

  constructor(
    public profileService: ProfileService,
    public homeService: HomeService,
    public customerService: CustomerService
  ) { }

 
  rankCustomer: any;
  ngOnInit(): void {
    this.getProfileCurrent();
    this.getAffiliateReport();
    this.getAccountBalance();
    this.getIntroducedCustomersReport();
    this.getRankCustomer();
  }

  getRankCustomer(){
    this.homeService.getRankCustomer().subscribe(res => {
       this.rankCustomer = res.reverse();
       console.log('ranking',this.rankCustomer);
       this.rankingValue = this.rankCustomer[0].RankingValue;
    });
  }


  getProfileCurrent() {
    this.profileService.getProfileCustomer().subscribe(res => {
      this.customerDetail = res;
      console.log(this.customerDetail);
    });
  }

  getAccountBalance() {
    this.homeService.getAccountBalance().subscribe(res => {
      this.accountBalance = res;
      console.log('so du', this.accountBalance);
      
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

  getAffiliateReport() {
    this.customerService.affiliationcommissionReport(this.year).subscribe(res => {
      this.affiliateReport = res;
      console.log('report', this.affiliateReport);
      if (this.affiliateReport.CommissionList.length === 0 ) {
        this.total = 0;
        this.dataSource = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      } else {
        this.total = this.affiliateReport.Total;
        for (let commision of this.affiliateReport.CommissionList) {
          if (commision.Month !== null) {
            this.dataSource[commision.Month - 1] = commision.Amount;
          }
        }
      }
     

      this.chartOptions = {
        series: [
          {
            name: "Hoa Hồng",
            data: this.dataSource,
          },
        ],

        chart: {
          height: 'auto',
          type: "bar",
          toolbar: {
            show: false,
          },
        },

        plotOptions: {
          bar: {
            dataLabels: {
              position: "top", // top, center, bottom
            },
            startingShape: "rounded",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,

          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"],
          },
        },

        xaxis: {
          categories: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
          ],
          position: "bottom",
          tooltip: {
            enabled: true,
            offsetY: -35,
          },
        },
        fill: {
          colors: ["#B3CADF"],
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          },
        },
      };



    })
  }

  getNextYear() {
    this.year = +this.year + 1;
    this.getAffiliateReport();
  }

  getLastYear() {
    this.year = +this.year - 1;
    this.getAffiliateReport();
  }
}
