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
