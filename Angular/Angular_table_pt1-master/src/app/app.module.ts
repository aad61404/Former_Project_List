import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TableBasicExample } from './table-basic-example';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


@NgModule({
  declarations: [
    TableBasicExample
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule
  ],
  providers: [],

})
export class AppModule { }


