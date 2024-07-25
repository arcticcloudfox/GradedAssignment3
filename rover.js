const Command = require('./command.js');
const Message = require('./message.js');
class Rover {
   constructor(position) {
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
   }
   receiveMessage(message) {
      let response = [];
      if(message.commands){
        for(let command of message.commands){
          if(command.commandType === "STATUS_CHECK"){
            response.push({
              completed: true,
              roverStatus: {
                mode: this.mode, 
                generatorWatts: this.generatorWatts, 
                position: this.position,
              }
          });
          }
          else if(command.commandType === "MODE_CHANGE") {
            this.mode = commands.value;
            response.push({completed: true});
          }
          else if(command.commandType === "MOVE"){
            if(this.mode === "NORMAL"){
              this.position = commands.value;
              response.push({completed: true});
            }
            else if(this.mode === "LOW_POWER"){
              response.push({completed: false});
            }
     
          }       
        }
      }
      
      return {
        message: message.name,  
        results: response
      };
   }
}
let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', commands);
let rover = new Rover(98382);
let response = rover.receiveMessage(message);

console.log(response);
console.log('Test');
module.exports = Rover;