/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(
        function () {
            var posts = $("#Blog1").find(".post-body");
            $.each(
                    posts,
                    function (index, item) {
                        var html = $($(this).find(".overlay")).html();
                        html = html.replace("<h2>","<h4 class='padding-recent'>");
                        html = html.replace("</h2>","</h4>");
                        $(this).html($(this).html()+'<div class="service-entry">'+html+'</div>');
                    }
            );
        }
);