(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './LogEntry100EventSeverity', './LogEntry100LogEntryCode', './LogEntry100LogEntryLinks', './LogEntry100LogEntryType', './LogEntry100SensorType', './Odata400Context', './Odata400Id', './Odata400Type', './ResourceDescription', './ResourceId', './ResourceName', './ResourceOem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./LogEntry100EventSeverity'), require('./LogEntry100LogEntryCode'), require('./LogEntry100LogEntryLinks'), require('./LogEntry100LogEntryType'), require('./LogEntry100SensorType'), require('./Odata400Context'), require('./Odata400Id'), require('./Odata400Type'), require('./ResourceDescription'), require('./ResourceId'), require('./ResourceName'), require('./ResourceOem'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.LogEntry100EventSeverity, root.RedfishV100.LogEntry100LogEntryCode, root.RedfishV100.LogEntry100LogEntryLinks, root.RedfishV100.LogEntry100LogEntryType, root.RedfishV100.LogEntry100SensorType, root.RedfishV100.Odata400Context, root.RedfishV100.Odata400Id, root.RedfishV100.Odata400Type, root.RedfishV100.ResourceDescription, root.RedfishV100.ResourceId, root.RedfishV100.ResourceName, root.RedfishV100.ResourceOem);
  }
}(this, function(module, ApiClient, LogEntry100EventSeverity, LogEntry100LogEntryCode, LogEntry100LogEntryLinks, LogEntry100LogEntryType, LogEntry100SensorType, Odata400Context, Odata400Id, Odata400Type, ResourceDescription, ResourceId, ResourceName, ResourceOem) {
  'use strict';

  
  

  /**
   * This resource represents the log record format for logs.  It is designed to be used for SEL logs from IPMI as well as Event Logs and OEM specific logs.  The EntryType field indicates the type of log and there are other properties dependent on it&#39;s value.
   **/
  var LogEntry100LogEntry = function LogEntry100LogEntry(EntryType) { 
    
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
     * The time the log entry was created.
     * datatype: Date
     **/
    this['Created'] = null;
    
    /**
     * datatype: ResourceDescription
     **/
    this['Description'] = new ResourceDescription();
    
    /**
     * If the EntryType is SEL, this will have the entry code for the log entry.
     * datatype: LogEntry100LogEntryCode
     **/
    this['EntryCode'] = new LogEntry100LogEntryCode();
    
    /**
     * his is the type of log entry.
     * datatype: LogEntry100LogEntryType
     * required
     **/
    this['EntryType'] = entryType;
    
    /**
     * datatype: ResourceId
     **/
    this['Id'] = new ResourceId();
    
    /**
     * datatype: LogEntry100LogEntryLinks
     **/
    this['Links'] = new LogEntry100LogEntryLinks();
    
    /**
     * This property decodes from EntryType:  If it is Event then it is a message string.  Otherwise, it is SEL or Oem specific.  In most cases, this will be the actual Log Entry.
     * datatype: String
     **/
    this['Message'] = null;
    
    /**
     * The values of this property shall be any arguments for the message.
     * datatype: [String]
     **/
    this['MessageArgs'] = [];
    
    /**
     * This property decodes from EntryType:  If it is Event then it is a message id.  Otherwise, it is SEL or Oem specific.  This value is only used for registries - for more information, see the specification.
     * datatype: String
     **/
    this['MessageId'] = null;
    
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
     * If the EntryType is SEL, this will have the sensor type that the log entry pertains to.
     * datatype: LogEntry100SensorType
     **/
    this['SensorType'] = new LogEntry100SensorType();
    
    /**
     * This is the severity of the log entry.
     * datatype: LogEntry100EventSeverity
     **/
    this['Severity'] = new LogEntry100EventSeverity();
    
  };

  LogEntry100LogEntry.prototype.constructFromObject = function(data) {
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
    
    if (data['Created']) {
      this['Created'] = ApiClient.convertToType(data['Created'], 'Date');
    }
    
    if (data['Description']) {
      this['Description'].constructFromObject(data['Description']);
    }
    
    if (data['EntryCode']) {
      this['EntryCode'].constructFromObject(data['EntryCode']);
    }
    
    if (data['EntryType']) {
      this['EntryType'].constructFromObject(data['EntryType']);
    }
    
    if (data['Id']) {
      this['Id'].constructFromObject(data['Id']);
    }
    
    if (data['Links']) {
      this['Links'].constructFromObject(data['Links']);
    }
    
    if (data['Message']) {
      this['Message'] = ApiClient.convertToType(data['Message'], 'String');
    }
    
    if (data['MessageArgs']) {
      this['MessageArgs'] = ApiClient.convertToType(data['MessageArgs'], ['String']);
    }
    
    if (data['MessageId']) {
      this['MessageId'] = ApiClient.convertToType(data['MessageId'], 'String');
    }
    
    if (data['Name']) {
      this['Name'].constructFromObject(data['Name']);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['SensorType']) {
      this['SensorType'].constructFromObject(data['SensorType']);
    }
    
    if (data['Severity']) {
      this['Severity'].constructFromObject(data['Severity']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Odata400Context}
   **/
  LogEntry100LogEntry.prototype.getOdataContext = function() {
    return this['@odata.context'];
  }

  /**
   * @param {Odata400Context} odataContext
   **/
  LogEntry100LogEntry.prototype.setOdataContext = function(odataContext) {
    this['@odata.context'] = odataContext;
  }
  
  /**
   * @return {Odata400Id}
   **/
  LogEntry100LogEntry.prototype.getOdataId = function() {
    return this['@odata.id'];
  }

  /**
   * @param {Odata400Id} odataId
   **/
  LogEntry100LogEntry.prototype.setOdataId = function(odataId) {
    this['@odata.id'] = odataId;
  }
  
  /**
   * @return {Odata400Type}
   **/
  LogEntry100LogEntry.prototype.getOdataType = function() {
    return this['@odata.type'];
  }

  /**
   * @param {Odata400Type} odataType
   **/
  LogEntry100LogEntry.prototype.setOdataType = function(odataType) {
    this['@odata.type'] = odataType;
  }
  
  /**
   * get The time the log entry was created.
   * @return {Date}
   **/
  LogEntry100LogEntry.prototype.getCreated = function() {
    return this['Created'];
  }

  /**
   * set The time the log entry was created.
   * @param {Date} created
   **/
  LogEntry100LogEntry.prototype.setCreated = function(created) {
    this['Created'] = created;
  }
  
  /**
   * @return {ResourceDescription}
   **/
  LogEntry100LogEntry.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {ResourceDescription} description
   **/
  LogEntry100LogEntry.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * get If the EntryType is SEL, this will have the entry code for the log entry.
   * @return {LogEntry100LogEntryCode}
   **/
  LogEntry100LogEntry.prototype.getEntryCode = function() {
    return this['EntryCode'];
  }

  /**
   * set If the EntryType is SEL, this will have the entry code for the log entry.
   * @param {LogEntry100LogEntryCode} entryCode
   **/
  LogEntry100LogEntry.prototype.setEntryCode = function(entryCode) {
    this['EntryCode'] = entryCode;
  }
  
  /**
   * get his is the type of log entry.
   * @return {LogEntry100LogEntryType}
   **/
  LogEntry100LogEntry.prototype.getEntryType = function() {
    return this['EntryType'];
  }

  /**
   * set his is the type of log entry.
   * @param {LogEntry100LogEntryType} entryType
   **/
  LogEntry100LogEntry.prototype.setEntryType = function(entryType) {
    this['EntryType'] = entryType;
  }
  
  /**
   * @return {ResourceId}
   **/
  LogEntry100LogEntry.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {ResourceId} id
   **/
  LogEntry100LogEntry.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * @return {LogEntry100LogEntryLinks}
   **/
  LogEntry100LogEntry.prototype.getLinks = function() {
    return this['Links'];
  }

  /**
   * @param {LogEntry100LogEntryLinks} links
   **/
  LogEntry100LogEntry.prototype.setLinks = function(links) {
    this['Links'] = links;
  }
  
  /**
   * get This property decodes from EntryType:  If it is Event then it is a message string.  Otherwise, it is SEL or Oem specific.  In most cases, this will be the actual Log Entry.
   * @return {String}
   **/
  LogEntry100LogEntry.prototype.getMessage = function() {
    return this['Message'];
  }

  /**
   * set This property decodes from EntryType:  If it is Event then it is a message string.  Otherwise, it is SEL or Oem specific.  In most cases, this will be the actual Log Entry.
   * @param {String} message
   **/
  LogEntry100LogEntry.prototype.setMessage = function(message) {
    this['Message'] = message;
  }
  
  /**
   * get The values of this property shall be any arguments for the message.
   * @return {[String]}
   **/
  LogEntry100LogEntry.prototype.getMessageArgs = function() {
    return this['MessageArgs'];
  }

  /**
   * set The values of this property shall be any arguments for the message.
   * @param {[String]} messageArgs
   **/
  LogEntry100LogEntry.prototype.setMessageArgs = function(messageArgs) {
    this['MessageArgs'] = messageArgs;
  }
  
  /**
   * get This property decodes from EntryType:  If it is Event then it is a message id.  Otherwise, it is SEL or Oem specific.  This value is only used for registries - for more information, see the specification.
   * @return {String}
   **/
  LogEntry100LogEntry.prototype.getMessageId = function() {
    return this['MessageId'];
  }

  /**
   * set This property decodes from EntryType:  If it is Event then it is a message id.  Otherwise, it is SEL or Oem specific.  This value is only used for registries - for more information, see the specification.
   * @param {String} messageId
   **/
  LogEntry100LogEntry.prototype.setMessageId = function(messageId) {
    this['MessageId'] = messageId;
  }
  
  /**
   * @return {ResourceName}
   **/
  LogEntry100LogEntry.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {ResourceName} name
   **/
  LogEntry100LogEntry.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  LogEntry100LogEntry.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  LogEntry100LogEntry.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get If the EntryType is SEL, this will have the sensor type that the log entry pertains to.
   * @return {LogEntry100SensorType}
   **/
  LogEntry100LogEntry.prototype.getSensorType = function() {
    return this['SensorType'];
  }

  /**
   * set If the EntryType is SEL, this will have the sensor type that the log entry pertains to.
   * @param {LogEntry100SensorType} sensorType
   **/
  LogEntry100LogEntry.prototype.setSensorType = function(sensorType) {
    this['SensorType'] = sensorType;
  }
  
  /**
   * get This is the severity of the log entry.
   * @return {LogEntry100EventSeverity}
   **/
  LogEntry100LogEntry.prototype.getSeverity = function() {
    return this['Severity'];
  }

  /**
   * set This is the severity of the log entry.
   * @param {LogEntry100EventSeverity} severity
   **/
  LogEntry100LogEntry.prototype.setSeverity = function(severity) {
    this['Severity'] = severity;
  }
  
  

  LogEntry100LogEntry.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.LogEntry100LogEntry = LogEntry100LogEntry;
  }

  return LogEntry100LogEntry;
  
  
}));
