(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Odata400IdRef', './ResourceOem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Odata400IdRef'), require('./ResourceOem'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Odata400IdRef, root.RedfishV100.ResourceOem);
  }
}(this, function(module, ApiClient, Odata400IdRef, ResourceOem) {
  'use strict';

  
  

  /**
   * The links object contains the links to other resources that are related to this resource.
   **/
  var LogEntry100LogEntryLinks = function LogEntry100LogEntryLinks() { 
    
    /**
     * Oem extension object.
     * datatype: ResourceOem
     **/
    this['Oem'] = new ResourceOem();
    
    /**
     * This is the URI of the resource that caused the log entry
     * datatype: Odata400IdRef
     **/
    this['OriginOfCondition'] = new Odata400IdRef();
    
  };

  LogEntry100LogEntryLinks.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['OriginOfCondition']) {
      this['OriginOfCondition'].constructFromObject(data['OriginOfCondition']);
    }
    
    return this;
  }

  
  
  /**
   * get Oem extension object.
   * @return {ResourceOem}
   **/
  LogEntry100LogEntryLinks.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set Oem extension object.
   * @param {ResourceOem} oem
   **/
  LogEntry100LogEntryLinks.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get This is the URI of the resource that caused the log entry
   * @return {Odata400IdRef}
   **/
  LogEntry100LogEntryLinks.prototype.getOriginOfCondition = function() {
    return this['OriginOfCondition'];
  }

  /**
   * set This is the URI of the resource that caused the log entry
   * @param {Odata400IdRef} originOfCondition
   **/
  LogEntry100LogEntryLinks.prototype.setOriginOfCondition = function(originOfCondition) {
    this['OriginOfCondition'] = originOfCondition;
  }
  
  

  LogEntry100LogEntryLinks.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.LogEntry100LogEntryLinks = LogEntry100LogEntryLinks;
  }

  return LogEntry100LogEntryLinks;
  
  
}));
