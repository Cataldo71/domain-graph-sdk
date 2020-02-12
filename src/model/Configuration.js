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

import {ApiClient} from '../ApiClient';
import {NodeTemplate} from './NodeTemplate';
import {RelationshipTemplate} from './RelationshipTemplate';

/**
 * The Configuration model module.
 * @module model/Configuration
 * @version 1.0.0
 */
export class Configuration {
  /**
   * Constructs a new <code>Configuration</code>.
   * @alias module:model/Configuration
   * @class
   * @param nodeLabels {Array.<module:model/NodeTemplate>} 
   * @param relationshipLabels {Array.<module:model/RelationshipTemplate>} 
   */
  constructor(nodeLabels, relationshipLabels) {
    this.nodeLabels = nodeLabels;
    this.relationshipLabels = relationshipLabels;
  }

  /**
   * Constructs a <code>Configuration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Configuration} obj Optional instance to populate.
   * @return {module:model/Configuration} The populated <code>Configuration</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Configuration();
      if (data.hasOwnProperty('nodeLabels'))
        obj.nodeLabels = ApiClient.convertToType(data['nodeLabels'], [NodeTemplate]);
      if (data.hasOwnProperty('relationshipLabels'))
        obj.relationshipLabels = ApiClient.convertToType(data['relationshipLabels'], [RelationshipTemplate]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/NodeTemplate>} nodeLabels
 */
Configuration.prototype.nodeLabels = undefined;

/**
 * @member {Array.<module:model/RelationshipTemplate>} relationshipLabels
 */
Configuration.prototype.relationshipLabels = undefined;

