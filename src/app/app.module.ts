import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { SummaryComponent } from './summary/summary.component';
import { HistoryComponent } from './history/history.component';
import { SkillComponent } from './skill/skill.component';
import { PrivateProjectsComponent } from './private-projects/private-projects.component';
import { ProjectComponent } from './history/project/project.component';
import { SectionComponent } from './section/section.component';
import { PrivateProjectComponent } from './private-projects/private-project/private-project.component';
 
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    PersonalInformationComponent,
    SummaryComponent,
    HistoryComponent,
    SkillComponent,
    PrivateProjectsComponent,
    ProjectComponent,
    SectionComponent,
    PrivateProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
