const { sayHi } = require("./5-utils");
const { john, peter } = require("./4-names");
const data = require("./6-alternative-flavor");

console.log(data);

sayHi(john);
sayHi(peter);
sayHi("john");

require("./7-mind-grenade");
