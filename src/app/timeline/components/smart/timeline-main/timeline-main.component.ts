import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {Timeline} from "../../../models/timeline.model";

@Component({
  selector: 'app-timeline-main',
  templateUrl: './timeline-main.component.html',
  styleUrls: ['./timeline-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineMainComponent implements OnInit {

  timelines$: Observable<Timeline> = of({
    name: 'history',
    entities: [
      {
        name: 'WWII',
        dateSpread: {
          startDate: new Date('1939-09-01'),
          endDate: new Date('1945-09-02')
        },
        color: 'red'
      }
    ]
  })

  constructor() {
  }

  ngOnInit(): void {
  }

}
