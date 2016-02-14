(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Odata400Context', './Odata400Id', './Odata400Type', './Privileges100PrivilegeType', './ResourceDescription', './ResourceId', './ResourceName', './ResourceOem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Odata400Context'), require('./Odata400Id'), require('./Odata400Type'), require('./Privileges100PrivilegeType'), require('./ResourceDescription'), require('./ResourceId'), require('./ResourceName'), require('./ResourceOem'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Odata400Context, root.RedfishV100.Odata400Id, root.RedfishV100.Odata400Type, root.RedfishV100.Privileges100PrivilegeType, root.RedfishV100.ResourceDescription, root.RedfishV100.ResourceId, root.RedfishV100.ResourceName, root.RedfishV100.ResourceOem);
  }
}(this, function(module, ApiClient, Odata400Context, Odata400Id, Odata400Type, Privileges100PrivilegeType, ResourceDescription, ResourceId, ResourceName, ResourceOem) {
  'use strict';

  
  

  /**
   * This schema defines a user role to be used in conjunction with a manager account.
   **/
  var Role100Role = function Role100Role() { 
    
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
     * The redfish privileges that this role includes.
     * datatype: [Privileges100PrivilegeType]
     **/
    this['AssignedPrivileges'] = [];
    
    /**
     * datatype: ResourceDescription
     **/
    this['Description'] = new ResourceDescription();
    
    /**
     * datatype: ResourceId
     **/
    this['Id'] = new ResourceId();
    
    /**
     * This property is used to indicate if the Role is one of the Redfish Predefined Roles vs a Custom role.
     * datatype: Boolean
     **/
    this['IsPredefined'] = null;
    
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
     * The OEM privileges that this role includes.
     * datatype: [String]
     **/
    this['OemPrivileges'] = [];
    
  };

  Role100Role.prototype.constructFromObject = function(data) {
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
    
    if (data['AssignedPrivileges']) {
      this['AssignedPrivileges'] = ApiClient.convertToType(data['AssignedPrivileges'], [Privileges100PrivilegeType]);
    }
    
    if (data['Description']) {
      this['Description'].constructFromObject(data['Description']);
    }
    
    if (data['Id']) {
      this['Id'].constructFromObject(data['Id']);
    }
    
    if (data['IsPredefined']) {
      this['IsPredefined'] = ApiClient.convertToType(data['IsPredefined'], 'Boolean');
    }
    
    if (data['Name']) {
      this['Name'].constructFromObject(data['Name']);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['OemPrivileges']) {
      this['OemPrivileges'] = ApiClient.convertToType(data['OemPrivileges'], ['String']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Odata400Context}
   **/
  Role100Role.prototype.getOdataContext = function() {
    return this['@odata.context'];
  }

  /**
   * @param {Odata400Context} odataContext
   **/
  Role100Role.prototype.setOdataContext = function(odataContext) {
    this['@odata.context'] = odataContext;
  }
  
  /**
   * @return {Odata400Id}
   **/
  Role100Role.prototype.getOdataId = function() {
    return this['@odata.id'];
  }

  /**
   * @param {Odata400Id} odataId
   **/
  Role100Role.prototype.setOdataId = function(odataId) {
    this['@odata.id'] = odataId;
  }
  
  /**
   * @return {Odata400Type}
   **/
  Role100Role.prototype.getOdataType = function() {
    return this['@odata.type'];
  }

  /**
   * @param {Odata400Type} odataType
   **/
  Role100Role.prototype.setOdataType = function(odataType) {
    this['@odata.type'] = odataType;
  }
  
  /**
   * get The redfish privileges that this role includes.
   * @return {[Privileges100PrivilegeType]}
   **/
  Role100Role.prototype.getAssignedPrivileges = function() {
    return this['AssignedPrivileges'];
  }

  /**
   * set The redfish privileges that this role includes.
   * @param {[Privileges100PrivilegeType]} assignedPrivileges
   **/
  Role100Role.prototype.setAssignedPrivileges = function(assignedPrivileges) {
    this['AssignedPrivileges'] = assignedPrivileges;
  }
  
  /**
   * @return {ResourceDescription}
   **/
  Role100Role.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {ResourceDescription} description
   **/
  Role100Role.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * @return {ResourceId}
   **/
  Role100Role.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {ResourceId} id
   **/
  Role100Role.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * get This property is used to indicate if the Role is one of the Redfish Predefined Roles vs a Custom role.
   * @return {Boolean}
   **/
  Role100Role.prototype.getIsPredefined = function() {
    return this['IsPredefined'];
  }

  /**
   * set This property is used to indicate if the Role is one of the Redfish Predefined Roles vs a Custom role.
   * @param {Boolean} isPredefined
   **/
  Role100Role.prototype.setIsPredefined = function(isPredefined) {
    this['IsPredefined'] = isPredefined;
  }
  
  /**
   * @return {ResourceName}
   **/
  Role100Role.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {ResourceName} name
   **/
  Role100Role.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  Role100Role.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  Role100Role.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get The OEM privileges that this role includes.
   * @return {[String]}
   **/
  Role100Role.prototype.getOemPrivileges = function() {
    return this['OemPrivileges'];
  }

  /**
   * set The OEM privileges that this role includes.
   * @param {[String]} oemPrivileges
   **/
  Role100Role.prototype.setOemPrivileges = function(oemPrivileges) {
    this['OemPrivileges'] = oemPrivileges;
  }
  
  

  Role100Role.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.Role100Role = Role100Role;
  }

  return Role100Role;
  
  
}));
