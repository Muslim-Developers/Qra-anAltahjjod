const fs = require('fs')

const { meaning } = require("./1-meaning.js");

// console.log(meaning)
let sura;

fs.readFile("../surasData/2.json", async function (err, data) {
  // If there is any error this line will execute
  if (err) throw err;
  // Here we are converting the data to Javascript object
  const file = await JSON.parse(data);
  // Here we are printing the data.
  sura = file.parts.map((part, index) => {
    return {
      ...part,
      meaning: meaning[index].description
    }
  })
  const jsonData = JSON.stringify(sura)
  fs.writeFile('output.json', jsonData, (err) => {

    // In case of a error throw err. 
    if (err) throw err;
  })
});
