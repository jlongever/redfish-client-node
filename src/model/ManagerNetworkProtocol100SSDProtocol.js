(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ManagerNetworkProtocol100NotifyIPv6Scope'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ManagerNetworkProtocol100NotifyIPv6Scope'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.ManagerNetworkProtocol100NotifyIPv6Scope);
  }
}(this, function(module, ApiClient, ManagerNetworkProtocol100NotifyIPv6Scope) {
  'use strict';

  
  

  
  var ManagerNetworkProtocol100SSDProtocol = function ManagerNetworkProtocol100SSDProtocol() { 
    
    /**
     * Indicates the scope for the IPv6 Notify messages for SSDP.
     * datatype: ManagerNetworkProtocol100NotifyIPv6Scope
     **/
    this['NotifyIPv6Scope'] = new ManagerNetworkProtocol100NotifyIPv6Scope();
    
  };

  ManagerNetworkProtocol100SSDProtocol.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['NotifyIPv6Scope']) {
      this['NotifyIPv6Scope'].constructFromObject(data['NotifyIPv6Scope']);
    }
    
    return this;
  }

  
  
  /**
   * get Indicates the scope for the IPv6 Notify messages for SSDP.
   * @return {ManagerNetworkProtocol100NotifyIPv6Scope}
   **/
  ManagerNetworkProtocol100SSDProtocol.prototype.getNotifyIPv6Scope = function() {
    return this['NotifyIPv6Scope'];
  }

  /**
   * set Indicates the scope for the IPv6 Notify messages for SSDP.
   * @param {ManagerNetworkProtocol100NotifyIPv6Scope} notifyIPv6Scope
   **/
  ManagerNetworkProtocol100SSDProtocol.prototype.setNotifyIPv6Scope = function(notifyIPv6Scope) {
    this['NotifyIPv6Scope'] = notifyIPv6Scope;
  }
  
  

  ManagerNetworkProtocol100SSDProtocol.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.ManagerNetworkProtocol100SSDProtocol = ManagerNetworkProtocol100SSDProtocol;
  }

  return ManagerNetworkProtocol100SSDProtocol;
  
  
}));
