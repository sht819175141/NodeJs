/**
 * Created by Nan on 2016/11/12.
 */
$(document).ready(function () {
    var $menu = $('#menu');
    $menu.find("li").on('click', function () {
        var $index = $(this).index();
        alert($index);
    })

});
