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

  
  

  
  var SimpleStorageSimpleStorage = function SimpleStorageSimpleStorage() { 
    
  };

  SimpleStorageSimpleStorage.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    return this;
  }

  
  
  

  SimpleStorageSimpleStorage.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.SimpleStorageSimpleStorage = SimpleStorageSimpleStorage;
  }

  return SimpleStorageSimpleStorage;
  
  
}));
