import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  providers: [{ provide: SectionComponent, useExisting: PersonalInformationComponent }],
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent extends SectionComponent implements OnInit {

  constructor(element: ElementRef) {
    super(element);
  }

  ngOnInit() {
  }

}
