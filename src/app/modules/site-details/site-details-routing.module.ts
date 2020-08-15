import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteDetailsComponent } from './components/site-details.component';

const routes: Routes = [{
  path: '',
  component: SiteDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteDetailsRoutingModule { }