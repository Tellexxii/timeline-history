import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineNavigatorComponent } from './timeline-navigator.component';

describe('TimelineNavigatorComponent', () => {
  let component: TimelineNavigatorComponent;
  let fixture: ComponentFixture<TimelineNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineNavigatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
