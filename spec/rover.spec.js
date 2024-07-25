const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  it("constructor sets position and default values for mode and generatorWatts", function() {
    let rover = new Rover(98382);
    expect(rover.position).toEqual(98382);
    expect(rover.generatorWatts).toEqual(110);
  })
  it("response returned by receiveMessage contains the name of the message.", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    //expect(message.name).toEqual('Test message with two commands');
    expect(response.message).toEqual('Test message with two commands');
  })
  it("response returned by receiveMessage includes two results if two commands are sent in the message.", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.results).toEqual(true);
  })
  it("responds correctly to the status check command.", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.mode).toEqual('Normal');
    expect(response.generatorWatts).toEqual(110);
    expect(response.position).toEqual(98382);
  })
  it("responds correctly to the mode change command.", function() {
    let message = new Message('Test message with two commands', [new Command("STATUS_CHECK")]);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.completed).toEqual(true);
    expect(response.completed).toEqual(true);
    expect(response.mode).toEqual("LOW_POWER");
  })
  it("responds with a false completed value when attempting to move in LOW_POWER mode.", function() {
 let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.completed).toEqual(false);
  })
  it("responds with the position for the move command.", function() {
    let rover = new Rover(98382);
    expect(rover.position).toEqual(98382);

  })
  // 7 tests here!

});
