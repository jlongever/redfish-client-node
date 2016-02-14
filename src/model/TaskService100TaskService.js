(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Odata400Context', './Odata400Id', './Odata400Type', './ResourceDescription', './ResourceId', './ResourceName', './ResourceOem', './ResourceStatus', './TaskCollectionTaskCollection', './TaskService100OverWritePolicy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Odata400Context'), require('./Odata400Id'), require('./Odata400Type'), require('./ResourceDescription'), require('./ResourceId'), require('./ResourceName'), require('./ResourceOem'), require('./ResourceStatus'), require('./TaskCollectionTaskCollection'), require('./TaskService100OverWritePolicy'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Odata400Context, root.RedfishV100.Odata400Id, root.RedfishV100.Odata400Type, root.RedfishV100.ResourceDescription, root.RedfishV100.ResourceId, root.RedfishV100.ResourceName, root.RedfishV100.ResourceOem, root.RedfishV100.ResourceStatus, root.RedfishV100.TaskCollectionTaskCollection, root.RedfishV100.TaskService100OverWritePolicy);
  }
}(this, function(module, ApiClient, Odata400Context, Odata400Id, Odata400Type, ResourceDescription, ResourceId, ResourceName, ResourceOem, ResourceStatus, TaskCollectionTaskCollection, TaskService100OverWritePolicy) {
  'use strict';

  
  

  /**
   * This is the schema definition for the Task Service.  It represents the properties for the service itself and has links to the actual list of tasks.
   **/
  var TaskService100TaskService = function TaskService100TaskService() { 
    
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
     * Overwrite policy of completed tasks
     * datatype: TaskService100OverWritePolicy
     **/
    this['CompletedTaskOverWritePolicy'] = new TaskService100OverWritePolicy();
    
    /**
     * datatype: ResourceDescription
     **/
    this['Description'] = new ResourceDescription();
    
    /**
     * datatype: ResourceId
     **/
    this['Id'] = new ResourceId();
    
    /**
     * Send an Event upon Task State Change.
     * datatype: Boolean
     **/
    this['LifeCycleEventOnTaskStateChange'] = null;
    
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
     * datatype: ResourceStatus
     **/
    this['Status'] = new ResourceStatus();
    
    /**
     * References to the Tasks collection.
     * datatype: TaskCollectionTaskCollection
     **/
    this['Tasks'] = new TaskCollectionTaskCollection();
    
  };

  TaskService100TaskService.prototype.constructFromObject = function(data) {
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
    
    if (data['CompletedTaskOverWritePolicy']) {
      this['CompletedTaskOverWritePolicy'].constructFromObject(data['CompletedTaskOverWritePolicy']);
    }
    
    if (data['Description']) {
      this['Description'].constructFromObject(data['Description']);
    }
    
    if (data['Id']) {
      this['Id'].constructFromObject(data['Id']);
    }
    
    if (data['LifeCycleEventOnTaskStateChange']) {
      this['LifeCycleEventOnTaskStateChange'] = ApiClient.convertToType(data['LifeCycleEventOnTaskStateChange'], 'Boolean');
    }
    
    if (data['Name']) {
      this['Name'].constructFromObject(data['Name']);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['Status']) {
      this['Status'].constructFromObject(data['Status']);
    }
    
    if (data['Tasks']) {
      this['Tasks'].constructFromObject(data['Tasks']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Odata400Context}
   **/
  TaskService100TaskService.prototype.getOdataContext = function() {
    return this['@odata.context'];
  }

  /**
   * @param {Odata400Context} odataContext
   **/
  TaskService100TaskService.prototype.setOdataContext = function(odataContext) {
    this['@odata.context'] = odataContext;
  }
  
  /**
   * @return {Odata400Id}
   **/
  TaskService100TaskService.prototype.getOdataId = function() {
    return this['@odata.id'];
  }

  /**
   * @param {Odata400Id} odataId
   **/
  TaskService100TaskService.prototype.setOdataId = function(odataId) {
    this['@odata.id'] = odataId;
  }
  
  /**
   * @return {Odata400Type}
   **/
  TaskService100TaskService.prototype.getOdataType = function() {
    return this['@odata.type'];
  }

  /**
   * @param {Odata400Type} odataType
   **/
  TaskService100TaskService.prototype.setOdataType = function(odataType) {
    this['@odata.type'] = odataType;
  }
  
  /**
   * get Overwrite policy of completed tasks
   * @return {TaskService100OverWritePolicy}
   **/
  TaskService100TaskService.prototype.getCompletedTaskOverWritePolicy = function() {
    return this['CompletedTaskOverWritePolicy'];
  }

  /**
   * set Overwrite policy of completed tasks
   * @param {TaskService100OverWritePolicy} completedTaskOverWritePolicy
   **/
  TaskService100TaskService.prototype.setCompletedTaskOverWritePolicy = function(completedTaskOverWritePolicy) {
    this['CompletedTaskOverWritePolicy'] = completedTaskOverWritePolicy;
  }
  
  /**
   * @return {ResourceDescription}
   **/
  TaskService100TaskService.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {ResourceDescription} description
   **/
  TaskService100TaskService.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * @return {ResourceId}
   **/
  TaskService100TaskService.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {ResourceId} id
   **/
  TaskService100TaskService.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * get Send an Event upon Task State Change.
   * @return {Boolean}
   **/
  TaskService100TaskService.prototype.getLifeCycleEventOnTaskStateChange = function() {
    return this['LifeCycleEventOnTaskStateChange'];
  }

  /**
   * set Send an Event upon Task State Change.
   * @param {Boolean} lifeCycleEventOnTaskStateChange
   **/
  TaskService100TaskService.prototype.setLifeCycleEventOnTaskStateChange = function(lifeCycleEventOnTaskStateChange) {
    this['LifeCycleEventOnTaskStateChange'] = lifeCycleEventOnTaskStateChange;
  }
  
  /**
   * @return {ResourceName}
   **/
  TaskService100TaskService.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {ResourceName} name
   **/
  TaskService100TaskService.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  TaskService100TaskService.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  TaskService100TaskService.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * @return {ResourceStatus}
   **/
  TaskService100TaskService.prototype.getStatus = function() {
    return this['Status'];
  }

  /**
   * @param {ResourceStatus} status
   **/
  TaskService100TaskService.prototype.setStatus = function(status) {
    this['Status'] = status;
  }
  
  /**
   * get References to the Tasks collection.
   * @return {TaskCollectionTaskCollection}
   **/
  TaskService100TaskService.prototype.getTasks = function() {
    return this['Tasks'];
  }

  /**
   * set References to the Tasks collection.
   * @param {TaskCollectionTaskCollection} tasks
   **/
  TaskService100TaskService.prototype.setTasks = function(tasks) {
    this['Tasks'] = tasks;
  }
  
  

  TaskService100TaskService.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.TaskService100TaskService = TaskService100TaskService;
  }

  return TaskService100TaskService;
  
  
}));
