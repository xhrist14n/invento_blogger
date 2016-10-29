/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function hide_all(){
    try{
        $("#navbar-iframe").css("display","none");
    }catch(ex){}
    try{
        $("#footer1").css("display","none");
    }catch(ex){}
    if(hide_popular==true){
        try{
            $("#PopularPosts2 h2").css("display","none");
        }catch(ex){}
    }
    try{
        $(".widget-content").css("display","none");
    }catch(ex){}
    try{
        $(".widget-item-control").css("display","none");
    }catch(ex){}
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