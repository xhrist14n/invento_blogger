/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function generate_html(data){
    var html =  '<p>'+
                '<a href="'+data['url']+'">'+
                '<strong>'+
                data['title']+
                '</strong>'+
                '</a>'+
                '</p>'+
                '<span>'+
                data['content']+
                '</span>';
    
    return html;
}


$(
        function () {
            var url = 'https://www.googleapis.com/blogger/v3/blogs/7594995116968158119/blogs?key=AIzaSyBpPpeq0vcSZpD4c2dO8FwwIe6LUpEi4HY';
            $.getJSON(
                    url,
                    function (data) {
                        var one = '';
                        try {
                            one = data['items'][0];
                            html = generate_html(one);
                            $("#our_blog").find('.one').html(html);
                        } catch (ex) {
                        }
                        var two = '';
                        try {
                            two = data['items'][1];
                            html = generate_html(two);
                            $("#our_blog").find('.two').html(html);
                        } catch (ex) {
                        }
                        var three = '';
                        try {
                            three = data['items'][2];
                            html = generate_html(three);
                            $("#our_blog").find('.three').html(html);
                        } catch (ex) {
                        }
                        var four = '';
                        try {
                            four = data['items'][3];
                            html = generate_html(four);
                            $("#our_blog").find('.four').html(html);
                        } catch (ex) {
                        }
                        
                        
                        
                    }
            );
        }
);