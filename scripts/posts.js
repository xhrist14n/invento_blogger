/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(
        function () {
            var url = 'http://layout-pruebas.blogspot.pe/feeds/posts/default/?max-results=4&orderby=published&alt=json';
            $.getJSON(
                    url,
                    function (data) {
                        var one = '';
                        try {
                            one = data['feed']['entry'][0];
                            $("#our_blog").find('.one').html('<p><strong>'+one['title']['$t']+'</strong></p>'+one['content']['$t']);
                        } catch (ex) {
                        }
                        var two = '';
                        try {
                            two = data['feed']['entry'][1];
                            $("#our_blog").find('.two').html('<p><strong>'+two['title']['$t']+'</strong></p>'+two['content']['$t']);
                        } catch (ex) {
                        }
                        var three = '';
                        try {
                            three = data['feed']['entry'][2];
                            $("#our_blog").find('.three').html('<p><strong>'+three['title']['$t']+'</strong></p>'+three['content']['$t']);
                        } catch (ex) {
                        }
                        var four = '';
                        try {
                            four = data['feed']['entry'][3];
                            $("#our_blog").find('.four').html('<p><strong>'+four['title']['$t']+'</strong></p>'+four['content']['$t']);
                        } catch (ex) {
                        }
                        
                        
                        
                    }
            );
        }
);