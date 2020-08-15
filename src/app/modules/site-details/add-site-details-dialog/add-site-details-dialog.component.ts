import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-site-details-dialog',
  templateUrl: './add-site-details-dialog.component.html',
  styleUrls: ['./add-site-details-dialog.component.scss']
})
export class AddSiteDetailsDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddSiteDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
