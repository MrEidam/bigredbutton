// Items
let items;
let cs = 0;
let anime = false;

const changeEN = `                        v45
Added: ANIMALS - Chimken + Wombat
             New Main menu with the "social tab"
             Better language detector
             New path to Shop, Sett., Upg., Clicking
             Titles of the sites changes to coresponding language
             Sites to setting :)

Fixed: Buying tokens is now more practical
          Margin of every main section under the Jonathans

Removed: I guess /lang/ but I don't know it 100%`

const changeCZ = `                        v45
Přidáno: ZVÍŘATA - Slépka + Wombat
              Nové hlavní menu s 'sociálními síti'
              Nová cesta do Obchodu atd v mreidam-brb.com/Shop/
              Názvy stránek jsou v jazyce korespondující k jazyku uživatele
              Seznam stránek v Nastavení

Upraveno: Nakupování Tokenů na Prestige je jednoduší
                 Mezera všech hlavních sekcí pod Jonathanem

Smazáno: Asi /lang/ ale nejsem si jistý`

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
    document.getElementById('disclick').innerHTML=`You've got ${fornum(items.clicks)} clicks, and generating ${fornum(cs*items.pres)} c/s!`
  }
  if(items.lang == 0){
    document.getElementById('disclick').innerHTML=`Právě máš ${fornum(items.clicks)} kliků a generuješ ${fornum(cs*items.pres)} k/s!`
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
    cs = items.dogs+items.cats*12+items.foxes*18+items.wolfs*100+items.hamsters*130+items.whales*220+items.capybaras*280+items.platapuses*400+items.porcupines*650+items.hippos*950+items.snakes*1000+items.cheetahs*3000+items.pythons*7800+items.girrafes*8400+items.otters*9000+items.meerkat*9800+items.raccoon*14500+items.owl*16000+items.badger*32000+items.squirrel*50000+items.chameleon*70000+items.chicken*120000+items.wombat*280000
    items.clicks += cs*items.pres;
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

// Function to convert a number into a more readable format
function fornum(num){
  if(items.lang == 0){
    const suffixes = ['', ' tis.', ' mil.', ' mld.', ' bil.', ' bld.', ' tril.', ' trild.', ' kvad.', ' kvadld.', ' quint.', ' quintld.', ' sext.', ' sextld.', ' sept.', ' septld.', ' okt.', ' oktld.', ' non.', ' nonld.', ' dec.', ' decld.', ' undec.', ' undecld.', ' duodec.', ' duodecld.', ' tredec.', ' tredecld.', ' kvaddec.', ' kvaddecld.', ' quintdec.', ' quintdecld.', ' sextdec.', ' sextdecld.', ' googol'];
    let i = 0;
    while (num >= 1000 && i < suffixes.length - 1) {
      num /= 1000;
      i++;
    }
    num = Math.floor(num * 10) / 10;
    return num + suffixes[i];
  }else{
    const suffixes = ['', ' k', ' mil', ' bil', ' tri', ' quad', ' qui', ' sex', ' sep', ' oct', ' non', ' dec', ' und', ' duo', ' tre', ' qua', ' qui', ' sex', ' sep', ' oct', ' nov', ' vig', ' uvi', ' dvi', ' tvi', ' qvi', ' qv', ' svi', ' spv', ' ov', ' nv', ' cen', ' ucn', ' dcn', ' googol'];
    let i = 0;
    while (num >= 1000 && i < suffixes.length - 1) {
      num /= 1000;
      i++;
    }
    num = Math.floor(num * 10) / 10;
    return num + suffixes[i];
  }
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