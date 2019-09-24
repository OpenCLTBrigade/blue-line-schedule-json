export const getConstantsFileData = (transformedScheduleData: any) => {

  const transformStationName = (stationName: string) => {
    return `STATION_${stationName.replace(/ /g, '_').replace(/-/g, '').replace(/\//g, '_').toUpperCase()}`;
  }

  let result = `"use strict";\nexports.__esModule = true;\n`;
  const baseKeys = Object.keys(transformedScheduleData); // weekday / saturday / etc
  const subKeys = Object.keys(transformedScheduleData[baseKeys[0]]); // inbound / outbound
  transformedScheduleData[baseKeys[0]][subKeys[0]].forEach((stationData) => {
    result += `exports.${transformStationName(stationData.station.Key)} = "${stationData.station.Key}";\n`
  });

  baseKeys.forEach((key) => {
    result += `exports.TIME_KEY_${key.toUpperCase()} = "${key}";\n`
  });

  subKeys.forEach((key) => {
    result += `exports.DIRECTION_KEY_${key.toUpperCase()} = "${key}";\n`;
  });

  return result;
}

export default getConstantsFileData;