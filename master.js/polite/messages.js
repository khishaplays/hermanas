/*
node js 
for your data in the .json file.
for each applicant data.
create a message:to inform him/her
that he/she did not get the job.*/

/* Use js
for your data in the .json file.
for each applicant data.
create a message: to inform him/her
that he/she did not get the job. */

const fs = require("fs");

const data = require("./data.json");

console.log(data);

const outputData = [];

let i = 0;
while (i < data.length) {
  console.log(data[i]);

  const title = data[i].gender === "male" ? "sir" : "madam";

  const message = `Dear ${title},
We regret to inform you that you have not been selected for the position.
Thank you for your time and effort in the application process.
`;

  console.log(message);

  outputData.push({
    id: data[i].id,
    first_name: data[i].first_name,
    last_name: data[i].last_name,
    email: data[i].email,
    gender: data[i].gender,
    phone: data[i].phone,
    message: message,
  });

  i++;
}

fs.writeFileSync("output.json", JSON.stringify(outputData, null, 2));

console.log("Data successfully written to output.json");
