(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './EthernetInterfaceCollectionEthernetInterfaceCollection', './LogServiceCollectionLogServiceCollection', './Manager100CommandShell', './Manager100GraphicalConsole', './Manager100ManagerActions', './Manager100ManagerLinks', './Manager100ManagerType', './Manager100SerialConsole', './ManagerNetworkProtocol100ManagerNetworkProtocol', './Odata400Context', './Odata400Count', './Odata400Id', './Odata400IdRef', './Odata400Type', './RedundancyRedundancy', './ResourceDescription', './ResourceId', './ResourceName', './ResourceOem', './ResourceStatus', './ResourceUUID', './SerialInterfaceCollectionSerialInterfaceCollection', './VirtualMediaCollectionVirtualMediaCollection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./EthernetInterfaceCollectionEthernetInterfaceCollection'), require('./LogServiceCollectionLogServiceCollection'), require('./Manager100CommandShell'), require('./Manager100GraphicalConsole'), require('./Manager100ManagerActions'), require('./Manager100ManagerLinks'), require('./Manager100ManagerType'), require('./Manager100SerialConsole'), require('./ManagerNetworkProtocol100ManagerNetworkProtocol'), require('./Odata400Context'), require('./Odata400Count'), require('./Odata400Id'), require('./Odata400IdRef'), require('./Odata400Type'), require('./RedundancyRedundancy'), require('./ResourceDescription'), require('./ResourceId'), require('./ResourceName'), require('./ResourceOem'), require('./ResourceStatus'), require('./ResourceUUID'), require('./SerialInterfaceCollectionSerialInterfaceCollection'), require('./VirtualMediaCollectionVirtualMediaCollection'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.EthernetInterfaceCollectionEthernetInterfaceCollection, root.RedfishV100.LogServiceCollectionLogServiceCollection, root.RedfishV100.Manager100CommandShell, root.RedfishV100.Manager100GraphicalConsole, root.RedfishV100.Manager100ManagerActions, root.RedfishV100.Manager100ManagerLinks, root.RedfishV100.Manager100ManagerType, root.RedfishV100.Manager100SerialConsole, root.RedfishV100.ManagerNetworkProtocol100ManagerNetworkProtocol, root.RedfishV100.Odata400Context, root.RedfishV100.Odata400Count, root.RedfishV100.Odata400Id, root.RedfishV100.Odata400IdRef, root.RedfishV100.Odata400Type, root.RedfishV100.RedundancyRedundancy, root.RedfishV100.ResourceDescription, root.RedfishV100.ResourceId, root.RedfishV100.ResourceName, root.RedfishV100.ResourceOem, root.RedfishV100.ResourceStatus, root.RedfishV100.ResourceUUID, root.RedfishV100.SerialInterfaceCollectionSerialInterfaceCollection, root.RedfishV100.VirtualMediaCollectionVirtualMediaCollection);
  }
}(this, function(module, ApiClient, EthernetInterfaceCollectionEthernetInterfaceCollection, LogServiceCollectionLogServiceCollection, Manager100CommandShell, Manager100GraphicalConsole, Manager100ManagerActions, Manager100ManagerLinks, Manager100ManagerType, Manager100SerialConsole, ManagerNetworkProtocol100ManagerNetworkProtocol, Odata400Context, Odata400Count, Odata400Id, Odata400IdRef, Odata400Type, RedundancyRedundancy, ResourceDescription, ResourceId, ResourceName, ResourceOem, ResourceStatus, ResourceUUID, SerialInterfaceCollectionSerialInterfaceCollection, VirtualMediaCollectionVirtualMediaCollection) {
  'use strict';

  
  

  /**
   * This is the schema definition for a Manager.  Examples of managers are BMCs, Enclosure Managers, Management Controllers and other subsystems assigned managability functions.
   **/
  var Manager100Manager = function Manager100Manager() { 
    
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
     * datatype: Manager100ManagerActions
     **/
    this['Actions'] = new Manager100ManagerActions();
    
    /**
     * Information about the Command Shell service provided by this manager.
     * datatype: Manager100CommandShell
     **/
    this['CommandShell'] = new Manager100CommandShell();
    
    /**
     * datatype: ResourceDescription
     **/
    this['Description'] = new ResourceDescription();
    
    /**
     * This is a reference to a collection of NICs that this manager uses for network communication.  It is here that clients will find NIC configuration options and settings.
     * datatype: EthernetInterfaceCollectionEthernetInterfaceCollection
     **/
    this['EthernetInterfaces'] = new EthernetInterfaceCollectionEthernetInterfaceCollection();
    
    /**
     * The value of this property shall contain the information about the Graphical Console (KVM-IP) service of this manager.
     * datatype: Manager100GraphicalConsole
     **/
    this['GraphicalConsole'] = new Manager100GraphicalConsole();
    
    /**
     * datatype: ResourceId
     **/
    this['Id'] = new ResourceId();
    
    /**
     * datatype: Manager100ManagerLinks
     **/
    this['Links'] = new Manager100ManagerLinks();
    
    /**
     * This is a reference to a collection of Logs used by the manager.
     * datatype: LogServiceCollectionLogServiceCollection
     **/
    this['LogServices'] = new LogServiceCollectionLogServiceCollection();
    
    /**
     * This property represents the type of manager that this resource represents.
     * datatype: Manager100ManagerType
     **/
    this['ManagerType'] = new Manager100ManagerType();
    
    /**
     * datatype: ResourceName
     **/
    this['Name'] = new ResourceName();
    
    /**
     * This is a reference to the network services and their settings that the manager controls.  It is here that clients will find network configuration options as well as network services.
     * datatype: ManagerNetworkProtocol100ManagerNetworkProtocol
     **/
    this['NetworkProtocol'] = new ManagerNetworkProtocol100ManagerNetworkProtocol();
    
    /**
     * This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
     * datatype: ResourceOem
     **/
    this['Oem'] = new ResourceOem();
    
    /**
     * Redundancy information for the managers of this system
     * datatype: [RedundancyRedundancy]
     **/
    this['Redundancy'] = [];
    
    /**
     * datatype: Odata400Count
     **/
    this['Redundancy@odata.count'] = new Odata400Count();
    
    /**
     * datatype: Odata400IdRef
     **/
    this['Redundancy@odata.navigationLink'] = new Odata400IdRef();
    
    /**
     * Information about the Serial Console service provided by this manager.
     * datatype: Manager100SerialConsole
     **/
    this['SerialConsole'] = new Manager100SerialConsole();
    
    /**
     * This is a reference to a collection of serial interfaces that this manager uses for serial and console communication.  It is here that clients will find serial configuration options and settings.
     * datatype: SerialInterfaceCollectionSerialInterfaceCollection
     **/
    this['SerialInterfaces'] = new SerialInterfaceCollectionSerialInterfaceCollection();
    
    /**
     * The UUID of the Redfish Service Entry Point provided by this manager
     * datatype: ResourceUUID
     **/
    this['ServiceEntryPointUUID'] = new ResourceUUID();
    
    /**
     * datatype: ResourceStatus
     **/
    this['Status'] = new ResourceStatus();
    
    /**
     * The Universal Unique Identifier (UUID) for this Manager
     * datatype: ResourceUUID
     **/
    this['UUID'] = new ResourceUUID();
    
    /**
     * This is a reference to the Virtual Media services for this particular manager.
     * datatype: VirtualMediaCollectionVirtualMediaCollection
     **/
    this['VirtualMedia'] = new VirtualMediaCollectionVirtualMediaCollection();
    
  };

  Manager100Manager.prototype.constructFromObject = function(data) {
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
    
    if (data['CommandShell']) {
      this['CommandShell'].constructFromObject(data['CommandShell']);
    }
    
    if (data['Description']) {
      this['Description'].constructFromObject(data['Description']);
    }
    
    if (data['EthernetInterfaces']) {
      this['EthernetInterfaces'].constructFromObject(data['EthernetInterfaces']);
    }
    
    if (data['GraphicalConsole']) {
      this['GraphicalConsole'].constructFromObject(data['GraphicalConsole']);
    }
    
    if (data['Id']) {
      this['Id'].constructFromObject(data['Id']);
    }
    
    if (data['Links']) {
      this['Links'].constructFromObject(data['Links']);
    }
    
    if (data['LogServices']) {
      this['LogServices'].constructFromObject(data['LogServices']);
    }
    
    if (data['ManagerType']) {
      this['ManagerType'].constructFromObject(data['ManagerType']);
    }
    
    if (data['Name']) {
      this['Name'].constructFromObject(data['Name']);
    }
    
    if (data['NetworkProtocol']) {
      this['NetworkProtocol'].constructFromObject(data['NetworkProtocol']);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['Redundancy']) {
      this['Redundancy'] = ApiClient.convertToType(data['Redundancy'], [RedundancyRedundancy]);
    }
    
    if (data['Redundancy@odata.count']) {
      this['Redundancy@odata.count'].constructFromObject(data['Redundancy@odata.count']);
    }
    
    if (data['Redundancy@odata.navigationLink']) {
      this['Redundancy@odata.navigationLink'].constructFromObject(data['Redundancy@odata.navigationLink']);
    }
    
    if (data['SerialConsole']) {
      this['SerialConsole'].constructFromObject(data['SerialConsole']);
    }
    
    if (data['SerialInterfaces']) {
      this['SerialInterfaces'].constructFromObject(data['SerialInterfaces']);
    }
    
    if (data['ServiceEntryPointUUID']) {
      this['ServiceEntryPointUUID'].constructFromObject(data['ServiceEntryPointUUID']);
    }
    
    if (data['Status']) {
      this['Status'].constructFromObject(data['Status']);
    }
    
    if (data['UUID']) {
      this['UUID'].constructFromObject(data['UUID']);
    }
    
    if (data['VirtualMedia']) {
      this['VirtualMedia'].constructFromObject(data['VirtualMedia']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Odata400Context}
   **/
  Manager100Manager.prototype.getOdataContext = function() {
    return this['@odata.context'];
  }

  /**
   * @param {Odata400Context} odataContext
   **/
  Manager100Manager.prototype.setOdataContext = function(odataContext) {
    this['@odata.context'] = odataContext;
  }
  
  /**
   * @return {Odata400Id}
   **/
  Manager100Manager.prototype.getOdataId = function() {
    return this['@odata.id'];
  }

  /**
   * @param {Odata400Id} odataId
   **/
  Manager100Manager.prototype.setOdataId = function(odataId) {
    this['@odata.id'] = odataId;
  }
  
  /**
   * @return {Odata400Type}
   **/
  Manager100Manager.prototype.getOdataType = function() {
    return this['@odata.type'];
  }

  /**
   * @param {Odata400Type} odataType
   **/
  Manager100Manager.prototype.setOdataType = function(odataType) {
    this['@odata.type'] = odataType;
  }
  
  /**
   * @return {Manager100ManagerActions}
   **/
  Manager100Manager.prototype.getActions = function() {
    return this['Actions'];
  }

  /**
   * @param {Manager100ManagerActions} actions
   **/
  Manager100Manager.prototype.setActions = function(actions) {
    this['Actions'] = actions;
  }
  
  /**
   * get Information about the Command Shell service provided by this manager.
   * @return {Manager100CommandShell}
   **/
  Manager100Manager.prototype.getCommandShell = function() {
    return this['CommandShell'];
  }

  /**
   * set Information about the Command Shell service provided by this manager.
   * @param {Manager100CommandShell} commandShell
   **/
  Manager100Manager.prototype.setCommandShell = function(commandShell) {
    this['CommandShell'] = commandShell;
  }
  
  /**
   * @return {ResourceDescription}
   **/
  Manager100Manager.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {ResourceDescription} description
   **/
  Manager100Manager.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * get This is a reference to a collection of NICs that this manager uses for network communication.  It is here that clients will find NIC configuration options and settings.
   * @return {EthernetInterfaceCollectionEthernetInterfaceCollection}
   **/
  Manager100Manager.prototype.getEthernetInterfaces = function() {
    return this['EthernetInterfaces'];
  }

  /**
   * set This is a reference to a collection of NICs that this manager uses for network communication.  It is here that clients will find NIC configuration options and settings.
   * @param {EthernetInterfaceCollectionEthernetInterfaceCollection} ethernetInterfaces
   **/
  Manager100Manager.prototype.setEthernetInterfaces = function(ethernetInterfaces) {
    this['EthernetInterfaces'] = ethernetInterfaces;
  }
  
  /**
   * get The value of this property shall contain the information about the Graphical Console (KVM-IP) service of this manager.
   * @return {Manager100GraphicalConsole}
   **/
  Manager100Manager.prototype.getGraphicalConsole = function() {
    return this['GraphicalConsole'];
  }

  /**
   * set The value of this property shall contain the information about the Graphical Console (KVM-IP) service of this manager.
   * @param {Manager100GraphicalConsole} graphicalConsole
   **/
  Manager100Manager.prototype.setGraphicalConsole = function(graphicalConsole) {
    this['GraphicalConsole'] = graphicalConsole;
  }
  
  /**
   * @return {ResourceId}
   **/
  Manager100Manager.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {ResourceId} id
   **/
  Manager100Manager.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * @return {Manager100ManagerLinks}
   **/
  Manager100Manager.prototype.getLinks = function() {
    return this['Links'];
  }

  /**
   * @param {Manager100ManagerLinks} links
   **/
  Manager100Manager.prototype.setLinks = function(links) {
    this['Links'] = links;
  }
  
  /**
   * get This is a reference to a collection of Logs used by the manager.
   * @return {LogServiceCollectionLogServiceCollection}
   **/
  Manager100Manager.prototype.getLogServices = function() {
    return this['LogServices'];
  }

  /**
   * set This is a reference to a collection of Logs used by the manager.
   * @param {LogServiceCollectionLogServiceCollection} logServices
   **/
  Manager100Manager.prototype.setLogServices = function(logServices) {
    this['LogServices'] = logServices;
  }
  
  /**
   * get This property represents the type of manager that this resource represents.
   * @return {Manager100ManagerType}
   **/
  Manager100Manager.prototype.getManagerType = function() {
    return this['ManagerType'];
  }

  /**
   * set This property represents the type of manager that this resource represents.
   * @param {Manager100ManagerType} managerType
   **/
  Manager100Manager.prototype.setManagerType = function(managerType) {
    this['ManagerType'] = managerType;
  }
  
  /**
   * @return {ResourceName}
   **/
  Manager100Manager.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {ResourceName} name
   **/
  Manager100Manager.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * get This is a reference to the network services and their settings that the manager controls.  It is here that clients will find network configuration options as well as network services.
   * @return {ManagerNetworkProtocol100ManagerNetworkProtocol}
   **/
  Manager100Manager.prototype.getNetworkProtocol = function() {
    return this['NetworkProtocol'];
  }

  /**
   * set This is a reference to the network services and their settings that the manager controls.  It is here that clients will find network configuration options as well as network services.
   * @param {ManagerNetworkProtocol100ManagerNetworkProtocol} networkProtocol
   **/
  Manager100Manager.prototype.setNetworkProtocol = function(networkProtocol) {
    this['NetworkProtocol'] = networkProtocol;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  Manager100Manager.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  Manager100Manager.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get Redundancy information for the managers of this system
   * @return {[RedundancyRedundancy]}
   **/
  Manager100Manager.prototype.getRedundancy = function() {
    return this['Redundancy'];
  }

  /**
   * set Redundancy information for the managers of this system
   * @param {[RedundancyRedundancy]} redundancy
   **/
  Manager100Manager.prototype.setRedundancy = function(redundancy) {
    this['Redundancy'] = redundancy;
  }
  
  /**
   * @return {Odata400Count}
   **/
  Manager100Manager.prototype.getRedundancyodataCount = function() {
    return this['Redundancy@odata.count'];
  }

  /**
   * @param {Odata400Count} redundancyodataCount
   **/
  Manager100Manager.prototype.setRedundancyodataCount = function(redundancyodataCount) {
    this['Redundancy@odata.count'] = redundancyodataCount;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  Manager100Manager.prototype.getRedundancyodataNavigationLink = function() {
    return this['Redundancy@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} redundancyodataNavigationLink
   **/
  Manager100Manager.prototype.setRedundancyodataNavigationLink = function(redundancyodataNavigationLink) {
    this['Redundancy@odata.navigationLink'] = redundancyodataNavigationLink;
  }
  
  /**
   * get Information about the Serial Console service provided by this manager.
   * @return {Manager100SerialConsole}
   **/
  Manager100Manager.prototype.getSerialConsole = function() {
    return this['SerialConsole'];
  }

  /**
   * set Information about the Serial Console service provided by this manager.
   * @param {Manager100SerialConsole} serialConsole
   **/
  Manager100Manager.prototype.setSerialConsole = function(serialConsole) {
    this['SerialConsole'] = serialConsole;
  }
  
  /**
   * get This is a reference to a collection of serial interfaces that this manager uses for serial and console communication.  It is here that clients will find serial configuration options and settings.
   * @return {SerialInterfaceCollectionSerialInterfaceCollection}
   **/
  Manager100Manager.prototype.getSerialInterfaces = function() {
    return this['SerialInterfaces'];
  }

  /**
   * set This is a reference to a collection of serial interfaces that this manager uses for serial and console communication.  It is here that clients will find serial configuration options and settings.
   * @param {SerialInterfaceCollectionSerialInterfaceCollection} serialInterfaces
   **/
  Manager100Manager.prototype.setSerialInterfaces = function(serialInterfaces) {
    this['SerialInterfaces'] = serialInterfaces;
  }
  
  /**
   * get The UUID of the Redfish Service Entry Point provided by this manager
   * @return {ResourceUUID}
   **/
  Manager100Manager.prototype.getServiceEntryPointUUID = function() {
    return this['ServiceEntryPointUUID'];
  }

  /**
   * set The UUID of the Redfish Service Entry Point provided by this manager
   * @param {ResourceUUID} serviceEntryPointUUID
   **/
  Manager100Manager.prototype.setServiceEntryPointUUID = function(serviceEntryPointUUID) {
    this['ServiceEntryPointUUID'] = serviceEntryPointUUID;
  }
  
  /**
   * @return {ResourceStatus}
   **/
  Manager100Manager.prototype.getStatus = function() {
    return this['Status'];
  }

  /**
   * @param {ResourceStatus} status
   **/
  Manager100Manager.prototype.setStatus = function(status) {
    this['Status'] = status;
  }
  
  /**
   * get The Universal Unique Identifier (UUID) for this Manager
   * @return {ResourceUUID}
   **/
  Manager100Manager.prototype.getUUID = function() {
    return this['UUID'];
  }

  /**
   * set The Universal Unique Identifier (UUID) for this Manager
   * @param {ResourceUUID} UUID
   **/
  Manager100Manager.prototype.setUUID = function(UUID) {
    this['UUID'] = UUID;
  }
  
  /**
   * get This is a reference to the Virtual Media services for this particular manager.
   * @return {VirtualMediaCollectionVirtualMediaCollection}
   **/
  Manager100Manager.prototype.getVirtualMedia = function() {
    return this['VirtualMedia'];
  }

  /**
   * set This is a reference to the Virtual Media services for this particular manager.
   * @param {VirtualMediaCollectionVirtualMediaCollection} virtualMedia
   **/
  Manager100Manager.prototype.setVirtualMedia = function(virtualMedia) {
    this['VirtualMedia'] = virtualMedia;
  }
  
  

  Manager100Manager.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.Manager100Manager = Manager100Manager;
  }

  return Manager100Manager;
  
  
}));
