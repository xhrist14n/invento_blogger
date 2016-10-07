/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function(){
    console.log("inicio gallery");
    
    var images = $("#our_blog").find(".gallery");
    
    $.each(
        images,
        function(index,item){
            $(this).click(
                function(event){
                    console.log("click image");
                    
                    try{
                        event.preventDefault();
                    }catch(ex){}
                }
            );
        }
    );
    
    console.log("fin gallery");
    
});

