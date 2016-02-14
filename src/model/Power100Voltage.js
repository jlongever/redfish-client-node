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
  var Power100Voltage = function Power100Voltage() { 
    
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
     * Describes the area or device to which this voltage measurement applies.
     * datatype: PhysicalContext100PhysicalContext
     **/
    this['PhysicalContext'] = new PhysicalContext100PhysicalContext();
    
    /**
     * Describes the areas or devices to which this voltage measurement applies.
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

  Power100Voltage.prototype.constructFromObject = function(data) {
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
  Power100Voltage.prototype.getMemberId = function() {
    return this['MemberId'];
  }

  /**
   * set This is the identifier for the member within the collection.
   * @param {String} memberId
   **/
  Power100Voltage.prototype.setMemberId = function(memberId) {
    this['MemberId'] = memberId;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  Power100Voltage.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  Power100Voltage.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get Describes the area or device to which this voltage measurement applies.
   * @return {PhysicalContext100PhysicalContext}
   **/
  Power100Voltage.prototype.getPhysicalContext = function() {
    return this['PhysicalContext'];
  }

  /**
   * set Describes the area or device to which this voltage measurement applies.
   * @param {PhysicalContext100PhysicalContext} physicalContext
   **/
  Power100Voltage.prototype.setPhysicalContext = function(physicalContext) {
    this['PhysicalContext'] = physicalContext;
  }
  
  /**
   * get Describes the areas or devices to which this voltage measurement applies.
   * @return {[Odata400IdRef]}
   **/
  Power100Voltage.prototype.getRelatedItem = function() {
    return this['RelatedItem'];
  }

  /**
   * set Describes the areas or devices to which this voltage measurement applies.
   * @param {[Odata400IdRef]} relatedItem
   **/
  Power100Voltage.prototype.setRelatedItem = function(relatedItem) {
    this['RelatedItem'] = relatedItem;
  }
  
  /**
   * @return {Odata400Count}
   **/
  Power100Voltage.prototype.getRelatedItemodataCount = function() {
    return this['RelatedItem@odata.count'];
  }

  /**
   * @param {Odata400Count} relatedItemodataCount
   **/
  Power100Voltage.prototype.setRelatedItemodataCount = function(relatedItemodataCount) {
    this['RelatedItem@odata.count'] = relatedItemodataCount;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  Power100Voltage.prototype.getRelatedItemodataNavigationLink = function() {
    return this['RelatedItem@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} relatedItemodataNavigationLink
   **/
  Power100Voltage.prototype.setRelatedItemodataNavigationLink = function(relatedItemodataNavigationLink) {
    this['RelatedItem@odata.navigationLink'] = relatedItemodataNavigationLink;
  }
  
  /**
   * @return {ResourceStatus}
   **/
  Power100Voltage.prototype.getStatus = function() {
    return this['Status'];
  }

  /**
   * @param {ResourceStatus} status
   **/
  Power100Voltage.prototype.setStatus = function(status) {
    this['Status'] = status;
  }
  
  

  Power100Voltage.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.Power100Voltage = Power100Voltage;
  }

  return Power100Voltage;
  
  
}));
