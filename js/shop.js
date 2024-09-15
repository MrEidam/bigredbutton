let animal;

while(document.title === 'BRB - Obchod'||document.title === 'BRB - Shop'){ //! Shopdope
}

addEventListener('scroll', () => {
  if(document.title === 'BRB - Obchod'||document.title === 'BRB - Shop'){
    if(window.scrollY >= 460){
      document.querySelector('.upwards').classList.add('active');
    }else{
      document.querySelector('.upwards').classList.remove('active');
    }
  }
})

//* DISPLAYING THE GENERATION OF CLICKS
function displayClickGen(animal, make, upgrade, number){
  const animalElement = document.querySelector(`#${animal}Make`);

  if(animalElement){
      animalElement.innerHTML = `<pre>+${fornum(make*upgrade*number*bigredbutton.settings.prestige)}/s`;
  }
}

function loadShop(){
  animal = bigredbutton.items.animals;

  if(navigator.language == 'cs' || navigator.language == 'cs-CZ'){
    document.querySelector('#disclick').innerHTML=`<pre>Máš ${fornum(bigredbutton.items.special[0].number)} kliků`;
    document.querySelector('#clickMake').innerHTML = `+${fornum(cs)}/s`

    //* DISPLAYING THE NUMBER OF ANIMALS
    function czechDisplayAnimal(animal, number){
      const animalElement = document.querySelector(`#dis${animal}`);

      if(animalElement){
          animalElement.innerHTML = `Máš jich ${fornum(number)}`;
      }
    }

    bigredbutton.items.animals.forEach(({ name, number }) => {
      czechDisplayAnimal(name, number);
    });


    //* DISPLAYING THE COST OF ANIMAL BUY
    function purchaseTextCzech(animal, text = null){
      const animalElement = document.querySelector(`#${animal}1`);
  
      if(animalElement){
          if(text){
              animalElement.innerHTML = text;
          }else{
              animalElement.innerHTML = `${animal}`;
          }
      }
    }

    const purchases = [
      { id: 'dog', text: 'Kup za 100 kliků' },
      { id: 'cat', text: 'Kup za 10 psů' },
      { id: 'fox', text: 'Kup za 15 psů' },
      { id: 'wolf', text: 'Kup za:<br> 5 lišek a 6 psů' },
      { id: 'hamster', text: 'Kup za:<br> 1 vlka a 2 kočky' },
      { id: 'whale', text: 'Kup za:<br> 2 vlky a 1 křečeka' },
      { id: 'capybara', text: 'Kup za:<br> 1 velrybu a 4 koček' },
      { id: 'snake', text: 'Kup za:<br> 1 kapybaru a 4 lišky' },
      { id: 'cheetah', text: 'Kup za:<br> 2 hady a 20 psů' },
      { id: 'giraffe', text: 'Kup za:<br> 1 geparda a 2 velryby' },
      { id: 'otter', text: 'Kup za:<br> 2 žirafy a 3 hady' },
      { id: 'racoon', text: 'Kup za:<br> 1 vydru a 4 kapybary' },
      { id: 'badger', text: 'Kup za:<br> 1 mývala a 6 křečeků' },
      { id: 'squirrel', text: 'Kup za:<br> 1 jezevce a 2 gepardy' },
      { id: 'chameleon', text: 'Kup za:<br> 1 veverku a 2 vydry'},
      { id: 'chicken', text: 'Kup za:<br> 1 chameleóna a 4 žirafy' },
      { id: 'wombat', text: 'Kup za:<br> 1 slepici a 6 velryb' },
      { id: 'frog', text: 'Kup za:<br> 1 vombata a 1 chameleóna' },
      { id: 'pig', text: 'Kup za:<br> 2 žáby a 5 mývalů' },
      { id: 'seal', text: 'Kup za:<br> 2 prasata a 10 lišek' }
    ];
    function getPurchaseTextCzech(animalName){
      const purchase = purchases.find(p => p.id === animalName);
      return purchase ? purchase.text : null;
    }
    //? Updating animal names from bigredbutton.items.animals with purchase text
    bigredbutton.items.animals.forEach(({ name }) => {
      const text = getPurchaseTextCzech(name);
      purchaseTextCzech(name, text);
    });


    //* DISPLAYING THE COST OF ANIMAL BUY
    animal.forEach(a => {
      const animalId = `dis${a.name}Name`;
      const animalElement = document.getElementById(animalId);

      if(animalElement){
        animalElement.innerHTML = transtaleAnimalName(a.name);
      }
    });

    function transtaleAnimalName(animalName){
      const translation = {
        dog: 'Psi',
        cat: 'Kočky',
        fox: 'Lišky',
        wolf: 'Vlci',
        hamster: 'Křečci',
        whale: 'Velryby',
        capybara: 'Kapybary',
        snake: 'Hadi',
        cheetah: 'Gepardi',
        giraffe: 'Žirafy',
        otter: 'Vydry',
        racoon: 'Mývalové',
        badger: 'Jezevci',
        squirrel: 'Veverky',
        chameleon: 'Chameleóni',
        chicken: 'Slepice',
        wombat: 'Wombati',
        frog: 'Žáby',
        pig: 'Prasata',
        seal: 'Tuleni',
      };
      return translation[animalName] || animalName;
    }


    /*
    dislem
    `Máš fornum citrónů!`

    dislt3
    `Máš fornum citronovníků!<br>
    Tvořící fornum citrónů<br>za 100 sec.`

    dislemName.innerHTML=`Citróny`
    dislt3Name.innerHTML=`Citrónovníky`

    lm1.innerHTML = 'Kup za 20 koček'
    lt1.innerHTML = 'Kup za 5 citrónů'
*/
    

    //* BUYING FOR CLICKS DISPLAY
    function czechClickDisplay(animal, cost){
      const animalElement = document.querySelector(`#C${animal}1`);

      if(animalElement){
          animalElement.innerHTML = `Kup za ${fornum(cost)} kliků!`;
      }
    }
    bigredbutton.items.animals.forEach(({ name , cost }) => {
        czechClickDisplay(name, cost);
    });

  }else{
    document.querySelector('#disclick').innerHTML=`You've got ${fornum(bigredbutton.items.special[0].number)} clicks`;
    document.querySelector('#clickMake').innerHTML = `+${fornum(cs)}/s`;


    //* DISPLAYING THE NUMBER OF ANIMALS
    function displayAnimal(animal, number){
      const animalElement = document.querySelector(`#dis${animal}`);

      if(animalElement){
          animalElement.innerHTML = `You've got ${fornum(number)}`;
      }
    }

    bigredbutton.items.animals.forEach(({ name, number }) => {
      displayAnimal(name, number);
    });


    //* DISPLAYING THE NUMBER OF ANIMALS
    function displayAnimalName(animal){
      const animalElement = document.querySelector(`#dis${animal}Name`);

      if(animalElement){
          animalElement.innerHTML = `${animal}`;
      }
    }

    bigredbutton.items.animals.forEach(({ name }) => {
      displayAnimalName(name);
    });


    //* DISPLAYING THE COST OF ANIMAL BUY
    function purchaseText(animal, text = null){
      const animalElement = document.querySelector(`#${animal}1`);
  
      if(animalElement){
          if(text){
              animalElement.innerHTML = text;
          }else{
              animalElement.innerHTML = `${animal}`;
          }
      }
    }

    const purchases = [
      { id: 'dog', text: 'Buy for 100 clicks' },
      { id: 'cat', text: 'Buy for 10 dogs' },
      { id: 'fox', text: 'Buy for 15 dogs' },
      { id: 'wolf', text: 'Buy for:<br> 5 foxes and 6 dogs' },
      { id: 'hamster', text: 'Buy for:<br> 1 wolf and 2 cats' },
      { id: 'whale', text: 'Buy for:<br> 2 wolfs and 1 hamster' },
      { id: 'capybara', text: 'Buy for:<br> 1 whale and 4 cats' },
      { id: 'snake', text: 'Buy for:<br> 1 capybara and 4 foxes' },
      { id: 'cheetah', text: 'Buy for:<br> 2 snakes and 20 dogs' },
      { id: 'giraffe', text: 'Buy for:<br> 1 cheetah and 2 whales' },
      { id: 'otter', text: 'Buy for:<br> 2 giraffes and 3 snakes' },
      { id: 'racoon', text: 'Buy for:<br> 1 otter and 4 capybaras' },
      { id: 'badger', text: 'Buy for:<br> 1 racoon and 6 hamsters' },
      { id: 'squirrel', text: 'Buy for:<br> 1 badger and 2 cheetahs' },
      { id: 'chameleon', text: 'Buy for:<br> 1 squirrel and 2 otters'},
      { id: 'chicken', text: 'Buy for:<br> 1 chameleon and 4 giraffes' },
      { id: 'wombat', text: 'Buy for:<br> 1 chicken and 6 whales' },
      { id: 'frog', text: 'Buy for:<br> 1 wombat and 1 chameleon' },
      { id: 'pig', text: 'Buy for:<br> 2 frogs and 5 racoons' },
      { id: 'seal', text: 'Buy for:<br> 2 pigs and 10 foxes' }
    ];
    function getPurchaseText(animalName){
      const purchase = purchases.find(p => p.id === animalName);
      return purchase ? purchase.text : null;
    }
    //? Updating animal names from bigredbutton.items.animals with purchase text
    bigredbutton.items.animals.forEach(({ name }) => {
      const text = getPurchaseText(name);
      purchaseText(name, text);
    });


    //* BUYING FOR CLICKS DISPLAY
    function internationalClicksDisplay(animal, cost){
      const animalElement = document.querySelector(`#C${animal}1`);

      if(animalElement){
          animalElement.innerHTML = `Buy for ${fornum(cost)} clicks!`;
      }
    }
    bigredbutton.items.animals.forEach(({ name , cost }) => {
        internationalClicksDisplay(name, cost);
    });
  }
  
  /*
    dislem.innerHTML=
    `You have ${fornum(items.lemons)}!`
    dislt3.innerHTML=
    `You have ${fornum(items.lt3)}!<br>
    Generating ${fornum((items.lt3*items.pres))} Lemons<br>every 100 sec.`

    dislemName.innerHTML=`Lemons`
    dislt3Name.innerHTML=`Lemon Trees`

    lm1.innerHTML = 'Buy for 20 cats'
    lt1.innerHTML = 'Buy for 5 lemons'*/


    bigredbutton.items.animals.forEach(({ name , make , upgrade , number}) => {
      displayClickGen(name, make, upgrade, number);
  });
}

// uploadShop
function uploadShop(){update();loadShop();}

/*
               _____   _                     
              / ____| | |                    
             | (___   | |__     ___     _ __  
              \___ \  | '_ \   / _ \   | '_ \ 
              ____) | | | | | | (_) |  | |_) |
             |_____/  |_| |_|  \___/   | .__/ 
                                       | |    
                                       |_|    
*/

function numHis(animalIndex, num){
  animal[animalIndex].number += num;
  animal[animalIndex].history += num;
}

function buyAnimal(animalName, conditions, amount = 1){
  const animalIndex = animal.findIndex(a => a.name === animalName);
  if(animalIndex === -1) return; //? Error 404: Animal

  //? Calcs the max you can buy
  let maxAffordable = Infinity;
  for(const [item, requiredAmount] of Object.entries(conditions)){
    const resourceIndex = animal.findIndex(a => a.name === item);
    if(resourceIndex === -1) return; //? Requirement doesn't exist

    const availableAmount = animal[resourceIndex].number;
    const affordableByThisResource = Math.floor(availableAmount/requiredAmount);

    //? What limits you
    maxAffordable = Math.min(maxAffordable, affordableByThisResource);
  }

  //? Was 'max' used?
  const buyAmount = (amount === 'max') ? maxAffordable : Math.min(amount, maxAffordable);

  if(buyAmount === 0) return; //? Broke

  for(const [item, requiredAmount] of Object.entries(conditions)){
    const resourceIndex = animal.findIndex(a => a.name === item);
    animal[resourceIndex].number -= requiredAmount * buyAmount;
  }

  numHis(animalIndex, buyAmount);
  uploadShop();
}

function buycat(){buyAnimal('cat',{ dog: 10 });}
function mxCcat(){buyAnimal('cat',{ dog: 10 }, 'max');}
function buyfox(){buyAnimal('fox',{ dog: 15 });}
function mxCfox(){buyAnimal('fox',{ dog: 15 }, 'max');}
function buywolf(){buyAnimal('wolf',{ dog: 6, fox: 5 });}
function mxCwolf(){buyAnimal('wolf',{ dog: 6, fox: 5 }, 'max');}
function buyhamster(){buyAnimal('hamster',{ wolf: 1, cat: 2 });}
function mxChamster(){buyAnimal('hamster',{ wolf: 1, cat: 2 }, 'max');}
function buywhale(){buyAnimal('whale', { wolf: 2, hamster: 1});}
function mxCwhale(){buyAnimal('whale', { wolf: 2, hamster: 1}, 'max');}
function buycapybara(){buyAnimal('capybara', { whale: 1, cat: 4});}
function mxCcapybara(){buyAnimal('capybara', { whale: 1, cat: 4}, 'max');}
function buysnake(){buyAnimal('snake', { capybara: 1, fox: 4 });}
function mxCsnake(){buyAnimal('snake', { capybara: 1, fox: 4 }, 'max');}
function buycheetah(){buyAnimal('cheetah', { snake: 2, dog: 20 });}
function mxCcheetah(){buyAnimal('cheetah', { snake: 2, dog: 20 }, 'max');}
function buygiraffe(){buyAnimal('giraffe', { cheetah: 1, whale: 2 });}
function mxCgiraffe(){buyAnimal('giraffe', { cheetah: 1, whale: 2 }, 'max');}
function buyotter(){buyAnimal('otter', { giraffe: 2, snake: 3 });}
function mxCotter(){buyAnimal('otter', { giraffe: 2, snake: 3 }, 'max');}
function buyracoon(){buyAnimal('racoon', { otter: 1, capybara: 4 });}
function mxCracoon(){buyAnimal('racoon', { otter: 1, capybara: 4 }, 'max');}
function buybadger(){buyAnimal('badger', { racoon: 1, hamster: 6 });}
function mxCbadger(){buyAnimal('badger', { racoon: 1, hamster: 6 }, 'max');}
function buysquirrel(){buyAnimal('squirrel', { badger: 1, cheetah: 2 });}
function mxCsquirrel(){buyAnimal('squirrel', { badger: 1, cheetah: 2 }, 'max');}
function buychameleon(){buyAnimal('chameleon', { squirrel: 1, otter: 2 });}
function mxCchameleon(){buyAnimal('chameleon', { squirrel: 1, otter: 2 }, 'max');}
function buychicken(){buyAnimal('chicken', { chameleon: 1, giraffe: 4 });}
function mxCchicken(){buyAnimal('chicken', { chameleon: 1, giraffe: 4 }, 'max');}
function buywombat(){buyAnimal('wombat', { chicken: 1, whale: 6 });}
function mxCwombat(){buyAnimal('wombat', { chicken: 1, whale: 6 }, 'max');}
function buyfrog(){buyAnimal('frog', { wombat: 1, chameleon: 1 });}
function mxCfrog(){buyAnimal('frog', { wombat: 1, chameleon: 1 }, 'max');}
function buypig(){buyAnimal('pig', { frog: 2, racoon: 5 });}
function mxCpig(){buyAnimal('pig', { frog: 2, racoon: 5 }, 'max');}
function buyseal(){buyAnimal('seal', { pig: 2, fox: 10 });}
function mxCseal(){buyAnimal('seal', { pig: 2, fox: 10 }, 'max');}

/*
 _
| |
| |
| |
| |__
|____|

*/
function buylemom(){
  return;
  if(items.cats>=20){
    items.cats-=20;
    items.lemons+=1;
  }
  uploadShop();
}
function mxlemon(){
  return;
  let RanLemCost = 20;////Math.floor(Math.random()*100);
  const amount = Math.floor(items.cats/RanLemCost)
  
  items.cats   -= amount*RanLemCost
  items.lemons += amount
  uploadShop();
}
function buylt3(){
  return;
  if(items.lemons>=5){
    items.lemons-=5;
    items.lt3+=1;
  }
  uploadShop();
}
function mxlt(){
  return;
  const amount = Math.floor(items.lemons/5)
  
  items.lemons -= amount*5
  items.lt3 += amount
  uploadShop()
}

/* SHOPPING WITH ONLY
               _____   _   _          _          
              / ____| | | (_)        | |         
             | |      | |  _    ___  | | __  ___ 
             | |      | | | |  / __| | |/ / / __|
             | |____  | | | | | (__  |   <  \__ \
              \_____| |_| |_|  \___| |_|\_\ |___/
*/

function buyAnimalWithClicks(animalName, amount = 1){
  const animal = bigredbutton.items.animals.find(a => a.name === animalName);
  const clicksAvailable = bigredbutton.items.special[0].number; //Clicks
  const costInClicks = animal?.cost; //? optional chaining. It is used to safely access properties of an object that might be null or undefined.

  if(animal){
    const maxAffordable = Math.floor(clicksAvailable/costInClicks);
    //? If amount is 'max' use maxAffordable
    const buyAmount = (amount === 'max') ? maxAffordable : Math.min(amount, maxAffordable);

    if(buyAmount >= 0){
      const totalCost = costInClicks * buyAmount;

      bigredbutton.items.special[0].number -= totalCost;
      numHis(bigredbutton.items.animals.indexOf(animal), buyAmount);
      uploadShop();
    }else{
      console.log(`Not enough clicks to buy ${amount} ${animalName}(s).`);
    }
  }else{
    console.log(`Animal not found: ${animalName}`);
  }
}

// dog
function buydog(){buyAnimalWithClicks('dog');}
function mxdog(){buyAnimalWithClicks('dog', 'max')}

// cat
function buyCcat(){buyAnimalWithClicks('cat')}
function mxcat(){buyAnimalWithClicks('cat', 'max')}

// fox
function buyCfox(){buyAnimalWithClicks('fox')}
function mxfox(){buyAnimalWithClicks('fox', 'max')}

// wolf
function buyCwolf(){buyAnimalWithClicks('wolf')}
function mxwolf(){buyAnimalWithClicks('wolf', 'max')}

// hamster
function buyChamster(){buyAnimalWithClicks('hamster')}
function mxhamster(){buyAnimalWithClicks('hamster', 'max')}

// whale
function buyCwhale(){buyAnimalWithClicks('whale')}
function mxwhale(){buyAnimalWithClicks('whale', 'max')}

// cappybarra
function buyCcapybara(){buyAnimalWithClicks('capybara')}
function mxcapybara(){buyAnimalWithClicks('capybara', 'max')}

// Snuk
function buyCsnake(){buyAnimalWithClicks('snake')}
function mxsnake(){buyAnimalWithClicks('snake', 'max')}

// Chetuch
function buyCcheetah(){buyAnimalWithClicks('cheetah')}
function mxcheetah(){buyAnimalWithClicks('cheetah', 'max')}

// Gurllaf
function buyCgiraffe(){buyAnimalWithClicks('giraffe')}
function mxgiraffe(){buyAnimalWithClicks('giraffe', 'max')}

// Other space
function buyCotter(){buyAnimalWithClicks('otter')}
function mxotter(){buyAnimalWithClicks('otter', 'max')}

// C rac
function buyCracoon(){buyAnimalWithClicks('racoon')}
function mxracoon(){buyAnimalWithClicks('racoon', 'max')}

// bad
function buyCbadger(){buyAnimalWithClicks('badger')}
function mxbadger(){buyAnimalWithClicks('badger', 'max')}

// squirt
function buyCsquirrel(){buyAnimalWithClicks('squirrel')}
function mxsquirrel(){buyAnimalWithClicks('squirrel', 'max')}

// cha cha
function buyCchameleon(){buyAnimalWithClicks('chameleon')}
function mxchameleon(){buyAnimalWithClicks('chameleon', 'max')}

// chimken
function buyCchicken(){buyAnimalWithClicks('chicken')}
function mxchicken(){buyAnimalWithClicks('chicken', 'max')}

// Write Only Memory
function buyCwombat(){buyAnimalWithClicks('wombat')}
function mxwombat(){buyAnimalWithClicks('wombat', 'max')}

// fjog
function buyCfrog(){buyAnimalWithClicks('frog')}
function mxfrog(){buyAnimalWithClicks('frog', 'max')}

// TECHNOBLADE
function buyCpig(){buyAnimalWithClicks('pig')}
function mxpig(){buyAnimalWithClicks('pig', 'max')}

// Seal of approval
function buyCseal(){buyAnimalWithClicks('seal')}
function mxseal(){buyAnimalWithClicks('seal', 'max')}
// 892 před V46 | 1160 ve V46