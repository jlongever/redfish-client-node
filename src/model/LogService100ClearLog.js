(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient);
  }
}(this, function(module, ApiClient) {
  'use strict';

  
  

  
  var LogService100ClearLog = function LogService100ClearLog() { 
    
    /**
     * Link to invoke action
     * datatype: String
     **/
    this['target'] = null;
    
    /**
     * Friendly action name
     * datatype: String
     **/
    this['title'] = null;
    
  };

  LogService100ClearLog.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['target']) {
      this['target'] = ApiClient.convertToType(data['target'], 'String');
    }
    
    if (data['title']) {
      this['title'] = ApiClient.convertToType(data['title'], 'String');
    }
    
    return this;
  }

  
  
  /**
   * get Link to invoke action
   * @return {String}
   **/
  LogService100ClearLog.prototype.getTarget = function() {
    return this['target'];
  }

  /**
   * set Link to invoke action
   * @param {String} target
   **/
  LogService100ClearLog.prototype.setTarget = function(target) {
    this['target'] = target;
  }
  
  /**
   * get Friendly action name
   * @return {String}
   **/
  LogService100ClearLog.prototype.getTitle = function() {
    return this['title'];
  }

  /**
   * set Friendly action name
   * @param {String} title
   **/
  LogService100ClearLog.prototype.setTitle = function(title) {
    this['title'] = title;
  }
  
  

  LogService100ClearLog.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.LogService100ClearLog = LogService100ClearLog;
  }

  return LogService100ClearLog;
  
  
}));
