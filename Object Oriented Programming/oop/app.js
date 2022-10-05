// Todo: Make color conversion functions
function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`
}

hex(255, 100, 25);
// "#ff6419"
// "rgb(255,100,25)"



// Todo: Make a Factory Function
function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`
    }
    color.hex = function () {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.rgb();
firstColor.hex();

const black = makeColor(0, 0, 0);
firstColor.rgb();
firstColor.hex();

console.log(black.hex === firstColor.hex)    // false
console.log("hi".slice === "bye".slice)     // true



// Todo: Make a Constructor Function w/ prototypes
function NewColor(r,g,b) {
    this.r = r;
    this.g = g;
    this.b = b;
}
// RETURNS UNDEFINED: Color(255,0,0);
// RETURNS NEW OBJECT: new Color(255,0,0)

NewColor.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`
}

NewColor.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

NewColor.prototype.rgba = function (a = 1.0){
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b}, ${a})`;
}

const color1 = new NewColor(40,255,40);
const color2 = new NewColor(0,0,0);
// document.body.style.backgroundColor = color1.rgba(0.5)



// Todo: Make a Class!
class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL();
    }
    innerRGB(){
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`
    }
    rgb(){
        const { r, g, b } = this;
        return `rgb(${this.innerRGB()})`
    }
    rgba(a = 1.0){
        const { r, g, b } = this;
        return `rgb(${this.innerRGB()}, ${a})`;
    }
    hex(){
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    hsl(){
        const { h, s, l } = this;
        return `hsl(${h}, ${s}%, ${l}%)`
    }
    fullySaturated(){
        const { h, l } = this;
        return `hsl(${h}, 100%, ${l}%)`
    }
    opposite(){
        const { h, s, l } = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue}, ${s}%, ${l}%)`
    }
    calcHSL(){
        let { r, g, b } = this;
        // Make r, g, and b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;

        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        if (delta === 0) h = 0;
        else if (cmax === r) h = ((g-b) / delta) % 6;       // Red is max
        else if (cmax === g) h = ((b-r) / delta) + 2;       // Green is max
        else h = ((r-g) / delta) + 4;                       // Blue is max

        h = Math.round(h * 60);

        // Make negative hues positive behind 360˚
        if (h < 0) h += 360;
        // Calculate lightness
        l = (cmax + cmin) / 2;
        // Calculate saturation
        s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        this.h = h;
        this.s = s;
        this.l = l;
    }
}

const red = new Color(255, 67, 89, "red");
const white = new Color(255, 255, 255, "white");
const orange = new Color(230, 126, 34);

// document.body.style.backgroundColor = red.rgba(0.3)
// document.body.style.backgroundColor = red.hsl()
// document.body.style.backgroundColor = red.opposite()





