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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DomainGraphClient);
  }
}(this, function(expect, DomainGraphClient) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Graph', function() {
      beforeEach(function() {
        instance = new DomainGraphClient.Graph();
      });

      it('should create an instance of Graph', function() {
        // TODO: update the code to test Graph
        expect(instance).to.be.a(DomainGraphClient.Graph);
      });

      it('should have the property nodes (base name: "nodes")', function() {
        // TODO: update the code to test the property nodes
        expect(instance).to.have.property('nodes');
        // expect(instance.nodes).to.be(expectedValueLiteral);
      });

      it('should have the property relationships (base name: "relationships")', function() {
        // TODO: update the code to test the property relationships
        expect(instance).to.have.property('relationships');
        // expect(instance.relationships).to.be(expectedValueLiteral);
      });

    });
  });

}));