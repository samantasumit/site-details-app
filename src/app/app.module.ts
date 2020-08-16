import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoRouteComponent } from './components/no-route/no-route.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MigrationComponent } from './components/migration/migration.component';
import { BackupComponent } from './components/backup/backup.component';
import { CollabratorsComponent } from './components/collabrators/collabrators.component';
import { SupportComponent } from './components/support/support.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NoRouteComponent,
    DashboardComponent,
    MigrationComponent,
    BackupComponent,
    CollabratorsComponent,
    SupportComponent,
    TicketComponent,
    SidebarComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
