export const getConstantsFileData = (transformedScheduleData: any) => {

  const transformStationName = (stationName: string) => {
    return `STATION_${stationName.replace(/ /g, '_').replace(/-/g, '').replace(/\//g, '_').toUpperCase()}`;
  }

  let result = "";
  const baseKeys = Object.keys(transformedScheduleData); // weekday / saturday / etc
  const subKeys = Object.keys(transformedScheduleData[baseKeys[0]]); // inbound / outbound
  transformedScheduleData[baseKeys[0]][subKeys[0]].forEach((stationData) => {
    result += `export const ${transformStationName(stationData.station.Key)} = "${stationData.station.Key}";\n`
  });

  result += "\n";

  baseKeys.forEach((key) => {
    result += `export const TIME_KEY_${key.toUpperCase()} = "${key}";\n`
  });

  result += "\n";

  subKeys.forEach((key) => {
    result += `export const DIRECTION_KEY_${key.toUpperCase()} = "${key}";\n`;
  });

  return result;
}

export default getConstantsFileData;