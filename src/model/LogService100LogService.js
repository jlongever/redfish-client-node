(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './LogEntryCollectionLogEntryCollection', './LogService100LogServiceActions', './LogService100OverWritePolicy', './Odata400Context', './Odata400Id', './Odata400Type', './ResourceDescription', './ResourceId', './ResourceName', './ResourceOem', './ResourceStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./LogEntryCollectionLogEntryCollection'), require('./LogService100LogServiceActions'), require('./LogService100OverWritePolicy'), require('./Odata400Context'), require('./Odata400Id'), require('./Odata400Type'), require('./ResourceDescription'), require('./ResourceId'), require('./ResourceName'), require('./ResourceOem'), require('./ResourceStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.LogEntryCollectionLogEntryCollection, root.RedfishV100.LogService100LogServiceActions, root.RedfishV100.LogService100OverWritePolicy, root.RedfishV100.Odata400Context, root.RedfishV100.Odata400Id, root.RedfishV100.Odata400Type, root.RedfishV100.ResourceDescription, root.RedfishV100.ResourceId, root.RedfishV100.ResourceName, root.RedfishV100.ResourceOem, root.RedfishV100.ResourceStatus);
  }
}(this, function(module, ApiClient, LogEntryCollectionLogEntryCollection, LogService100LogServiceActions, LogService100OverWritePolicy, Odata400Context, Odata400Id, Odata400Type, ResourceDescription, ResourceId, ResourceName, ResourceOem, ResourceStatus) {
  'use strict';

  
  

  /**
   * This resource represents the log service for the resource or service to which it is associated.
   **/
  var LogService100LogService = function LogService100LogService() { 
    
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
     * datatype: LogService100LogServiceActions
     **/
    this['Actions'] = new LogService100LogServiceActions();
    
    /**
     * datatype: ResourceDescription
     **/
    this['Description'] = new ResourceDescription();
    
    /**
     * References to the log entry collection.
     * datatype: LogEntryCollectionLogEntryCollection
     **/
    this['Entries'] = new LogEntryCollectionLogEntryCollection();
    
    /**
     * datatype: ResourceId
     **/
    this['Id'] = new ResourceId();
    
    /**
     * The maximum number of log entries this service can have.
     * datatype: Number
     * minimum: 0.0
     **/
    this['MaxNumberOfRecords'] = null;
    
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
     * The overwrite policy for this service that takes place when the log is full.
     * datatype: LogService100OverWritePolicy
     **/
    this['OverWritePolicy'] = new LogService100OverWritePolicy();
    
    /**
     * datatype: ResourceStatus
     **/
    this['Status'] = new ResourceStatus();
    
  };

  LogService100LogService.prototype.constructFromObject = function(data) {
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
    
    if (data['Description']) {
      this['Description'].constructFromObject(data['Description']);
    }
    
    if (data['Entries']) {
      this['Entries'].constructFromObject(data['Entries']);
    }
    
    if (data['Id']) {
      this['Id'].constructFromObject(data['Id']);
    }
    
    if (data['MaxNumberOfRecords']) {
      this['MaxNumberOfRecords'] = ApiClient.convertToType(data['MaxNumberOfRecords'], 'Number');
    }
    
    if (data['Name']) {
      this['Name'].constructFromObject(data['Name']);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['OverWritePolicy']) {
      this['OverWritePolicy'].constructFromObject(data['OverWritePolicy']);
    }
    
    if (data['Status']) {
      this['Status'].constructFromObject(data['Status']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Odata400Context}
   **/
  LogService100LogService.prototype.getOdataContext = function() {
    return this['@odata.context'];
  }

  /**
   * @param {Odata400Context} odataContext
   **/
  LogService100LogService.prototype.setOdataContext = function(odataContext) {
    this['@odata.context'] = odataContext;
  }
  
  /**
   * @return {Odata400Id}
   **/
  LogService100LogService.prototype.getOdataId = function() {
    return this['@odata.id'];
  }

  /**
   * @param {Odata400Id} odataId
   **/
  LogService100LogService.prototype.setOdataId = function(odataId) {
    this['@odata.id'] = odataId;
  }
  
  /**
   * @return {Odata400Type}
   **/
  LogService100LogService.prototype.getOdataType = function() {
    return this['@odata.type'];
  }

  /**
   * @param {Odata400Type} odataType
   **/
  LogService100LogService.prototype.setOdataType = function(odataType) {
    this['@odata.type'] = odataType;
  }
  
  /**
   * @return {LogService100LogServiceActions}
   **/
  LogService100LogService.prototype.getActions = function() {
    return this['Actions'];
  }

  /**
   * @param {LogService100LogServiceActions} actions
   **/
  LogService100LogService.prototype.setActions = function(actions) {
    this['Actions'] = actions;
  }
  
  /**
   * @return {ResourceDescription}
   **/
  LogService100LogService.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {ResourceDescription} description
   **/
  LogService100LogService.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * get References to the log entry collection.
   * @return {LogEntryCollectionLogEntryCollection}
   **/
  LogService100LogService.prototype.getEntries = function() {
    return this['Entries'];
  }

  /**
   * set References to the log entry collection.
   * @param {LogEntryCollectionLogEntryCollection} entries
   **/
  LogService100LogService.prototype.setEntries = function(entries) {
    this['Entries'] = entries;
  }
  
  /**
   * @return {ResourceId}
   **/
  LogService100LogService.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {ResourceId} id
   **/
  LogService100LogService.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * get The maximum number of log entries this service can have.
   * minimum: 0.0
   * @return {Number}
   **/
  LogService100LogService.prototype.getMaxNumberOfRecords = function() {
    return this['MaxNumberOfRecords'];
  }

  /**
   * set The maximum number of log entries this service can have.
   * @param {Number} maxNumberOfRecords
   **/
  LogService100LogService.prototype.setMaxNumberOfRecords = function(maxNumberOfRecords) {
    this['MaxNumberOfRecords'] = maxNumberOfRecords;
  }
  
  /**
   * @return {ResourceName}
   **/
  LogService100LogService.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {ResourceName} name
   **/
  LogService100LogService.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  LogService100LogService.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  LogService100LogService.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get The overwrite policy for this service that takes place when the log is full.
   * @return {LogService100OverWritePolicy}
   **/
  LogService100LogService.prototype.getOverWritePolicy = function() {
    return this['OverWritePolicy'];
  }

  /**
   * set The overwrite policy for this service that takes place when the log is full.
   * @param {LogService100OverWritePolicy} overWritePolicy
   **/
  LogService100LogService.prototype.setOverWritePolicy = function(overWritePolicy) {
    this['OverWritePolicy'] = overWritePolicy;
  }
  
  /**
   * @return {ResourceStatus}
   **/
  LogService100LogService.prototype.getStatus = function() {
    return this['Status'];
  }

  /**
   * @param {ResourceStatus} status
   **/
  LogService100LogService.prototype.setStatus = function(status) {
    this['Status'] = status;
  }
  
  

  LogService100LogService.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.LogService100LogService = LogService100LogService;
  }

  return LogService100LogService;
  
  
}));
