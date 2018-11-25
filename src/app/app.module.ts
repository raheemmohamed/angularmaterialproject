import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import {MatDialogModule} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContentComponent } from './content/content.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { PopupComponent } from './popup/popup.component';

import {DialogOverviewExampleDialogComponent} from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';





@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    CourseDialogComponent,
    PopupComponent,
    DialogOverviewExampleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MatDialogModule,
    ReactiveFormsModule
  

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent, CourseDialogComponent, DialogOverviewExampleDialogComponent  ]
})
export class AppModule { }
