let xp = 0;
let hp = 100;
let gold = 50;
let currentWeapon = 0;
let fighting = 0;
let monsterHp;
let inventory = [
    'Boxing gloves',
];

//? Buttons
const btn1 = document.querySelector('#button1');
const btn2 = document.querySelector('#button2');
const btn3 = document.querySelector('#button3');

//? Player Texts
const text = document.querySelector('#text');
const xpText = document.querySelector('#xpText');
const hpText = document.querySelector('#hpText');
const goldText = document.querySelector('#goldText');

//? Monster
const monsterStats = document.querySelector('#monsterStats');
const monsterName = document.querySelector('#monsterName');
const monsterHpText = document.querySelector('#monsterHp');

const monsters = [
    {
        name: 'Slime',
        level: 2,
        hp: 15,
    },
    {
        name: 'Unicorn',
        level: 8,
        hp: 70,
    },
    {
        name: 'Dragon',
        level: 25,
        hp: 500,
    },
];

const weapons = [
    {
        name: 'Boxing gloves',
        power: 1,
    },
    {
        name: 'Oak Stick',
        power: 5,
    },
    {
        name: 'Iron Dagger',
        power: 25,
    },
    {
        name: 'Nordic Hammer',
        power: 50,
    },
    {
        name: 'Royal Broadsword',
        power: 100,
    },
];

const locations = [
    {
        name: 'Town Square',
        'btn text': [
            `Go to Store`,
            `Go to Cave`,
            `Fight the Dragon`
        ],
        'btn fun': [
            goStore,
            goCave,
            fightDragon
        ],
        text: `You are in the Town Square. You can see a sign that says "Jonathan's Store"`,
    },{
        name: 'Store',
        'btn text': [
            `Buy 10 hp (10 gold)`,
            `Buy weapon (30 gold)`,
            `Go to Town Square`,
        ],
        'btn fun': [
            buyHp,
            buyWeapon,
            goTown,
        ],
        text: `You've entered the store. You can buy something from Jonathan or go back to Town square. Note that your current weapon is ${weapons[currentWeapon].name}.`,
    },{
        name: 'Cave',
        'btn text': [
            `Fight Slime`,
            `Fight Unicorn`,
            `Go to Town Square`,
        ],
        'btn fun': [
            fightSlime,
            fightUni,
            goTown,
        ],
        text: `You've entered the Cave. You see some dangerous monsters...`,
    },{
        name: 'Fight',
        'btn text': [
            `Attack`,
            `Dodge`,
            `Run`
        ],
        'btn fun': [
            attack,
            dodge,
            goTown,
        ],
        text: `You are fighting a monster.`
    },{
        name: 'Monster Killed',
        'btn text': [
            `Go to Town Square`,
            `Go to Town Square`,
            `Go to Town Square`,
        ],
        'btn fun': [
            goTown,
            goTown,
            egg,
        ],
        text: `Exiting the nearby cavern, one ${monsters[fighting].name} lies defeated. Its final cry fades as you gain experience. Among the remnants, you find gold—a reward for your bravery.`,
    },{
        name: 'Lose',
        'btn text': [
            `Replay?`,
            `Replay?`,
            `Replay?`,
        ],
        'btn fun': [
            restart,
            restart,
            restart,
        ],
        text: `Your resolve falters as weariness sets in, and the ground trembles with the arrival of another ${monsters[fighting].name} from the shadows. Despite your valiant efforts in battle, the relentless onslaught proves too much, and you find yourself overpowered. As darkness descends upon your vision, the echoing roar of the ${monsters[fighting].name} serves as a grim reminder of your valiant but ultimately unsuccessful struggle.`,
    },{
        name: 'Win',
        'btn text': [
            `Replay?`,
            `Replay?`,
            `Replay?`,
        ],
        'btn fun': [
            restart,
            restart,
            restart,
        ],
        text: `With the thunderous roar of The Mighty Dragon silenced, the once trembling town now stands firm and secure. Its people, once shackled by fear, now breathe freely, their gratitude echoing through the cobblestone streets. Amidst the jubilant celebrations, you, the hero, stand tall, your courage and valor earning you the heartfelt thanks of every man, woman, and child. Your name shall be etched in the annals of history, a testament to your unwavering resolve and selflessness in the face of adversity.`,
    },{
        name: 'Egg',
        'btn text': [
            `2`,
            `8`,
            `Go to Town Square`,
        ],
        'btn fun': [
            pickTwo,
            pickEight,
            goTown,
        ],
        text: `You've founded a secret secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you'll win!`,
    },
];

//? Buttons workforce
btn1.onclick = goStore;
btn2.onclick = goCave;
btn3.onclick = fightDragon;

function update(location){
    monsterStats.style.display = 'none';

    btn1.innerText = location['btn text'][0];
    btn2.innerText = location['btn text'][1];
    btn3.innerText = location['btn text'][2];

    btn1.onclick = location['btn fun'][0];
    btn2.onclick = location['btn fun'][1];
    btn3.onclick = location['btn fun'][2];

    text.innerText = location.text;
}

//? Locations
function goTown(){
    update(locations[0]);
}

function goStore(){
    update(locations[1]);
}

function goCave(){
    update(locations[2]);
}

//? Shopping
function buyHp(){
    if(gold>=10){
        gold -= 10;
        hp += 10;
        textUp();
    }else{
        text.innerText = `You need ${10-gold} more Gold to buy more HP.`
    }
}
function buyWeapon(){//TODO current weapon in shop entry
    if(currentWeapon < weapons.length-1){
        if(gold>=30){
            gold -= 30;
            currentWeapon++;
            text.innerText = `You now have a ${weapons[currentWeapon].name}, you are now stronger.`;
            inventory.push(weapons[currentWeapon].name);
            text.innerText += `In your inventory of weapons you have: ${inventory}.`;
            textUp();
        }else{
            text.innerText = `You need ${30-gold} more Gold to buy a new Weapon.`;
        }
    }else{
        text.innerText = `You already have the most powerfull Weapon! Go slay The Dragon!`;
        btn2.innerText = `Sell Old Weapon for 15 gold`;
        btn2.onclick = sellWeapon;
    }
}

function sellWeapon(){
    if(inventory.length > 1){
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon = inventory.shift();
        text.innerText = `You'have sold a ${currentWeapon}.`
        text.innerText += ` In your inventory of weapons you have: ${inventory}.`
    }else{
        text.innerText = `Don't sell your only weapon!`
    }
}

//? Fighting
function fightSlime(){
    fighting = 0;
    goFight();
}
function fightUni(){
    fighting = 1;
    goFight();
}
function fightDragon(){
    fighting = 2;
    goFight();
}

function goFight(){
    update(locations[3]);
    monsterHp = monsters[fighting].hp;
    monsterStats.style.display = 'block';
    monsterName.innerText = monsters[fighting].name;
    monsterHpText.innerText = monsterHp;
}
function attack(){
    text.innerText = `The ${monsters[fighting].name} attacks. `;
    text.innerText += `You attack it with your ${weapons[currentWeapon].name}.`;
    if(isMonsterHit()){
        hp -= getMonsterAttackValue(monsters[fighting].level);
    }else{
        text.innerText += ` You missed.`
    }
    monsterHp -= weapons[currentWeapon].power + Math.floor(Math.random()*xp) + 1;
    textUp();
    if(hp<=0) lose();
    else if(monsterHp<=0){
        fighting === 2 ? winGame() : defeatMonster();
    }

    if(Math.random() <= .1 && inventory.length !== 1){
        text.innerText += `Your ${inventory.pop()} breaks.`;
        currentWeapon--;
    }
}

function getMonsterAttackValue(level){
    return (level*5) - (Math.floor(Math.random()*xp));
}

function isMonsterHit(){
    return Math.random()>.2 || hp<20;
}

function dodge(){ //TODO round up when monster hits (lichá) % sudá misses
    text.innerText = `You dodge the attack from the ${monsters[fighting].name}.`
}

function defeatMonster(){
    gold  += Math.floor(monsters[fighting].level * 6.7);
    xp += monsters[fighting].level;
    textUp();
    update(locations[4]);
}

function lose(){
    update(locations[5]);
}

function winGame(){
    update(locations[6]);
}

function restart(){
    xp = 0;
    hp = 100;
    gold = 50;
    currentWeapon = 0;
    inventory = [
        'Boxing gloves',
    ];
    textUp();
    goTown();
}

function egg(){
    update(locations[7]);
}

function pickTwo(){
    pick(2);
}
function pickEight(){
    pick(8);
}

function pick(num){
    let numbers = [];
    while(numbers.length < 10){
        numbers.push(Math.floor(Math.random()*11));
    }

    text.innerText = `You picked ${num}. Here are the random numbers:\n`;

    for(let i=0;i<10;i++){
        text.innerText += `${numbers[i]}\n`;
    }

    if(numbers.indexOf(num) !== -1){
        text.innerText += `That's Right! You've won 20 gold!`;
        gold+=20;
    }else{
        text.innerText += `That's Wrong! You lose 10 health!`;
        hp-=10;
    }

    textUp();
    if(hp<=0) lose();
}

//? Essentials
function textUp(){
    xpText.innerText = xp;
    hpText.innerText = hp;
    goldText.innerText = gold;
    monsterHpText.innerText = monsterHp;
}
//TODO 1:12:00 https://www.youtube.com/watch?v=SYx885hX0OY