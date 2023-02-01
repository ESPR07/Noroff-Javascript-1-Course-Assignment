url = "https://botw-compendium.herokuapp.com/api/v2/category/equipment";



async function callAPI(){
    const itemContainer = document.querySelector(".listContainer");
    const response = await fetch(url);
    const result = await response.json();
    const apiArray = result.data;

    for(i = 0; i < apiArray.length; i++){
        const upperCaseName = apiArray[i].name.toUpperCase();
        const apostropheLess = apiArray[i].image.replace("'", "%27");
        
        if(i === 10){
            break;
        }

        itemContainer.innerHTML += `<a class="itemContainer">
                                        <h3 class="itemHeader">${upperCaseName}</h3>
                                        <div class="itemImage" style="background-image: url(${apostropheLess})"></div>
                                    </a>`
        
        console.log(apiArray[i]);
    }
}


callAPI();