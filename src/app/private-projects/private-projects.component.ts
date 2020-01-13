import { Component, OnInit } from '@angular/core';
import { NzDescriptionsComponent } from 'ng-zorro-antd';

@Component({
  selector: 'app-private-projects',
  templateUrl: './private-projects.component.html',
  styleUrls: ['./private-projects.component.scss']
})
export class PrivateProjectsComponent implements OnInit {

  readonly privateProjects = [
    {
      image: '..',
      name: 'Báo Hiếu',
      title: 'Reading news application',
      description: 'Allows you to read Vietnamese/English daily news with different categories: hot news, technology, social, sport, video news.',
      link: 'https://news.phuchieu.cf/'
    },{
      image: '..',
      name: 'Báo Hiếu',
      title: 'Reading news application',
      description: 'Allows you to read Vietnamese/English daily news with different categories: hot news, technology, social, sport, video news.',
      link: 'https://news.phuchieu.cf/'
    },{
      image: '..',
      name: 'Báo Hiếu',
      title: 'Reading news application',
      description: 'Allows you to read Vietnamese/English daily news with different categories: hot news, technology, social, sport, video news.',
      link: 'https://news.phuchieu.cf/'
    },{
      image: '..',
      name: 'Báo Hiếu',
      title: 'Reading news application',
      description: 'Allows you to read Vietnamese/English daily news with different categories: hot news, technology, social, sport, video news.',
      link: 'https://news.phuchieu.cf/'
    },{
      image: '..',
      name: 'Báo Hiếu',
      title: 'Reading news application',
      description: 'Allows you to read Vietnamese/English daily news with different categories: hot news, technology, social, sport, video news.',
      link: 'https://news.phuchieu.cf/'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
