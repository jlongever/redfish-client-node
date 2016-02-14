(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ManagerAccountCollectionManagerAccountCollection', './Odata400Context', './Odata400Id', './Odata400Type', './ResourceDescription', './ResourceId', './ResourceName', './ResourceOem', './ResourceStatus', './RoleCollectionRoleCollection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ManagerAccountCollectionManagerAccountCollection'), require('./Odata400Context'), require('./Odata400Id'), require('./Odata400Type'), require('./ResourceDescription'), require('./ResourceId'), require('./ResourceName'), require('./ResourceOem'), require('./ResourceStatus'), require('./RoleCollectionRoleCollection'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.ManagerAccountCollectionManagerAccountCollection, root.RedfishV100.Odata400Context, root.RedfishV100.Odata400Id, root.RedfishV100.Odata400Type, root.RedfishV100.ResourceDescription, root.RedfishV100.ResourceId, root.RedfishV100.ResourceName, root.RedfishV100.ResourceOem, root.RedfishV100.ResourceStatus, root.RedfishV100.RoleCollectionRoleCollection);
  }
}(this, function(module, ApiClient, ManagerAccountCollectionManagerAccountCollection, Odata400Context, Odata400Id, Odata400Type, ResourceDescription, ResourceId, ResourceName, ResourceOem, ResourceStatus, RoleCollectionRoleCollection) {
  'use strict';

  
  

  /**
   * This is the schema definition for the Account Service.  It represents the properties for the service itself and has links to the actual list of accounts.
   **/
  var AccountService100AccountService = function AccountService100AccountService() { 
    
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
     * The interval of time since the last failed login attempt at which point the lockout threshold counter for the account is reset to zero. Must be less than or equal to AccountLockoutDuration
     * datatype: Number
     * minimum: 0.0
     **/
    this['AccountLockoutCounterResetAfter'] = null;
    
    /**
     * Link to a collection of Manager Accounts
     * datatype: ManagerAccountCollectionManagerAccountCollection
     **/
    this['Accounts'] = new ManagerAccountCollectionManagerAccountCollection();
    
    /**
     * This is the number of authorization failures that need to occur before the failure attempt is logged to the manager log.
     * datatype: Number
     * minimum: 0.0
     **/
    this['AuthFailureLoggingThreshold'] = null;
    
    /**
     * datatype: ResourceDescription
     **/
    this['Description'] = new ResourceDescription();
    
    /**
     * datatype: ResourceId
     **/
    this['Id'] = new ResourceId();
    
    /**
     * This is the maximum password length for this service.
     * datatype: Number
     * minimum: 0.0
     **/
    this['MaxPasswordLength'] = null;
    
    /**
     * This is the minimum password length for this service.
     * datatype: Number
     * minimum: 0.0
     **/
    this['MinPasswordLength'] = null;
    
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
     * Link to a collection of Roles
     * datatype: RoleCollectionRoleCollection
     **/
    this['Roles'] = new RoleCollectionRoleCollection();
    
    /**
     * datatype: ResourceStatus
     **/
    this['Status'] = new ResourceStatus();
    
  };

  AccountService100AccountService.prototype.constructFromObject = function(data) {
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
    
    if (data['AccountLockoutCounterResetAfter']) {
      this['AccountLockoutCounterResetAfter'] = ApiClient.convertToType(data['AccountLockoutCounterResetAfter'], 'Number');
    }
    
    if (data['Accounts']) {
      this['Accounts'].constructFromObject(data['Accounts']);
    }
    
    if (data['AuthFailureLoggingThreshold']) {
      this['AuthFailureLoggingThreshold'] = ApiClient.convertToType(data['AuthFailureLoggingThreshold'], 'Number');
    }
    
    if (data['Description']) {
      this['Description'].constructFromObject(data['Description']);
    }
    
    if (data['Id']) {
      this['Id'].constructFromObject(data['Id']);
    }
    
    if (data['MaxPasswordLength']) {
      this['MaxPasswordLength'] = ApiClient.convertToType(data['MaxPasswordLength'], 'Number');
    }
    
    if (data['MinPasswordLength']) {
      this['MinPasswordLength'] = ApiClient.convertToType(data['MinPasswordLength'], 'Number');
    }
    
    if (data['Name']) {
      this['Name'].constructFromObject(data['Name']);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['Roles']) {
      this['Roles'].constructFromObject(data['Roles']);
    }
    
    if (data['Status']) {
      this['Status'].constructFromObject(data['Status']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Odata400Context}
   **/
  AccountService100AccountService.prototype.getOdataContext = function() {
    return this['@odata.context'];
  }

  /**
   * @param {Odata400Context} odataContext
   **/
  AccountService100AccountService.prototype.setOdataContext = function(odataContext) {
    this['@odata.context'] = odataContext;
  }
  
  /**
   * @return {Odata400Id}
   **/
  AccountService100AccountService.prototype.getOdataId = function() {
    return this['@odata.id'];
  }

  /**
   * @param {Odata400Id} odataId
   **/
  AccountService100AccountService.prototype.setOdataId = function(odataId) {
    this['@odata.id'] = odataId;
  }
  
  /**
   * @return {Odata400Type}
   **/
  AccountService100AccountService.prototype.getOdataType = function() {
    return this['@odata.type'];
  }

  /**
   * @param {Odata400Type} odataType
   **/
  AccountService100AccountService.prototype.setOdataType = function(odataType) {
    this['@odata.type'] = odataType;
  }
  
  /**
   * get The interval of time since the last failed login attempt at which point the lockout threshold counter for the account is reset to zero. Must be less than or equal to AccountLockoutDuration
   * minimum: 0.0
   * @return {Number}
   **/
  AccountService100AccountService.prototype.getAccountLockoutCounterResetAfter = function() {
    return this['AccountLockoutCounterResetAfter'];
  }

  /**
   * set The interval of time since the last failed login attempt at which point the lockout threshold counter for the account is reset to zero. Must be less than or equal to AccountLockoutDuration
   * @param {Number} accountLockoutCounterResetAfter
   **/
  AccountService100AccountService.prototype.setAccountLockoutCounterResetAfter = function(accountLockoutCounterResetAfter) {
    this['AccountLockoutCounterResetAfter'] = accountLockoutCounterResetAfter;
  }
  
  /**
   * get Link to a collection of Manager Accounts
   * @return {ManagerAccountCollectionManagerAccountCollection}
   **/
  AccountService100AccountService.prototype.getAccounts = function() {
    return this['Accounts'];
  }

  /**
   * set Link to a collection of Manager Accounts
   * @param {ManagerAccountCollectionManagerAccountCollection} accounts
   **/
  AccountService100AccountService.prototype.setAccounts = function(accounts) {
    this['Accounts'] = accounts;
  }
  
  /**
   * get This is the number of authorization failures that need to occur before the failure attempt is logged to the manager log.
   * minimum: 0.0
   * @return {Number}
   **/
  AccountService100AccountService.prototype.getAuthFailureLoggingThreshold = function() {
    return this['AuthFailureLoggingThreshold'];
  }

  /**
   * set This is the number of authorization failures that need to occur before the failure attempt is logged to the manager log.
   * @param {Number} authFailureLoggingThreshold
   **/
  AccountService100AccountService.prototype.setAuthFailureLoggingThreshold = function(authFailureLoggingThreshold) {
    this['AuthFailureLoggingThreshold'] = authFailureLoggingThreshold;
  }
  
  /**
   * @return {ResourceDescription}
   **/
  AccountService100AccountService.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {ResourceDescription} description
   **/
  AccountService100AccountService.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * @return {ResourceId}
   **/
  AccountService100AccountService.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {ResourceId} id
   **/
  AccountService100AccountService.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * get This is the maximum password length for this service.
   * minimum: 0.0
   * @return {Number}
   **/
  AccountService100AccountService.prototype.getMaxPasswordLength = function() {
    return this['MaxPasswordLength'];
  }

  /**
   * set This is the maximum password length for this service.
   * @param {Number} maxPasswordLength
   **/
  AccountService100AccountService.prototype.setMaxPasswordLength = function(maxPasswordLength) {
    this['MaxPasswordLength'] = maxPasswordLength;
  }
  
  /**
   * get This is the minimum password length for this service.
   * minimum: 0.0
   * @return {Number}
   **/
  AccountService100AccountService.prototype.getMinPasswordLength = function() {
    return this['MinPasswordLength'];
  }

  /**
   * set This is the minimum password length for this service.
   * @param {Number} minPasswordLength
   **/
  AccountService100AccountService.prototype.setMinPasswordLength = function(minPasswordLength) {
    this['MinPasswordLength'] = minPasswordLength;
  }
  
  /**
   * @return {ResourceName}
   **/
  AccountService100AccountService.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {ResourceName} name
   **/
  AccountService100AccountService.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  AccountService100AccountService.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  AccountService100AccountService.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get Link to a collection of Roles
   * @return {RoleCollectionRoleCollection}
   **/
  AccountService100AccountService.prototype.getRoles = function() {
    return this['Roles'];
  }

  /**
   * set Link to a collection of Roles
   * @param {RoleCollectionRoleCollection} roles
   **/
  AccountService100AccountService.prototype.setRoles = function(roles) {
    this['Roles'] = roles;
  }
  
  /**
   * @return {ResourceStatus}
   **/
  AccountService100AccountService.prototype.getStatus = function() {
    return this['Status'];
  }

  /**
   * @param {ResourceStatus} status
   **/
  AccountService100AccountService.prototype.setStatus = function(status) {
    this['Status'] = status;
  }
  
  

  AccountService100AccountService.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.AccountService100AccountService = AccountService100AccountService;
  }

  return AccountService100AccountService;
  
  
}));
