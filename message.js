const Command = require("./command.js");
class Message {
   constructor(name, commands) {
      this.name = name;
      if(!name) {
         throw Error("Name required.");
      }
      this.commands = commands;
      //commands = commands.push([new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 12000), new Command('STATUS_CHECK')]);
   }
   // Write code here
}
//let name = new Message('Curiosity');
let commands = ([new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 12000), new Command('STATUS_CHECK')]);
let message = new Message('Test message with two commands', commands);

//console.log(name);
//console.log(commands);
console.log(message);

module.exports = Message;