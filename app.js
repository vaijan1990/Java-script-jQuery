/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//gets newobject (prototype) so no need to use 'new' keyword
var g = G$('Vaisshnavi','Janani');
//usin chainable methods
g.greet().setLang('es').greet(true);

//on click of login button using object
$('#login').click(function(){
    
    var loginGrtr = G$('Vaisshnavi', 'Jannai');
    //hide the login on the screen
    $('#logindiv').hide();
    //fire off HTML greeting, passing #greeting as selector and chosen language. Also log the messages as well(chainable methods)
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
    
});
