while(document.title === 'BRB - Nastavení'||document.title === 'BRB - Settings'){
    
}

// Load
function loadSettings(){
    items = JSON.parse(localStorage.getItem('items'));
    let Btns = document.querySelectorAll('.change');
    
    if(navigator.language == 'cs' || navigator.language == 'cs-CZ'){
        hl.innerHTML = 'Chceš si pustit <br> video pro pomoc?';
        rs.innerHTML = 'Chceš kompletně <br> resetovat postup?';
        Btns.forEach((e) => {
            e.innerHTML = 'Ano!';
        });
        sites.innerHTML = 'Další stránky';
        history.innerHTML = `Historie`
    }else{
        hl.innerHTML = 'Do you want to <br> wantch a video for help?';
        rs.innerHTML = 'Do you want to <br> completely reset?';
        Btns.forEach((e) => {
            e.innerHTML = 'Yes!';
        });
        sites.innerHTML = 'Other Sites';
        history.innerHTML = `History`;
    }
}

// uploadSettings
function uploadSettings(){update();loadSettings();}

// HELP
function help(){
    if(navigator.language == 'cs' || navigator.language == 'cs-CZ') window.open('https://youtu.be/XhmETe4MSVI');
    else window.open('https://youtu.be/G0fP-l-05dM');
}

// Reset
function reset(){
    if((navigator.language == 'cs' || navigator.language == 'cs-CZ')){
        if(confirm('Vážně chceš všechno resetovat?') && confirm('Seš si jistý?')){
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
                seal:0, 
        
        
                
                lemons:0, 
                lt3:0,
                pres:1,
                Mclick:1,
                token:0,
            }
        }
    }else if((navigator.language != 'cs' || navigator.language != 'cs-CZ')){
        if(confirm('Do you really want to reset everything?') && confirm('Are you sure?')){
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
            seal:0, 
    
    
            
            lemons:0, 
            lt3:0,
            pres:1,
            Mclick:1,
            token:0,
        }}
    }
}