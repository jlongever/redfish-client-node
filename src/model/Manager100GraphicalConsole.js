(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Manager100GraphicalConnectTypesSupported'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Manager100GraphicalConnectTypesSupported'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Manager100GraphicalConnectTypesSupported);
  }
}(this, function(module, ApiClient, Manager100GraphicalConnectTypesSupported) {
  'use strict';

  
  

  /**
   * Used for describing services like Serial Console, Command Shell or Graphical Console
   **/
  var Manager100GraphicalConsole = function Manager100GraphicalConsole() { 
    
    /**
     * This object is used to enumerate the Graphical Console connection types allowed by the implementation.
     * datatype: [Manager100GraphicalConnectTypesSupported]
     **/
    this['ConnectTypesSupported'] = [];
    
    /**
     * Indicates the maximum number of service sessions, regardless of protocol, this manager is able to support.
     * datatype: Number
     * minimum: 0.0
     **/
    this['MaxConcurrentSessions'] = null;
    
    /**
     * Indicates if the service is enabled for this manager.
     * datatype: Boolean
     **/
    this['ServiceEnabled'] = null;
    
  };

  Manager100GraphicalConsole.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['ConnectTypesSupported']) {
      this['ConnectTypesSupported'] = ApiClient.convertToType(data['ConnectTypesSupported'], [Manager100GraphicalConnectTypesSupported]);
    }
    
    if (data['MaxConcurrentSessions']) {
      this['MaxConcurrentSessions'] = ApiClient.convertToType(data['MaxConcurrentSessions'], 'Number');
    }
    
    if (data['ServiceEnabled']) {
      this['ServiceEnabled'] = ApiClient.convertToType(data['ServiceEnabled'], 'Boolean');
    }
    
    return this;
  }

  
  
  /**
   * get This object is used to enumerate the Graphical Console connection types allowed by the implementation.
   * @return {[Manager100GraphicalConnectTypesSupported]}
   **/
  Manager100GraphicalConsole.prototype.getConnectTypesSupported = function() {
    return this['ConnectTypesSupported'];
  }

  /**
   * set This object is used to enumerate the Graphical Console connection types allowed by the implementation.
   * @param {[Manager100GraphicalConnectTypesSupported]} connectTypesSupported
   **/
  Manager100GraphicalConsole.prototype.setConnectTypesSupported = function(connectTypesSupported) {
    this['ConnectTypesSupported'] = connectTypesSupported;
  }
  
  /**
   * get Indicates the maximum number of service sessions, regardless of protocol, this manager is able to support.
   * minimum: 0.0
   * @return {Number}
   **/
  Manager100GraphicalConsole.prototype.getMaxConcurrentSessions = function() {
    return this['MaxConcurrentSessions'];
  }

  /**
   * set Indicates the maximum number of service sessions, regardless of protocol, this manager is able to support.
   * @param {Number} maxConcurrentSessions
   **/
  Manager100GraphicalConsole.prototype.setMaxConcurrentSessions = function(maxConcurrentSessions) {
    this['MaxConcurrentSessions'] = maxConcurrentSessions;
  }
  
  /**
   * get Indicates if the service is enabled for this manager.
   * @return {Boolean}
   **/
  Manager100GraphicalConsole.prototype.getServiceEnabled = function() {
    return this['ServiceEnabled'];
  }

  /**
   * set Indicates if the service is enabled for this manager.
   * @param {Boolean} serviceEnabled
   **/
  Manager100GraphicalConsole.prototype.setServiceEnabled = function(serviceEnabled) {
    this['ServiceEnabled'] = serviceEnabled;
  }
  
  

  Manager100GraphicalConsole.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.Manager100GraphicalConsole = Manager100GraphicalConsole;
  }

  return Manager100GraphicalConsole;
  
  
}));
