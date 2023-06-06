import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedingFormComponent } from './feeding-form/feeding-form.component';
import { FeedingListComponent } from './feeding-list/feeding-list.component';
import { FeedingHistoryComponent } from './feeding-history/feeding-history.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'form', component: FeedingFormComponent },
  { path: 'list', component: FeedingListComponent },
  { path: 'history', component: FeedingHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
