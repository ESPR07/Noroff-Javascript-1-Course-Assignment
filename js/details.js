const entryURL = "https://botw-compendium.herokuapp.com/api/v2/entry/";

const locationList = document.querySelector(".locationList");
const contentContainer = document.querySelector(".contentContainer");
const detailsContainer = document.querySelector(".detailsContainer");
const dynamicTitle = document.querySelector("title");
const detailsHeader = document.querySelector(".detailsHeader");
const dynamicNav = document.querySelector(".dynamicNav");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const queryId = params.get("id");

const fullEntryURL = entryURL + queryId;

async function getEntry() {
  const response = await fetch(fullEntryURL);
  const result = await response.json();
  const equipmentInfo = result.data;

  console.log(equipmentInfo);

  const splitName = equipmentInfo.name.split(" ");

  for (i = 0; i < splitName.length; i++) {
    splitName[i] = splitName[i].charAt(0).toUpperCase() + splitName[i].slice(1);
  }

  const correctedName = splitName.join(" ");

  dynamicTitle.innerHTML = correctedName;

  dynamicNav.innerHTML = correctedName;

  let locationLoop = equipmentInfo.common_locations;

  if (locationLoop === null) {
    locationLoop = "";
  }

  for (i = 0; i < locationLoop.length; i++) {
    locationList.innerHTML += `<li>${locationLoop[i]}</li>`;
  }

  const apostropheLessImageURL = equipmentInfo.image.replace("'", "%27");

  // detailsContainer.innerHTML += `<h3>${correctedName}</h3>
  //                                 <div class="statsListContainer">
  //                                     <ul class="statsList">
  //                                         <li><p>Attack: ${equipmentInfo.attack}</p></li>
  //                                         <li><p>Defense: ${equipmentInfo.defense}</p></li>
  //                                     </ul>
  //                                 </div>
  //                                <div class="detailsImage" style="background-image: url(${apostropheLessImageURL})"></div>
  //                                <p class="equipmentDescription">${equipmentInfo.description}</p>
  //                                `

  //////////////////////////////////////////////////////////////
  // createElement method of doing the same thing I did above://
  //////////////////////////////////////////////////////////////

  function createHTML() {
    let h3 = document.createElement("h3");
    h3.innerText = correctedName;

    let containerDiv = document.createElement("div");
    containerDiv.classList.add("statsListContainer");

    let htmlList = document.createElement("ul");
    htmlList.classList.add("statsList");

    let attackAttribute = document.createElement("li");
    attackAttribute.innerText = "Attack: " + equipmentInfo.attack;

    let defenseAttribute = document.createElement("li");
    defenseAttribute.innerText = "Defense: " + equipmentInfo.defense;

    let imageContainer = document.createElement("div");
    imageContainer.classList.add("detailsImage");
    imageContainer.style.backgroundImage =
      "url(" + apostropheLessImageURL + ")";

    let description = document.createElement("p");
    description.classList.add("equipmentDescription");
    description.innerText = equipmentInfo.description;

    detailsContainer.appendChild(h3);
    detailsContainer.appendChild(containerDiv);
    containerDiv.appendChild(htmlList);
    htmlList.appendChild(attackAttribute);
    htmlList.appendChild(defenseAttribute);
    detailsContainer.appendChild(imageContainer);
    detailsContainer.appendChild(description);
  }

  createHTML();
}

try {
  getEntry();
} catch (error) {
  contentContainer.innerHTML = `<p>Something went wrong!`;
  console.log(error);
}
