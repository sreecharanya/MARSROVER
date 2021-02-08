const assert = require('assert');
const Message=require('../message.js');
const Command=require('../command.js');


describe("Message class", function() {

it("throws error if a name is NOT passed into the constructor as the first parameter",function(){
  assert.throws(
    function(){
    new Message();
  },
  {
     message: 'Name required'
  }
  );
});
it("constructor sets name",function(){
let Mes = new Message('you are moving')
assert.strictEqual(Mes.name,'you are moving')
});
it( "contains a commands array passed into the constructor as 2nd argument",function(){
  let commands=[];
commands.push(new Command('Move right'));
commands.push(new Command('Move left'));
commands.push(new Command('Go straight'));
  let arr = new Message('you are moving',commands)
  assert.strictEqual(arr.commands[0].commandType,'Move right');
  assert.strictEqual(arr.commands[1].commandType,'Move left');
  assert.strictEqual(arr.commands[2].commandType,'Go straight');

});

});