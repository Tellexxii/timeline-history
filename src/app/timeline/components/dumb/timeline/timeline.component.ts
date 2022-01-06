import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs";
import {Timeline, TimelineEntity} from "../../../models/timeline.model";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent implements OnInit {

  private readonly _timeline$: Subject<Timeline> = new Subject<Timeline>()

  @Input()
  set timeline(timeline: Timeline) {
    this._timeline$.next(timeline)
  }

  @Output() onTimelineEventClick: EventEmitter<TimelineEntity> = new EventEmitter<TimelineEntity>()

  constructor() {
  }

  ngOnInit(): void {
  }



}
