const fs = require("fs");

//Read the 'Dirty file'
fs.readFile("./counties_dirty.txt", "utf8", function read(err, data) {
  if (err) {
    return console.log(err.message);
  }

  //Remove numberings and '.'s
  cleanedString = data.replace(/[0-9, \.]/g, " ");
  //Remove unnecessary space from start and end of string
  cString = cleanedString.trim();
  //Convert the string into an array
  const cArray = cString.split("    ");

  countiesArray = JSON.stringify(cArray.sort());

  fs.writeFile("./countiesString.txt", countiesArray, function (err) {
    if (err) {
      return console.log(err);
    }
    //There are 47 counties in Kenya. This should be the length of the array
    console.log(cArray.length + " Counties saved");
  });
  //Write out the result to the same directory
  /*
  fs.writeFile("./counties.txt", cArray, function (err) {
    if (err) {
      return console.log(err);
    }
    //There are 47 counties in Kenya. This should be the length of the array
    console.log(cArray.length + " Counties saved");
  });
  */
});
