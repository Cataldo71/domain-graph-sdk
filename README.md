# domainGraphClient

DomainGraphClient - JavaScript client for domainGraphClient
This is a simple API
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install domainGraphClient --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/domainGraphClient
then install it via:

```shell
    npm install YOUR_USERNAME/domainGraphClient --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var DomainGraphClient = require('domainGraphClient');

var api = new DomainGraphClient.ConfigurationApi()

var opts = { 
  'configuration': new DomainGraphClient.Configuration() // {Configuration} New Configuration for this service
};
api.addConfiguration(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://virtserver.swaggerhub.com/Cataldo71/DomainGraphModel/1.0.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DomainGraphClient.ConfigurationApi* | [**addConfiguration**](docs/ConfigurationApi.md#addConfiguration) | **POST** /configuration | replaces the configuration with a new one
*DomainGraphClient.ConfigurationApi* | [**getConfiguration**](docs/ConfigurationApi.md#getConfiguration) | **GET** /configuration | gets the full configuration
*DomainGraphClient.ConfigurationApi* | [**mergeConfiguration**](docs/ConfigurationApi.md#mergeConfiguration) | **PUT** /configuration | updates the configuration with new data
*DomainGraphClient.GraphApi* | [**getGraph**](docs/GraphApi.md#getGraph) | **GET** /graph | gets the full graph
*DomainGraphClient.NodesApi* | [**addNode**](docs/NodesApi.md#addNode) | **POST** /nodes | adds a new node to the graph
*DomainGraphClient.NodesApi* | [**addRelationships**](docs/NodesApi.md#addRelationships) | **PUT** /nodes/{nodeId}/relationships | adds a new node to the graph
*DomainGraphClient.NodesApi* | [**deleteNodeById**](docs/NodesApi.md#deleteNodeById) | **DELETE** /nodes/{nodeId} | 
*DomainGraphClient.NodesApi* | [**deleteRelationships**](docs/NodesApi.md#deleteRelationships) | **DELETE** /nodes/{nodeId}/relationships | adds a new node to the graph
*DomainGraphClient.NodesApi* | [**getNodeById**](docs/NodesApi.md#getNodeById) | **GET** /nodes/{nodeId} | 
*DomainGraphClient.NodesApi* | [**getNodeRelationshipsById**](docs/NodesApi.md#getNodeRelationshipsById) | **GET** /nodes/{nodeId}/relationships | 
*DomainGraphClient.NodesApi* | [**replaceNodeRelationshipsById**](docs/NodesApi.md#replaceNodeRelationshipsById) | **POST** /nodes/{nodeId}/relationships | adds a new node to the graph
*DomainGraphClient.NodesApi* | [**updateNodeById**](docs/NodesApi.md#updateNodeById) | **PUT** /nodes/{nodeId} | 
*DomainGraphClient.RelationshipsApi* | [**deleteRelationshipById**](docs/RelationshipsApi.md#deleteRelationshipById) | **DELETE** /relationships/{relId} | 
*DomainGraphClient.RelationshipsApi* | [**getRelationshipById**](docs/RelationshipsApi.md#getRelationshipById) | **GET** /relationships/{relId} | 


## Documentation for Models

 - [DomainGraphClient.Configuration](docs/Configuration.md)
 - [DomainGraphClient.Graph](docs/Graph.md)
 - [DomainGraphClient.Node](docs/Node.md)
 - [DomainGraphClient.NodeTemplate](docs/NodeTemplate.md)
 - [DomainGraphClient.Property](docs/Property.md)
 - [DomainGraphClient.Relationship](docs/Relationship.md)
 - [DomainGraphClient.RelationshipTemplate](docs/RelationshipTemplate.md)
 - [DomainGraphClient.Relationships](docs/Relationships.md)
 - [DomainGraphClient.Relationships1](docs/Relationships1.md)
 - [DomainGraphClient.Relationships2](docs/Relationships2.md)


## Documentation for Authorization

 All endpoints do not require authorization.

