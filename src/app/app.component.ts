import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateDialogComponent } from './date-dialog/date-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'binding';
  form: FormGroup;

  constructor(private dialog: MatDialog, private fb: FormBuilder) {
    // Initialize the form with default values
    this.form = this.fb.group({
      portfolio: [''],
      subPortfolio: [''],
      constraint: [''],
      subConstraint: [''],
      baseCurrency: [''],
      quoteCurrency: [''],
      dateFrom: [''],
      dateTo: ['']
    });
  }

  openDateDialog() {
    const dialogRef = this.dialog.open(DateDialogComponent, {
      width: '350px',
      disableClose: true,
      hasBackdrop: true,
      position: { top: '50%', left: '50%' },
      panelClass: 'custom-dialog-container',
      data: {
        dateFrom: this.form.value.dateFrom,
        dateTo: this.form.value.dateTo
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.form.patchValue({
          dateFrom: result.dateFrom,
          dateTo: result.dateTo
        });
      }
    });
  }

  submitForm() {
    console.log('Form submitted:', this.form.value);
  }

  clearForm() {
    this.form.reset();
  }
}
