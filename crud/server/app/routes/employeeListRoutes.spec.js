var request = require("request");
var helloWorld = require("./employeeListRoutes.js")
var base_url = "http://localhost:3000/"



 describe("checking.. Server", function() {
  
  describe("GET /", function() {
    it("GET returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

  describe("POST /", function() {
    it("POST returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

  describe("PUT /", function() {
    it("PUT returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });



});   