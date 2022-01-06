export interface TimelineEntity {
  dateSpread: DateSpread;
  color: string
}

export interface Timeline {
  name: string
  events: TimelineEntity[]
}

export interface DateSpread {
  startDate: Date,
  endDate: Date
}
