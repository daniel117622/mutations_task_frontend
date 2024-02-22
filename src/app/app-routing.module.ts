import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './stats/stats.component';
import { MainPageComponent } from './main-page/main-page.component'; // Example main page component
import { ListComponent } from './list/list.component';
const routes: Routes = [
  { path: '', component: MainPageComponent, pathMatch: 'full' }, // Default route
  { path: 'stats', component: StatsComponent },
  { path: 'list', component: ListComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
