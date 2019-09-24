export const transformOutputToJs = (scheduleData): string => {
  let fileContent = `"use strict";\nexports.__esModule = true;\n`;
  fileContent += `var schedule = ${JSON.stringify(scheduleData)};\n`;
  fileContent += `exports.schedule = schedule;\nexports["default"] = schedule;`;
  return fileContent;
};

export default transformOutputToJs;
