import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})

export class HistoryComponent implements OnInit {
  readonly projects = [
    {
      name: 'xExpense',
      description: 'Payment management',
      about: 'A system manages payments in a company in order to help managers organize and manage the company’s payments',
      technologies: 'NodeJS, NPM, ExpressJS, MongoDB, AngularJS 1, Bootstrap 3, Bootswatch, Bower, Grunt.',
      role: 'Java web full stack developer'
    },
    {
      name: 'xEdu',
      description: 'Course management',
      about: 'A system is built to help education centers publish their course information (start time, place in google map, number of students for each course...) and help users subscribe to their favorite courses. ',
      technologies: 'NodeJS, NPM, ExpressJS, MongoDB, AngularJS 1, Bootstrap 3, Bootswatch, Bower, Grunt.',
      role: 'Java web full stack developer. '

    }
  ];



  constructor() { }

  ngOnInit() {
  }

}
