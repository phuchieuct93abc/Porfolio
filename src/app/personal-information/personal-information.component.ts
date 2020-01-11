import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  @ViewChild('avatart', { static: true })
  private avatart: ElementRef;
  constructor(private element: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    // console.log(event)
    const elementHtml = <HTMLElement>this.element.nativeElement;
    console.log(elementHtml.offsetTop);
  }

}
