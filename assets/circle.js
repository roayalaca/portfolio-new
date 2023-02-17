let circularProgress = document.querySelector(".circular-progress")
let progressValue = document.querySelector(".progress-value")
let circularProgress2 = document.querySelector(".circular-progress2")
let progressValue2 = document.querySelector(".progress-value2")
let circularProgress3 = document.querySelector(".circular-progress3")
let progressValue3 = document.querySelector(".progress-value3")
let circularProgress4 = document.querySelector(".circular-progress4")
let progressValue4 = document.querySelector(".progress-value4")

let progressStartValue = 0
let progressEndValue = 55
let progressStartValue2 = 0
let progressEndValue2 = 70
let progressStartValue3 = 0
let progressEndValue3 = 45
let progressStartValue4 = 0
let progressEndValue4 = 24
let speed = 10;


let progress = setInterval(() => {
    progressStartValue++;
    

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if (progressStartValue == progressEndValue) {
        clearInterval(progress);
    }

}, speed);

let progress2 = setInterval(() => {
    progressStartValue2++;

    progressValue2.textContent = `${progressStartValue2}%`
    circularProgress2.style.background = `conic-gradient(#7d2ae8 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`

    if (progressStartValue2 == progressEndValue2) {
        clearInterval(progress2);
    }

}, speed);

let progress3 = setInterval(() => {
    progressStartValue3++;

    progressValue3.textContent = `${progressStartValue3}%`
    circularProgress3.style.background = `conic-gradient(#7d2ae8 ${progressStartValue3 * 3.6}deg, #ededed 0deg)`

    if (progressStartValue3 == progressEndValue3) {
        clearInterval(progress3);
    }

}, speed);



let progress4 = setInterval(() => {
    progressStartValue4++;

    progressValue4.textContent = `${progressStartValue4}%`
    circularProgress4.style.background = `conic-gradient(#7d2ae8 ${progressStartValue4 * 3.6}deg, #ededed 0deg)`

    if (progressStartValue4 == progressEndValue4) {
        clearInterval(progress4);
    }

}, speed);