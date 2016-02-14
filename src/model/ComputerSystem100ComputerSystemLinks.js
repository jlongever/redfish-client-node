(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ChassisChassis', './ManagerManager', './Odata400Count', './Odata400IdRef', './ResourceOem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ChassisChassis'), require('./ManagerManager'), require('./Odata400Count'), require('./Odata400IdRef'), require('./ResourceOem'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.ChassisChassis, root.RedfishV100.ManagerManager, root.RedfishV100.Odata400Count, root.RedfishV100.Odata400IdRef, root.RedfishV100.ResourceOem);
  }
}(this, function(module, ApiClient, ChassisChassis, ManagerManager, Odata400Count, Odata400IdRef, ResourceOem) {
  'use strict';

  
  

  /**
   * Contains links to other resources that are related to this resource.
   **/
  var ComputerSystem100ComputerSystemLinks = function ComputerSystem100ComputerSystemLinks() { 
    
    /**
     * An array of references to the Managers responsible for this system
     * datatype: [ManagerManager]
     **/
    this['ManagedBy'] = [];
    
    /**
     * datatype: Odata400IdRef
     **/
    this['PoweredBy@odata.navigationLink'] = new Odata400IdRef();
    
    /**
     * datatype: Odata400Count
     **/
    this['PoweredBy@odata.count'] = new Odata400Count();
    
    /**
     * An array of ID[s] of resources that cool this computer system. Normally the ID will be a chassis or a specific set of fans.
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
    this['Chassis@odata.count'] = new Odata400Count();
    
    /**
     * An array of ID[s] of resources that power this computer system. Normally the ID will be a chassis or a specific set of powerSupplies
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
     * datatype: Odata400IdRef
     **/
    this['Chassis@odata.navigationLink'] = new Odata400IdRef();
    
    /**
     * datatype: Odata400Count
     **/
    this['CooledBy@odata.count'] = new Odata400Count();
    
    /**
     * An array of references to the chassis in which this system is contained
     * datatype: [ChassisChassis]
     **/
    this['Chassis'] = [];
    
    /**
     * Oem extension object.
     * datatype: ResourceOem
     **/
    this['Oem'] = new ResourceOem();
    
  };

  ComputerSystem100ComputerSystemLinks.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['ManagedBy']) {
      this['ManagedBy'] = ApiClient.convertToType(data['ManagedBy'], [ManagerManager]);
    }
    
    if (data['PoweredBy@odata.navigationLink']) {
      this['PoweredBy@odata.navigationLink'].constructFromObject(data['PoweredBy@odata.navigationLink']);
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
    
    if (data['Chassis@odata.count']) {
      this['Chassis@odata.count'].constructFromObject(data['Chassis@odata.count']);
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
    
    if (data['Chassis@odata.navigationLink']) {
      this['Chassis@odata.navigationLink'].constructFromObject(data['Chassis@odata.navigationLink']);
    }
    
    if (data['CooledBy@odata.count']) {
      this['CooledBy@odata.count'].constructFromObject(data['CooledBy@odata.count']);
    }
    
    if (data['Chassis']) {
      this['Chassis'] = ApiClient.convertToType(data['Chassis'], [ChassisChassis]);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    return this;
  }

  
  
  /**
   * get An array of references to the Managers responsible for this system
   * @return {[ManagerManager]}
   **/
  ComputerSystem100ComputerSystemLinks.prototype.getManagedBy = function() {
    return this['ManagedBy'];
  }

  /**
   * set An array of references to the Managers responsible for this system
   * @param {[ManagerManager]} managedBy
   **/
  ComputerSystem100ComputerSystemLinks.prototype.setManagedBy = function(managedBy) {
    this['ManagedBy'] = managedBy;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  ComputerSystem100ComputerSystemLinks.prototype.getPoweredByodataNavigationLink = function() {
    return this['PoweredBy@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} poweredByodataNavigationLink
   **/
  ComputerSystem100ComputerSystemLinks.prototype.setPoweredByodataNavigationLink = function(poweredByodataNavigationLink) {
    this['PoweredBy@odata.navigationLink'] = poweredByodataNavigationLink;
  }
  
  /**
   * @return {Odata400Count}
   **/
  ComputerSystem100ComputerSystemLinks.prototype.getPoweredByodataCount = function() {
    return this['PoweredBy@odata.count'];
  }

  /**
   * @param {Odata400Count} poweredByodataCount
   **/
  ComputerSystem100ComputerSystemLinks.prototype.setPoweredByodataCount = function(poweredByodataCount) {
    this['PoweredBy@odata.count'] = poweredByodataCount;
  }
  
  /**
   * get An array of ID[s] of resources that cool this computer system. Normally the ID will be a chassis or a specific set of fans.
   * @return {[Odata400IdRef]}
   **/
  ComputerSystem100ComputerSystemLinks.prototype.getCooledBy = function() {
    return this['CooledBy'];
  }

  /**
   * set An array of ID[s] of resources that cool this computer system. Normally the ID will be a chassis or a specific set of fans.
   * @param {[Odata400IdRef]} cooledBy
   **/
  ComputerSystem100ComputerSystemLinks.prototype.setCooledBy = function(cooledBy) {
    this['CooledBy'] = cooledBy;
  }
  
  /**
   * @return {Odata400Count}
   **/
  ComputerSystem100ComputerSystemLinks.prototype.getManagedByodataCount = function() {
    return this['ManagedBy@odata.count'];
  }

  /**
   * @param {Odata400Count} managedByodataCount
   **/
  ComputerSystem100ComputerSystemLinks.prototype.setManagedByodataCount = function(managedByodataCount) {
    this['ManagedBy@odata.count'] = managedByodataCount;
  }
  
  /**
   * @return {Odata400Count}
   **/
  ComputerSystem100ComputerSystemLinks.prototype.getChassisodataCount = function() {
    return this['Chassis@odata.count'];
  }

  /**
   * @param {Odata400Count} chassisodataCount
   **/
  ComputerSystem100ComputerSystemLinks.prototype.setChassisodataCount = function(chassisodataCount) {
    this['Chassis@odata.count'] = chassisodataCount;
  }
  
  /**
   * get An array of ID[s] of resources that power this computer system. Normally the ID will be a chassis or a specific set of powerSupplies
   * @return {[Odata400IdRef]}
   **/
  ComputerSystem100ComputerSystemLinks.prototype.getPoweredBy = function() {
    return this['PoweredBy'];
  }

  /**
   * set An array of ID[s] of resources that power this computer system. Normally the ID will be a chassis or a specific set of powerSupplies
   * @param {[Odata400IdRef]} poweredBy
   **/
  ComputerSystem100ComputerSystemLinks.prototype.setPoweredBy = function(poweredBy) {
    this['PoweredBy'] = poweredBy;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  ComputerSystem100ComputerSystemLinks.prototype.getCooledByodataNavigationLink = function() {
    return this['CooledBy@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} cooledByodataNavigationLink
   **/
  ComputerSystem100ComputerSystemLinks.prototype.setCooledByodataNavigationLink = function(cooledByodataNavigationLink) {
    this['CooledBy@odata.navigationLink'] = cooledByodataNavigationLink;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  ComputerSystem100ComputerSystemLinks.prototype.getManagedByodataNavigationLink = function() {
    return this['ManagedBy@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} managedByodataNavigationLink
   **/
  ComputerSystem100ComputerSystemLinks.prototype.setManagedByodataNavigationLink = function(managedByodataNavigationLink) {
    this['ManagedBy@odata.navigationLink'] = managedByodataNavigationLink;
  }
  
  /**
   * @return {Odata400IdRef}
   **/
  ComputerSystem100ComputerSystemLinks.prototype.getChassisodataNavigationLink = function() {
    return this['Chassis@odata.navigationLink'];
  }

  /**
   * @param {Odata400IdRef} chassisodataNavigationLink
   **/
  ComputerSystem100ComputerSystemLinks.prototype.setChassisodataNavigationLink = function(chassisodataNavigationLink) {
    this['Chassis@odata.navigationLink'] = chassisodataNavigationLink;
  }
  
  /**
   * @return {Odata400Count}
   **/
  ComputerSystem100ComputerSystemLinks.prototype.getCooledByodataCount = function() {
    return this['CooledBy@odata.count'];
  }

  /**
   * @param {Odata400Count} cooledByodataCount
   **/
  ComputerSystem100ComputerSystemLinks.prototype.setCooledByodataCount = function(cooledByodataCount) {
    this['CooledBy@odata.count'] = cooledByodataCount;
  }
  
  /**
   * get An array of references to the chassis in which this system is contained
   * @return {[ChassisChassis]}
   **/
  ComputerSystem100ComputerSystemLinks.prototype.getChassis = function() {
    return this['Chassis'];
  }

  /**
   * set An array of references to the chassis in which this system is contained
   * @param {[ChassisChassis]} chassis
   **/
  ComputerSystem100ComputerSystemLinks.prototype.setChassis = function(chassis) {
    this['Chassis'] = chassis;
  }
  
  /**
   * get Oem extension object.
   * @return {ResourceOem}
   **/
  ComputerSystem100ComputerSystemLinks.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set Oem extension object.
   * @param {ResourceOem} oem
   **/
  ComputerSystem100ComputerSystemLinks.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  

  ComputerSystem100ComputerSystemLinks.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.ComputerSystem100ComputerSystemLinks = ComputerSystem100ComputerSystemLinks;
  }

  return ComputerSystem100ComputerSystemLinks;
  
  
}));
