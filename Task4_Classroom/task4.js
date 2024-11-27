// Authors: Elad Silam 208112185
// Shai Salem : 314784372


const arrOfFileNames = [
  "Dummy(1)",
  "Dummy(2)",
  "Dummy(3)",
  "Dummy(4)",
  "Dummy(5)",
  "Dummy(6)",
  "Dummy(7)",
  "Dummy(8)",
  "Dummy(9)",
  "Dummy(10)",
];
console.log(arrOfFileNames);

// importing the relevant modules
const fs = require('fs')
const path = require('path')

// initiallizing variables
const dummy_dir_name = "DummyTextFiles"
const nameOfOutputFile = "output.txt"
const pathToDummyFiles = path.join(__dirname, dummy_dir_name);
const pathToOutputTxt = path.join(pathToDummyFiles, nameOfOutputFile);
let lenOfArr = arrOfFileNames.length
let currLine;
let contentOfTxt;
let currFileArr;
let currFileName;

// Loop to iterate on each file
for(let fileIndex = 1 ; fileIndex <= lenOfArr ; fileIndex++)
{
    currFileName = `Dummy`+`(${fileIndex}).txt`
    contentOfTxt = fs.readFileSync(
      path.join(pathToDummyFiles, currFileName),
      'utf-8'
    );
    currFileArr  = contentOfTxt.split('\n')

    // Loop to iterate on each line in the file and append it to the new output file.
    for(let line = 0 ; line<fileIndex ; line++)
    {
        currLine = currFileArr[line];

        fs.appendFileSync(pathToOutputTxt,currLine+'\n');

        
    }
    if (fileIndex<lenOfArr)
    {
      // for better clearance
        fs.appendFileSync(pathToOutputTxt, "\n\n\n");
    }

    
}
