const Message=require('./message.js')
const Command=require('./command.js')

class Rover{
  constructor(position,mode='NORMAL',generatorWatts=110)
  {
  this.position=position;
  this.mode=mode;
  this.generatorWatts=generatorWatts;  
  };

receiveMessage=function(message)
{ 
  
 let name=message.name;
  let response={
    message:name,
       results:[]  
  } ;
    if(typeof message==='object')
    {
      
  for(let i=0;i<message.commands.length;i++)
  {   
  if(message.commands[i].commandType==='STATUS_CHECK') 
  {
  response.results.push({completed:true,roverstatus:{position:this.position,mode:this.mode,generatorWatts:this.generatorWatts}});
  //console.log("response",response.results)
    } else if(message.commands[i].commandType==='MOVE')
     {
       this.position=messge.commands[i].value;
  response.results.push({completed:true});
  }else if(message.commands[i].commandType==='MODE_CHANGE')
  {
    this.mode=message.commands[i].value;
 response.results.push({completed:true});
  }else if(message.commands[i].commandType==='MOVE')
{
    if(this.mode === 'NORMAL'){
      this.position=message.commands[i].value;
      response.results.push({position: message.commands[i].value,
        completed:true});
    }else
         {
  response.results.push({position:this.position,
  completed: false});
  }
  }
  else {
    response.results.push({
      position:'Unknown command',
      completed: false});
  }
  }
return response;
}
}
}
module.exports = Rover;

    
let rover = new Rover(98382); 
let response = rover.receiveMessage('');
//console.log(response);
//console.log(rover);
module.exports = Rover;