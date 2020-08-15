import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSiteDetailsDialogComponent } from '../add-site-details-dialog/add-site-details-dialog.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.scss']
})
export class SiteDetailsComponent implements OnInit {

  pageSizes = [10, 20, 50, 100];
  domains = [];
  pageSize;
  searchText;

  constructor(public dialog: MatDialog,
    public apiService: ApiService) {
    this.pageSize = this.pageSizes[0];
  }

  ngOnInit() {
    this.getDomains();
  }

  getDomains() {
    this.domains = this.apiService.getDomains();
    this.calculatedPageSize();
  }

  calculatedPageSize() {
    if (this.pageSizes[this.pageSizes.length - 1] < this.domains.length) {
      this.pageSizes.push(this.domains.length);
    }
  }

  addNewSite() {
    const dialogRef = this.dialog.open(AddSiteDetailsDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}
