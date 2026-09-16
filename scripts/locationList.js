import {database} from './aquariumData.js'

export const locationList = () => {
    let locationListHTML = '<article class="locations"><h1>Locations</h1>'
    for (const location of database.locations) {
        if (location.name === "") {
            locationListHTML += ""
        } else {
        locationListHTML += `
        <section class="location">
            <h3>${location.name} in ${location.country}</h3>
            <p>${location.description}</p>
    `
        }
    }
    locationListHTML += "</article>"

    return locationListHTML
}