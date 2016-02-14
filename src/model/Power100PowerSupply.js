(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Odata400Count', './Odata400IdRef', './Power100LineInputVoltageType', './Power100PowerSupplyType', './RedundancyRedundancy', './ResourceOem', './ResourceStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Odata400Count'), require('./Odata400IdRef'), require('./Power100LineInputVoltageType'), require('./Power100PowerSupplyType'), require('./RedundancyRedundancy'), require('./ResourceOem'), require('./ResourceStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Odata400Count, root.RedfishV100.Odata400IdRef, root.RedfishV100.Power100LineInputVoltageType, root.RedfishV100.Power100PowerSupplyType, root.RedfishV100.RedundancyRedundancy, root.RedfishV100.ResourceOem, root.RedfishV100.ResourceStatus);
  }
}(this, function(module, ApiClient, Odata400Count, Odata400IdRef, Power100LineInputVoltageType, Power100PowerSupplyType, RedundancyRedundancy, ResourceOem, ResourceStatus) {
  'use strict';

  
  

  /**
   * Details of a power supplies associated with this system or device
   **/
  var Power100PowerSupply = function Power100PowerSupply() { 
    
    /**
     * The line voltage type supported as an input to this Power Supply
     * datatype: Power100LineInputVoltageType
     **/
    this['LineInputVoltageType'] = new Power100LineInputVoltageType();
    
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
     * The Power Supply type (AC or DC)
     * datatype: Power100PowerSupplyType
     **/
    this['PowerSupplyType'] = new Power100PowerSupplyType();
    
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
     * The ID(s) of the resources associated with this Power Limit
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

  Power100PowerSupply.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['LineInputVoltageType']) {
      this['LineInputVoltageType'].constructFromObject(data['LineInputVoltageType']);
    }
    
    if (data['MemberId']) {
      this['MemberId'] = ApiClient.convertToType(data['MemberId'], 'String');
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['PowerSupplyType']) {
      this['PowerSupplyType'].constructFromObject(data['PowerSupplyType']);
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
   * get The line voltage type supported as an input to this Power Supply
   * @return {Power100LineInputVoltageType}
   **/
  Power100PowerSupply.prototype.getLineInputVoltageType = function() {
    return this['LineInputVoltageType'];
  }

  /**
   * set The line voltage type supported as an input to this Power Supply
   * @param {Power100LineInputVoltageType} lineInputVoltageType
   **/
  Power100PowerSupply.prototype.setLineInputVoltageType = function(lineInputVoltageType) {
    this['LineInputVoltageType'] = lineInputVoltageType;
  }
  
  /**
   * get This is the identifier for the member within the collection.
   * @return {String}
   **/
  Power100PowerSupply.prototype.getMemberId = function() {
    return this['MemberId'];
  }

  /**
   * set This is the identifier for the member within the collection.
   * @param {String} memberId
   **/
  Power100PowerSupply.prototype.setMemberId = function(memberId) {
    this['MemberId'] = memberId;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  Power100PowerSupply.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  Power100PowerSupply.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get The Power Supply type (AC or DC)
   * @return {Power100PowerSupplyType}
   **/
  Power100PowerSupply.prototype.getPowerSupplyType = function() {
    return this['PowerSupplyType'];
  }

  /**
   * set The Power Supply type (AC or DC)
   * @param {Power100PowerSupplyType} powerSupplyType
   **/
  Power100PowerSupply.prototype.setPowerSupplyType = function(powerSupplyType) {
    this['PowerSupplyType'] = powerSupplyType;
  }
  
  /**
   * get This structure is used to show redundancy for fans.  The Component ids will reference the members of the redundancy groups.
   * @return {[RedundancyRedundancy]}
   **/
  Power100PowerSupply.prototype.getRedundancy = function() {
    return this['Redundancy'];
  }

  /**
   * set This structure is used to show redundancy for fans.  The Component ids will reference the members of the redundancy groups.
   * @param {[RedundancyRedundancy]} redundancy
   **/
  Power100PowerSupply.prototype.setRedundancy = function(redundancy) {
    this['Redundancy'] = redundancy;
  }
  
  /**
   * @return {Odata400Count}
   **/
  Power100PowerSupply.prototype.getRedundancyodataCount = function() {
    return this['Redundancy@odata.count'];
  }

  /**
   * @param {Odata400Count} redundancyodataCount
   **/
  Power100PowerSupply.prototype.setRedundancyodataCount = function(redundancyodataCount) {
    this['Redundancy@odata.count'] = redundancyodataCount;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  Power100PowerSupply.prototype.getRedundancyodataNavigationLink = function() {
    return this['Redundancy@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} redundancyodataNavigationLink
   **/
  Power100PowerSupply.prototype.setRedundancyodataNavigationLink = function(redundancyodataNavigationLink) {
    this['Redundancy@odata.navigationLink'] = redundancyodataNavigationLink;
  }
  
  /**
   * get The ID(s) of the resources associated with this Power Limit
   * @return {[Odata400IdRef]}
   **/
  Power100PowerSupply.prototype.getRelatedItem = function() {
    return this['RelatedItem'];
  }

  /**
   * set The ID(s) of the resources associated with this Power Limit
   * @param {[Odata400IdRef]} relatedItem
   **/
  Power100PowerSupply.prototype.setRelatedItem = function(relatedItem) {
    this['RelatedItem'] = relatedItem;
  }
  
  /**
   * @return {Odata400Count}
   **/
  Power100PowerSupply.prototype.getRelatedItemodataCount = function() {
    return this['RelatedItem@odata.count'];
  }

  /**
   * @param {Odata400Count} relatedItemodataCount
   **/
  Power100PowerSupply.prototype.setRelatedItemodataCount = function(relatedItemodataCount) {
    this['RelatedItem@odata.count'] = relatedItemodataCount;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  Power100PowerSupply.prototype.getRelatedItemodataNavigationLink = function() {
    return this['RelatedItem@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} relatedItemodataNavigationLink
   **/
  Power100PowerSupply.prototype.setRelatedItemodataNavigationLink = function(relatedItemodataNavigationLink) {
    this['RelatedItem@odata.navigationLink'] = relatedItemodataNavigationLink;
  }
  
  /**
   * @return {ResourceStatus}
   **/
  Power100PowerSupply.prototype.getStatus = function() {
    return this['Status'];
  }

  /**
   * @param {ResourceStatus} status
   **/
  Power100PowerSupply.prototype.setStatus = function(status) {
    this['Status'] = status;
  }
  
  

  Power100PowerSupply.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.Power100PowerSupply = Power100PowerSupply;
  }

  return Power100PowerSupply;
  
  
}));
