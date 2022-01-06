import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-timeline-main',
  templateUrl: './timeline-main.component.html',
  styleUrls: ['./timeline-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineMainComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
