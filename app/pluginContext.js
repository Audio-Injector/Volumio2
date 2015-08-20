/**
 * Created by massi on 18/08/15.
 */

var HashMap = require('hashmap');

module.exports = PluginContext;
function PluginContext (ccommand, server) {
    var self = this;

    self.coreCommand = ccommand;
    self.websocketServer = server;

    self.env = new HashMap();

    //TODO: add environment variables here
}

PluginContext.prototype.getEnvVariable=function(key)
{
    var self=this;

    return self.env.get(key);
}