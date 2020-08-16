import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSiteDetailsDialogComponent } from '../add-site-details-dialog/add-site-details-dialog.component';
import { ApiService } from 'src/app/services/api.service';
import { domainTagType, statusType } from 'src/app/enum/app.enum';
import { DomSanitizer } from '@angular/platform-browser';

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
  isLoading: boolean;
  domainTagTypeEnum = domainTagType;
  statusTypeEnum = statusType;

  constructor(public dialog: MatDialog,
    public apiService: ApiService,
    private sanitizer: DomSanitizer) {
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
    this.isLoading = true;
    this.apiService.getDomains().then((response) => {
      this.isLoading = false;
      if (Array.isArray(response)) {
        this.domains = response;
      }
      this.calculatedPageSize();
    }).catch((error) => {
      this.isLoading = false;
      console.log('Error: ', error);
    });
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
        domainTag: domainTagType.PRIMARY,
        subdomains: [{
          domainTag: domainTagType.PRIMARY
        }]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addDomain(result);
      }
    });
  }

  getStrokeDasharray() {
    const _circumference = 27 * 2 * Math.PI;
    return `${_circumference}, ${_circumference}`;
  }

  getStrokeDashoffset(dividend, divisor) {
    const _circumference = 27 * 2 * Math.PI;
    const offset = _circumference - ((dividend / divisor) * _circumference);
    return this.sanitizer.bypassSecurityTrustStyle(`stroke-dashoffset:${offset}`);
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
      status: statusType.Active,
      subdomains: []
    };
    dom.subdomains.forEach((subdom, index) => {
      const subdomain = {
        id: parseInt(id + '' + (index + 1)),
        domain: subdom.domain,
        usedStorage: 0,
        domainTag: subdom.domainTag,
        usedDomains: 0,
        status: statusType.Active,
        monthlyVisitor: subdom.monthlyVisitor
      };
      domain.subdomains.push(subdomain);
    });
    this.apiService.addDomain(domain).then((response) => {
      this.getDomains();
    }).catch((error) => {
      console.log('Error: ', error);
    });
  }

}
