(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Odata400Count', './Odata400IdRef', './PhysicalContext100PhysicalContext', './RedundancyRedundancy', './ResourceOem', './ResourceStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Odata400Count'), require('./Odata400IdRef'), require('./PhysicalContext100PhysicalContext'), require('./RedundancyRedundancy'), require('./ResourceOem'), require('./ResourceStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Odata400Count, root.RedfishV100.Odata400IdRef, root.RedfishV100.PhysicalContext100PhysicalContext, root.RedfishV100.RedundancyRedundancy, root.RedfishV100.ResourceOem, root.RedfishV100.ResourceStatus);
  }
}(this, function(module, ApiClient, Odata400Count, Odata400IdRef, PhysicalContext100PhysicalContext, RedundancyRedundancy, ResourceOem, ResourceStatus) {
  'use strict';

  
  

  /**
   * This is the base type for addressable members of an array.
   **/
  var Thermal100Fan = function Thermal100Fan() { 
    
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
     * Describes the area or device associated with this fan.
     * datatype: PhysicalContext100PhysicalContext
     **/
    this['PhysicalContext'] = new PhysicalContext100PhysicalContext();
    
    /**
     * This structure is used to show redundancy for fans.  The Component ids will reference the members of the redundancy groups.
     * datatype: [RedundancyRedundancy]
     **/
    this['Redundancy'] = [];
    
    /**
     * datatype: Odata400Count
     **/
    this['Redundancy@odata.count'] = new Odata400Count();
    
    /**
     * datatype: Odata400IdRef
     **/
    this['Redundancy@odata.navigationLink'] = new Odata400IdRef();
    
    /**
     * The ID(s) of the resources serviced with this fan
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

  Thermal100Fan.prototype.constructFromObject = function(data) {
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
    
    if (data['Redundancy']) {
      this['Redundancy'] = ApiClient.convertToType(data['Redundancy'], [RedundancyRedundancy]);
    }
    
    if (data['Redundancy@odata.count']) {
      this['Redundancy@odata.count'].constructFromObject(data['Redundancy@odata.count']);
    }
    
    if (data['Redundancy@odata.navigationLink']) {
      this['Redundancy@odata.navigationLink'].constructFromObject(data['Redundancy@odata.navigationLink']);
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
  Thermal100Fan.prototype.getMemberId = function() {
    return this['MemberId'];
  }

  /**
   * set This is the identifier for the member within the collection.
   * @param {String} memberId
   **/
  Thermal100Fan.prototype.setMemberId = function(memberId) {
    this['MemberId'] = memberId;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  Thermal100Fan.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  Thermal100Fan.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get Describes the area or device associated with this fan.
   * @return {PhysicalContext100PhysicalContext}
   **/
  Thermal100Fan.prototype.getPhysicalContext = function() {
    return this['PhysicalContext'];
  }

  /**
   * set Describes the area or device associated with this fan.
   * @param {PhysicalContext100PhysicalContext} physicalContext
   **/
  Thermal100Fan.prototype.setPhysicalContext = function(physicalContext) {
    this['PhysicalContext'] = physicalContext;
  }
  
  /**
   * get This structure is used to show redundancy for fans.  The Component ids will reference the members of the redundancy groups.
   * @return {[RedundancyRedundancy]}
   **/
  Thermal100Fan.prototype.getRedundancy = function() {
    return this['Redundancy'];
  }

  /**
   * set This structure is used to show redundancy for fans.  The Component ids will reference the members of the redundancy groups.
   * @param {[RedundancyRedundancy]} redundancy
   **/
  Thermal100Fan.prototype.setRedundancy = function(redundancy) {
    this['Redundancy'] = redundancy;
  }
  
  /**
   * @return {Odata400Count}
   **/
  Thermal100Fan.prototype.getRedundancyodataCount = function() {
    return this['Redundancy@odata.count'];
  }

  /**
   * @param {Odata400Count} redundancyodataCount
   **/
  Thermal100Fan.prototype.setRedundancyodataCount = function(redundancyodataCount) {
    this['Redundancy@odata.count'] = redundancyodataCount;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  Thermal100Fan.prototype.getRedundancyodataNavigationLink = function() {
    return this['Redundancy@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} redundancyodataNavigationLink
   **/
  Thermal100Fan.prototype.setRedundancyodataNavigationLink = function(redundancyodataNavigationLink) {
    this['Redundancy@odata.navigationLink'] = redundancyodataNavigationLink;
  }
  
  /**
   * get The ID(s) of the resources serviced with this fan
   * @return {[Odata400IdRef]}
   **/
  Thermal100Fan.prototype.getRelatedItem = function() {
    return this['RelatedItem'];
  }

  /**
   * set The ID(s) of the resources serviced with this fan
   * @param {[Odata400IdRef]} relatedItem
   **/
  Thermal100Fan.prototype.setRelatedItem = function(relatedItem) {
    this['RelatedItem'] = relatedItem;
  }
  
  /**
   * @return {Odata400Count}
   **/
  Thermal100Fan.prototype.getRelatedItemodataCount = function() {
    return this['RelatedItem@odata.count'];
  }

  /**
   * @param {Odata400Count} relatedItemodataCount
   **/
  Thermal100Fan.prototype.setRelatedItemodataCount = function(relatedItemodataCount) {
    this['RelatedItem@odata.count'] = relatedItemodataCount;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  Thermal100Fan.prototype.getRelatedItemodataNavigationLink = function() {
    return this['RelatedItem@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} relatedItemodataNavigationLink
   **/
  Thermal100Fan.prototype.setRelatedItemodataNavigationLink = function(relatedItemodataNavigationLink) {
    this['RelatedItem@odata.navigationLink'] = relatedItemodataNavigationLink;
  }
  
  /**
   * @return {ResourceStatus}
   **/
  Thermal100Fan.prototype.getStatus = function() {
    return this['Status'];
  }

  /**
   * @param {ResourceStatus} status
   **/
  Thermal100Fan.prototype.setStatus = function(status) {
    this['Status'] = status;
  }
  
  

  Thermal100Fan.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.Thermal100Fan = Thermal100Fan;
  }

  return Thermal100Fan;
  
  
}));
