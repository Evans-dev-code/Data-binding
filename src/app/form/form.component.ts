import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DateDialogComponent } from '../date-dialog/date-dialog.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  form: FormGroup;
  submittedData: any = null;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.form = this.fb.group({
      portfolio: ['', Validators.required],
      subPortfolio: ['', Validators.required],
      constraint: ['', Validators.required],
      subConstraint: ['', Validators.required],
      baseCurrency: ['', Validators.required],
      quoteCurrency: ['', Validators.required],
      dateFrom: ['', Validators.required],
      dateTo: ['', Validators.required],
    });
}

openDateDialog(): void {
  const dialogRef = this.dialog.open(DateDialogComponent, {
    width: '400px',
    data: { dateFrom: this.form.value.dateFrom, dateTo: this.form.value.dateTo }
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

submitForm(): void {
  if (this.form.valid) {
    this.submittedData = { ...this.form.value };
    console.log('Form submitted:', this.submittedData);
    // This is where you will send data to the backend using an HTTP service
  } else {
    console.log('Form is invalid');
  }
}

clearForm(): void {
  this.form.reset();
  this.submittedData = null;
}
}
