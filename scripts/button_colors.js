/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function(){
    setInterval(
        function(){
            var links = $(".btn");    
            $.each(links,function(){
                $(this).mouseout(
                        function(){
                            $(this).css("color","#ffffff");
                        }
                );
                $(this).mouseover(
                        function(){
                            $(this).css("color","#ffffff");
                        }
                );
            });
        },1000
    );
    
    
});

