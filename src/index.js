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

import {ApiClient} from './ApiClient';
import {Configuration} from './model/Configuration';
import {Graph} from './model/Graph';
import {Node} from './model/Node';
import {NodeTemplate} from './model/NodeTemplate';
import {Property} from './model/Property';
import {Relationship} from './model/Relationship';
import {RelationshipTemplate} from './model/RelationshipTemplate';
import {ConfigurationApi} from './api/ConfigurationApi';
import {GraphApi} from './api/GraphApi';
import {NodesApi} from './api/NodesApi';
import {RelationshipsApi} from './api/RelationshipsApi';


/**
* DomainGraph SDK.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var DomainGraphClient = require('index'); // See note below*.
* var xxxSvc = new DomainGraphClient.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new DomainGraphClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new DomainGraphClient.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new DomainGraphClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Configuration model constructor.
     * @property {module:model/Configuration}
     */
    Configuration,

    /**
     * The Graph model constructor.
     * @property {module:model/Graph}
     */
    Graph,

    /**
     * The Node model constructor.
     * @property {module:model/Node}
     */
    Node,

    /**
     * The NodeTemplate model constructor.
     * @property {module:model/NodeTemplate}
     */
    NodeTemplate,

    /**
     * The Property model constructor.
     * @property {module:model/Property}
     */
    Property,

    /**
     * The Relationship model constructor.
     * @property {module:model/Relationship}
     */
    Relationship,

    /**
     * The RelationshipTemplate model constructor.
     * @property {module:model/RelationshipTemplate}
     */
    RelationshipTemplate,

    /**
    * The ConfigurationApi service constructor.
    * @property {module:api/ConfigurationApi}
    */
    ConfigurationApi,

    /**
    * The GraphApi service constructor.
    * @property {module:api/GraphApi}
    */
    GraphApi,

    /**
    * The NodesApi service constructor.
    * @property {module:api/NodesApi}
    */
    NodesApi,

    /**
    * The RelationshipsApi service constructor.
    * @property {module:api/RelationshipsApi}
    */
    RelationshipsApi
};
