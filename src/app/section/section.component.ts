import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements AfterViewInit {

  htmlElement: HTMLElement;
  cover: HTMLDivElement;
  constructor(private element: ElementRef) {
    this.htmlElement = this.element.nativeElement;

  }
  ngAfterViewInit(): void {
    this.cover = this.htmlElement.querySelector('.cover');
  }
  leaveUp() {
    this.cover.style.top = '0px';

    setTimeout(() => {
      this.cover.style.top = '200px';

    });
  }
  inUp() {
    this.cover.style.top = '0px';

    // this.cover.style.top = '200px';
  }
  inDown() {
    this.cover.style.top = '0px';

    // throw new Error('Method not implemented.');
  }
  leaveDown() {
    this.cover.style.top = '0px';

    setTimeout(() => {
      this.cover.style.top = '-200px';

    });
  }
  end() {
    // setTimeout(() => {

    //   this.cover.style.top = '0px';
    // }, 1000);
  }





}
