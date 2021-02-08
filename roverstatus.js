

class Roverstatus{
  constructor(completed,position,mode='normal',generatorWatts=110)
  {
    this.completed=completed;
    this.position=position;
    this.mode=mode;
    this.generatorWatts=generatorWatts;
  }
}
module.exports=Roverstatus;