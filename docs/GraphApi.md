# DomainGraphClient.GraphApi

All URIs are relative to *https://virtserver.swaggerhub.com/Cataldo71/DomainGraphModel/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGraph**](GraphApi.md#getGraph) | **GET** /graph | gets the full graph


<a name="getGraph"></a>
# **getGraph**
> Graph getGraph()

gets the full graph

Returns the full graph for the Domain Graph Visualizer Application 

### Example
```javascript
import {DomainGraphClient} from 'domainGraphClient';

let apiInstance = new DomainGraphClient.GraphApi();
apiInstance.getGraph().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Graph**](Graph.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

