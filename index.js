import {data} from "./data.js";

const tbody = document.getElementById("tbody");
const dataLength = data.length;

const date = new Date();
const daysJP = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

function makeTable(classNum, day){
    const mytr = document.createElement("tr");
    mytr.setAttribute("class","fastSeengEmptyClassroom_tr");
    mytr.setAttribute("id","classroom" + String(classNum));
    tbody.appendChild(mytr);
    const getElem = document.getElementById("classroom" + String(classNum));
    
    const tdName = document.createElement("td");
    tdName.textContent = data[classNum].class;
    getElem.appendChild(tdName);

    for(let i=0;i<7;i++){
        const tdox = document.createElement("td");
        if(data[classNum][day][i]=="0"){
            tdox.textContent = "o";
        } else {
            tdox.textContent = "x";
        }
        getElem.appendChild(tdox);
    }
    const tdSup = document.createElement("td");
    tdSup.textContent = data[classNum].supplement;
    getElem.appendChild(tdSup);
}

function main(){
    let today = daysJP[date.getDay()];

    for(let i=0;i<dataLength;i++){
        makeTable(i,today);
    }
}

main();