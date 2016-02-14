(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ResourceResetType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ResourceResetType'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.ResourceResetType);
  }
}(this, function(module, ApiClient, ResourceResetType) {
  'use strict';

  
  

  
  var RackHDResetAction = function RackHDResetAction() { 
    
    /**
     * datatype: ResourceResetType
     **/
    this['reset_type'] = new ResourceResetType();
    
  };

  RackHDResetAction.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['reset_type']) {
      this['reset_type'].constructFromObject(data['reset_type']);
    }
    
    return this;
  }

  
  
  /**
   * @return {ResourceResetType}
   **/
  RackHDResetAction.prototype.getResetType = function() {
    return this['reset_type'];
  }

  /**
   * @param {ResourceResetType} resetType
   **/
  RackHDResetAction.prototype.setResetType = function(resetType) {
    this['reset_type'] = resetType;
  }
  
  

  RackHDResetAction.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.RackHDResetAction = RackHDResetAction;
  }

  return RackHDResetAction;
  
  
}));
