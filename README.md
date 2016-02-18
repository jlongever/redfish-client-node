# redfish-client-node
Redfish 1.0 Node.js client library 

## Getting Started
See example.py for usage examples.

## Generating code

```
sudo apt-get install -y maven
git clone https://github.com/RackHD/on-http.git
git clone https://github.com/swagger-api/swagger-codegen.git
pushd ./swagger-codegen && mvn package && popd
java -jar ./swagger-codegen/modules/swagger-codegen-cli/target/swagger-codegen-cli.jar \
  generate -i on-http/static/redfish.yaml -o redfish-client-node -l javascript
```
