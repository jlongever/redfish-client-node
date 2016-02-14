(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Odata400Count', './Odata400IdRef', './Power100PowerLimit', './Power100PowerMetric', './ResourceOem', './ResourceStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Odata400Count'), require('./Odata400IdRef'), require('./Power100PowerLimit'), require('./Power100PowerMetric'), require('./ResourceOem'), require('./ResourceStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Odata400Count, root.RedfishV100.Odata400IdRef, root.RedfishV100.Power100PowerLimit, root.RedfishV100.Power100PowerMetric, root.RedfishV100.ResourceOem, root.RedfishV100.ResourceStatus);
  }
}(this, function(module, ApiClient, Odata400Count, Odata400IdRef, Power100PowerLimit, Power100PowerMetric, ResourceOem, ResourceStatus) {
  'use strict';

  
  

  /**
   * This is the base type for addressable members of an array.
   **/
  var Power100PowerControl = function Power100PowerControl() { 
    
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
     * Power limit status and configuration information for this chassis
     * datatype: Power100PowerLimit
     **/
    this['PowerLimit'] = new Power100PowerLimit();
    
    /**
     * Power readings for this chassis.
     * datatype: Power100PowerMetric
     **/
    this['PowerMetrics'] = new Power100PowerMetric();
    
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

  Power100PowerControl.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['MemberId']) {
      this['MemberId'] = ApiClient.convertToType(data['MemberId'], 'String');
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['PowerLimit']) {
      this['PowerLimit'].constructFromObject(data['PowerLimit']);
    }
    
    if (data['PowerMetrics']) {
      this['PowerMetrics'].constructFromObject(data['PowerMetrics']);
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
  Power100PowerControl.prototype.getMemberId = function() {
    return this['MemberId'];
  }

  /**
   * set This is the identifier for the member within the collection.
   * @param {String} memberId
   **/
  Power100PowerControl.prototype.setMemberId = function(memberId) {
    this['MemberId'] = memberId;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  Power100PowerControl.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  Power100PowerControl.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get Power limit status and configuration information for this chassis
   * @return {Power100PowerLimit}
   **/
  Power100PowerControl.prototype.getPowerLimit = function() {
    return this['PowerLimit'];
  }

  /**
   * set Power limit status and configuration information for this chassis
   * @param {Power100PowerLimit} powerLimit
   **/
  Power100PowerControl.prototype.setPowerLimit = function(powerLimit) {
    this['PowerLimit'] = powerLimit;
  }
  
  /**
   * get Power readings for this chassis.
   * @return {Power100PowerMetric}
   **/
  Power100PowerControl.prototype.getPowerMetrics = function() {
    return this['PowerMetrics'];
  }

  /**
   * set Power readings for this chassis.
   * @param {Power100PowerMetric} powerMetrics
   **/
  Power100PowerControl.prototype.setPowerMetrics = function(powerMetrics) {
    this['PowerMetrics'] = powerMetrics;
  }
  
  /**
   * get The ID(s) of the resources associated with this Power Limit
   * @return {[Odata400IdRef]}
   **/
  Power100PowerControl.prototype.getRelatedItem = function() {
    return this['RelatedItem'];
  }

  /**
   * set The ID(s) of the resources associated with this Power Limit
   * @param {[Odata400IdRef]} relatedItem
   **/
  Power100PowerControl.prototype.setRelatedItem = function(relatedItem) {
    this['RelatedItem'] = relatedItem;
  }
  
  /**
   * @return {Odata400Count}
   **/
  Power100PowerControl.prototype.getRelatedItemodataCount = function() {
    return this['RelatedItem@odata.count'];
  }

  /**
   * @param {Odata400Count} relatedItemodataCount
   **/
  Power100PowerControl.prototype.setRelatedItemodataCount = function(relatedItemodataCount) {
    this['RelatedItem@odata.count'] = relatedItemodataCount;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  Power100PowerControl.prototype.getRelatedItemodataNavigationLink = function() {
    return this['RelatedItem@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} relatedItemodataNavigationLink
   **/
  Power100PowerControl.prototype.setRelatedItemodataNavigationLink = function(relatedItemodataNavigationLink) {
    this['RelatedItem@odata.navigationLink'] = relatedItemodataNavigationLink;
  }
  
  /**
   * @return {ResourceStatus}
   **/
  Power100PowerControl.prototype.getStatus = function() {
    return this['Status'];
  }

  /**
   * @param {ResourceStatus} status
   **/
  Power100PowerControl.prototype.setStatus = function(status) {
    this['Status'] = status;
  }
  
  

  Power100PowerControl.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.Power100PowerControl = Power100PowerControl;
  }

  return Power100PowerControl;
  
  
}));
