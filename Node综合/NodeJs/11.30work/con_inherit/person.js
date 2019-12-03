function Person(name,prefer){
    this.name=name;
    this.prefer=prefer
}
Person.prototype.show=function(){
    process.stdout.write("i am "+this.name)
    //process.stdout.write可以使显示在一行
}
module.exports=Person;


