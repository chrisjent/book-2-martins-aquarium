//import {fishList } from './fishList.js'
import {tipList} from './tipList.js'
import {locationList} from './locationList.js'
import {mostHolyFish, soldierFish, regularFish} from './filteringfish.js'

//Generate the fish list
//const fishHTML = fishList()

//Generate the care tips
const tipHTML = tipList()

//Generate the location list
const locationHTML = locationList()

//Generate the filtered lists
const holyFishHTML = mostHolyFish()
const soldierFishHTML = soldierFish()
const regularFishHTML = regularFish()

//render each HTML string to the correct DOM element

 let fishListSection = document.getElementById('fishList')
 fishListSection.innerHTML = `${holyFishHTML} ${soldierFishHTML} ${regularFishHTML}`

 let tipListHTML = document.getElementById('tipList')
 tipListHTML.innerHTML = tipHTML

 let locationListHTML = document.getElementById('locationList')
 locationListHTML.innerHTML = locationHTML


