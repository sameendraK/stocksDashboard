import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgessBarComponent } from './progess-bar.component';



@NgModule({
  declarations: [ProgessBarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProgessBarComponent
  ]
})
export class ProgessBarModule { }
