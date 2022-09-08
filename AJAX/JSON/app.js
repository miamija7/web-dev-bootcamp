// THIS IS A STRING OF JSON from https://api.cryptonator.com/api/ticker/btc-usd
const data = `{"ticker":{"base":"BTC","target":"USD","price":"19338.65659772","volume":"15574.71487097","change":"141.81936408"},"timestamp":1662649323,"success":true,"error":""}`

// JSON -> JS OBJECT
const parsedData = JSON.parse(data);
console.log(parsedData.ticker.price);

// JS OBJECT -> JSON
const dog = { breed: 'lab', color: 'black', isAlive: true, owner: undefined };
const jsonDog = JSON.stringify(dog);
console.log(jsonDog);

