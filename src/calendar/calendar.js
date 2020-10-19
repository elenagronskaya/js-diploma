import {ROOT_NODE} from '../constants';
import "./calendar.scss"

const template = `<div class="calendarContainer">
<div class="currentDate">Today:</div>
<div class="weekContainer">
    <div class="day">Пн</div>
    <div class="day">Вт</div>
    <div class="day">Ср</div>
    <div class="day">Чт</div>
    <div class="day">Пт</div>
    <div class="day">Сб</div>
    <div class="day">Вс</div>
</div>
<div class="daysContainer">
</div></div>`;

// <div class="days">
    // <div class="empty"></div>
    // <div class="empty"></div>
    // <div class="empty"></div>
    // <div class="day">1</div>
    // <div class="day current">2</div>
    // <div class="day">3</div>
    // <div class="day">4</div>
// </div>
    //`;

    //const templateEndTags = `</div></div>`;
export function renderCalendar(){
    const today = new Date()
    const month = today.getMonth();
    const year = today.getFullYear();

    let startOfMonth = new Date (year, month).getDay();
    let numOfDays = 32 - new Date(year,month, 32).getDate();
    let renderNum = 1;

    let parser  = new DOMParser(template);
    
    let calendar = parser.parseFromString(template, 'text/html');

    let daysContainerElements = calendar.getElementsByClassName("daysContainer")
    let daysContainerElement =  daysContainerElements[0]
    for(let i=0; i<6; i++){
        if (renderNum >numOfDays)
        {
            break;
        }
        
        let row = document.createElement("div");
        daysContainerElement.append(row);
        row.classList.add("days");
        for(let c=0; c<7; c++){
            if(i===0 && c<startOfMonth){
                let div = document.createElement("div");
                div.classList.add("empty");
                row.append(div);
            }else if(renderNum >numOfDays){
                let div = document.createElement("div");
                div.classList.add("empty");
                row.append(div);
            }else{
                let div = document.createElement("div");
                div.innerHTML = renderNum;
                row.append(div);
                renderNum++
            }
        }
    }
    return calendar.body.innerHTML;
}