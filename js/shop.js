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

function loadShop(){
  if(navigator.language == 'cs' || navigator.language == 'cs-CZ'){
   /* document.getElementById('disclick').innerHTML=`Máš ${fornum(items.clicks)} kliků a děláš ${fornum(cs*items.pres)} za sekundu!`


    disdog.innerHTML=
    `Máš ${fornum(items.dogs)}<br>
    Tvořící ${fornum((items.dogs*1)*items.pres)} kliků!`
    discat.innerHTML=
    `Máš ${fornum(items.cats)}<br>
    Tvořící ${fornum((items.cats*12)*items.pres)} kliků!`
    disfox.innerHTML=
    `Máš ${fornum(items.foxes)}<br>
    Tvořící ${fornum((items.foxes*18)*items.pres)} kliků!`
    diswol.innerHTML=
    `Máš ${fornum(items.wolfs)}<br>
    Tvořící ${fornum((items.wolfs*100)*items.pres)} kliků!`
    disham.innerHTML=
    `Máš ${fornum(items.hamsters)}<br>
    Tvořící ${fornum((items.hamsters*130)*items.pres)} kliků!`
    diswha.innerHTML=
    `Máš ${fornum(items.whales)}<br>
    Tvořící ${fornum((items.whales*220)*items.pres)} kliků!`
    discap.innerHTML=
    `Máš ${fornum(items.capybaras)}<br>
    Tvořící ${fornum((items.capybaras*280)*items.pres)} kliků!`
    displa.innerHTML=
    `Máš ${fornum(items.platapuses)}<br>
    Tvořící ${fornum((items.platapuses*400)*items.pres)} kliků!`
    dispor.innerHTML=
    `Máš ${fornum(items.porcupines)}<br>
    Tvořící ${fornum((items.porcupines*650)*items.pres)} kliků!`
    diship.innerHTML=
    `Máš ${fornum(items.hippos)}<br>
    Tvořící ${fornum((items.hippos*950)*items.pres)} kliků!`
    dissna.innerHTML=
    `Máš ${fornum(items.snakes)}<br>
    Tvořící ${fornum((items.snakes*1000)*items.pres)} kliků!`
    dische.innerHTML=
    `Máš ${fornum(items.cheetahs)}<br>
    Tvořící ${fornum((items.cheetahs*3000)*items.pres)} kliků!`
    dispyt.innerHTML=
    `Máš ${fornum(items.pythons)}<br>
    Tvořící ${fornum((items.pythons*7800)*items.pres)} kliků!`
    disgir.innerHTML=
    `Máš ${fornum(items.girrafes)}<br>
    Tvořící ${fornum((items.girrafes*8400)*items.pres)} kliků!`
    disoth.innerHTML=
    `Máš ${fornum(items.otters)}<br>
    Tvořící ${fornum((items.otters*9000)*items.pres)} kliků!`
    dismee.innerHTML=
    `Máš ${fornum(items.meerkat)}<br>
    Tvořící ${fornum((items.meerkat*9800)*items.pres)} kliků!`
    disrac.innerHTML=
    `Máš ${fornum(items.raccoon)}<br>
    Tvořící ${fornum((items.raccoon*14500)*items.pres)} kliků!`
    disowl.innerHTML=
    `Máš ${fornum(items.owl)}<br>
    Tvořící ${fornum((items.owl*16000)*items.pres)} kliků!`
    disbad.innerHTML=
    `Máš ${fornum(items.badger)}<br>
    Tvořící ${fornum((items.badger*32000)*items.pres)} kliků!`
    dissqu.innerHTML=
    `Máš ${fornum(items.squirrel)}<br>
    Tvořící ${fornum((items.squirrel*50000)*items.pres)} kliků!`
    discha.innerHTML=
    `Máš ${fornum(items.chameleon)}<br>
    Tvořící ${fornum((items.chameleon*70000)*items.pres)} kliků!`
    dischi.innerHTML=
    `Máš ${fornum(items.chicken)}<br>
    Tvořící ${fornum((items.chicken*120000)*items.pres)} kliků!`
    diswom.innerHTML=
    `Máš ${fornum(items.wombat)}<br>
    Tvořící ${fornum((items.wombat*280000)*items.pres)} kliků!`
    dispan.innerHTML=
    `Máš ${fornum(items.panther)}<br>
    Tvořící ${fornum((items.panther*550000)*items.pres)} kliků!`
    discoy.innerHTML=
    `Máš ${fornum(items.coyote)}<br>
    Tvořící ${fornum((items.coyote*840000)*items.pres)} kliků!`
    disfro.innerHTML=
    `Máš ${fornum(items.frog)}<br>
    Tvořící ${fornum((items.frog*900000)*items.pres)} kliků!`
    disbea.innerHTML=
    `Máš ${fornum(items.bear)}<br>
    Tvořící ${fornum((items.bear*950000)*items.pres)} kliků!`
    dispig.innerHTML=
    `Máš ${fornum(items.pig)}<br>
    Tvořící ${fornum((items.pig*1150000)*items.pres)} kliků!`
    dissea.innerHTML=
    `Máš ${fornum((items.seal||0))}<br>
    Tvořící ${fornum(((items.seal||0)*1300000)*items.pres)} kliků!`
    
    
    document.getElementById('dislem').innerHTML=
    `Máš ${fornum(items.lemons)} citrónů!`
    document.getElementById('dislt3').innerHTML=
    `Máš ${fornum(items.lt3)} citronovníků!<br>
    Tvořící ${fornum((items.lt3*items.pres))} citrónů<br>za 100 sec.`
    
    disdogName.innerHTML=`Psi`
    discatName.innerHTML=`Kočky`
    disfoxName.innerHTML=`Lišky`
    diswolName.innerHTML=`Vlci`
    dishamName.innerHTML=`Křečci`
    diswhaName.innerHTML=`Velryby`
    discapName.innerHTML=`Kapybary`
    displaName.innerHTML=`Ptakopyskové`
    disporName.innerHTML=`Dikobrazové`
    dishipName.innerHTML=`Hrochové`
    dissnaName.innerHTML=`Hadi`
    discheName.innerHTML=`Gepardi`
    dispytName.innerHTML=`Kobry`
    disgirName.innerHTML=`Žirafy`
    disottName.innerHTML=`Vydry`
    dismeeName.innerHTML=`Surikaty`
    disracName.innerHTML=`Mývalové`
    disowlName.innerHTML=`Sovy`
    disbadName.innerHTML=`Jezevci`
    dissquName.innerHTML=`Veverky`
    dischaName.innerHTML=`Chameleóni`
    dischiName.innerHTML=`Slepice`
    diswomName.innerHTML=`Wombati`
    dispanName.innerHTML=`Panteři`
    discoyName.innerHTML=`Kojoti`
    disfroName.innerHTML=`Žáby`
    disbeaName.innerHTML=`Medvědi`
    dispigName.innerHTML=`Prasata`
    disseaName.innerHTML=`Tuleni`
    dislemName.innerHTML=`Citróny`
    dislt3Name.innerHTML=`Citrónovníky`

    dg1.innerHTML =  'Kup za 100 kliků'
    ct1.innerHTML =  'Kup za 10 psů'
    fx1.innerHTML =  'Kup za 15 psů'
    wl1.innerHTML =  'Kup za:<br> 6 psů a 5 lišek'
    hm1.innerHTML =  'Kup za:<br> 1 vlka a 2 kočky'
    wh1.innerHTML =  'Kup za 2 vlky'
    cp1.innerHTML =  'Kup za:<br> 1 velrybu a 4 kočky'
    pl1.innerHTML =  'Kup za:<br> 1 kapybaru a 1 vlka'
    pr1.innerHTML =  'Kup za:<br> 1 ptakopyska a 1 velrybu'
    hi1.innerHTML =  'Kup za:<br> 1 dikobraza a 2 křečků'
    sn1.innerHTML =  'Kup za:<br> 2 velryby a 4 křečky'
    ch1.innerHTML =  'Kup za:<br> 2 hady a 2 ptakopysky'
    py1.innerHTML =  'Kup za:<br> 1 geparda a 5 hrochů'
    gi1.innerHTML =  'Kup za:<br> 1 kobru a 20 lišek'
    ot1.innerHTML =  'Kup za:<br> 1 žirafu a 2 kapybary'
    me1.innerHTML =  'Kup za:<br> 1 vydru a 3 velryby'
    ra1.innerHTML =  'Kup za:<br> 1 surikatu a 7 dikobrazů'
    ow1.innerHTML =  'Kup za:<br> 1 mývala a 1 hada'
    ba1.innerHTML =  'Kup za:<br> 1 sovu a 2 kobry'
    sq1.innerHTML =  'Kup za:<br> 1 jezevce a 5 gepardů'
    cha1.innerHTML = 'Kup za:<br> 1 veverku a 2 surikaty'
    chi1.innerHTML = 'Kup za:<br> 2 veverky a 1 sovu'
    wom1.innerHTML = 'Kup za:<br> 1 slepici a 2 chameleóny'
    pan1.innerHTML = 'Kup za:<br> 1 wombata a 2 slepice'
    coy1.innerHTML = 'Kup za:<br> 1 pantera a 4 chameleóny'
    fro1.innerHTML = 'Kup za:<br> 1 kojota a 40 hadů'
    bea1.innerHTML = 'Kup za:<br> 1 žábu a 5 žiraf'
    pig1.innerHTML = 'Kup za:<br> 1 medvěda a 6 jezevců'
    sea1.innerHTML = 'Kup za:<br> 1 prase a 9 vyder'

    lm1.innerHTML = 'Kup za 20 koček'
    lt1.innerHTML = 'Kup za 5 citrónů'

    // Buying for clicks
    Cct1.innerHTML =  'Kup za 1,2 k kliků'
    Cfx1.innerHTML =  'Kup za 1,8 k kliků'
    Cwl1.innerHTML =  'Kup za 10 k kliků'
    Chm1.innerHTML =  'Kup za 13 k kliků'
    Cwh1.innerHTML =  'Kup za 22 k kliků'
    Ccp1.innerHTML =  'Kup za 28 k kliků'
    Cpl1.innerHTML =  'Kup za 42 k kliků'
    Cpr1.innerHTML =  'Kup za 70 k kliků'
    Chi1.innerHTML =  'Kup za 100 k kliků'
    Csn1.innerHTML =  'Kup za 150 k kliků'
    Cch1.innerHTML =  'Kup za 350 k kliků'
    Cpy1.innerHTML =  'Kup za 820 k kliků'
    Cgi1.innerHTML =  'Kup za 880 k kliků'
    Cot1.innerHTML =  'Kup za 950 k kliků'
    Cme1.innerHTML =  'Kup za 1 mil kliků'
    Cra1.innerHTML =  'Kup za 1,5 mil kliků'
    Cow1.innerHTML =  'Kup za 1,8 mil kliků'
    Cba1.innerHTML =  'Kup za 3,5 mil kliků'
    Csq1.innerHTML =  'Kup za 5,5 mil kliků'
    Ccha1.innerHTML = 'Kup za 7,7 mil kliků'
    Cchi1.innerHTML = 'Kup za 13 mil kliků'
    Cwom1.innerHTML = 'Kup za 31 mil kliků'
    Cpan1.innerHTML = 'Kup za 60,5 mil kliků'
    Ccoy1.innerHTML = 'Kup za 92,4 mil kliků'
    Cfro1.innerHTML = 'Kup za 99 mil kliků'
    Cbea1.innerHTML = 'Kup za 104,5 mil kliků'
    Cpig1.innerHTML = 'Kup za 126,5 mil kliků'
    Csea1.innerHTML = 'Kup za 143 mil kliků'
  }else{
    disclick.innerHTML=`You have ${fornum(items.clicks)} clicks, and making ${fornum(cs*items.pres)} per second!`


    disdog.innerHTML=
    `You have ${fornum(items.dogs)}<br>
    Generating ${fornum((items.dogs*1)*items.pres)} clicks!`
    discat.innerHTML=
    `You have ${fornum(items.cats)}<br>
    Generating ${fornum((items.cats*12)*items.pres)} clicks!`
    disfox.innerHTML=
    `You have ${fornum(items.foxes)}<br>
    Generating ${fornum((items.foxes*18)*items.pres)} clicks!`
    diswol.innerHTML=
    `You have ${fornum(items.wolfs)}<br>
    Generating ${fornum((items.wolfs*100)*items.pres)} clicks!`
    disham.innerHTML=
    `You have ${fornum(items.hamsters)}<br>
    Generating ${fornum((items.hamsters*130)*items.pres)} clicks!`
    diswha.innerHTML=
    `You have ${fornum(items.whales)}<br>
    Generating ${fornum((items.whales*220)*items.pres)} clicks!`
    discap.innerHTML=
    `You have ${fornum(items.capybaras)}<br>
    Generating ${fornum((items.capybaras*280)*items.pres)} clicks!`
    displa.innerHTML=
    `You have ${fornum(items.platapuses)}<br>
    Generating ${fornum((items.platapuses*400)*items.pres)} clicks!`
    dispor.innerHTML=
    `You have ${fornum(items.porcupines)}<br>
    Generating ${fornum((items.porcupines*650)*items.pres)} clicks!`
    diship.innerHTML=
    `You have ${fornum(items.hippos)}<br>
    Generating ${fornum((items.hippos*950)*items.pres)} clicks!`
    dissna.innerHTML=
    `You have ${fornum(items.snakes)}<br>
    Generating ${fornum((items.snakes*1000)*items.pres)} clicks!`
    dische.innerHTML=
    `You have ${fornum(items.cheetahs)}<br>
    Generating ${fornum((items.cheetahs*3000)*items.pres)} clicks!`
    dispyt.innerHTML=
    `You have ${fornum(items.pythons)}<br>
    Generating ${fornum((items.pythons*7800)*items.pres)} clicks!`
    disgir.innerHTML=
    `You have ${fornum(items.girrafes)}<br>
    Generating ${fornum((items.girrafes*8400)*items.pres)} clicks!`
    disoth.innerHTML=
    `You have ${fornum(items.otters)}<br>
    Generating ${fornum((items.otters*9000)*items.pres)} clicks!`
    dismee.innerHTML=
    `You have ${fornum(items.meerkat)}<br>
    Generating ${fornum((items.meerkat*9800)*items.pres)} clicks!`
    disrac.innerHTML=
    `You have ${fornum(items.raccoon)}<br>
    Generating ${fornum((items.raccoon*14500)*items.pres)} clicks!`
    disowl.innerHTML=
    `You have ${fornum(items.owl)}<br>
    Generating ${fornum((items.owl*16000)*items.pres)} clicks!`
    disbad.innerHTML=
    `You have ${fornum(items.badger)}<br>
    Generating ${fornum((items.badger*32000)*items.pres)} clicks!`
    dissqu.innerHTML=
    `You have ${fornum(items.squirrel)}<br>
    Generating ${fornum((items.squirrel*50000)*items.pres)} clicks!`
    discha.innerHTML=
    `You have ${fornum(items.chameleon)}<br>
    Generating ${fornum((items.chameleon*70000)*items.pres)} clicks!`
    dischi.innerHTML=
    `You have ${fornum(items.chicken)}<br>
    Generating ${fornum((items.chicken*120000)*items.pres)} clicks!`
    diswom.innerHTML=
    `You have ${fornum(items.wombat)}<br>
    Generating ${fornum((items.wombat*280000)*items.pres)} clicks!`
    dispan.innerHTML=
    `You have ${fornum(items.panther)}<br>
    Generating ${fornum((items.panther*550000)*items.pres)} clicks!`
    discoy.innerHTML=
    `You have ${fornum(items.coyote)}<br>
    Generating ${fornum((items.coyote*840000)*items.pres)} clicks!`
    disfro.innerHTML=
    `You have ${fornum(items.frog)}<br>
    Generating ${fornum((items.frog*900000)*items.pres)} clicks!`
    disbea.innerHTML=
    `You have ${fornum(items.bear)}<br>
    Generating ${fornum((items.bear*950000)*items.pres)} clicks!`
    dispig.innerHTML=
    `You have ${fornum(items.pig)}<br>
    Generating ${fornum((items.pig*1150000)*items.pres)} clicks!`
    dissea.innerHTML=
    `You have ${fornum((items.seal||0))}<br>
    Generating ${fornum(((items.seal||0)*1300000)*items.pres)} clicks!`
    
    
    document.getElementById('dislem').innerHTML=
    `You have ${fornum(items.lemons)}!`
    document.getElementById('dislt3').innerHTML=
    `You have ${fornum(items.lt3)}!<br>
    Generating ${fornum((items.lt3*items.pres))} Lemons<br>every 100 sec.`
    

    disdogName.innerHTML=`Dogs`
    discatName.innerHTML=`Cats`
    disfoxName.innerHTML=`Foxes`
    diswolName.innerHTML=`Wolfs`
    dishamName.innerHTML=`Hamsters`
    diswhaName.innerHTML=`Whales`
    discapName.innerHTML=`Capybaras`
    displaName.innerHTML=`Platypuses`
    disporName.innerHTML=`Porcupines`
    dishipName.innerHTML=`Hippos`
    dissnaName.innerHTML=`Snakes`
    discheName.innerHTML=`Cheetahs`
    dispytName.innerHTML=`Pythons`
    disgirName.innerHTML=`Girafes`
    disottName.innerHTML=`Otters`
    dismeeName.innerHTML=`Meerkats`
    disracName.innerHTML=`Racoons`
    disowlName.innerHTML=`Owls`
    disbadName.innerHTML=`Badgers`
    dissquName.innerHTML=`Squirrels`
    dischaName.innerHTML=`Chameleons`
    dischiName.innerHTML=`Chickens`
    diswomName.innerHTML=`Wombats`
    dispanName.innerHTML=`Panthers`
    discoyName.innerHTML=`Coyotes`
    disfroName.innerHTML=`Frogs`
    disbeaName.innerHTML=`Bears`
    dispigName.innerHTML=`Pigs`
    disseaName.innerHTML=`Seals`


    dislemName.innerHTML=`Lemons`
    dislt3Name.innerHTML=`Lemon Trees`

    dg1.innerHTML =  'Buy for 100 clicks'
    ct1.innerHTML =  'Buy for 10 dogs'
    fx1.innerHTML =  'Buy for 15 dogs'
    wl1.innerHTML =  'Buy for:<br> 6 dogs and 5 foxes'
    hm1.innerHTML =  'Buy for:<br> 1 wolf and 2 cats'
    wh1.innerHTML =  'Buy for 2 wolfs'
    cp1.innerHTML =  'Buy for:<br> 1 whale and 4 cats'
    pl1.innerHTML =  'Buy for:<br> 1 capybara and 1 wolf'
    pr1.innerHTML =  'Buy for:<br> 1 platypus and 1 whale'
    hi1.innerHTML =  'Buy for:<br> 1 porcupine and 2 hamsters'
    sn1.innerHTML =  'Buy for:<br> 2 whales and 4 hamsters'
    ch1.innerHTML =  'Buy for:<br> 2 snakes and 2 platypuses'
    py1.innerHTML =  'Buy for:<br> 1 cheetah and 5 hippos'
    gi1.innerHTML =  'Buy for:<br> 1 python and 20 foxes'
    ot1.innerHTML =  'Buy for:<br> 1 giraffe and 2 capybaras'
    me1.innerHTML =  'Buy for:<br> 1 otter and 3 whales'
    ra1.innerHTML =  'Buy for:<br> 1 meerkat and 7 porcupines'
    ow1.innerHTML =  'Buy for:<br> 1 racoon and 1 snake'
    ba1.innerHTML =  'Buy for:<br> 1 owl and 2 pythons'
    sq1.innerHTML =  'Buy for:<br> 1 badger and 5 cheetah'
    cha1.innerHTML = 'Buy for:<br> 1 squirrel and 2 meerkats'
    chi1.innerHTML = 'Buy for:<br> 2 squirrels and 1 owl'
    wom1.innerHTML = 'Buy for:<br> 1 chicken and 2 chameleons'
    pan1.innerHTML = 'Buy for:<br> 1 wombat and 2 chickens'
    coy1.innerHTML = 'Buy for:<br> 1 panther and 4 chameleons'
    fro1.innerHTML = 'Buy for:<br> 1 coyote and 40 snakes'
    bea1.innerHTML = 'Buy for:<br> 1 frog and 5 giraffes'
    pig1.innerHTML = 'Buy for:<br> 1 bear and 6 badgers'
    sea1.innerHTML = 'Buy for:<br> 1 pig and 9 otters'

    lm1.innerHTML = 'Buy for 20 cats'
    lt1.innerHTML = 'Buy for 5 lemons'

    // Buying for clicks
    Cct1.innerHTML =  'Buy for 1.2 k clicks'
    Cfx1.innerHTML =  'Buy for 1.8 k clicks'
    Cwl1.innerHTML =  'Buy for 10 k clicks'
    Chm1.innerHTML =  'Buy for 13 k clicks'
    Cwh1.innerHTML =  'Buy for 22 k clicks'
    Ccp1.innerHTML =  'Buy for 28 k clicks'
    Cpl1.innerHTML =  'Buy for 42 k clicks'
    Cpr1.innerHTML =  'Buy for 70 k clicks'
    Chi1.innerHTML =  'Buy for 100 k clicks'
    Csn1.innerHTML =  'Buy for 150 k clicks'
    Cch1.innerHTML =  'Buy for 350 k clicks'
    Cpy1.innerHTML =  'Buy for 820 k clicks'
    Cgi1.innerHTML =  'Buy for 880 k clicks'
    Cot1.innerHTML =  'Buy for 950 k clicks'
    Cme1.innerHTML =  'Buy for 1 mil clicks'
    Cra1.innerHTML =  'Buy for 1.5 mil clicks'
    Cow1.innerHTML =  'Buy for 1.8 mil clicks'
    Cba1.innerHTML =  'Buy for 3.5 mil clicks'
    Csq1.innerHTML =  'Buy for 5.5 mil clicks'
    Ccha1.innerHTML = 'Buy for 7.7 mil clicks'
    Cchi1.innerHTML = 'Buy for 13 mil clicks'
    Cwom1.innerHTML = 'Buy for 31 mil clicks'
    Cpan1.innerHTML = 'Buy for 60.5 mil clicks'
    Ccoy1.innerHTML = 'Buy for 92.4 mil clicks'
    Cfro1.innerHTML = 'Buy for 99 mil clicks'
    Cbea1.innerHTML = 'Buy for 104.5 mil clicks'
    Cpig1.innerHTML = 'Buy for 126.5 mil clicks'
    Csea1.innerHTML = 'Buy for 143 mil clicks'*/
  }
}

// uploadShop
function uploadShop(){update();loadShop();}

// Nákupy 
function buydog(){
  if (items.clicks>=100){
    items.clicks -= 100;
    items.dogs += 1;
  }
  uploadShop();
}
function buycat(){
  if(items.dogs>=10){
    items.dogs-=10;
    items.cats+=1;
  }
  uploadShop();
}
function buyfox(){
  if(items.dogs>=15){
    items.dogs-=15;
    items.foxes+=1;
  }
  uploadShop();
}
function buywol(){
  if(items.dogs>=6 && items.foxes>=5){
    items.dogs-=6;
    items.foxes-=5;
    items.wolfs+=1;
  }
  uploadShop();
}
function buyham(){
  if(items.wolfs>=1 && items.cats>=2){
    items.wolfs-=1;
    items.cats-=2;
    items.hamsters+=1;
  }
  uploadShop();
}
function buywha(){
  if(items.wolfs>=2){
    items.wolfs-=2;
    items.whales+=1;
  }
  uploadShop();
}
function buycap(){
  if(items.whales>=1 && items.cats>=4){
    items.whales-=1;
    items.cats-=4;
    items.capybaras+=1;
  } 
  uploadShop();
}
function buypla(){
  if(items.capybaras>=1 && items.wolfs>=1){
    items.capybaras-=1;
    items.wolfs-=1;
    items.platapuses+=1;
  } 
  uploadShop();
}
function buypor(){
  if(items.platapuses>=1 && items.whales>=1){
    items.platapuses-=1;
    items.whales-=1;
    items.porcupines++;
  } 
  uploadShop();
}
function buyhip(){
  if(items.porcupines>=1 && items.hamsters>=2){
    items.porcupines-=1;
    items.hamsters-=2;
    items.hippos++;
  } 
  uploadShop();
}
function buysna(){
  if(items.whales>=2 && items.hamsters>=4){
    items.whales-=2;
    items.hamsters-=4;
    items.snakes++;
  } 
  uploadShop();
}
function buyche(){
  if(items.snakes>=2 && items.platapuses>=2){
    items.snakes-=2;
    items.platapuses-=2;
    items.cheetahs++;
  } 
  uploadShop();
}
function buypyt(){
  if(items.cheetahs>=1 && items.hippos>=5){
    items.cheetahs-=1;
    items.hippos-=5;
    items.pythons++;
  } 
  uploadShop();
}
function buygir(){
  if(items.pythons>=1 && items.foxes>=20){
    items.pythons-=1;
    items.foxes-=20;
    items.girrafes++;
  } 
  uploadShop();
}
function buyoth(){
  if(items.girrafes>=1 && items.capybaras>=2){
    items.girrafes-=1;
    items.capybaras-=2;
    items.otters++;
  } 
  uploadShop();
}
function buymee(){
  if(items.otters>=1 && items.whales>=3){
    items.otters-=1;
    items.whales-=3;
    items.meerkat++;
  } 
  uploadShop();
}
function buyrac(){
  if(items.meerkat>=1 && items.porcupines>=7){
    items.meerkat-=1;
    items.porcupines-=7;
    items.raccoon++;
  } 
  uploadShop();
}
function buyowl(){
  if(items.raccoon>=1 && items.snakes>=1){
    items.raccoon-=1;
    items.snakes-=1;
    items.owl++;
  } 
  uploadShop();
}
function buybad(){
  if(items.owl>=1 && items.pythons>=2){
    items.owl-=1;
    items.pythons-=2;
    items.badger++;
  } 
  uploadShop();
}
function buysqu(){
  if(items.badger>=1 && items.cheetahs>=5){
    items.badger-=1;
    items.cheetahs-=5;
    items.squirrel++;
  } 
  uploadShop();
}
function buycha(){
  if(items.squirrel>=1 && items.meerkat>=2){
    items.squirrel-=1;
    items.meerkat-=2;
    items.chameleon++;
  } 
  uploadShop();
}
function buychi(){
  if(items.squirrel>=2 && items.owl>=1){
    items.squirrel-=2;
    items.owl-=1;
    items.chicken++;
  } 
  uploadShop();
}
function buywom(){
  if(items.chicken>=1 && items.chameleon>=2){
    items.chicken-=1;
    items.chameleon-=2;
    items.wombat++;
  } 
  uploadShop();
}
function buypan(){
  if(items.wombat>=1 && items.chicken>=2){
    items.wombat-=1;
    items.chicken-=2;
    items.panther++;
  } 
  uploadShop();
}
function buycoy(){
  if(items.panther>=1 && items.chameleon>=4){
    items.panther-=1;
    items.chameleon-=4;
    items.coyote++;
  } 
  uploadShop();
}
function buyfro(){
  if(items.coyote>=1 && items.snakes>=40){
    items.coyote-=1;
    items.snakes-=40;
    items.frog++;
  } 
  uploadShop();
}
function buybea(){
  if(items.frog>=1 && items.girrafes>=5){
    items.frog-=1;
    items.girrafes-=5;
    items.bear++;
  } 
  uploadShop();
}
function buypig(){
  if(items.bear>=1 && items.badger>=6){
    items.bear-=1;
    items.badger-=6;
    items.pig++;
  } 
  uploadShop();
}
function buysea(){
  if(items.pig>=1 && items.otters>=9){
    items.pig-=1;
    items.otters-=9;
    items.seal++;
  } 
  uploadShop();
}

function buylem(){
  if(items.cats>=20){
    items.cats-=20;
    items.lemons+=1;
  }
  uploadShop();
}
function buylt3(){
  if (items.lemons>=5) {
    items.lemons-=5;
    items.lt3+=1;
  }
  uploadShop();
}

/*
 __  __                       _____   _                     
|  \/  |                     / ____| | |                    
| \  / |   __ _  __  __     | (___   | |__     ___     _ __  
| |\/| |  / _` | \ \/ /      \___ \  | '_ \   / _ \   | '_ \ 
| |  | | | (_| |  >  <       ____) | | | | | | (_) |  | |_) |
|_|  |_|  \__,_| /_/\_\     |_____/  |_| |_|  \___/   | .__/ 
                                                      | |    
                                                      |_|    
*/
function mxdg(){
  const amount = Math.floor(items.clicks / 100)
  
  items.clicks -= amount * 100
  items.dogs += amount
  uploadShop();
}
function mxct(){
  const amount = Math.floor(items.dogs / 10)
  
  items.dogs -= amount * 10
  items.cats += amount
  uploadShop();
}
function mxfx(){
  const amount = Math.floor(items.dogs/15)

  items.dogs -= amount*15
  items.foxes += amount
  uploadShop();
}
function mxlm(){
  let RanLemCost = 20;////Math.floor(Math.random()*100);
  const amount = Math.floor(items.cats/RanLemCost)
  
  items.cats   -= amount*RanLemCost
  items.lemons += amount
  uploadShop();
}
function mxlt(){
  const amount = Math.floor(items.lemons/5)
  
  items.lemons -= amount*5
  items.lt3 += amount
  uploadShop()
}
function mxwh(){
  const amount = Math.floor(items.wolfs/2);
  
  items.wolfs -= amount*2;
  items.whales += amount;
  uploadShop();
}
function mxwl(){
  const amount = Math.min(Math.floor(items.foxes/5), Math.floor(items.dogs/6));

  if(amount > 0){
    items.foxes -= amount*5
    items.dogs  -= amount*6
    items.wolfs += amount
  }
  uploadShop();
}
function mxhm(){
  const amount = Math.min(Math.floor(items.wolfs/1), Math.floor(items.cats/2));

  if(amount > 0){
    items.wolfs -= amount*1;
    items.cats  -= amount*2;
    items.hamsters += amount;
  }
  uploadShop();
}
function mxcp(){
  const amount = Math.min(Math.floor(items.whales/1), Math.floor(items.cats/4));
  
  if(amount > 0){
    items.whales -= amount*1;
    items.cats  -= amount*4;
    items.capybaras += amount;
  }
  uploadShop();
}
function mxpl(){
  const amount = Math.min(Math.floor(items.capybaras/1), Math.floor(items.wolfs/1));
  
  if(amount > 0){
    items.capybaras -= amount*1;
    items.wolfs  -= amount*1;
    items.platapuses += amount;
  }
  uploadShop();
}
function mxpr(){
  const amount = Math.min(Math.floor(items.platapuses/1), Math.floor(items.whales/1));
  
  if(amount > 0){
    items.platapuses -= amount*1;
    items.whales -= amount*1;
    items.porcupines += amount;
  }
  uploadShop();
}
function mxhi(){
  const amount = Math.min(Math.floor(items.porcupines/1), Math.floor(items.hamsters/2));
  
  if(amount > 0){
    items.porcupines -= amount*1;
    items.hamsters -= amount*2;
    items.hippos += amount;
  }
  uploadShop();
}
function mxsn(){
  const amount = Math.min(Math.floor(items.whales/2), Math.floor(items.hamsters/4));
  
  if(amount > 0){
    items.whales -= amount*2;
    items.hamsters -= amount*4;
    items.snakes += amount;
  }
  uploadShop();
}
function mxch(){
  const amount = Math.min(Math.floor(items.snakes/2), Math.floor(items.platapuses/2));
  
  if(amount > 0){
    items.snakes -= amount*2;
    items.platapuses -= amount*2;
    items.cheetahs += amount;
  }
  uploadShop();
}
function mxpy(){
  const amount = Math.min(Math.floor(items.cheetahs/1), Math.floor(items.hippos/5));
  
  if(amount > 0){
    items.cheetahs -= amount*1;
    items.hippos -= amount*5;
    items.pythons += amount;
  }
  uploadShop();
}
function mxgi(){
  const amount = Math.min(Math.floor(items.pythons/1), Math.floor(items.foxes/20));
  
  if(amount){
    items.pythons -= amount*1;
    items.foxes -= amount*20;
    items.girrafes += amount;
  }
  uploadShop();
}
function mxot(){
  const amount = Math.min(Math.floor(items.girrafes/1), Math.floor(items.capybaras/2));
  
  if(amount > 0){
    items.girrafes -= amount*1;
    items.capybaras -= amount*2;
    items.otters += amount;
  }
  uploadShop();
}
function mxme(){
  const amount = Math.min(Math.floor(items.otters/1), Math.floor(items.whales/3));
  
  if(amount > 0){
    items.otters -= amount*1;
    items.whales -= amount*3;
    items.meerkat += amount;
  }
  uploadShop();
}
function mxra(){
  const amount = Math.min(Math.floor(items.meerkat/1), Math.floor(items.porcupines/7));
  
  if(amount > 0){
    items.meerkat -= amount*1;
    items.porcupines -= amount*7;
    items.raccoon += amount;
  }
  uploadShop();
}
function mxow(){
  const amount = Math.min(Math.floor(items.raccoon/1), Math.floor(items.snakes/1));
  
  if(amount > 0){
    items.raccoon -= amount*1;
    items.snakes -= amount*1;
    items.owl += amount;
  }
  uploadShop();
}
function mxba(){
  const amount = Math.min(Math.floor(items.owl/1), Math.floor(items.pythons/2));
  
  if(amount > 0){
    items.owl -= amount*1;
    items.pythons -= amount*2;
    items.badger += amount;
  }
  uploadShop();
}
function mxsq(){
  const amount = Math.min(Math.floor(items.badger/1), Math.floor(items.cheetahs/5));
  
  if(amount > 0){
    items.badger -= amount*1;
    items.cheetahs -= amount*5;
    items.squirrel += amount;
  }
  uploadShop();
}
function mxcha(){
  const amount = Math.min(Math.floor(items.squirrel/1), Math.floor(items.meerkat/2));
  if(amount > 0){
    items.squirrel -= amount*1;
    items.meerkat -= amount*2;
    items.chameleon += amount;
  }
  uploadShop();
}
function mxchi(){
  const amount = Math.min(Math.floor(items.squirrel/2), Math.floor(items.owl/1));
  if(amount > 0){
    items.squirrel -= amount*2;
    items.owl -= amount*1;
    items.chicken += amount;
  }
  uploadShop();
}
function mxwom(){
  const amount = Math.min(Math.floor(items.chicken/1), Math.floor(items.chameleon/2));
  if(amount > 0){
    items.chicken -= amount*1;
    items.chameleon -= amount*2;
    items.wombat += amount;
  }
  uploadShop();
}
function mxpan(){
  const amount = Math.min(Math.floor(items.wombat/1), Math.floor(items.chicken/2));
  if(amount > 0){
    items.wombat -= amount*1;
    items.chicken -= amount*2;
    items.panther += amount;
  }
  uploadShop();
}
function mxcoy(){
  const amount = Math.min(Math.floor(items.panther/1), Math.floor(items.chameleon/4));
  if(amount > 0){
    items.panther -= amount*1;
    items.chameleon -= amount*4;
    items.coyote += amount;
  }
  uploadShop();
}
function mxfro(){
  const amount = Math.min(Math.floor(items.coyote/1), Math.floor(items.snakes/40));
  if(amount > 0){
    items.coyote -= amount*1;
    items.snakes -= amount*40;
    items.frog += amount;
  }
  uploadShop();
}
function mxbea(){
  const amount = Math.min(Math.floor(items.frog/1), Math.floor(items.girrafes/5));
  if(amount > 0){
    items.frog -= amount*1;
    items.girrafes -= amount*5;
    items.bear += amount;
  }
  uploadShop();
}
function mxpig(){
  const amount = Math.min(Math.floor(items.bear/1), Math.floor(items.badger/6));
  if(amount > 0){
    items.bear -= amount*1;
    items.badger -= amount*6;
    items.pig += amount;
  }
  uploadShop();
}
function mxsea(){
  const amount = Math.min(Math.floor(items.pig/1), Math.floor(items.otters/9));
  if(amount > 0){
    items.pig -= amount*1;
    items.otters -= amount*9;
    items.seal += amount;
  }
  uploadShop();
}

/* SHOPPING WITH ONLY CLICKS */

function canimal(animal, cost){
  if(items.clicks >= cost){
    items[animal]++;
    items.clicks -= cost;
    uploadShop();
  }
}

function cManimal(animal, cost) {
  const quantity = Math.floor(items.clicks / cost);

  if (quantity > 0) {
    items[animal] += quantity;
    items.clicks -= quantity * cost;
    uploadShop();
  }
}

// cat
function buyCcat(){canimal('cats', 1200)}
function mxCct(){cManimal('cats', 1200)}

// fox
function buyCfox(){canimal('foxes', 1800)}
function mxCfx(){cManimal('foxes', 1800)}

// wolf
function buyCwol(){canimal('wolfs', 10000)}
function mxCwl(){cManimal('wolfs', 10000)}

// hamster
function buyCham(){canimal('hamsters', 13000)}
function mxChm(){cManimal('hamsters', 13000)}

// whale
function buyCwha(){canimal('whales', 22000)}
function mxCwh(){cManimal('whales', 22000)}

// cappybarra
function buyCcap(){canimal('capybaras', 28000)}
function mxCcp(){cManimal('capybaras', 28000)}

// platypussy
function buyCpla(){canimal('platapuses', 42000)}
function mxCpl(){cManimal('platapuses', 42000)}

// porcupine
function buyCpor(){canimal('porcupines', 70000)}
function mxCpr(){cManimal('porcupines', 70000)}

// hippopopopotamusss
function buyChip(){canimal('hippos', 100000)}
function mxChi(){cManimal('hippos', 100000)}

// Snuk
function buyCsna(){canimal('snakes', 150000)}
function mxCsn(){cManimal('snakes', 150000)}

// Chetuch
function buyCche(){canimal('cheetahs', 350000)}
function mxCch(){cManimal('cheetahs', 350000)}

// .py
function buyCpyt(){canimal('pythons', 820000)}
function mxCpy(){cManimal('pythons', 820000)}

// Gurllaf
function buyCgir(){canimal('girrafes', 880000)}
function mxCgi(){cManimal('girrafes', 880000)}

// Other space
function buyCoth(){canimal('otters', 950000)}
function mxCot(){cManimal('otters', 950000)}

// Mii Cat
function buyCmee(){canimal('meerkat', 1000000)}
function mxCme(){cManimal('meerkat', 1000000)}

// C rac
function buyCrac(){canimal('raccoon', 1500000)}
function mxCra(){cManimal('raccoon', 1500000)}

// O
function buyCowl(){canimal('owl', 1800000)}
function mxCow(){cManimal('owl', 1800000)}

// bad
function buyCbad(){canimal('badger', 3500000)}
function mxCba(){cManimal('badger', 3500000)}

// squirt
function buyCsqu(){canimal('squirrel', 5500000)}
function mxCsq(){cManimal('squirrel', 5500000)}

// cha cha
function buyCcha(){canimal('chameleon', 7700000)}
function mxCcha(){cManimal('chameleon', 7700000)}

// chimken
function buyCchi(){canimal('chicken', 13000000)}
function mxCchi(){cManimal('chicken', 13000000)}

// Write Only Memory
function buyCwom(){canimal('wombat', 31000000)}
function mxCwom(){cManimal('wombat', 31000000)}

// panta
function buyCpan(){canimal('panther', 60500000)}
function mxCpan(){cManimal('panther', 60500000)}

// cojojojojojo
function buyCcoy(){canimal('coyote', 92400000)}
function mxCcoy(){cManimal('coyote', 92400000)}

// fjog
function buyCfro(){canimal('frog', 99000000)}
function mxCfro(){cManimal('frog', 99000000)}

// cocaina bear
function buyCbea(){canimal('bear', 104500000)}
function mxCbea(){cManimal('bear', 104500000)}

// TECHNOBLADE
function buyCpig(){canimal('pig', 126500000)}
function mxCpig(){cManimal('pig', 126500000)}

// Seal of approval
function buyCsea(){canimal('seal', 143000000)}
function mxCsea(){cManimal('seal', 143000000)}
// 892 před V46 | 1160 ve V46