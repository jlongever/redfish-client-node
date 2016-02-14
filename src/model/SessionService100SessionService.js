(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Odata400Context', './Odata400Id', './Odata400Type', './ResourceDescription', './ResourceId', './ResourceName', './ResourceOem', './ResourceStatus', './SessionCollectionSessionCollection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Odata400Context'), require('./Odata400Id'), require('./Odata400Type'), require('./ResourceDescription'), require('./ResourceId'), require('./ResourceName'), require('./ResourceOem'), require('./ResourceStatus'), require('./SessionCollectionSessionCollection'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Odata400Context, root.RedfishV100.Odata400Id, root.RedfishV100.Odata400Type, root.RedfishV100.ResourceDescription, root.RedfishV100.ResourceId, root.RedfishV100.ResourceName, root.RedfishV100.ResourceOem, root.RedfishV100.ResourceStatus, root.RedfishV100.SessionCollectionSessionCollection);
  }
}(this, function(module, ApiClient, Odata400Context, Odata400Id, Odata400Type, ResourceDescription, ResourceId, ResourceName, ResourceOem, ResourceStatus, SessionCollectionSessionCollection) {
  'use strict';

  
  

  /**
   * This is the schema definition for the Session Service.  It represents the properties for the service itself and has links to the actual list of sessions.
   **/
  var SessionService100SessionService = function SessionService100SessionService() { 
    
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
     * This is the number of seconds of inactivity that a session may have before the session service closes the session due to inactivity.
     * datatype: Number
     * minimum: 30.0
     * maximum: 86400.0
     **/
    this['SessionTimeout'] = null;
    
    /**
     * Link to a collection of Sessions
     * datatype: SessionCollectionSessionCollection
     **/
    this['Sessions'] = new SessionCollectionSessionCollection();
    
    /**
     * datatype: ResourceStatus
     **/
    this['Status'] = new ResourceStatus();
    
  };

  SessionService100SessionService.prototype.constructFromObject = function(data) {
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
    
    if (data['SessionTimeout']) {
      this['SessionTimeout'] = ApiClient.convertToType(data['SessionTimeout'], 'Number');
    }
    
    if (data['Sessions']) {
      this['Sessions'].constructFromObject(data['Sessions']);
    }
    
    if (data['Status']) {
      this['Status'].constructFromObject(data['Status']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Odata400Context}
   **/
  SessionService100SessionService.prototype.getOdataContext = function() {
    return this['@odata.context'];
  }

  /**
   * @param {Odata400Context} odataContext
   **/
  SessionService100SessionService.prototype.setOdataContext = function(odataContext) {
    this['@odata.context'] = odataContext;
  }
  
  /**
   * @return {Odata400Id}
   **/
  SessionService100SessionService.prototype.getOdataId = function() {
    return this['@odata.id'];
  }

  /**
   * @param {Odata400Id} odataId
   **/
  SessionService100SessionService.prototype.setOdataId = function(odataId) {
    this['@odata.id'] = odataId;
  }
  
  /**
   * @return {Odata400Type}
   **/
  SessionService100SessionService.prototype.getOdataType = function() {
    return this['@odata.type'];
  }

  /**
   * @param {Odata400Type} odataType
   **/
  SessionService100SessionService.prototype.setOdataType = function(odataType) {
    this['@odata.type'] = odataType;
  }
  
  /**
   * @return {ResourceDescription}
   **/
  SessionService100SessionService.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {ResourceDescription} description
   **/
  SessionService100SessionService.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * @return {ResourceId}
   **/
  SessionService100SessionService.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {ResourceId} id
   **/
  SessionService100SessionService.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * @return {ResourceName}
   **/
  SessionService100SessionService.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {ResourceName} name
   **/
  SessionService100SessionService.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  SessionService100SessionService.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  SessionService100SessionService.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get This is the number of seconds of inactivity that a session may have before the session service closes the session due to inactivity.
   * minimum: 30.0
   * maximum: 86400.0
   * @return {Number}
   **/
  SessionService100SessionService.prototype.getSessionTimeout = function() {
    return this['SessionTimeout'];
  }

  /**
   * set This is the number of seconds of inactivity that a session may have before the session service closes the session due to inactivity.
   * @param {Number} sessionTimeout
   **/
  SessionService100SessionService.prototype.setSessionTimeout = function(sessionTimeout) {
    this['SessionTimeout'] = sessionTimeout;
  }
  
  /**
   * get Link to a collection of Sessions
   * @return {SessionCollectionSessionCollection}
   **/
  SessionService100SessionService.prototype.getSessions = function() {
    return this['Sessions'];
  }

  /**
   * set Link to a collection of Sessions
   * @param {SessionCollectionSessionCollection} sessions
   **/
  SessionService100SessionService.prototype.setSessions = function(sessions) {
    this['Sessions'] = sessions;
  }
  
  /**
   * @return {ResourceStatus}
   **/
  SessionService100SessionService.prototype.getStatus = function() {
    return this['Status'];
  }

  /**
   * @param {ResourceStatus} status
   **/
  SessionService100SessionService.prototype.setStatus = function(status) {
    this['Status'] = status;
  }
  
  

  SessionService100SessionService.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.SessionService100SessionService = SessionService100SessionService;
  }

  return SessionService100SessionService;
  
  
}));
