
var request = require("request");
var helloWorld = require("./employeeListController.js")
var base_url = "http://localhost:3000/"

describe("checking Server", function() {
  describe("GET /", function() {

    it("It returns GET Data!", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toBe(employee);
        done();
      });
    });
  });
describe("POST /", function() {

    it("It returns POST Data!", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toBe(employee);
        done();
      });
    });
  });

});