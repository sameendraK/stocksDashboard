import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StocksDataComponent } from './stocks-data.component';
import { MatSort, MatSortHeader, MatSortModule } from '@angular/material/sort';
import { ProgessBarModule } from '../progess-bar/progess-bar.module';



@NgModule({
  declarations: [StocksDataComponent],
  imports: [
    CommonModule,
    ProgessBarModule
    // MatSortModule
  ],
  // providers: [MatSort, MatSortHeader],
  exports: [StocksDataComponent]
})
export class StocksDataModule { }
