/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(
        function () {
            var wrap = $(".recent-work").find(".overlay .img-wrap");
            $.each(
                    wrap,
                    function (index, item) {
                        $(this).css("margin-top", "200px");
                    }
            );
        }
);