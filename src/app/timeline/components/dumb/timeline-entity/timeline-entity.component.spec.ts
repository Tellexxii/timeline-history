import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineEntityComponent } from './timeline-entity.component';

describe('TimelineEntityComponent', () => {
  let component: TimelineEntityComponent;
  let fixture: ComponentFixture<TimelineEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
