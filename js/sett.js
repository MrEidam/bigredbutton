let cs;
let items

// Update
function update(){
    let i = JSON.stringify(items);
    localStorage.setItem('items', i);
    cs = items.dogs+items.cats*12+items.foxes*18+items.wolfs*100+items.hamsters*130+items.whales*220+items.capybaras*280+items.platapuses*400+items.porcupines*650+items.hippos*950+items.snakes*1000+items.cheetahs*3000+items.pythons*7800+items.girrafes*8400+items.otters*9000+items.meerkat*9800+items.raccoon*14500+items.owl*16000+items.badger*32000+items.squirrel*50000+items.chameleon*70000+items.chicken*120000+items.wombat*280000
}

// Load
function load(){
    items = JSON.parse(localStorage.getItem('items'));
    LDmodes();
    cs = items.dogs+items.cats*12+items.foxes*18+items.wolfs*100+items.hamsters*130+items.whales*220+items.capybaras*280+items.platapuses*400+items.porcupines*650+items.hippos*950+items.snakes*1000+items.cheetahs*3000+items.pythons*7800+items.girrafes*8400+items.otters*9000+items.meerkat*9800+items.raccoon*14500+items.owl*16000+items.badger*32000+items.squirrel*50000+items.chameleon*70000+items.chicken*120000+items.wombat*280000
    let Btns = document.querySelectorAll('.change');
    if(items.lang == 1){  // EN
        document.documentElement.setAttribute('lang', 'en');
        document.title = 'BRB - Settings'
        shop.innerHTML = 'Shop';
        upg.innerHTML = 'Upgrades';
        sett.innerHTML = 'Settings';
        if(items.mode == 0){ld.innerHTML = 'Do you want to <br> switch to Dark mode?';
        }else if(items.mode == 1){ld.innerHTML = 'Do you want to <br> switch to Light mode?';}
        lg.innerHTML = 'Do you want to <br> switch to Czech?';
        hl.innerHTML = 'Do you want to <br> wantch a video for help?';
        rs.innerHTML = 'Do you want to <br> completely reset?'
        Btns.forEach((e) => {
            e.innerHTML = 'Yes!';
        });
    }
    if(items.lang == 0){  // CZ
        document.documentElement.setAttribute('lang', 'cz');
        document.title = 'BRB - Nastavení'
        shop.innerHTML = 'Obchod';
        upg.innerHTML = 'Vylepšení';
        sett.innerHTML = 'Nastavení';
        if(items.mode == 0){ld.innerHTML = 'Chceš si zapnout <br> Tmavý mód?';
        }else if(items.mode == 1){ld.innerHTML = 'Chceš si zapnout <br> Světlý mód?';}
        lg.innerHTML = 'Chceš si přepnout <br> jazyk do Angličtiny?';
        hl.innerHTML = 'Chceš si pustit <br> video pro pomoc?';
        rs.innerHTML = 'Chceš kompletně <br> resetovat postup?'
        Btns.forEach((e) => {
            e.innerHTML = 'Ano!';
        });
}
}
load();

// Upload
function upload(){update();load();}

function cash(){
    setTimeout (function money(){
    items.clicks += cs*items.pres;
    upload();
    cash();
    },1000);
}
cash();

// Dark || Light Mode
function SLDmodes(){
    if(items.mode==0){items.mode=1;upload();}
    else if(items.mode==1){items.mode=0;upload();}
    LDmodes();
}
function LDmodes(){
    let Bimts = document.querySelectorAll('.item');
    let Btns = document.querySelectorAll('.change');
    let hhh = document.querySelectorAll('h3');
    if((items.mode||0) == 0){// Light Mode
        body.style.background = '#ddd';
        Bimts.forEach((e) => {
            e.style.background = '#ffefd5';
        });
        Btns.forEach((e) => {
            e.style.background = '#8FBC8F';
            e.style.color = '#fff';
            e.style.textShadow = "";
        });
        hhh.forEach((e) => {
            e.style.color = '#000';
            e.style.textShadow = "";
        });
        document.getElementById('sites').style.color = '#000';
        document.getElementById('sites').style.textShadow = '';
    }else if(items.mode == 1){// Dark Mode
        body.style.background = '#333';
        Bimts.forEach((e) => {
            e.style.background = '#666055';
            e.style.color = '#000';
        });
        Btns.forEach((e) => {
            e.style.background = '#008B8B';
            e.style.color = '#fff';
            e.style.textShadow = "2px 2px 4px #000";
        });
        hhh.forEach((e) => {
            e.style.color = '#eee';
            e.style.textShadow = "2px 2px 4px #000";
        });
        document.getElementById('sites').style.color = '#fff';
        document.getElementById('sites').style.textShadow = '2px 2px 4px #000';
    }
}

function language(){
    if(items.lang == 0){ /* CZ */
        items.lang = 1;
    }else if(items.lang == 1){ /* UK */
        items.lang = 0;
    }
    upload();
}

// HELP
function help(){
    if(items.lang == 1){ /* EN */
        window.open('https://youtu.be/G0fP-l-05dM');
    }else if(items.lang == 0){ /* CZ */
        window.open('https://youtu.be/XhmETe4MSVI');
    }
}

// Reset
function reset(){
    if((items.lang == 1) && confirm('Do you really want to reset everything?') && confirm('Are you sure?')){
        alert('Everything Reseted');
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
            pres:1,
            mode:items.mode,
            Mclick:1,
            token:0,
            }
    }
    if((items.lang == 0) && confirm('Vážně chceš všechno resetovat?') && confirm('Seš si jistý?')){
        alert('Vše resetováno');
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
        pres:1,
        mode:items.mode,
        Mclick:1,
        token:0,
        }
    }
}
