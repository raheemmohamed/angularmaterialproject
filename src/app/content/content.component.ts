
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, from} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import {CourseDialogComponent} from '../course-dialog/course-dialog.component';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  // showFiller = false;
  

 
  constructor(public dialogs: MatDialog , private dialog: MatDialog) { }

  ngOnInit() {
    
  }

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  number = [];

  addHero(newHero: string, newHero2:string) {
    if (newHero || newHero2) {
      this.heroes.push(newHero);
      this.number.push(newHero2);
    }
  }

  openDialog() {

      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      this.dialog.open(CourseDialogComponent, dialogConfig);
  }

  

}
