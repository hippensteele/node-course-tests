const request = require('supertest');
const expect = require('expect');

describe('Server', () => {

    var app = require('./server').app;

    describe('get /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect('Hello World!')
                .end(done);
        });
    });

    describe('get /nopage', () => {
        it('should return page not found response', (done) => {
            request(app)
                .get('/nopage')
                .expect(404)
                .expect({ error: 'Page not found.' })
                .end(done);
        });
    });

    describe('get /stillnopage', () => {
        it('should return page not found response', (done) => {
            request(app)
                .get('/stillnopage')
                .expect((res) => {
                    expect(res.body)
                        .toInclude({
                            error: 'Page not found.'
                        });
                    expect(res.status)
                        .toBeA('number')
                        .toBe(404);
                })
                .end(done);
        });
    });

    describe('get /users', () => {
        it('should return an array of users that includes "Tom"', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body)
                        .toInclude({ name: 'Tom' }, (a, b) => {
                            return a.name === b.name;
                        });
                })
                .end(done);
        });
    });

});