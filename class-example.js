class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
}

let t = new Train('blue', true);
console.log(JSON.stringify(t));
console.log(t.color);
console.log(t.lightsOn);
