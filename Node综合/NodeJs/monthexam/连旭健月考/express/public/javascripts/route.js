/**
 * Created by Administrator on 2016/12/22.
 */
$('.btn').click(function(){
    var data={
        name:'lianxujian',
        age:23,
        sex:'man',
        hobby:'study'
    }
    //¿çÓòÇëÇó8081¶Ë¿Ú
    $.ajax({
        url:'http://localhost:8081/page',
        data:data,
        dataType:'jsonp',
        success:function(data){
            console.log(data)
            if(data.callback){
                var datas=JSON.stringify(data);
                $('p').html('<b>request success,data is:</b>'+datas)
            }else{
                $('p').html('<b>request error</b>');
            }
        }
    })
})