import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedingFormComponent } from './feeding-form/feeding-form.component';
import { FeedingListComponent } from './feeding-list/feeding-list.component';
import { FeedingHistoryComponent } from './feeding-history/feeding-history.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedingFormComponent,
    FeedingListComponent,
    FeedingHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
