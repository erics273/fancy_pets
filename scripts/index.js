"use strict"

/*
bootstrap card example:

<div class="card">
  <img src="PET IMAGE PATH GOES HERE" class="card-img-top" alt="ALT TEXT HERE">
  <div class="card-body">
    <h5 class="card-title">PET NAME HERE</h5>
    <p class="card-text">PET DETAILS HERE</p>
  </div>
</div>
*/

window.onload = () => {

  initPetsDropdown();

  let petDropdown = document.querySelector("#petSelect");

  //we want to display the selected pet when the dropdown is chagned
  petDropdown.addEventListener("change", displayPetCard)


}

function displayPetCard(event){

  //get hold of the div where the pet will be dispayed
  let petDiv = document.querySelector("#pets");

  //clears out the prevous pet
  petDiv.innerHTML = "";

  //get the selected value from the dropdown
  // let selectedPet = event.target.value;

  // //find the matching pet in the pets array
  // let pet = pets.find((pet)=>{
    
  //   if(pet.name === selectedPet){
  //     return true;
  //   }
  //   return false;

  // })

  //one liner for the above
  let pet = pets.find((pet) => pet.name === event.target.value)

/*
bootstrap card example:

<div class="card w-50">
  <img src="PET IMAGE PATH GOES HERE" class="card-img-top" alt="ALT TEXT HERE">
  <div class="card-body">
    <h5 class="card-title">PET NAME HERE</h5>
    <p class="card-text">PET DETAILS HERE</p>
  </div>
</div>
*/

//lets create card div and add it's classes
let cardDiv = document.createElement("div");
cardDiv.classList.add("card", "w-25");

//lets create the image and set it properties
let cardImage = document.createElement("img");
cardImage.classList.add("card-img-top", "card-img-fit");

//add the src attribute to the image
cardImage.src = pet.image;
cardImage.alt = pet.name;

//add the image to the cardDiv
cardDiv.appendChild(cardImage);

//create the card body and add it's classes
let cardBody = document.createElement("div")
cardDiv.classList.add("card-body");

//lets create the card title
let cardTitle = document.createElement("h5");
cardTitle.classList.add("card-title");

//set the pet name as the card title
cardTitle.innerText = pet.name;


//add the card title to the card body
cardBody.appendChild(cardTitle);


//crate the p tag for the card details
let cardText = document.createElement("p");
cardTitle.classList.add("card-text");

cardText.innerHTML = `
      ${pet.name} is a ${pet.type}. The breed is ${pet.breed} and their best trick is, ${pet.bestTrick}.
    `

//add the cardText to the cardBody
cardBody.appendChild(cardText);

//add the card body to the card div
cardDiv.appendChild(cardBody)

//add the card to the petDiv
petDiv.appendChild(cardDiv)


}

function initPetsDropdown() {
    
  //let's get a hold of the dropdown for the categories from the activities.html
  let petDropdown = document.querySelector("#petSelect");

  //create the element for the default option
  let defaultOption = document.createElement("option");

  //this is whate we get back in JS when we ask for the selected value
  defaultOption.value = "";

  //this is what the user actually selects from the dropdown
  defaultOption.textContent = "Select a Pet";

  //add the option we created to the dropdown
  petDropdown.appendChild(defaultOption);

  //write a loop to work with each individual category and build an option for it
  pets.forEach( (pet) => {

      //create the new option for the category we are on in the loop
      let newOption = document.createElement("option");

      //set the value for the option
      newOption.value = pet.name;

      //set the textContent that the user will see when choosing a category
      newOption.textContent = pet.name;

      petDropdown.appendChild(newOption);

  })
  

}