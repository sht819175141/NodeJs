var Person=require("./Person")
function Prefer(name,prefer){
    //�̳�person������
    Person.call(this,name);
    this.prefer=prefer;
}
//�̳�person�ķ���
Prefer.prototype=Object.create(Person.prototype)
//����ԭ��ָ���Լ�
Prefer.prototype.constructor=Prefer;
//�����Լ��ķ���
Prefer.prototype.show=function(){
    Person.prototype.show.call(this);
    console.log(",i love "+this.prefer);
}
module.exports=Prefer;