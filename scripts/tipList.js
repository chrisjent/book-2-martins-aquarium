import {database} from './aquariumData.js'

export const tipList = () => {
    let tipListHTML = '<h1>Tip List</h1><ul class="tips">'
    for(const tip of database.tips) {
        tipListHTML += `
            <li class="tip"><span class="tip-topic">${tip.topic}</span>: ${tip.text}</li>
    `
}
    tipListHTML += '</ul>'
    
    return tipListHTML
}