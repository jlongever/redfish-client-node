(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Chassis100ChassisActions', './Chassis100ChassisLinks', './Chassis100ChassisType', './Chassis100IndicatorLED', './LogServiceCollectionLogServiceCollection', './Odata400Context', './Odata400Id', './Odata400Type', './PowerPower', './ResourceDescription', './ResourceId', './ResourceName', './ResourceOem', './ResourceStatus', './ThermalThermal'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Chassis100ChassisActions'), require('./Chassis100ChassisLinks'), require('./Chassis100ChassisType'), require('./Chassis100IndicatorLED'), require('./LogServiceCollectionLogServiceCollection'), require('./Odata400Context'), require('./Odata400Id'), require('./Odata400Type'), require('./PowerPower'), require('./ResourceDescription'), require('./ResourceId'), require('./ResourceName'), require('./ResourceOem'), require('./ResourceStatus'), require('./ThermalThermal'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Chassis100ChassisActions, root.RedfishV100.Chassis100ChassisLinks, root.RedfishV100.Chassis100ChassisType, root.RedfishV100.Chassis100IndicatorLED, root.RedfishV100.LogServiceCollectionLogServiceCollection, root.RedfishV100.Odata400Context, root.RedfishV100.Odata400Id, root.RedfishV100.Odata400Type, root.RedfishV100.PowerPower, root.RedfishV100.ResourceDescription, root.RedfishV100.ResourceId, root.RedfishV100.ResourceName, root.RedfishV100.ResourceOem, root.RedfishV100.ResourceStatus, root.RedfishV100.ThermalThermal);
  }
}(this, function(module, ApiClient, Chassis100ChassisActions, Chassis100ChassisLinks, Chassis100ChassisType, Chassis100IndicatorLED, LogServiceCollectionLogServiceCollection, Odata400Context, Odata400Id, Odata400Type, PowerPower, ResourceDescription, ResourceId, ResourceName, ResourceOem, ResourceStatus, ThermalThermal) {
  'use strict';

  
  

  /**
   * This is the schema definition for the Chassis resource.  It represents the properties for physical components for any system.  This one object is intended to represent racks, rackmount servers, blades, standalone, modular systems, enclosures, and all other containers.  The non-cpu/device centric parts of the schema are all accessed either directly or indirectly through this resource.
   **/
  var Chassis100Chassis = function Chassis100Chassis(ChassisType) { 
    
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
     * datatype: Chassis100ChassisActions
     **/
    this['Actions'] = new Chassis100ChassisActions();
    
    /**
     * This property indicates the type of physical form factor of this resource.
     * datatype: Chassis100ChassisType
     * required
     **/
    this['ChassisType'] = chassisType;
    
    /**
     * datatype: ResourceDescription
     **/
    this['Description'] = new ResourceDescription();
    
    /**
     * datatype: ResourceId
     **/
    this['Id'] = new ResourceId();
    
    /**
     * The state of the indicator LED, used to identify the chassis.
     * datatype: Chassis100IndicatorLED
     **/
    this['IndicatorLED'] = new Chassis100IndicatorLED();
    
    /**
     * datatype: Chassis100ChassisLinks
     **/
    this['Links'] = new Chassis100ChassisLinks();
    
    /**
     * A reference to the logs for this chassis.
     * datatype: LogServiceCollectionLogServiceCollection
     **/
    this['LogServices'] = new LogServiceCollectionLogServiceCollection();
    
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
     * A reference to the power properties (power supplies, power policies, sensors) for this chassis.
     * datatype: PowerPower
     **/
    this['Power'] = new PowerPower();
    
    /**
     * datatype: ResourceStatus
     **/
    this['Status'] = new ResourceStatus();
    
    /**
     * A reference to the thermal properties (fans, cooling, sensors) for this chassis.
     * datatype: ThermalThermal
     **/
    this['Thermal'] = new ThermalThermal();
    
  };

  Chassis100Chassis.prototype.constructFromObject = function(data) {
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
    
    if (data['Actions']) {
      this['Actions'].constructFromObject(data['Actions']);
    }
    
    if (data['ChassisType']) {
      this['ChassisType'].constructFromObject(data['ChassisType']);
    }
    
    if (data['Description']) {
      this['Description'].constructFromObject(data['Description']);
    }
    
    if (data['Id']) {
      this['Id'].constructFromObject(data['Id']);
    }
    
    if (data['IndicatorLED']) {
      this['IndicatorLED'].constructFromObject(data['IndicatorLED']);
    }
    
    if (data['Links']) {
      this['Links'].constructFromObject(data['Links']);
    }
    
    if (data['LogServices']) {
      this['LogServices'].constructFromObject(data['LogServices']);
    }
    
    if (data['Name']) {
      this['Name'].constructFromObject(data['Name']);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['Power']) {
      this['Power'].constructFromObject(data['Power']);
    }
    
    if (data['Status']) {
      this['Status'].constructFromObject(data['Status']);
    }
    
    if (data['Thermal']) {
      this['Thermal'].constructFromObject(data['Thermal']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Odata400Context}
   **/
  Chassis100Chassis.prototype.getOdataContext = function() {
    return this['@odata.context'];
  }

  /**
   * @param {Odata400Context} odataContext
   **/
  Chassis100Chassis.prototype.setOdataContext = function(odataContext) {
    this['@odata.context'] = odataContext;
  }
  
  /**
   * @return {Odata400Id}
   **/
  Chassis100Chassis.prototype.getOdataId = function() {
    return this['@odata.id'];
  }

  /**
   * @param {Odata400Id} odataId
   **/
  Chassis100Chassis.prototype.setOdataId = function(odataId) {
    this['@odata.id'] = odataId;
  }
  
  /**
   * @return {Odata400Type}
   **/
  Chassis100Chassis.prototype.getOdataType = function() {
    return this['@odata.type'];
  }

  /**
   * @param {Odata400Type} odataType
   **/
  Chassis100Chassis.prototype.setOdataType = function(odataType) {
    this['@odata.type'] = odataType;
  }
  
  /**
   * @return {Chassis100ChassisActions}
   **/
  Chassis100Chassis.prototype.getActions = function() {
    return this['Actions'];
  }

  /**
   * @param {Chassis100ChassisActions} actions
   **/
  Chassis100Chassis.prototype.setActions = function(actions) {
    this['Actions'] = actions;
  }
  
  /**
   * get This property indicates the type of physical form factor of this resource.
   * @return {Chassis100ChassisType}
   **/
  Chassis100Chassis.prototype.getChassisType = function() {
    return this['ChassisType'];
  }

  /**
   * set This property indicates the type of physical form factor of this resource.
   * @param {Chassis100ChassisType} chassisType
   **/
  Chassis100Chassis.prototype.setChassisType = function(chassisType) {
    this['ChassisType'] = chassisType;
  }
  
  /**
   * @return {ResourceDescription}
   **/
  Chassis100Chassis.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {ResourceDescription} description
   **/
  Chassis100Chassis.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * @return {ResourceId}
   **/
  Chassis100Chassis.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {ResourceId} id
   **/
  Chassis100Chassis.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * get The state of the indicator LED, used to identify the chassis.
   * @return {Chassis100IndicatorLED}
   **/
  Chassis100Chassis.prototype.getIndicatorLED = function() {
    return this['IndicatorLED'];
  }

  /**
   * set The state of the indicator LED, used to identify the chassis.
   * @param {Chassis100IndicatorLED} indicatorLED
   **/
  Chassis100Chassis.prototype.setIndicatorLED = function(indicatorLED) {
    this['IndicatorLED'] = indicatorLED;
  }
  
  /**
   * @return {Chassis100ChassisLinks}
   **/
  Chassis100Chassis.prototype.getLinks = function() {
    return this['Links'];
  }

  /**
   * @param {Chassis100ChassisLinks} links
   **/
  Chassis100Chassis.prototype.setLinks = function(links) {
    this['Links'] = links;
  }
  
  /**
   * get A reference to the logs for this chassis.
   * @return {LogServiceCollectionLogServiceCollection}
   **/
  Chassis100Chassis.prototype.getLogServices = function() {
    return this['LogServices'];
  }

  /**
   * set A reference to the logs for this chassis.
   * @param {LogServiceCollectionLogServiceCollection} logServices
   **/
  Chassis100Chassis.prototype.setLogServices = function(logServices) {
    this['LogServices'] = logServices;
  }
  
  /**
   * @return {ResourceName}
   **/
  Chassis100Chassis.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {ResourceName} name
   **/
  Chassis100Chassis.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  Chassis100Chassis.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  Chassis100Chassis.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get A reference to the power properties (power supplies, power policies, sensors) for this chassis.
   * @return {PowerPower}
   **/
  Chassis100Chassis.prototype.getPower = function() {
    return this['Power'];
  }

  /**
   * set A reference to the power properties (power supplies, power policies, sensors) for this chassis.
   * @param {PowerPower} power
   **/
  Chassis100Chassis.prototype.setPower = function(power) {
    this['Power'] = power;
  }
  
  /**
   * @return {ResourceStatus}
   **/
  Chassis100Chassis.prototype.getStatus = function() {
    return this['Status'];
  }

  /**
   * @param {ResourceStatus} status
   **/
  Chassis100Chassis.prototype.setStatus = function(status) {
    this['Status'] = status;
  }
  
  /**
   * get A reference to the thermal properties (fans, cooling, sensors) for this chassis.
   * @return {ThermalThermal}
   **/
  Chassis100Chassis.prototype.getThermal = function() {
    return this['Thermal'];
  }

  /**
   * set A reference to the thermal properties (fans, cooling, sensors) for this chassis.
   * @param {ThermalThermal} thermal
   **/
  Chassis100Chassis.prototype.setThermal = function(thermal) {
    this['Thermal'] = thermal;
  }
  
  

  Chassis100Chassis.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.Chassis100Chassis = Chassis100Chassis;
  }

  return Chassis100Chassis;
  
  
}));
