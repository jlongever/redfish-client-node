(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Power100PowerLimitException'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Power100PowerLimitException'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Power100PowerLimitException);
  }
}(this, function(module, ApiClient, Power100PowerLimitException) {
  'use strict';

  
  

  /**
   * This object contains power limit status and configuration information for the chassis.
   **/
  var Power100PowerLimit = function Power100PowerLimit() { 
    
    /**
     * The action that is taken if the power cannot be maintained below the LimitInWatts.
     * datatype: Power100PowerLimitException
     **/
    this['LimitException'] = new Power100PowerLimitException();
    
  };

  Power100PowerLimit.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['LimitException']) {
      this['LimitException'].constructFromObject(data['LimitException']);
    }
    
    return this;
  }

  
  
  /**
   * get The action that is taken if the power cannot be maintained below the LimitInWatts.
   * @return {Power100PowerLimitException}
   **/
  Power100PowerLimit.prototype.getLimitException = function() {
    return this['LimitException'];
  }

  /**
   * set The action that is taken if the power cannot be maintained below the LimitInWatts.
   * @param {Power100PowerLimitException} limitException
   **/
  Power100PowerLimit.prototype.setLimitException = function(limitException) {
    this['LimitException'] = limitException;
  }
  
  

  Power100PowerLimit.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.Power100PowerLimit = Power100PowerLimit;
  }

  return Power100PowerLimit;
  
  
}));
