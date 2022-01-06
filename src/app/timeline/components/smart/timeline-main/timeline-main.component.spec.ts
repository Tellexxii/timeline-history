import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineMainComponent } from './timeline-main.component';

describe('TimelineMainComponent', () => {
  let component: TimelineMainComponent;
  let fixture: ComponentFixture<TimelineMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
