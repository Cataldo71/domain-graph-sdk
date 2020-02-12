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

/**
 * The NodeTemplate model module.
 * @module model/NodeTemplate
 * @version 1.0.0
 */
export class NodeTemplate {
  /**
   * Constructs a new <code>NodeTemplate</code>.
   * @alias module:model/NodeTemplate
   * @class
   * @param label {String} 
   * @param text {String} 
   * @param color {String} 
   * @param shape {String} 
   */
  constructor(label, text, color, shape) {
    this.label = label;
    this.text = text;
    this.color = color;
    this.shape = shape;
  }

  /**
   * Constructs a <code>NodeTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeTemplate} obj Optional instance to populate.
   * @return {module:model/NodeTemplate} The populated <code>NodeTemplate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new NodeTemplate();
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
      if (data.hasOwnProperty('color'))
        obj.color = ApiClient.convertToType(data['color'], 'String');
      if (data.hasOwnProperty('shape'))
        obj.shape = ApiClient.convertToType(data['shape'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} label
 */
NodeTemplate.prototype.label = undefined;

/**
 * @member {String} text
 */
NodeTemplate.prototype.text = undefined;

/**
 * @member {String} color
 */
NodeTemplate.prototype.color = undefined;

/**
 * @member {String} shape
 */
NodeTemplate.prototype.shape = undefined;


