"use strict";
require('ts-node').register;
// Dynamic Types (any)
let age = 25;
age = true;
console.log(age);
age = "hello";
console.log(age);
let mixed = [];
mixed.push(4);
mixed.push("oohboy");
mixed.push("oohboy");
mixed.push(true);
mixed.forEach((mixed) => {
    console.log(mixed);
});
let tech;
let techgirls;
console.log(tech = { name: "emmy", age: 30 });
