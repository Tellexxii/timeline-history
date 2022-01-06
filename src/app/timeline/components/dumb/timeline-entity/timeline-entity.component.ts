import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {TimelineEntity} from "../../../models/timeline.model";

@Component({
  selector: 'app-timeline-entity',
  templateUrl: './timeline-entity.component.html',
  styleUrls: ['./timeline-entity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineEntityComponent implements OnInit {

  @Input() entity: TimelineEntity | null = null

  constructor() { }

  ngOnInit(): void {
  }

}
