import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  domains = [];

  constructor() { 
    this.domains = [{
      id: 1,
      domain: 'xyz.com',
      storage: 100,
      usedStorage: 50,
      avaialableDomains: 10,
      domainTag: 'Primary',
      usedDomains: 4,
      monthlyVisitorCapacity: 1000,
      monthlyVisitor: 100,
      subdomains: [{
        id: 11,
        domain: 'xyz.com',
        usedStorage: 50,
        domainTag: 'Primary',
        usedDomains: 4,
        status: 'Inactive',
        monthlyVisitor: 100
      }, {
        id: 12,
        domain: 'xyz.com',
        usedStorage: 50,
        domainTag: 'Staging',
        usedDomains: 4,
        status: 'Inactive',
        monthlyVisitor: 100
      }]
    }, {
      id: 2,
      domain: 'xyz.com',
      storage: 100,
      usedStorage: 50,
      avaialableDomains: 10,
      domainTag: 'Primary',
      usedDomains: 4,
      monthlyVisitorCapacity: 1000,
      monthlyVisitor: 100,
      status: 'Inactive',
      subdomains: []
    }, {
      id: 3,
      domain: 'xyz.com',
      storage: 100,
      usedStorage: 50,
      avaialableDomains: 10,
      domainTag: 'Primary',
      usedDomains: 4,
      monthlyVisitorCapacity: 1000,
      monthlyVisitor: 100,
      status: 'Active',
      subdomains: []
    }, {
      id: 4,
      domain: 'xyz.com',
      storage: 100,
      usedStorage: 50,
      avaialableDomains: 10,
      domainTag: 'Primary',
      usedDomains: 4,
      monthlyVisitorCapacity: 1000,
      monthlyVisitor: 100,
      status: 'Inactive',
      subdomains: []
    }];
  }

  getDomains() {
    return this.domains;
  }
}
