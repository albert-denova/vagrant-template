var GameFacade = require('../gameFacade.js').GameFacade;

// Tests
module.exports = {
    setUp: function (callback) {          
        callback();
    },
    tearDown: function (callback) {        
        // clean up
        callback();
    },
    createFacade: function(test) {
        test.doesNotThrow(function() {
            var gameFacade = new GameFacade();   
        });
        test.done();   
    },
    registerNewPlayer: function(test) {
        var gameFacade = new GameFacade();
        gameFacade.registerNewPlayer();
        
        var activePlayers = gameFacade.getActivePlayers();
        test.equal(activePlayers, 1);
        test.done();
    },
    deregisterNewPlayer: function(test) {
        var gameFacade = new GameFacade();
        gameFacade.registerNewPlayer();
        gameFacade.registerNewPlayer();
        gameFacade.registerNewPlayer();
        gameFacade.deregisterPlayer();
        
        var activePlayers = gameFacade.getActivePlayers();
        test.equal(activePlayers, 2);
        test.done();
    }
};