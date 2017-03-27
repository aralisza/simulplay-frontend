const fs = require('fs');
const config = require('src/config/config.js');

describe('config.js', function() {
    let configFile;

    beforeEach(function() {
        configFile = JSON.parse(fs.readFileSync('config.json'));
    });

    it('should be able to get the port number', function() {
        expect(config.network.port).toBe(configFile.network.port);
    });
});
