let bigredbutton;
let cs;

window.onload = function(){
    let socmenu = document.querySelector('.socmenu');
    let toggle = document.querySelector('.toggle');
    
    bigredbutton = contextBRBCONST

    load();
    update();
    cash();
    if(navigator.language == 'cs' || navigator.language == 'cs-CZ'){
        document.title = 'BRB - Hlavní menu'
        document.querySelector('#tit').innerHTML = 'BRB - HRA';
        document.querySelector('#heh').innerHTML = 'Zmáčkni tlačítko aby ses dostal do hry!';
        document.querySelector('footer').innerHTML = `Vytvořil: <a href="https://www.youtube.com/@MrEidam">MrEidam</a>`;
    }else{
        document.title = 'BRB - Main Menu';
        document.querySelector('#tit').innerHTML = 'BRB THE GAME';
        document.querySelector('#heh').innerHTML = 'Press the button to get to the game!';
        document.querySelector('footer').innerHTML = `Made by: <a href="https://www.youtube.com/@MrEidam">MrEidam</a>`;
    }
    toggle.onclick = () => {
        socmenu.classList.toggle('active');
    };
}

function click(){
    setTimeout(() => {
        if(document.title === 'BRB - Obchod'||document.title === 'BRB - Shop'){
            document.querySelector('#imgcli').src = '../img/icons8-clicked.png';
        }
    },750);
    setTimeout(() => {
        if(document.title === 'BRB - Obchod'||document.title === 'BRB - Shop'){
            document.querySelector('#imgcli').src = '../img/icons8-rest.svg';
        }
    },1000);
}

function calculateCS(){
    const anim = bigredbutton.items.animals;
    let prestigeMultiplier = bigredbutton.settings.prestige || 1;
    let clicksPerSecond = 0;

    anim.forEach(animal => {
        const { number = 0, make = 0, upgrade = 1 } = animal;
        clicksPerSecond += number*make*upgrade;
    });

    clicksPerSecond *= prestigeMultiplier;

    return clicksPerSecond;
}

function cash(){
    setTimeout (() => {
        cs = calculateCS();
        bigredbutton.items.special[0].number += cs;
        //items.lemons += (items.lt3/100)*items.pres;

        update();cash();
        if(document.title === 'BRB - Klikání'||document.title === 'BRB - Clicking'){
            uploadClicking();
        }
        if(document.title === 'BRB - Obchod'||document.title === 'BRB - Shop'){
            uploadShop();
            click();
        }
      ////console.log(`Clicks: ${items.clicks}`);
    },1000)
}

function load(){
    if (localStorage.getItem('BRB-Progress')!=null){
        bigredbutton = JSON.parse(localStorage.getItem('BRB-Progress'));
    }
}

// Update
function update(){
    let i = JSON.stringify(bigredbutton);
    localStorage.setItem('BRB-Progress', i);
}