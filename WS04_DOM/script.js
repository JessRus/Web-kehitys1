// TEHTÄVÄ 1
// Muuta otsikko
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function() {
    taskOneHeading.textContent = "Muokattu otsikko";
});

// Muuta tyyliä
const changeStyleButton = document.querySelector("#changeStyleButton");

changeStyleButton.addEventListener("click", function () {
    taskOneHeading.classList.toggle("highlight");
});

//Muuta eläinteksti
const animalText = document.querySelector("#animalText");
const changeTextButton = document.querySelector("#changeTextButton");

changeTextButton.addEventListener("click", function() {
    animalText.textContent = "Elefantit ovat pieni kokoisia";
});

// BONUS
animalText.textContent += " Elefantit elävät luonnossa Afrikassa ja Aasiassa.";

const backgroundButton = document.querySelector("#changeBackgroundButton");
backgroundButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});

// TEHTÄVÄ 2
const animalContent = document.querySelector("#animalContent");
const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

const animalHeading = document.createElement("h3");
animalHeading.textContent = "Päivän eläin";
animalHeading.classList.add("animal-heading");

const catDescription = document.createElement("p");
catDescription.textContent = "Tässä kissa syö karkkia.";

const catImage = document.createElement("img");
catImage.src = "images/Kissa.jpg";
catImage.alt = "Kissa";

animalContent.append(
    animalHeading,
    catDescription,
    catImage
);

hideAnimalButton.addEventListener("click", function() {
    animalContent.style.display = "none";
});

showAnimalButton.addEventListener("click", function() {
    animalContent.style.display = "block";
});

// TEHTÄVÄ 3
const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;

    if (selectedAnimal === "elephant") {
        animalName.textContent = "Elefantti";
        animalImage.src = "images/elephant.png";
        animalImage.alt = "Elefantti";
        animalDescription.textContent =
            "Elefantit ovat maailman suurimpia maaeläimiä.";
    }

    else if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiikeri";
        animalImage.src = "images/tiger.png";
        animalImage.alt = "Tiikeri";
        animalDescription.textContent =
            "Tiikeri on suuri kissaeläin, ne ovat söpöjä.";
    }

    else if (selectedAnimal === "penguin") {
        animalName.textContent = "Pingviini";
        animalImage.src = "images/penguin.png";
        animalImage.alt = "Pingviini";
        animalDescription.textContent =
            "Pingviinit eivät osaa lentää, mutta ovat hyviä uimareita.";
    }

    else if (selectedAnimal === "panda") {
        animalName.textContent = "Panda";
        animalImage.src = "images/panda.png";
        animalImage.alt = "Panda";
        animalDescription.textContent =
            "Panda syö bambua ja on laiska.";
    }
});

animalImage.addEventListener("mouseenter", function () {
    animalImage.classList.add("image-highlight");
});

animalImage.addEventListener("mouseleave", function () {
    animalImage.classList.remove("image-highlight");
});

// TEHTÄVÄ 4
const animalForm = document.querySelector("#animalForm");
const observationTableBody = document.querySelector("#observationTableBody");

animalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const animal = document.getElementById("observationAnimal").value.trim();
    const location = document.getElementById("observationLocation").value.trim();
    const date = document.getElementById("observationDate").value;

    if (animal === "" || location === "" || date === "") {
        alert("Täytä kaikki kentät.");
        return;
    }

    const newRow = document.createElement("tr");

    const animalCell = document.createElement("td");
    const locationCell = document.createElement("td");
    const dateCell = document.createElement("td");

    animalCell.textContent = animal;
    locationCell.textContent = location;
    dateCell.textContent = date;


    newRow.appendChild(animalCell);
    newRow.appendChild(locationCell);
    newRow.appendChild(dateCell);

    observationTableBody.appendChild(newRow);

    animalForm.reset();
});

// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE
// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE

const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function () {
    animalTable.hidden = !animalTable.hidden;
    console.log("Button Pressed");
});


