// Global scope
//    Module scope
//       Function scope
//          Block scope

// Module pattern
var fightModule = (function () {
  var harry = "Potter";
  var voldemort = "He who must not be named";

  function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
  }
  return {
    fight: fight,
  };
})();

console.log(fightModule.fight("ron", "harry"));

// CommonJS
// var module1 = require("module1");
// var module2 = require("module2");

// function fight2() {}

// module1.exports = {
//   fight: fight2,
// };

// AMD Async Module Definition
// define(["module1", "module2"], function (module1Import, module2Import) {
//   var module1 = module1Import;
//   var module1 = module2Import;

//   function dance() {}
//   return {
//     dance: dance,
//   };
// });

// Native modules

export function fight2(char1, char2) {
  const attack1 = Math.floor(Math.random() * char1.length);
  const attack2 = Math.floor(Math.random() * char2.length);
  return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
}

// Top level awaits and await import

// let a;
// if (1 == 2) {
//   const { largeNumber } = await import("./script2");
//   a = largeNumber;
// }
