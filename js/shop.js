let cs

// Update
function update(){
  let i = JSON.stringify(items);
  localStorage.setItem('items', i);
  cs = items.dogs + items.cats*12 + items.foxes*18 + items.wolfs*100 + items.hamsters*130 + items.whales*220 + items.capybaras*280 + items.platapuses*400 + items.porcupines*650 + items.hippos*950 + items.snakes*1000 + items.cheetahs*3000 + items.pythons*7800 + items.girrafes*8400 + items.otters*9000 + items.meerkat*9800 + items.raccoon*14500 + items.owl*16000;
}
function c(x){
  items.clicks += x;
  console.log(x + ' clicks added!');
  upload();
}

// Load
function load(){
  items = JSON.parse(localStorage.getItem('items'));
  LDmodes()
  cs = items.dogs + items.cats*12 + items.foxes*18 + items.wolfs*100 + items.hamsters*130 + items.whales*220 + items.capybaras*280 + items.platapuses*400 + items.porcupines*650 + items.hippos*950 + items.snakes*1000 + items.cheetahs*3000 + items.pythons*7800 + items.girrafes*8400 + items.otters*9000 + items.meerkat*9800 + items.raccoon*14500 + items.owl*16000;

  if(items.lang == 1){
    document.documentElement.setAttribute('lang', 'en');
    shop.innerHTML = 'Shop';
    upg.innerHTML = 'Upgrades';
    sett.innerHTML = 'Settings';
    disclick.innerHTML=`You've got ${fornum(items.clicks)} clicks, and making ${fornum(cs*items.pres)} per second!`
    disdog.innerHTML=`You've got ${fornum(items.dogs)} dogs!`
    discat.innerHTML=`You've got ${fornum(items.cats)} cats!`
    disfox.innerHTML=`You've got ${fornum(items.foxes)} foxes!`
    diswol.innerHTML=`You've got ${fornum(items.wolfs)} wolfs!`
    disham.innerHTML=`You've got ${fornum(items.hamsters)} hamsters!`
    diswha.innerHTML=`You've got ${fornum(items.whales)} whales!`
    discap.innerHTML=`You've got ${fornum(items.capybaras)} capybaras!`
    displa.innerHTML=`You've got ${fornum(items.platapuses)} platypuses!`
    dispor.innerHTML=`You've got ${fornum(items.porcupines)} porcupines!`
    diship.innerHTML=`You've got ${fornum(items.hippos)} hippopotamuses!`
    dissna.innerHTML=`You've got ${fornum(items.snakes)} snakes!`
    dische.innerHTML=`You've got ${fornum(items.cheetahs)} cheetahs!`
    dispyt.innerHTML=`You've got ${fornum(items.pythons)} pythons!`
    disgir.innerHTML=`You've got ${fornum(items.girrafes)} giraffes!`
    disoth.innerHTML=`You've got ${fornum(items.otters)} otters!`
    dismee.innerHTML=`You've got ${fornum(items.meerkat)} meerkats!`
    disrac.innerHTML=`You've got ${fornum(items.raccoon)} racoons!`
    disowl.innerHTML=`You've got ${fornum(items.owl)} owls!`
    
    
    
    
    document.getElementById('dislem').innerHTML=`You've got ${fornum(items.lemons)} lemons!`
    document.getElementById('dislt3').innerHTML=`You've got ${fornum(items.lt3)} lemon trees!`
    

    disdgmake.innerHTML=`They're generating ${fornum((items.dogs*1)*items.pres)} clicks per second!`
    disctmake.innerHTML=`They're generating ${fornum((items.cats*12)*items.pres)} clicks per second!`
    disfxmake.innerHTML=`They're generating ${fornum((items.foxes*18)*items.pres)} clicks per second!`
    diswlmake.innerHTML=`They're generating ${fornum((items.wolfs*100)*items.pres)} clicks per second!`
    dishmmake.innerHTML=`They're generating ${fornum((items.hamsters*130)*items.pres)} clicks per second!`
    diswhmake.innerHTML=`They're generating ${fornum((items.whales*220)*items.pres)} clicks per second!`
    discpmake.innerHTML=`They're generating ${fornum((items.capybaras*280)*items.pres)} clicks per second!`
    displmake.innerHTML=`They're generating ${fornum((items.platapuses*400)*items.pres)} clicks per second!`
    disprmake.innerHTML=`They're generating ${fornum((items.porcupines*650)*items.pres)} clicks per second!`
    dishimake.innerHTML=`They're generating ${fornum((items.hippos*950)*items.pres)} clicks per second!`
    dissnmake.innerHTML=`They're generating ${fornum((items.snakes*1000)*items.pres)} clicks per second!`
    dischmake.innerHTML=`They're generating ${fornum((items.cheetahs*3000)*items.pres)} clicks per second!`
    dispymake.innerHTML=`They're generating ${fornum((items.pythons*7800)*items.pres)} clicks per second!`
    disgimake.innerHTML=`They're generating ${fornum((items.girrafes*8400)*items.pres)} clicks per second!`
    disotmake.innerHTML=`They're generating ${fornum((items.otters*9000)*items.pres)} clicks per second!`
    dismeemake.innerHTML=`They're generating ${fornum((items.meerkat*9800)*items.pres)} clicks per second!`
    disramake.innerHTML=`They're generating ${fornum((items.raccoon*14500)*items.pres)} clicks per second!`
    disowmake.innerHTML=`They're generating ${fornum((items.owl*16000)*items.pres)} clicks per second!`

    dg1.innerHTML = 'Buy a Dog for 100 clicks'
    ct1.innerHTML = 'Buy a Cat for 10 dogs'
    fx1.innerHTML = 'Buy a Fox for 15 dogs'
    wl1.innerHTML = 'Buy a Wolf for <br /> 6 dogs and 5 foxes'
    hm1.innerHTML = 'Buy a Hamster for <br /> 1 wolf and 2 cats'
    wh1.innerHTML = 'Buy a Whale for 2 wolfs'
    cp1.innerHTML = 'Buy a Capybara for <br /> 1 whale and 4 cats'
    pl1.innerHTML = 'Buy a Platypus for <br /> 1 capybara and 1 wolf'
    pr1.innerHTML = 'Buy a Porcupine for <br /> 1 platypus and 1 whale'
    hi1.innerHTML = 'Buy a Hippopotamus for <br /> 1 porcupine and 2 hamsters'
    sn1.innerHTML = 'Buy a Snake for <br /> 2 whales and 4 hamsters'
    ch1.innerHTML = 'Buy a Cheetah for <br /> 2 snakes and 2 platypuses'
    py1.innerHTML = 'Buy a Python for <br /> 1 cheetah and 5 hippos'
    gi1.innerHTML = 'Buy a Giraffe for <br /> 1 python and 20 foxes'
    ot1.innerHTML = 'Buy a Otter for <br /> 1 giraffe and 2 capybaras'
    me1.innerHTML = 'Buy a Meerkat for <br /> 1 otter and 3 whales'
    ra1.innerHTML = 'Buy a Raccoon for <br /> 1 meerkat and 7 porcupines'
    ow1.innerHTML = 'Buy a Owl for <br /> 1 racoon and 1 snake'

    lm1.innerHTML = 'Buy a Lemon for <b style="font-weight: 1000;">some</b> cats'
    lt1.innerHTML = 'Buy a Lemon Tree for 5 lemons'

    // Buying for clicks
    Cct1.innerHTML = 'Buy a Cat for <br /> 1,2 k clicks'
    Cfx1.innerHTML = 'Buy a Fox for <br /> 1,8 k clicks'
    Cwl1.innerHTML = 'Buy a Wolf for <br /> 10 k clicks'
    Chm1.innerHTML = 'Buy a Hamster for <br /> 13 k clicks'
    Cwh1.innerHTML = 'Buy a Whale for <br /> 22 k clicks'
    Ccp1.innerHTML = 'Buy a Capybara for <br /> 28 k clicks'
    Cpl1.innerHTML = 'Buy a Platypus for <br /> 42 k clicks'
    Cpr1.innerHTML = 'Buy a Porcupine for <br /> 70 k clicks'
    Chi1.innerHTML = 'Buy a Hippopotamus for <br /> 100 k clicks'
    Csn1.innerHTML = 'Buy a Snake for <br /> 150 k clicks'
    Cch1.innerHTML = 'Buy a Cheetah for <br /> 350 k clicks'
    Cpy1.innerHTML = 'Buy a Python for <br /> 820 k clicks'
    Cgi1.innerHTML = 'Buy a Giraffe for <br /> 880 k clicks'
    Cot1.innerHTML = 'Buy a Otter for <br> 950 k clicks'
    Cme1.innerHTML = 'Buy a Meerkat for <br> 1 mil clicks'
    Cra1.innerHTML = 'Buy a Raccoon for <br> 1.5 mil clicks'
    Cow1.innerHTML = 'Buy a Owl for <br> 1.8 mil clicks'
  }
  if(items.lang == 0){
    document.documentElement.setAttribute('lang', 'cz');
    shop.innerHTML = 'Obchod';
    upg.innerHTML = 'Vylepšení';
    sett.innerHTML = 'Nastavení';
    document.getElementById('disclick').innerHTML=`Právě máš ${fornum(items.clicks)} kliků a děláš ${fornum(cs*items.pres)} za sekundu!`
    document.getElementById('disdog').innerHTML=`Právě máš ${fornum(items.dogs)} psů!`
    document.getElementById('discat').innerHTML=`Právě máš ${fornum(items.cats)} koček!`
    document.getElementById('disfox').innerHTML=`Právě máš ${fornum(items.foxes)} lišek!`
    document.getElementById('diswol').innerHTML=`Právě máš ${fornum(items.wolfs)} vlků!`
    document.getElementById('disham').innerHTML=`Právě máš ${fornum(items.hamsters)} křečků!`
    document.getElementById('diswha').innerHTML=`Právě máš ${fornum(items.whales)} velryb!`
    document.getElementById('discap').innerHTML=`Právě máš ${fornum(items.capybaras)} kapybar!`
    document.getElementById('displa').innerHTML=`Právě máš ${fornum(items.platapuses)} ptakopysků!`
    document.getElementById('dispor').innerHTML=`Právě máš ${fornum(items.porcupines)} dikobrazů!`
    document.getElementById('diship').innerHTML=`Právě máš ${fornum(items.hippos)} hrochů!`
    document.getElementById('dissna').innerHTML=`Právě máš ${fornum(items.snakes)} hadů!`
    document.getElementById('dische').innerHTML=`Právě máš ${fornum(items.cheetahs)} gepardů!`
    document.getElementById('dispyt').innerHTML=`Právě máš ${fornum(items.pythons)} kober!`
    document.getElementById('disgir').innerHTML=`Právě máš ${fornum(items.girrafes)} žiraf!`
    document.getElementById('disoth').innerHTML=`Právě máš ${fornum(items.otters)} vyder!`
    document.getElementById('dismee').innerHTML=`Právě máš ${fornum(items.meerkat)} surikat!`
    document.getElementById('disrac').innerHTML=`Právě máš ${fornum(items.raccoon)} mývalů!`
    document.getElementById('disowl').innerHTML=`Právě máš ${fornum(items.owl)} sov!`
    
    
    
    
    document.getElementById('dislem').innerHTML=`Právě máš ${fornum(items.lemons)} citrónů!`
    document.getElementById('dislt3').innerHTML=`Právě máš ${fornum(items.lt3)} citronovníků!`
    

    document.getElementById('disdgmake').innerHTML=`Generují ${fornum((items.dogs*1)*items.pres)} kliků za sekundu!`
    document.getElementById('disctmake').innerHTML=`Generují ${fornum((items.cats*12)*items.pres)} kliků za sekundu!`
    document.getElementById('disfxmake').innerHTML=`Generují ${fornum((items.foxes*18)*items.pres)} kliků za sekundu!`
    document.getElementById('diswlmake').innerHTML=`Generují ${fornum((items.wolfs*100)*items.pres)} kliků za sekundu!`
    document.getElementById('dishmmake').innerHTML=`Generují ${fornum((items.hamsters*130)*items.pres)} kliků za sekundu!`
    document.getElementById('diswhmake').innerHTML=`Generují ${fornum((items.whales*220)*items.pres)} kliků za sekundu!`
    document.getElementById('discpmake').innerHTML=`Generují ${fornum((items.capybaras*280)*items.pres)} kliků za sekundu!`
    document.getElementById('displmake').innerHTML=`Generují ${fornum((items.platapuses*400)*items.pres)} kliků za sekundu!`
    document.getElementById('disprmake').innerHTML=`Generují ${fornum((items.porcupines*650)*items.pres)} kliků za sekundu!`
    document.getElementById('dishimake').innerHTML=`Generují ${fornum((items.hippos*950)*items.pres)} kliků za sekundu!`
    document.getElementById('dissnmake').innerHTML=`Generují ${fornum((items.snakes*1000)*items.pres)} kliků za sekundu!`
    document.getElementById('dischmake').innerHTML=`Generují ${fornum((items.cheetahs*3000)*items.pres)} kliků za sekundu!`
    document.getElementById('dispymake').innerHTML=`Generují ${fornum((items.pythons*7800)*items.pres)} kliků za sekundu!`
    document.getElementById('disgimake').innerHTML=`Generují ${fornum((items.girrafes*8400)*items.pres)} kliků za sekundu!`
    document.getElementById('disotmake').innerHTML=`Generují ${fornum((items.otters*9000)*items.pres)} kliků za sekundu!`
    document.getElementById('dismeemake').innerHTML=`Generují ${fornum((items.meerkat*9800)*items.pres)} kliků za sekundu!`
    document.getElementById('disramake').innerHTML=`Generují ${fornum((items.raccoon*14500)*items.pres)} kliků za sekundu!`
    document.getElementById('disowmake').innerHTML=`Generují ${fornum((items.owl*16000)*items.pres)} kliků za sekundu!`


    dg1.innerHTML = 'Kup Psa za 100 kliků'
    ct1.innerHTML = 'Kup Kočku za 10 psů'
    fx1.innerHTML = 'Kup Lišku za 15 psů'
    wl1.innerHTML = 'Kup Vlka za <br /> 6 psů a 5 lišek'
    hm1.innerHTML = 'Kup Křečka za <br /> 1 vlka a 2 kočky'
    wh1.innerHTML = 'Kup Velrybu za 2 vlky'
    cp1.innerHTML = 'Kup Kapybaru za <br /> 1 velrybu a 4 kočky'
    pl1.innerHTML = 'Kup Ptakopyska za <br /> 1 kapybaru a 1 vlka'
    pr1.innerHTML = 'Kup Dikobraza za <br /> 1 ptakopyska a 1 velrybu'
    hi1.innerHTML = 'Kup Hrocha za <br /> 1 dikobraza a 2 křečků'
    sn1.innerHTML = 'Kup Hada za <br /> 2 velryby a 4 křečky'
    ch1.innerHTML = 'Kup Geparda za <br /> 2 hady a 2 ptakopysky'
    py1.innerHTML = 'Kup Kobru za <br /> 1 geparda a 5 hrochů'
    gi1.innerHTML = 'Kup Žirafu za <br /> 1 kobru a 20 lišek'
    ot1.innerHTML = 'Kup Vydru za <br /> 1 žirafu a 2 kapybary'
    me1.innerHTML = 'Kup Surikatu za <br /> 1 vydru a 3 velryby'
    ra1.innerHTML = 'Kup Mývala za <br /> 1 surikatu a 7 dikobrazů'
    ow1.innerHTML = 'Kup Sovu za <br /> 1 mývala a 1 hada'

    lm1.innerHTML = 'Kup Citrón za <b style="font-weight: 1000;">pár</b> koček'
    lt1.innerHTML = 'Kup Citrónovník za 5 citrónů'

    // Buying for clicks
    Cct1.innerHTML = 'Kup Kočku za <br /> 1,2 k kliků'
    Cfx1.innerHTML = 'Kup Lišku za <br /> 1,8 k kliků'
    Cwl1.innerHTML = 'Kup Vlka za <br /> 10 k kliků'
    Chm1.innerHTML = 'Kup Křečka za <br /> 13 k kliků'
    Cwh1.innerHTML = 'Kup Velrybu za <br /> 22 k kliků'
    Ccp1.innerHTML = 'Kup Kapybaru za <br /> 28 k kliků'
    Cpl1.innerHTML = 'Kup Ptakopyska za <br /> 42 k kliků'
    Cpr1.innerHTML = 'Kup Dikobraza za <br /> 70 k kliků'
    Chi1.innerHTML = 'Kup Hrocha za <br /> 100 k kliků'
    Csn1.innerHTML = 'Kup Hada za <br /> 150 k kliků'
    Cch1.innerHTML = 'Kup Geparda za <br /> 350 k kliků'
    Cpy1.innerHTML = 'Kup Kobru za <br /> 820 k kliků'
    Cgi1.innerHTML = 'Kup Žirafu za <br /> 880 k kliků'
    Cot1.innerHTML = 'Kup Vydru za <br /> 950 k kliků'
    Cme1.innerHTML = 'Kup Surikatu za <br /> 1 mil kliků'
    Cra1.innerHTML = 'Kup Mývala za <br /> 1,5 mil kliků'
    Cow1.innerHTML = 'Kup Sovu za <br /> 1,8 mil kliků'
  }
}
load();

// Upload
function upload(){update();load();}

function cash(){
  setTimeout (function money(){
    items.clicks += cs*items.pres;
    upload();
    cash();click();
  },1000)
}
cash();

function click(){
  setTimeout(function decoration(){
    document.getElementById('imgcli').src = './img/icons8-clicked.png'
  },500);
  setTimeout(function decoration(){
    document.getElementById('imgcli').src = './img/icons8-rest.svg'
  },1000)
}

// Nákupy 
function buydog(){
  if (items.clicks>=100){
    items.clicks -= 100;
    items.dogs += 1;
  }
  upload();
  click()
}
function buycat(){
  if(items.dogs>=10){
    items.dogs-=10;
    items.cats+=1;
  }
  upload();
}
function buyfox(){
  if(items.dogs>=15){
    items.dogs-=15;
    items.foxes+=1;
  }
  upload();
}
function buywol(){
  if(items.dogs>=6 && items.foxes>=5){
    items.dogs-=6;
    items.foxes-=5;
    items.wolfs+=1;
  }
  upload();
}
function buyham(){
  if(items.wolfs>=1 && items.cats>=2){
    items.wolfs-=1;
    items.cats-=2;
    items.hamsters+=1;
  }
  upload();
}
function buywha(){
  if(items.wolfs>=2){
    items.wolfs-=2;
    items.whales+=1;
  }
  upload();
}
function buycap(){
  if(items.whales>=1 && items.cats>=4){
    items.whales-=1;
    items.cats-=4;
    items.capybaras+=1;
  } 
  upload();
}
function buypla(){
  if(items.capybaras>=1 && items.wolfs>=1){
    items.capybaras-=1;
    items.wolfs-=1;
    items.platapuses+=1;
  } 
  upload();
}
function buypor(){
  if(items.platapuses>=1 && items.whales>=1){
    items.platapuses-=1;
    items.whales-=1;
    items.porcupines++;
  } 
  upload();
}
function buyhip(){
  if(items.porcupines>=1 && items.hamsters>=2){
    items.porcupines-=1;
    items.hamsters-=2;
    items.hippos++;
  } 
  upload();
}
function buysna(){
  if(items.whales>=2 && items.hamsters>=4){
    items.whales-=2;
    items.hamsters-=4;
    items.snakes++;
  } 
  upload();
}
function buyche(){
  if(items.snakes>=2 && items.platapuses>=2){
    items.snakes-=2;
    items.platapuses-=2;
    items.cheetahs++;
  } 
  upload();
}
function buypyt(){
  if(items.cheetahs>=1 && items.hippos>=5){
    items.cheetahs-=1;
    items.hippos-=5;
    items.pythons++;
  } 
  upload();
}
function buygir(){
  if(items.pythons>=1 && items.foxes>=20){
    items.pythons-=1;
    items.foxes-=20;
    items.girrafes++;
  } 
  upload();
}
function buyoth(){
  if(items.girrafes>=1 && items.capybaras>=2){
    items.girrafes-=1;
    items.capybaras-=2;
    items.otters++;
  } 
  upload();
}
function buymee(){
  if(items.otters>=1 && items.whales>=3){
    items.otters-=1;
    items.whales-=3;
    items.meerkat++;
  } 
  upload();
}
function buyrac(){
  if(items.meerkat>=1 && items.porcupines>=7){
    items.meerkat-=1;
    items.porcupines-=7;
    items.raccoon++;
  } 
  upload();
}
function buyowl(){
  if(items.raccoon>=1 && items.snakes>=1){
    items.raccoon-=1;
    items.snakes-=1;
    items.owl++;
  } 
  upload();
}






function buylem(){
  let RanLemCost = Math.floor(Math.random()*100);
  if(items.cats>=RanLemCost){
    items.cats-=RanLemCost;
    items.lemons+=1;
  }
  upload();
}
function buylt3(){
  if (items.lemons>=5) {
    items.lemons-=5;
    items.lt3+=1;
  }
  upload();
}






/* Max Shop */
function mxdg(){
  one = Math.floor(items.clicks / 100)
  
  items.clicks -= one * 100
  items.dogs += one
  upload();
}
function mxct(){
  one = Math.floor(items.dogs / 10)
  
  items.dogs -= one * 10
  items.cats += one
  upload();
}
function mxfx(){
  one = Math.floor(items.dogs/15)

  items.dogs -= one*15
  items.foxes += one
  upload();
}
/*
function lemmvalue(){
  mdog = items.cats/20;
  maxdog = Math.floor(mdog);
  floordog = maxdog*20
  items.cats -= floordog
  items.lemons += maxdog 
  upload();
}*/
function mxlm(){
  let RanLemCost = Math.floor(Math.random()*100);
  one = Math.floor(items.cats/RanLemCost)
  
  items.cats   -= one*RanLemCost
  items.lemons += one
  upload();
}
function mxlt(){
  one = Math.floor(items.lemons/5)
  
  items.lemons -= one*5
  items.lt3 += one
  upload()
}
function mxwh(){
  let amount = Math.floor(items.wolfs/2);
  
  items.wolfs -= amount*2;
  items.whales += amount;
  upload();
}
let one,two,val

// Max Shop

function mxwl(){
  let amount = Math.min(Math.floor(items.foxes/5), Math.floor(items.dogs/6));

  if(amount > 0){
    items.foxes -= amount*5
    items.dogs  -= amount*6
    items.wolfs += amount
  }else{
    console.log('You fucked up you stupid bitch');
  }
  upload();
}
function mxhm(){
  let amount = Math.min(Math.floor(items.wolfs/1), Math.floor(items.cats/2));

  if(amount > 0){
    items.wolfs -= amount*1;
    items.cats  -= amount*2;
    items.hamsters += amount;
  }else{
    console.log('You fucked up you stupid bitch');
  }
  upload();
}
function mxcp(){
  let amount = Math.min(Math.floor(items.whales/1), Math.floor(items.cats/4));
  
  if(amount > 0){
    items.whales -= amount*1;
    items.cats  -= amount*4;
    items.capybaras += amount;
  }else{
    console.log('You fucked up you stupid bitch');
  }
  upload();
}
function mxpl(){
  let amount = Math.min(Math.floor(items.capybaras/1), Math.floor(items.wolfs/1));
  
  if(amount > 0){
    items.capybaras -= amount*1;
    items.wolfs  -= amount*1;
    items.platapuses += amount;
  }else{
    console.log('You fucked up you stupid bitch');
  }
  upload();
}
function mxpr(){
  let amount = Math.min(Math.floor(items.platapuses/1), Math.floor(items.whales/1));
  
  if(amount > 0){
    items.platapuses -= amount*1;
    items.whales -= amount*1;
    items.porcupines += amount;
  }else{
    console.log('You fucked up you stupid bitch');
  }
  upload();
}
function mxhi(){
  let amount = Math.min(Math.floor(items.porcupines/1), Math.floor(items.hamsters/2));
  
  if(amount > 0){
    items.porcupines -= amount*1;
    items.hamsters -= amount*2;
    items.hippos += amount;
  }else{
    console.log('You fucked up you stupid bitch');
  }
  upload();
}
function mxsn(){
  let amount = Math.min(Math.floor(items.whales/2), Math.floor(items.hamsters/4));
  
  if(amount > 0){
    items.whales -= amount*2;
    items.hamsters -= amount*4;
    items.snakes += amount;
  }else{
    console.log('You fucked up you stupid bitch');
  }
  upload();
}
function mxch(){
  let amount = Math.min(Math.floor(items.snakes/2), Math.floor(items.platapuses/2));
  
  if(amount > 0){
    items.snakes -= amount*2;
    items.platapuses -= amount*2;
    items.cheetahs += amount;
  }else{
    console.log('You fucked up you stupid bitch');
  }
  upload();
}
function mxpy(){
  let amount = Math.min(Math.floor(items.cheetahs/1), Math.floor(items.hippos/5));
  
  if(amount > 0){
    items.cheetahs -= amount*1;
    items.hippos -= amount*5;
    items.pythons += amount;
  }else{
    console.log('You fucked up you stupid bitch');
  }
  upload();
}
function mxgi(){
  let amount = Math.min(Math.floor(items.pythons/1), Math.floor(items.foxes/20));
  
  if(amount){
    items.pythons -= amount*1;
    items.foxes -= amount*20;
    items.girrafes += amount;
  }else{
    console.log('You fucked up you stupid bitch');
  }
  upload();
}
function mxot(){
  let amount = Math.min(Math.floor(items.girrafes/1), Math.floor(items.capybaras/2));
  
  if(amount > 0){
    items.girrafes -= amount*1;
    items.capybaras -= amount*2;
    items.otters += amount;
  }else{
    console.log('You fucked up you stupid bitch');
  }
  upload();
}
function mxme(){
  let amount = Math.min(Math.floor(items.otters/1), Math.floor(items.whales/3));
  
  if(amount > 0){
    items.otters -= amount*1;
    items.whales -= amount*3;
    items.meerkat += amount;
  }else{
    console.log('You fucked up you stupid bitch');
  }
  upload();
}
function mxra(){
  let amount = Math.min(Math.floor(items.meerkat/1), Math.floor(items.porcupines/7));
  
  if(amount > 0){
    items.meerkat -= amount*1;
    items.porcupines -= amount*7;
    items.raccoon += amount;
  }else{
    console.log('You fucked up you stupid bitch');
  }
  upload();
}
function mxow(){
  let amount = Math.min(Math.floor(items.raccoon/1), Math.floor(items.snakes/1));
  
  if(amount > 0){
    items.raccoon -= amount*1;
    items.snakes -= amount*1;
    items.owl += amount;
  }else{
    console.log('You fucked up you stupid bitch');
  }
  upload();
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
    logclick.style.background = '#ffefd5';
    disclick.style.textShadow = "";
    logclick.style.border = '5px dashed #00f';
    logclick.style.filter = 'drop-shadow(10px 8px 6px #222)';
  }else if(items.mode == 1){// Dark Mode
    body.style.background = '#333';
    body.style.color = '#fff';
    Bimts.forEach((e) => {
      e.style.background = '#666055';
    });
    logclick.style.background = '#666055';
    disclick.style.textShadow = "2px 2px 4px #000";
    logclick.style.border = '5px dashed #006';
    logclick.style.filter = 'drop-shadow(10px 8px 6px #222)';
  }
}


// Function to convert a number into a more readable format
function fornum(num) {
  // Define the suffixes for thousands and millions
  const suffixes = ['', ' k', ' mil', ' mld', ' bil', ' bld', ' tri', ' tld', ' qua', ' qld', ' kvi', ' kld', ' sex', ' sld', ' sep', ' spld', ' okt', ' okld', ' non', ' nld', ' dec', ' dld'];

  // Divide the number by 1000 until it is less than 1000
  let i = 0;
  while (num >= 1000 && i < suffixes.length - 1) {
    num /= 1000;
    i++;
  }

  // Round the number to one decimal place
  num = Math.floor(num * 10) / 10;

  // Concatenate the number with the appropriate suffix
  return num + suffixes[i];
}






/* SHOPPING WITH ONLY CLICKS */

function buyAnimal(animal, cost) {
  const quantity = Math.floor(items.clicks / cost);

  if (quantity > 0) {
    items[animal] += quantity;
    items.clicks -= quantity * cost;
    upload();
  }
}

// Example usage for buying cats
function buyCat() {
  buyAnimal('cats', 1200);
}

// cat
function buyCcat(){
  if(items.clicks >= 1200){
    items.cats++;
    items.clicks -= 1200;
    upload();
  }
}
function mxCct(){
  one = Math.floor(items.clicks / 1200)
  
  items.clicks -= one * 1200
  items.cats += one
  upload();
}

// fox
function buyCfox(){
  if(items.clicks >= 1800){
    items.foxes++;
    items.clicks -= 1800;
    upload();
  }
}
function mxCfx(){
  one = Math.floor(items.clicks / 1800)
  
  items.clicks -= one * 1800
  items.foxes += one
  upload();
}

// wolf
function buyCwol(){
  if(items.clicks >= 10000){
    items.wolfs++;
    items.clicks -= 10000;
    upload();
  }
}
function mxCwl(){
  one = Math.floor(items.clicks / 10000)
  
  items.clicks -= one * 10000
  items.wolfs += one
  upload();
}

// hamster
function buyCham(){
  if(items.clicks >= 13000){
    items.hamsters++;
    items.clicks -= 13000;
    upload();
  }
}
function mxChm(){
  one = Math.floor(items.clicks / 13000)
  
  items.clicks -= one * 13000
  items.hamsters += one
  upload();
}

// whale
function buyCwha(){
  if(items.clicks >= 22000){
    items.whales++;
    items.clicks -= 22000;
    upload();
  }
}
function mxCwh(){
  one = Math.floor(items.clicks / 22000)
  
  items.clicks -= one * 22000
  items.whales += one
  upload();
}

// cappybarra
function buyCcap(){
  if(items.clicks >= 28000){
    items.capybaras++;
    items.clicks -= 28000;
    upload();
  }
}
function mxCcp(){
  one = Math.floor(items.clicks / 28000)
  
  items.clicks -= one * 28000
  items.capybaras += one
  upload();
}

// platypussy
function buyCpla(){
  if(items.clicks >= 42000){
    items.platapuses++;
    items.clicks -= 42000;
    upload();
  }
}
function mxCpl(){
  one = Math.floor(items.clicks / 42000)
  
  items.clicks -= one * 42000
  items.platapuses += one
  upload();
}

// porcupine
function buyCpor(){
  if(items.clicks >= 70000){
    items.porcupines++;
    items.clicks -= 70000;
    upload();
  }
}
function mxCpr(){
  one = Math.floor(items.clicks / 70000)
  
  items.clicks -= one * 70000
  items.porcupines += one
  upload();
}

// hippopopopotamusss
function buyChip(){
  if(items.clicks >= 100000){
    items.hippos++;
    items.clicks -= 100000;
    upload();
  }
}
function mxChi(){
  one = Math.floor(items.clicks / 100000)
  
  items.clicks -= one * 100000
  items.hippos += one
  upload();
}

// Snuk
function buyCsna(){
  if(items.clicks >= 150000){
    items.snakes++;
    items.clicks -= 150000;
    upload();
  }
}
function mxCsn(){
  one = Math.floor(items.clicks / 150000)
  
  items.clicks -= one * 150000
  items.snakes += one
  upload();
}

// Chetuch
function buyCche(){
  if(items.clicks >= 350000){
    items.cheetahs++;
    items.clicks -= 350000;
    upload();
  }
}
function mxCch(){
  one = Math.floor(items.clicks / 350000)
  
  items.clicks -= one * 350000
  items.cheetahs += one
  upload();
}

// .py
function buyCpyt(){
  if(items.clicks >= 820000){
    items.pythons++;
    items.clicks -= 820000;
    upload();
  }
}
function mxCpy(){
  one = Math.floor(items.clicks / 820000)
  
  items.clicks -= one * 820000
  items.pythons += one
  upload();
}

// Gurllaf
function buyCgir(){
  if(items.clicks >= 880000){
    items.girrafes++;
    items.clicks -= 880000;
    upload();
  }
}
function mxCgi(){
  one = Math.floor(items.clicks / 880000)
  
  items.clicks -= one * 880000
  items.girrafes += one
  upload();
}

// Other space
function buyCoth(){
  if(items.clicks >= 950000){
    items.otters++;
    items.clicks -= 950000;
    upload();
  }
}
function mxCot(){
  one = Math.floor(items.clicks / 950000)
  
  items.clicks -= one * 950000
  items.otters += one
  upload();
}

// Mii Cat
function buyCmee(){
  if(items.clicks >= 1000000){
    items.meerkat++;
    items.clicks -= 1000000;
    upload();
  }
}
function mxCme(){
  one = Math.floor(items.clicks / 1000000)
  
  items.clicks -= one * 1000000
  items.meerkat += one
  upload();
}

// C rac
function buyCrac(){
  if(items.clicks >= 1500000){
    items.raccoon++;
    items.clicks -= 1500000;
    upload();
  }
}
function mxCra(){
  one = Math.floor(items.clicks / 1500000)
  
  items.clicks -= one * 1500000
  items.raccoon += one
  upload();
}

// O
function buyCowl(){
  if(items.clicks >= 1800000){
    items.owl++;
    items.clicks -= 1800000;
    upload();
  }
}
function mxCow(){
  one = Math.floor(items.clicks / 1800000)
  
  items.clicks -= one * 1800000
  items.owl += one
  upload();
}
