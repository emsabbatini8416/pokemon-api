const supertest = require('supertest');
const app = require('../index');


describe('GET /api/pokemon', function () {
    it('respond with json containing a list of all pokemons', function (done) {
        supertest(app)
            .get('/api/pokemon')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});