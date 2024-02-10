let items;
let cs;

// Update
function update(){
  let i = JSON.stringify(items);
  localStorage.setItem('items', i);
  if(items.token >= 1000*items.pres){
    prog.style.display = 'none';
    presBT1.style.display = 'none';
    presBTmax.style.display = 'none';
    progva.style.display = 'none';
    ItsTime.style.display = 'block';
  }
}

function load(){
  if (localStorage.getItem('items')!=null){
    items = JSON.parse(localStorage.getItem('items'));
    LDmodes()
    prog.max = 1000*items.pres;

  }
  if(items.lang == 0){        // CZ
    document.documentElement.setAttribute('lang', 'cz');
    document.title = 'BRB - Vylepšení'
    shop.innerHTML = 'Obchod';
    upg.innerHTML = 'Vylepšení';
    sett.innerHTML = 'Nastavení';
    dislm.innerHTML = `Máš ${fornum(items.lemons)} citrónů!`;
    disMcmake.innerHTML = `Každý klik ti dává ${fornum((items.Mclick||1)*items.pres)} kliků!`;
    Mc1.innerHTML = `Vylepšení na kliky za <br> ${fornum(10+(items.Mclick||1)*(items.Mclick||1)-1)} citrónů`;
    progva.innerHTML = `Máš ${items.token} lístků z ${1000*items.pres}!`



    
    presBT1.innerHTML = `1 Lístek za<br>${fornum(2000)} Citrónů`
    ItsTime.innerHTML = `Pojďme jít!`;
    if(items.pres > 1){
      got.innerHTML = `Právě máš ${items.pres-1} Prestiž bodů`
    }


  }else if(items.lang == 1){  // En
    document.documentElement.setAttribute('lang', 'en');
    document.title = 'BRB - Upgrades'
    shop.innerHTML = 'Shop';
    upg.innerHTML = 'Upgrades';
    sett.innerHTML = 'Settings';
    dislm.innerHTML = `You've got ${fornum(items.lemons)} lemons!`;
    disMcmake.innerHTML = `Every click gives you ${fornum((items.Mclick||1)*items.pres)} clicks!`;
    Mc1.innerHTML = `Upgrade for your clicks<br> for ${fornum(10+(items.Mclick||1)*(items.Mclick||1)-1)} lemons`;
    progva.innerHTML = `You have ${items.token} tokens out of ${1000*items.pres}!`
    
    
    
    
    presBT1.innerHTML = `1 Ticket for ${fornum(2000)} Lemons`
    ItsTime.innerHTML = `Let's do this!`;
    if(items.pres > 1){
      got.innerHTML = `You have ${items.pres-1} Prestige points`
    }
  }


}

// Upload
function upload(){update();load();}

function cash(){
  setTimeout (function money(){
    cs = items.dogs+items.cats*12+items.foxes*18+items.wolfs*100+items.hamsters*130+items.whales*220+items.capybaras*280+items.platapuses*400+items.porcupines*650+items.hippos*950+items.snakes*1000+items.cheetahs*3000+items.pythons*7800+items.girrafes*8400+items.otters*9000+items.meerkat*9800+items.raccoon*14500+items.owl*16000+items.badger*32000+items.squirrel*50000+items.chameleon*70000+items.chicken*120000+items.wombat*280000+items.panther*550000+items.coyote*840000+items.frog*900000+items.bear*950000+items.pig*1150000+(items.seal||0)*1300000;
    items.clicks += cs*items.pres;
    items.lemons += (items.lt3/100)*items.pres;
    upload();cash();
  },1000)
}

window.onload = function(){
  load();cash();progress();
  if((items.token != 0)&&(items.token < 1)){
    items.token = 0;
  }
}

/* U P G R A D E S */

function buyMcc(){
  if(items.lemons>=10+(items.Mclick||1)*(items.Mclick||1)-1){
    items.lemons -= 10+(items.Mclick||1)*(items.Mclick||1)-1;
    if((items.Mclick != 1)&&(items.Mclick < 2)){
      items.Mclick = 1;
    }
    items.Mclick += 4;
    console.log(items.Mclick);
    upload();
  }
}

function tblb(){ // Token Basic Lemon Buy
  if(items.lemons >= 2000){
    items.lemons -= 2000;
    items.token++;
  }
  progress();
  upload();
}

function talb(){ // Token All Lemon Buy
  const amount = Math.floor(items.lemons / 2000);
  
  items.lemons -= amount * 2000;
  items.token += amount;
  progress();
  upload();
}

function progress(){
  prog.value = `${items.token}`
  prog.title = `${items.token}/${1000*items.pres}`
  upload();
}

function TheThing(){
  if(items.lang == 0 && items.token >= (1000*items.pres) && confirm(`Za Prestiže budeš získávat více kliků, ale tvůj postup se vynuluje (až na Prestiž body). Chceš se 'Znovuzrodit'?`)){        // CZ
    if(items.pres>=5){
      alert(`Získal jsi 1 prestiže bod!`);
      items.pres += 1;
    }else{
      alert(`Získal jsi 0.5 prestiže bodů!`);
      items.pres += 0.5;
    }
      upload();
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
      lang:items.lang,
      pres:items.pres,
      mode:items.mode,
      Mclick:1,
      token:0,
    }
    location.href = './index.html';



  }else if(items.lang == 1 && items.token >= (1000*items.pres) && confirm(`For Prestige You'll earn more clicks, but your progress resets (except prestige points). Do you wish to 'Rebirth'?`)){  // En
    if(items.pres>=5){
      alert(`You've earn 1 prestige point!`);
      items.pres += 1;
    }else{
      alert(`You've earn 0.5 prestige points!`);
      items.pres += 0.5;
    }
      upload();
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
      lang:items.lang,
      pres:items.pres,
      mode:items.mode,
      Mclick:1,
      token:0,
      }
      location.href = './index.html';
    }
  }


// Dark || Light Mode
function LDmodes(){
  let Bimts = document.querySelectorAll('.item');
  if((items.mode||0) == 0){// Light Mode
    body.style.background = '#ddd';
    body.style.color = '#000';
    Bimts.forEach((e) => {
      e.style.background = '#ffefd5';
    });
    loglm.style.background = '#ffefd5';
    loglm.style.filter = 'drop-shadow(10px 8px 6px #222)';
  }else if(items.mode == 1){// Dark Mode
    body.style.background = '#333';
    body.style.color = '#fff';
    Bimts.forEach((e) => {
      e.style.background = '#666055';
    });
    loglm.style.background = '#666055'; // effd5f66
    loglm.style.filter = 'drop-shadow(10px 8px 6px #222)';
  }
}