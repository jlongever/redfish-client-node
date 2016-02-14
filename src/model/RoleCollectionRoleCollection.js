(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Odata400Context', './Odata400Count', './Odata400Id', './Odata400IdRef', './Odata400Type', './ResourceDescription', './ResourceName', './ResourceOem', './RoleRole'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Odata400Context'), require('./Odata400Count'), require('./Odata400Id'), require('./Odata400IdRef'), require('./Odata400Type'), require('./ResourceDescription'), require('./ResourceName'), require('./ResourceOem'), require('./RoleRole'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Odata400Context, root.RedfishV100.Odata400Count, root.RedfishV100.Odata400Id, root.RedfishV100.Odata400IdRef, root.RedfishV100.Odata400Type, root.RedfishV100.ResourceDescription, root.RedfishV100.ResourceName, root.RedfishV100.ResourceOem, root.RedfishV100.RoleRole);
  }
}(this, function(module, ApiClient, Odata400Context, Odata400Count, Odata400Id, Odata400IdRef, Odata400Type, ResourceDescription, ResourceName, ResourceOem, RoleRole) {
  'use strict';

  
  

  
  var RoleCollectionRoleCollection = function RoleCollectionRoleCollection() { 
    
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
     * Contains the members of this collection.
     * datatype: [RoleRole]
     **/
    this['Members'] = [];
    
    /**
     * datatype: Odata400Count
     **/
    this['Members@odata.count'] = new Odata400Count();
    
    /**
     * datatype: Odata400IdRef
     **/
    this['Members@odata.navigationLink'] = new Odata400IdRef();
    
    /**
     * datatype: ResourceName
     **/
    this['Name'] = new ResourceName();
    
    /**
     * This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
     * datatype: ResourceOem
     **/
    this['Oem'] = new ResourceOem();
    
  };

  RoleCollectionRoleCollection.prototype.constructFromObject = function(data) {
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
    
    if (data['Members']) {
      this['Members'] = ApiClient.convertToType(data['Members'], [RoleRole]);
    }
    
    if (data['Members@odata.count']) {
      this['Members@odata.count'].constructFromObject(data['Members@odata.count']);
    }
    
    if (data['Members@odata.navigationLink']) {
      this['Members@odata.navigationLink'].constructFromObject(data['Members@odata.navigationLink']);
    }
    
    if (data['Name']) {
      this['Name'].constructFromObject(data['Name']);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Odata400Context}
   **/
  RoleCollectionRoleCollection.prototype.getOdataContext = function() {
    return this['@odata.context'];
  }

  /**
   * @param {Odata400Context} odataContext
   **/
  RoleCollectionRoleCollection.prototype.setOdataContext = function(odataContext) {
    this['@odata.context'] = odataContext;
  }
  
  /**
   * @return {Odata400Id}
   **/
  RoleCollectionRoleCollection.prototype.getOdataId = function() {
    return this['@odata.id'];
  }

  /**
   * @param {Odata400Id} odataId
   **/
  RoleCollectionRoleCollection.prototype.setOdataId = function(odataId) {
    this['@odata.id'] = odataId;
  }
  
  /**
   * @return {Odata400Type}
   **/
  RoleCollectionRoleCollection.prototype.getOdataType = function() {
    return this['@odata.type'];
  }

  /**
   * @param {Odata400Type} odataType
   **/
  RoleCollectionRoleCollection.prototype.setOdataType = function(odataType) {
    this['@odata.type'] = odataType;
  }
  
  /**
   * @return {ResourceDescription}
   **/
  RoleCollectionRoleCollection.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {ResourceDescription} description
   **/
  RoleCollectionRoleCollection.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * get Contains the members of this collection.
   * @return {[RoleRole]}
   **/
  RoleCollectionRoleCollection.prototype.getMembers = function() {
    return this['Members'];
  }

  /**
   * set Contains the members of this collection.
   * @param {[RoleRole]} members
   **/
  RoleCollectionRoleCollection.prototype.setMembers = function(members) {
    this['Members'] = members;
  }
  
  /**
   * @return {Odata400Count}
   **/
  RoleCollectionRoleCollection.prototype.getMembersodataCount = function() {
    return this['Members@odata.count'];
  }

  /**
   * @param {Odata400Count} membersodataCount
   **/
  RoleCollectionRoleCollection.prototype.setMembersodataCount = function(membersodataCount) {
    this['Members@odata.count'] = membersodataCount;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  RoleCollectionRoleCollection.prototype.getMembersodataNavigationLink = function() {
    return this['Members@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} membersodataNavigationLink
   **/
  RoleCollectionRoleCollection.prototype.setMembersodataNavigationLink = function(membersodataNavigationLink) {
    this['Members@odata.navigationLink'] = membersodataNavigationLink;
  }
  
  /**
   * @return {ResourceName}
   **/
  RoleCollectionRoleCollection.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {ResourceName} name
   **/
  RoleCollectionRoleCollection.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  RoleCollectionRoleCollection.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  RoleCollectionRoleCollection.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  

  RoleCollectionRoleCollection.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.RoleCollectionRoleCollection = RoleCollectionRoleCollection;
  }

  return RoleCollectionRoleCollection;
  
  
}));
