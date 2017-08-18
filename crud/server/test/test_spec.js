var request = require("request");
var helloWorld = require("./app.js")
var base_url = "http://localhost:3000/"

describe("checking Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns Tesing with jasmine!", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toBe("Tesing with jasmine!");
        helloWorld.closeServer();
        done();
      });
    });
  });
});