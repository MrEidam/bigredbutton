function loadUpgrades(){
  if (localStorage.getItem('items')!=null){
    items = JSON.parse(localStorage.getItem('items'));
    prog.max = 1000*items.pres;
  }
  if(items.token >= 1000*items.pres){
    prog.style.display = 'none';
    presBT1.style.display = 'none';
    presBTmax.style.display = 'none';
    progva.style.display = 'none';
    ItsTime.style.display = 'block';
  }
  if(navigator.language == 'cs' || navigator.language == 'cs-CZ'){        // CZ
    dislm.innerHTML = `Máš ${fornum(items.lemons)} citrónů!`;
    disMcmake.innerHTML = `Každý klik ti dává ${fornum((items.Mclick||1)*items.pres)} kliků!`;
    Mc1.innerHTML = `Vylepšení na kliky za <br> ${fornum(10+(items.Mclick||1)*(items.Mclick||1)-1)} citrónů`;
    progva.innerHTML = `Máš ${items.token} lístků z ${1000*items.pres}!`;

    presBT1.innerHTML = `1 Lístek za<br>${fornum(2000)} Citrónů`;
    ItsTime.innerHTML = `Pojďme jít!`;
    if(items.pres > 1) got.innerHTML = `Právě máš ${items.pres-1} Prestiž bodů`;
  }else{  // En
    dislm.innerHTML = `You've got ${fornum(items.lemons)} lemons!`;
    disMcmake.innerHTML = `Every click gives you ${fornum((items.Mclick||1)*items.pres)} clicks!`;
    Mc1.innerHTML = `Upgrade for your clicks<br> for ${fornum(10+(items.Mclick||1)*(items.Mclick||1)-1)} lemons`;
    progva.innerHTML = `You have ${items.token} tokens out of ${1000*items.pres}!`
    
    
    presBT1.innerHTML = `1 Ticket for ${fornum(2000)} Lemons`;
    ItsTime.innerHTML = `Let's do this!`;
    if(items.pres > 1) got.innerHTML = `You have ${items.pres-1} Prestige points`;
  }
}

// UploadUpgrades
function uploadUpgrades(){update();loadUpgrades();}

/* U P G R A D E S */

function buyMcc(){
  alert("Doesn't work");
  return 0;
  if(items.lemons>=10+(items.Mclick||1)*(items.Mclick||1)-1){
    items.lemons -= 10+(items.Mclick||1)*(items.Mclick||1)-1;
    if((items.Mclick != 1)&&(items.Mclick < 2)){
      items.Mclick = 1;
    }
    items.Mclick += 4;
    uploadUpgrades();
  }
}

function tblb(){ // Token Basic Lemon Buy
  if(items.lemons >= 2000){
    items.lemons -= 2000;
    items.token++;
  }
  progress();
  uploadUpgrades();
}

function talb(){ // Token All Lemon Buy
  const amount = Math.floor(items.lemons / 2000);
  
  items.lemons -= amount * 2000;
  items.token += amount;
  progress();
  uploadUpgrades();
}

function progress(){
  prog.value = `${items.token}`;
  prog.title = `${items.token}/${1000*items.pres}`;
  uploadUpgrades();
}

function TheThing(){
  if(navigator.language == 'cs' || navigator.language == 'cs-CZ' && items.token >= (1000*items.pres) && confirm(`Za Prestiže budeš získávat více kliků, ale tvůj postup se vynuluje (až na Prestiž body). Chceš se 'Znovuzrodit'?`)){        // CZ
    if(items.pres>=5){
      alert(`Získal jsi 1 prestiže bod!`);
      items.pres += 1;
    }else{
      alert(`Získal jsi 0.5 prestiže bodů!`);
      items.pres += 0.5;
    }
    uploadUpgrades();
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
      pres:items.pres,
      Mclick:1,
      token:0,
    }
    toClick();
  }else{
    if(items.token >= (1000*items.pres) && confirm(`For Prestige You'll earn more clicks, but your progress resets (except prestige points). Do you wish to 'Rebirth'?`)){  // En
      if(items.pres>=5){
        alert(`You've earn 1 prestige point!`);
        items.pres += 1;
      }else{
        alert(`You've earn 0.5 prestige points!`);
        items.pres += 0.5;
      }
      uploadUpgrades();
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
        pres:items.pres,
        Mclick:1,
        token:0,
      }
      toClick();
    }
  }
}