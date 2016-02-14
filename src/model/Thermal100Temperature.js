(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Odata400Count', './Odata400IdRef', './PhysicalContext100PhysicalContext', './ResourceOem', './ResourceStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Odata400Count'), require('./Odata400IdRef'), require('./PhysicalContext100PhysicalContext'), require('./ResourceOem'), require('./ResourceStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Odata400Count, root.RedfishV100.Odata400IdRef, root.RedfishV100.PhysicalContext100PhysicalContext, root.RedfishV100.ResourceOem, root.RedfishV100.ResourceStatus);
  }
}(this, function(module, ApiClient, Odata400Count, Odata400IdRef, PhysicalContext100PhysicalContext, ResourceOem, ResourceStatus) {
  'use strict';

  
  

  /**
   * This is the base type for addressable members of an array.
   **/
  var Thermal100Temperature = function Thermal100Temperature() { 
    
    /**
     * This is the identifier for the member within the collection.
     * datatype: String
     **/
    this['MemberId'] = null;
    
    /**
     * This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
     * datatype: ResourceOem
     **/
    this['Oem'] = new ResourceOem();
    
    /**
     * Describes the area or device to which this temperature measurement applies.
     * datatype: PhysicalContext100PhysicalContext
     **/
    this['PhysicalContext'] = new PhysicalContext100PhysicalContext();
    
    /**
     * Describes the areas or devices to which this temperature measurement applies.
     * datatype: [Odata400IdRef]
     **/
    this['RelatedItem'] = [];
    
    /**
     * datatype: Odata400Count
     **/
    this['RelatedItem@odata.count'] = new Odata400Count();
    
    /**
     * datatype: Odata400IdRef
     **/
    this['RelatedItem@odata.navigationLink'] = new Odata400IdRef();
    
    /**
     * datatype: ResourceStatus
     **/
    this['Status'] = new ResourceStatus();
    
  };

  Thermal100Temperature.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['MemberId']) {
      this['MemberId'] = ApiClient.convertToType(data['MemberId'], 'String');
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['PhysicalContext']) {
      this['PhysicalContext'].constructFromObject(data['PhysicalContext']);
    }
    
    if (data['RelatedItem']) {
      this['RelatedItem'] = ApiClient.convertToType(data['RelatedItem'], [Odata400IdRef]);
    }
    
    if (data['RelatedItem@odata.count']) {
      this['RelatedItem@odata.count'].constructFromObject(data['RelatedItem@odata.count']);
    }
    
    if (data['RelatedItem@odata.navigationLink']) {
      this['RelatedItem@odata.navigationLink'].constructFromObject(data['RelatedItem@odata.navigationLink']);
    }
    
    if (data['Status']) {
      this['Status'].constructFromObject(data['Status']);
    }
    
    return this;
  }

  
  
  /**
   * get This is the identifier for the member within the collection.
   * @return {String}
   **/
  Thermal100Temperature.prototype.getMemberId = function() {
    return this['MemberId'];
  }

  /**
   * set This is the identifier for the member within the collection.
   * @param {String} memberId
   **/
  Thermal100Temperature.prototype.setMemberId = function(memberId) {
    this['MemberId'] = memberId;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  Thermal100Temperature.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  Thermal100Temperature.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get Describes the area or device to which this temperature measurement applies.
   * @return {PhysicalContext100PhysicalContext}
   **/
  Thermal100Temperature.prototype.getPhysicalContext = function() {
    return this['PhysicalContext'];
  }

  /**
   * set Describes the area or device to which this temperature measurement applies.
   * @param {PhysicalContext100PhysicalContext} physicalContext
   **/
  Thermal100Temperature.prototype.setPhysicalContext = function(physicalContext) {
    this['PhysicalContext'] = physicalContext;
  }
  
  /**
   * get Describes the areas or devices to which this temperature measurement applies.
   * @return {[Odata400IdRef]}
   **/
  Thermal100Temperature.prototype.getRelatedItem = function() {
    return this['RelatedItem'];
  }

  /**
   * set Describes the areas or devices to which this temperature measurement applies.
   * @param {[Odata400IdRef]} relatedItem
   **/
  Thermal100Temperature.prototype.setRelatedItem = function(relatedItem) {
    this['RelatedItem'] = relatedItem;
  }
  
  /**
   * @return {Odata400Count}
   **/
  Thermal100Temperature.prototype.getRelatedItemodataCount = function() {
    return this['RelatedItem@odata.count'];
  }

  /**
   * @param {Odata400Count} relatedItemodataCount
   **/
  Thermal100Temperature.prototype.setRelatedItemodataCount = function(relatedItemodataCount) {
    this['RelatedItem@odata.count'] = relatedItemodataCount;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  Thermal100Temperature.prototype.getRelatedItemodataNavigationLink = function() {
    return this['RelatedItem@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} relatedItemodataNavigationLink
   **/
  Thermal100Temperature.prototype.setRelatedItemodataNavigationLink = function(relatedItemodataNavigationLink) {
    this['RelatedItem@odata.navigationLink'] = relatedItemodataNavigationLink;
  }
  
  /**
   * @return {ResourceStatus}
   **/
  Thermal100Temperature.prototype.getStatus = function() {
    return this['Status'];
  }

  /**
   * @param {ResourceStatus} status
   **/
  Thermal100Temperature.prototype.setStatus = function(status) {
    this['Status'] = status;
  }
  
  

  Thermal100Temperature.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.Thermal100Temperature = Thermal100Temperature;
  }

  return Thermal100Temperature;
  
  
}));
