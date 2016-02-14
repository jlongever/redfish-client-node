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

  
  

  
  var RackHDBootImageNetworkAddress = function RackHDBootImageNetworkAddress(ipAddr, gateway, netmask) { 
    
    /**
     * This is the subnet mask
     * datatype: String
     * required
     **/
    this['netmask'] = netmask;
    
    /**
     * This is the assigned static IP address of the network device
     * datatype: String
     * required
     **/
    this['ipAddr'] = ipAddr;
    
    /**
     * This is the gateway address.
     * datatype: String
     * required
     **/
    this['gateway'] = gateway;
    
    /**
     * This is the VLAN ID represented as a array of integers with values of 0 to 4096
     * datatype: String
     **/
    this['vlanId'] = null;
    
  };

  RackHDBootImageNetworkAddress.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['netmask']) {
      this['netmask'] = ApiClient.convertToType(data['netmask'], 'String');
    }
    
    if (data['ipAddr']) {
      this['ipAddr'] = ApiClient.convertToType(data['ipAddr'], 'String');
    }
    
    if (data['gateway']) {
      this['gateway'] = ApiClient.convertToType(data['gateway'], 'String');
    }
    
    if (data['vlanId']) {
      this['vlanId'] = ApiClient.convertToType(data['vlanId'], 'String');
    }
    
    return this;
  }

  
  
  /**
   * get This is the subnet mask
   * @return {String}
   **/
  RackHDBootImageNetworkAddress.prototype.getNetmask = function() {
    return this['netmask'];
  }

  /**
   * set This is the subnet mask
   * @param {String} netmask
   **/
  RackHDBootImageNetworkAddress.prototype.setNetmask = function(netmask) {
    this['netmask'] = netmask;
  }
  
  /**
   * get This is the assigned static IP address of the network device
   * @return {String}
   **/
  RackHDBootImageNetworkAddress.prototype.getIpAddr = function() {
    return this['ipAddr'];
  }

  /**
   * set This is the assigned static IP address of the network device
   * @param {String} ipAddr
   **/
  RackHDBootImageNetworkAddress.prototype.setIpAddr = function(ipAddr) {
    this['ipAddr'] = ipAddr;
  }
  
  /**
   * get This is the gateway address.
   * @return {String}
   **/
  RackHDBootImageNetworkAddress.prototype.getGateway = function() {
    return this['gateway'];
  }

  /**
   * set This is the gateway address.
   * @param {String} gateway
   **/
  RackHDBootImageNetworkAddress.prototype.setGateway = function(gateway) {
    this['gateway'] = gateway;
  }
  
  /**
   * get This is the VLAN ID represented as a array of integers with values of 0 to 4096
   * @return {String}
   **/
  RackHDBootImageNetworkAddress.prototype.getVlanId = function() {
    return this['vlanId'];
  }

  /**
   * set This is the VLAN ID represented as a array of integers with values of 0 to 4096
   * @param {String} vlanId
   **/
  RackHDBootImageNetworkAddress.prototype.setVlanId = function(vlanId) {
    this['vlanId'] = vlanId;
  }
  
  

  RackHDBootImageNetworkAddress.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.RackHDBootImageNetworkAddress = RackHDBootImageNetworkAddress;
  }

  return RackHDBootImageNetworkAddress;
  
  
}));
