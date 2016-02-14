(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './JsonSchemaFileJsonSchemaFile', './Odata400Context', './Odata400Count', './Odata400Id', './Odata400IdRef', './Odata400Type', './ResourceDescription', './ResourceName', './ResourceOem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./JsonSchemaFileJsonSchemaFile'), require('./Odata400Context'), require('./Odata400Count'), require('./Odata400Id'), require('./Odata400IdRef'), require('./Odata400Type'), require('./ResourceDescription'), require('./ResourceName'), require('./ResourceOem'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.JsonSchemaFileJsonSchemaFile, root.RedfishV100.Odata400Context, root.RedfishV100.Odata400Count, root.RedfishV100.Odata400Id, root.RedfishV100.Odata400IdRef, root.RedfishV100.Odata400Type, root.RedfishV100.ResourceDescription, root.RedfishV100.ResourceName, root.RedfishV100.ResourceOem);
  }
}(this, function(module, ApiClient, JsonSchemaFileJsonSchemaFile, Odata400Context, Odata400Count, Odata400Id, Odata400IdRef, Odata400Type, ResourceDescription, ResourceName, ResourceOem) {
  'use strict';

  
  

  
  var JsonSchemaFileCollectionJsonSchemaFileCollection = function JsonSchemaFileCollectionJsonSchemaFileCollection() { 
    
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
     * datatype: [JsonSchemaFileJsonSchemaFile]
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

  JsonSchemaFileCollectionJsonSchemaFileCollection.prototype.constructFromObject = function(data) {
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
      this['Members'] = ApiClient.convertToType(data['Members'], [JsonSchemaFileJsonSchemaFile]);
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
  JsonSchemaFileCollectionJsonSchemaFileCollection.prototype.getOdataContext = function() {
    return this['@odata.context'];
  }

  /**
   * @param {Odata400Context} odataContext
   **/
  JsonSchemaFileCollectionJsonSchemaFileCollection.prototype.setOdataContext = function(odataContext) {
    this['@odata.context'] = odataContext;
  }
  
  /**
   * @return {Odata400Id}
   **/
  JsonSchemaFileCollectionJsonSchemaFileCollection.prototype.getOdataId = function() {
    return this['@odata.id'];
  }

  /**
   * @param {Odata400Id} odataId
   **/
  JsonSchemaFileCollectionJsonSchemaFileCollection.prototype.setOdataId = function(odataId) {
    this['@odata.id'] = odataId;
  }
  
  /**
   * @return {Odata400Type}
   **/
  JsonSchemaFileCollectionJsonSchemaFileCollection.prototype.getOdataType = function() {
    return this['@odata.type'];
  }

  /**
   * @param {Odata400Type} odataType
   **/
  JsonSchemaFileCollectionJsonSchemaFileCollection.prototype.setOdataType = function(odataType) {
    this['@odata.type'] = odataType;
  }
  
  /**
   * @return {ResourceDescription}
   **/
  JsonSchemaFileCollectionJsonSchemaFileCollection.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {ResourceDescription} description
   **/
  JsonSchemaFileCollectionJsonSchemaFileCollection.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * get Contains the members of this collection.
   * @return {[JsonSchemaFileJsonSchemaFile]}
   **/
  JsonSchemaFileCollectionJsonSchemaFileCollection.prototype.getMembers = function() {
    return this['Members'];
  }

  /**
   * set Contains the members of this collection.
   * @param {[JsonSchemaFileJsonSchemaFile]} members
   **/
  JsonSchemaFileCollectionJsonSchemaFileCollection.prototype.setMembers = function(members) {
    this['Members'] = members;
  }
  
  /**
   * @return {Odata400Count}
   **/
  JsonSchemaFileCollectionJsonSchemaFileCollection.prototype.getMembersodataCount = function() {
    return this['Members@odata.count'];
  }

  /**
   * @param {Odata400Count} membersodataCount
   **/
  JsonSchemaFileCollectionJsonSchemaFileCollection.prototype.setMembersodataCount = function(membersodataCount) {
    this['Members@odata.count'] = membersodataCount;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  JsonSchemaFileCollectionJsonSchemaFileCollection.prototype.getMembersodataNavigationLink = function() {
    return this['Members@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} membersodataNavigationLink
   **/
  JsonSchemaFileCollectionJsonSchemaFileCollection.prototype.setMembersodataNavigationLink = function(membersodataNavigationLink) {
    this['Members@odata.navigationLink'] = membersodataNavigationLink;
  }
  
  /**
   * @return {ResourceName}
   **/
  JsonSchemaFileCollectionJsonSchemaFileCollection.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {ResourceName} name
   **/
  JsonSchemaFileCollectionJsonSchemaFileCollection.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  JsonSchemaFileCollectionJsonSchemaFileCollection.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  JsonSchemaFileCollectionJsonSchemaFileCollection.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  

  JsonSchemaFileCollectionJsonSchemaFileCollection.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.JsonSchemaFileCollectionJsonSchemaFileCollection = JsonSchemaFileCollectionJsonSchemaFileCollection;
  }

  return JsonSchemaFileCollectionJsonSchemaFileCollection;
  
  
}));
