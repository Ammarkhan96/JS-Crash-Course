// const date = new Date()

// console.log(date.getDate());
// console.log(date.getMonth());

// const months = ['Januaray', 'Feb', 'March', 'April']
// console.log(months[date.getMonth()]);

// console.log(date.getHours());

// console.log(date.getMinutes());

// console.log(date.getSeconds());

// console.log(date.getMilliseconds());


// date.setDate(15)
// console.log(date);


// const eidDay = new Date()
// eidDay.setDate(24)
// eidDay.setMonth(3)
// eidDay.setFullYear(2023)
// // console.log(eidDay);
// // console.log(date.getTime(), eidDay.getTime());

// let diff = eidDay.getTime() - date.getTime()
// console.log( (diff / ( 1000 * 60 * 60 * 24 * 365.25)).toFixed(1));


const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')
const amPmElement = document.getElementById('amPm')

setInterval(function(){
    const date = new Date()
    
    let hours = date.getHours();
    let amPm = 'AM'
    if(hours > 11){
        amPm = 'PM'
        if(hours > 12){
            hours -= 12
        }
    }

    hoursElement.innerText = date.getHours()
    minutesElement.innerText = date.getMinutes()
    secondsElement.innerText = date.getSeconds()
    amPmElement.innerText = amPm
},1000)

