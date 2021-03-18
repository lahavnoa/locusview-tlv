import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LvHeaderComponent } from './header/header.component';
import { LvPropertiesComponent } from './lv-properties/lv-properties.component';
import { LvLocusviewerComponent } from './lv-locusviewer/lv-locusviewer.component';
import { LvSocialComponent } from './lv-social/lv-social.component';
import { LvJobsComponent } from './lv-jobs/lv-jobs.component';
import { LvDayToDayComponent } from './lv-day-to-day/lv-day-to-day.component';
import { LvInMediaComponent } from './lv-in-media/lv-in-media.component';
import { LvFooterComponent } from './lv-footer/lv-footer.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LvHeaderComponent,
    LvPropertiesComponent,
    LvLocusviewerComponent,
    LvSocialComponent,
    LvJobsComponent,
    LvDayToDayComponent,
    LvInMediaComponent,
    LvFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
