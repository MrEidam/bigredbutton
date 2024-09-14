let items;
let cs;

window.onload = function(){
  let socmenu = document.querySelector('.socmenu');
  let toggle = document.querySelector('.toggle');
  items = {
        clicks:0,
        dogs:0, 
        cats:0, 
        foxes:0, 
        wolfs:0, 
        hamsters:0, 
        whales:0, 
        capybaras:0, 
        platapuses:0,
        porcupines:0,
        hippos:0,
        snakes:0,
        cheetahs:0,
        pythons:0,
        girrafes:0,
        lions:0,
        otters:0,
        meerkat:0, 
        raccoon:0, 
        owl:0, 
        badger:0, 
        squirrel:0, 
        chameleon:0, 
        chicken:0, 
        wombat:0, 
        panther:0, 
        coyote:0, 
        frog:0, 
        bear:0, 
        pig:0, 
        seal:0, 


        
        lemons:0, 
        lt3:0,
        pres:1,
        Mclick:1,
        token:0,
    }
    load();
    update();
    for(let item in items){
      if(!items[item]){
        items[item] = 0;
      }
    }
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
    toShop()
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

function cash(){
    setTimeout (() => {
      cs = items.dogs+items.cats*12+items.foxes*18+items.wolfs*100+items.hamsters*130+items.whales*220+items.capybaras*280+items.platapuses*400+items.porcupines*650+items.hippos*950+items.snakes*1000+items.cheetahs*3000+items.pythons*7800+items.girrafes*8400+items.otters*9000+items.meerkat*9800+items.raccoon*14500+items.owl*16000+items.badger*32000+items.squirrel*50000+items.chameleon*70000+items.chicken*120000+items.wombat*280000+items.panther*550000+items.coyote*840000+items.frog*900000+items.bear*950000+items.pig*1150000+(items.seal||0)*1300000;
      items.clicks += cs*items.pres;
      items.lemons += (items.lt3/100)*items.pres;
      update();cash();
      if(document.title === 'BRB - Klikání'||document.title === 'BRB - Clicking'){
        uploadClicking();
      }
      if(document.title === 'BRB - Obchod'||document.title === 'BRB - Shop'){
        uploadShop();
        click();
      }
      console.log(`Clicks: ${items.clicks}`);
    },1000)
}

function load(){
    if (localStorage.getItem('items')!=null){
        items = JSON.parse(localStorage.getItem('items'));
    }
}

// Update
function update(){
    let i = JSON.stringify(items);
    localStorage.setItem('items', i);
}