const expect = require('chai').expect;
const qalyOutcome = require('../src/qalyoutcome')
const testConfig = require('resources/testService/config.json')
const patients = require('resources/patients')

describe('qalyOutcome', () => {
        it('should return a value for aaa qaly gain', () => {
            let output = qalyOutcome("testService", testConfig, patients.male30Zero );
            expect(output).to.be.equal(1)
    })
})


