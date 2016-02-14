(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ResourceOem', './RoleRole'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ResourceOem'), require('./RoleRole'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.ResourceOem, root.RedfishV100.RoleRole);
  }
}(this, function(module, ApiClient, ResourceOem, RoleRole) {
  'use strict';

  
  

  /**
   * The links object contains the links to other resources that are related to this resource.
   **/
  var ManagerAccount100ManagerAccountLinks = function ManagerAccount100ManagerAccountLinks() { 
    
    /**
     * A reference to the Role object defining Privileges for this account--returned when the resource is read. The ID of the role is the same as property RoleId.
     * datatype: RoleRole
     **/
    this['Role'] = new RoleRole();
    
    /**
     * Oem extension object.
     * datatype: ResourceOem
     **/
    this['Oem'] = new ResourceOem();
    
  };

  ManagerAccount100ManagerAccountLinks.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['Role']) {
      this['Role'].constructFromObject(data['Role']);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    return this;
  }

  
  
  /**
   * get A reference to the Role object defining Privileges for this account--returned when the resource is read. The ID of the role is the same as property RoleId.
   * @return {RoleRole}
   **/
  ManagerAccount100ManagerAccountLinks.prototype.getRole = function() {
    return this['Role'];
  }

  /**
   * set A reference to the Role object defining Privileges for this account--returned when the resource is read. The ID of the role is the same as property RoleId.
   * @param {RoleRole} role
   **/
  ManagerAccount100ManagerAccountLinks.prototype.setRole = function(role) {
    this['Role'] = role;
  }
  
  /**
   * get Oem extension object.
   * @return {ResourceOem}
   **/
  ManagerAccount100ManagerAccountLinks.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set Oem extension object.
   * @param {ResourceOem} oem
   **/
  ManagerAccount100ManagerAccountLinks.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  

  ManagerAccount100ManagerAccountLinks.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.ManagerAccount100ManagerAccountLinks = ManagerAccount100ManagerAccountLinks;
  }

  return ManagerAccount100ManagerAccountLinks;
  
  
}));
