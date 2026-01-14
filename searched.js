import {data} from "./data.js"; //data.jsの配列を取得
const dataLength = data.length; //配列のデータ数

const tbody = document.getElementById('tbody');
const fragment = document.createDocumentFragment();

const params = new URLSearchParams(window.location.search); //URLパラメータの取得
const dayOfWeek = params.get('dayOfWeek'); //dayOfWeekの値を取得
// const place = params.get('place'); //dayOfWeekの値を取得


function result(e){
    for(let i = 0; i < dataLength; i++){
        const tr = document.createElement("tr");
        tr.setAttribute("id","classroom" + String(i));
        tbody.appendChild(tr);
        const trNum = document.getElementById("classroom" + String(i));

        const tdClass = document.createElement("td"); //教室名
        tdClass.textContent = data[i].class;
        fragment.appendChild(tdClass);
        trNum.appendChild(fragment);

        for(let j = 0; j < 7; j++){
            const tdFlag = document.createElement("td"); //n限目の空き状況
            if(data[i][e][j] == "0"){
                tdFlag.textContent = "空";
            } else {
                tdFlag.textContent = "使用中";
            }
            fragment.appendChild(tdFlag);
            trNum.appendChild(fragment);
        }
        
        const tdSup = document.createElement("td"); //補足
        tdSup.textContent = data[i].supplement;
        fragment.appendChild(tdSup);
        trNum.appendChild(fragment);
    }   
}

result(dayOfWeek);