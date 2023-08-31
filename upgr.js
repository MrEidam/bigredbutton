let items;
let cs;

// Update
function update(){
  let i = JSON.stringify(items);
  localStorage.setItem('items', i);
}

function load(){
  if (localStorage.getItem('items')!=null){
    items = JSON.parse(localStorage.getItem('items'));
  }





  cs = items.dogs + items.cats*12 + items.foxes*18 + items.wolfs*100 + items.hamsters*130 + items.whales*220 + items.capybaras*280 + items.platapuses*400 + items.porcupines*650 + items.hippos*950;
  
  document.getElementById('dislm').innerHTML = `You've got ${items.lemons} lemons!`
}

function upload(){
  update();
  load();
}

function cash(){
  setTimeout (function money(){
    cs = items.dogs + items.cats*12 + items.foxes*18 + items.wolfs*100 + items.hamsters*130 + items.whales*220 + items.capybaras*280 + items.platapuses*400 + items.porcupines*650 + items.hippos*950;
    items.clicks += cs;
    update();cash();
  },1000)
}


window.onload = function(){
  load();cash();
}