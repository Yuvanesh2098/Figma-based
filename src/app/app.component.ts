import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AssessmentProgressComponent } from './assessment-progress/assessment-progress.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseDetailsComponent, AssessmentProgressComponent, StudentAttendanceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'figma-components-app';
}
