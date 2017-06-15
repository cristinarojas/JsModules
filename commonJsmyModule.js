// Module declare
function myModule() {
	this.hello = function() {
		return 'Hello!';
	}

	this.goodbye = function() {
		return 'Goodbye!'
	}
}

// Export the myModule.
module.exports = myModule;

