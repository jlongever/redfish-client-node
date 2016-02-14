(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Odata400Context', './Odata400Count', './Odata400Id', './Odata400IdRef', './Odata400Type', './Power100PowerControl', './Power100PowerSupply', './Power100Voltage', './RedundancyRedundancy', './ResourceDescription', './ResourceId', './ResourceName', './ResourceOem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Odata400Context'), require('./Odata400Count'), require('./Odata400Id'), require('./Odata400IdRef'), require('./Odata400Type'), require('./Power100PowerControl'), require('./Power100PowerSupply'), require('./Power100Voltage'), require('./RedundancyRedundancy'), require('./ResourceDescription'), require('./ResourceId'), require('./ResourceName'), require('./ResourceOem'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Odata400Context, root.RedfishV100.Odata400Count, root.RedfishV100.Odata400Id, root.RedfishV100.Odata400IdRef, root.RedfishV100.Odata400Type, root.RedfishV100.Power100PowerControl, root.RedfishV100.Power100PowerSupply, root.RedfishV100.Power100Voltage, root.RedfishV100.RedundancyRedundancy, root.RedfishV100.ResourceDescription, root.RedfishV100.ResourceId, root.RedfishV100.ResourceName, root.RedfishV100.ResourceOem);
  }
}(this, function(module, ApiClient, Odata400Context, Odata400Count, Odata400Id, Odata400IdRef, Odata400Type, Power100PowerControl, Power100PowerSupply, Power100Voltage, RedundancyRedundancy, ResourceDescription, ResourceId, ResourceName, ResourceOem) {
  'use strict';

  
  

  /**
   * This is the schema definition for the Power Metrics.  It represents the properties for Power Consumption and Power Limiting.
   **/
  var Power100Power = function Power100Power() { 
    
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
     * This is the definition for power control function (power reading/limiting).
     * datatype: [Power100PowerControl]
     **/
    this['PowerControl'] = [];
    
    /**
     * datatype: Odata400Count
     **/
    this['PowerControl@odata.count'] = new Odata400Count();
    
    /**
     * datatype: Odata400IdRef
     **/
    this['PowerControl@odata.navigationLink'] = new Odata400IdRef();
    
    /**
     * Details of the power supplies associated with this system or device
     * datatype: [Power100PowerSupply]
     **/
    this['PowerSupplies'] = [];
    
    /**
     * datatype: Odata400Count
     **/
    this['PowerSupplies@odata.count'] = new Odata400Count();
    
    /**
     * datatype: Odata400IdRef
     **/
    this['PowerSupplies@odata.navigationLink'] = new Odata400IdRef();
    
    /**
     * Redundancy information for the power subsystem of this system or device
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
     * This is the definition for voltage sensors.
     * datatype: [Power100Voltage]
     **/
    this['Voltages'] = [];
    
    /**
     * datatype: Odata400Count
     **/
    this['Voltages@odata.count'] = new Odata400Count();
    
    /**
     * datatype: Odata400IdRef
     **/
    this['Voltages@odata.navigationLink'] = new Odata400IdRef();
    
  };

  Power100Power.prototype.constructFromObject = function(data) {
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
    
    if (data['Id']) {
      this['Id'].constructFromObject(data['Id']);
    }
    
    if (data['Name']) {
      this['Name'].constructFromObject(data['Name']);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['PowerControl']) {
      this['PowerControl'] = ApiClient.convertToType(data['PowerControl'], [Power100PowerControl]);
    }
    
    if (data['PowerControl@odata.count']) {
      this['PowerControl@odata.count'].constructFromObject(data['PowerControl@odata.count']);
    }
    
    if (data['PowerControl@odata.navigationLink']) {
      this['PowerControl@odata.navigationLink'].constructFromObject(data['PowerControl@odata.navigationLink']);
    }
    
    if (data['PowerSupplies']) {
      this['PowerSupplies'] = ApiClient.convertToType(data['PowerSupplies'], [Power100PowerSupply]);
    }
    
    if (data['PowerSupplies@odata.count']) {
      this['PowerSupplies@odata.count'].constructFromObject(data['PowerSupplies@odata.count']);
    }
    
    if (data['PowerSupplies@odata.navigationLink']) {
      this['PowerSupplies@odata.navigationLink'].constructFromObject(data['PowerSupplies@odata.navigationLink']);
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
    
    if (data['Voltages']) {
      this['Voltages'] = ApiClient.convertToType(data['Voltages'], [Power100Voltage]);
    }
    
    if (data['Voltages@odata.count']) {
      this['Voltages@odata.count'].constructFromObject(data['Voltages@odata.count']);
    }
    
    if (data['Voltages@odata.navigationLink']) {
      this['Voltages@odata.navigationLink'].constructFromObject(data['Voltages@odata.navigationLink']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Odata400Context}
   **/
  Power100Power.prototype.getOdataContext = function() {
    return this['@odata.context'];
  }

  /**
   * @param {Odata400Context} odataContext
   **/
  Power100Power.prototype.setOdataContext = function(odataContext) {
    this['@odata.context'] = odataContext;
  }
  
  /**
   * @return {Odata400Id}
   **/
  Power100Power.prototype.getOdataId = function() {
    return this['@odata.id'];
  }

  /**
   * @param {Odata400Id} odataId
   **/
  Power100Power.prototype.setOdataId = function(odataId) {
    this['@odata.id'] = odataId;
  }
  
  /**
   * @return {Odata400Type}
   **/
  Power100Power.prototype.getOdataType = function() {
    return this['@odata.type'];
  }

  /**
   * @param {Odata400Type} odataType
   **/
  Power100Power.prototype.setOdataType = function(odataType) {
    this['@odata.type'] = odataType;
  }
  
  /**
   * @return {ResourceDescription}
   **/
  Power100Power.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {ResourceDescription} description
   **/
  Power100Power.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * @return {ResourceId}
   **/
  Power100Power.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {ResourceId} id
   **/
  Power100Power.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * @return {ResourceName}
   **/
  Power100Power.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {ResourceName} name
   **/
  Power100Power.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  Power100Power.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  Power100Power.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get This is the definition for power control function (power reading/limiting).
   * @return {[Power100PowerControl]}
   **/
  Power100Power.prototype.getPowerControl = function() {
    return this['PowerControl'];
  }

  /**
   * set This is the definition for power control function (power reading/limiting).
   * @param {[Power100PowerControl]} powerControl
   **/
  Power100Power.prototype.setPowerControl = function(powerControl) {
    this['PowerControl'] = powerControl;
  }
  
  /**
   * @return {Odata400Count}
   **/
  Power100Power.prototype.getPowerControlodataCount = function() {
    return this['PowerControl@odata.count'];
  }

  /**
   * @param {Odata400Count} powerControlodataCount
   **/
  Power100Power.prototype.setPowerControlodataCount = function(powerControlodataCount) {
    this['PowerControl@odata.count'] = powerControlodataCount;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  Power100Power.prototype.getPowerControlodataNavigationLink = function() {
    return this['PowerControl@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} powerControlodataNavigationLink
   **/
  Power100Power.prototype.setPowerControlodataNavigationLink = function(powerControlodataNavigationLink) {
    this['PowerControl@odata.navigationLink'] = powerControlodataNavigationLink;
  }
  
  /**
   * get Details of the power supplies associated with this system or device
   * @return {[Power100PowerSupply]}
   **/
  Power100Power.prototype.getPowerSupplies = function() {
    return this['PowerSupplies'];
  }

  /**
   * set Details of the power supplies associated with this system or device
   * @param {[Power100PowerSupply]} powerSupplies
   **/
  Power100Power.prototype.setPowerSupplies = function(powerSupplies) {
    this['PowerSupplies'] = powerSupplies;
  }
  
  /**
   * @return {Odata400Count}
   **/
  Power100Power.prototype.getPowerSuppliesodataCount = function() {
    return this['PowerSupplies@odata.count'];
  }

  /**
   * @param {Odata400Count} powerSuppliesodataCount
   **/
  Power100Power.prototype.setPowerSuppliesodataCount = function(powerSuppliesodataCount) {
    this['PowerSupplies@odata.count'] = powerSuppliesodataCount;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  Power100Power.prototype.getPowerSuppliesodataNavigationLink = function() {
    return this['PowerSupplies@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} powerSuppliesodataNavigationLink
   **/
  Power100Power.prototype.setPowerSuppliesodataNavigationLink = function(powerSuppliesodataNavigationLink) {
    this['PowerSupplies@odata.navigationLink'] = powerSuppliesodataNavigationLink;
  }
  
  /**
   * get Redundancy information for the power subsystem of this system or device
   * @return {[RedundancyRedundancy]}
   **/
  Power100Power.prototype.getRedundancy = function() {
    return this['Redundancy'];
  }

  /**
   * set Redundancy information for the power subsystem of this system or device
   * @param {[RedundancyRedundancy]} redundancy
   **/
  Power100Power.prototype.setRedundancy = function(redundancy) {
    this['Redundancy'] = redundancy;
  }
  
  /**
   * @return {Odata400Count}
   **/
  Power100Power.prototype.getRedundancyodataCount = function() {
    return this['Redundancy@odata.count'];
  }

  /**
   * @param {Odata400Count} redundancyodataCount
   **/
  Power100Power.prototype.setRedundancyodataCount = function(redundancyodataCount) {
    this['Redundancy@odata.count'] = redundancyodataCount;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  Power100Power.prototype.getRedundancyodataNavigationLink = function() {
    return this['Redundancy@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} redundancyodataNavigationLink
   **/
  Power100Power.prototype.setRedundancyodataNavigationLink = function(redundancyodataNavigationLink) {
    this['Redundancy@odata.navigationLink'] = redundancyodataNavigationLink;
  }
  
  /**
   * get This is the definition for voltage sensors.
   * @return {[Power100Voltage]}
   **/
  Power100Power.prototype.getVoltages = function() {
    return this['Voltages'];
  }

  /**
   * set This is the definition for voltage sensors.
   * @param {[Power100Voltage]} voltages
   **/
  Power100Power.prototype.setVoltages = function(voltages) {
    this['Voltages'] = voltages;
  }
  
  /**
   * @return {Odata400Count}
   **/
  Power100Power.prototype.getVoltagesodataCount = function() {
    return this['Voltages@odata.count'];
  }

  /**
   * @param {Odata400Count} voltagesodataCount
   **/
  Power100Power.prototype.setVoltagesodataCount = function(voltagesodataCount) {
    this['Voltages@odata.count'] = voltagesodataCount;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  Power100Power.prototype.getVoltagesodataNavigationLink = function() {
    return this['Voltages@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} voltagesodataNavigationLink
   **/
  Power100Power.prototype.setVoltagesodataNavigationLink = function(voltagesodataNavigationLink) {
    this['Voltages@odata.navigationLink'] = voltagesodataNavigationLink;
  }
  
  

  Power100Power.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.Power100Power = Power100Power;
  }

  return Power100Power;
  
  
}));
