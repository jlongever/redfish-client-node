(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ResourceOem', './SessionCollectionSessionCollection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ResourceOem'), require('./SessionCollectionSessionCollection'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.ResourceOem, root.RedfishV100.SessionCollectionSessionCollection);
  }
}(this, function(module, ApiClient, ResourceOem, SessionCollectionSessionCollection) {
  'use strict';

  
  

  /**
   * The links object contains the links to other resources that are related to this resource.
   **/
  var ServiceRoot100ServiceRootLinks = function ServiceRoot100ServiceRootLinks() { 
    
    /**
     * Link to a collection of Sessions
     * datatype: SessionCollectionSessionCollection
     **/
    this['Sessions'] = new SessionCollectionSessionCollection();
    
    /**
     * Oem extension object.
     * datatype: ResourceOem
     **/
    this['Oem'] = new ResourceOem();
    
  };

  ServiceRoot100ServiceRootLinks.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['Sessions']) {
      this['Sessions'].constructFromObject(data['Sessions']);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    return this;
  }

  
  
  /**
   * get Link to a collection of Sessions
   * @return {SessionCollectionSessionCollection}
   **/
  ServiceRoot100ServiceRootLinks.prototype.getSessions = function() {
    return this['Sessions'];
  }

  /**
   * set Link to a collection of Sessions
   * @param {SessionCollectionSessionCollection} sessions
   **/
  ServiceRoot100ServiceRootLinks.prototype.setSessions = function(sessions) {
    this['Sessions'] = sessions;
  }
  
  /**
   * get Oem extension object.
   * @return {ResourceOem}
   **/
  ServiceRoot100ServiceRootLinks.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set Oem extension object.
   * @param {ResourceOem} oem
   **/
  ServiceRoot100ServiceRootLinks.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  

  ServiceRoot100ServiceRootLinks.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.ServiceRoot100ServiceRootLinks = ServiceRoot100ServiceRootLinks;
  }

  return ServiceRoot100ServiceRootLinks;
  
  
}));
