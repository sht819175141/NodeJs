function Person(name,prefer){
    this.name=name;
    this.prefer=prefer
}
Person.prototype.show=function(){
    process.stdout.write("i am "+this.name)
    //process.stdout.write����ʹ��ʾ��һ��
}
module.exports=Person;


