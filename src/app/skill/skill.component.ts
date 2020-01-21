import { Component, OnInit, ElementRef } from '@angular/core';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  providers: [{ provide: SectionComponent, useExisting: SkillComponent }],
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent extends SectionComponent implements OnInit {

  constructor(element: ElementRef) { super(element); }

  ngOnInit() {
  }

}
