var username = null;


Selenium.prototype.doGetUsername = function(locator) {
    /**
    * Sets the value of an input field to a random email id, 
    * as though you typed it in.
    *
    * @param locator an <a href="#locators">element locator</a>
    */


 
    // All locator-strategies are automatically handled by "findElement"
    var element = this.page().findElement(locator);
 
    // if username exists, return it.
    if (username) {
        this.browserbot.replaceText(element, username);
    } else {

        /* The following block generates a random email string */
        var allowedChars = "abcdefghiklmnopqrstuvwxyz";
        var stringLength = 8;
        var randomstring = '';
     
        for (var i=0; i<stringLength; i++) {
            var rnum = Math.floor(Math.random() * allowedChars.length);
            randomstring += allowedChars.substring(rnum,rnum+1);
        }
     
        // Append a domain name
        randomstring += "@somedomain.com"
        username = randomstring;
     
        // Replace the element text with the new text
        this.browserbot.replaceText(element, username);
    }
};