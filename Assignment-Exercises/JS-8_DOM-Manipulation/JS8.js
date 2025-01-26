document.addEventListener("DOMContentLoaded", () => {
    const counterText = document.querySelector("#counter-text");
    const addButton = document.querySelector("#button-add");
    const subtractButton = document.querySelector("#button-subtract");
    let counterVal = 0;

    addButton.addEventListener("click", () => {
        counterVal++;
        counterText.textContent = counterVal;
    });

    subtractButton.addEventListener("click", () => {
        if (counterVal > 0) {
            counterVal--;
            counterText.textContent = counterVal;
        }
    });
});
