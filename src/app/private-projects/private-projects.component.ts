import { Component, OnInit, ElementRef } from '@angular/core';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-private-projects',
  templateUrl: './private-projects.component.html',
  providers: [{ provide: SectionComponent, useExisting: PrivateProjectsComponent }],
  styleUrls: ['./private-projects.component.scss']
})
export class PrivateProjectsComponent extends SectionComponent implements OnInit {

  readonly privateProjects = [
    {
      image: '..',
      name: 'Báo Hiếu',
      title: 'Reading news application',
      description: 'Allows you to read Vietnamese/English daily news with different categories: hot news, technology, social, sport, video news.',
      link: 'https://news.phuchieu.cf/'
    }, {
      image: '..',
      name: 'Báo Hiếu',
      title: 'Reading news application',
      description: 'Allows you to read Vietnamese/English daily news with different categories: hot news, technology, social, sport, video news.',
      link: 'https://news.phuchieu.cf/'
    }, {
      image: '..',
      name: 'Báo Hiếu',
      title: 'Reading news application',
      description: 'Allows you to read Vietnamese/English daily news with different categories: hot news, technology, social, sport, video news.',
      link: 'https://news.phuchieu.cf/'
    }, {
      image: '..',
      name: 'Báo Hiếu',
      title: 'Reading news application',
      description: 'Allows you to read Vietnamese/English daily news with different categories: hot news, technology, social, sport, video news.',
      link: 'https://news.phuchieu.cf/'
    }, {
      image: '..',
      name: 'Báo Hiếu',
      title: 'Reading news application',
      description: 'Allows you to read Vietnamese/English daily news with different categories: hot news, technology, social, sport, video news.',
      link: 'https://news.phuchieu.cf/'
    },
  ];
  constructor(element: ElementRef) { super(element); }

  ngOnInit() {
  }

}
