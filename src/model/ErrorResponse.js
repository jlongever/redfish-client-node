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

  
  

  
  var ErrorResponse = function ErrorResponse(message) { 
    
    /**
     * datatype: String
     * required
     **/
    this['message'] = message;
    
  };

  ErrorResponse.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['message']) {
      this['message'] = ApiClient.convertToType(data['message'], 'String');
    }
    
    return this;
  }

  
  
  /**
   * @return {String}
   **/
  ErrorResponse.prototype.getMessage = function() {
    return this['message'];
  }

  /**
   * @param {String} message
   **/
  ErrorResponse.prototype.setMessage = function(message) {
    this['message'] = message;
  }
  
  

  ErrorResponse.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.ErrorResponse = ErrorResponse;
  }

  return ErrorResponse;
  
  
}));
