/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/

const activateFlight = (e) => {
    document.querySelector("#flight").classList.toggle("enabled");
    document.querySelector("#flight").classList.toggle("disabled");
}

const activateMindreading = (e) => {
    document.querySelector("#mindreading").classList.toggle("enabled");
    document.querySelector("#mindreading").classList.toggle("disabled");
}

const activateXray = (e) => {
    document.querySelector("#xray").classList.toggle("enabled");
    document.querySelector("#xray").classList.toggle("disabled");
}

const activateAll = (e) => {
    sections = document.querySelectorAll(".power") //.classList.add("enabled");
    sections.forEach(element => {
        element.classList.add("enabled");
        element.classList.remove("disabled");
    });
}

const disableAll = (e) => {
    sections = document.querySelectorAll(".power") //.classList.add("enabled");
    sections.forEach(element => {
        element.classList.add("disabled");
        element.classList.remove("enabled");
    });
}

document.querySelector("#activate-flight").addEventListener("click", activateFlight);
document.querySelector("#activate-mindreading").addEventListener("click", activateMindreading);
document.querySelector("#activate-xray").addEventListener("click", activateXray);
document.querySelector("#activate-all").addEventListener("click", activateAll);
document.querySelector("#deactivate-all").addEventListener("click", disableAll);







/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/


/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/