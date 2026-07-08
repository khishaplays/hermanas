const fs = require("fs");
function testAppendFile() {
  const filedata = "\nHey its khisha\n";
  const cb = (error) => {
    if (error) {
      console.log("creating file failed ");
      console.log(error);
    }
  };
  fs.appendFile("test.txt", filedata, cb);
}
testAppendFile();
  function