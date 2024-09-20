import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-student-attendance',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.css']
})
export class StudentAttendanceComponent {
  public isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) platformId: Object, private renderer2: Renderer2) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  public lineChartLabels: string[] = ['1/7', '15/7', '22/7', '29/7', '5/8', '12/8', '26/8', '2/9'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartType: ChartType = 'line';
  public lineChartLegend = true;
  public lineChartData: ChartDataset[] = [
    { data: [70, 80, 75, 90, 85, 78, 82, 88], label: 'Attendance' }
  ];
}
