import { mergeAll } from 'ramda';
import { SCHEDULE_NULL_TIME } from '../config/schedule';
import { LynxSchedule } from '../global/types/remote/LynxSchedule';
import { ScheduleGroups } from './fetchAllSchedules';

export const transformSchedules = (scheduleData: any) => {
  // Flatten the input from the last step
  scheduleData = mergeAll(scheduleData);

  let result = {};
  Object.keys(scheduleData).reduce((transformedData, key) => {
    const timeData = mergeAll(scheduleData[key]);
    const directionKeys = Object.keys(timeData);

    result[key] = {};

    directionKeys.forEach((directionKey, index) => {
      result[key][directionKey] = timeData[directionKey].stationStops.map((timeTable, timeTableIndex) => {
        const station = timeData[directionKey].stationNames[timeTableIndex];
        const stationStops = timeData[directionKey].stationStops[timeTableIndex].filter(
          (time) => time !== SCHEDULE_NULL_TIME
        );
        return {
          station,
          stationStops
        };
      });
    });

    return result;
  }, {});

  return result;
};

export default transformSchedules;
