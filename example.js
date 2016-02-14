_ = require('lodash');
redfish = require('./src');

api_client = new redfish.ApiClient();
api_client.basePath = 'http://localhost:8080/redfish/v1'.replace(/\/+$/, '');;
redfishApi = new redfish.RedfishvApi(api_client);

getServiceRoot = function() {
    redfishApi.getServiceRoot(function(err,data,response) {
        if(err) {
            console.log(err);
            return;
        }
        if(response) {
           console.log(response.body);
       }
    });
}

listChassis = function() {
    redfishApi.listChassis(function(err,data,response) {
        if(err) {
            console.log(err);
            return;
        }
        if(response) {
            console.log(response.body);
        }
    });
}

listChassisPower = function() {
    redfishApi.listChassis(function(err,data,response) {
        if(err) {
            console.log(err);
            return;
        }
        if(response) {
            var membersList = response.body.Members;
            _.forEach(membersList, function(member) {
                var id = member['@odata.id'].split('/redfish/v1/Chassis/')[1];
                redfishApi.getPower(id, function(err,data,response) {
                    if(err) {
                        console.log(err);
                        return;
                    }
                    if(response) {
                        console.log(response.body);
                    }
                });
            });
        }
    });
};
listChassisThermal = function() {
    redfishApi.listChassis(function(err,data,response) {
        if(err) {
            console.log(err);
            return;
        }
        if(response) {
            var membersList = response.body.Members;
            _.forEach(membersList, function(member) {
                var id = member['@odata.id'].split('/redfish/v1/Chassis/')[1];
                redfishApi.getThermal(id, function(err,data,response) {
                    if(err) {
                        console.log(err);
                        return;
                    }
                    if(response) {
                        console.log(response.body);
                    }
                });
            });
        }
    });
};

getServiceRoot();
listChassis();
listChassisPower();
listChassisThermal();

