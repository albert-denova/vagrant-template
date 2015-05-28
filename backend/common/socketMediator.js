exports.SocketMediator = function(gameFacade, socket) {    
    var mGameFacade = null;
    var mSocket = null;
    var mSelf = this;
    
    socket.on('disconnect', function(){        
        mGameFacade.deregisterPlayer();
    });
    
    // Constructor
    (function() {
        if((socket == undefined)) {
            throw new Error('You need to specify a Socket.IO instance');
        }
        
        mSocket = socket;        
        mGameFacade = gameFacade;
        mGameFacade.registerNewPlayer();
    })();
};