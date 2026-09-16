// Replaced this code with the functions in ./filteringFish.js

//import {database} from './aquariumData.js'

//export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishListHTML = ''
    for (const fish of database.fish) {
        fishListHTML += `
            <div class="fish">    
                <h2>${fish.name} the ${fish.species}</h2>
                    <ul>
                        <li>Length: ${fish.length}</li>
                        <li>Location: ${fish.location}</li>
                        <li>Diet: ${fish.diet}</li>
                        <img src=" ${fish.image} alt= "image of a ${fish.species} named ${fish.name}">
                    </ul>
            </div>
        `
        }
    return fishListHTML
