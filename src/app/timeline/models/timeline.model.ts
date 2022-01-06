export interface TimelineEntity {
  name: string
  dateSpread: DateSpread;
  color: string
}

export interface Timeline {
  name: string
  entities: TimelineEntity[]
}

export interface DateSpread {
  startDate: Date,
  endDate: Date
}
