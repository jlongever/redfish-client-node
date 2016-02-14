(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './RackHDBootImageNetworkAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./RackHDBootImageNetworkAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.RackHDBootImageNetworkAddress);
  }
}(this, function(module, ApiClient, RackHDBootImageNetworkAddress) {
  'use strict';

  
  

  
  var RackHDBootImageNetworkDevice = function RackHDBootImageNetworkDevice(device) { 
    
    /**
     * The name of the network device.
     * datatype: String
     * required
     **/
    this['device'] = device;
    
    /**
     * This the ipv4 parameter of the network device.
     * datatype: RackHDBootImageNetworkAddress
     **/
    this['ipv4'] = new RackHDBootImageNetworkAddress();
    
    /**
     * This is the ipv6 parameter of the network device.
     * datatype: RackHDBootImageNetworkAddress
     **/
    this['ipv6'] = new RackHDBootImageNetworkAddress();
    
  };

  RackHDBootImageNetworkDevice.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['device']) {
      this['device'] = ApiClient.convertToType(data['device'], 'String');
    }
    
    if (data['ipv4']) {
      this['ipv4'].constructFromObject(data['ipv4']);
    }
    
    if (data['ipv6']) {
      this['ipv6'].constructFromObject(data['ipv6']);
    }
    
    return this;
  }

  
  
  /**
   * get The name of the network device.
   * @return {String}
   **/
  RackHDBootImageNetworkDevice.prototype.getDevice = function() {
    return this['device'];
  }

  /**
   * set The name of the network device.
   * @param {String} device
   **/
  RackHDBootImageNetworkDevice.prototype.setDevice = function(device) {
    this['device'] = device;
  }
  
  /**
   * get This the ipv4 parameter of the network device.
   * @return {RackHDBootImageNetworkAddress}
   **/
  RackHDBootImageNetworkDevice.prototype.getIpv4 = function() {
    return this['ipv4'];
  }

  /**
   * set This the ipv4 parameter of the network device.
   * @param {RackHDBootImageNetworkAddress} ipv4
   **/
  RackHDBootImageNetworkDevice.prototype.setIpv4 = function(ipv4) {
    this['ipv4'] = ipv4;
  }
  
  /**
   * get This is the ipv6 parameter of the network device.
   * @return {RackHDBootImageNetworkAddress}
   **/
  RackHDBootImageNetworkDevice.prototype.getIpv6 = function() {
    return this['ipv6'];
  }

  /**
   * set This is the ipv6 parameter of the network device.
   * @param {RackHDBootImageNetworkAddress} ipv6
   **/
  RackHDBootImageNetworkDevice.prototype.setIpv6 = function(ipv6) {
    this['ipv6'] = ipv6;
  }
  
  

  RackHDBootImageNetworkDevice.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.RackHDBootImageNetworkDevice = RackHDBootImageNetworkDevice;
  }

  return RackHDBootImageNetworkDevice;
  
  
}));
