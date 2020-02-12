# DomainGraphClient.ConfigurationApi

All URIs are relative to *https://virtserver.swaggerhub.com/Cataldo71/DomainGraphModel/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addConfiguration**](ConfigurationApi.md#addConfiguration) | **POST** /configuration | replaces the configuration with a new one
[**getConfiguration**](ConfigurationApi.md#getConfiguration) | **GET** /configuration | gets the full configuration
[**mergeConfiguration**](ConfigurationApi.md#mergeConfiguration) | **PUT** /configuration | updates the configuration with new data


<a name="addConfiguration"></a>
# **addConfiguration**
> addConfiguration(opts)

replaces the configuration with a new one

overwrites the existing configuration

### Example
```javascript
import {DomainGraphClient} from 'domainGraphClient';

let apiInstance = new DomainGraphClient.ConfigurationApi();

let opts = { 
  'configuration': new DomainGraphClient.Configuration() // Configuration | New Configuration for this service
};
apiInstance.addConfiguration(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configuration** | [**Configuration**](Configuration.md)| New Configuration for this service | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getConfiguration"></a>
# **getConfiguration**
> [Configuration] getConfiguration()

gets the full configuration

Returns the full configuration for the Domain Graph Visualizer Application 

### Example
```javascript
import {DomainGraphClient} from 'domainGraphClient';

let apiInstance = new DomainGraphClient.ConfigurationApi();
apiInstance.getConfiguration().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Configuration]**](Configuration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mergeConfiguration"></a>
# **mergeConfiguration**
> mergeConfiguration(opts)

updates the configuration with new data

merges new data into the existing configuration

### Example
```javascript
import {DomainGraphClient} from 'domainGraphClient';

let apiInstance = new DomainGraphClient.ConfigurationApi();

let opts = { 
  'configuration': new DomainGraphClient.Configuration() // Configuration | Update Configuration data
};
apiInstance.mergeConfiguration(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configuration** | [**Configuration**](Configuration.md)| Update Configuration data | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

