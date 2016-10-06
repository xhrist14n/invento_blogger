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
                        console.log("texto :"+$(this).html());
                        $($(this).find(".overlay")).css("margin-top", "200px");
                    }
            );
        }
);