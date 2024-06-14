function calculateBMI() {
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const resultDiv = document.getElementById('result');

  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    resultDiv.textContent = 'Please enter valid height and weight.';
    return;
  }

  const bmi = weight / ((height / 100) ** 2);
  let bmiStatus;

  if (bmi < 18.5) {
    bmiStatus = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiStatus = 'Ideal';
  } else if (bmi >= 25 && bmi < 30) {
    bmiStatus = 'Overweight';
  } else {
    bmiStatus = 'Obese';
  }

  resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)}, which is ${bmiStatus}.`;
}
