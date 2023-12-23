import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progess-bar.component.html',
  styleUrls: ['./progess-bar.component.css']
})
export class ProgessBarComponent {

  @Input()
  high: number;
  @Input()
  low: number;
  @Input()
  ltp: number;

}
