url = "https://botw-compendium.herokuapp.com/api/v2/category/equipment";



async function callAPI(){
    const container = document.querySelector(".listContainer");
    const response = await fetch(url);
    const result = await response.json();
    const apiArray = result.data;

    for(i = 0; i < apiArray.length; i++){
        const upperCaseName = apiArray[i].name.toUpperCase();
        const apostropheLessImageURL = apiArray[i].image.replace("'", "%27");
        
        if(i === 12){
            break;
        }

        container.innerHTML += `<a class="itemContainer" href="/details.html?id=${apiArray[i].id}">
                                    <h3 class="itemHeader">${upperCaseName}</h3>
                                    <div class="itemImage" style="background-image: url(${apostropheLessImageURL})"></div>
                                    <p>Attack Power: ${apiArray[i].attack}</p>
                                    <p>Defense: ${apiArray[i].defense}</p>
                                </a>`

        
        
        console.log(apiArray[i]);
    }

}


callAPI();