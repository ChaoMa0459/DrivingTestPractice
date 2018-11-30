// const mocha = require('mocha');
const assert = require('assert');
var MarioChar = require('../api/questions');


// describe tests
describe('Saving records', function() {

    // Create tests
    it('Save a record to the database', function(done) {
        
        var char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(function() {
            assert(char.isNew === false); // saved to database
            done();
        });

    });

    // next test after done()

});

