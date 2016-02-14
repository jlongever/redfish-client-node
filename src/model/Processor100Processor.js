(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Odata400Context', './Odata400Id', './Odata400Type', './Processor100InstructionSet', './Processor100ProcessorArchitecture', './Processor100ProcessorId', './Processor100ProcessorType', './ResourceDescription', './ResourceId', './ResourceName', './ResourceOem', './ResourceStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Odata400Context'), require('./Odata400Id'), require('./Odata400Type'), require('./Processor100InstructionSet'), require('./Processor100ProcessorArchitecture'), require('./Processor100ProcessorId'), require('./Processor100ProcessorType'), require('./ResourceDescription'), require('./ResourceId'), require('./ResourceName'), require('./ResourceOem'), require('./ResourceStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Odata400Context, root.RedfishV100.Odata400Id, root.RedfishV100.Odata400Type, root.RedfishV100.Processor100InstructionSet, root.RedfishV100.Processor100ProcessorArchitecture, root.RedfishV100.Processor100ProcessorId, root.RedfishV100.Processor100ProcessorType, root.RedfishV100.ResourceDescription, root.RedfishV100.ResourceId, root.RedfishV100.ResourceName, root.RedfishV100.ResourceOem, root.RedfishV100.ResourceStatus);
  }
}(this, function(module, ApiClient, Odata400Context, Odata400Id, Odata400Type, Processor100InstructionSet, Processor100ProcessorArchitecture, Processor100ProcessorId, Processor100ProcessorType, ResourceDescription, ResourceId, ResourceName, ResourceOem, ResourceStatus) {
  'use strict';

  
  

  /**
   * This is the schema definition for the Processor resource.  It represents the properties of a processor attached to a System.
   **/
  var Processor100Processor = function Processor100Processor() { 
    
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
     * datatype: ResourceId
     **/
    this['Id'] = new ResourceId();
    
    /**
     * The instruction set of the processor
     * datatype: Processor100InstructionSet
     **/
    this['InstructionSet'] = new Processor100InstructionSet();
    
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
     * The architecture of the processor
     * datatype: Processor100ProcessorArchitecture
     **/
    this['ProcessorArchitecture'] = new Processor100ProcessorArchitecture();
    
    /**
     * Identification information for this processor.
     * datatype: Processor100ProcessorId
     **/
    this['ProcessorId'] = new Processor100ProcessorId();
    
    /**
     * The type of processor
     * datatype: Processor100ProcessorType
     **/
    this['ProcessorType'] = new Processor100ProcessorType();
    
    /**
     * datatype: ResourceStatus
     **/
    this['Status'] = new ResourceStatus();
    
  };

  Processor100Processor.prototype.constructFromObject = function(data) {
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
    
    if (data['Id']) {
      this['Id'].constructFromObject(data['Id']);
    }
    
    if (data['InstructionSet']) {
      this['InstructionSet'].constructFromObject(data['InstructionSet']);
    }
    
    if (data['Name']) {
      this['Name'].constructFromObject(data['Name']);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['ProcessorArchitecture']) {
      this['ProcessorArchitecture'].constructFromObject(data['ProcessorArchitecture']);
    }
    
    if (data['ProcessorId']) {
      this['ProcessorId'].constructFromObject(data['ProcessorId']);
    }
    
    if (data['ProcessorType']) {
      this['ProcessorType'].constructFromObject(data['ProcessorType']);
    }
    
    if (data['Status']) {
      this['Status'].constructFromObject(data['Status']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Odata400Context}
   **/
  Processor100Processor.prototype.getOdataContext = function() {
    return this['@odata.context'];
  }

  /**
   * @param {Odata400Context} odataContext
   **/
  Processor100Processor.prototype.setOdataContext = function(odataContext) {
    this['@odata.context'] = odataContext;
  }
  
  /**
   * @return {Odata400Id}
   **/
  Processor100Processor.prototype.getOdataId = function() {
    return this['@odata.id'];
  }

  /**
   * @param {Odata400Id} odataId
   **/
  Processor100Processor.prototype.setOdataId = function(odataId) {
    this['@odata.id'] = odataId;
  }
  
  /**
   * @return {Odata400Type}
   **/
  Processor100Processor.prototype.getOdataType = function() {
    return this['@odata.type'];
  }

  /**
   * @param {Odata400Type} odataType
   **/
  Processor100Processor.prototype.setOdataType = function(odataType) {
    this['@odata.type'] = odataType;
  }
  
  /**
   * @return {ResourceDescription}
   **/
  Processor100Processor.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {ResourceDescription} description
   **/
  Processor100Processor.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * @return {ResourceId}
   **/
  Processor100Processor.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {ResourceId} id
   **/
  Processor100Processor.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * get The instruction set of the processor
   * @return {Processor100InstructionSet}
   **/
  Processor100Processor.prototype.getInstructionSet = function() {
    return this['InstructionSet'];
  }

  /**
   * set The instruction set of the processor
   * @param {Processor100InstructionSet} instructionSet
   **/
  Processor100Processor.prototype.setInstructionSet = function(instructionSet) {
    this['InstructionSet'] = instructionSet;
  }
  
  /**
   * @return {ResourceName}
   **/
  Processor100Processor.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {ResourceName} name
   **/
  Processor100Processor.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  Processor100Processor.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  Processor100Processor.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get The architecture of the processor
   * @return {Processor100ProcessorArchitecture}
   **/
  Processor100Processor.prototype.getProcessorArchitecture = function() {
    return this['ProcessorArchitecture'];
  }

  /**
   * set The architecture of the processor
   * @param {Processor100ProcessorArchitecture} processorArchitecture
   **/
  Processor100Processor.prototype.setProcessorArchitecture = function(processorArchitecture) {
    this['ProcessorArchitecture'] = processorArchitecture;
  }
  
  /**
   * get Identification information for this processor.
   * @return {Processor100ProcessorId}
   **/
  Processor100Processor.prototype.getProcessorId = function() {
    return this['ProcessorId'];
  }

  /**
   * set Identification information for this processor.
   * @param {Processor100ProcessorId} processorId
   **/
  Processor100Processor.prototype.setProcessorId = function(processorId) {
    this['ProcessorId'] = processorId;
  }
  
  /**
   * get The type of processor
   * @return {Processor100ProcessorType}
   **/
  Processor100Processor.prototype.getProcessorType = function() {
    return this['ProcessorType'];
  }

  /**
   * set The type of processor
   * @param {Processor100ProcessorType} processorType
   **/
  Processor100Processor.prototype.setProcessorType = function(processorType) {
    this['ProcessorType'] = processorType;
  }
  
  /**
   * @return {ResourceStatus}
   **/
  Processor100Processor.prototype.getStatus = function() {
    return this['Status'];
  }

  /**
   * @param {ResourceStatus} status
   **/
  Processor100Processor.prototype.setStatus = function(status) {
    this['Status'] = status;
  }
  
  

  Processor100Processor.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.Processor100Processor = Processor100Processor;
  }

  return Processor100Processor;
  
  
}));
