function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters

    let bmi = weight / (height * height);

    document.getElementById("bmi-value").textContent = bmi.toFixed(2);

    let bmiCategory = "";
    if (bmi < 18.5) {
        bmiCategory = "Kekurangan Berat Badan";
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiCategory = "Berat Badan Normal";
    } else if (bmi >= 25 && bmi < 30) {
        bmiCategory = "Kelebihan Berat Badan";
    } else {
        bmiCategory = "Obesitas";
    }

    document.getElementById("bmi-category").textContent = bmiCategory;
}