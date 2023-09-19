let items;
let cs;

// Update
function update(){
  let i = JSON.stringify(items);
  localStorage.setItem('items', i);
  if(items.token >= 1000*items.pres){
    prog.style.display = 'none';
    presBT1.style.display = 'none';
    presBT10.style.display = 'none';
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
    if((items.mode||0) == 0){
      modes.innerHTML = 'Změn do Temného módu';
    }else if((items.mode||0) == 1){
      modes.innerHTML = 'Změn do Světlého módu';
    }
    dislm.innerHTML = `Právě máš ${fornum(items.lemons)} citrónů!`;
    disMcmake.innerHTML = `Zatím ti každý klik dává ${fornum((items.Mclick||1)*items.pres)} kliků!`;
    Mc1.innerHTML = `Kup si vylepšení na kliky za <br> ${fornum(20+(items.Mclick||1)*(items.Mclick||1))} citrónů`;
    progva.innerHTML = `Zatím máš jen ${items.token} lístků z ${1000*items.pres}!`



    
    presBT1.innerHTML = `1 Lístek za <br> <b style="font-weight: 1000;">pár</b> Citrónů`
    presBT10.innerHTML = `10 Lístků za <br> <b style="font-weight: 1000;">10 párů</b> Citrónů`
    presBTmax.innerHTML = `Max lístků za <br> <b style="font-weight: 1000;">několik</b> Citrónů`
    ItsTime.innerHTML = `Pojďme jít!`;
    if(items.pres > 1){
      got.innerHTML = `Právě máš ${items.pres-1} Prestiž bodů`
    }


  }else if(items.lang == 1){  // En
    document.documentElement.setAttribute('lang', 'en');
    if((items.mode||0) == 0){
      modes.innerHTML = 'Switch into Dark Mode';
    }else if((items.mode||0) == 1){
      modes.innerHTML = 'Switch into Light Mode';
    }
    dislm.innerHTML = `You've got ${fornum(items.lemons)} lemons!`;
    disMcmake.innerHTML = `So far every click gives you ${fornum((items.Mclick||1)*items.pres)} clicks!`;
    Mc1.innerHTML = `Buy an upgrade for your clicks<br> for ${fornum(20+(items.Mclick||1)*(items.Mclick||1))} lemons`;
    progva.innerHTML = `So far you got ${items.token} token out of ${1000*items.pres}!`
    
    
    
    
    presBT1.innerHTML = `1 Ticket for <br> <b style="font-weight: 1000;">some</b> Lemons`
    presBT10.innerHTML = `10 Tickets for <br> <b style="font-weight: 1000;">some more</b> Lemons`
    presBTmax.innerHTML = `Buy all Ticket for <br> <b style="font-weight: 1000;">some</b> Lemons`
    ItsTime.innerHTML = `Let's do this!`;
    if(items.pres > 1){
      got.innerHTML = `You've got ${items.pres-1} Prestige points`
    }
  }


}

// Upload
function upload(){update();load();}

function cash(){
  setTimeout (function money(){
    cs = items.dogs + items.cats*12 + items.foxes*18 + items.wolfs*100 + items.hamsters*130 + items.whales*220 + items.capybaras*280 + items.platapuses*400 + items.porcupines*650 + items.hippos*950 + items.snakes*1000 + items.cheetahs*3000 + items.pythons*7800 + items.girrafes*8400 + items.otters*9000 + items.meerkat*9800 + items.raccoon*14500 + items.owl*16000;
    items.clicks += cs*items.pres;
    update();cash();
  },1000)
}

function fornum(num) {
  // Define the suffixes for thousands and millions
  const suffixes = ['', ' k', ' mil', ' mld', ' bil', ' bld', ' tri', ' tld', ' qua', ' qld', ' kvi', ' kld', ' sex', ' sld', ' sep', ' spld', ' okt', ' okld', ' non', ' nld', ' dec', ' dld'];

  // Divide the number by 1000 until it is less than 1000
  let i = 0;
  while (num >= 1000 && i < suffixes.length - 1) {
    num /= 1000;
    i++;
  }
  num = Math.floor(num * 10) / 10;
  return num + suffixes[i];
}

window.onload = function(){
  load();cash();progress();
  if((items.token != 0)&&(items.token < 1)){
    items.token = 0;
  }
}

/* U P G R A D E S */

function buyMcc(){
  if(items.lemons>=20+(items.Mclick||1)*(items.Mclick||1)){
    items.lemons -= 20+(items.Mclick||1)*(items.Mclick||1);
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
    console.log(items.token);
  }
  progress();
  upload();
}

function tmlm(){ // Token More Lemon Buy
  if(items.lemons >= 20000){
    items.lemons -= 20000;
    items.token += 10;
    console.log(items.token);
  }
  progress();
  upload();
}

function talb(){ // Token All Lemon Buy
  let C = ((1000*items.pres) - items.token)
  for(let i = 0; i<C; i++){
    if(items.lemons >= 2000){
      items.lemons -= 2000;
      items.token++;
      console.log(items.token);
    }
    progress();
    upload();
  }
}

function progress(){
  prog.value = `${items.token}`
  prog.title = `${items.token}/${1000*items.pres}`
  upload();
}




function TheThing(){
  if(items.lang == 0 && items.token >= (1000*items.pres) && confirm(`Za Prestiže budeš získávat více kliků, ale tvůj postup se vynuluje (až na Prestiž body). Chceš se 'Znovuzrodit'?`)){        // CZ
      alert(`Získal jsi 0.5 prestiže bodů!`);
      items.pres += 0.5;
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
      alert(`You've earn 0.5 prestige points!`);
      items.pres += 0.5;
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
function SLDmodes(){
  if(items.mode == 0){
    items.mode = 1;
  }else if(items.mode == 1){
    items.mode = 0;
  }
  LDmodes();
  upload();
  console.log(items.mode);
}
function LDmodes(){
  let Bimts = document.querySelectorAll('.item');
  if((items.mode||0) == 0){// Light Mode
    body.style.background = '#ddd';
    body.style.color = '#000';
    jonathan.style.background = 'linear-gradient(#11ABFF, #ccccccab)';
    Bimts.forEach((e) => {
      e.style.background = '#ffefd5';
    });
    loglm.style.background = '#ffefd5';
    loglm.style.filter = 'drop-shadow(10px 8px 6px #222)';
  }else if(items.mode == 1){// Dark Mode
    body.style.background = '#333';
    body.style.color = '#fff';
    jonathan.style.background = 'linear-gradient(#11ABFF, #333333ab)';
    Bimts.forEach((e) => {
      e.style.background = '#666055';
    });
    loglm.style.background = '#666055'; // effd5f66
    loglm.style.filter = 'drop-shadow(10px 8px 6px #222)';
  }
}