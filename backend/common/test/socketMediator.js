var SocketMediator = require('../socketMediator.js').SocketMediator;
var GameFacade = require('../gameFacade.js').GameFacade;    
var SocketMock = require('socket-io-mock');

// Tests
module.exports = {
    setUp: function (callback) {   
        this.socketServer = new SocketMock();
        this.socketClient = this.socketServer.socketClient;
        
        this.gameFacade = new GameFacade();        
        callback();
    },
    tearDown: function (callback) {        
        // clean up
        callback();
    },
    creationWithoutParams: function (test) {
        test.throws(function() {
            var socketMediator = new SocketMediator();               
        });
        test.done();   
    },
    creationWithParams: function (test) {
        var self = this;
        test.doesNotThrow(function() {
            var socketMediator = new SocketMediator(self.gameFacade, self.socketServer);               
            
        });
        
        test.equal(self.gameFacade.getActivePlayers(), 1);
        test.done();          
    },
    onUserDisconnected: function (test) {
        var socketMediator = new SocketMediator(this.gameFacade, this.socketServer);
                
        this.socketClient.emit('disconnect',{});
        
        var activePlayers = this.gameFacade.getActivePlayers();
        test.equal(activePlayers, 0);
        test.done();
    }
};