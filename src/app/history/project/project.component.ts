import { Component, OnInit, Input } from '@angular/core';

export interface ProjectData {
  name: string;
  about: string;
  description: string;
  technologies: string;
  role: string;
}
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {


  @Input()
  project: ProjectData;


  constructor() { }

  ngOnInit() {
  }

}
