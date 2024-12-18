const main = document.querySelector('#nav');
const boxfill = document.querySelector('.box-cover');
const infograd = document.querySelector(".info-gradient");
const navcover = document.querySelector(".nav-total");

const gradientdiv = document.querySelector('#gradient');
const csscode = document.querySelector('.info');

const pxtovh = document.querySelector('#pxInput');
const vhOutput = document.querySelector('#vhOutput');

const pxtovw = document.querySelector('#vwpxInput');
const vwOutput = document.querySelector('#vwOutput');

const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;


function updateGradient(){
const slider = document.getElementById('angle').value;
const col1slider = document.getElementById('color1range').value;
const col2slider = document.getElementById('color2range').value;
const color1 = document.querySelector('#color1').value;
const color2 = document.querySelector('#color2').value;


const gradientCSS = `linear-gradient(${slider}deg, ${color1} ${col1slider}%, ${color2} ${col2slider}%)`;

    if (color1 === "#000000" || color2 === "#000000") {
        navcover.style.color = "white";
    } else {
        navcover.style.color = "#001f3f";
    }

infograd.style.background = gradientCSS;
boxfill.style.background = gradientCSS;
main.style.background = gradientCSS;
csscode.textContent = `background-image:${gradientCSS};
            height: 100vh;
            background-size: cover;
            background-repeat: no-repeat;`;
}



const inputElements = document.querySelectorAll('input[type="range"], input[type="color"]');
inputElements.forEach((input) => {
    input.addEventListener('input', updateGradient);
});

color1.addEventListener('input', updateGradient);
color2.addEventListener('input', updateGradient);

updateGradient();
/*

function updateVhValue() {
    const pxValue = parseFloat(pxtovh.value);
    if(!isNaN(pxValue)) {
        
        const vhValue = (pxValue / viewportHeight) * 100;
        vhOutput.textContent = `${vhValue.toFixed(2)}vh`
    } else {
        vhOutput.textContent = 'Invalid input'
    }
}

//event listener to input field
pxtovh.addEventListener('input', updateVhValue);

updateVhValue();


function updateVwValue() {
    const vwpxValue = parseFloat(pxtovw.value);
    if(!isNaN(vwpxValue)){
        const vwValue = (vwpxValue / viewportWidth) * 100;
        vwOutput.textContent = `${vwValue.toFixed(2)}vw`
    } else {
        vwOutput.textContent = 'Invalid input'
    }
}
pxtovw.addEventListener('input' , updateVwValue);

updateVwValue();*/
