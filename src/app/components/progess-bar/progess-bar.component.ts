import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progess-bar.component.html',
  styleUrls: ['./progess-bar.component.css']
})
export class ProgessBarComponent {

  @Input()
  item: any;
  // @Input()
  high: number;
  low: number;
  // @Input()
  ltp: number;

  calculateProgress(item: any): number {
    const high = item.high;
    const low = item.low;
    const ltp = item.ltp;
  
    // Check for valid data range
    if (high === low) {
      return 0; // To avoid division by zero and ensure no progress when high and low are the same
    }
  
    // Calculate progress percentage
    const progress = ((ltp - low) / (high - low)) * 100;
  
    // Ensure progress stays within the range of 0 to 100
    return Math.min(100, Math.max(0, progress));
  }
  

}
