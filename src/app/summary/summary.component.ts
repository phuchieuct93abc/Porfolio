import { Component, OnInit, ElementRef } from '@angular/core';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  providers: [{ provide: SectionComponent, useExisting: SummaryComponent }],

  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent extends SectionComponent implements OnInit {

  constructor(element: ElementRef) {
    super(element);
  }
  ngOnInit() {
  }

}
