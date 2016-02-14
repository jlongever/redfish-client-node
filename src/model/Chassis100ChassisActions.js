(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Chassis100Reset'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Chassis100Reset'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Chassis100Reset);
  }
}(this, function(module, ApiClient, Chassis100Reset) {
  'use strict';

  
  

  /**
   * The Actions object contains the available custom actions on this resource.
   **/
  var Chassis100ChassisActions = function Chassis100ChassisActions() { 
    
    /**
     * datatype: Object
     **/
    this['Oem'] = null;
    
    /**
     * datatype: Chassis100Reset
     **/
    this['#Chassis.Reset'] = new Chassis100Reset();
    
  };

  Chassis100ChassisActions.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['Oem']) {
      this['Oem'] = ApiClient.convertToType(data['Oem'], Object);
    }
    
    if (data['#Chassis.Reset']) {
      this['#Chassis.Reset'].constructFromObject(data['#Chassis.Reset']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Object}
   **/
  Chassis100ChassisActions.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * @param {Object} oem
   **/
  Chassis100ChassisActions.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * @return {Chassis100Reset}
   **/
  Chassis100ChassisActions.prototype.getChassisReset = function() {
    return this['#Chassis.Reset'];
  }

  /**
   * @param {Chassis100Reset} chassisReset
   **/
  Chassis100ChassisActions.prototype.setChassisReset = function(chassisReset) {
    this['#Chassis.Reset'] = chassisReset;
  }
  
  

  Chassis100ChassisActions.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.Chassis100ChassisActions = Chassis100ChassisActions;
  }

  return Chassis100ChassisActions;
  
  
}));
