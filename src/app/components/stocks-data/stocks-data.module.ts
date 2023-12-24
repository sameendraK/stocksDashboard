import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StocksDataComponent } from './stocks-data.component';
import { MatSort, MatSortHeader, MatSortModule } from '@angular/material/sort';
import { ProgessBarModule } from '../progess-bar/progess-bar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [StocksDataComponent],
  imports: [
    CommonModule,
    ProgessBarModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
    // MatSortModule
  ],
  // providers: [MatSort, MatSortHeader],
  exports: [StocksDataComponent]
})
export class StocksDataModule { }
