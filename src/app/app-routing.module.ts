import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteDetailsComponent } from './site-details/site-details.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'details',
  pathMatch: 'full'
}, {
  path: 'details',
  component: SiteDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
