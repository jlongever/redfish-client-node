(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ResourceOem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ResourceOem'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.ResourceOem);
  }
}(this, function(module, ApiClient, ResourceOem) {
  'use strict';

  
  

  
  var Message100Message = function Message100Message() { 
    
    /**
     * This array of message arguments are substituted for the arguments in the message when looked up in the message registry.
     * datatype: [String]
     **/
    this['MessageArgs'] = [];
    
    /**
     * This is the key for this message which can be used to look up the message in a message registry.
     * datatype: String
     **/
    this['MessageId'] = null;
    
    /**
     * Oem extension object.
     * datatype: ResourceOem
     **/
    this['Oem'] = new ResourceOem();
    
    /**
     * This is an array of properties described by the message.
     * datatype: [String]
     **/
    this['RelatedProperties'] = [];
    
  };

  Message100Message.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['MessageArgs']) {
      this['MessageArgs'] = ApiClient.convertToType(data['MessageArgs'], ['String']);
    }
    
    if (data['MessageId']) {
      this['MessageId'] = ApiClient.convertToType(data['MessageId'], 'String');
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['RelatedProperties']) {
      this['RelatedProperties'] = ApiClient.convertToType(data['RelatedProperties'], ['String']);
    }
    
    return this;
  }

  
  
  /**
   * get This array of message arguments are substituted for the arguments in the message when looked up in the message registry.
   * @return {[String]}
   **/
  Message100Message.prototype.getMessageArgs = function() {
    return this['MessageArgs'];
  }

  /**
   * set This array of message arguments are substituted for the arguments in the message when looked up in the message registry.
   * @param {[String]} messageArgs
   **/
  Message100Message.prototype.setMessageArgs = function(messageArgs) {
    this['MessageArgs'] = messageArgs;
  }
  
  /**
   * get This is the key for this message which can be used to look up the message in a message registry.
   * @return {String}
   **/
  Message100Message.prototype.getMessageId = function() {
    return this['MessageId'];
  }

  /**
   * set This is the key for this message which can be used to look up the message in a message registry.
   * @param {String} messageId
   **/
  Message100Message.prototype.setMessageId = function(messageId) {
    this['MessageId'] = messageId;
  }
  
  /**
   * get Oem extension object.
   * @return {ResourceOem}
   **/
  Message100Message.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set Oem extension object.
   * @param {ResourceOem} oem
   **/
  Message100Message.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get This is an array of properties described by the message.
   * @return {[String]}
   **/
  Message100Message.prototype.getRelatedProperties = function() {
    return this['RelatedProperties'];
  }

  /**
   * set This is an array of properties described by the message.
   * @param {[String]} relatedProperties
   **/
  Message100Message.prototype.setRelatedProperties = function(relatedProperties) {
    this['RelatedProperties'] = relatedProperties;
  }
  
  

  Message100Message.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.Message100Message = Message100Message;
  }

  return Message100Message;
  
  
}));
