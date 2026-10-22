"use strict";

let numRole = Number(prompt("Input number from 0 to 7"));
switch (true) {
  case numRole > 0 && numRole <= 7:
    let arrRole = ["execute", "write", "read"].filter((item, index) => (numRole >> index) & 1).toReversed();
    let lastRole = arrRole.pop();
    let restRole = arrRole.join(", ");

    console.log(`You have rights to: ${restRole ? `${restRole} and ${lastRole}` : lastRole}`);
    break;
  case numRole === 0:
    console.log("Your does not have read or write, or execute");
    break;
  default:
    console.log("You entered an invalid value");
}