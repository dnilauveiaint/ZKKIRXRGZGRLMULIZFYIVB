const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question1");
const gif = document.querySelector(".gif");
const noBtn = document.querySelector(".no_btn");
const question2 = document.querySelector(".question2");

document.oncontextmenu = () => {
    alert("I know what you're doing.");
    return false;
};

document.onkeydown = e => {
    if (e.key == "F12") {
        alert("Prohibited!");
        return false;
    }
    if (e.ctrlKey && e.key == "u") {
        alert("XD");
        return false;
    }
    if (e.ctrlKey && e.key == "c") {
        alert("Copy what?");
        return false;
    }
    if (e.ctrlKey && e.key == "v") {
        alert(":P");
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        alert("Inspect pa!");
        e.preventDefault();
        return false;
    }
};

const buttons = document.querySelectorAll('#btt1, #btt2, #btt3, #btt4, #btt5, #btt6, #btt7, #btt8, #btt9, #btt10, #btt11, #btt12, #btn2');
const backBtn = document.getElementById('back-btn');

let clickCount = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 8) {
            backBtn.style.display = 'block';
        }
    });
});

const comeback = document.getElementById("btn2");
const btt1 = document.getElementById('btt1');
const btt2 = document.getElementById('btt2');
const btt3 = document.getElementById('btt3');
const btt4 = document.getElementById('btt4');
const btt5 = document.getElementById('btt5');
const btt6 = document.getElementById('btt6');
const btt7 = document.getElementById('btt7');
const btt8 = document.getElementById('btt8');
const btt9 = document.getElementById('btt9');
const btt10 = document.getElementById('btt10');
const btt11 = document.getElementById('btt11');
const btt12 = document.getElementById('btt12');
const bbtt1 = document.getElementById('bbtt1');
const bbtt2 = document.getElementById('bbtt2');
const bbtt3 = document.getElementById('bbtt3');
const bbtt4 = document.getElementById('bbtt4');
const bbtt5 = document.getElementById('bbtt5');
const bbtt6 = document.getElementById('bbtt6');
const bbtt7 = document.getElementById('bbtt7');
const bbtt8 = document.getElementById('bbtt8');
const bbtt9 = document.getElementById('bbtt9');
const bbtt10 = document.getElementById('bbtt10');
const bbtt11 = document.getElementById('bbtt11');
const bbtt12 = document.getElementById('bbtt12');

comeback.addEventListener("click", function () {
    btt12.style.opacity = "1";
    comeback.style.opacity = "0";
});

btt12.addEventListener("click", function () {
    btt12.style.opacity = "0";
    bbtt3.style.opacity = "1";
});

bbtt3.addEventListener("click", function () {
    btt1.style.opacity = "1";
    bbtt3.style.opacity = "0";
});

btt1.addEventListener("click", function () {
    btt1.style.opacity = "0";
    btt4.style.opacity = "1";
});

btt4.addEventListener("click", function () {
    btt2.style.opacity = "1";
    btt4.style.opacity = "0";
});

btt2.addEventListener("click", function () {
    btt2.style.opacity = "0";
    bbtt1.style.opacity = "1";
});

bbtt1.addEventListener("click", function () {
    bbtt8.style.opacity = "1";
    bbtt1.style.opacity = "0";
});

bbtt8.addEventListener("click", function () {
    bbtt8.style.opacity = "0";
    btt6.style.opacity = "1";
});

btt6.addEventListener("click", function () {
    bbtt6.style.opacity = "0";
    btt4.style.opacity = "0";
    btt3.style.opacity = "1";
});

btt3.addEventListener("click", function () {
    bbtt6.style.opacity = "1";
    btt1.style.opacity = "1";
    btt4.style.opacity = "1";
    btt3.style.opacity = "1";
    btt2.style.opacity = "1";
    btt5.style.opacity = "1";
    btt6.style.opacity = "1";
    btt9.style.opacity = "1";
    btt11.style.opacity = "1";
    btt10.style.opacity = "1";
    bbtt1.style.opacity = "1";
    bbtt2.style.opacity = "1";
    bbtt3.style.opacity = "1";
    bbtt4.style.opacity = "1";
    bbtt5.style.opacity = "1";
    bbtt7.style.opacity = "1";
    bbtt9.style.opacity = "1";
});
