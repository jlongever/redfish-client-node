(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Message100Message', './Odata400Context', './Odata400Id', './Odata400Type', './ResourceDescription', './ResourceHealth', './ResourceId', './ResourceName', './ResourceOem', './Task100TaskState'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Message100Message'), require('./Odata400Context'), require('./Odata400Id'), require('./Odata400Type'), require('./ResourceDescription'), require('./ResourceHealth'), require('./ResourceId'), require('./ResourceName'), require('./ResourceOem'), require('./Task100TaskState'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Message100Message, root.RedfishV100.Odata400Context, root.RedfishV100.Odata400Id, root.RedfishV100.Odata400Type, root.RedfishV100.ResourceDescription, root.RedfishV100.ResourceHealth, root.RedfishV100.ResourceId, root.RedfishV100.ResourceName, root.RedfishV100.ResourceOem, root.RedfishV100.Task100TaskState);
  }
}(this, function(module, ApiClient, Message100Message, Odata400Context, Odata400Id, Odata400Type, ResourceDescription, ResourceHealth, ResourceId, ResourceName, ResourceOem, Task100TaskState) {
  'use strict';

  
  

  /**
   * This is the schema definition for a Task resource.
   **/
  var Task100Task = function Task100Task() { 
    
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
     * The date-time stamp that the task was last completed.
     * datatype: Date
     **/
    this['EndTime'] = null;
    
    /**
     * datatype: ResourceId
     **/
    this['Id'] = new ResourceId();
    
    /**
     * This is an array of messages associated with the task.
     * datatype: [Message100Message]
     **/
    this['Messages'] = [];
    
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
     * The date-time stamp that the task was last started.
     * datatype: Date
     **/
    this['StartTime'] = null;
    
    /**
     * The state of the task.
     * datatype: Task100TaskState
     **/
    this['TaskState'] = new Task100TaskState();
    
    /**
     * This is the completion status of the task.
     * datatype: ResourceHealth
     **/
    this['TaskStatus'] = new ResourceHealth();
    
  };

  Task100Task.prototype.constructFromObject = function(data) {
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
    
    if (data['EndTime']) {
      this['EndTime'] = ApiClient.convertToType(data['EndTime'], 'Date');
    }
    
    if (data['Id']) {
      this['Id'].constructFromObject(data['Id']);
    }
    
    if (data['Messages']) {
      this['Messages'] = ApiClient.convertToType(data['Messages'], [Message100Message]);
    }
    
    if (data['Name']) {
      this['Name'].constructFromObject(data['Name']);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['StartTime']) {
      this['StartTime'] = ApiClient.convertToType(data['StartTime'], 'Date');
    }
    
    if (data['TaskState']) {
      this['TaskState'].constructFromObject(data['TaskState']);
    }
    
    if (data['TaskStatus']) {
      this['TaskStatus'].constructFromObject(data['TaskStatus']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Odata400Context}
   **/
  Task100Task.prototype.getOdataContext = function() {
    return this['@odata.context'];
  }

  /**
   * @param {Odata400Context} odataContext
   **/
  Task100Task.prototype.setOdataContext = function(odataContext) {
    this['@odata.context'] = odataContext;
  }
  
  /**
   * @return {Odata400Id}
   **/
  Task100Task.prototype.getOdataId = function() {
    return this['@odata.id'];
  }

  /**
   * @param {Odata400Id} odataId
   **/
  Task100Task.prototype.setOdataId = function(odataId) {
    this['@odata.id'] = odataId;
  }
  
  /**
   * @return {Odata400Type}
   **/
  Task100Task.prototype.getOdataType = function() {
    return this['@odata.type'];
  }

  /**
   * @param {Odata400Type} odataType
   **/
  Task100Task.prototype.setOdataType = function(odataType) {
    this['@odata.type'] = odataType;
  }
  
  /**
   * @return {ResourceDescription}
   **/
  Task100Task.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {ResourceDescription} description
   **/
  Task100Task.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * get The date-time stamp that the task was last completed.
   * @return {Date}
   **/
  Task100Task.prototype.getEndTime = function() {
    return this['EndTime'];
  }

  /**
   * set The date-time stamp that the task was last completed.
   * @param {Date} endTime
   **/
  Task100Task.prototype.setEndTime = function(endTime) {
    this['EndTime'] = endTime;
  }
  
  /**
   * @return {ResourceId}
   **/
  Task100Task.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {ResourceId} id
   **/
  Task100Task.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * get This is an array of messages associated with the task.
   * @return {[Message100Message]}
   **/
  Task100Task.prototype.getMessages = function() {
    return this['Messages'];
  }

  /**
   * set This is an array of messages associated with the task.
   * @param {[Message100Message]} messages
   **/
  Task100Task.prototype.setMessages = function(messages) {
    this['Messages'] = messages;
  }
  
  /**
   * @return {ResourceName}
   **/
  Task100Task.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {ResourceName} name
   **/
  Task100Task.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  Task100Task.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  Task100Task.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get The date-time stamp that the task was last started.
   * @return {Date}
   **/
  Task100Task.prototype.getStartTime = function() {
    return this['StartTime'];
  }

  /**
   * set The date-time stamp that the task was last started.
   * @param {Date} startTime
   **/
  Task100Task.prototype.setStartTime = function(startTime) {
    this['StartTime'] = startTime;
  }
  
  /**
   * get The state of the task.
   * @return {Task100TaskState}
   **/
  Task100Task.prototype.getTaskState = function() {
    return this['TaskState'];
  }

  /**
   * set The state of the task.
   * @param {Task100TaskState} taskState
   **/
  Task100Task.prototype.setTaskState = function(taskState) {
    this['TaskState'] = taskState;
  }
  
  /**
   * get This is the completion status of the task.
   * @return {ResourceHealth}
   **/
  Task100Task.prototype.getTaskStatus = function() {
    return this['TaskStatus'];
  }

  /**
   * set This is the completion status of the task.
   * @param {ResourceHealth} taskStatus
   **/
  Task100Task.prototype.setTaskStatus = function(taskStatus) {
    this['TaskStatus'] = taskStatus;
  }
  
  

  Task100Task.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.Task100Task = Task100Task;
  }

  return Task100Task;
  
  
}));
