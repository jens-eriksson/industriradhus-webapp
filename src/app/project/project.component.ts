import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { IProject } from '../../model/project';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: IProject[];
  errorMessage = '';
  selectedProject: IProject;

  constructor(private _route: ActivatedRoute, private _projectService: ProjectService) {

  }

  ngOnInit() {
    console.log(this._route.snapshot.paramMap.get('id'));
    this._projectService.getProjects()
          .subscribe(
            projects => {
              this.projects = projects;
              this.selectedProject = projects[0];
            },
            error => console.log(<any>error)
          );
  }

}