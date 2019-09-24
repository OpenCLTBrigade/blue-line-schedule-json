import fetch from 'node-fetch';
import { PATH_OUTPUT_CONSTANTS_FILE, PATH_OUTPUT_DATA_FILE } from './config/output';
import {
  fetchAllSchedules,
  getConstantsFileData,
  scheduleGroups,
  transformSchedules,
  writeDataFile
  } from './lib';

const main = async () => {
  
  const fetchedSchedules = await fetchAllSchedules(scheduleGroups);
 
  //Pass the output data into a transform function with the original group structure
  const transformedScheduleData = transformSchedules(fetchedSchedules);

  // Generate a constants.js for accessing the keys easier
  const constantsFileData = getConstantsFileData(transformedScheduleData)

  writeDataFile(PATH_OUTPUT_DATA_FILE, JSON.stringify(transformedScheduleData));
  writeDataFile(PATH_OUTPUT_CONSTANTS_FILE, constantsFileData);
}

main();

