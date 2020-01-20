import { Component, OnInit, AfterViewChecked, AfterViewInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { SectionComponent } from './section/section.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'porfolio';
  currentIndex = 0;
  @ViewChildren(SectionComponent)
  section: QueryList<SectionComponent>;

  sections: SectionComponent[]
  ngAfterViewInit(): void {
    this.sections = this.section.toArray();
    setTimeout(() => {
      // @ts-ignore
      $('.main').onepage_scroll({
        sectionContainer: 'section',     // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: 'ease',                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
        pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: index => {
          if (index > this.currentIndex) {
            this.sections[this.currentIndex].leaveUp()
            this.sections[index - 1].inUp();
          } else {
            this.sections[this.currentIndex].leaveDown()
            this.sections[index - 1].inDown();

          }
          // this.section[index].start();
        },  // This option accepts a callback function. The function will be called before the page moves.
        afterMove: (index) => {
          this.sections[this.currentIndex].end()
          this.sections[index - 1].end();
          this.currentIndex = index - 1

        },   // This option accepts a callback function. The function will be called after the page moves.
        loop: true,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true,                  // You can activate the keyboard controls
        responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
        // the browser's width is less than 600, the fallback will kick in.
        direction: 'vertical'            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
      });
    });

  }
}
