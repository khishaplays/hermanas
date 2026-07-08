const fs = require("fs");

function createFile() {
  let currentDate = new Date();
  let fileName = `file-${currentDate.getTime()}.txt`;
  let fileData = `This is a test file created on ${currentDate.toLocaleString()}`;

  let data = " ";
  for (let i = 0; i < 10000; i++) {
    data += `This is khisha$`;
    fs.appendFile("currentdate.txt", fileData, (error) => {
      if (error) {
        console.log("Failed to append to file");
        console.log(error);
      }
      console.log(`File ${fileName} created successfully!`);
    });
  }
}
createFile();
