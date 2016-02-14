(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Odata400Context', './Odata400Id', './Odata400Type', './ResourceDescription', './ResourceId', './ResourceName', './ResourceOem', './ResourceStatus', './SimpleStorage100Device'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Odata400Context'), require('./Odata400Id'), require('./Odata400Type'), require('./ResourceDescription'), require('./ResourceId'), require('./ResourceName'), require('./ResourceOem'), require('./ResourceStatus'), require('./SimpleStorage100Device'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Odata400Context, root.RedfishV100.Odata400Id, root.RedfishV100.Odata400Type, root.RedfishV100.ResourceDescription, root.RedfishV100.ResourceId, root.RedfishV100.ResourceName, root.RedfishV100.ResourceOem, root.RedfishV100.ResourceStatus, root.RedfishV100.SimpleStorage100Device);
  }
}(this, function(module, ApiClient, Odata400Context, Odata400Id, Odata400Type, ResourceDescription, ResourceId, ResourceName, ResourceOem, ResourceStatus, SimpleStorage100Device) {
  'use strict';

  
  

  /**
   * This is the schema definition for the Simple Storage resource.  It represents the properties of a storage controller and its directly-attached devices.
   **/
  var SimpleStorage100SimpleStorage = function SimpleStorage100SimpleStorage() { 
    
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
     * The storage devices associated with this resource
     * datatype: [SimpleStorage100Device]
     **/
    this['Devices'] = [];
    
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
     * datatype: ResourceStatus
     **/
    this['Status'] = new ResourceStatus();
    
  };

  SimpleStorage100SimpleStorage.prototype.constructFromObject = function(data) {
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
    
    if (data['Devices']) {
      this['Devices'] = ApiClient.convertToType(data['Devices'], [SimpleStorage100Device]);
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
    
    if (data['Status']) {
      this['Status'].constructFromObject(data['Status']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Odata400Context}
   **/
  SimpleStorage100SimpleStorage.prototype.getOdataContext = function() {
    return this['@odata.context'];
  }

  /**
   * @param {Odata400Context} odataContext
   **/
  SimpleStorage100SimpleStorage.prototype.setOdataContext = function(odataContext) {
    this['@odata.context'] = odataContext;
  }
  
  /**
   * @return {Odata400Id}
   **/
  SimpleStorage100SimpleStorage.prototype.getOdataId = function() {
    return this['@odata.id'];
  }

  /**
   * @param {Odata400Id} odataId
   **/
  SimpleStorage100SimpleStorage.prototype.setOdataId = function(odataId) {
    this['@odata.id'] = odataId;
  }
  
  /**
   * @return {Odata400Type}
   **/
  SimpleStorage100SimpleStorage.prototype.getOdataType = function() {
    return this['@odata.type'];
  }

  /**
   * @param {Odata400Type} odataType
   **/
  SimpleStorage100SimpleStorage.prototype.setOdataType = function(odataType) {
    this['@odata.type'] = odataType;
  }
  
  /**
   * @return {ResourceDescription}
   **/
  SimpleStorage100SimpleStorage.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {ResourceDescription} description
   **/
  SimpleStorage100SimpleStorage.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * get The storage devices associated with this resource
   * @return {[SimpleStorage100Device]}
   **/
  SimpleStorage100SimpleStorage.prototype.getDevices = function() {
    return this['Devices'];
  }

  /**
   * set The storage devices associated with this resource
   * @param {[SimpleStorage100Device]} devices
   **/
  SimpleStorage100SimpleStorage.prototype.setDevices = function(devices) {
    this['Devices'] = devices;
  }
  
  /**
   * @return {ResourceId}
   **/
  SimpleStorage100SimpleStorage.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {ResourceId} id
   **/
  SimpleStorage100SimpleStorage.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * @return {ResourceName}
   **/
  SimpleStorage100SimpleStorage.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {ResourceName} name
   **/
  SimpleStorage100SimpleStorage.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  SimpleStorage100SimpleStorage.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  SimpleStorage100SimpleStorage.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * @return {ResourceStatus}
   **/
  SimpleStorage100SimpleStorage.prototype.getStatus = function() {
    return this['Status'];
  }

  /**
   * @param {ResourceStatus} status
   **/
  SimpleStorage100SimpleStorage.prototype.setStatus = function(status) {
    this['Status'] = status;
  }
  
  

  SimpleStorage100SimpleStorage.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.SimpleStorage100SimpleStorage = SimpleStorage100SimpleStorage;
  }

  return SimpleStorage100SimpleStorage;
  
  
}));
