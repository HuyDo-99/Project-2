import { Component, ViewChild, OnInit } from "@angular/core";
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
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
})
export class ChartTableComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
  
  }

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: "Hoa Hồng",
          data: [2.3, 3.1, 4.0, 7.8, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
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
          // formatter: function (val) {
          //   return val + "%";
          // },
        },
      },
    };
  }
}
