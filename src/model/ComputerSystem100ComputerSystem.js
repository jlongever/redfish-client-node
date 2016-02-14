(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ComputerSystem100Boot', './ComputerSystem100ComputerSystemActions', './ComputerSystem100ComputerSystemLinks', './ComputerSystem100IndicatorLED', './ComputerSystem100MemorySummary', './ComputerSystem100PowerState', './ComputerSystem100ProcessorSummary', './ComputerSystem100SystemType', './EthernetInterfaceCollectionEthernetInterfaceCollection', './LogServiceCollectionLogServiceCollection', './Odata400Context', './Odata400Id', './Odata400Type', './ProcessorCollectionProcessorCollection', './ResourceDescription', './ResourceId', './ResourceName', './ResourceOem', './ResourceStatus', './ResourceUUID', './SimpleStorageCollectionSimpleStorageCollection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ComputerSystem100Boot'), require('./ComputerSystem100ComputerSystemActions'), require('./ComputerSystem100ComputerSystemLinks'), require('./ComputerSystem100IndicatorLED'), require('./ComputerSystem100MemorySummary'), require('./ComputerSystem100PowerState'), require('./ComputerSystem100ProcessorSummary'), require('./ComputerSystem100SystemType'), require('./EthernetInterfaceCollectionEthernetInterfaceCollection'), require('./LogServiceCollectionLogServiceCollection'), require('./Odata400Context'), require('./Odata400Id'), require('./Odata400Type'), require('./ProcessorCollectionProcessorCollection'), require('./ResourceDescription'), require('./ResourceId'), require('./ResourceName'), require('./ResourceOem'), require('./ResourceStatus'), require('./ResourceUUID'), require('./SimpleStorageCollectionSimpleStorageCollection'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.ComputerSystem100Boot, root.RedfishV100.ComputerSystem100ComputerSystemActions, root.RedfishV100.ComputerSystem100ComputerSystemLinks, root.RedfishV100.ComputerSystem100IndicatorLED, root.RedfishV100.ComputerSystem100MemorySummary, root.RedfishV100.ComputerSystem100PowerState, root.RedfishV100.ComputerSystem100ProcessorSummary, root.RedfishV100.ComputerSystem100SystemType, root.RedfishV100.EthernetInterfaceCollectionEthernetInterfaceCollection, root.RedfishV100.LogServiceCollectionLogServiceCollection, root.RedfishV100.Odata400Context, root.RedfishV100.Odata400Id, root.RedfishV100.Odata400Type, root.RedfishV100.ProcessorCollectionProcessorCollection, root.RedfishV100.ResourceDescription, root.RedfishV100.ResourceId, root.RedfishV100.ResourceName, root.RedfishV100.ResourceOem, root.RedfishV100.ResourceStatus, root.RedfishV100.ResourceUUID, root.RedfishV100.SimpleStorageCollectionSimpleStorageCollection);
  }
}(this, function(module, ApiClient, ComputerSystem100Boot, ComputerSystem100ComputerSystemActions, ComputerSystem100ComputerSystemLinks, ComputerSystem100IndicatorLED, ComputerSystem100MemorySummary, ComputerSystem100PowerState, ComputerSystem100ProcessorSummary, ComputerSystem100SystemType, EthernetInterfaceCollectionEthernetInterfaceCollection, LogServiceCollectionLogServiceCollection, Odata400Context, Odata400Id, Odata400Type, ProcessorCollectionProcessorCollection, ResourceDescription, ResourceId, ResourceName, ResourceOem, ResourceStatus, ResourceUUID, SimpleStorageCollectionSimpleStorageCollection) {
  'use strict';

  
  

  /**
   * This schema defines a computer system and its respective properties.  A computer system represents a machine (physical or virtual) and the local resources such as memory, cpu and other devices that can be accessed from that machine.
   **/
  var ComputerSystem100ComputerSystem = function ComputerSystem100ComputerSystem() { 
    
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
     * datatype: ComputerSystem100ComputerSystemActions
     **/
    this['Actions'] = new ComputerSystem100ComputerSystemActions();
    
    /**
     * Information about the boot settings for this system
     * datatype: ComputerSystem100Boot
     **/
    this['Boot'] = new ComputerSystem100Boot();
    
    /**
     * datatype: ResourceDescription
     **/
    this['Description'] = new ResourceDescription();
    
    /**
     * A reference to the collection of Ethernet interfaces associated with this system
     * datatype: EthernetInterfaceCollectionEthernetInterfaceCollection
     **/
    this['EthernetInterfaces'] = new EthernetInterfaceCollectionEthernetInterfaceCollection();
    
    /**
     * datatype: ResourceId
     **/
    this['Id'] = new ResourceId();
    
    /**
     * The state of the indicator LED, used to identify the system
     * datatype: ComputerSystem100IndicatorLED
     **/
    this['IndicatorLED'] = new ComputerSystem100IndicatorLED();
    
    /**
     * datatype: ComputerSystem100ComputerSystemLinks
     **/
    this['Links'] = new ComputerSystem100ComputerSystemLinks();
    
    /**
     * A reference to the collection of Log Services associated with this system
     * datatype: LogServiceCollectionLogServiceCollection
     **/
    this['LogServices'] = new LogServiceCollectionLogServiceCollection();
    
    /**
     * This object describes the central memory of the system in general detail.
     * datatype: ComputerSystem100MemorySummary
     **/
    this['MemorySummary'] = new ComputerSystem100MemorySummary();
    
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
     * This is the current power state of the system
     * datatype: ComputerSystem100PowerState
     **/
    this['PowerState'] = new ComputerSystem100PowerState();
    
    /**
     * This object describes the central processors of the system in general detail.
     * datatype: ComputerSystem100ProcessorSummary
     **/
    this['ProcessorSummary'] = new ComputerSystem100ProcessorSummary();
    
    /**
     * A reference to the collection of Processors associated with this system
     * datatype: ProcessorCollectionProcessorCollection
     **/
    this['Processors'] = new ProcessorCollectionProcessorCollection();
    
    /**
     * A reference to the collection of storage devices associated with this system
     * datatype: SimpleStorageCollectionSimpleStorageCollection
     **/
    this['SimpleStorage'] = new SimpleStorageCollectionSimpleStorageCollection();
    
    /**
     * datatype: ResourceStatus
     **/
    this['Status'] = new ResourceStatus();
    
    /**
     * The type of computer system represented by this resource.
     * datatype: ComputerSystem100SystemType
     **/
    this['SystemType'] = new ComputerSystem100SystemType();
    
    /**
     * The universal unique identifier (UUID) for this system
     * datatype: ResourceUUID
     **/
    this['UUID'] = new ResourceUUID();
    
  };

  ComputerSystem100ComputerSystem.prototype.constructFromObject = function(data) {
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
    
    if (data['Actions']) {
      this['Actions'].constructFromObject(data['Actions']);
    }
    
    if (data['Boot']) {
      this['Boot'].constructFromObject(data['Boot']);
    }
    
    if (data['Description']) {
      this['Description'].constructFromObject(data['Description']);
    }
    
    if (data['EthernetInterfaces']) {
      this['EthernetInterfaces'].constructFromObject(data['EthernetInterfaces']);
    }
    
    if (data['Id']) {
      this['Id'].constructFromObject(data['Id']);
    }
    
    if (data['IndicatorLED']) {
      this['IndicatorLED'].constructFromObject(data['IndicatorLED']);
    }
    
    if (data['Links']) {
      this['Links'].constructFromObject(data['Links']);
    }
    
    if (data['LogServices']) {
      this['LogServices'].constructFromObject(data['LogServices']);
    }
    
    if (data['MemorySummary']) {
      this['MemorySummary'].constructFromObject(data['MemorySummary']);
    }
    
    if (data['Name']) {
      this['Name'].constructFromObject(data['Name']);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['PowerState']) {
      this['PowerState'].constructFromObject(data['PowerState']);
    }
    
    if (data['ProcessorSummary']) {
      this['ProcessorSummary'].constructFromObject(data['ProcessorSummary']);
    }
    
    if (data['Processors']) {
      this['Processors'].constructFromObject(data['Processors']);
    }
    
    if (data['SimpleStorage']) {
      this['SimpleStorage'].constructFromObject(data['SimpleStorage']);
    }
    
    if (data['Status']) {
      this['Status'].constructFromObject(data['Status']);
    }
    
    if (data['SystemType']) {
      this['SystemType'].constructFromObject(data['SystemType']);
    }
    
    if (data['UUID']) {
      this['UUID'].constructFromObject(data['UUID']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Odata400Context}
   **/
  ComputerSystem100ComputerSystem.prototype.getOdataContext = function() {
    return this['@odata.context'];
  }

  /**
   * @param {Odata400Context} odataContext
   **/
  ComputerSystem100ComputerSystem.prototype.setOdataContext = function(odataContext) {
    this['@odata.context'] = odataContext;
  }
  
  /**
   * @return {Odata400Id}
   **/
  ComputerSystem100ComputerSystem.prototype.getOdataId = function() {
    return this['@odata.id'];
  }

  /**
   * @param {Odata400Id} odataId
   **/
  ComputerSystem100ComputerSystem.prototype.setOdataId = function(odataId) {
    this['@odata.id'] = odataId;
  }
  
  /**
   * @return {Odata400Type}
   **/
  ComputerSystem100ComputerSystem.prototype.getOdataType = function() {
    return this['@odata.type'];
  }

  /**
   * @param {Odata400Type} odataType
   **/
  ComputerSystem100ComputerSystem.prototype.setOdataType = function(odataType) {
    this['@odata.type'] = odataType;
  }
  
  /**
   * @return {ComputerSystem100ComputerSystemActions}
   **/
  ComputerSystem100ComputerSystem.prototype.getActions = function() {
    return this['Actions'];
  }

  /**
   * @param {ComputerSystem100ComputerSystemActions} actions
   **/
  ComputerSystem100ComputerSystem.prototype.setActions = function(actions) {
    this['Actions'] = actions;
  }
  
  /**
   * get Information about the boot settings for this system
   * @return {ComputerSystem100Boot}
   **/
  ComputerSystem100ComputerSystem.prototype.getBoot = function() {
    return this['Boot'];
  }

  /**
   * set Information about the boot settings for this system
   * @param {ComputerSystem100Boot} boot
   **/
  ComputerSystem100ComputerSystem.prototype.setBoot = function(boot) {
    this['Boot'] = boot;
  }
  
  /**
   * @return {ResourceDescription}
   **/
  ComputerSystem100ComputerSystem.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {ResourceDescription} description
   **/
  ComputerSystem100ComputerSystem.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * get A reference to the collection of Ethernet interfaces associated with this system
   * @return {EthernetInterfaceCollectionEthernetInterfaceCollection}
   **/
  ComputerSystem100ComputerSystem.prototype.getEthernetInterfaces = function() {
    return this['EthernetInterfaces'];
  }

  /**
   * set A reference to the collection of Ethernet interfaces associated with this system
   * @param {EthernetInterfaceCollectionEthernetInterfaceCollection} ethernetInterfaces
   **/
  ComputerSystem100ComputerSystem.prototype.setEthernetInterfaces = function(ethernetInterfaces) {
    this['EthernetInterfaces'] = ethernetInterfaces;
  }
  
  /**
   * @return {ResourceId}
   **/
  ComputerSystem100ComputerSystem.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {ResourceId} id
   **/
  ComputerSystem100ComputerSystem.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * get The state of the indicator LED, used to identify the system
   * @return {ComputerSystem100IndicatorLED}
   **/
  ComputerSystem100ComputerSystem.prototype.getIndicatorLED = function() {
    return this['IndicatorLED'];
  }

  /**
   * set The state of the indicator LED, used to identify the system
   * @param {ComputerSystem100IndicatorLED} indicatorLED
   **/
  ComputerSystem100ComputerSystem.prototype.setIndicatorLED = function(indicatorLED) {
    this['IndicatorLED'] = indicatorLED;
  }
  
  /**
   * @return {ComputerSystem100ComputerSystemLinks}
   **/
  ComputerSystem100ComputerSystem.prototype.getLinks = function() {
    return this['Links'];
  }

  /**
   * @param {ComputerSystem100ComputerSystemLinks} links
   **/
  ComputerSystem100ComputerSystem.prototype.setLinks = function(links) {
    this['Links'] = links;
  }
  
  /**
   * get A reference to the collection of Log Services associated with this system
   * @return {LogServiceCollectionLogServiceCollection}
   **/
  ComputerSystem100ComputerSystem.prototype.getLogServices = function() {
    return this['LogServices'];
  }

  /**
   * set A reference to the collection of Log Services associated with this system
   * @param {LogServiceCollectionLogServiceCollection} logServices
   **/
  ComputerSystem100ComputerSystem.prototype.setLogServices = function(logServices) {
    this['LogServices'] = logServices;
  }
  
  /**
   * get This object describes the central memory of the system in general detail.
   * @return {ComputerSystem100MemorySummary}
   **/
  ComputerSystem100ComputerSystem.prototype.getMemorySummary = function() {
    return this['MemorySummary'];
  }

  /**
   * set This object describes the central memory of the system in general detail.
   * @param {ComputerSystem100MemorySummary} memorySummary
   **/
  ComputerSystem100ComputerSystem.prototype.setMemorySummary = function(memorySummary) {
    this['MemorySummary'] = memorySummary;
  }
  
  /**
   * @return {ResourceName}
   **/
  ComputerSystem100ComputerSystem.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {ResourceName} name
   **/
  ComputerSystem100ComputerSystem.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  ComputerSystem100ComputerSystem.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  ComputerSystem100ComputerSystem.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get This is the current power state of the system
   * @return {ComputerSystem100PowerState}
   **/
  ComputerSystem100ComputerSystem.prototype.getPowerState = function() {
    return this['PowerState'];
  }

  /**
   * set This is the current power state of the system
   * @param {ComputerSystem100PowerState} powerState
   **/
  ComputerSystem100ComputerSystem.prototype.setPowerState = function(powerState) {
    this['PowerState'] = powerState;
  }
  
  /**
   * get This object describes the central processors of the system in general detail.
   * @return {ComputerSystem100ProcessorSummary}
   **/
  ComputerSystem100ComputerSystem.prototype.getProcessorSummary = function() {
    return this['ProcessorSummary'];
  }

  /**
   * set This object describes the central processors of the system in general detail.
   * @param {ComputerSystem100ProcessorSummary} processorSummary
   **/
  ComputerSystem100ComputerSystem.prototype.setProcessorSummary = function(processorSummary) {
    this['ProcessorSummary'] = processorSummary;
  }
  
  /**
   * get A reference to the collection of Processors associated with this system
   * @return {ProcessorCollectionProcessorCollection}
   **/
  ComputerSystem100ComputerSystem.prototype.getProcessors = function() {
    return this['Processors'];
  }

  /**
   * set A reference to the collection of Processors associated with this system
   * @param {ProcessorCollectionProcessorCollection} processors
   **/
  ComputerSystem100ComputerSystem.prototype.setProcessors = function(processors) {
    this['Processors'] = processors;
  }
  
  /**
   * get A reference to the collection of storage devices associated with this system
   * @return {SimpleStorageCollectionSimpleStorageCollection}
   **/
  ComputerSystem100ComputerSystem.prototype.getSimpleStorage = function() {
    return this['SimpleStorage'];
  }

  /**
   * set A reference to the collection of storage devices associated with this system
   * @param {SimpleStorageCollectionSimpleStorageCollection} simpleStorage
   **/
  ComputerSystem100ComputerSystem.prototype.setSimpleStorage = function(simpleStorage) {
    this['SimpleStorage'] = simpleStorage;
  }
  
  /**
   * @return {ResourceStatus}
   **/
  ComputerSystem100ComputerSystem.prototype.getStatus = function() {
    return this['Status'];
  }

  /**
   * @param {ResourceStatus} status
   **/
  ComputerSystem100ComputerSystem.prototype.setStatus = function(status) {
    this['Status'] = status;
  }
  
  /**
   * get The type of computer system represented by this resource.
   * @return {ComputerSystem100SystemType}
   **/
  ComputerSystem100ComputerSystem.prototype.getSystemType = function() {
    return this['SystemType'];
  }

  /**
   * set The type of computer system represented by this resource.
   * @param {ComputerSystem100SystemType} systemType
   **/
  ComputerSystem100ComputerSystem.prototype.setSystemType = function(systemType) {
    this['SystemType'] = systemType;
  }
  
  /**
   * get The universal unique identifier (UUID) for this system
   * @return {ResourceUUID}
   **/
  ComputerSystem100ComputerSystem.prototype.getUUID = function() {
    return this['UUID'];
  }

  /**
   * set The universal unique identifier (UUID) for this system
   * @param {ResourceUUID} UUID
   **/
  ComputerSystem100ComputerSystem.prototype.setUUID = function(UUID) {
    this['UUID'] = UUID;
  }
  
  

  ComputerSystem100ComputerSystem.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.ComputerSystem100ComputerSystem = ComputerSystem100ComputerSystem;
  }

  return ComputerSystem100ComputerSystem;
  
  
}));
