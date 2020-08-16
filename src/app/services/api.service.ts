import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  userDetail = {
    name: 'John Doe',
    email: 'emailaddress@email.com',
    profileImage: 'https://fuguchat.s3.ap-south-1.amazonaws.com/production/34954/image/e4DBtyuvWB_1596093394729.png'
  };

  constructor(private http: HttpClient) { 
    // this.domains = [{
    //   id: 1,
    //   domain: 'asxyz.com',
    //   storage: 100,
    //   usedStorage: 30,
    //   avaialableDomains: 10,
    //   domainTag: 'Primary',
    //   usedDomains: 4,
    //   monthlyVisitorCapacity: 1000,
    //   monthlyVisitor: 100,
    //   subdomains: [{
    //     id: 11,
    //     domain: 'nbmbn.com',
    //     usedStorage: 50,
    //     domainTag: 'Primary',
    //     usedDomains: 4,
    //     status: 'Inactive',
    //     monthlyVisitor: 100
    //   }, {
    //     id: 12,
    //     domain: 'asxssfyz.com',
    //     usedStorage: 50,
    //     domainTag: 'Staging',
    //     usedDomains: 4,
    //     status: 'Inactive',
    //     monthlyVisitor: 100
    //   }]
    // }, {
    //   id: 2,
    //   domain: 'cvx.com',
    //   storage: 100,
    //   usedStorage: 90,
    //   avaialableDomains: 10,
    //   domainTag: 'Primary',
    //   usedDomains: 4,
    //   monthlyVisitorCapacity: 1000,
    //   monthlyVisitor: 100,
    //   status: 'Inactive',
    //   subdomains: []
    // }, {
    //   id: 3,
    //   domain: 'yui.com',
    //   storage: 100,
    //   usedStorage: 70,
    //   avaialableDomains: 10,
    //   domainTag: 'Primary',
    //   usedDomains: 4,
    //   monthlyVisitorCapacity: 1000,
    //   monthlyVisitor: 100,
    //   status: 'Active',
    //   subdomains: []
    // }, {
    //   id: 4,
    //   domain: 'xyz.com',
    //   storage: 100,
    //   usedStorage: 10,
    //   avaialableDomains: 10,
    //   domainTag: 'Primary',
    //   usedDomains: 4,
    //   monthlyVisitorCapacity: 1000,
    //   monthlyVisitor: 100,
    //   status: 'Inactive',
    //   subdomains: []
    // }];
  }

  getUserDeatils() {
    return this.userDetail;
  }

  getDomains(): Promise<any> {
    return this.http.get(`${environment.API_URL}/domains`).toPromise();
  }

  addDomain(domain): Promise<any> {
    return this.http.post(`${environment.API_URL}/domains`, domain).toPromise();
  }
}
