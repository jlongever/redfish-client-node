_ = require('lodash');
Promise = require('bluebird');
redfish = require('./src');

api_client = new redfish.ApiClient();
api_client.basePath = 'http://localhost:8080/redfish/v1'.replace(/\/+$/, '');;
redfish = Promise.promisifyAll(new redfish.RedfishvApi(api_client));

getServiceRoot = function() {
    return redfish.getServiceRootAsync()
    .then(function(res) {
        console.log(res[1].body);
    })
    .catch(function(err) {
        throw err;  
    });
}

listChassis = function() {
    return redfish.listChassisAsync()
    .then(function(res) {
        console.log(res[1].body);
    })
    .catch(function(err) {
        throw err;  
    });
}

listChassisThermal = function() {
    return redfish.listChassisAsync()
    .then(function(res) {
        var body = res[1].body;
        var membersList = body.Members;
        return Promise.map(membersList, function(member) {
            var id = member['@odata.id'].split('/redfish/v1/Chassis/')[1];
            return redfish.getThermalAsync(id);
        });
    })
    .then(function(res) {
        _.forEach(res, function(item) {
            console.log(item[1].body);
        });
    })
    .catch(function(err) {
        throw err;
    });
}

listChassisPower = function() {
    return redfish.listChassisAsync()
    .then(function(res) {
        var body = res[1].body;
        var membersList = body.Members;
        return Promise.map(membersList, function(member) {
            var id = member['@odata.id'].split('/redfish/v1/Chassis/')[1];
            return redfish.getPowerAsync(id);
        });
    })
    .then(function(res) {
        _.forEach(res, function(item) {
            console.log(item[1].body);
        });
    })
    .catch(function(err) {
        throw err;
    });
}
getServiceRoot();
listChassis();
listChassisThermal();
listChassisPower();

