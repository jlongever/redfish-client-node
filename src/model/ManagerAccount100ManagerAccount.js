(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ManagerAccount100ManagerAccountLinks', './Odata400Context', './Odata400Id', './Odata400Type', './ResourceDescription', './ResourceId', './ResourceName', './ResourceOem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ManagerAccount100ManagerAccountLinks'), require('./Odata400Context'), require('./Odata400Id'), require('./Odata400Type'), require('./ResourceDescription'), require('./ResourceId'), require('./ResourceName'), require('./ResourceOem'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.ManagerAccount100ManagerAccountLinks, root.RedfishV100.Odata400Context, root.RedfishV100.Odata400Id, root.RedfishV100.Odata400Type, root.RedfishV100.ResourceDescription, root.RedfishV100.ResourceId, root.RedfishV100.ResourceName, root.RedfishV100.ResourceOem);
  }
}(this, function(module, ApiClient, ManagerAccount100ManagerAccountLinks, Odata400Context, Odata400Id, Odata400Type, ResourceDescription, ResourceId, ResourceName, ResourceOem) {
  'use strict';

  
  

  /**
   * This schema defines a user account to be used in conjunction with a manager.  This will affect the Redfish service connection if this manager is responsible for the Redfish service.
   **/
  var ManagerAccount100ManagerAccount = function ManagerAccount100ManagerAccount() { 
    
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
     * This property is used by a User Administrator to disable an account w/o having to delet the user information.  When set to true, the user can login.  When set to false, the account is administratively disabled and the user cannot login.
     * datatype: Boolean
     **/
    this['Enabled'] = null;
    
    /**
     * datatype: ResourceId
     **/
    this['Id'] = new ResourceId();
    
    /**
     * datatype: ManagerAccount100ManagerAccountLinks
     **/
    this['Links'] = new ManagerAccount100ManagerAccountLinks();
    
    /**
     * This property indicates that the account has been auto-locked by the account service because the lockout threshold has been exceeded.  When set to true, the account is locked. A user admin can write the property to false to manually unlock, or the account service will unlock it once the lockout duration period has passed.
     * datatype: Boolean
     **/
    this['Locked'] = null;
    
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
     * This property contains the Role for this account.
     * datatype: String
     **/
    this['RoleId'] = null;
    
    /**
     * This property contains the user name for the account.
     * datatype: String
     **/
    this['UserName'] = null;
    
  };

  ManagerAccount100ManagerAccount.prototype.constructFromObject = function(data) {
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
    
    if (data['Enabled']) {
      this['Enabled'] = ApiClient.convertToType(data['Enabled'], 'Boolean');
    }
    
    if (data['Id']) {
      this['Id'].constructFromObject(data['Id']);
    }
    
    if (data['Links']) {
      this['Links'].constructFromObject(data['Links']);
    }
    
    if (data['Locked']) {
      this['Locked'] = ApiClient.convertToType(data['Locked'], 'Boolean');
    }
    
    if (data['Name']) {
      this['Name'].constructFromObject(data['Name']);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['RoleId']) {
      this['RoleId'] = ApiClient.convertToType(data['RoleId'], 'String');
    }
    
    if (data['UserName']) {
      this['UserName'] = ApiClient.convertToType(data['UserName'], 'String');
    }
    
    return this;
  }

  
  
  /**
   * @return {Odata400Context}
   **/
  ManagerAccount100ManagerAccount.prototype.getOdataContext = function() {
    return this['@odata.context'];
  }

  /**
   * @param {Odata400Context} odataContext
   **/
  ManagerAccount100ManagerAccount.prototype.setOdataContext = function(odataContext) {
    this['@odata.context'] = odataContext;
  }
  
  /**
   * @return {Odata400Id}
   **/
  ManagerAccount100ManagerAccount.prototype.getOdataId = function() {
    return this['@odata.id'];
  }

  /**
   * @param {Odata400Id} odataId
   **/
  ManagerAccount100ManagerAccount.prototype.setOdataId = function(odataId) {
    this['@odata.id'] = odataId;
  }
  
  /**
   * @return {Odata400Type}
   **/
  ManagerAccount100ManagerAccount.prototype.getOdataType = function() {
    return this['@odata.type'];
  }

  /**
   * @param {Odata400Type} odataType
   **/
  ManagerAccount100ManagerAccount.prototype.setOdataType = function(odataType) {
    this['@odata.type'] = odataType;
  }
  
  /**
   * @return {ResourceDescription}
   **/
  ManagerAccount100ManagerAccount.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {ResourceDescription} description
   **/
  ManagerAccount100ManagerAccount.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * get This property is used by a User Administrator to disable an account w/o having to delet the user information.  When set to true, the user can login.  When set to false, the account is administratively disabled and the user cannot login.
   * @return {Boolean}
   **/
  ManagerAccount100ManagerAccount.prototype.getEnabled = function() {
    return this['Enabled'];
  }

  /**
   * set This property is used by a User Administrator to disable an account w/o having to delet the user information.  When set to true, the user can login.  When set to false, the account is administratively disabled and the user cannot login.
   * @param {Boolean} enabled
   **/
  ManagerAccount100ManagerAccount.prototype.setEnabled = function(enabled) {
    this['Enabled'] = enabled;
  }
  
  /**
   * @return {ResourceId}
   **/
  ManagerAccount100ManagerAccount.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {ResourceId} id
   **/
  ManagerAccount100ManagerAccount.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * @return {ManagerAccount100ManagerAccountLinks}
   **/
  ManagerAccount100ManagerAccount.prototype.getLinks = function() {
    return this['Links'];
  }

  /**
   * @param {ManagerAccount100ManagerAccountLinks} links
   **/
  ManagerAccount100ManagerAccount.prototype.setLinks = function(links) {
    this['Links'] = links;
  }
  
  /**
   * get This property indicates that the account has been auto-locked by the account service because the lockout threshold has been exceeded.  When set to true, the account is locked. A user admin can write the property to false to manually unlock, or the account service will unlock it once the lockout duration period has passed.
   * @return {Boolean}
   **/
  ManagerAccount100ManagerAccount.prototype.getLocked = function() {
    return this['Locked'];
  }

  /**
   * set This property indicates that the account has been auto-locked by the account service because the lockout threshold has been exceeded.  When set to true, the account is locked. A user admin can write the property to false to manually unlock, or the account service will unlock it once the lockout duration period has passed.
   * @param {Boolean} locked
   **/
  ManagerAccount100ManagerAccount.prototype.setLocked = function(locked) {
    this['Locked'] = locked;
  }
  
  /**
   * @return {ResourceName}
   **/
  ManagerAccount100ManagerAccount.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {ResourceName} name
   **/
  ManagerAccount100ManagerAccount.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  ManagerAccount100ManagerAccount.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  ManagerAccount100ManagerAccount.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get This property contains the Role for this account.
   * @return {String}
   **/
  ManagerAccount100ManagerAccount.prototype.getRoleId = function() {
    return this['RoleId'];
  }

  /**
   * set This property contains the Role for this account.
   * @param {String} roleId
   **/
  ManagerAccount100ManagerAccount.prototype.setRoleId = function(roleId) {
    this['RoleId'] = roleId;
  }
  
  /**
   * get This property contains the user name for the account.
   * @return {String}
   **/
  ManagerAccount100ManagerAccount.prototype.getUserName = function() {
    return this['UserName'];
  }

  /**
   * set This property contains the user name for the account.
   * @param {String} userName
   **/
  ManagerAccount100ManagerAccount.prototype.setUserName = function(userName) {
    this['UserName'] = userName;
  }
  
  

  ManagerAccount100ManagerAccount.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.ManagerAccount100ManagerAccount = ManagerAccount100ManagerAccount;
  }

  return ManagerAccount100ManagerAccount;
  
  
}));
