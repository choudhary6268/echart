import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import * as moment from "moment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'charts';
  options= <EChartsOption>{
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Forest', 'Steppe', 'Desert', 'Wetland']
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['2012', '2013', '2014', '2015', '2016']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Forest',
        type: 'bar',
        barGap: 0,
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390]
      },
      {
        name: 'Steppe',
        type: 'bar',
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290]
      },
      {
        name: 'Desert',
        type: 'bar',
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190]
      },
      {
        name: 'Wetland',
        type: 'bar',
        emphasis: {
          focus: 'series'
        },
        data: [98, 77, 101, 99, 40]
      }
    ]
  };
  mode: any = null;
  selected: any = { startDate: null, endDate: null };
  singleDatePicker: boolean = true;
  alwaysShowCalendars: boolean = true;
  visible = false;
  constructor() {
    this.selected.startDate = moment();
    this.selected.endDate = moment();
  }



  isInvalidDate(date: any) {
    return date.weekday() === 0;
  }
  isCustomDate(date: any) {
    return  (
      date.weekday() === 0 ||
      date.weekday() === 6
    )  ? 'mycustomdate' : false;
  }
  showToday() {
    this.visible = !this.visible;
    this.mode = 'day';
    this.singleDatePicker = true;
    this.selected.startDate = moment();
    this.selected.endDate =  moment();
  }

  showWeek() {
    this.visible = !this.visible;
    this.mode = 'week';
    this.singleDatePicker = true;
    this.selected.startDate = moment().subtract(7, 'days').startOf('day');
    this.selected.endDate = moment();
  }

  showMonth() {
    this.visible = !this.visible;
    this.mode = 'month';
    this.singleDatePicker = true;
    this.selected.startDate = moment().startOf('month');
    this.selected.endDate = moment().endOf('month');
  }


  showCustom() {
    this.visible = !this.visible;
    this.mode = 'custom';
    this.singleDatePicker = false;
    this.selected.startDate = moment();
    this.selected.endDate =  moment();
  }

  choosedDate(selectedDate: any) {
    this.selected.startDate = selectedDate.startDate;
    this.selected.endDate =  selectedDate.endDate;
  }
}
