import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SiteDetailsComponent } from './site-details/site-details.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { AddSiteDetailsDialogComponent } from './add-site-details-dialog/add-site-details-dialog.component';
import { SearchTextPipe } from './pipes/search-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SiteDetailsComponent,
    AddSiteDetailsDialogComponent,
    SearchTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule
  ],
  entryComponents: [
    AddSiteDetailsDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
