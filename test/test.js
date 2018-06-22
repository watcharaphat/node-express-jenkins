const supertest = require('supertest');
// eslint-disable-next-line
const should = require('should');

const server = supertest.agent('http://localhost:3000');

describe('SAMPLE unit test', () => {
  // #1
  it('should return homepage', (done) => {
    server
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
});
