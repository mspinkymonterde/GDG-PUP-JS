function checkAge() {
    const ageInput = document.getElementById('ageInput').value;
    let category;

    if (isNaN(ageInput) || ageInput === '') {
        category = "Invalid age. Please enter a valid number.";
    } else {
        const age = parseInt(ageInput, 10);
        if (age < 0) {
            category = "Invalid age. Please enter a valid number.";
        } else if (age >= 0 && age <= 12) {
            category = "Child";
        } else if (age >= 13 && age <= 19) {
            category = "Teenager";
        } else if (age >= 20) {
            category = "Adult";
        }
    }

    document.getElementById('result').textContent = category;
}