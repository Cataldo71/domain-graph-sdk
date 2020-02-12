/*
 * Domain Graph API
 * This is a simple API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: pat.cataldo@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from "../ApiClient";
import {Node} from '../model/Node';
import {Relationship} from '../model/Relationship';

/**
* Nodes service.
* @module api/NodesApi
* @version 1.0.0
*/
export class NodesApi {

    /**
    * Constructs a new NodesApi.
    * @alias module:api/NodesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * adds a new node to the graph
     * Creates a new node with relationships and adds it to the graph
     * @param {Object} opts Optional parameters
     * @param {module:model/Node} opts.node initial data for the node
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Node} and HTTP response
     */
    addNodeWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['node'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Node;

      return this.apiClient.callApi(
        '/nodes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * adds a new node to the graph
     * Creates a new node with relationships and adds it to the graph
     * @param {Object} opts Optional parameters
     * @param {module:model/Node} opts.node initial data for the node
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Node}
     */
    addNode(opts) {
      return this.addNodeWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * adds a new node to the graph
     * adds new relationships to a node. The relationships in the body will be added if | they do not exist. Existing relationships will be ignored.
     * @param {Number} nodeId the id of the node
     * @param {Object} opts Optional parameters
     * @param {module:model/Relationships} opts.relationships new relationships
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Node} and HTTP response
     */
    addRelationshipsWithHttpInfo(nodeId, opts) {
      opts = opts || {};
      let postBody = opts['relationships'];

      // verify the required parameter 'nodeId' is set
      if (nodeId === undefined || nodeId === null) {
        throw new Error("Missing the required parameter 'nodeId' when calling addRelationships");
      }


      let pathParams = {
        'nodeId': nodeId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Node;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/relationships', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * adds a new node to the graph
     * adds new relationships to a node. The relationships in the body will be added if | they do not exist. Existing relationships will be ignored.
     * @param {Number} nodeId the id of the node
     * @param {Object} opts Optional parameters
     * @param {module:model/Relationships} opts.relationships new relationships
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Node}
     */
    addRelationships(nodeId, opts) {
      return this.addRelationshipsWithHttpInfo(nodeId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * delete a node with a given Id
     * @param {Number} nodeId id of the node
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteNodeByIdWithHttpInfo(nodeId) {
      let postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId === undefined || nodeId === null) {
        throw new Error("Missing the required parameter 'nodeId' when calling deleteNodeById");
      }


      let pathParams = {
        'nodeId': nodeId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/nodes/{nodeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * delete a node with a given Id
     * @param {Number} nodeId id of the node
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteNodeById(nodeId) {
      return this.deleteNodeByIdWithHttpInfo(nodeId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * adds a new node to the graph
     * delete set of relationships from a node. relationships that are not found on the | node will be ignored
     * @param {Number} nodeId the id of the node
     * @param {Object} opts Optional parameters
     * @param {module:model/Relationships2} opts.relationships new relationships
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteRelationshipsWithHttpInfo(nodeId, opts) {
      opts = opts || {};
      let postBody = opts['relationships'];

      // verify the required parameter 'nodeId' is set
      if (nodeId === undefined || nodeId === null) {
        throw new Error("Missing the required parameter 'nodeId' when calling deleteRelationships");
      }


      let pathParams = {
        'nodeId': nodeId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/relationships', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * adds a new node to the graph
     * delete set of relationships from a node. relationships that are not found on the | node will be ignored
     * @param {Number} nodeId the id of the node
     * @param {Object} opts Optional parameters
     * @param {module:model/Relationships2} opts.relationships new relationships
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteRelationships(nodeId, opts) {
      return this.deleteRelationshipsWithHttpInfo(nodeId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * gets the metadata and properties of a node with the given Id
     * @param {Number} nodeId the id of the node
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Node} and HTTP response
     */
    getNodeByIdWithHttpInfo(nodeId) {
      let postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId === undefined || nodeId === null) {
        throw new Error("Missing the required parameter 'nodeId' when calling getNodeById");
      }


      let pathParams = {
        'nodeId': nodeId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Node;

      return this.apiClient.callApi(
        '/nodes/{nodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * gets the metadata and properties of a node with the given Id
     * @param {Number} nodeId the id of the node
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Node}
     */
    getNodeById(nodeId) {
      return this.getNodeByIdWithHttpInfo(nodeId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get the list of relationships for a given node.
     * @param {Number} nodeId the id of the node
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Relationship>} and HTTP response
     */
    getNodeRelationshipsByIdWithHttpInfo(nodeId) {
      let postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId === undefined || nodeId === null) {
        throw new Error("Missing the required parameter 'nodeId' when calling getNodeRelationshipsById");
      }


      let pathParams = {
        'nodeId': nodeId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = [Relationship];

      return this.apiClient.callApi(
        '/nodes/{nodeId}/relationships', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * get the list of relationships for a given node.
     * @param {Number} nodeId the id of the node
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Relationship>}
     */
    getNodeRelationshipsById(nodeId) {
      return this.getNodeRelationshipsByIdWithHttpInfo(nodeId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * adds a new node to the graph
     * replaces the relationships on a node with a new set. All existing relationships | will be deleted and the set of relationships in the body will become the new set. | If there are no relationships, the node will be orphaned.
     * @param {Number} nodeId the id of the node
     * @param {Object} opts Optional parameters
     * @param {module:model/Relationships1} opts.relationships new relationships
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Node} and HTTP response
     */
    replaceNodeRelationshipsByIdWithHttpInfo(nodeId, opts) {
      opts = opts || {};
      let postBody = opts['relationships'];

      // verify the required parameter 'nodeId' is set
      if (nodeId === undefined || nodeId === null) {
        throw new Error("Missing the required parameter 'nodeId' when calling replaceNodeRelationshipsById");
      }


      let pathParams = {
        'nodeId': nodeId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Node;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/relationships', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * adds a new node to the graph
     * replaces the relationships on a node with a new set. All existing relationships | will be deleted and the set of relationships in the body will become the new set. | If there are no relationships, the node will be orphaned.
     * @param {Number} nodeId the id of the node
     * @param {Object} opts Optional parameters
     * @param {module:model/Relationships1} opts.relationships new relationships
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Node}
     */
    replaceNodeRelationshipsById(nodeId, opts) {
      return this.replaceNodeRelationshipsByIdWithHttpInfo(nodeId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * updates the node metadata for the node with the given Id
     * @param {Number} nodeId the id of the node
     * @param {Object} opts Optional parameters
     * @param {module:model/Node} opts.node updated node data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Node} and HTTP response
     */
    updateNodeByIdWithHttpInfo(nodeId, opts) {
      opts = opts || {};
      let postBody = opts['node'];

      // verify the required parameter 'nodeId' is set
      if (nodeId === undefined || nodeId === null) {
        throw new Error("Missing the required parameter 'nodeId' when calling updateNodeById");
      }


      let pathParams = {
        'nodeId': nodeId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Node;

      return this.apiClient.callApi(
        '/nodes/{nodeId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * updates the node metadata for the node with the given Id
     * @param {Number} nodeId the id of the node
     * @param {Object} opts Optional parameters
     * @param {module:model/Node} opts.node updated node data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Node}
     */
    updateNodeById(nodeId, opts) {
      return this.updateNodeByIdWithHttpInfo(nodeId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}