const app = require("../app");
const request = require("supertest");

test("Get Movies status_text From Get All Movies", (done) => {
  request(app)
    .get("/api/v1/movies")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.status_text).toBe("OK");
      done();
    })
    .catch(done);
});

test("Count Get Movies Data Must Be Equals 1", (done) => {
  request(app)
    .get("/api/v1/movies")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.payloads.length).toBe(1);
      done();
    })
    .catch(done);
});

test("Count Get Detail Movie Data Must Be Less Than 2", (done) => {
  request(app)
    .get("/api/v1/movies/1")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.payloads.length).toBeLessThan(2);
      done();
    })
    .catch(done);
});
