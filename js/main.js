// Items
let items;
let cs = 0;
let anime = false;

const changeEN = `                                          Version - 46
Added: Animals - Panthers, Coyotes, Frogs, Bears, Pigs, Seals
             New formating of the text and font in Clicking, Shop, Upgrades
             Names in the window of the Animals and Upgrades
             Lemon Trees finally have an function
             Menu (black bar) was changed from 200 ms to 50 ms
             After 5 pres. points you will get not 0.5 but 1
             New cost (aka not randomised) for lemons
             New Design of the tiles in the Shop
             Revealed cost of Tokens
             Now bugs will have their number :D

Fixed: Text for buying wombats for clicks (BRB-44)

Removed: ✨ Nothing ✨`

const changeCZ = `                                            Verze - 46
Přidáno: ZVÍŘATA - Panteři, Kojoti, Žáby, Medvědi, Prasata, Tuleni
              Nové formátování textu a fontu všude kromě nastavení
              Jména zvířat a vylepšení
              Citrónovníky mají konečně využití
              Rychlost menu změněna z 200 ms na 50
              Po 5 pres. bodů získáte ne 0,5 ale 1
              Nová cena (už ne random) pro citróny
              Nový vzhled dlaždiček v Obchodě
              Odkryta cena Lístků
              Každý bug bude mít svoje číslo :D

Upraveno: Text pro nakupování wombatů za kliky (BRB-44)

Smazáno: ✨ Nic ✨`

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
    seal:0, 


    
    lemons:0, 
    lt3:0,
    lang:0,
    pres:1,
    mode:0,
    Mclick:1,
    token:0,
    joke:0,
  }
  load();
  update();
  for(let item in items){
    if(!items[item]){
      items[item] = 0;
    }
  }
  if(items.joke==0||!items.joke){
    if(navigator.language == 'cs' || navigator.language == 'cs-CZ'){
      items.lang = 0;
    }else{
      items.lang = 1;
    }
    items.joke = 69;
  }
  cash();
  checklang();
  LDmodes();
}

// Update
function update(){
  let i = JSON.stringify(items);
  localStorage.setItem('items', i);
  if(items.lang == 1){
    document.getElementById('disclick').innerHTML=`You have ${fornum(items.clicks)} clicks, and generating ${fornum(cs*items.pres)} c/s!`
  }
  if(items.lang == 0){
    document.getElementById('disclick').innerHTML=`Máš ${fornum(items.clicks)} kliků a generuješ ${fornum(cs*items.pres)} k/s!`
  }
  checklang();
}

// Upload
function upload(){update();load();}

// BRB
function beriba(){
  document.getElementById('unpressed').style.visibility='visible'
  document.getElementById('pressed').style.visibility='hidden'
  anime=true;
}

function clicking(){
  items.clicks += 1*(items.Mclick||1)*items.pres;
  update();
  
  document.getElementById('unpressed').style.visibility='hidden'
  document.getElementById('pressed').style.visibility='visible'
  anime=false;
    
  setTimeout(beriba, 75);
}

function cash(){
  setTimeout (function money(){
    cs = items.dogs+items.cats*12+items.foxes*18+items.wolfs*100+items.hamsters*130+items.whales*220+items.capybaras*280+items.platapuses*400+items.porcupines*650+items.hippos*950+items.snakes*1000+items.cheetahs*3000+items.pythons*7800+items.girrafes*8400+items.otters*9000+items.meerkat*9800+items.raccoon*14500+items.owl*16000+items.badger*32000+items.squirrel*50000+items.chameleon*70000+items.chicken*120000+items.wombat*280000+items.panther*550000+items.coyote*840000+items.frog*900000+items.bear*950000+items.pig*1150000+(items.seal||0)*1300000;
    items.clicks += cs*items.pres;
    items.lemons += (items.lt3/100)*items.pres;
    update();cash();
  },1000)
}

// Languages Cz || Uk
function checklang(){
  if(items.lang == 0){ /* CZ */
    document.documentElement.setAttribute('lang', 'cz');
    document.title = 'BRB - Klikání'
    shop.innerHTML = 'Obchod';
    upg.innerHTML = 'Vylepšení';
    sett.innerHTML = 'Nastavení';
  }else if(items.lang == 1){ /* UK */
    document.documentElement.setAttribute('lang', 'en');
    document.title = 'BRB - Clicking'
    shop.innerHTML = 'Shop';
    upg.innerHTML = 'Upgrades';
    sett.innerHTML = 'Settings';
  }
}

// Dark || Light Mode
function LDmodes(){
  if((items.mode||0) == 0){// Light Mode
    body.style.background = '#fff';
    jonathan.style.background = 'radial-gradient(125% 100% at 50% 0%,#9aff9a 20%,#fff 70%)';
    disclick.style.color = '#000';
    disclick.style.textShadow = "";
  }else if(items.mode == 1){// Dark Mode
    body.style.background = '#333';
    jonathan.style.background = 'radial-gradient(125% 100% at 50% 0%,#5add5a 20%,#333 70%)';
    disclick.style.color = '#f5f5f5';
    disclick.style.textShadow = "2px 2px 4px #000";
  }
  upload();
}

// šmol change
function change(){
  if(items.lang == 0){ // CZ
    alert(changeCZ);
  }else{
    alert(changeEN);
  }
}

// keybinds
addEventListener("keyup", (event) => {
  if(event.key == ' ' || event.key == 'Enter'){
    clicking();
  }
})