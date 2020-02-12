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
    describe('Relationship', function() {
      beforeEach(function() {
        instance = new DomainGraphClient.Relationship();
      });

      it('should create an instance of Relationship', function() {
        // TODO: update the code to test Relationship
        expect(instance).to.be.a(DomainGraphClient.Relationship);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property properties (base name: "properties")', function() {
        // TODO: update the code to test the property properties
        expect(instance).to.have.property('properties');
        // expect(instance.properties).to.be(expectedValueLiteral);
      });

      it('should have the property node1 (base name: "node1")', function() {
        // TODO: update the code to test the property node1
        expect(instance).to.have.property('node1');
        // expect(instance.node1).to.be(expectedValueLiteral);
      });

      it('should have the property node2 (base name: "node2")', function() {
        // TODO: update the code to test the property node2
        expect(instance).to.have.property('node2');
        // expect(instance.node2).to.be(expectedValueLiteral);
      });

    });
  });

}));
