# DomainGraphClient.NodesApi

All URIs are relative to *https://virtserver.swaggerhub.com/Cataldo71/DomainGraphModel/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNode**](NodesApi.md#addNode) | **POST** /nodes | adds a new node to the graph
[**addRelationships**](NodesApi.md#addRelationships) | **PUT** /nodes/{nodeId}/relationships | adds a new node to the graph
[**deleteNodeById**](NodesApi.md#deleteNodeById) | **DELETE** /nodes/{nodeId} | 
[**deleteRelationships**](NodesApi.md#deleteRelationships) | **DELETE** /nodes/{nodeId}/relationships | adds a new node to the graph
[**getNodeById**](NodesApi.md#getNodeById) | **GET** /nodes/{nodeId} | 
[**getNodeRelationshipsById**](NodesApi.md#getNodeRelationshipsById) | **GET** /nodes/{nodeId}/relationships | 
[**replaceNodeRelationshipsById**](NodesApi.md#replaceNodeRelationshipsById) | **POST** /nodes/{nodeId}/relationships | adds a new node to the graph
[**updateNodeById**](NodesApi.md#updateNodeById) | **PUT** /nodes/{nodeId} | 


<a name="addNode"></a>
# **addNode**
> Node addNode(opts)

adds a new node to the graph

Creates a new node with relationships and adds it to the graph 

### Example
```javascript
import {DomainGraphClient} from 'domainGraphClient';

let apiInstance = new DomainGraphClient.NodesApi();

let opts = { 
  'node': new DomainGraphClient.Node() // Node | initial data for the node
};
apiInstance.addNode(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **node** | [**Node**](Node.md)| initial data for the node | [optional] 

### Return type

[**Node**](Node.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addRelationships"></a>
# **addRelationships**
> Node addRelationships(nodeId, opts)

adds a new node to the graph

adds new relationships to a node. The relationships in the body will be added if | they do not exist. Existing relationships will be ignored. 

### Example
```javascript
import {DomainGraphClient} from 'domainGraphClient';

let apiInstance = new DomainGraphClient.NodesApi();

let nodeId = 56; // Number | the id of the node

let opts = { 
  'relationships': new DomainGraphClient.Relationships() // Relationships | new relationships
};
apiInstance.addRelationships(nodeId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **Number**| the id of the node | 
 **relationships** | [**Relationships**](Relationships.md)| new relationships | [optional] 

### Return type

[**Node**](Node.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNodeById"></a>
# **deleteNodeById**
> deleteNodeById(nodeId)



delete a node with a given Id 

### Example
```javascript
import {DomainGraphClient} from 'domainGraphClient';

let apiInstance = new DomainGraphClient.NodesApi();

let nodeId = 56; // Number | id of the node

apiInstance.deleteNodeById(nodeId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **Number**| id of the node | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteRelationships"></a>
# **deleteRelationships**
> deleteRelationships(nodeId, opts)

adds a new node to the graph

delete set of relationships from a node. relationships that are not found on the | node will be ignored 

### Example
```javascript
import {DomainGraphClient} from 'domainGraphClient';

let apiInstance = new DomainGraphClient.NodesApi();

let nodeId = 56; // Number | the id of the node

let opts = { 
  'relationships': new DomainGraphClient.Relationships2() // Relationships2 | new relationships
};
apiInstance.deleteRelationships(nodeId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **Number**| the id of the node | 
 **relationships** | [**Relationships2**](Relationships2.md)| new relationships | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getNodeById"></a>
# **getNodeById**
> Node getNodeById(nodeId)



gets the metadata and properties of a node with the given Id 

### Example
```javascript
import {DomainGraphClient} from 'domainGraphClient';

let apiInstance = new DomainGraphClient.NodesApi();

let nodeId = 56; // Number | the id of the node

apiInstance.getNodeById(nodeId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **Number**| the id of the node | 

### Return type

[**Node**](Node.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNodeRelationshipsById"></a>
# **getNodeRelationshipsById**
> [Relationship] getNodeRelationshipsById(nodeId)



get the list of relationships for a given node. 

### Example
```javascript
import {DomainGraphClient} from 'domainGraphClient';

let apiInstance = new DomainGraphClient.NodesApi();

let nodeId = 56; // Number | the id of the node

apiInstance.getNodeRelationshipsById(nodeId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **Number**| the id of the node | 

### Return type

[**[Relationship]**](Relationship.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="replaceNodeRelationshipsById"></a>
# **replaceNodeRelationshipsById**
> Node replaceNodeRelationshipsById(nodeId, opts)

adds a new node to the graph

replaces the relationships on a node with a new set. All existing relationships | will be deleted and the set of relationships in the body will become the new set. | If there are no relationships, the node will be orphaned. 

### Example
```javascript
import {DomainGraphClient} from 'domainGraphClient';

let apiInstance = new DomainGraphClient.NodesApi();

let nodeId = 56; // Number | the id of the node

let opts = { 
  'relationships': new DomainGraphClient.Relationships1() // Relationships1 | new relationships
};
apiInstance.replaceNodeRelationshipsById(nodeId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **Number**| the id of the node | 
 **relationships** | [**Relationships1**](Relationships1.md)| new relationships | [optional] 

### Return type

[**Node**](Node.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNodeById"></a>
# **updateNodeById**
> Node updateNodeById(nodeId, opts)



updates the node metadata for the node with the given Id 

### Example
```javascript
import {DomainGraphClient} from 'domainGraphClient';

let apiInstance = new DomainGraphClient.NodesApi();

let nodeId = 56; // Number | the id of the node

let opts = { 
  'node': new DomainGraphClient.Node() // Node | updated node data
};
apiInstance.updateNodeById(nodeId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **Number**| the id of the node | 
 **node** | [**Node**](Node.md)| updated node data | [optional] 

### Return type

[**Node**](Node.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

