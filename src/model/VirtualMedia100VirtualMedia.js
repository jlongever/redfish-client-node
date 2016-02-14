(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './Odata400Context', './Odata400Id', './Odata400Type', './ResourceDescription', './ResourceId', './ResourceName', './ResourceOem', './VirtualMedia100ConnectedVia', './VirtualMedia100MediaType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./Odata400Context'), require('./Odata400Id'), require('./Odata400Type'), require('./ResourceDescription'), require('./ResourceId'), require('./ResourceName'), require('./ResourceOem'), require('./VirtualMedia100ConnectedVia'), require('./VirtualMedia100MediaType'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.Odata400Context, root.RedfishV100.Odata400Id, root.RedfishV100.Odata400Type, root.RedfishV100.ResourceDescription, root.RedfishV100.ResourceId, root.RedfishV100.ResourceName, root.RedfishV100.ResourceOem, root.RedfishV100.VirtualMedia100ConnectedVia, root.RedfishV100.VirtualMedia100MediaType);
  }
}(this, function(module, ApiClient, Odata400Context, Odata400Id, Odata400Type, ResourceDescription, ResourceId, ResourceName, ResourceOem, VirtualMedia100ConnectedVia, VirtualMedia100MediaType) {
  'use strict';

  
  

  /**
   * This is the schema definition for the Virtual Media Service.
   **/
  var VirtualMedia100VirtualMedia = function VirtualMedia100VirtualMedia() { 
    
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
     * Current virtual media connection methods
     * datatype: VirtualMedia100ConnectedVia
     **/
    this['ConnectedVia'] = new VirtualMedia100ConnectedVia();
    
    /**
     * datatype: ResourceDescription
     **/
    this['Description'] = new ResourceDescription();
    
    /**
     * datatype: ResourceId
     **/
    this['Id'] = new ResourceId();
    
    /**
     * This is the media types supported as virtual media.
     * datatype: [VirtualMedia100MediaType]
     **/
    this['MediaTypes'] = [];
    
    /**
     * datatype: ResourceName
     **/
    this['Name'] = new ResourceName();
    
    /**
     * This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
     * datatype: ResourceOem
     **/
    this['Oem'] = new ResourceOem();
    
  };

  VirtualMedia100VirtualMedia.prototype.constructFromObject = function(data) {
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
    
    if (data['ConnectedVia']) {
      this['ConnectedVia'].constructFromObject(data['ConnectedVia']);
    }
    
    if (data['Description']) {
      this['Description'].constructFromObject(data['Description']);
    }
    
    if (data['Id']) {
      this['Id'].constructFromObject(data['Id']);
    }
    
    if (data['MediaTypes']) {
      this['MediaTypes'] = ApiClient.convertToType(data['MediaTypes'], [VirtualMedia100MediaType]);
    }
    
    if (data['Name']) {
      this['Name'].constructFromObject(data['Name']);
    }
    
    if (data['Oem']) {
      this['Oem'].constructFromObject(data['Oem']);
    }
    
    return this;
  }

  
  
  /**
   * @return {Odata400Context}
   **/
  VirtualMedia100VirtualMedia.prototype.getOdataContext = function() {
    return this['@odata.context'];
  }

  /**
   * @param {Odata400Context} odataContext
   **/
  VirtualMedia100VirtualMedia.prototype.setOdataContext = function(odataContext) {
    this['@odata.context'] = odataContext;
  }
  
  /**
   * @return {Odata400Id}
   **/
  VirtualMedia100VirtualMedia.prototype.getOdataId = function() {
    return this['@odata.id'];
  }

  /**
   * @param {Odata400Id} odataId
   **/
  VirtualMedia100VirtualMedia.prototype.setOdataId = function(odataId) {
    this['@odata.id'] = odataId;
  }
  
  /**
   * @return {Odata400Type}
   **/
  VirtualMedia100VirtualMedia.prototype.getOdataType = function() {
    return this['@odata.type'];
  }

  /**
   * @param {Odata400Type} odataType
   **/
  VirtualMedia100VirtualMedia.prototype.setOdataType = function(odataType) {
    this['@odata.type'] = odataType;
  }
  
  /**
   * get Current virtual media connection methods
   * @return {VirtualMedia100ConnectedVia}
   **/
  VirtualMedia100VirtualMedia.prototype.getConnectedVia = function() {
    return this['ConnectedVia'];
  }

  /**
   * set Current virtual media connection methods
   * @param {VirtualMedia100ConnectedVia} connectedVia
   **/
  VirtualMedia100VirtualMedia.prototype.setConnectedVia = function(connectedVia) {
    this['ConnectedVia'] = connectedVia;
  }
  
  /**
   * @return {ResourceDescription}
   **/
  VirtualMedia100VirtualMedia.prototype.getDescription = function() {
    return this['Description'];
  }

  /**
   * @param {ResourceDescription} description
   **/
  VirtualMedia100VirtualMedia.prototype.setDescription = function(description) {
    this['Description'] = description;
  }
  
  /**
   * @return {ResourceId}
   **/
  VirtualMedia100VirtualMedia.prototype.getId = function() {
    return this['Id'];
  }

  /**
   * @param {ResourceId} id
   **/
  VirtualMedia100VirtualMedia.prototype.setId = function(id) {
    this['Id'] = id;
  }
  
  /**
   * get This is the media types supported as virtual media.
   * @return {[VirtualMedia100MediaType]}
   **/
  VirtualMedia100VirtualMedia.prototype.getMediaTypes = function() {
    return this['MediaTypes'];
  }

  /**
   * set This is the media types supported as virtual media.
   * @param {[VirtualMedia100MediaType]} mediaTypes
   **/
  VirtualMedia100VirtualMedia.prototype.setMediaTypes = function(mediaTypes) {
    this['MediaTypes'] = mediaTypes;
  }
  
  /**
   * @return {ResourceName}
   **/
  VirtualMedia100VirtualMedia.prototype.getName = function() {
    return this['Name'];
  }

  /**
   * @param {ResourceName} name
   **/
  VirtualMedia100VirtualMedia.prototype.setName = function(name) {
    this['Name'] = name;
  }
  
  /**
   * get This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @return {ResourceOem}
   **/
  VirtualMedia100VirtualMedia.prototype.getOem = function() {
    return this['Oem'];
  }

  /**
   * set This is the manufacturer/provider specific extension moniker used to divide the Oem object into sections.
   * @param {ResourceOem} oem
   **/
  VirtualMedia100VirtualMedia.prototype.setOem = function(oem) {
    this['Oem'] = oem;
  }
  
  

  VirtualMedia100VirtualMedia.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.VirtualMedia100VirtualMedia = VirtualMedia100VirtualMedia;
  }

  return VirtualMedia100VirtualMedia;
  
  
}));
