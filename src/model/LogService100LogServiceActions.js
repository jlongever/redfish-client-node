(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './LogService100ClearLog'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./LogService100ClearLog'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.LogService100ClearLog);
  }
}(this, function(module, ApiClient, LogService100ClearLog) {
  'use strict';

  
  

  /**
   * The Actions object contains the available custom actions on this resource.
   **/
  var LogService100LogServiceActions = function LogService100LogServiceActions() { 
    
    /**
     * datatype: LogService100ClearLog
     **/
    this['#LogService.ClearLog'] = new LogService100ClearLog();
    
    /**
     * datatype: Object
     **/
    this['Oem'] = null;
    
  };

  LogService100LogServiceActions.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['#LogService.ClearLog']) {
      this['#LogService.ClearLog'].constructFromObject(data['#LogService.ClearLog']);
    }
    
    if (data['Oem']) {
      this['Oem'] = ApiClient.convertToType(data['Oem'], Object);
    }
    
    return this;
  }

  
  
  /**
   * @return {LogService100ClearLog}
   **/
  LogService100LogServiceActions.prototype.getLogServiceClearLog = function() {
    return this['#LogService.ClearLog'];
  }

  /**
   * @param {LogService100ClearLog} logServiceClearLog
   **/
  LogService100LogServiceActions.prototype.setLogServiceClearLog = function(logServiceClearLog) {
    this['#LogService.ClearLog'] = logServiceClearLog;
  }
  
  /**
   * @return {Object}
   **/
  LogService100LogServiceActions.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * @param {Object} oem
   **/
  LogService100LogServiceActions.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  

  LogService100LogServiceActions.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.LogService100LogServiceActions = LogService100LogServiceActions;
  }

  return LogService100LogServiceActions;
  
  
}));
