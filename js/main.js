let anime = false;

const changeEN = `                                          Version - 47
Added: Forced Dark/Light mode
            Forced Language depending on the browser
            Shop 3.5!!!
            RPG in Settings...

Fixed: Loading time

Removed: Option for changing Language or L/D mode`

const changeCZ = `                                            Verze - 47
Přidáno: Automatické vybrání Světlého/Tmavého módu
              Automatické vybrání jazyka
              Obchod 3.5!!!
              RPG v Nastavení...

Upraveno: Načítání obchodu

Smazáno: Možnost výběru změny jazyka a S/T módu`

function loadClicking(){
  if (localStorage.getItem('items')!=null){
    items = JSON.parse(localStorage.getItem('items'));
  }
}

// updateClicking
function updateClicking(){
  let i = JSON.stringify(items);
  localStorage.setItem('items', i);
  if(navigator.language == 'cs' || navigator.language == 'cs-CZ'){
    document.getElementById('disclick').innerHTML=`Máš ${fornum(items.clicks)} kliků a generuješ ${fornum(cs*items.pres)} k/s!`
  }else{
    document.getElementById('disclick').innerHTML=`You have ${fornum(items.clicks)} clicks, and generating ${fornum(cs*items.pres)} c/s!`
  }
  checklang();
}

// UploadClicking
function uploadClicking(){updateClicking();loadClicking();}

// BRB
function beriba(){
  document.getElementById('unpressed').style.visibility='visible'
  document.getElementById('pressed').style.visibility='hidden'
  anime=true;
}

// Languages
function checklang(){
  if(navigator.language == 'cs' || navigator.language == 'cs-CZ'){
  }else{
  }
}

// šmol change
function change(){
  if(navigator.language == 'cs' || navigator.language == 'cs-CZ'){
    alert(changeCZ);
  }else{
    alert(changeEN);
  }
}

function clicking(){
  items.clicks += 1*(items.Mclick||1)*items.pres;
  updateClicking();
  
  document.getElementById('unpressed').style.visibility='hidden'
  document.getElementById('pressed').style.visibility='visible'
  anime=false;
    
  setTimeout(beriba, 75);
}

// keybinds
addEventListener("keyup", (event) => {
  if((event.key == ' ' || event.key == 'Enter')&&(document.title === 'BRB - Klikání'||document.title === 'BRB - Clicking')){
    clicking();
  }
})