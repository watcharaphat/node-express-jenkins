import chai from 'chai';
import request from 'supertest';
import app from '../src/server';

// eslint-disable-next-line
const expect = chai.expect;

describe('API Tests', () => {
  it('should return version number', (done) => {
    request(app)
      .get('/api')
      .end((err, res) => {
        // eslint-disable-next-line
        expect(res.body.version).to.be.ok;
        expect(res.statusCode).to.be.equal(200);
        done();
      });
  });
});

app.close();
