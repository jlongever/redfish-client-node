(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './ManagerNetworkProtocol100Protocol', './ManagerNetworkProtocol100SSDProtocol', './Odata400Context', './Odata400Id', './Odata400Type', './ResourceDescription', './ResourceId', './ResourceName', './ResourceOem', './ResourceStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./ManagerNetworkProtocol100Protocol'), require('./ManagerNetworkProtocol100SSDProtocol'), require('./Odata400Context'), require('./Odata400Id'), require('./Odata400Type'), require('./ResourceDescription'), require('./ResourceId'), require('./ResourceName'), require('./ResourceOem'), require('./ResourceStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.ManagerNetworkProtocol100Protocol, root.RedfishV100.ManagerNetworkProtocol100SSDProtocol, root.RedfishV100.Odata400Context, root.RedfishV100.Odata400Id, root.RedfishV100.Odata400Type, root.RedfishV100.ResourceDescription, root.RedfishV100.ResourceId, root.RedfishV100.ResourceName, root.RedfishV100.ResourceOem, root.RedfishV100.ResourceStatus);
  }
}(this, function(module, ApiClient, ManagerNetworkProtocol100Protocol, ManagerNetworkProtocol100SSDProtocol, Odata400Context, Odata400Id, Odata400Type, ResourceDescription, ResourceId, ResourceName, ResourceOem, ResourceStatus) {
  'use strict';

  
  

  /**
   * This resource is used to obtain or modify the network services managed by a given manager.
   **/
  var ManagerNetworkProtocol100ManagerNetworkProtocol = function ManagerNetworkProtocol100ManagerNetworkProtocol() { 
    
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
     * Settings for this Manager's HTTP protocol support
     * datatype: ManagerNetworkProtocol100Protocol
     **/
    this['HTTP'] = new ManagerNetworkProtocol100Protocol();
    
    /**
     * Settings for this Manager's HTTPS protocol support
     * datatype: ManagerNetworkProtocol100Protocol
     **/
    this['HTTPS'] = new ManagerNetworkProtocol100Protocol();
    
    /**
     * Settings for this Manager's IPMI-over-LAN protocol support
     * datatype: ManagerNetworkProtocol100Protocol
     **/
    this['IPMI'] = new ManagerNetworkProtocol100Protocol();
    
    /**
     * datatype: ResourceId
     **/
    this['Id'] = new ResourceId();
    
    /**
     * Settings for this Manager's KVM-IP protocol support
     * datatype: ManagerNetworkProtocol100Protocol
     **/
    this['KVMIP'] = new ManagerNetworkProtocol100Protocol();
    
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
     * Settings for this Manager's SNMP support
     * datatype: ManagerNetworkProtocol100Protocol
     **/
    this['SNMP'] = new ManagerNetworkProtocol100Protocol();
    
    /**
     * Settings for this Manager's SSDP support
     * datatype: ManagerNetworkProtocol100SSDProtocol
     **/
    this['SSDP'] = new ManagerNetworkProtocol100SSDProtocol();
    
    /**
     * Settings for this Manager's SSH (Secure Shell) protocol support
     * datatype: ManagerNetworkProtocol100Protocol
     **/
    this['SSH'] = new ManagerNetworkProtocol100Protocol();
    
    /**
     * datatype: ResourceStatus
     **/
    this['Status'] = new ResourceStatus();
    
    /**
     * Settings for this Manager's Telnet protocol support
     * datatype: ManagerNetworkProtocol100Protocol
     **/
    this['Telnet'] = new ManagerNetworkProtocol100Protocol();
    
    /**
     * Settings for this Manager's Virtual Media support
     * datatype: ManagerNetworkProtocol100Protocol
     **/
    this['VirtualMedia'] = new ManagerNetworkProtocol100Protocol();
    
  };

  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.constructFromObject = function(data) {
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
    
    if (data['HTTP']) {
      this['HTTP'].constructFromObject(data['HTTP']);
    }
    
    if (data['HTTPS']) {
      this['HTTPS'].constructFromObject(data['HTTPS']);
    }
    
    if (data['IPMI']) {
      this['IPMI'].constructFromObject(data['IPMI']);
    }
    
    if (data['Id']) {
      this['Id'].constructFromObject(data['Id']);
    }
    
    if (data['KVMIP']) {
      this['KVMIP'].constructFromObject(data['KVMIP']);
    }
    
    if (data['Name']) {
      this['Name'].constructFromObject(data['Name']);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    if (data['SNMP']) {
      this['SNMP'].constructFromObject(data['SNMP']);
    }
    
    if (data['SSDP']) {
      this['SSDP'].constructFromObject(data['SSDP']);
    }
    
    if (data['SSH']) {
      this['SSH'].constructFromObject(data['SSH']);
    }
    
    if (data['Status']) {
      this['Status'].constructFromObject(data['Status']);
    }
    
    if (data['Telnet']) {
      this['Telnet'].constructFromObject(data['Telnet']);
    }
    
    if (data['VirtualMedia']) {
      this['VirtualMedia'].constructFromObject(data['VirtualMedia']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Odata400Context}
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.getOdataContext = function() {
    return this['@odata.context'];
  }

  /**
   * @param {Odata400Context} odataContext
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.setOdataContext = function(odataContext) {
    this['@odata.context'] = odataContext;
  }
  
  /**
   * @return {Odata400Id}
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.getOdataId = function() {
    return this['@odata.id'];
  }

  /**
   * @param {Odata400Id} odataId
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.setOdataId = function(odataId) {
    this['@odata.id'] = odataId;
  }
  
  /**
   * @return {Odata400Type}
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.getOdataType = function() {
    return this['@odata.type'];
  }

  /**
   * @param {Odata400Type} odataType
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.setOdataType = function(odataType) {
    this['@odata.type'] = odataType;
  }
  
  /**
   * @return {ResourceDescription}
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {ResourceDescription} description
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * get Settings for this Manager's HTTP protocol support
   * @return {ManagerNetworkProtocol100Protocol}
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.getHTTP = function() {
    return this['HTTP'];
  }

  /**
   * set Settings for this Manager's HTTP protocol support
   * @param {ManagerNetworkProtocol100Protocol} HTTP
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.setHTTP = function(HTTP) {
    this['HTTP'] = HTTP;
  }
  
  /**
   * get Settings for this Manager's HTTPS protocol support
   * @return {ManagerNetworkProtocol100Protocol}
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.getHTTPS = function() {
    return this['HTTPS'];
  }

  /**
   * set Settings for this Manager's HTTPS protocol support
   * @param {ManagerNetworkProtocol100Protocol} HTTPS
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.setHTTPS = function(HTTPS) {
    this['HTTPS'] = HTTPS;
  }
  
  /**
   * get Settings for this Manager's IPMI-over-LAN protocol support
   * @return {ManagerNetworkProtocol100Protocol}
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.getIPMI = function() {
    return this['IPMI'];
  }

  /**
   * set Settings for this Manager's IPMI-over-LAN protocol support
   * @param {ManagerNetworkProtocol100Protocol} IPMI
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.setIPMI = function(IPMI) {
    this['IPMI'] = IPMI;
  }
  
  /**
   * @return {ResourceId}
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {ResourceId} id
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * get Settings for this Manager's KVM-IP protocol support
   * @return {ManagerNetworkProtocol100Protocol}
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.getKVMIP = function() {
    return this['KVMIP'];
  }

  /**
   * set Settings for this Manager's KVM-IP protocol support
   * @param {ManagerNetworkProtocol100Protocol} KVMIP
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.setKVMIP = function(KVMIP) {
    this['KVMIP'] = KVMIP;
  }
  
  /**
   * @return {ResourceName}
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {ResourceName} name
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  /**
   * get Settings for this Manager's SNMP support
   * @return {ManagerNetworkProtocol100Protocol}
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.getSNMP = function() {
    return this['SNMP'];
  }

  /**
   * set Settings for this Manager's SNMP support
   * @param {ManagerNetworkProtocol100Protocol} SNMP
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.setSNMP = function(SNMP) {
    this['SNMP'] = SNMP;
  }
  
  /**
   * get Settings for this Manager's SSDP support
   * @return {ManagerNetworkProtocol100SSDProtocol}
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.getSSDP = function() {
    return this['SSDP'];
  }

  /**
   * set Settings for this Manager's SSDP support
   * @param {ManagerNetworkProtocol100SSDProtocol} SSDP
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.setSSDP = function(SSDP) {
    this['SSDP'] = SSDP;
  }
  
  /**
   * get Settings for this Manager's SSH (Secure Shell) protocol support
   * @return {ManagerNetworkProtocol100Protocol}
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.getSSH = function() {
    return this['SSH'];
  }

  /**
   * set Settings for this Manager's SSH (Secure Shell) protocol support
   * @param {ManagerNetworkProtocol100Protocol} SSH
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.setSSH = function(SSH) {
    this['SSH'] = SSH;
  }
  
  /**
   * @return {ResourceStatus}
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.getStatus = function() {
    return this['Status'];
  }

  /**
   * @param {ResourceStatus} status
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.setStatus = function(status) {
    this['Status'] = status;
  }
  
  /**
   * get Settings for this Manager's Telnet protocol support
   * @return {ManagerNetworkProtocol100Protocol}
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.getTelnet = function() {
    return this['Telnet'];
  }

  /**
   * set Settings for this Manager's Telnet protocol support
   * @param {ManagerNetworkProtocol100Protocol} telnet
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.setTelnet = function(telnet) {
    this['Telnet'] = telnet;
  }
  
  /**
   * get Settings for this Manager's Virtual Media support
   * @return {ManagerNetworkProtocol100Protocol}
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.getVirtualMedia = function() {
    return this['VirtualMedia'];
  }

  /**
   * set Settings for this Manager's Virtual Media support
   * @param {ManagerNetworkProtocol100Protocol} virtualMedia
   **/
  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.setVirtualMedia = function(virtualMedia) {
    this['VirtualMedia'] = virtualMedia;
  }
  
  

  ManagerNetworkProtocol100ManagerNetworkProtocol.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.ManagerNetworkProtocol100ManagerNetworkProtocol = ManagerNetworkProtocol100ManagerNetworkProtocol;
  }

  return ManagerNetworkProtocol100ManagerNetworkProtocol;
  
  
}));
