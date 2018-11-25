import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {
  
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
    
  form: FormGroup;
  description:string;

  constructor(
      private fb: FormBuilder,
      public dialogRef: MatDialogRef<CourseDialogComponent>,
      @Inject(MAT_DIALOG_DATA) data) {

      this.description = data.description;
  }

  // ngOnInit() {
  //     this.form = fb.group({
  //         description: [description, []],
  //     });
  // }

  save() {
      this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }

  

}

