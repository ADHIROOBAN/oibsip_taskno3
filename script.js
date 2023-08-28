function convertTemperature() {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const inputUnit = document.getElementById("inputUnit").value;

  if (isNaN(temperature)) {
    document.getElementById("result").innerText = "Please enter a valid number.";
    return;
  }

  const unitNames = {
    celsius: "Celsius",
    fahrenheit: "Fahrenheit",
    kelvin: "Kelvin"
  };

  const conversions = {
    celsius: {
      fahrenheit: (temp) => (temp * 9 / 5) + 32,
      kelvin: (temp) => temp + 273.15
    },
    fahrenheit: {
      celsius: (temp) => (temp - 32) * (5 / 9),
      kelvin: (temp) => ((temp - 32) * (5 / 9)) + 273.15
    },
    kelvin: {
      celsius: (temp) => temp - 273.15,
      fahrenheit: (temp) => ((temp - 273.15) * 9 / 5) + 32
    }
  };

  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";

  for (const outputUnit in conversions[inputUnit]) {
    const convertedTemperature = conversions[inputUnit][outputUnit](temperature);
    const outputText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unitNames[outputUnit]}`;
    const outputElement = document.createElement("p");
    outputElement.innerText = outputText;
    resultContainer.appendChild(outputElement);
  }
}