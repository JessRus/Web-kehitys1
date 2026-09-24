// Harjoitus 1

function showMessage() 
{alert("You clicked me!"); }

function showTable() {
    const animal = "Kissa";
    const habitat = "Koti";
    const diet = "Kalkkuna";

    const table = `
        <table class="display">
            <thead>
                <tr>
                    <th>Eläin</th>
                    <th>Elinympäristö</th>
                    <th>Ruokavalio</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${animal}</td>
                    <td>${habitat}</td>
                    <td>${diet}</td>
                </tr>
            </tbody>
        </table>
    `;

    const container = document.querySelector("#tableContainer");
    container.innerHTML = table; }


// Harjoitus 2
const Harjoitus2 = document.querySelector("#Harjoitus2");

Harjoitus2.addEventListener("mouseover", function () {
    Harjoitus2.textContent = "Stepped over me with a mouse!";
}); 

const AnimalTitle = document.querySelector("#AnimalTitle");

AnimalTitle.addEventListener("click", function () {
    AnimalTitle.textContent = "Bye bye mouse!"; 
    AnimalTitle.style.color = "red";
});

// Harjoitus 3

const feedback = document.querySelector("#feedback");
const status = document.querySelector("#status");
const charcount = document.querySelector("#charcount");
const preview = document.querySelector("#preview");


feedback.addEventListener("focus", function () {
    status.textContent = "Kirjoita viestisi!";
    feedback.style.backgroundColor = "rgb(211, 220, 188)";
});


feedback.addEventListener("blur", function () {
    status.textContent = "";
    feedback.style.backgroundColor = "";
});


feedback.addEventListener("input", function () {
    const text = feedback.value;

    charcount.textContent = text.length + "/200";
    preview.textContent = text;
});

// Harjoitus 4

const feedbackForm = document.querySelector("#feedbackForm");

feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = feedback.value;

    if (text.length < 10 || text.length > 200) {
        status.textContent = "Viestin pitää olla 10-200 merkkiä pitkä.";
        return;
    }

    feedback.value = "";
    status.textContent = "Kiitos Viestistä <3";
});

// Harjoitus 5

const keybox = document.querySelector("#keybox");
const keyinfo = document.querySelector("#keyinfo");

document.addEventListener("keydown", function (event) {
    console.log(event);

    keyinfo.textContent = `painettu näppäin: ${event.key}, näppäinkoodi: ${event.code}`;
    keybox.textContent = event.key;
    keybox.style.fontSize = "3em";
});

