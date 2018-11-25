import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatAutocompleteModule} from '@angular/material';
import {MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatAutocompleteModule,
    BrowserAnimationsModule
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
