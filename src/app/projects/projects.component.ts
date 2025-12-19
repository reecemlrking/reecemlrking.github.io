import { Component } from '@angular/core';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { ProjectDetailsInfo } from '../project-details-info';
import projects from '../json/projects.json';


@Component({
  selector: 'app-projects',
  imports: [ProjectDetailsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: ProjectDetailsInfo[] = projects.sort((p1, p2) => {
    if (p1.name > p2.name) {
      return 1;
    }

    if (p1.name < p2.name) {
      return -1
    }
    return 0;
  })
}
