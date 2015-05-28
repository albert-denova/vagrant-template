exports.GameFacade = function() {
    var mRegisteredPlayers = 0;
    
    this.registerNewPlayer = function() {
        ++mRegisteredPlayers;
    };
    
    this.deregisterPlayer = function() {
        --mRegisteredPlayers;  
    };
    
    this.getActivePlayers = function() {
        return mRegisteredPlayers;  
    };
};