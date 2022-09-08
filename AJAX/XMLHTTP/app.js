// XMLHttpRequest :(

// create a new XMLHttpRequest object
const req = new XMLHttpRequest();

// two callbacks
req.onload = function() {
    console.log('IT LOADED!!');
    // console.log(this);
    // console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    // console.log(data);
    console.log(data.name, data.height);
}

req.onerror = function() {
    console.log('ERROR!!!!');
    console.log(this);
}

// open request
req.open("GET", "https://swapi.dev/api/people/1");
req.send();