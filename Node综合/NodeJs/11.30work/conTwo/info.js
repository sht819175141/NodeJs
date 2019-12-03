function Personinfo(name,prefer){
    this.name=name;
    this.prefer=prefer
}
Personinfo.prototype.show=function(){
    console.log("i am "+this.name+",i love "+this.prefer)
}
module.exports=Personinfo;
//module.exports.Personinfo=Personinfo;
//exports.Personinfo=Personinfo;