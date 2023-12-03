let items;

function load(){if(localStorage.getItem('items')!=null){items=JSON.parse(localStorage.getItem('items'));}}
function update(){let i = JSON.stringify(items);localStorage.setItem('items', i);}

window.onload = function(){
    load();
    items.joke=1;
}

// Upload
function upload(){update();load();}

function language(lan){
    if(lan == 0){
        items.lang=0;
        upload();
        location.href = '../index.html';
    }
    if(lan == 1){
        items.lang=1;
        upload();
        location.href = '../index.html';
    }
}