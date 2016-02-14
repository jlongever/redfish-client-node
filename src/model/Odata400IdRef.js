(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Odata400Id'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Odata400Id'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Odata400Id);
  }
}(this, function(module, ApiClient, Odata400Id) {
  'use strict';

  
  

  
  var Odata400IdRef = function Odata400IdRef() { 
    
    /**
     * datatype: Odata400Id
     **/
    this['@odata.id'] = new Odata400Id();
    
  };

  Odata400IdRef.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['@odata.id']) {
      this['@odata.id'].constructFromObject(data['@odata.id']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Odata400Id}
   **/
  Odata400IdRef.prototype.getOdataId = function() {
    return this['@odata.id'];
  }

  /**
   * @param {Odata400Id} odataId
   **/
  Odata400IdRef.prototype.setOdataId = function(odataId) {
    this['@odata.id'] = odataId;
  }
  
  

  Odata400IdRef.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.Odata400IdRef = Odata400IdRef;
  }

  return Odata400IdRef;
  
  
}));
