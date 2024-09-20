import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  course = {
    code: 'BA3102',
    name: 'Quantitative Techniques',
    type: 'Program Elective',
    period: 'Semester - I',
    credits: { lecture: 3, tutorial: 0, practical: 1, project: 0 },
    outcomes: ['CO2', 'CO4', 'CO5', 'CO7', 'CO13', 'CO14'],
    mappedOutcomes: ['PO7', 'PO10', 'PO12', 'PO8']
  };
}
