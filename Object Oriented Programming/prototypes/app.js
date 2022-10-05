// Create a prototype
String.prototype.yell = function () {
    console.log(this.toUpperCase());
};

// Override a prototype
Array.prototype.pop = function () {
    return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP!'
}



