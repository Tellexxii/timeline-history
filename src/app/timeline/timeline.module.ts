import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineComponent} from './components/dumb/timeline/timeline.component';
import {TimelineNavigatorComponent} from './components/dumb/timeline-navigator/timeline-navigator.component';
import {TimelineMainComponent} from './components/smart/timeline-main/timeline-main.component';
import {TimelineEntityComponent} from './components/dumb/timeline-entity/timeline-entity.component';


@NgModule({
  declarations: [
    TimelineComponent,
    TimelineNavigatorComponent,
    TimelineMainComponent,
    TimelineEntityComponent
  ],
  exports: [
    TimelineComponent,
    TimelineMainComponent,
    TimelineEntityComponent,
    TimelineNavigatorComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class TimelineModule {
}
