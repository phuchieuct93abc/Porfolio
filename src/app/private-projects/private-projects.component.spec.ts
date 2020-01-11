import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateProjectsComponent } from './private-projects.component';

describe('PrivateProjectsComponent', () => {
  let component: PrivateProjectsComponent;
  let fixture: ComponentFixture<PrivateProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
