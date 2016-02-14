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
   * This object describes the central processors of the system in general detail.
   **/
  var ComputerSystem100ProcessorSummary = function ComputerSystem100ProcessorSummary() { 
    
    /**
     * datatype: ResourceStatus
     **/
    this['Status'] = new ResourceStatus();
    
  };

  ComputerSystem100ProcessorSummary.prototype.constructFromObject = function(data) {
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
  ComputerSystem100ProcessorSummary.prototype.getStatus = function() {
    return this['Status'];
  }

  /**
   * @param {ResourceStatus} status
   **/
  ComputerSystem100ProcessorSummary.prototype.setStatus = function(status) {
    this['Status'] = status;
  }
  
  

  ComputerSystem100ProcessorSummary.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.ComputerSystem100ProcessorSummary = ComputerSystem100ProcessorSummary;
  }

  return ComputerSystem100ProcessorSummary;
  
  
}));
