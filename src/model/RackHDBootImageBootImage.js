(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient', './RackHDBootImageNetworkDevice', './RackHDBootImageUsers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'), require('./RackHDBootImageNetworkDevice'), require('./RackHDBootImageUsers'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient, root.RedfishV100.RackHDBootImageNetworkDevice, root.RedfishV100.RackHDBootImageUsers);
  }
}(this, function(module, ApiClient, RackHDBootImageNetworkDevice, RackHDBootImageUsers) {
  'use strict';

  
  
//export module
if ( typeof define === "function" && define.amd ) {
	define('OsNameEnum', [], function() {
        return OsNameEnum;
	 });
}

var OsNameEnum = function OsNameEnum() {
	var self = this;


	/**
	 * @const
	 */
	self.CENTOS = "CentOS",
	
	/**
	 * @const
	 */
	self.CENTOS_KVM = "CentOS+KVM",
	
	/**
	 * @const
	 */
	self.ESXI = "ESXi",
	
	/**
	 * @const
	 */
	self.RHEL = "RHEL",
	
	/**
	 * @const
	 */
	self.RHEL_KVM = "RHEL+KVM";

}


  
  var RackHDBootImageBootImage = function RackHDBootImageBootImage(rootPassword, repo, domain, hostname, osName, dnsServers, version) { 
    
    /**
     * This is the SshKey for the OS root account.
     * datatype: String
     **/
    this['rootSshKey'] = null;
    
    /**
     * This is the domain for the target OS
     * datatype: String
     * required
     **/
    this['domain'] = domain;
    
    /**
     * This is a list of user account information that will created after OS installation
     * datatype: [RackHDBootImageUsers]
     **/
    this['users'] = [];
    
    /**
     * The hostname for target OS.
     * datatype: String
     * required
     **/
    this['hostname'] = hostname;
    
    /**
     * Name of the target OS to be installed
     * datatype: OsNameEnum
     * required
     **/
    this['osName'] = osName;
    
    /**
     * The external OS repository address, currently only supports HTTP
     * datatype: String
     * required
     **/
    this['repo'] = repo;
    
    /**
     * The version number of target OS that needs to install.
     * datatype: String
     * required
     **/
    this['version'] = version;
    
    /**
     * List of device names and static IP settings for network devices after OS installation.
     * datatype: [RackHDBootImageNetworkDevice]
     **/
    this['networkDevices'] = [];
    
    /**
     * The password for the OS root account.
     * datatype: String
     * required
     **/
    this['rootPassword'] = rootPassword;
    
    /**
     * This is a list of Domain Name Servers.
     * datatype: [String]
     * required
     **/
    this['dnsServers'] = dnsServers;
    
    /**
     * datatype: String
     **/
    this['installDisk'] = null;
    
  };

  RackHDBootImageBootImage.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['rootSshKey']) {
      this['rootSshKey'] = ApiClient.convertToType(data['rootSshKey'], 'String');
    }
    
    if (data['domain']) {
      this['domain'] = ApiClient.convertToType(data['domain'], 'String');
    }
    
    if (data['users']) {
      this['users'] = ApiClient.convertToType(data['users'], [RackHDBootImageUsers]);
    }
    
    if (data['hostname']) {
      this['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
    }
    
    if (data['osName']) {
      this['osName'] = ApiClient.convertToType(data['osName'], 'String');
    }
    
    if (data['repo']) {
      this['repo'] = ApiClient.convertToType(data['repo'], 'String');
    }
    
    if (data['version']) {
      this['version'] = ApiClient.convertToType(data['version'], 'String');
    }
    
    if (data['networkDevices']) {
      this['networkDevices'] = ApiClient.convertToType(data['networkDevices'], [RackHDBootImageNetworkDevice]);
    }
    
    if (data['rootPassword']) {
      this['rootPassword'] = ApiClient.convertToType(data['rootPassword'], 'String');
    }
    
    if (data['dnsServers']) {
      this['dnsServers'] = ApiClient.convertToType(data['dnsServers'], ['String']);
    }
    
    if (data['installDisk']) {
      this['installDisk'] = ApiClient.convertToType(data['installDisk'], 'String');
    }
    
    return this;
  }

  
  
  /**
   * get This is the SshKey for the OS root account.
   * @return {String}
   **/
  RackHDBootImageBootImage.prototype.getRootSshKey = function() {
    return this['rootSshKey'];
  }

  /**
   * set This is the SshKey for the OS root account.
   * @param {String} rootSshKey
   **/
  RackHDBootImageBootImage.prototype.setRootSshKey = function(rootSshKey) {
    this['rootSshKey'] = rootSshKey;
  }
  
  /**
   * get This is the domain for the target OS
   * @return {String}
   **/
  RackHDBootImageBootImage.prototype.getDomain = function() {
    return this['domain'];
  }

  /**
   * set This is the domain for the target OS
   * @param {String} domain
   **/
  RackHDBootImageBootImage.prototype.setDomain = function(domain) {
    this['domain'] = domain;
  }
  
  /**
   * get This is a list of user account information that will created after OS installation
   * @return {[RackHDBootImageUsers]}
   **/
  RackHDBootImageBootImage.prototype.getUsers = function() {
    return this['users'];
  }

  /**
   * set This is a list of user account information that will created after OS installation
   * @param {[RackHDBootImageUsers]} users
   **/
  RackHDBootImageBootImage.prototype.setUsers = function(users) {
    this['users'] = users;
  }
  
  /**
   * get The hostname for target OS.
   * @return {String}
   **/
  RackHDBootImageBootImage.prototype.getHostname = function() {
    return this['hostname'];
  }

  /**
   * set The hostname for target OS.
   * @param {String} hostname
   **/
  RackHDBootImageBootImage.prototype.setHostname = function(hostname) {
    this['hostname'] = hostname;
  }
  
  /**
   * get Name of the target OS to be installed
   * @return {OsNameEnum}
   **/
  RackHDBootImageBootImage.prototype.getOsName = function() {
    return this['osName'];
  }

  /**
   * set Name of the target OS to be installed
   * @param {OsNameEnum} osName
   **/
  RackHDBootImageBootImage.prototype.setOsName = function(osName) {
    this['osName'] = osName;
  }
  
  /**
   * get The external OS repository address, currently only supports HTTP
   * @return {String}
   **/
  RackHDBootImageBootImage.prototype.getRepo = function() {
    return this['repo'];
  }

  /**
   * set The external OS repository address, currently only supports HTTP
   * @param {String} repo
   **/
  RackHDBootImageBootImage.prototype.setRepo = function(repo) {
    this['repo'] = repo;
  }
  
  /**
   * get The version number of target OS that needs to install.
   * @return {String}
   **/
  RackHDBootImageBootImage.prototype.getVersion = function() {
    return this['version'];
  }

  /**
   * set The version number of target OS that needs to install.
   * @param {String} version
   **/
  RackHDBootImageBootImage.prototype.setVersion = function(version) {
    this['version'] = version;
  }
  
  /**
   * get List of device names and static IP settings for network devices after OS installation.
   * @return {[RackHDBootImageNetworkDevice]}
   **/
  RackHDBootImageBootImage.prototype.getNetworkDevices = function() {
    return this['networkDevices'];
  }

  /**
   * set List of device names and static IP settings for network devices after OS installation.
   * @param {[RackHDBootImageNetworkDevice]} networkDevices
   **/
  RackHDBootImageBootImage.prototype.setNetworkDevices = function(networkDevices) {
    this['networkDevices'] = networkDevices;
  }
  
  /**
   * get The password for the OS root account.
   * @return {String}
   **/
  RackHDBootImageBootImage.prototype.getRootPassword = function() {
    return this['rootPassword'];
  }

  /**
   * set The password for the OS root account.
   * @param {String} rootPassword
   **/
  RackHDBootImageBootImage.prototype.setRootPassword = function(rootPassword) {
    this['rootPassword'] = rootPassword;
  }
  
  /**
   * get This is a list of Domain Name Servers.
   * @return {[String]}
   **/
  RackHDBootImageBootImage.prototype.getDnsServers = function() {
    return this['dnsServers'];
  }

  /**
   * set This is a list of Domain Name Servers.
   * @param {[String]} dnsServers
   **/
  RackHDBootImageBootImage.prototype.setDnsServers = function(dnsServers) {
    this['dnsServers'] = dnsServers;
  }
  
  /**
   * @return {String}
   **/
  RackHDBootImageBootImage.prototype.getInstallDisk = function() {
    return this['installDisk'];
  }

  /**
   * @param {String} installDisk
   **/
  RackHDBootImageBootImage.prototype.setInstallDisk = function(installDisk) {
    this['installDisk'] = installDisk;
  }
  
  

  RackHDBootImageBootImage.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.RackHDBootImageBootImage = RackHDBootImageBootImage;
  }

  return RackHDBootImageBootImage;
  
  
}));
