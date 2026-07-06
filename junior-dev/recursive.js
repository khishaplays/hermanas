function salaryGrossPromptProcess(message = "Enter your gross salary:") {
  let gross = Number(prompt(message));

  if (!isNaN(gross)) {
    console.log(`You entered ${gross}, exiting`);
    return gross;
  }

  return salaryGrossPromptProcess(
    "Invalid gross salary entered. Please enter a valid number for gross salary. Try again:",
  );
}

salaryGrossPromptProcess();

function factorial(n = 1, lastsolution = 1) {}
