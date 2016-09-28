/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(
    function(){
        var url = '/feeds/posts/default/?max-results='+numposts1+'&orderby=published&alt=json-in-script&callback=blogpost';
        console.log(url);
        $.get(
            url,
            function(data){
                var html='<script>';
                html+=data;
                html+='</script>';
                $("#our_blog").html(html);
            }
        );
    }
);