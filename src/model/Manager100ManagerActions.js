(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Manager100ForceFailover', './Manager100ModifyRedundancySet', './Manager100Reset'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Manager100ForceFailover'), require('./Manager100ModifyRedundancySet'), require('./Manager100Reset'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Manager100ForceFailover, root.RedfishV100.Manager100ModifyRedundancySet, root.RedfishV100.Manager100Reset);
  }
}(this, function(module, ApiClient, Manager100ForceFailover, Manager100ModifyRedundancySet, Manager100Reset) {
  'use strict';

  
  

  /**
   * The Actions object contains the available custom actions on this resource.
   **/
  var Manager100ManagerActions = function Manager100ManagerActions() { 
    
    /**
     * datatype: Manager100ModifyRedundancySet
     **/
    this['#Manager.ModifyRedundancySet'] = new Manager100ModifyRedundancySet();
    
    /**
     * datatype: Manager100Reset
     **/
    this['#Manager.Reset'] = new Manager100Reset();
    
    /**
     * datatype: Object
     **/
    this['Oem'] = null;
    
    /**
     * datatype: Manager100ForceFailover
     **/
    this['#Manager.ForceFailover'] = new Manager100ForceFailover();
    
  };

  Manager100ManagerActions.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['#Manager.ModifyRedundancySet']) {
      this['#Manager.ModifyRedundancySet'].constructFromObject(data['#Manager.ModifyRedundancySet']);
    }
    
    if (data['#Manager.Reset']) {
      this['#Manager.Reset'].constructFromObject(data['#Manager.Reset']);
    }
    
    if (data['Oem']) {
      this['Oem'] = ApiClient.convertToType(data['Oem'], Object);
    }
    
    if (data['#Manager.ForceFailover']) {
      this['#Manager.ForceFailover'].constructFromObject(data['#Manager.ForceFailover']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Manager100ModifyRedundancySet}
   **/
  Manager100ManagerActions.prototype.getManagerModifyRedundancySet = function() {
    return this['#Manager.ModifyRedundancySet'];
  }

  /**
   * @param {Manager100ModifyRedundancySet} managerModifyRedundancySet
   **/
  Manager100ManagerActions.prototype.setManagerModifyRedundancySet = function(managerModifyRedundancySet) {
    this['#Manager.ModifyRedundancySet'] = managerModifyRedundancySet;
  }
  
  /**
   * @return {Manager100Reset}
   **/
  Manager100ManagerActions.prototype.getManagerReset = function() {
    return this['#Manager.Reset'];
  }

  /**
   * @param {Manager100Reset} managerReset
   **/
  Manager100ManagerActions.prototype.setManagerReset = function(managerReset) {
    this['#Manager.Reset'] = managerReset;
  }
  
  /**
   * @return {Object}
   **/
  Manager100ManagerActions.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * @param {Object} oem
   **/
  Manager100ManagerActions.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * @return {Manager100ForceFailover}
   **/
  Manager100ManagerActions.prototype.getManagerForceFailover = function() {
    return this['#Manager.ForceFailover'];
  }

  /**
   * @param {Manager100ForceFailover} managerForceFailover
   **/
  Manager100ManagerActions.prototype.setManagerForceFailover = function(managerForceFailover) {
    this['#Manager.ForceFailover'] = managerForceFailover;
  }
  
  

  Manager100ManagerActions.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.Manager100ManagerActions = Manager100ManagerActions;
  }

  return Manager100ManagerActions;
  
  
}));
