import {ROOT_NODE} from '../constants';
import "./calendar.scss"

const template = `<div class="calendarContainer">
<div class="currentDate">Today:<span id="currentDate">${new Date().toDateString()}</span></div>
<div class="weekContainer">
    <div class="day">Sun</div>
    <div class="day">Mon</div>
    <div class="day">Tue</div>
    <div class="day">Wed</div>
    <div class="day">Thu</div>
    <div class="day">Fri</div>
    <div class="day">Sat</div>
</div>
<div class="daysContainer">

</div>
</div>`;


export function renderCalendar(){
    const today = new Date()
    const month = today.getMonth();
    const year = today.getFullYear();
    const day = today.getDate();
    let startOfMonth = new Date (year, month).getDay();
    //let numOfDays = 33 - new Date(year,month, 33).getDate();
    let numOfDays = new Date(year, month+1, 0).getDate();
    let renderNum = 1;

    let parser  = new DOMParser();
    
    let calendar = parser.parseFromString(template, 'text/html');

    let daysContainerElements = calendar.getElementsByClassName("daysContainer")
    let daysContainerElement =  daysContainerElements[0]
    for(let rowIndex = 0; rowIndex < 6; rowIndex++){
        if (renderNum >numOfDays)
        {
            break;
        }
        
        let row = document.createElement("div");
        daysContainerElement.append(row);
        row.classList.add("days");
        for(let column = 0; column < 7; column++){
            if(rowIndex===0 && column < startOfMonth){
                let div = document.createElement("div");
                div.classList.add("empty");
                row.append(div);
            }else if(renderNum >numOfDays){
                let div = document.createElement("div");
                div.classList.add("empty");
                row.append(div);
            }else{
                let div = document.createElement("div");
                if(day === renderNum){
                    div.classList.add("current")
                } 

                div.innerHTML = renderNum;
                row.append(div);
                renderNum++
            }
        }
    }
    ROOT_NODE.innerHTML = calendar.body.innerHTML;
}