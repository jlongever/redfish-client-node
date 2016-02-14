(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './AccountServiceAccountService', './Odata400Context', './Odata400Id', './Odata400IdRef', './Odata400Type', './ResourceDescription', './ResourceId', './ResourceName', './ResourceOem', './ResourceUUID', './ServiceRoot100ServiceRootLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./AccountServiceAccountService'), require('./Odata400Context'), require('./Odata400Id'), require('./Odata400IdRef'), require('./Odata400Type'), require('./ResourceDescription'), require('./ResourceId'), require('./ResourceName'), require('./ResourceOem'), require('./ResourceUUID'), require('./ServiceRoot100ServiceRootLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.AccountServiceAccountService, root.RedfishV100.Odata400Context, root.RedfishV100.Odata400Id, root.RedfishV100.Odata400IdRef, root.RedfishV100.Odata400Type, root.RedfishV100.ResourceDescription, root.RedfishV100.ResourceId, root.RedfishV100.ResourceName, root.RedfishV100.ResourceOem, root.RedfishV100.ResourceUUID, root.RedfishV100.ServiceRoot100ServiceRootLinks);
  }
}(this, function(module, ApiClient, AccountServiceAccountService, Odata400Context, Odata400Id, Odata400IdRef, Odata400Type, ResourceDescription, ResourceId, ResourceName, ResourceOem, ResourceUUID, ServiceRoot100ServiceRootLinks) {
  'use strict';

  
  

  /**
   * This object represents the root Redfish service.
   **/
  var ServiceRoot100ServiceRoot = function ServiceRoot100ServiceRoot() { 
    
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
     * This is a link to the Account Service.
     * datatype: AccountServiceAccountService
     **/
    this['AccountService'] = new AccountServiceAccountService();
    
    /**
     * This is a link to a collection of Chassis.
     * datatype: Odata400IdRef
     **/
    this['Chassis'] = new Odata400IdRef();
    
    /**
     * datatype: ResourceDescription
     **/
    this['Description'] = new ResourceDescription();
    
    /**
     * This is a link to the EventService.
     * datatype: Odata400IdRef
     **/
    this['EventService'] = new Odata400IdRef();
    
    /**
     * datatype: ResourceId
     **/
    this['Id'] = new ResourceId();
    
    /**
     * This is a link to a collection of Json-Schema files.
     * datatype: Odata400IdRef
     **/
    this['JsonSchemas'] = new Odata400IdRef();
    
    /**
     * datatype: ServiceRoot100ServiceRootLinks
     **/
    this['Links'] = new ServiceRoot100ServiceRootLinks();
    
    /**
     * This is a link to a collection of Managers.
     * datatype: Odata400IdRef
     **/
    this['Managers'] = new Odata400IdRef();
    
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
     * The version of the Redfish service
     * datatype: String
     **/
    this['RedfishVersion'] = null;
    
    /**
     * This is a link to a collection of Registries.
     * datatype: Odata400IdRef
     **/
    this['Registries'] = new Odata400IdRef();
    
    /**
     * This is a link to the Sessions Service.
     * datatype: Odata400IdRef
     **/
    this['SessionService'] = new Odata400IdRef();
    
    /**
     * This is a link to a collection of Systems.
     * datatype: Odata400IdRef
     **/
    this['Systems'] = new Odata400IdRef();
    
    /**
     * This is a link to the Task Service.
     * datatype: Odata400IdRef
     **/
    this['Tasks'] = new Odata400IdRef();
    
    /**
     * Unique identifier for a service instance. When SSDP is used, this value should be an exact match of the UUID value returned in a 200OK from an SSDP M-SEARCH request during discovery.
     * datatype: ResourceUUID
     **/
    this['UUID'] = new ResourceUUID();
    
  };

  ServiceRoot100ServiceRoot.prototype.constructFromObject = function(data) {
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
    
    if (data['AccountService']) {
      this['AccountService'].constructFromObject(data['AccountService']);
    }
    
    if (data['Chassis']) {
      this['Chassis'].constructFromObject(data['Chassis']);
    }
    
    if (data['Description']) {
      this['Description'].constructFromObject(data['Description']);
    }
    
    if (data['EventService']) {
      this['EventService'].constructFromObject(data['EventService']);
    }
    
    if (data['Id']) {
      this['Id'].constructFromObject(data['Id']);
    }
    
    if (data['JsonSchemas']) {
      this['JsonSchemas'].constructFromObject(data['JsonSchemas']);
    }
    
    if (data['Links']) {
      this['Links'].constructFromObject(data['Links']);
    }
    
    if (data['Managers']) {
      this['Managers'].constructFromObject(data['Managers']);
    }
    
    if (data['Name']) {
      this['Name'].constructFromObject(data['Name']);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['RedfishVersion']) {
      this['RedfishVersion'] = ApiClient.convertToType(data['RedfishVersion'], 'String');
    }
    
    if (data['Registries']) {
      this['Registries'].constructFromObject(data['Registries']);
    }
    
    if (data['SessionService']) {
      this['SessionService'].constructFromObject(data['SessionService']);
    }
    
    if (data['Systems']) {
      this['Systems'].constructFromObject(data['Systems']);
    }
    
    if (data['Tasks']) {
      this['Tasks'].constructFromObject(data['Tasks']);
    }
    
    if (data['UUID']) {
      this['UUID'].constructFromObject(data['UUID']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Odata400Context}
   **/
  ServiceRoot100ServiceRoot.prototype.getOdataContext = function() {
    return this['@odata.context'];
  }

  /**
   * @param {Odata400Context} odataContext
   **/
  ServiceRoot100ServiceRoot.prototype.setOdataContext = function(odataContext) {
    this['@odata.context'] = odataContext;
  }
  
  /**
   * @return {Odata400Id}
   **/
  ServiceRoot100ServiceRoot.prototype.getOdataId = function() {
    return this['@odata.id'];
  }

  /**
   * @param {Odata400Id} odataId
   **/
  ServiceRoot100ServiceRoot.prototype.setOdataId = function(odataId) {
    this['@odata.id'] = odataId;
  }
  
  /**
   * @return {Odata400Type}
   **/
  ServiceRoot100ServiceRoot.prototype.getOdataType = function() {
    return this['@odata.type'];
  }

  /**
   * @param {Odata400Type} odataType
   **/
  ServiceRoot100ServiceRoot.prototype.setOdataType = function(odataType) {
    this['@odata.type'] = odataType;
  }
  
  /**
   * get This is a link to the Account Service.
   * @return {AccountServiceAccountService}
   **/
  ServiceRoot100ServiceRoot.prototype.getAccountService = function() {
    return this['AccountService'];
  }

  /**
   * set This is a link to the Account Service.
   * @param {AccountServiceAccountService} accountService
   **/
  ServiceRoot100ServiceRoot.prototype.setAccountService = function(accountService) {
    this['AccountService'] = accountService;
  }
  
  /**
   * get This is a link to a collection of Chassis.
   * @return {Odata400IdRef}
   **/
  ServiceRoot100ServiceRoot.prototype.getChassis = function() {
    return this['Chassis'];
  }

  /**
   * set This is a link to a collection of Chassis.
   * @param {Odata400IdRef} chassis
   **/
  ServiceRoot100ServiceRoot.prototype.setChassis = function(chassis) {
    this['Chassis'] = chassis;
  }
  
  /**
   * @return {ResourceDescription}
   **/
  ServiceRoot100ServiceRoot.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {ResourceDescription} description
   **/
  ServiceRoot100ServiceRoot.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * get This is a link to the EventService.
   * @return {Odata400IdRef}
   **/
  ServiceRoot100ServiceRoot.prototype.getEventService = function() {
    return this['EventService'];
  }

  /**
   * set This is a link to the EventService.
   * @param {Odata400IdRef} eventService
   **/
  ServiceRoot100ServiceRoot.prototype.setEventService = function(eventService) {
    this['EventService'] = eventService;
  }
  
  /**
   * @return {ResourceId}
   **/
  ServiceRoot100ServiceRoot.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {ResourceId} id
   **/
  ServiceRoot100ServiceRoot.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * get This is a link to a collection of Json-Schema files.
   * @return {Odata400IdRef}
   **/
  ServiceRoot100ServiceRoot.prototype.getJsonSchemas = function() {
    return this['JsonSchemas'];
  }

  /**
   * set This is a link to a collection of Json-Schema files.
   * @param {Odata400IdRef} jsonSchemas
   **/
  ServiceRoot100ServiceRoot.prototype.setJsonSchemas = function(jsonSchemas) {
    this['JsonSchemas'] = jsonSchemas;
  }
  
  /**
   * @return {ServiceRoot100ServiceRootLinks}
   **/
  ServiceRoot100ServiceRoot.prototype.getLinks = function() {
    return this['Links'];
  }

  /**
   * @param {ServiceRoot100ServiceRootLinks} links
   **/
  ServiceRoot100ServiceRoot.prototype.setLinks = function(links) {
    this['Links'] = links;
  }
  
  /**
   * get This is a link to a collection of Managers.
   * @return {Odata400IdRef}
   **/
  ServiceRoot100ServiceRoot.prototype.getManagers = function() {
    return this['Managers'];
  }

  /**
   * set This is a link to a collection of Managers.
   * @param {Odata400IdRef} managers
   **/
  ServiceRoot100ServiceRoot.prototype.setManagers = function(managers) {
    this['Managers'] = managers;
  }
  
  /**
   * @return {ResourceName}
   **/
  ServiceRoot100ServiceRoot.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {ResourceName} name
   **/
  ServiceRoot100ServiceRoot.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  ServiceRoot100ServiceRoot.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  ServiceRoot100ServiceRoot.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get The version of the Redfish service
   * @return {String}
   **/
  ServiceRoot100ServiceRoot.prototype.getRedfishVersion = function() {
    return this['RedfishVersion'];
  }

  /**
   * set The version of the Redfish service
   * @param {String} redfishVersion
   **/
  ServiceRoot100ServiceRoot.prototype.setRedfishVersion = function(redfishVersion) {
    this['RedfishVersion'] = redfishVersion;
  }
  
  /**
   * get This is a link to a collection of Registries.
   * @return {Odata400IdRef}
   **/
  ServiceRoot100ServiceRoot.prototype.getRegistries = function() {
    return this['Registries'];
  }

  /**
   * set This is a link to a collection of Registries.
   * @param {Odata400IdRef} registries
   **/
  ServiceRoot100ServiceRoot.prototype.setRegistries = function(registries) {
    this['Registries'] = registries;
  }
  
  /**
   * get This is a link to the Sessions Service.
   * @return {Odata400IdRef}
   **/
  ServiceRoot100ServiceRoot.prototype.getSessionService = function() {
    return this['SessionService'];
  }

  /**
   * set This is a link to the Sessions Service.
   * @param {Odata400IdRef} sessionService
   **/
  ServiceRoot100ServiceRoot.prototype.setSessionService = function(sessionService) {
    this['SessionService'] = sessionService;
  }
  
  /**
   * get This is a link to a collection of Systems.
   * @return {Odata400IdRef}
   **/
  ServiceRoot100ServiceRoot.prototype.getSystems = function() {
    return this['Systems'];
  }

  /**
   * set This is a link to a collection of Systems.
   * @param {Odata400IdRef} systems
   **/
  ServiceRoot100ServiceRoot.prototype.setSystems = function(systems) {
    this['Systems'] = systems;
  }
  
  /**
   * get This is a link to the Task Service.
   * @return {Odata400IdRef}
   **/
  ServiceRoot100ServiceRoot.prototype.getTasks = function() {
    return this['Tasks'];
  }

  /**
   * set This is a link to the Task Service.
   * @param {Odata400IdRef} tasks
   **/
  ServiceRoot100ServiceRoot.prototype.setTasks = function(tasks) {
    this['Tasks'] = tasks;
  }
  
  /**
   * get Unique identifier for a service instance. When SSDP is used, this value should be an exact match of the UUID value returned in a 200OK from an SSDP M-SEARCH request during discovery.
   * @return {ResourceUUID}
   **/
  ServiceRoot100ServiceRoot.prototype.getUUID = function() {
    return this['UUID'];
  }

  /**
   * set Unique identifier for a service instance. When SSDP is used, this value should be an exact match of the UUID value returned in a 200OK from an SSDP M-SEARCH request during discovery.
   * @param {ResourceUUID} UUID
   **/
  ServiceRoot100ServiceRoot.prototype.setUUID = function(UUID) {
    this['UUID'] = UUID;
  }
  
  

  ServiceRoot100ServiceRoot.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.ServiceRoot100ServiceRoot = ServiceRoot100ServiceRoot;
  }

  return ServiceRoot100ServiceRoot;
  
  
}));
