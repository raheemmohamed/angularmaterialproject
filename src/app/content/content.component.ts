
import { Component, OnInit, ViewChild,ChangeDetectionStrategy } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Observable   } from 'rxjs';
import { of  } from 'rxjs';


import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig, MatSort, MatPaginator, Sort, PageEvent} from '@angular/material';
import {CourseDialogComponent} from '../course-dialog/course-dialog.component';

import { fromMatSort, sortRows } from '../../app/datasource-utils';
import { fromMatPaginator, paginateRows } from '../../app/datasource-utils';
import { map } from 'rxjs/internal/operators/map';

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

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedRows$: Observable<ShipData[]>;
  totalRows$: Observable<number>;
  

 
  constructor(public dialogs: MatDialog , private dialog: MatDialog) { }

  ngOnInit() {
    const sortEvents$: Observable<Sort> = fromMatSort(this.sort);
    const pageEvents$: Observable<PageEvent> = fromMatPaginator(this.paginator);

    const rows$ = of(exampleShips);

    this.totalRows$ = rows$.pipe(map(rows => rows.length));
    this.displayedRows$ = rows$.pipe(sortRows(sortEvents$), paginateRows(pageEvents$));
  }



  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  number = [];

  addHero(newHero: string, newHero2:string) {
   
      this.heroes.push(newHero);
    
    
      this.number.push(newHero2);
   
  }

  openDialog() {

      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      this.dialog.open(CourseDialogComponent, dialogConfig);
  }

  

}
export interface ShipData {
  vesselId: string;
  vesselName: string;
  ircs?: string;
  countryCode: string;
  vesselStatus: string;
  grossTonnage?: number;
  hullNumber?: string;
  vesselType: string;
  jonesActEligible: boolean;
  disabledDate?: string;
}

export const exampleShips: ShipData[] = [
  {
    'ircs': 'V7QV6',
    'vesselName': 'KYOWA ORCHID',
    'countryCode': 'US',
    'vesselId': 'IMO8675368',
    'vesselStatus': 'S',
    'grossTonnage': 1,
    'hullNumber': undefined,
    'vesselType': 'A21',
    'jonesActEligible': false,
    'disabledDate': undefined
  },
  {
    'ircs': 'WECH',
    'vesselName': 'MANULANI',
    'countryCode': 'US',
    'vesselId': 'IMO8675370',
    'vesselStatus': 'S',
    'grossTonnage': 1,
    'hullNumber': undefined,
    'vesselType': 'A21',
    'jonesActEligible': false,
    'disabledDate': undefined
  },
  {
    'ircs': 'WDB5483',
    'vesselName': 'FREEDOM',
    'countryCode': 'US',
    'vesselId': 'IMO8675382',
    'vesselStatus': 'S',
    'grossTonnage': 1,
    'hullNumber': undefined,
    'vesselType': 'A21',
    'jonesActEligible': false,
    'disabledDate': undefined
  },
  {
    'ircs': 'C6VT5',
    'vesselName': 'CORAL',
    'countryCode': 'BF',
    'vesselId': 'IMO8675394',
    'vesselStatus': 'S',
    'grossTonnage': 1,
    'hullNumber': undefined,
    'vesselType': 'A21',
    'jonesActEligible': false,
    'disabledDate': undefined
  },
  {
    'ircs': 'CQOD',
    'vesselName': 'AUTORACER',
    'countryCode': 'PO',
    'vesselId': 'IMO8675409',
    'vesselStatus': 'S',
    'grossTonnage': 1,
    'hullNumber': undefined,
    'vesselType': 'A21',
    'jonesActEligible': false,
    'disabledDate': undefined
  }
];
