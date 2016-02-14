(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ComputerSystem100BootSource', './ComputerSystem100BootSourceOverrideEnabled'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ComputerSystem100BootSource'), require('./ComputerSystem100BootSourceOverrideEnabled'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.ComputerSystem100BootSource, root.RedfishV100.ComputerSystem100BootSourceOverrideEnabled);
  }
}(this, function(module, ApiClient, ComputerSystem100BootSource, ComputerSystem100BootSourceOverrideEnabled) {
  'use strict';

  
  

  /**
   * This object contains the boot information for the current resource.
   **/
  var ComputerSystem100Boot = function ComputerSystem100Boot() { 
    
    /**
     * Describes the state of the Boot Source Override feature
     * datatype: ComputerSystem100BootSourceOverrideEnabled
     **/
    this['BootSourceOverrideEnabled'] = new ComputerSystem100BootSourceOverrideEnabled();
    
    /**
     * The current boot source to be used at next boot instead of the normal boot device, if BootSourceOverrideEnabled is true.
     * datatype: ComputerSystem100BootSource
     **/
    this['BootSourceOverrideTarget'] = new ComputerSystem100BootSource();
    
  };

  ComputerSystem100Boot.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['BootSourceOverrideEnabled']) {
      this['BootSourceOverrideEnabled'].constructFromObject(data['BootSourceOverrideEnabled']);
    }
    
    if (data['BootSourceOverrideTarget']) {
      this['BootSourceOverrideTarget'].constructFromObject(data['BootSourceOverrideTarget']);
    }
    
    return this;
  }

  
  
  /**
   * get Describes the state of the Boot Source Override feature
   * @return {ComputerSystem100BootSourceOverrideEnabled}
   **/
  ComputerSystem100Boot.prototype.getBootSourceOverrideEnabled = function() {
    return this['BootSourceOverrideEnabled'];
  }

  /**
   * set Describes the state of the Boot Source Override feature
   * @param {ComputerSystem100BootSourceOverrideEnabled} bootSourceOverrideEnabled
   **/
  ComputerSystem100Boot.prototype.setBootSourceOverrideEnabled = function(bootSourceOverrideEnabled) {
    this['BootSourceOverrideEnabled'] = bootSourceOverrideEnabled;
  }
  
  /**
   * get The current boot source to be used at next boot instead of the normal boot device, if BootSourceOverrideEnabled is true.
   * @return {ComputerSystem100BootSource}
   **/
  ComputerSystem100Boot.prototype.getBootSourceOverrideTarget = function() {
    return this['BootSourceOverrideTarget'];
  }

  /**
   * set The current boot source to be used at next boot instead of the normal boot device, if BootSourceOverrideEnabled is true.
   * @param {ComputerSystem100BootSource} bootSourceOverrideTarget
   **/
  ComputerSystem100Boot.prototype.setBootSourceOverrideTarget = function(bootSourceOverrideTarget) {
    this['BootSourceOverrideTarget'] = bootSourceOverrideTarget;
  }
  
  

  ComputerSystem100Boot.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.ComputerSystem100Boot = ComputerSystem100Boot;
  }

  return ComputerSystem100Boot;
  
  
}));
