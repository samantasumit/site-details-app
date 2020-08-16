import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { domainTagType } from 'src/app/enum/app.enum';

@Component({
  selector: 'app-add-site-details-dialog',
  templateUrl: './add-site-details-dialog.component.html',
  styleUrls: ['./add-site-details-dialog.component.scss']
})
export class AddSiteDetailsDialogComponent {

  domainTagTypeEnum = domainTagType;
  
  constructor(
    public dialogRef: MatDialogRef<AddSiteDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  addSubdomain(data) {
    if (data && data.subdomains && Array.isArray(data.subdomains)) {
      data.subdomains.push({});
    } else {
      data.subdomains = [{}];
    }
  }

  removeSubdomain(index, data) {
    data.subdomains.splice(index, 1);
  }

  isDataValid(data) {
    if (!data.domain || !data.domainTag || data.storage === null || data.storage === undefined) {
      return false;
    }
    if (data && data.subdomains && Array.isArray(data.subdomains)) {
      for (let i = 0; i < data.subdomains.length; i++) {
        if (!data.subdomains[i].domain || !data.subdomains[i].domainTag || data.subdomains[i].monthlyVisitor === null || data.subdomains[i].monthlyVisitor === undefined) {
          return false;
        }
      }
    }
    return true;
  }

  close(): void {
    this.dialogRef.close();
  }

}
