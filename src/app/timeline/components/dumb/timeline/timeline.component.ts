import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Timeline, TimelineEntity} from "../../../models/timeline.model";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent implements OnInit {

  _timeline$: Subject<Timeline | null> = new Subject<Timeline | null>()
  private readonly _scale$: BehaviorSubject<number> = new BehaviorSubject<number>(1)

  @Input()
  set timeline(timeline: Timeline | null) {
    this._timeline$.next(timeline)
  }

  @Input()
  set scale(scale: number) {
    this._scale$.next(scale)
  }

  @Input()
  set start(start: number) {

  }

  @Input()
  set end(end: number) {

  }

  @Output() onTimelineEventClick: EventEmitter<TimelineEntity> = new EventEmitter<TimelineEntity>()

  constructor() {
  }

  ngOnInit(): void {
  }



}
