/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var domain='';

function get_domain(){
    var location = window.location;
    var r = /:\/\/(.[^/]+)/;
    return location.match(r)[1];
}

$(
    function(){
        if(domain===''){
            domain = get_domain();
        }       
        console.log("domain: "+domain);
    }
    
);