import {data} from "./data.js"; //data.jsの配列を取得
const dataLength = data.length; //配列のデータ数

const params = new URLSearchParams(window.location.search); //URLパラメータの取得
const dayOfWeek = params.get('dayOfWeek'); //dayOfWeekの値を取得
// const place = params.get('place'); //dayOfWeekの値を取得

const dayOfWeekText = document.getElementById('dayofweek-text');
const dayOfWeekArray = {
    Monday:"月曜日",
    Tuesday:"火曜日",
    Wednesday:"水曜日",
    Thursday:"木曜日",
    Friday:"金曜日"
}

const option = document.querySelectorAll('option');

function result(e){

    const tbody = document.getElementById('tbody');
    const fragment = document.createDocumentFragment();

    for(let i = 0; i < dataLength; i++){
        const tr = document.createElement("tr");

        const tdClass = document.createElement("td"); //教室名
        tdClass.textContent = data[i].class;
        tr.appendChild(tdClass);

        for(let j = 0; j < 7; j++){
            const tdFlag = document.createElement("td"); //n限目の空き状況
            if(data[i][e][j] == "0"){
                tdFlag.textContent = "空";
                tdFlag.classList.add('empty');
            } else {
                tdFlag.textContent = "使用中";
                tdFlag.classList.add('occupied');
            }
            tr.appendChild(tdFlag);;
        }
        
        const tdSup = document.createElement("td"); //補足
        tdSup.textContent = data[i].supplement;
        if(data[i].supplement == "コンセントあり"){
            tdSup.classList.add('has-socket');
        } else {
            tdSup.classList.add('no-socket');
        }
        tr.appendChild(tdSup);
        fragment.appendChild(tr);
    }
    tbody.appendChild(fragment);
    
    option.forEach(option => {
        if (option.value == e) {
            option.selected = true;
        } else {
            option.selected = false; // 他のoptionのselectedを外す
        }
    });
}

result(dayOfWeek);
dayOfWeekText.textContent = dayOfWeekArray[dayOfWeek];
// result("Monday"); //test用