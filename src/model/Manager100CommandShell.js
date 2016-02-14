(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Manager100CommandConnectTypesSupported'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Manager100CommandConnectTypesSupported'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Manager100CommandConnectTypesSupported);
  }
}(this, function(module, ApiClient, Manager100CommandConnectTypesSupported) {
  'use strict';

  
  

  /**
   * Used for describing services like Serial Console, Command Shell or Graphical Console
   **/
  var Manager100CommandShell = function Manager100CommandShell() { 
    
    /**
     * This object is used to enumerate the Command Shell connection types allowed by the implementation.
     * datatype: [Manager100CommandConnectTypesSupported]
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

  Manager100CommandShell.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['ConnectTypesSupported']) {
      this['ConnectTypesSupported'] = ApiClient.convertToType(data['ConnectTypesSupported'], [Manager100CommandConnectTypesSupported]);
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
   * get This object is used to enumerate the Command Shell connection types allowed by the implementation.
   * @return {[Manager100CommandConnectTypesSupported]}
   **/
  Manager100CommandShell.prototype.getConnectTypesSupported = function() {
    return this['ConnectTypesSupported'];
  }

  /**
   * set This object is used to enumerate the Command Shell connection types allowed by the implementation.
   * @param {[Manager100CommandConnectTypesSupported]} connectTypesSupported
   **/
  Manager100CommandShell.prototype.setConnectTypesSupported = function(connectTypesSupported) {
    this['ConnectTypesSupported'] = connectTypesSupported;
  }
  
  /**
   * get Indicates the maximum number of service sessions, regardless of protocol, this manager is able to support.
   * minimum: 0.0
   * @return {Number}
   **/
  Manager100CommandShell.prototype.getMaxConcurrentSessions = function() {
    return this['MaxConcurrentSessions'];
  }

  /**
   * set Indicates the maximum number of service sessions, regardless of protocol, this manager is able to support.
   * @param {Number} maxConcurrentSessions
   **/
  Manager100CommandShell.prototype.setMaxConcurrentSessions = function(maxConcurrentSessions) {
    this['MaxConcurrentSessions'] = maxConcurrentSessions;
  }
  
  /**
   * get Indicates if the service is enabled for this manager.
   * @return {Boolean}
   **/
  Manager100CommandShell.prototype.getServiceEnabled = function() {
    return this['ServiceEnabled'];
  }

  /**
   * set Indicates if the service is enabled for this manager.
   * @param {Boolean} serviceEnabled
   **/
  Manager100CommandShell.prototype.setServiceEnabled = function(serviceEnabled) {
    this['ServiceEnabled'] = serviceEnabled;
  }
  
  

  Manager100CommandShell.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.Manager100CommandShell = Manager100CommandShell;
  }

  return Manager100CommandShell;
  
  
}));
