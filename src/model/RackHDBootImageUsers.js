(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, '../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    factory(root.RedfishV100, root.RedfishV100.ApiClient);
  }
}(this, function(module, ApiClient) {
  'use strict';

  
  

  
  var RackHDBootImageUsers = function RackHDBootImageUsers(uid, name, password) { 
    
    /**
     * This is the password of user, it should pass the clear text, OnRack will do encryption before storing it into a kickstart file.
     * datatype: String
     * required
     **/
    this['password'] = password;
    
    /**
     * The unique identifier of user
     * datatype: Number
     * required
     **/
    this['uid'] = uid;
    
    /**
     * This is the name of user
     * datatype: String
     * required
     **/
    this['name'] = name;
    
    /**
     * This is the SSH key that will be appended into the file ~/.ssh/authorized_keys
     * datatype: String
     **/
    this['sshKey'] = null;
    
  };

  RackHDBootImageUsers.prototype.constructFromObject = function(data) {
    if (!data) {
      return this;
    }
    
    if (data['password']) {
      this['password'] = ApiClient.convertToType(data['password'], 'String');
    }
    
    if (data['uid']) {
      this['uid'] = ApiClient.convertToType(data['uid'], 'Number');
    }
    
    if (data['name']) {
      this['name'] = ApiClient.convertToType(data['name'], 'String');
    }
    
    if (data['sshKey']) {
      this['sshKey'] = ApiClient.convertToType(data['sshKey'], 'String');
    }
    
    return this;
  }

  
  
  /**
   * get This is the password of user, it should pass the clear text, OnRack will do encryption before storing it into a kickstart file.
   * @return {String}
   **/
  RackHDBootImageUsers.prototype.getPassword = function() {
    return this['password'];
  }

  /**
   * set This is the password of user, it should pass the clear text, OnRack will do encryption before storing it into a kickstart file.
   * @param {String} password
   **/
  RackHDBootImageUsers.prototype.setPassword = function(password) {
    this['password'] = password;
  }
  
  /**
   * get The unique identifier of user
   * @return {Number}
   **/
  RackHDBootImageUsers.prototype.getUid = function() {
    return this['uid'];
  }

  /**
   * set The unique identifier of user
   * @param {Number} uid
   **/
  RackHDBootImageUsers.prototype.setUid = function(uid) {
    this['uid'] = uid;
  }
  
  /**
   * get This is the name of user
   * @return {String}
   **/
  RackHDBootImageUsers.prototype.getName = function() {
    return this['name'];
  }

  /**
   * set This is the name of user
   * @param {String} name
   **/
  RackHDBootImageUsers.prototype.setName = function(name) {
    this['name'] = name;
  }
  
  /**
   * get This is the SSH key that will be appended into the file ~/.ssh/authorized_keys
   * @return {String}
   **/
  RackHDBootImageUsers.prototype.getSshKey = function() {
    return this['sshKey'];
  }

  /**
   * set This is the SSH key that will be appended into the file ~/.ssh/authorized_keys
   * @param {String} sshKey
   **/
  RackHDBootImageUsers.prototype.setSshKey = function(sshKey) {
    this['sshKey'] = sshKey;
  }
  
  

  RackHDBootImageUsers.prototype.toJson = function() {
    return JSON.stringify(this);
  }

  if (module) {
    module.RackHDBootImageUsers = RackHDBootImageUsers;
  }

  return RackHDBootImageUsers;
  
  
}));
