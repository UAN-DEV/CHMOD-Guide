"use strict";

let numRole = Number(prompt("Input number from 0 to 7"));

switch (true) {
  case numRole > 0 && numRole <= 7:
    console.log(`You have rights to:${(numRole >> 2) & 1 ? " read" : ""}${(numRole >> 1) & 1 ? " write" : ""}${(numRole >> 0) & 1 ? " execute" : ""}`,);
    break;
  case numRole === 0:
    console.log("Your does not have read or write, or execute");
    break;
  default:
    console.log("You entered an invalid value");
}
