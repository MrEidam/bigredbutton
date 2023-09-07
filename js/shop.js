let cs

// Update
function update(){
  let i = JSON.stringify(items);
  localStorage.setItem('items', i);
  cs = items.dogs + items.cats*12 + items.foxes*18 + items.wolfs*100 + items.hamsters*130 + items.whales*220 + items.capybaras*280 + items.platapuses*400 + items.porcupines*650 + items.hippos*950 + items.snakes*1000 + items.cheetahs*3000  + items.pythons*7800 + items.girrafes*8400;
}
function c(x){
  items.clicks += x;
  console.log(x + ' clicks added!');
  upload();
}

// Load
function load(){
  items = JSON.parse(localStorage.getItem('items'));
<<<<<<< HEAD:js/shop.js
  cs = items.dogs + items.cats*12 + items.foxes*18 + items.wolfs*100 + items.hamsters*130 + items.whales*220 + items.capybaras*280 + items.platapuses*400 + items.porcupines*650 + items.hippos*950 + items.snakes*1000 + items.cheetahs*3000 + items.pythons*7800 + items.girrafes*8400;
=======
  cs = items.dogs + items.cats*12 + items.foxes*18 + items.wolfs*100 + items.hamsters*130 + items.whales*220 + items.capybaras*280 + items.platapuses*400 + items.porcupines*650 + items.hippos*950 + items.snakes*1000 + items.cheetahs*3000;
>>>>>>> side:shop.js

  if(items.lang == 1){
    document.documentElement.setAttribute('lang', 'en');
    disclick.innerHTML=`You've got ${fornum(items.clicks)} clicks, and making ${fornum(cs)} each second!`
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
    
    
    
    
    document.getElementById('dislem').innerHTML=`You've got ${fornum(items.lemons)} lemons!`
    document.getElementById('dislt3').innerHTML=`You've got ${fornum(items.lt3)} lemon trees!`
    

    disdgmake.innerHTML=`They're generating ${fornum(items.dogs*1)} clicks per second!`
    disctmake.innerHTML=`They're generating ${fornum(items.cats*12)} clicks per second!`
    disfxmake.innerHTML=`They're generating ${fornum(items.foxes*18)} clicks per second!`
    diswlmake.innerHTML=`They're generating ${fornum(items.wolfs*100)} clicks per second!`
    dishmmake.innerHTML=`They're generating ${fornum(items.hamsters*130)} clicks per second!`
    diswhmake.innerHTML=`They're generating ${fornum(items.whales*220)} clicks per second!`
    discpmake.innerHTML=`They're generating ${fornum(items.capybaras*280)} clicks per second!`
    displmake.innerHTML=`They're generating ${fornum(items.platapuses*400)} clicks per second!`
    disprmake.innerHTML=`They're generating ${fornum(items.porcupines*650)} clicks per second!`
    dishimake.innerHTML=`They're generating ${fornum(items.hippos*950)} clicks per second!`
    dissnmake.innerHTML=`They're generating ${fornum(items.snakes*1000)} clicks per second!`
    dischmake.innerHTML=`They're generating ${fornum(items.cheetahs*3000)} clicks per second!`
    dispymake.innerHTML=`They're generating ${fornum(items.pythons*7800)} clicks per second!`
    disgimake.innerHTML=`They're generating ${fornum(items.girrafes*8400)} clicks per second!`

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
  }
  if(items.lang == 0){
    document.documentElement.setAttribute('lang', 'cz');
    document.getElementById('disclick').innerHTML=`Právě máš ${fornum(items.clicks)} kliků a děláš ${fornum(cs)} každou sekundu!`
    document.getElementById('disdog').innerHTML=`Právě máš ${fornum(items.dogs)} psů!`
    document.getElementById('discat').innerHTML=`Právě máš ${fornum(items.cats)} koček!`
    document.getElementById('disfox').innerHTML=`Právě máš ${fornum(items.foxes)} lišek!`
    document.getElementById('diswol').innerHTML=`Právě máš ${fornum(items.wolfs)} vlků!`
    document.getElementById('disham').innerHTML=`Právě máš ${fornum(items.hamsters)} křečků!`
    document.getElementById('diswha').innerHTML=`Právě máš ${fornum(items.whales)} velryb!`
    document.getElementById('discap').innerHTML=`Právě máš ${fornum(items.capybaras)} kapybar!`
    document.getElementById('displa').innerHTML=`Právě máš ${fornum(items.platapuses)} plakopysků!`
    document.getElementById('dispor').innerHTML=`Právě máš ${fornum(items.porcupines)} dikobrazů!`
    document.getElementById('diship').innerHTML=`Právě máš ${fornum(items.hippos)} hrochů!`
    document.getElementById('dissna').innerHTML=`Právě máš ${fornum(items.snakes)} hadů!`
    document.getElementById('dische').innerHTML=`Právě máš ${fornum(items.cheetahs)} gepardů!`
    document.getElementById('dispyt').innerHTML=`Právě máš ${fornum(items.pythons)} kober!`
    document.getElementById('disgir').innerHTML=`Právě máš ${fornum(items.girrafes)} gepardů!`
    
    
    
    
    document.getElementById('dislem').innerHTML=`Právě máš ${fornum(items.lemons)} citrónů!`
    document.getElementById('dislt3').innerHTML=`Právě máš ${fornum(items.lt3)} citronovníků!`
    

    document.getElementById('disdgmake').innerHTML=`Generují ${fornum(items.dogs*1)} kliků za sekundu!`
    document.getElementById('disctmake').innerHTML=`Generují ${fornum(items.cats*12)} kliků za sekundu!`
    document.getElementById('disfxmake').innerHTML=`Generují ${fornum(items.foxes*18)} kliků za sekundu!`
    document.getElementById('diswlmake').innerHTML=`Generují ${fornum(items.wolfs*100)} kliků za sekundu!`
    document.getElementById('dishmmake').innerHTML=`Generují ${fornum(items.hamsters*130)} kliků za sekundu!`
    document.getElementById('diswhmake').innerHTML=`Generují ${fornum(items.whales*220)} kliků za sekundu!`
    document.getElementById('discpmake').innerHTML=`Generují ${fornum(items.capybaras*280)} kliků za sekundu!`
    document.getElementById('displmake').innerHTML=`Generují ${fornum(items.platapuses*400)} kliků za sekundu!`
    document.getElementById('disprmake').innerHTML=`Generují ${fornum(items.porcupines*650)} kliků za sekundu!`
    document.getElementById('dishimake').innerHTML=`Generují ${fornum(items.hippos*950)} kliků za sekundu!`
    document.getElementById('dissnmake').innerHTML=`Generují ${fornum(items.snakes*1000)} kliků za sekundu!`
    document.getElementById('dischmake').innerHTML=`Generují ${fornum(items.cheetahs*3000)} kliků za sekundu!`
    document.getElementById('dispymake').innerHTML=`Generují ${fornum(items.pythons*7800)} kliků za sekundu!`
    document.getElementById('disgimake').innerHTML=`Generují ${fornum(items.girrafes*8400)} kliků za sekundu!`

    dg1.innerHTML = 'Kup Psa za 100 kliků'
    ct1.innerHTML = 'Kup Kočku za 10 psů'
    fx1.innerHTML = 'Kup Lišku za 15 psů'
    wl1.innerHTML = 'Kup Vlka za <br /> 6 psů a 5 lišek'
    hm1.innerHTML = 'Kup Křečka za <br /> 1 vlka a 2 kočky'
    wh1.innerHTML = 'Kup Velrybu za 2 vlky'
    cp1.innerHTML = 'Kup Kapybaru za <br /> 1 velrybu a 4 kočky'
    pl1.innerHTML = 'Kup Ptakopyska za <br /> 1 capybaru a 1 vlka'
    pr1.innerHTML = 'Kup Dikobraza za <br /> 1 ptakopyska a 1 velrybu'
    hi1.innerHTML = 'Kup Hrocha za <br /> 1 dikobraza a 2 křečků'
    sn1.innerHTML = 'Kup Hada za <br /> 2 velryby a 4 křečky'
    ch1.innerHTML = 'Kup Geparda za <br /> 2 hady a 2 ptakopysky'
    py1.innerHTML = 'Kup Kobru za <br /> 1 geparda a 5 hrochů'
    gi1.innerHTML = 'Kup Žirafu za <br /> 1 kobru a 20 lišek'

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
  }
}
load();

// Upload
function upload(){update();load();}

function cash(){
  setTimeout (function money(){
    items.clicks += cs;
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




function buylem(){
  if(items.cats>=20){
    items.cats-=20;
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
  one = Math.floor(items.cats/20)
  
  items.cats   -= one*20
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
  one = Math.floor(items.wolfs/2)
  
  items.wolfs -= one*2
  items.whales += one
  upload()
}
let one,two,val

// Max Wolf 

function mxwl(){
  one = Math.floor(items.foxes/5)
  two = Math.floor(items.dogs/6)
  
  if(one<=two){
    items.foxes -= one*5
    items.dogs  -= one*6
    items.wolfs += one
  }else if(one>=two){
    items.foxes -= two*5
    items.dogs  -= two*6
    items.wolfs += two
  }else{
    console.log('You fucked up you stupid bitch')
  }
  upload();
}

function mxhm(){
  one = Math.floor(items.wolfs/1)
  two = Math.floor(items.cats/2)
  
  if(one<=two){
    items.wolfs -= one*1
    items.cats  -= one*2
    items.hamsters += one
  }else if(one>=two){
    items.wolfs -= two*1
    items.cats  -= two*2
    items.hamsters += two
  }else{
    console.log('You fucked up you stupid bitch')
  }
  upload();
}
function mxcp(){
  one = Math.floor(items.whales/1)
  two = Math.floor(items.cats/4)
  
  if(one<=two){
    items.whales -= one*1
    items.cats  -= one*4
    items.capybaras += one
  }else if(one>=two){
    items.whales -= two*1
    items.cats  -= two*4
    items.capybaras += two
  }else{
    console.log('You fucked up you stupid bitch')
  }
  upload();
}
function mxpl(){
  one = Math.floor(items.capybaras/1)
  two = Math.floor(items.wolfs/1)
  
  if(one<=two){
    items.capybaras -= one*1
    items.wolfs  -= one*1
    items.platapuses += one
  }else if(one>=two){
    items.capybaras -= two*1
    items.wolfs  -= two*1
    items.platapuses += two
  }else{
    console.log('You fucked up you stupid bitch')
  }
  upload();
}
function mxpr(){
  one = Math.floor(items.platapuses/1)
  two = Math.floor(items.whales/1)
  
  if(one<=two){
    items.platapuses -= one*1
    items.whales -= one*1
    items.porcupines += one
  }else if(one>=two){
    items.platapuses -= two*1
    items.whales -= two*1
    items.porcupines += two
  }else{
    console.log('You fucked up you stupid bitch')
  }
  upload();
}
function mxhi(){
  one = Math.floor(items.porcupines/1)
  two = Math.floor(items.hamsters/2)
  
  if(one<=two){
    items.porcupines -= one*1
    items.hamsters -= one*2
    items.hippos += one
  }else if(one>=two){
    items.porcupines -= two*1
    items.hamsters -= two*2
    items.hippos += two
  }else{
    console.log('You fucked up you stupid bitch')
  }
  upload();
}
function mxsn(){
  one = Math.floor(items.whales/2);
  two = Math.floor(items.hamsters/4);
  
  if(one<=two){
    items.whales -= one*2;
    items.hamsters -= one*4;
    items.snakes += one;
  }else if(one>=two){
    items.whales -= two*2;
    items.hamsters -= two*4;
    items.snakes += two;
  }else{
    console.log('You fucked up you stupid bitch');
  }
  upload();
}
function mxch(){
  one = Math.floor(items.snakes/2);
  two = Math.floor(items.platapuses/2);
  
  if(one<=two){
    items.snakes -= one*2;
    items.platapuses -= one*2;
    items.cheetahs += one;
  }else if(one>=two){
    items.snakes -= two*2;
    items.platapuses -= two*2;
    items.cheetahs += two;
  }else{
    console.log('You fucked up you stupid bitch')
  }
  upload();
}
function mxpy(){
  one = Math.floor(items.cheetahs/1);
  two = Math.floor(items.hippos/5);
  
  if(one<=two){
    items.cheetahs -= one*1;
    items.hippos -= one*5;
    items.pythons += one;
  }else if(one>=two){
    items.cheetahs -= two*1;
    items.hippos -= two*5;
    items.pythons += two;
  }else{
    console.log('You fucked up you stupid bitch')
  }
  upload();
}
function mxgi(){
  one = Math.floor(items.pythons/1);
  two = Math.floor(items.foxes/20);
  
  if(one<=two){
    items.pythons -= one*1;
    items.foxes -= one*20;
    items.girrafes += one;
  }else if(one>=two){
    items.pythons -= two*1;
    items.foxes -= two*20;
    items.girrafes += two;
  }else{
    console.log('You fucked up you stupid bitch')
  }
  upload();
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

  // Round the number to one decimal place
  num = Math.floor(num * 10) / 10;

  // Concatenate the number with the appropriate suffix
  return num + suffixes[i];
}






/* SHOPPING WITH ONLY CLICKS */

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

