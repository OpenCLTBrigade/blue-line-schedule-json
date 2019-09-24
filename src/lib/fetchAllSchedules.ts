import fetch from 'node-fetch';
import schedule from '../config/schedule';

export interface TimeGroupKeys {
  inbound: string,
  outbound: string
}

export interface ScheduleGroups {
  [index: string]: TimeGroupKeys
}

export const scheduleGroups: ScheduleGroups = {
  weekday: {
    inbound: schedule.URL_INBOUND_WEEKDAY,
    outbound: schedule.URL_OUTBOUND_WEEKDAY
  },
  saturday: {
    inbound: schedule.URL_INBOUND_SATURDAY,
    outbound: schedule.URL_OUTBOUND_SATURDAY
  },
  sunday: {
    inbound: schedule.URL_INBOUND_SUNDAY,
    outbound: schedule.URL_OUTBOUND_SUNDAY
  }
};

export const fetchSchedulesForTimeGroup = async (timeGroup: TimeGroupKeys, groupKey: string) => {
  
  return new Promise(async (resolveAll) => {
    const promiseList = Object.keys(timeGroup).map(async (directionKey) => {
      return new Promise(async (resolveSubtask) => {
        const response = await fetch(timeGroup[directionKey]);
        const responseData = await response.json();
        resolveSubtask({ [directionKey]: responseData });
      });
    });

    const groupData = await Promise.all(promiseList);    
    resolveAll({ [groupKey]: groupData });
    
  });
};


export const fetchAllSchedules = async (scheduleGroups: ScheduleGroups) => {
  return new Promise(async (resolve) => {
    const fetchPromises = Object.keys(scheduleGroups).map(async (groupKey) => {
      const timeGroup: TimeGroupKeys = scheduleGroups[groupKey];
      return fetchSchedulesForTimeGroup(timeGroup, groupKey);
    });

    const fetchResult = await Promise.all(fetchPromises);

    resolve(fetchResult);
  })
};

export default fetchAllSchedules;