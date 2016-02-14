(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Manager100SerialConnectTypesSupported'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Manager100SerialConnectTypesSupported'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Manager100SerialConnectTypesSupported);
  }
}(this, function(module, ApiClient, Manager100SerialConnectTypesSupported) {
  'use strict';

  
  

  /**
   * Used for describing services like Serial Console, Command Shell or Graphical Console
   **/
  var Manager100SerialConsole = function Manager100SerialConsole() { 
    
    /**
     * This object is used to enumerate the Serial Console connection types allowed by the implementation.
     * datatype: [Manager100SerialConnectTypesSupported]
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

  Manager100SerialConsole.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['ConnectTypesSupported']) {
      this['ConnectTypesSupported'] = ApiClient.convertToType(data['ConnectTypesSupported'], [Manager100SerialConnectTypesSupported]);
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
   * get This object is used to enumerate the Serial Console connection types allowed by the implementation.
   * @return {[Manager100SerialConnectTypesSupported]}
   **/
  Manager100SerialConsole.prototype.getConnectTypesSupported = function() {
    return this['ConnectTypesSupported'];
  }

  /**
   * set This object is used to enumerate the Serial Console connection types allowed by the implementation.
   * @param {[Manager100SerialConnectTypesSupported]} connectTypesSupported
   **/
  Manager100SerialConsole.prototype.setConnectTypesSupported = function(connectTypesSupported) {
    this['ConnectTypesSupported'] = connectTypesSupported;
  }
  
  /**
   * get Indicates the maximum number of service sessions, regardless of protocol, this manager is able to support.
   * minimum: 0.0
   * @return {Number}
   **/
  Manager100SerialConsole.prototype.getMaxConcurrentSessions = function() {
    return this['MaxConcurrentSessions'];
  }

  /**
   * set Indicates the maximum number of service sessions, regardless of protocol, this manager is able to support.
   * @param {Number} maxConcurrentSessions
   **/
  Manager100SerialConsole.prototype.setMaxConcurrentSessions = function(maxConcurrentSessions) {
    this['MaxConcurrentSessions'] = maxConcurrentSessions;
  }
  
  /**
   * get Indicates if the service is enabled for this manager.
   * @return {Boolean}
   **/
  Manager100SerialConsole.prototype.getServiceEnabled = function() {
    return this['ServiceEnabled'];
  }

  /**
   * set Indicates if the service is enabled for this manager.
   * @param {Boolean} serviceEnabled
   **/
  Manager100SerialConsole.prototype.setServiceEnabled = function(serviceEnabled) {
    this['ServiceEnabled'] = serviceEnabled;
  }
  
  

  Manager100SerialConsole.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.Manager100SerialConsole = Manager100SerialConsole;
  }

  return Manager100SerialConsole;
  
  
}));
