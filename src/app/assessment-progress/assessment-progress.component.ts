import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts'; // Import NgChartsModule
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-assessment-progress',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './assessment-progress.component.html',
  styleUrls: ['./assessment-progress.component.css']
})
export class AssessmentProgressComponent {
  public isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) platformId: Object, private renderer2: Renderer2) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  public barChartLabels: string[] = ['Assignment', 'Quiz', 'Presentation', 'Lab'];
  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataset[] = [
    { data: [60, 80, 70, 90], label: 'Pending' },
    { data: [40, 20, 30, 10], label: 'Completed' }
  ];
}
