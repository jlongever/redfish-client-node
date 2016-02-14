(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ComputerSystem100Reset'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ComputerSystem100Reset'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.ComputerSystem100Reset);
  }
}(this, function(module, ApiClient, ComputerSystem100Reset) {
  'use strict';

  
  

  /**
   * The Actions object contains the available custom actions on this resource.
   **/
  var ComputerSystem100ComputerSystemActions = function ComputerSystem100ComputerSystemActions() { 
    
    /**
     * datatype: Object
     **/
    this['Oem'] = null;
    
    /**
     * datatype: ComputerSystem100Reset
     **/
    this['#ComputerSystem.Reset'] = new ComputerSystem100Reset();
    
  };

  ComputerSystem100ComputerSystemActions.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['Oem']) {
      this['Oem'] = ApiClient.convertToType(data['Oem'], Object);
    }
    
    if (data['#ComputerSystem.Reset']) {
      this['#ComputerSystem.Reset'].constructFromObject(data['#ComputerSystem.Reset']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Object}
   **/
  ComputerSystem100ComputerSystemActions.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * @param {Object} oem
   **/
  ComputerSystem100ComputerSystemActions.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * @return {ComputerSystem100Reset}
   **/
  ComputerSystem100ComputerSystemActions.prototype.getComputerSystemReset = function() {
    return this['#ComputerSystem.Reset'];
  }

  /**
   * @param {ComputerSystem100Reset} computerSystemReset
   **/
  ComputerSystem100ComputerSystemActions.prototype.setComputerSystemReset = function(computerSystemReset) {
    this['#ComputerSystem.Reset'] = computerSystemReset;
  }
  
  

  ComputerSystem100ComputerSystemActions.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.ComputerSystem100ComputerSystemActions = ComputerSystem100ComputerSystemActions;
  }

  return ComputerSystem100ComputerSystemActions;
  
  
}));
