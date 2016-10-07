/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function(){
    console.log("inicio gallery");
    
    $("#normalizer").css("display","none");
    
    var images = $("#our_blog").find(".gallery");
    
    $.each(
        images,
        function(index,item){
            $(this).click(
                function(event){
                    console.log("click image");
                    
                    var image = $(this).find(".modalize");
                    
                    var src = $(image).attr("src");
                    
                    $("#modalizer").css("display","");
                    
                    $("#modalizer").find(".modal-content").attr("src",src);
                    
                    $(this).animatedModal({
                        modalTarget:'modalizer',
                        animatedIn:'lightSpeedIn',
                        animatedOut:'bounceOutDown',
                        color:'#3498db',
                        // Callbacks
                        beforeOpen: function() {
                            $("#modalizer").css("display","");
                        },           
                        afterOpen: function() {
                            console.log("The animation is completed");
                        }, 
                        beforeClose: function() {
                            console.log("The animation was called");
                        }, 
                        afterClose: function() {
                            $("#modalizer").css("display","none");
                        }
                    });
                    
                    try{
                        event.preventDefault();
                    }catch(ex){}
                }
            );
        }
    );
    
    console.log("fin gallery");
    
});

