(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ResourceStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ResourceStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.ResourceStatus);
  }
}(this, function(module, ApiClient, ResourceStatus) {
  'use strict';

  
  

  /**
   * This object describes the memory of the system in general detail.
   **/
  var ComputerSystem100MemorySummary = function ComputerSystem100MemorySummary() { 
    
    /**
     * datatype: ResourceStatus
     **/
    this['Status'] = new ResourceStatus();
    
  };

  ComputerSystem100MemorySummary.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['Status']) {
      this['Status'].constructFromObject(data['Status']);
    }
    
    return this;
  }

  
  
  /**
   * @return {ResourceStatus}
   **/
  ComputerSystem100MemorySummary.prototype.getStatus = function() {
    return this['Status'];
  }

  /**
   * @param {ResourceStatus} status
   **/
  ComputerSystem100MemorySummary.prototype.setStatus = function(status) {
    this['Status'] = status;
  }
  
  

  ComputerSystem100MemorySummary.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.ComputerSystem100MemorySummary = ComputerSystem100MemorySummary;
  }

  return ComputerSystem100MemorySummary;
  
  
}));
