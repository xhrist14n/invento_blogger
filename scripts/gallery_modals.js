/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function(){
    console.log("inicio gallery");
    
    $("#normalizer").css("display","none");
    
    var images = $($("#our_blog").find(".gallery")).find(".modalize");
    
    $.each(
        images,
        function(index,item){
            $(this).click(
                function(event){
                    console.log("click image");
                    
                    //var image = $(this).find(".modalize");
                    
                    var src = $(this).attr("src");
                    
                    $("#modalizer").css("display","");
                    
                    $("#modalizer").find(".modal-content").attr("src",src);
                    
                    $("#modalizer").find(".modal-content").css("width","100%");
                    
                    $("#modalizer").find(".modal-content").css("height","100%");
                    
                    $('#modalizer').modal('show');
                    
                }    
            );
        }
    );
    
    console.log("fin gallery");
    
});

