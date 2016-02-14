(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ServiceRoot100ServiceRoot', '../model/ErrorResponse', '../model/AccountService100AccountService', '../model/ChassisCollectionChassisCollection', '../model/Chassis100Chassis', '../model/Power100Power', '../model/Thermal100Thermal', '../model/ManagerAccountCollectionManagerAccountCollection', '../model/ManagerAccount100ManagerAccount', '../model/ManagerCollectionManagerCollection', '../model/Manager100Manager', '../model/MessageRegistryMessageRegistry', '../model/RoleCollectionRoleCollection', '../model/Role100Role', '../model/JsonSchemaFileCollectionJsonSchemaFileCollection', '../model/SessionService100SessionService', '../model/ComputerSystemCollectionComputerSystemCollection', '../model/ComputerSystem100ComputerSystem', '../model/RackHDResetAction', '../model/RackHDBootImageBootImageList', '../model/RackHDBootImageBootImage', '../model/LogServiceCollectionLogServiceCollection', '../model/LogService100LogService', '../model/LogEntryCollectionLogEntryCollection', '../model/LogEntry100LogEntry', '../model/ProcessorCollectionProcessorCollection', '../model/Processor100Processor', '../model/SimpleStorageCollectionSimpleStorageCollection', '../model/SimpleStorage100SimpleStorage', '../model/TaskService100TaskService', '../model/TaskCollectionTaskCollection', '../model/Task100Task'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ServiceRoot100ServiceRoot'), require('../model/ErrorResponse'), require('../model/AccountService100AccountService'), require('../model/ChassisCollectionChassisCollection'), require('../model/Chassis100Chassis'), require('../model/Power100Power'), require('../model/Thermal100Thermal'), require('../model/ManagerAccountCollectionManagerAccountCollection'), require('../model/ManagerAccount100ManagerAccount'), require('../model/ManagerCollectionManagerCollection'), require('../model/Manager100Manager'), require('../model/MessageRegistryMessageRegistry'), require('../model/RoleCollectionRoleCollection'), require('../model/Role100Role'), require('../model/JsonSchemaFileCollectionJsonSchemaFileCollection'), require('../model/SessionService100SessionService'), require('../model/ComputerSystemCollectionComputerSystemCollection'), require('../model/ComputerSystem100ComputerSystem'), require('../model/RackHDResetAction'), require('../model/RackHDBootImageBootImageList'), require('../model/RackHDBootImageBootImage'), require('../model/LogServiceCollectionLogServiceCollection'), require('../model/LogService100LogService'), require('../model/LogEntryCollectionLogEntryCollection'), require('../model/LogEntry100LogEntry'), require('../model/ProcessorCollectionProcessorCollection'), require('../model/Processor100Processor'), require('../model/SimpleStorageCollectionSimpleStorageCollection'), require('../model/SimpleStorage100SimpleStorage'), require('../model/TaskService100TaskService'), require('../model/TaskCollectionTaskCollection'), require('../model/Task100Task'));
  } else {
    // Browser globals (root is window)
    if (!root.RedfishV100) {
      root.RedfishV100 = {};
    }
    root.RedfishV100.RedfishvApi = factory(root.RedfishV100.ApiClient, root.RedfishV100.ServiceRoot100ServiceRoot, root.RedfishV100.ErrorResponse, root.RedfishV100.AccountService100AccountService, root.RedfishV100.ChassisCollectionChassisCollection, root.RedfishV100.Chassis100Chassis, root.RedfishV100.Power100Power, root.RedfishV100.Thermal100Thermal, root.RedfishV100.ManagerAccountCollectionManagerAccountCollection, root.RedfishV100.ManagerAccount100ManagerAccount, root.RedfishV100.ManagerCollectionManagerCollection, root.RedfishV100.Manager100Manager, root.RedfishV100.MessageRegistryMessageRegistry, root.RedfishV100.RoleCollectionRoleCollection, root.RedfishV100.Role100Role, root.RedfishV100.JsonSchemaFileCollectionJsonSchemaFileCollection, root.RedfishV100.SessionService100SessionService, root.RedfishV100.ComputerSystemCollectionComputerSystemCollection, root.RedfishV100.ComputerSystem100ComputerSystem, root.RedfishV100.RackHDResetAction, root.RedfishV100.RackHDBootImageBootImageList, root.RedfishV100.RackHDBootImageBootImage, root.RedfishV100.LogServiceCollectionLogServiceCollection, root.RedfishV100.LogService100LogService, root.RedfishV100.LogEntryCollectionLogEntryCollection, root.RedfishV100.LogEntry100LogEntry, root.RedfishV100.ProcessorCollectionProcessorCollection, root.RedfishV100.Processor100Processor, root.RedfishV100.SimpleStorageCollectionSimpleStorageCollection, root.RedfishV100.SimpleStorage100SimpleStorage, root.RedfishV100.TaskService100TaskService, root.RedfishV100.TaskCollectionTaskCollection, root.RedfishV100.Task100Task);
  }
}(this, function(ApiClient, ServiceRoot100ServiceRoot, ErrorResponse, AccountService100AccountService, ChassisCollectionChassisCollection, Chassis100Chassis, Power100Power, Thermal100Thermal, ManagerAccountCollectionManagerAccountCollection, ManagerAccount100ManagerAccount, ManagerCollectionManagerCollection, Manager100Manager, MessageRegistryMessageRegistry, RoleCollectionRoleCollection, Role100Role, JsonSchemaFileCollectionJsonSchemaFileCollection, SessionService100SessionService, ComputerSystemCollectionComputerSystemCollection, ComputerSystem100ComputerSystem, RackHDResetAction, RackHDBootImageBootImageList, RackHDBootImageBootImage, LogServiceCollectionLogServiceCollection, LogService100LogService, LogEntryCollectionLogEntryCollection, LogEntry100LogEntry, ProcessorCollectionProcessorCollection, Processor100Processor, SimpleStorageCollectionSimpleStorageCollection, SimpleStorage100SimpleStorage, TaskService100TaskService, TaskCollectionTaskCollection, Task100Task) {
  'use strict';

  var RedfishvApi = function RedfishvApi(apiClient) {
    this.apiClient = apiClient || ApiClient.default;

    var self = this;
    
    
    /**
     * retrieve list of root-level resources
     * This object represents the root Redfish service.  All values for resources described  by this schema shall comply to the requirements as described in the Redfish specification. This object represents the root Redfish service.
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: ServiceRoot100ServiceRoot
     */
    self.getServiceRoot = function(callback) {
      var postBody = null;
      

      
      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ServiceRoot100ServiceRoot;

      return this.apiClient.callApi(
        '/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve account service information
     * 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: AccountService100AccountService
     */
    self.unimplemented = function(callback) {
      var postBody = null;
      

      
      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AccountService100AccountService;

      return this.apiClient.callApi(
        '/AccountService', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve list of physical components
     * Defines a collection of physical components managed by the service
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: ChassisCollectionChassisCollection
     */
    self.listChassis = function(callback) {
      var postBody = null;
      

      
      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ChassisCollectionChassisCollection;

      return this.apiClient.callApi(
        '/Chassis', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve specific information for a physical component
     * Retrieves a detailed information catalog for the physical component  specified by identifier
     * @param {String}  identifier 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: Chassis100Chassis
     */
    self.getChassis = function(identifier, callback) {
      var postBody = null;
      
      // verify the required parameter 'identifier' is set
      if (identifier == null) {
        throw "Missing the required parameter 'identifier' when calling getChassis";
      }
      

      
      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Chassis100Chassis;

      return this.apiClient.callApi(
        '/Chassis/{identifier}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * Retrieve power characteristics of a chassis
     * defines a collection of power elements contained within a resource.
     * @param {String}  identifier 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: Power100Power
     */
    self.getPower = function(identifier, callback) {
      var postBody = null;
      
      // verify the required parameter 'identifier' is set
      if (identifier == null) {
        throw "Missing the required parameter 'identifier' when calling getPower";
      }
      

      
      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Power100Power;

      return this.apiClient.callApi(
        '/Chassis/{identifier}/Power', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * Retrieve thermal characteristics of a chassis
     * defines a collection of thermal elements contained within a resource.
     * @param {String}  identifier 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: Thermal100Thermal
     */
    self.getThermal = function(identifier, callback) {
      var postBody = null;
      
      // verify the required parameter 'identifier' is set
      if (identifier == null) {
        throw "Missing the required parameter 'identifier' when calling getThermal";
      }
      

      
      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Thermal100Thermal;

      return this.apiClient.callApi(
        '/Chassis/{identifier}/Thermal', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve list of policies used by event service listeners
     * 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: AccountService100AccountService
     */
    self.unimplemented_1 = function(callback) {
      var postBody = null;
      

      
      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AccountService100AccountService;

      return this.apiClient.callApi(
        '/EventService', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve list of manager accounts
     * 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: ManagerAccountCollectionManagerAccountCollection
     */
    self.unimplemented_2 = function(callback) {
      var postBody = null;
      

      
      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ManagerAccountCollectionManagerAccountCollection;

      return this.apiClient.callApi(
        '/ManagerAccounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve a manager account by name
     * 
     * @param {String}  identifier 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: ManagerAccount100ManagerAccount
     */
    self.unimplemented_3 = function(identifier, callback) {
      var postBody = null;
      
      // verify the required parameter 'identifier' is set
      if (identifier == null) {
        throw "Missing the required parameter 'identifier' when calling unimplemented_3";
      }
      

      
      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ManagerAccount100ManagerAccount;

      return this.apiClient.callApi(
        '/ManagerAccounts/{identifier}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve list of management servers
     * 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: ManagerCollectionManagerCollection
     */
    self.unimplemented_4 = function(callback) {
      var postBody = null;
      

      
      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ManagerCollectionManagerCollection;

      return this.apiClient.callApi(
        '/Managers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve list of management servers
     * 
     * @param {String}  identifier 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: Manager100Manager
     */
    self.unimplemented_5 = function(identifier, callback) {
      var postBody = null;
      
      // verify the required parameter 'identifier' is set
      if (identifier == null) {
        throw "Missing the required parameter 'identifier' when calling unimplemented_5";
      }
      

      
      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Manager100Manager;

      return this.apiClient.callApi(
        '/Managers/{identifier}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * Unspecified
     * 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: MessageRegistryMessageRegistry
     */
    self.unimplemented_6 = function(callback) {
      var postBody = null;
      

      
      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = MessageRegistryMessageRegistry;

      return this.apiClient.callApi(
        '/Registries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve list of roles for use in ManagerAccounts
     * 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: RoleCollectionRoleCollection
     */
    self.unimplemented_7 = function(callback) {
      var postBody = null;
      

      
      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RoleCollectionRoleCollection;

      return this.apiClient.callApi(
        '/Roles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve a manager account role by name
     * 
     * @param {String}  identifier 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: Role100Role
     */
    self.unimplemented_8 = function(identifier, callback) {
      var postBody = null;
      
      // verify the required parameter 'identifier' is set
      if (identifier == null) {
        throw "Missing the required parameter 'identifier' when calling unimplemented_8";
      }
      

      
      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Role100Role;

      return this.apiClient.callApi(
        '/Roles/{identifier}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * Unspecified
     * 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: JsonSchemaFileCollectionJsonSchemaFileCollection
     */
    self.unimplemented_9 = function(callback) {
      var postBody = null;
      

      
      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = JsonSchemaFileCollectionJsonSchemaFileCollection;

      return this.apiClient.callApi(
        '/Schemas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve a list of sessions
     * 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: SessionService100SessionService
     */
    self.unimplemented_10 = function(callback) {
      var postBody = null;
      

      
      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SessionService100SessionService;

      return this.apiClient.callApi(
        '/Sessions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve list of computer systems
     * retrieve list of computer systems
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: ComputerSystemCollectionComputerSystemCollection
     */
    self.listSystems = function(callback) {
      var postBody = null;
      

      
      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ComputerSystemCollectionComputerSystemCollection;

      return this.apiClient.callApi(
        '/Systems', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve information for a specific computer systems (physical and/or virtual)
     * defines a computer system and its respective properties.  A computer system represents a  machine (physical or virtual) and the local resources such as memory, cpu and other  devices that can be accessed from that machine.
     * @param {String}  identifier node identifier
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: ComputerSystem100ComputerSystem
     */
    self.getSystem = function(identifier, callback) {
      var postBody = null;
      
      // verify the required parameter 'identifier' is set
      if (identifier == null) {
        throw "Missing the required parameter 'identifier' when calling getSystem";
      }
      

      
      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ComputerSystem100ComputerSystem;

      return this.apiClient.callApi(
        '/Systems/{identifier}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve the list of reset types for the specified compute node
     * Retrieve  a list of valid reset types for the system described by identifier
     * @param {String}  identifier 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: RackHDResetAction
     */
    self.listResetTypes = function(identifier, callback) {
      var postBody = null;
      
      // verify the required parameter 'identifier' is set
      if (identifier == null) {
        throw "Missing the required parameter 'identifier' when calling listResetTypes";
      }
      

      
      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RackHDResetAction;

      return this.apiClient.callApi(
        '/Systems/{identifier}/Actions/ComputerSystem.Reset', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * reset a node
     * Perform the reset specified in the post data arguments on the system described by identifier
     * @param {String}  identifier 
     * @param {RackHDResetAction}  payload 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     */
    self.doReset = function(identifier, payload, callback) {
      var postBody = payload;
      
      // verify the required parameter 'identifier' is set
      if (identifier == null) {
        throw "Missing the required parameter 'identifier' when calling doReset";
      }
      
      // verify the required parameter 'payload' is set
      if (payload == null) {
        throw "Missing the required parameter 'payload' when calling doReset";
      }
      

      
      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/Systems/{identifier}/Actions/ComputerSystem.Reset', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve the list of boot image types for the specified compute node
     * Retrieve  a list of valid boot image types for the system described by identifier
     * @param {String}  identifier 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: RackHDBootImageBootImageList
     */
    self.listBootImage = function(identifier, callback) {
      var postBody = null;
      
      // verify the required parameter 'identifier' is set
      if (identifier == null) {
        throw "Missing the required parameter 'identifier' when calling listBootImage";
      }
      

      
      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RackHDBootImageBootImageList;

      return this.apiClient.callApi(
        '/Systems/{identifier}/Actions/RackHD.BootImage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * install a boot image on a node
     * Perform the boot image installation specified in the post data arguments on  the system described by identifier
     * @param {String}  identifier 
     * @param {RackHDBootImageBootImage}  payload 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     */
    self.doBootImage = function(identifier, payload, callback) {
      var postBody = payload;
      
      // verify the required parameter 'identifier' is set
      if (identifier == null) {
        throw "Missing the required parameter 'identifier' when calling doBootImage";
      }
      
      // verify the required parameter 'payload' is set
      if (payload == null) {
        throw "Missing the required parameter 'payload' when calling doBootImage";
      }
      

      
      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/Systems/{identifier}/Actions/RackHD.BootImage', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve list of the logs for a computer system
     * Defines a collection of log services that are available for the system described by identifier
     * @param {String}  identifier 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: LogServiceCollectionLogServiceCollection
     */
    self.listLogService = function(identifier, callback) {
      var postBody = null;
      
      // verify the required parameter 'identifier' is set
      if (identifier == null) {
        throw "Missing the required parameter 'identifier' when calling listLogService";
      }
      

      
      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LogServiceCollectionLogServiceCollection;

      return this.apiClient.callApi(
        '/Systems/{identifier}/LogServices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve list of the logs for a computer system
     * Defines a collection of SEL entries for the system described by identifier.
     * @param {String}  identifier 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: LogService100LogService
     */
    self.getSelLogService = function(identifier, callback) {
      var postBody = null;
      
      // verify the required parameter 'identifier' is set
      if (identifier == null) {
        throw "Missing the required parameter 'identifier' when calling getSelLogService";
      }
      

      
      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LogService100LogService;

      return this.apiClient.callApi(
        '/Systems/{identifier}/LogServices/sel', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve list of the logs entries for associated for log service
     * Defines a collection of entries for the system described by identifier
     * @param {String}  identifier 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: LogEntryCollectionLogEntryCollection
     */
    self.listSelLogServiceEntries = function(identifier, callback) {
      var postBody = null;
      
      // verify the required parameter 'identifier' is set
      if (identifier == null) {
        throw "Missing the required parameter 'identifier' when calling listSelLogServiceEntries";
      }
      

      
      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LogEntryCollectionLogEntryCollection;

      return this.apiClient.callApi(
        '/Systems/{identifier}/LogServices/sel/Entries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve log entry by logId associated for log service
     * Defines a log entry specified by entryId within the LogService of the specified type for the system described by identifier
     * @param {String}  identifier 
     * @param {String}  entryId 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: LogEntry100LogEntry
     */
    self.getSelLogServiceEntry = function(identifier, entryId, callback) {
      var postBody = null;
      
      // verify the required parameter 'identifier' is set
      if (identifier == null) {
        throw "Missing the required parameter 'identifier' when calling getSelLogServiceEntry";
      }
      
      // verify the required parameter 'entryId' is set
      if (entryId == null) {
        throw "Missing the required parameter 'entryId' when calling getSelLogServiceEntry";
      }
      

      
      var pathParams = {
        'identifier': identifier,
        'entryId': entryId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LogEntry100LogEntry;

      return this.apiClient.callApi(
        '/Systems/{identifier}/LogServices/sel/Entries/{entryId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve the processor collection for the specified system identifier
     * defines a collection of processors contained within a resource.
     * @param {String}  identifier 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: ProcessorCollectionProcessorCollection
     */
    self.listSystemProcessors = function(identifier, callback) {
      var postBody = null;
      
      // verify the required parameter 'identifier' is set
      if (identifier == null) {
        throw "Missing the required parameter 'identifier' when calling listSystemProcessors";
      }
      

      
      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProcessorCollectionProcessorCollection;

      return this.apiClient.callApi(
        '/Systems/{identifier}/Processors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve a specified processor for the specified system identifier
     * This represents the properties of a processor attached to a System.
     * @param {String}  identifier 
     * @param {String}  socket 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: Processor100Processor
     */
    self.getSystemProcessor = function(identifier, socket, callback) {
      var postBody = null;
      
      // verify the required parameter 'identifier' is set
      if (identifier == null) {
        throw "Missing the required parameter 'identifier' when calling getSystemProcessor";
      }
      
      // verify the required parameter 'socket' is set
      if (socket == null) {
        throw "Missing the required parameter 'socket' when calling getSystemProcessor";
      }
      

      
      var pathParams = {
        'identifier': identifier,
        'socket': socket
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Processor100Processor;

      return this.apiClient.callApi(
        '/Systems/{identifier}/Processors/{socket}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve the simple storage collection
     * Defines a collection of simple storage collections that are present on the system described by identifier
     * @param {String}  identifier 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: SimpleStorageCollectionSimpleStorageCollection
     */
    self.listSimpleStorage = function(identifier, callback) {
      var postBody = null;
      
      // verify the required parameter 'identifier' is set
      if (identifier == null) {
        throw "Missing the required parameter 'identifier' when calling listSimpleStorage";
      }
      

      
      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SimpleStorageCollectionSimpleStorageCollection;

      return this.apiClient.callApi(
        '/Systems/{identifier}/SimpleStorage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * Retrieve the simple storage collection by device identifier
     * Defines a collection of storage devices on the device specified by identifier that are present on the system described by identifier
     * @param {String}  identifier 
     * @param {String}  index 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: SimpleStorage100SimpleStorage
     */
    self.getSimpleStorage = function(identifier, index, callback) {
      var postBody = null;
      
      // verify the required parameter 'identifier' is set
      if (identifier == null) {
        throw "Missing the required parameter 'identifier' when calling getSimpleStorage";
      }
      
      // verify the required parameter 'index' is set
      if (index == null) {
        throw "Missing the required parameter 'index' when calling getSimpleStorage";
      }
      

      
      var pathParams = {
        'identifier': identifier,
        'index': index
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SimpleStorage100SimpleStorage;

      return this.apiClient.callApi(
        '/Systems/{identifier}/SimpleStorage/{index}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve list of all tasks
     * This object represents the root Redfish service.
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: TaskService100TaskService
     */
    self.taskServiceRoot = function(callback) {
      var postBody = null;
      

      
      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TaskService100TaskService;

      return this.apiClient.callApi(
        '/TaskService', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve list of tasks per system Id
     * This object represents the root Redfish service.
     * @param {String}  identifier 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: TaskCollectionTaskCollection
     */
    self.getSystemTasks = function(identifier, callback) {
      var postBody = null;
      
      // verify the required parameter 'identifier' is set
      if (identifier == null) {
        throw "Missing the required parameter 'identifier' when calling getSystemTasks";
      }
      

      
      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TaskCollectionTaskCollection;

      return this.apiClient.callApi(
        '/TaskService/Oem/Tasks/{identifier}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve list of all tasks
     * This object represents the root Redfish service.
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: TaskCollectionTaskCollection
     */
    self.listTasks = function(callback) {
      var postBody = null;
      

      
      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TaskCollectionTaskCollection;

      return this.apiClient.callApi(
        '/TaskService/Tasks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    /**
     * retrieve a task entry by task Id
     * This object represents the root Redfish service.
     * @param {String}  identifier 
     * @param {function} callback the callback function, accepting three arguments: error, data, response
     *   data is of type: Task100Task
     */
    self.getTask = function(identifier, callback) {
      var postBody = null;
      
      // verify the required parameter 'identifier' is set
      if (identifier == null) {
        throw "Missing the required parameter 'identifier' when calling getTask";
      }
      

      
      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Task100Task;

      return this.apiClient.callApi(
        '/TaskService/Tasks/{identifier}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
      
    }
    
    
  };

  return RedfishvApi;
}));
