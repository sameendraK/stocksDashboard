import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progess-bar.component.html',
  styleUrls: ['./progess-bar.component.css']
})
export class ProgessBarComponent {

  @Input()
  item: any;

  calculateProgress(item: any): number {
    const high = item.high;
    const low = item.low;
    const ltp = item.ltp;

    if (high === low) {
      return 0;
    }

    const progress = ((ltp - low) / (high - low)) * 100;

    return Math.min(100, Math.max(0, progress));
  }


}
