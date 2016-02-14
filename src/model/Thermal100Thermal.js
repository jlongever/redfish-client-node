(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Odata400Context', './Odata400Count', './Odata400Id', './Odata400IdRef', './Odata400Type', './RedundancyRedundancy', './ResourceDescription', './ResourceId', './ResourceName', './ResourceOem', './ResourceStatus', './Thermal100Fan', './Thermal100Temperature'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Odata400Context'), require('./Odata400Count'), require('./Odata400Id'), require('./Odata400IdRef'), require('./Odata400Type'), require('./RedundancyRedundancy'), require('./ResourceDescription'), require('./ResourceId'), require('./ResourceName'), require('./ResourceOem'), require('./ResourceStatus'), require('./Thermal100Fan'), require('./Thermal100Temperature'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Odata400Context, root.RedfishV100.Odata400Count, root.RedfishV100.Odata400Id, root.RedfishV100.Odata400IdRef, root.RedfishV100.Odata400Type, root.RedfishV100.RedundancyRedundancy, root.RedfishV100.ResourceDescription, root.RedfishV100.ResourceId, root.RedfishV100.ResourceName, root.RedfishV100.ResourceOem, root.RedfishV100.ResourceStatus, root.RedfishV100.Thermal100Fan, root.RedfishV100.Thermal100Temperature);
  }
}(this, function(module, ApiClient, Odata400Context, Odata400Count, Odata400Id, Odata400IdRef, Odata400Type, RedundancyRedundancy, ResourceDescription, ResourceId, ResourceName, ResourceOem, ResourceStatus, Thermal100Fan, Thermal100Temperature) {
  'use strict';

  
  

  /**
   * This is the schema definition for the Thermal properties.  It represents the properties for Temperature and Cooling.
   **/
  var Thermal100Thermal = function Thermal100Thermal() { 
    
    /**
     * datatype: Odata400Context
     **/
    this['@odata.context'] = new Odata400Context();
    
    /**
     * datatype: Odata400Id
     **/
    this['@odata.id'] = new Odata400Id();
    
    /**
     * datatype: Odata400Type
     **/
    this['@odata.type'] = new Odata400Type();
    
    /**
     * datatype: ResourceDescription
     **/
    this['Description'] = new ResourceDescription();
    
    /**
     * This is the definition for fans.
     * datatype: [Thermal100Fan]
     **/
    this['Fans'] = [];
    
    /**
     * datatype: Odata400Count
     **/
    this['Fans@odata.count'] = new Odata400Count();
    
    /**
     * datatype: Odata400IdRef
     **/
    this['Fans@odata.navigationLink'] = new Odata400IdRef();
    
    /**
     * datatype: ResourceId
     **/
    this['Id'] = new ResourceId();
    
    /**
     * datatype: ResourceName
     **/
    this['Name'] = new ResourceName();
    
    /**
     * This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
     * datatype: ResourceOem
     **/
    this['Oem'] = new ResourceOem();
    
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
     * datatype: ResourceStatus
     **/
    this['Status'] = new ResourceStatus();
    
    /**
     * This is the definition for temperature sensors.
     * datatype: [Thermal100Temperature]
     **/
    this['Temperatures'] = [];
    
    /**
     * datatype: Odata400Count
     **/
    this['Temperatures@odata.count'] = new Odata400Count();
    
    /**
     * datatype: Odata400IdRef
     **/
    this['Temperatures@odata.navigationLink'] = new Odata400IdRef();
    
  };

  Thermal100Thermal.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['@odata.context']) {
      this['@odata.context'].constructFromObject(data['@odata.context']);
    }
    
    if (data['@odata.id']) {
      this['@odata.id'].constructFromObject(data['@odata.id']);
    }
    
    if (data['@odata.type']) {
      this['@odata.type'].constructFromObject(data['@odata.type']);
    }
    
    if (data['Description']) {
      this['Description'].constructFromObject(data['Description']);
    }
    
    if (data['Fans']) {
      this['Fans'] = ApiClient.convertToType(data['Fans'], [Thermal100Fan]);
    }
    
    if (data['Fans@odata.count']) {
      this['Fans@odata.count'].constructFromObject(data['Fans@odata.count']);
    }
    
    if (data['Fans@odata.navigationLink']) {
      this['Fans@odata.navigationLink'].constructFromObject(data['Fans@odata.navigationLink']);
    }
    
    if (data['Id']) {
      this['Id'].constructFromObject(data['Id']);
    }
    
    if (data['Name']) {
      this['Name'].constructFromObject(data['Name']);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
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
    
    if (data['Status']) {
      this['Status'].constructFromObject(data['Status']);
    }
    
    if (data['Temperatures']) {
      this['Temperatures'] = ApiClient.convertToType(data['Temperatures'], [Thermal100Temperature]);
    }
    
    if (data['Temperatures@odata.count']) {
      this['Temperatures@odata.count'].constructFromObject(data['Temperatures@odata.count']);
    }
    
    if (data['Temperatures@odata.navigationLink']) {
      this['Temperatures@odata.navigationLink'].constructFromObject(data['Temperatures@odata.navigationLink']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Odata400Context}
   **/
  Thermal100Thermal.prototype.getOdataContext = function() {
    return this['@odata.context'];
  }

  /**
   * @param {Odata400Context} odataContext
   **/
  Thermal100Thermal.prototype.setOdataContext = function(odataContext) {
    this['@odata.context'] = odataContext;
  }
  
  /**
   * @return {Odata400Id}
   **/
  Thermal100Thermal.prototype.getOdataId = function() {
    return this['@odata.id'];
  }

  /**
   * @param {Odata400Id} odataId
   **/
  Thermal100Thermal.prototype.setOdataId = function(odataId) {
    this['@odata.id'] = odataId;
  }
  
  /**
   * @return {Odata400Type}
   **/
  Thermal100Thermal.prototype.getOdataType = function() {
    return this['@odata.type'];
  }

  /**
   * @param {Odata400Type} odataType
   **/
  Thermal100Thermal.prototype.setOdataType = function(odataType) {
    this['@odata.type'] = odataType;
  }
  
  /**
   * @return {ResourceDescription}
   **/
  Thermal100Thermal.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {ResourceDescription} description
   **/
  Thermal100Thermal.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * get This is the definition for fans.
   * @return {[Thermal100Fan]}
   **/
  Thermal100Thermal.prototype.getFans = function() {
    return this['Fans'];
  }

  /**
   * set This is the definition for fans.
   * @param {[Thermal100Fan]} fans
   **/
  Thermal100Thermal.prototype.setFans = function(fans) {
    this['Fans'] = fans;
  }
  
  /**
   * @return {Odata400Count}
   **/
  Thermal100Thermal.prototype.getFansodataCount = function() {
    return this['Fans@odata.count'];
  }

  /**
   * @param {Odata400Count} fansodataCount
   **/
  Thermal100Thermal.prototype.setFansodataCount = function(fansodataCount) {
    this['Fans@odata.count'] = fansodataCount;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  Thermal100Thermal.prototype.getFansodataNavigationLink = function() {
    return this['Fans@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} fansodataNavigationLink
   **/
  Thermal100Thermal.prototype.setFansodataNavigationLink = function(fansodataNavigationLink) {
    this['Fans@odata.navigationLink'] = fansodataNavigationLink;
  }
  
  /**
   * @return {ResourceId}
   **/
  Thermal100Thermal.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {ResourceId} id
   **/
  Thermal100Thermal.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * @return {ResourceName}
   **/
  Thermal100Thermal.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {ResourceName} name
   **/
  Thermal100Thermal.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  Thermal100Thermal.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  Thermal100Thermal.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get This structure is used to show redundancy for fans.  The Component ids will reference the members of the redundancy groups.
   * @return {[RedundancyRedundancy]}
   **/
  Thermal100Thermal.prototype.getRedundancy = function() {
    return this['Redundancy'];
  }

  /**
   * set This structure is used to show redundancy for fans.  The Component ids will reference the members of the redundancy groups.
   * @param {[RedundancyRedundancy]} redundancy
   **/
  Thermal100Thermal.prototype.setRedundancy = function(redundancy) {
    this['Redundancy'] = redundancy;
  }
  
  /**
   * @return {Odata400Count}
   **/
  Thermal100Thermal.prototype.getRedundancyodataCount = function() {
    return this['Redundancy@odata.count'];
  }

  /**
   * @param {Odata400Count} redundancyodataCount
   **/
  Thermal100Thermal.prototype.setRedundancyodataCount = function(redundancyodataCount) {
    this['Redundancy@odata.count'] = redundancyodataCount;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  Thermal100Thermal.prototype.getRedundancyodataNavigationLink = function() {
    return this['Redundancy@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} redundancyodataNavigationLink
   **/
  Thermal100Thermal.prototype.setRedundancyodataNavigationLink = function(redundancyodataNavigationLink) {
    this['Redundancy@odata.navigationLink'] = redundancyodataNavigationLink;
  }
  
  /**
   * @return {ResourceStatus}
   **/
  Thermal100Thermal.prototype.getStatus = function() {
    return this['Status'];
  }

  /**
   * @param {ResourceStatus} status
   **/
  Thermal100Thermal.prototype.setStatus = function(status) {
    this['Status'] = status;
  }
  
  /**
   * get This is the definition for temperature sensors.
   * @return {[Thermal100Temperature]}
   **/
  Thermal100Thermal.prototype.getTemperatures = function() {
    return this['Temperatures'];
  }

  /**
   * set This is the definition for temperature sensors.
   * @param {[Thermal100Temperature]} temperatures
   **/
  Thermal100Thermal.prototype.setTemperatures = function(temperatures) {
    this['Temperatures'] = temperatures;
  }
  
  /**
   * @return {Odata400Count}
   **/
  Thermal100Thermal.prototype.getTemperaturesodataCount = function() {
    return this['Temperatures@odata.count'];
  }

  /**
   * @param {Odata400Count} temperaturesodataCount
   **/
  Thermal100Thermal.prototype.setTemperaturesodataCount = function(temperaturesodataCount) {
    this['Temperatures@odata.count'] = temperaturesodataCount;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  Thermal100Thermal.prototype.getTemperaturesodataNavigationLink = function() {
    return this['Temperatures@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} temperaturesodataNavigationLink
   **/
  Thermal100Thermal.prototype.setTemperaturesodataNavigationLink = function(temperaturesodataNavigationLink) {
    this['Temperatures@odata.navigationLink'] = temperaturesodataNavigationLink;
  }
  
  

  Thermal100Thermal.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.Thermal100Thermal = Thermal100Thermal;
  }

  return Thermal100Thermal;
  
  
}));
