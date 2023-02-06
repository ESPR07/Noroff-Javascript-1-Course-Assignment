const entryURL = "https://botw-compendium.herokuapp.com/api/v2/entry/";

const detailsContainer = document.querySelector(".detailsContainer");
const dynamicTitle = document.querySelector("title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const queryId = params.get("id");

const fullEntryURL = entryURL + queryId;

async function getEntry() {
    const response = await fetch(fullEntryURL);
    const result = await response.json();
    const equipmentInfo = result.data;

    console.log(equipmentInfo);
}

getEntry();