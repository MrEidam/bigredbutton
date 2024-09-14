let contextBRBCONST = {
    items: {
        special:[
            {
                name: 'click',
                number: 0,
                history: 0,
                make: 0,
                upgrade: 1,
            },
            {
                name: 'lemon',
                number: 0,
                history: 0,
                upgrade: 1,
            },
            {
                name: 'lemon tree',
                number: 0,
                history: 0,
                upgrade: 1,
            },
        ],
        animals: [
            {
                name: 'dog',
                number: 0,
                history: 0,
                cost: 100,
                make: 1,
                upgrade: 1, // min 1
            },
            {
                name: 'cat',
                number: 0,
                history: 0,
                cost: 1200,
                make: 12,
                upgrade: 1,
            },
            {
                name: 'fox',
                number: 0,
                history: 0,
                cost: 1800,
                make: 18,
                upgrade: 1,
            },
            {
                name: 'wolf',
                number: 0,
                history: 0,
                cost: 10000,
                make: 100,
                upgrade: 1,
            },
            {
                name: 'hamster',
                number: 0,
                history: 0,
                cost: 13000,
                make: 130,
                upgrade: 1,
            },
            {
                name: 'whale',
                number: 0,
                history: 0,
                cost: 35000,
                make: 350,
                upgrade: 1,
            },
            {
                name: 'capybara',
                number: 0,
                history: 0,
                cost: 41000,
                make: 410,
                upgrade: 1,
            },
            {
                name: 'snake',
                number: 0,
                history: 0,
                cost: 50000,
                make: 500,
                upgrade: 1,
            },
            {
                name: 'cheetah',
                number: 0,
                history: 0,
                cost: 55000,
                make: 550,
                upgrade: 1,
            },
            {
                name: 'giraffe',
                number: 0,
                history: 0,
                cost: 150000,
                make: 1500,
                upgrade: 1,
            },
            {
                name: 'otter',
                number: 0,
                history: 0,
                cost: 475000,
                make: 4750,
                upgrade: 1,
            },
            {
                name: 'racoon',
                number: 0,
                history: 0,
                cost: 650000,
                make: 6500,
                upgrade: 1,
            },
            {
                name: 'badger',
                number: 0,
                history: 0,
                cost: 740000,
                make: 7400,
                upgrade: 1,
            },
            {
                name: 'squirrel',
                number: 0,
                history: 0,
                cost: 9000000,
                make: 9000,
                upgrade: 1,
            },
            {
                name: 'chameleon',
                number: 0,
                history: 0,
                cost: 1900000,
                make: 19000,
                upgrade: 1,
            },
            {
                name: 'chicken',
                number: 0,
                history: 0,
                cost: 2700000,
                make: 27000,
                upgrade: 1,
            },
            {
                name: 'wombat',
                number: 0,
                history: 0,
                cost: 3000000,
                make: 30000,
                upgrade: 1,
            },
            {
                name: 'frog',
                number: 0,
                history: 0,
                cost: 5000000,
                make: 50000,
                upgrade: 1,
            },
            {
                name: 'pig',
                number: 0,
                history: 0,
                cost: 13500000,
                make: 135000,
                upgrade: 1,
            },
            {
                name: 'seal',
                number: 0,
                history: 0,
                cost: 27590000,
                make: 275900,
                upgrade: 1,
            },
        ]
    },
    settings: {
        prestige: 1,
        tokens: 0,
    },
}

const updateContext = (context) => {
    // Reset all numbers and tokens
    for (const category in context.items) {
        context.items[category].forEach(item => {
                item.number = 0; // Set number to 0
            if (item.hasOwnProperty('upgrade')) {
                item.upgrade = 1; // Set upgrade to 1
            }
        });
    }

    // Reset tokens and update prestige
    context.settings.tokens = 0; // Set tokens to 0
    context.settings.prestige += 0.5; // Add 0.5 to prestige
};
