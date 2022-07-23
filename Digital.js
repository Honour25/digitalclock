class DigitalClock {
    constructor(element) {
        this.element = element;
    }
    start(){
        this.update();
        setInterval(() => {
            this.update();
        }, 1000);
    }
    update() {
        const parts = this.getTimeParts();
        const corrected = parts.minute.toString().padStart(2,"0");
        const timeFormatted = parts.hour + ':' + corrected

        const amPm = parts.isAm ? 'AM' : 'PM';

        this.element.querySelector('.clock-time').textContent = timeFormatted;
        this.element.querySelector('.clock-ampm').textContent = amPm;


    }

    getTimeParts() {
        const now = new Date();

        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            isAm: now.getHours() < 12
        };
    }

}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();


let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
let btn3 = document.getElementById('button3');
let btn4 = document.getElementById('button4');
let smartImg = document.getElementById('image');


// function onBtn2Click(){
// smartImg.src = smartwatch2.png
// }

// btn2.addEventListener('click', onBtn2Click)


btn1.onclick = function() {
    smartImg.src = 'smartwatch black.png';
    
}
btn2.onclick = function() {
    smartImg.src = 'smartwatch2.png';
}
btn3.onclick = function() {
    smartImg.src = 'smartwatch blue.png'
}
btn4.onclick = function() {
    smartImg.src = 'smartwach red.png'
}


let btn7 = document.getElementById('button7');

btn7.onclick = function() {
    alert('Your order has been sent.');
}
