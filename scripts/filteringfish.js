import {database} from './aquariumData.js'

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = ""

        for (const fish of database.fish) {
        if (fish.length % 3 === 0) {
            holyFish += `
            <div class="fish">    
                <h2>${fish.name} the <br>${fish.species}</h2>
                    <ul>
                        <li>Length: ${fish.length}</li>
                        <li>Location: ${fish.location}</li>
                        <li>Diet: ${fish.diet}</li>
                        <img src=" ${fish.image} alt= "image of a ${fish.species} named ${fish.name}">
                    </ul>
            </div>
        `
        }
    }
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldierFish = ""
    for (const fish of database.fish) {
        if (fish.length % 5 === 0) {
            soldierFish += `
            <div class="fish">    
                <h2>${fish.name} the <br>${fish.species}</h2>
                    <ul>
                        <li>Length: ${fish.length}</li>
                        <li>Location: ${fish.location}</li>
                        <li>Diet: ${fish.diet}</li>
                        <img src=" ${fish.image} alt= "image of a ${fish.species} named ${fish.name}">
                    </ul>
            </div>
        `
        }
    }
    return soldierFish
}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    let regularFish = ""
    for (const fish of database.fish) {
        if (fish.length % 3 != 0 && fish.length % 5 != 0) {
            regularFish += `
            <div class="fish">    
                <h2>${fish.name} the <br>${fish.species}</h2>
                    <ul>
                        <li>Length: ${fish.length}</li>
                        <li>Location: ${fish.location}</li>
                        <li>Diet: ${fish.diet}</li>
                        <img src=" ${fish.image} alt= "image of a ${fish.species} named ${fish.name}">
                    </ul>
            </div>
        `
        }
    }
    return regularFish
}

console.log(mostHolyFish())
console.log(soldierFish())
console.log(regularFish())