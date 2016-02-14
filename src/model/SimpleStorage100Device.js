(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ResourceOem', './ResourceStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ResourceOem'), require('./ResourceStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.ResourceOem, root.RedfishV100.ResourceStatus);
  }
}(this, function(module, ApiClient, ResourceOem, ResourceStatus) {
  'use strict';

  
  

  
  var SimpleStorage100Device = function SimpleStorage100Device(Name) { 
    
    /**
     * The name of the resource or array element.
     * datatype: String
     * required
     **/
    this['Name'] = name;
    
    /**
     * datatype: ResourceOem
     **/
    this['Oem'] = new ResourceOem();
    
    /**
     * datatype: ResourceStatus
     **/
    this['Status'] = new ResourceStatus();
    
  };

  SimpleStorage100Device.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['Name']) {
      this['Name'] = ApiClient.convertToType(data['Name'], 'String');
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['Status']) {
      this['Status'].constructFromObject(data['Status']);
    }
    
    return this;
  }

  
  
  /**
   * get The name of the resource or array element.
   * @return {String}
   **/
  SimpleStorage100Device.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * set The name of the resource or array element.
   * @param {String} name
   **/
  SimpleStorage100Device.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * @return {ResourceOem}
   **/
  SimpleStorage100Device.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * @param {ResourceOem} oem
   **/
  SimpleStorage100Device.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * @return {ResourceStatus}
   **/
  SimpleStorage100Device.prototype.getStatus = function() {
    return this['Status'];
  }

  /**
   * @param {ResourceStatus} status
   **/
  SimpleStorage100Device.prototype.setStatus = function(status) {
    this['Status'] = status;
  }
  
  

  SimpleStorage100Device.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.SimpleStorage100Device = SimpleStorage100Device;
  }

  return SimpleStorage100Device;
  
  
}));
