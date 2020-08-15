import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoRouteComponent } from './components/no-route/no-route.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MigrationComponent } from './components/migration/migration.component';
import { CollabratorsComponent } from './components/collabrators/collabrators.component';
import { BackupComponent } from './components/backup/backup.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { SupportComponent } from './components/support/support.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'details',
  pathMatch: 'full'
}, {
  path: 'dashboard',
  component: DashboardComponent
}, {
  path: 'migration',
  component: MigrationComponent
}, {
  path: 'collabrators',
  component: CollabratorsComponent
}, {
  path: 'backup',
  component: BackupComponent
}, {
  path: 'support',
  component: SupportComponent
}, {
  path: 'ticket',
  component: TicketComponent
}, {
  path: 'details',
  loadChildren: () => import('./modules/site-details/site-details.module').then(m => m.SiteDetailsModule)
}, {
  path: '**',
  component: NoRouteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
