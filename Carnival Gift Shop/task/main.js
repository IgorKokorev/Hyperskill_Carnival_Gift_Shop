// write your code here
const input = require('sync-input');

function Gift(name, price, id) {
    this.name = name;
    this.price = price;
    this.id = id;
}

let gifts = [
    new Gift("Teddy Bear", 10, 1),
    new Gift("Big Red Ball", 5, 2),
    new Gift("Huge Bear", 50, 3),
    new Gift("Candy", 8, 4),
    new Gift("Stuffed Tiger", 15, 5),
    new Gift("Stuffed Dragon", 30, 6),
    new Gift("Skateboard", 100, 7),
    new Gift("Toy Car", 25, 8),
    new Gift("Basketball", 20, 9),
    new Gift("Scary Mask", 75, 10)
];

let printGifts = () => {
    console.log('Here\'s the list of gifts:\n');
    if (gifts.length < 1) {
        printNoGifts();
        return;
    }
    gifts.forEach(gift => {
        console.log(`${gift.id}- ${gift.name}, Cost: ${gift.price} tickets`);
    });
}

function printNoGifts() {
    console.log('Wow! There are no gifts to buy.');
}

function buyGift() {
    if (gifts.length < 1) {
        printNoGifts();
        return;
    }
    console.log('Enter the number of the gift you want to get: ');
    let giftId = parseInt(input());
    if (Number.isNaN(giftId)) {
        console.log('Please enter a valid number!');
        return;
    }
    let giftIndex = gifts.findIndex(gift => gift.id === giftId);
    if (giftIndex < 0) {
        console.log('There is no gift with that number!');
        return;
    }
    if (totalTickets < gifts[giftIndex].price) {
        console.log('You don\'t have enough tickets to buy this gift.')
        return;
    }
    let gift = gifts.splice(giftIndex, 1)[0];
    console.log(`Here you go, one ${gift.name}!`);
    totalTickets -= gift.price;
    checkTickets();
}

function checkTickets() {
    console.log('Total tickets: ' + totalTickets);
}

function addTickets() {
    console.log('Enter the ticket amount: ');
    let tickets = parseInt(input());
    if (Number.isNaN(tickets) || tickets < 0 || tickets > 1000) {
        console.log('Please enter a valid number between 0 and 1000.');
    }
    totalTickets += tickets;
    checkTickets();
}

let totalTickets = 0;

console.log('WELCOME TO THE CARNIVAL GIFT SHOP!');
console.log('Hello friend! Thank you for visiting the carnival!');
printGifts();

let finish = false;

while (true) {
    console.log('\nWhat do you want to do?\n' +
        '1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop');
    let inputStr = input();

    switch (inputStr) {
        case '1':
            buyGift();
            break;
        case '2':
            addTickets();
            break;
        case '3':
            checkTickets();
            break;
        case '4':
            printGifts();
            break;
        case '5':
            finish = true;
            break;
        default:
            console.log('Please enter a valid number!');
    }
    if (finish) {
        break;
    }
}

console.log('Have a nice day!');