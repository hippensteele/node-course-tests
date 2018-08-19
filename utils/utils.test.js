const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
        });

        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBeA('number').toBe(7);
                done();
            });
        });
    });

    describe('#square', () => {
        
        it('should async square a number', (done) => {
            utils.asyncSquare(5, (sqr) => {
                expect(sqr).toBeA('number').toBe(25);
                done();
            });
        });

        it('should square a number', () => {
            var res = utils.square(2);
            expect(res).toBe(4).toBeA('number');
        });
        
    });

    describe('#setName', () => {
        
        it('should verify first and last names are set', () => {
            var user = utils.setName({}, 'Tom Hippensteele');
            expect(user).toBeA('object').toInclude({
                firstName: 'Tom',
                lastName: 'Hippensteele'
            });
        });

    });
    
});

describe('Playground', () => {

    it('should work', () => {
        // expect({name: 'Tom'}).toEqual({name: 'Tom'});
        // expect([2,3,4]).toInclude(3);
        // expect([2,3,4]).toExclude(5);
        expect({
            name: 'Tom',
            age: 53,
            location: 'Honolulu'
        }).toInclude({
            age: 53
        }).toExclude({
            location: 'Chicago'
        });
    });

});