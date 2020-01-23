import { Component, OnInit, Input } from '@angular/core';
import { PrivateProject } from '../private-projects.component';

@Component({
  selector: 'app-private-project',
  templateUrl: './private-project.component.html',
  styleUrls: ['./private-project.component.scss']
})
export class PrivateProjectComponent implements OnInit {

  @Input()
  project: PrivateProject;
  constructor() { }

  ngOnInit() {
  }

}
