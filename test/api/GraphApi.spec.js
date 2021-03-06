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

  beforeEach(function() {
    instance = new DomainGraphClient.GraphApi();
  });

  describe('(package)', function() {
    describe('GraphApi', function() {
      describe('getGraph', function() {
        it('should call getGraph successfully', function(done) {
          // TODO: uncomment getGraph call and complete the assertions
          /*

          instance.getGraph().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(DomainGraphClient.Graph);
            {
              let dataCtr = data.nodes;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(DomainGraphClient.Node);
                expect(data.type).to.be.a('string');
                // expect(data.type).to.be("Geometry");
                {
                  let dataCtr = data.properties;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(DomainGraphClient.Property);
                    expect(data.name).to.be.a('string');
                    // expect(data.name).to.be("PropertyName");
                    expect(data.value).to.be.a('string');
                    // expect(data.value).to.be("PropertyValue");
                  }
                }
                {
                  let dataCtr = data.relationships;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(DomainGraphClient.Relationship);
                    expect(data.id).to.be.a('string');
                    // expect(data.id).to.be("123");
                    expect(data.type).to.be.a('string');
                    // expect(data.type).to.be("HASA");
                    {
                      let dataCtr = data.properties;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(DomainGraphClient.Property);
                        expect(data.name).to.be.a('string');
                        // expect(data.name).to.be("PropertyName");
                        expect(data.value).to.be.a('string');
                        // expect(data.value).to.be("PropertyValue");
                      }
                    }
                    expect(data.node1).to.be.a('string');
                    // expect(data.node1).to.be("123");
                    expect(data.node2).to.be.a('string');
                    // expect(data.node2).to.be("123");
                  }
                }
              }
            }
            {
              let dataCtr = data.relationships;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(DomainGraphClient.Relationship);
                expect(data.id).to.be.a('string');
                // expect(data.id).to.be("123");
                expect(data.type).to.be.a('string');
                // expect(data.type).to.be("HASA");
                {
                  let dataCtr = data.properties;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(DomainGraphClient.Property);
                    expect(data.name).to.be.a('string');
                    // expect(data.name).to.be("PropertyName");
                    expect(data.value).to.be.a('string');
                    // expect(data.value).to.be("PropertyValue");
                  }
                }
                expect(data.node1).to.be.a('string');
                // expect(data.node1).to.be("123");
                expect(data.node2).to.be.a('string');
                // expect(data.node2).to.be("123");
              }
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
