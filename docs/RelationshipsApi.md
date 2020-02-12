# DomainGraphClient.RelationshipsApi

All URIs are relative to *https://virtserver.swaggerhub.com/Cataldo71/DomainGraphModel/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteRelationshipById**](RelationshipsApi.md#deleteRelationshipById) | **DELETE** /relationships/{relId} | 
[**getRelationshipById**](RelationshipsApi.md#getRelationshipById) | **GET** /relationships/{relId} | 


<a name="deleteRelationshipById"></a>
# **deleteRelationshipById**
> deleteRelationshipById(relId)



### Example
```javascript
import {DomainGraphClient} from 'domainGraphClient';

let apiInstance = new DomainGraphClient.RelationshipsApi();

let relId = 56; // Number | the id of the relationship

apiInstance.deleteRelationshipById(relId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relId** | **Number**| the id of the relationship | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getRelationshipById"></a>
# **getRelationshipById**
> Relationship getRelationshipById(relId)



### Example
```javascript
import {DomainGraphClient} from 'domainGraphClient';

let apiInstance = new DomainGraphClient.RelationshipsApi();

let relId = 56; // Number | the id of the relationship

apiInstance.getRelationshipById(relId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relId** | **Number**| the id of the relationship | 

### Return type

[**Relationship**](Relationship.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

