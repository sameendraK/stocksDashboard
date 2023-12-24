import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-stocks-data',
  templateUrl: './stocks-data.component.html',
  styleUrls: ['./stocks-data.component.css']
})
export class StocksDataComponent {

  constructor(
    private apiService: ApiService,
    private dataStoreService: DataStoreService
    // private paginator:MatPaginator
  ) { }

  stocksData = new MatTableDataSource<any>();
  stockie: any;

  @ViewChild(MatPaginator)
  paginator: MatPaginator

  @ViewChild(MatSort)
  sort: MatSort

  masterCheckBoxSelected: boolean;

  checkBoxChangeHandler() {
    this.masterCheckBoxSelected = !this.masterCheckBoxSelected;
    this.stocksData.data.forEach(item => item.isChecked = this.masterCheckBoxSelected)
  }

  isChecked() {
    this.masterCheckBoxSelected = this.stocksData.data.every((item) => {
      return item.checkbox;
    })
  }

  displayedColumns: string[] = ['isChecked', 'displayPhoto', 'symbol', 'ltp', 'stockMomentumRank', 'open', 'todaysRange', 'openHighLowSignal']

  ngOnInit() {
    this.apiService.get().subscribe((res: any) => {
      this.stocksData.data = res;
      this.dataStoreService.transformAPIResponse(res);
    })
  }
  ngAfterViewInit() {
    this.stocksData.paginator = this.paginator;
    this.stocksData.sort = this.sort;
  }

}
