export interface ScheduleStationData {
  Key: string,
  Value: number
}

export interface LynxSchedule {
  tripStops: any[],
  stationStops: any[],
  totalCount: number,
  stationNames: ScheduleStationData[],
  
}