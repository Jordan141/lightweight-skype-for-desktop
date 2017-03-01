var assert = require('assert');
let thisIsATest = require('../main.js').thisIsATest;
describe('Array', function() {
	describe('#indexOf()', function() {
		it('should return -1 when the value is not present', function() {
			assert.equal(-1, [1,2,3].indexOf(4));
		});
	});
});
describe('thisIsATest', () => {
	it('is an object', () => {
		if (typeof thisIsATest !== 'object'){
			console.log('thisIsATest', thisIsATest)
			throw Error('thisIsATest is not an object')
		}
	})
})
