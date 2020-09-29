import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { HomeService } from "../../service/home.service";
import { CustomerService } from '../../service/customer.service';
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
  selector: "app-statistical",
  templateUrl: "./statistical.component.html",
  styleUrls: ["./statistical.component.scss"],
})
export class StatisticalComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @Input() childMessage: string;
  date: Date = new Date();
  year = this.date.getFullYear();
  affiliateReport: any;
  total: number = 0;
  commissionList: any;
  dataSource = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  height: number;
  constructor(private homeService: HomeService,
    public customerService: CustomerService) {}
  
  

  ngOnInit(): void {
    this.height = innerHeight - 90;
    this. getAffiliateReport();
    this.getListCommission();
  }


  getListCommission() {
    this.homeService.getAffiliationCommission().subscribe(res => {
      this.commissionList = res;
      console.log('commissionList', this.commissionList);
    });
  }

  getAffiliateReport() {
    this.customerService.affiliationcommissionReport(this.year).subscribe(res => {
      this.affiliateReport = res;
      console.log('report', this.affiliateReport);
      if (this.affiliateReport.CommissionList === null) {
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
          height: 225,
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

  backClicked() {
    this.homeService.backClicked();
  }

  getNextYear() {
    this.year = +this.year + 1;
    this. getAffiliateReport();
  }

  getLastYear() {
    this.year = +this.year - 1;
    this. getAffiliateReport();
  }
}
