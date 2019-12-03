var Person=require("./Person")
function Prefer(name,prefer){
    //继承person的属性
    Person.call(this,name);
    this.prefer=prefer;
}
//继承person的方法
Prefer.prototype=Object.create(Person.prototype)
//设置原型指向自己
Prefer.prototype.constructor=Prefer;
//设置自己的方法
Prefer.prototype.show=function(){
    Person.prototype.show.call(this);
    console.log(",i love "+this.prefer);
}
module.exports=Prefer;