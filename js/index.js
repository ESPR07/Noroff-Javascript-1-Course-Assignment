categoryURL = "https://botw-compendium.herokuapp.com/api/v2/category/equipment";
const container = document.querySelector(".listContainer");


async function callAPI(){
    const response = await fetch(categoryURL);
    const result = await response.json();
    const apiArray = result.data;

    for(i = 0; i < apiArray.length; i++){
        const upperCaseName = apiArray[i].name.toUpperCase();
        const apostropheLessImageURL = apiArray[i].image.replace("'", "%27"); //replaces Apostrophe from URL with compatible code.
        
        if(i === 15){
            break;
        }

        // container.innerHTML += `<a class="itemContainer" href="/details.html?id=${apiArray[i].id}">
        //                             <h3 class="itemHeader">${upperCaseName}</h3>
        //                             <div class="itemImage" style="background-image: url(${apostropheLessImageURL})"></div>
        //                             <p>Attack Power: ${apiArray[i].attack}</p>
        //                             <p>Defense: ${apiArray[i].defense}</p>
        //                         </a>`

        
        // createElement method of doing the same thing I did over:

        function createHTML(){
            let a = document.createElement('a');
            a.classList.add('itemContainer');
            a.href = "/details.html?id=" + apiArray[i].id;

            let h3 = document.createElement('h2');
            h3.classList.add("itemHeader");
            h3.innerText = upperCaseName;

            let htmlImage = document.createElement('div')
            htmlImage.classList.add("itemImage");
            htmlImage.style.cssText = "background-image: url(" + apostropheLessImageURL + ")"

            let pElementAttack = document.createElement('p');
            pElementAttack.innerText = "Attack Power: " + apiArray[i].attack;

            let pElementDefense = document.createElement('p');
            pElementDefense.innerText = "Defense: " + apiArray[i].defense;

            container.appendChild(a);
            a.appendChild(h3);
            a.appendChild(htmlImage);
            a.appendChild(pElementAttack);
            a.appendChild(pElementDefense);
        }

        createHTML();

        
        console.log(apiArray[i]);
    }

}

try {
    callAPI();
}

catch (error) {
    container.innerHTML = `<p>Something went wrong!</p>`;
    console.log("Error: ", error);
} 
