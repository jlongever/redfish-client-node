(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ResourceHealth', './ResourceOem', './ResourceState'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ResourceHealth'), require('./ResourceOem'), require('./ResourceState'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.ResourceHealth, root.RedfishV100.ResourceOem, root.RedfishV100.ResourceState);
  }
}(this, function(module, ApiClient, ResourceHealth, ResourceOem, ResourceState) {
  'use strict';

  
  

  
  var ResourceStatus = function ResourceStatus() { 
    
    /**
     * This represents the health state of this resource in the absence of its dependent resources.
     * datatype: ResourceHealth
     **/
    this['Health'] = new ResourceHealth();
    
    /**
     * This represents the overall health state from the view of this resource.
     * datatype: ResourceHealth
     **/
    this['HealthRollup'] = new ResourceHealth();
    
    /**
     * datatype: ResourceOem
     **/
    this['Oem'] = new ResourceOem();
    
    /**
     * This indicates the known state of the resource, such as if it is enabled.
     * datatype: ResourceState
     **/
    this['State'] = new ResourceState();
    
  };

  ResourceStatus.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['Health']) {
      this['Health'].constructFromObject(data['Health']);
    }
    
    if (data['HealthRollup']) {
      this['HealthRollup'].constructFromObject(data['HealthRollup']);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['State']) {
      this['State'].constructFromObject(data['State']);
    }
    
    return this;
  }

  
  
  /**
   * get This represents the health state of this resource in the absence of its dependent resources.
   * @return {ResourceHealth}
   **/
  ResourceStatus.prototype.getHealth = function() {
    return this['Health'];
  }

  /**
   * set This represents the health state of this resource in the absence of its dependent resources.
   * @param {ResourceHealth} health
   **/
  ResourceStatus.prototype.setHealth = function(health) {
    this['Health'] = health;
  }
  
  /**
   * get This represents the overall health state from the view of this resource.
   * @return {ResourceHealth}
   **/
  ResourceStatus.prototype.getHealthRollup = function() {
    return this['HealthRollup'];
  }

  /**
   * set This represents the overall health state from the view of this resource.
   * @param {ResourceHealth} healthRollup
   **/
  ResourceStatus.prototype.setHealthRollup = function(healthRollup) {
    this['HealthRollup'] = healthRollup;
  }
  
  /**
   * @return {ResourceOem}
   **/
  ResourceStatus.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * @param {ResourceOem} oem
   **/
  ResourceStatus.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get This indicates the known state of the resource, such as if it is enabled.
   * @return {ResourceState}
   **/
  ResourceStatus.prototype.getState = function() {
    return this['State'];
  }

  /**
   * set This indicates the known state of the resource, such as if it is enabled.
   * @param {ResourceState} state
   **/
  ResourceStatus.prototype.setState = function(state) {
    this['State'] = state;
  }
  
  

  ResourceStatus.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.ResourceStatus = ResourceStatus;
  }

  return ResourceStatus;
  
  
}));
