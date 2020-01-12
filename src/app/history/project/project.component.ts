import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { relative } from 'path';

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
  styleUrls: ['./project.component.scss'],
  animations: [
    trigger('openClose', [
      state('closed', style({

      })),
      state('open', style({


      })),
      transition('closed =>open', [
        animate('1s'),
        style({
          transform: 'translateX(-100%)'
        })

      ]),
    ])
  ]
})
export class ProjectComponent implements OnInit {


  @Input()
  project: ProjectData;
  isOpen = false;


  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.isOpen = !this.isOpen;
  }

}
