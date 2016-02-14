(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ChassisChassis', './ComputerSystemComputerSystem', './Odata400Count', './Odata400IdRef', './ResourceOem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ChassisChassis'), require('./ComputerSystemComputerSystem'), require('./Odata400Count'), require('./Odata400IdRef'), require('./ResourceOem'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.ChassisChassis, root.RedfishV100.ComputerSystemComputerSystem, root.RedfishV100.Odata400Count, root.RedfishV100.Odata400IdRef, root.RedfishV100.ResourceOem);
  }
}(this, function(module, ApiClient, ChassisChassis, ComputerSystemComputerSystem, Odata400Count, Odata400IdRef, ResourceOem) {
  'use strict';

  
  

  /**
   * This object contains the links to other resources that are related to this resource.
   **/
  var Manager100ManagerLinks = function Manager100ManagerLinks() { 
    
    /**
     * datatype: Odata400Count
     **/
    this['ManagerForServers@odata.count'] = new Odata400Count();
    
    /**
     * This property is an array of references to the systems that this manager has control over.
     * datatype: [ComputerSystemComputerSystem]
     **/
    this['ManagerForServers'] = [];
    
    /**
     * datatype: Odata400IdRef
     **/
    this['ManagerForChassis@odata.navigationLink'] = new Odata400IdRef();
    
    /**
     * Oem extension object.
     * datatype: ResourceOem
     **/
    this['Oem'] = new ResourceOem();
    
    /**
     * This property is an array of references to the chasis that this manager has control over.
     * datatype: [ChassisChassis]
     **/
    this['ManagerForChassis'] = [];
    
    /**
     * datatype: Odata400Count
     **/
    this['ManagerForChassis@odata.count'] = new Odata400Count();
    
    /**
     * datatype: Odata400IdRef
     **/
    this['ManagerForServers@odata.navigationLink'] = new Odata400IdRef();
    
  };

  Manager100ManagerLinks.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['ManagerForServers@odata.count']) {
      this['ManagerForServers@odata.count'].constructFromObject(data['ManagerForServers@odata.count']);
    }
    
    if (data['ManagerForServers']) {
      this['ManagerForServers'] = ApiClient.convertToType(data['ManagerForServers'], [ComputerSystemComputerSystem]);
    }
    
    if (data['ManagerForChassis@odata.navigationLink']) {
      this['ManagerForChassis@odata.navigationLink'].constructFromObject(data['ManagerForChassis@odata.navigationLink']);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['ManagerForChassis']) {
      this['ManagerForChassis'] = ApiClient.convertToType(data['ManagerForChassis'], [ChassisChassis]);
    }
    
    if (data['ManagerForChassis@odata.count']) {
      this['ManagerForChassis@odata.count'].constructFromObject(data['ManagerForChassis@odata.count']);
    }
    
    if (data['ManagerForServers@odata.navigationLink']) {
      this['ManagerForServers@odata.navigationLink'].constructFromObject(data['ManagerForServers@odata.navigationLink']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Odata400Count}
   **/
  Manager100ManagerLinks.prototype.getManagerForServersodataCount = function() {
    return this['ManagerForServers@odata.count'];
  }

  /**
   * @param {Odata400Count} managerForServersodataCount
   **/
  Manager100ManagerLinks.prototype.setManagerForServersodataCount = function(managerForServersodataCount) {
    this['ManagerForServers@odata.count'] = managerForServersodataCount;
  }
  
  /**
   * get This property is an array of references to the systems that this manager has control over.
   * @return {[ComputerSystemComputerSystem]}
   **/
  Manager100ManagerLinks.prototype.getManagerForServers = function() {
    return this['ManagerForServers'];
  }

  /**
   * set This property is an array of references to the systems that this manager has control over.
   * @param {[ComputerSystemComputerSystem]} managerForServers
   **/
  Manager100ManagerLinks.prototype.setManagerForServers = function(managerForServers) {
    this['ManagerForServers'] = managerForServers;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  Manager100ManagerLinks.prototype.getManagerForChassisodataNavigationLink = function() {
    return this['ManagerForChassis@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} managerForChassisodataNavigationLink
   **/
  Manager100ManagerLinks.prototype.setManagerForChassisodataNavigationLink = function(managerForChassisodataNavigationLink) {
    this['ManagerForChassis@odata.navigationLink'] = managerForChassisodataNavigationLink;
  }
  
  /**
   * get Oem extension object.
   * @return {ResourceOem}
   **/
  Manager100ManagerLinks.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set Oem extension object.
   * @param {ResourceOem} oem
   **/
  Manager100ManagerLinks.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get This property is an array of references to the chasis that this manager has control over.
   * @return {[ChassisChassis]}
   **/
  Manager100ManagerLinks.prototype.getManagerForChassis = function() {
    return this['ManagerForChassis'];
  }

  /**
   * set This property is an array of references to the chasis that this manager has control over.
   * @param {[ChassisChassis]} managerForChassis
   **/
  Manager100ManagerLinks.prototype.setManagerForChassis = function(managerForChassis) {
    this['ManagerForChassis'] = managerForChassis;
  }
  
  /**
   * @return {Odata400Count}
   **/
  Manager100ManagerLinks.prototype.getManagerForChassisodataCount = function() {
    return this['ManagerForChassis@odata.count'];
  }

  /**
   * @param {Odata400Count} managerForChassisodataCount
   **/
  Manager100ManagerLinks.prototype.setManagerForChassisodataCount = function(managerForChassisodataCount) {
    this['ManagerForChassis@odata.count'] = managerForChassisodataCount;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  Manager100ManagerLinks.prototype.getManagerForServersodataNavigationLink = function() {
    return this['ManagerForServers@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} managerForServersodataNavigationLink
   **/
  Manager100ManagerLinks.prototype.setManagerForServersodataNavigationLink = function(managerForServersodataNavigationLink) {
    this['ManagerForServers@odata.navigationLink'] = managerForServersodataNavigationLink;
  }
  
  

  Manager100ManagerLinks.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.Manager100ManagerLinks = Manager100ManagerLinks;
  }

  return Manager100ManagerLinks;
  
  
}));
