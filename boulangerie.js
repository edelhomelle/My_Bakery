let htmlElt = document.querySelector('html');
let bgColor = document.getElementById('bgtheme');
let nomjoueur = document.getElementById('nom');

if(localStorage.getItem('bgtheme')){
    updateBg();
}else{
    setBg();
}

function setBg(){
    localStorage.setItem('bgtheme', bgColor.value);
    updateBg();
}

function updateBg(){
    let bg = localStorage.getItem('bgtheme');
    htmlElt.style.backgroundColor = '#' + bg;
    bgColor.value = bg;
}

bgColor.addEventListener('change', setBg);



if(localStorage.getItem('nom')){
    updatenom();
}else{
    setnom();
}

function setnom(){
    localStorage.setItem('nom', nomjoueur.value);
    updateBg();
}

function updatenom(){
    let nomj = localStorage.getItem('nom');
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
    htmlElt.style.backgroundColor = '#' + bg;
    bgColor.value = bg;
}

bgColor.addEventListener('change', setBg);