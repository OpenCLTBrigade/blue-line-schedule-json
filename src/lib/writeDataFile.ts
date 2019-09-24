import { writeFile } from 'fs';

const writeDataFile = function (outputFile: string, dataToWrite: string) {
  writeFile(outputFile, dataToWrite, 'utf8', function(err) {
    if (err) {
      console.error('Failed :(', err);
    } else {
      console.log('Wrote output file', outputFile);
    }
  });
}

export default writeDataFile;