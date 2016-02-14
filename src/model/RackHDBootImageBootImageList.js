(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Odata400Type'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Odata400Type'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Odata400Type);
  }
}(this, function(module, ApiClient, Odata400Type) {
  'use strict';

  
  
//export module
if ( typeof define === "function" && define.amd ) {
	define('OsNameEnum', [], function() {
        return OsNameEnum;
	 });
}

var OsNameEnum = function OsNameEnum() {
	var self = this;


	/**
	 * @const
	 */
	self.CENTOS = "CentOS",
	
	/**
	 * @const
	 */
	self.CENTOS_KVM = "CentOS+KVM",
	
	/**
	 * @const
	 */
	self.ESXI = "ESXi",
	
	/**
	 * @const
	 */
	self.RHEL = "RHEL",
	
	/**
	 * @const
	 */
	self.RHEL_KVM = "RHEL+KVM";

}


  
  var RackHDBootImageBootImageList = function RackHDBootImageBootImageList() { 
    
    /**
     * datatype: OsNameEnum
     **/
    this['osName'] = null;
    
    /**
     * datatype: Odata400Type
     **/
    this['@odata.type'] = new Odata400Type();
    
  };

  RackHDBootImageBootImageList.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['osName']) {
      this['osName'] = ApiClient.convertToType(data['osName'], 'String');
    }
    
    if (data['@odata.type']) {
      this['@odata.type'].constructFromObject(data['@odata.type']);
    }
    
    return this;
  }

  
  
  /**
   * @return {OsNameEnum}
   **/
  RackHDBootImageBootImageList.prototype.getOsName = function() {
    return this['osName'];
  }

  /**
   * @param {OsNameEnum} osName
   **/
  RackHDBootImageBootImageList.prototype.setOsName = function(osName) {
    this['osName'] = osName;
  }
  
  /**
   * @return {Odata400Type}
   **/
  RackHDBootImageBootImageList.prototype.getOdataType = function() {
    return this['@odata.type'];
  }

  /**
   * @param {Odata400Type} odataType
   **/
  RackHDBootImageBootImageList.prototype.setOdataType = function(odataType) {
    this['@odata.type'] = odataType;
  }
  
  

  RackHDBootImageBootImageList.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.RackHDBootImageBootImageList = RackHDBootImageBootImageList;
  }

  return RackHDBootImageBootImageList;
  
  
}));
