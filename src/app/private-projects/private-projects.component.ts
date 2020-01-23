import { Component, OnInit, ElementRef } from '@angular/core';
import { SectionComponent } from '../section/section.component';

export interface PrivateProject {
  image: string;
  name: string;
  title: string;
  description: string;
  link: string;
}
@Component({
  selector: 'app-private-projects',
  templateUrl: './private-projects.component.html',
  providers: [{ provide: SectionComponent, useExisting: PrivateProjectsComponent }],
  styleUrls: ['./private-projects.component.scss']
})
export class PrivateProjectsComponent extends SectionComponent implements OnInit {

  readonly privateProjects: PrivateProject[] = [
    {
      image: 'blog.png',
      name: 'Blog',
      title: 'Frontend development',
      description: 'The main purpose of this blog is sharing some tips & tricks which are related to the frontend development',
      link: 'https://news.phuchieu.cf/'
    }, {
      image: 'news.png',
      name: 'Bao Hieu',
      title: 'Reading news application',
      description: 'Allows you to read Vietnamese/English daily news with different categories: hot news, technology, social, sport, video news.',
      link: 'https://news.phuchieu.cf/'
    }, {
      image: 'highlight.png',
      name: 'HighLight',
      title: 'Reading news application',
      description: `HighLight provide an easy way to format and highlight a block of code, which is fully compatible for copy and paste to some different kind of document such as: Microsoft Word, Microsoft Powerpoint, Google Doc, Google slide and Evernote.`,
      link: 'https://news.phuchieu.cf/'
    }
  ];
  constructor(element: ElementRef) { super(element); }

  ngOnInit() {
  }

}
