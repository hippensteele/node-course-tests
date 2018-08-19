const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);
    
    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Tom', 53);
        expect(spy).toHaveBeenCalledWith('Tom', 53);
    });
    
    it('should call saveUser with user object', () => {
        var email = 'test@test.com';
        var password = 'abc123';
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
    
});