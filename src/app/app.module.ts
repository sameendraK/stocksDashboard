import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StocksDataComponent } from './components/stocks-data/stocks-data.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortHeader, MatSortModule } from '@angular/material/sort';
import { ProgessBarComponent } from './components/progess-bar/progess-bar.component';
import { ProgessBarModule } from './components/progess-bar/progess-bar.module';


@NgModule({
  declarations: [
    AppComponent,
    StocksDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ProgessBarModule
  ],
  providers: [MatSort, MatSortHeader],
  bootstrap: [AppComponent]
})
export class AppModule { }
