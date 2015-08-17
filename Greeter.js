/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(global, $){
    
    // 'new' an object
    var Greeter = function(firstName, lastName, language) {
        return new Greeter.init(firstName, lastName, language);
    }
    
    
    var supportedLangs = ['en','es'];
    
    //formal greetingd
    greetings = {
        en: 'hi',
        es: 'hola'
    };
    //informal greetings
    formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };    
    //logger messages    
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio Sesion'
    };
    //prototype holds methods to save memory
    Greeter.prototype = {
        //'this' refers to calling obj at execution time
        fullName: function() {
            return this.firstName+' '+this.lastName;
        },
        //checks if it is a valid languge
        validate: function() {
            if(supportedLangs.indexOf(this.language)=== -1) {
                throw "Invalid language";
            }
        },
        //informal greetings
        greeting: function() {
            return greetings[this.language]+' ' +this.firstName+'!';
        },
        //formal greetings
        formalGreeting: function() {
            //retrives messages from objects by refering to properties using []
            return formalGreetings[this.language]+','+ this.fullName();
        },
        //chainable method returns their own containing object
        greet: function(formal) {
            var msg;
            //if undefined or null it wil be coerced to false
            if(formal){
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            if (console){
                console.log(msg);
            }
            return this;
        },
        log: function(){
            if(console) {
                console.log(logMessages[this.language] + ':'+ this.fullName());
            }
            return this;
        },
            setLang: function(lang) {
                this.language = lang;
                this.validate();
                //makes chainable
                return this;
            
        },
        HTMLGreeting: function(selector, formal){
            //checks for jQuery
            if(!$) {
                throw 'jQuery not loaded';
            }
            if(!selector) {
                throw 'Missing jQuery selector';
            }
            //determine message
            var msg;
            if(formal){
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            //inject message to chosen place in DOM
            $(selector).html(msg)
            //makes chainable
            return this;
        }
    };    
    
    //actual object created here
    Greeter.init = function(firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
        self.validate();
        
    }
    //prototype inheritance so that we do not use 'new' keyword
     Greeter.init.prototype = Greeter.prototype;
     //attaching Greeter to global obj and providig shorthand G$
     global.Greeter = global.G$ = Greeter;
     
}(window, jQuery));