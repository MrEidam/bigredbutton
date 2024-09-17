let anime = false;
let version = 48;
let content;

const changeEN = `
<h1>Version - <span>${version}</span></h1>
<h3>Added:</h3>
<ul>
  <li>Discord link</li>
  <li>New Design for clicks per second in shop</li>
  <li>SHOP 4.0!!!</li>
  <li>This Info</li>
  <li>Icons to Menu</li>
</ul>
<h3>Removed:</h3>
<ul>
  <li>Few animals for better performance</li>
  <li>Upgrades (For now)</li>
</ul>
<h3>Fixed:</h3>
<ul>
  <li>BRB#45 - Scam with buying lemons (New Shop buying function)</li>
</ul>
<h3>Notes:</h3>
<p>This is one of the or THE biggest BRB redesign ever. So if something you like is missing or you want to be added then message me on my <a href="https://discord.gg/kQy3AAUgSq" target="_blank">discord</a></p>
`

const changeCZ = `
<h1>Verze - <span>${version}</span></h1>
<h3>Přidáno:</h3>
<ul>
  <li>Discord odkaz</li>
  <li>Kliky za sec. Nový design</li>
  <li>Obchod 4.0</li>
  <li>Toto Info</li>
  <li>Ikonu pro Menu</li>
</ul>
<h3>Smazáno:</h3>
<ul>
  <li>Pár Zvířat pro zlepšenou efektivitu</li>
  <li>Vylepšení (prozatím)</li>
</ul>
<h3>Zpraveno:</h3>
<ul>
  <li>BRB#45 - kupování citrónů byl scam (nové funkce na nákupy)</li>
</ul>
<h3>Poznámky:</h3>
<p>Toto byl největší redesign BRB takže ne vše po vydání nové verze bude fungovat tak jako předtím, když něco najdete tak mi napiště na <a href="https://discord.gg/kQy3AAUgSq" target="_blank">discord</a></p>
`

function loadClicking(){
  if (localStorage.getItem('BRB-Progress')!=null){
    bigredbutton = JSON.parse(localStorage.getItem('BRB-Progress'));
}
}

// updateClicking
function updateClicking(){
  let i = JSON.stringify(bigredbutton);
  localStorage.setItem('BRB-Progress', i);
  if(navigator.language == 'cs' || navigator.language == 'cs-CZ'){
    document.getElementById('disclick').innerHTML=`Máš ${fornum(bigredbutton.items.special[0].number)} kliků a generuješ ${fornum(cs*bigredbutton.settings.prestige)} k/s!`
  }else{
    document.getElementById('disclick').innerHTML=`You have ${fornum(bigredbutton.items.special[0].number)} clicks, and generating ${fornum(cs*bigredbutton.settings.prestige)} c/s!`
  }
}

// UploadClicking
function uploadClicking(){updateClicking();loadClicking();}

// BRB
function beriba(){
  document.getElementById('unpressed').style.visibility='visible'
  document.getElementById('pressed').style.visibility='hidden'
  anime=true;
}

// šmol change
function change(){
  document.getElementById('smallI').classList.add('large');
  document.getElementById('info').style.display = 'none';
  document.getElementById('ex').style.display = 'flex';

  content = document.createElement('article');

  if(navigator.language == 'cs' || navigator.language == 'cs-CZ'){
    content.innerHTML = changeCZ;
    //-alert(changeCZ);
  }else{
    content.innerHTML = changeEN;
    //-alert(changeEN);
  }
  
  document.getElementById('changePlace').append(content);
}

function closeChange(){
  document.getElementById('smallI').classList.remove('large');
  document.getElementById('info').style.display = 'flex';
  document.getElementById('ex').style.display = 'none';

  content.remove();
}

function clicking(){
  bigredbutton.items.special[0].number += 1; //*(items.Mclick||1)*items.pres;
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