import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-and-achievments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-and-achievments.component.html',
  styleUrl: './projects-and-achievments.component.css'
})
export class ProjectsAndAchievmentsComponent {
    activeTab :string = "achievements";
}
