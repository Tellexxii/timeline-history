import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DateSpread} from "../../../models/timeline.model";
import {Subject} from "rxjs";

@Component({
  selector: 'app-timeline-navigator',
  templateUrl: './timeline-navigator.component.html',
  styleUrls: ['./timeline-navigator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineNavigatorComponent implements OnInit {

  private readonly _dateSpread$: Subject<DateSpread> = new Subject<DateSpread>()

  @Input()
  set dateSpread(dateSpread: DateSpread) {
    this._dateSpread$.next(dateSpread)
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
