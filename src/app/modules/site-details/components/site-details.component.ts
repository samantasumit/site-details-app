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
  sortTypes = [0, 1, 2];
  sortType;

  constructor(public dialog: MatDialog,
    public apiService: ApiService) {
    this.pageSize = this.pageSizes[0];
    this.sortType = this.sortTypes[0];
  }

  ngOnInit() {
    this.getDomains();
  }

  changeSort() {
    this.sortType = (this.sortType + 1) % 3;
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
      width: '640px',
      data: {
        subdomains: [{}]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.addDomain(result);
    });
  }

  addDomain(dom) {
    const id = new Date().getTime();
    const domain = {
      id: id,
      domain: dom.domain,
      storage: dom.storage,
      usedStorage: 0,
      avaialableDomains: 10,
      domainTag: dom.domainTag,
      usedDomains: 0,
      monthlyVisitorCapacity: 1000,
      monthlyVisitor: 0,
      status: 'Active',
      subdomains: []
    };
    dom.subdomains.forEach((subdom, index) => {
      const subdomain = {
        id: parseInt(id + '' + (index + 1)),
        domain: subdom.domain,
        usedStorage: 0,
        domainTag: subdom.domainTag,
        usedDomains: 0,
        status: 'Active',
        monthlyVisitor: subdom.monthlyVisitor
      };
      domain.subdomains.push(subdomain);
    });
    this.apiService.addDomain(domain);
    this.getDomains();
  }

}
