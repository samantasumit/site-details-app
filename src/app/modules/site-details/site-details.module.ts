import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteDetailsComponent } from './components/site-details.component';
import { AddSiteDetailsDialogComponent } from './add-site-details-dialog/add-site-details-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { SiteDetailsRoutingModule } from './site-details-routing.module';
import { SearchTextPipe } from 'src/app/pipes/search-text.pipe';

@NgModule({
  declarations: [
    SiteDetailsComponent,
    AddSiteDetailsDialogComponent,
    SearchTextPipe
  ],
  imports: [
    CommonModule,
    SiteDetailsRoutingModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule
  ],
  entryComponents: [
    AddSiteDetailsDialogComponent
  ]
})
export class SiteDetailsModule { }
