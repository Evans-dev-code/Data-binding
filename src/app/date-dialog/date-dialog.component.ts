import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-date-dialog',
  templateUrl: './date-dialog.component.html',
  styleUrls: ['./date-dialog.component.scss']
})
export class DateDialogComponent {
  dateFrom: string;
  dateTo: string;

  constructor(
    public dialogRef: MatDialogRef<DateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dateFrom = data.dateFrom || '';
    this.dateTo = data.dateTo || '';
  }

  closeDialog(): void {
    this.dialogRef.close({ dateFrom: this.dateFrom, dateTo: this.dateTo });
  }
}
