const assert = require('assert');
const Message=require('../message.js');
const Command=require('../command.js');
const Rover=require('../rover.js')
const Roverstatus=require('../roverstatus.js')

describe("Rover class", function() {

it("constructor sets position and default values for mode and generatorWatts",function(){
  let rov=new Rover(98382)
  assert.strictEqual(rov.position,98382);
  assert.strictEqual(rov.mode,'NORMAL');
  assert.strictEqual(rov.generatorWatts,110);
})

  it("response returned by receiveMessage contains name of message", function(){
    let comm = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let rov = new Rover(999888);
    let mess = new Message('Hello', comm);
    let response = rov.receiveMessage(mess);
    assert.strictEqual(response.message, 'Hello');     })      
it("response returned by receiveMessage includes two results if two commands are sent in the message",function(){
  let commands=[new Command('MODE_CHANGE','LOW_POWER'),new Command('STATUS_CHECK')]
  let mess= new Message('hello',commands)
let ro =new Rover(98382)
let rov=ro.receiveMessage(mess)
 assert.strictEqual(rov.results[0].completed, true);
 assert.strictEqual(rov.results[1].roverStatus.mode, 'LOW_POWER');

})


/*it("responds correctly to status check command",function(){
  
 let commands= [new Command('MODE_CHANGE','LOW_POWER'),new Command('STATUS_CHECK')];
  let ro=new Rover(87382098)
  let mes=new Message('testing commands',commands)
  let rov = ro.receiveMessage(mes);
  
assert.strictEqual(ro.position,87382098)
assert.strictEqual(ro.mode,'normal')  
assert.strictEqual(ro.generatorWatts,110)
  
 });
 //test 11
it("responds correctly to mode change command",function(){
 let commands= [new Command('MODE_CHANGE','LOW_POWER'),new Command('STATUS_CHECK'),new Command('MODE_CHANGE','NORMAL')];
  let ro = new Rover(87382098)
  let mo = new Message('testing commands',commands)
  let rov=ro.receiveMessage(mo).results[0]; 
  assert.strictEqual(rov.results[0].completed,true)
  assert.strictEqual(rov.results[1].roverstatus.mode,'LOW_POWER');
  assert.strictEqual(rov.results[2].completed,true);
  assert.strictEqual(rov.results[1].roverstatus.mode,'NORMAL');
  })
//test 12
  it("responds with false completed value when attempting to move in LOW_POWER mode",function(){
 
 let commands= [new Command('MODE_CHANGE','LOW_POWER'),new Command('STATUS_CHECK')];
  let ro = new Rover(87382098)
  let mo = new Message('testing commands',commands)
   let rov=ro.receiveMessage(mo); 
  assert.strictEqual(rov.commands[0].value,'LOW_POWER')
  });
  //test 13
  it("responds with position for move command"
  ,function(){
     let commands= [new Command('MODE_CHANGE','LOW_POWER'),new Command('STATUS_CHECK'),new Command('MOVE',87665)];
  let ro = new Rover(87665)
  let mo = new Message('testing commands',commands)
   let rov=ro.receiveMessage(mo); 
   assert.strictEqual(rov.commands[3].value,87665)
  })*/
});