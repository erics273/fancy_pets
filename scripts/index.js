"use strict"

/*
bootstrap card example:

<div class="card w-25">
  <img src="PET IMAGE PATH GOES HERE" class="card-img-top card-img-fit" alt="ALT TEXT HERE">
  <div class="card-body">
    <h5 class="card-title">PET NAME HERE</h5>
    <p class="card-text">PET DETAILS HERE</p>
  </div>
</div>
*/

window.onload = () => {

  initPetsDropdown();

  let petDropdown = document.querySelector("#petSelect");

  petDropdown.addEventListener("change", displayPetCard)


}

function displayPetCard(event){

  let petDiv = document.querySelector("#pets");

  //clear out the div before added the new card
  petDiv.innerHTML = "";

  let pet = pets.find((pet)=>{
    return pet.name === event.target.value
  })

    //create the card div
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "w-25");

    //create the image for the card
    let cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top", "card-img-fit");
    cardImage.src = pet.image;
    cardImage.alt = pet.name;

    //add the image to the card
    cardDiv.appendChild(cardImage);

    //make the card body
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    //add card title
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = pet.name

    //add the card title to the body
    cardBody.appendChild(cardTitle)

    //build the card text <p> where the rest of thei info about the pet goes
    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerHTML = `
      ${pet.name} is a ${pet.type}. The breed is ${pet.breed} and their best trick is, ${pet.bestTrick}.
    `

    //add the card text to the card body
    cardBody.appendChild(cardText)

    //add the card body to the card div
    cardDiv.appendChild(cardBody)


    //add the card to the div on the page
    petDiv.appendChild(cardDiv);



  

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