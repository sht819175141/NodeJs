//3����׼�����������������״̬����������˳����̣�emit��
process.stdout.write("out\n");
process.stderr.write("err\n");
process.stdin.on("data",function(data){
    console.log(data.toString());
    //�˳��������
    process.stdin.emit("end");
})
//�������������˳���
process.stdin.on("end",function(){
    console.log("stdin end finished")
});