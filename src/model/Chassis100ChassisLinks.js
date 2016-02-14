(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ChassisChassis', './ComputerSystemComputerSystem', './ManagerManager', './Odata400Count', './Odata400IdRef', './ResourceOem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ChassisChassis'), require('./ComputerSystemComputerSystem'), require('./ManagerManager'), require('./Odata400Count'), require('./Odata400IdRef'), require('./ResourceOem'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.ChassisChassis, root.RedfishV100.ComputerSystemComputerSystem, root.RedfishV100.ManagerManager, root.RedfishV100.Odata400Count, root.RedfishV100.Odata400IdRef, root.RedfishV100.ResourceOem);
  }
}(this, function(module, ApiClient, ChassisChassis, ComputerSystemComputerSystem, ManagerManager, Odata400Count, Odata400IdRef, ResourceOem) {
  'use strict';

  
  

  /**
   * The links object contains the links to other resources that are related to this resource.
   **/
  var Chassis100ChassisLinks = function Chassis100ChassisLinks() { 
    
    /**
     * datatype: Odata400IdRef
     **/
    this['Contains@odata.navigationLink'] = new Odata400IdRef();
    
    /**
     * An array of references to the managers contained in this chassis.
     * datatype: [ManagerManager]
     **/
    this['ManagedBy'] = [];
    
    /**
     * datatype: Odata400IdRef
     **/
    this['PoweredBy@odata.navigationLink'] = new Odata400IdRef();
    
    /**
     * A reference to the chassis that this chassis is contained by.
     * datatype: ChassisChassis
     **/
    this['ContainedBy'] = new ChassisChassis();
    
    /**
     * datatype: Odata400Count
     **/
    this['PoweredBy@odata.count'] = new Odata400Count();
    
    /**
     * An array of ID[s] of resources that cool this chassis. Normally the ID will be a chassis or a specific set of fans.
     * datatype: [Odata400IdRef]
     **/
    this['CooledBy'] = [];
    
    /**
     * datatype: Odata400Count
     **/
    this['ManagedBy@odata.count'] = new Odata400Count();
    
    /**
     * datatype: Odata400Count
     **/
    this['ComputerSystems@odata.count'] = new Odata400Count();
    
    /**
     * An array of references to any other chassis that this chassis has in it.
     * datatype: [ChassisChassis]
     **/
    this['Contains'] = [];
    
    /**
     * An array of ID[s] of resources that power this chassis. Normally the ID will be a chassis or a specific set of powerSupplies
     * datatype: [Odata400IdRef]
     **/
    this['PoweredBy'] = [];
    
    /**
     * datatype: Odata400IdRef
     **/
    this['CooledBy@odata.navigationLink'] = new Odata400IdRef();
    
    /**
     * datatype: Odata400IdRef
     **/
    this['ManagedBy@odata.navigationLink'] = new Odata400IdRef();
    
    /**
     * An array of references to the computer systems contained in this chassis.  This will only reference ComputerSystems that are directly and wholly contained in this chassis.
     * datatype: [ComputerSystemComputerSystem]
     **/
    this['ComputerSystems'] = [];
    
    /**
     * datatype: Odata400Count
     **/
    this['Contains@odata.count'] = new Odata400Count();
    
    /**
     * datatype: Odata400Count
     **/
    this['CooledBy@odata.count'] = new Odata400Count();
    
    /**
     * Oem extension object.
     * datatype: ResourceOem
     **/
    this['Oem'] = new ResourceOem();
    
    /**
     * datatype: Odata400IdRef
     **/
    this['ComputerSystems@odata.navigationLink'] = new Odata400IdRef();
    
  };

  Chassis100ChassisLinks.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['Contains@odata.navigationLink']) {
      this['Contains@odata.navigationLink'].constructFromObject(data['Contains@odata.navigationLink']);
    }
    
    if (data['ManagedBy']) {
      this['ManagedBy'] = ApiClient.convertToType(data['ManagedBy'], [ManagerManager]);
    }
    
    if (data['PoweredBy@odata.navigationLink']) {
      this['PoweredBy@odata.navigationLink'].constructFromObject(data['PoweredBy@odata.navigationLink']);
    }
    
    if (data['ContainedBy']) {
      this['ContainedBy'].constructFromObject(data['ContainedBy']);
    }
    
    if (data['PoweredBy@odata.count']) {
      this['PoweredBy@odata.count'].constructFromObject(data['PoweredBy@odata.count']);
    }
    
    if (data['CooledBy']) {
      this['CooledBy'] = ApiClient.convertToType(data['CooledBy'], [Odata400IdRef]);
    }
    
    if (data['ManagedBy@odata.count']) {
      this['ManagedBy@odata.count'].constructFromObject(data['ManagedBy@odata.count']);
    }
    
    if (data['ComputerSystems@odata.count']) {
      this['ComputerSystems@odata.count'].constructFromObject(data['ComputerSystems@odata.count']);
    }
    
    if (data['Contains']) {
      this['Contains'] = ApiClient.convertToType(data['Contains'], [ChassisChassis]);
    }
    
    if (data['PoweredBy']) {
      this['PoweredBy'] = ApiClient.convertToType(data['PoweredBy'], [Odata400IdRef]);
    }
    
    if (data['CooledBy@odata.navigationLink']) {
      this['CooledBy@odata.navigationLink'].constructFromObject(data['CooledBy@odata.navigationLink']);
    }
    
    if (data['ManagedBy@odata.navigationLink']) {
      this['ManagedBy@odata.navigationLink'].constructFromObject(data['ManagedBy@odata.navigationLink']);
    }
    
    if (data['ComputerSystems']) {
      this['ComputerSystems'] = ApiClient.convertToType(data['ComputerSystems'], [ComputerSystemComputerSystem]);
    }
    
    if (data['Contains@odata.count']) {
      this['Contains@odata.count'].constructFromObject(data['Contains@odata.count']);
    }
    
    if (data['CooledBy@odata.count']) {
      this['CooledBy@odata.count'].constructFromObject(data['CooledBy@odata.count']);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['ComputerSystems@odata.navigationLink']) {
      this['ComputerSystems@odata.navigationLink'].constructFromObject(data['ComputerSystems@odata.navigationLink']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Odata400IdRef}
   **/
  Chassis100ChassisLinks.prototype.getContainsodataNavigationLink = function() {
    return this['Contains@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} containsodataNavigationLink
   **/
  Chassis100ChassisLinks.prototype.setContainsodataNavigationLink = function(containsodataNavigationLink) {
    this['Contains@odata.navigationLink'] = containsodataNavigationLink;
  }
  
  /**
   * get An array of references to the managers contained in this chassis.
   * @return {[ManagerManager]}
   **/
  Chassis100ChassisLinks.prototype.getManagedBy = function() {
    return this['ManagedBy'];
  }

  /**
   * set An array of references to the managers contained in this chassis.
   * @param {[ManagerManager]} managedBy
   **/
  Chassis100ChassisLinks.prototype.setManagedBy = function(managedBy) {
    this['ManagedBy'] = managedBy;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  Chassis100ChassisLinks.prototype.getPoweredByodataNavigationLink = function() {
    return this['PoweredBy@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} poweredByodataNavigationLink
   **/
  Chassis100ChassisLinks.prototype.setPoweredByodataNavigationLink = function(poweredByodataNavigationLink) {
    this['PoweredBy@odata.navigationLink'] = poweredByodataNavigationLink;
  }
  
  /**
   * get A reference to the chassis that this chassis is contained by.
   * @return {ChassisChassis}
   **/
  Chassis100ChassisLinks.prototype.getContainedBy = function() {
    return this['ContainedBy'];
  }

  /**
   * set A reference to the chassis that this chassis is contained by.
   * @param {ChassisChassis} containedBy
   **/
  Chassis100ChassisLinks.prototype.setContainedBy = function(containedBy) {
    this['ContainedBy'] = containedBy;
  }
  
  /**
   * @return {Odata400Count}
   **/
  Chassis100ChassisLinks.prototype.getPoweredByodataCount = function() {
    return this['PoweredBy@odata.count'];
  }

  /**
   * @param {Odata400Count} poweredByodataCount
   **/
  Chassis100ChassisLinks.prototype.setPoweredByodataCount = function(poweredByodataCount) {
    this['PoweredBy@odata.count'] = poweredByodataCount;
  }
  
  /**
   * get An array of ID[s] of resources that cool this chassis. Normally the ID will be a chassis or a specific set of fans.
   * @return {[Odata400IdRef]}
   **/
  Chassis100ChassisLinks.prototype.getCooledBy = function() {
    return this['CooledBy'];
  }

  /**
   * set An array of ID[s] of resources that cool this chassis. Normally the ID will be a chassis or a specific set of fans.
   * @param {[Odata400IdRef]} cooledBy
   **/
  Chassis100ChassisLinks.prototype.setCooledBy = function(cooledBy) {
    this['CooledBy'] = cooledBy;
  }
  
  /**
   * @return {Odata400Count}
   **/
  Chassis100ChassisLinks.prototype.getManagedByodataCount = function() {
    return this['ManagedBy@odata.count'];
  }

  /**
   * @param {Odata400Count} managedByodataCount
   **/
  Chassis100ChassisLinks.prototype.setManagedByodataCount = function(managedByodataCount) {
    this['ManagedBy@odata.count'] = managedByodataCount;
  }
  
  /**
   * @return {Odata400Count}
   **/
  Chassis100ChassisLinks.prototype.getComputerSystemsodataCount = function() {
    return this['ComputerSystems@odata.count'];
  }

  /**
   * @param {Odata400Count} computerSystemsodataCount
   **/
  Chassis100ChassisLinks.prototype.setComputerSystemsodataCount = function(computerSystemsodataCount) {
    this['ComputerSystems@odata.count'] = computerSystemsodataCount;
  }
  
  /**
   * get An array of references to any other chassis that this chassis has in it.
   * @return {[ChassisChassis]}
   **/
  Chassis100ChassisLinks.prototype.getContains = function() {
    return this['Contains'];
  }

  /**
   * set An array of references to any other chassis that this chassis has in it.
   * @param {[ChassisChassis]} contains
   **/
  Chassis100ChassisLinks.prototype.setContains = function(contains) {
    this['Contains'] = contains;
  }
  
  /**
   * get An array of ID[s] of resources that power this chassis. Normally the ID will be a chassis or a specific set of powerSupplies
   * @return {[Odata400IdRef]}
   **/
  Chassis100ChassisLinks.prototype.getPoweredBy = function() {
    return this['PoweredBy'];
  }

  /**
   * set An array of ID[s] of resources that power this chassis. Normally the ID will be a chassis or a specific set of powerSupplies
   * @param {[Odata400IdRef]} poweredBy
   **/
  Chassis100ChassisLinks.prototype.setPoweredBy = function(poweredBy) {
    this['PoweredBy'] = poweredBy;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  Chassis100ChassisLinks.prototype.getCooledByodataNavigationLink = function() {
    return this['CooledBy@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} cooledByodataNavigationLink
   **/
  Chassis100ChassisLinks.prototype.setCooledByodataNavigationLink = function(cooledByodataNavigationLink) {
    this['CooledBy@odata.navigationLink'] = cooledByodataNavigationLink;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  Chassis100ChassisLinks.prototype.getManagedByodataNavigationLink = function() {
    return this['ManagedBy@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} managedByodataNavigationLink
   **/
  Chassis100ChassisLinks.prototype.setManagedByodataNavigationLink = function(managedByodataNavigationLink) {
    this['ManagedBy@odata.navigationLink'] = managedByodataNavigationLink;
  }
  
  /**
   * get An array of references to the computer systems contained in this chassis.  This will only reference ComputerSystems that are directly and wholly contained in this chassis.
   * @return {[ComputerSystemComputerSystem]}
   **/
  Chassis100ChassisLinks.prototype.getComputerSystems = function() {
    return this['ComputerSystems'];
  }

  /**
   * set An array of references to the computer systems contained in this chassis.  This will only reference ComputerSystems that are directly and wholly contained in this chassis.
   * @param {[ComputerSystemComputerSystem]} computerSystems
   **/
  Chassis100ChassisLinks.prototype.setComputerSystems = function(computerSystems) {
    this['ComputerSystems'] = computerSystems;
  }
  
  /**
   * @return {Odata400Count}
   **/
  Chassis100ChassisLinks.prototype.getContainsodataCount = function() {
    return this['Contains@odata.count'];
  }

  /**
   * @param {Odata400Count} containsodataCount
   **/
  Chassis100ChassisLinks.prototype.setContainsodataCount = function(containsodataCount) {
    this['Contains@odata.count'] = containsodataCount;
  }
  
  /**
   * @return {Odata400Count}
   **/
  Chassis100ChassisLinks.prototype.getCooledByodataCount = function() {
    return this['CooledBy@odata.count'];
  }

  /**
   * @param {Odata400Count} cooledByodataCount
   **/
  Chassis100ChassisLinks.prototype.setCooledByodataCount = function(cooledByodataCount) {
    this['CooledBy@odata.count'] = cooledByodataCount;
  }
  
  /**
   * get Oem extension object.
   * @return {ResourceOem}
   **/
  Chassis100ChassisLinks.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set Oem extension object.
   * @param {ResourceOem} oem
   **/
  Chassis100ChassisLinks.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  Chassis100ChassisLinks.prototype.getComputerSystemsodataNavigationLink = function() {
    return this['ComputerSystems@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} computerSystemsodataNavigationLink
   **/
  Chassis100ChassisLinks.prototype.setComputerSystemsodataNavigationLink = function(computerSystemsodataNavigationLink) {
    this['ComputerSystems@odata.navigationLink'] = computerSystemsodataNavigationLink;
  }
  
  

  Chassis100ChassisLinks.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.Chassis100ChassisLinks = Chassis100ChassisLinks;
  }

  return Chassis100ChassisLinks;
  
  
}));
