import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {environment} from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LvHeaderComponent } from './header/header.component';
import { LvPropertiesComponent } from './lv-properties/lv-properties.component';
import { LvLocusviewerComponent } from './lv-locusviewer/lv-locusviewer.component';
import { LvSocialComponent } from './lv-social/lv-social.component';
import { LvJobsComponent } from './lv-jobs/lv-jobs.component';
import { LvDayToDayComponent } from './lv-day-to-day/lv-day-to-day.component';
import { LvInMediaComponent } from './lv-in-media/lv-in-media.component';
import { LvFooterComponent } from './lv-footer/lv-footer.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
