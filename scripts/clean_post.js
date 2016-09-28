/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function hide_all(){
    $("#navbar-iframe").css("display","none");
    $("#footer1").css("display","none");
    $("#PopularPosts2 h2").css("display","none");
}

$(
    function(){
        setInterval(
            function(){
                hide_all();
            },3000
        );
        hide_all();
    }        
);