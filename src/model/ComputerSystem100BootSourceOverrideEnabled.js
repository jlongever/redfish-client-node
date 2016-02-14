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

  
  

  
  var ComputerSystem100BootSourceOverrideEnabled = function ComputerSystem100BootSourceOverrideEnabled() { 
    
  };

  ComputerSystem100BootSourceOverrideEnabled.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    return this;
  }

  
  
  

  ComputerSystem100BootSourceOverrideEnabled.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.ComputerSystem100BootSourceOverrideEnabled = ComputerSystem100BootSourceOverrideEnabled;
  }

  return ComputerSystem100BootSourceOverrideEnabled;
  
  
}));
