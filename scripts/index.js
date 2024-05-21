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