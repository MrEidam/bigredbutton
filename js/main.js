// Items
let items;
var cs = 0;
let e = 0;
var anime = false;
var mislg = document.getElementById('LANGMISS');
let flag = document.getElementById('flag');
let del = document.getElementById('del');
let sos = document.getElementById('sos');
let shop = document.getElementById('shop');

function load(){
  if (localStorage.getItem('items')!=null){
    items = JSON.parse(localStorage.getItem('items'));
  }
}

window.onload = function(){
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


    
    lemons:0, 
    lt3:0,
    lang:0,
    pres:1,

  }
  load();
  update();
  for(let item in items){
    if(!items.item){
      items.item = 0;
    }
  }
  cash();
  checklang()
  missdezz()
}

// Reset
function reset(){
  if((items.lang == 1) && confirm('Do you really want to reset everything?') && confirm('Are you sure?')){
    alert('Everything Reseted');
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
  
  
      
      lemons:0, 
      lt3:0,
      lang:items.lang,
      pres:items.pres,
    }
  }
  if((items.lang == 0) && confirm('Vážně chceš všechno resetovat?') && confirm('Seš si jistý?')){
    alert('Vše resetováno');
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


      
      lemons:0, 
      lt3:0,
      lang:items.lang,
      pres:items.pres,
    }
  }
}

// Update
function update(){
  let i = JSON.stringify(items);
  localStorage.setItem('items', i);
  if(items.lang == 1){
    document.getElementById('disclick').innerHTML=`You've got ${fornum(items.clicks)} clicks, and generating ${fornum(cs)} c/s!`
  }
  if(items.lang == 0){
    document.getElementById('disclick').innerHTML=`Právě máš ${fornum(items.clicks)} kliků a generuješ ${fornum(cs)} k/s!`
  }
  checklang();
}

// BRB
function beriba(){
  document.getElementById('unpressed').style.visibility='visible'
  document.getElementById('pressed').style.visibility='hidden'
  anime=true;
}

function clicking(){
  items.clicks += 1;
  update();
  
  document.getElementById('unpressed').style.visibility='hidden'
  document.getElementById('pressed').style.visibility='visible'
  anime=false;
    
  setTimeout(beriba, 75)
}

function cash(){
  setTimeout (function money(){
    cs = items.dogs + items.cats*12 + items.foxes*18 + items.wolfs*100 + items.hamsters*130 + items.whales*220 + items.capybaras*280 + items.platapuses*400 + items.porcupines*650 + items.hippos*950 + items.snakes*1000 + items.cheetahs*3000 + items.pythons*7800 + items.girrafes*8400;
    items.clicks += cs;
    update();cash();
  },1000)
}

// HELP
function help(){
  e++
  if(e==1){
    alert(`Click the button to earn clicks!
Click on me for more...`);  
  }
  if(e==2){
    alert(`After 100 clicks, click the link above to take you to the shop!
Click on me for more. .`);  
  }
  if(e==3){
    alert(`In the shop click on the buy dog button to buy a dog`);
    e=0;
  }
}
function language(){
  if(items.lang == 0){ /* CZ */
    items.lang = 1;
    console.log(items.lang);
    document.documentElement.setAttribute('lang', 'cz');
    del.innerHTML = 'Reset';
    sos.innerHTML = 'Pomoc';
    shop.innerHTML = 'Obchod';
    upg.innerHTML = 'Vylepšení';
    modes.innerHTML = 'Změn do Temného módu';
    langs.innerHTML = 'Switch into English';

  }else if(items.lang == 1){ /* UK */
    items.lang = 0;
    console.log(items.lang);
    document.documentElement.setAttribute('lang', 'en');
    del.innerHTML = 'Reset';
    sos.innerHTML = 'Help';
    shop.innerHTML = 'Shop';
    upg.innerHTML = 'Upgrades';
    modes.innerHTML = 'Switch into Dark Mode';
    langs.innerHTML = 'Změň si jazyk do Češtiny';

  }
}

function checklang(){
  if(items.lang == 0){ /* CZ */
    document.documentElement.setAttribute('lang', 'cz');
    del.innerHTML = 'RESET';
    sos.innerHTML = 'POMOC';
    shop.innerHTML = 'Obchod';
    upg.innerHTML = 'Vylepšení';
    modes.innerHTML = 'Změn do Temného módu';
    langs.innerHTML = 'Switch into English';
    
  }else if(items.lang == 1){ /* UK */
    document.documentElement.setAttribute('lang', 'en');
    del.innerHTML = 'RESET';
    sos.innerHTML = 'HELP';
    shop.innerHTML = 'Shop';
    upg.innerHTML = 'Upgrades';
    modes.innerHTML = 'Switch into Dark Mode';
    langs.innerHTML = 'Změň si jazyk do Češtiny';
    
  }
}


function missdezz(){
  if(items.lang != 0 && items.lang !=1){
    items.lang = 1
    mislg.style.visibility = 'visible';
  }
}

// Function to convert a number into a more readable format
function fornum(num) {
  // Define the suffixes for thousands and millions
  const suffixes = ['', ' k', ' mil', ' mld', ' bil', ' bld', ' tri', ' tld', ' qua'];

  // Divide the number by 1000 until it is less than 1000
  let i = 0;
  while (num >= 1000 && i < suffixes.length - 1) {
    num /= 1000;
    i++;
  }
  num = Math.floor(num * 10) / 10;
  return num + suffixes[i];
}