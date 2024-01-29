// social
let toggle = document.querySelector('.toggle');
let socmenu = document.querySelector('.socmenu');
toggle.onclick = function(){
    socmenu.classList.toggle('active');
};

if(navigator.language == 'cs' || navigator.language == 'cs-CZ'){
    document.title = 'BRB - Hlavní menu'
    document.getElementById('tit').innerHTML = 'BRB - HRA';
    document.getElementById('heh').innerHTML = 'Zmáčkni tlačítko aby ses dostal do hry!';
    document.getElementById('foot').innerHTML = `Vytvořil: <a href="https://www.youtube.com/@MrEidam">MrEidam</a>`;
}else{
    document.title = 'BRB - Main Menu';
    document.getElementById('tit').innerHTML = 'BRB THE GAME';
    document.getElementById('heh').innerHTML = 'Press the button to get to the game!';
    document.getElementById('foot').innerHTML = `Made by: <a href="https://www.youtube.com/@MrEidam">MrEidam</a>`;
}