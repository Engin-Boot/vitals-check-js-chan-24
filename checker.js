const expect = require('chai').expect;
var checkBpm = require('./checkBpm.js');
var checkSpo2 = require('./checkSpo2.js');
var checkRespRate = require('./checkrespRate.js');

function vitalsAreOk(bpm, spo2, respRate) {
    var BPM = checkBpm.checkBpm(bpm);
    var Spo2 = checkSpo2.checkSpo2(spo2);
    var RespRate = checkRespRate.checkRespRate(respRate);
    if(BPM[0]==false || Spo2[0]==false || RespRate[0]==false )
        return false
    return true
}
function getReport(bpm, spo2, respRate)
{
    if(vitalsAreOk(bpm, spo2, respRate))
        console.log("Vitals Status : All Vitals are Normal ");
    else
        console.log("Vitals Status : Vitals not looking good ");
    console.log("BPM: "+checkBpm.checkBpm(bpm)[1]);
    console.log("SPO2: "+checkSpo2.checkSpo2(spo2)[1]);
    console.log("Respiratory rate: "+checkRespRate.checkRespRate(respRate)[1]);
    
}

expect(vitalsAreOk(100, 100, 70)).to.be.true; // Normal
expect(vitalsAreOk(60, 100, 70)).to.be.false; // Low BPM
expect(vitalsAreOk(100, 80, 70)).to.be.false; // Low SPO2
expect(vitalsAreOk(100, 100, 20)).to.be.false; // Low RespiratoryRate
expect(vitalsAreOk(160, 100, 70)).to.be.false; // High BPM
expect(vitalsAreOk(100, 95, 100)).to.be.false; // High RespiratoryRate
expect(vitalsAreOk(160, 95, 100)).to.be.false; // High BPM and RespiratoryRate
expect(vitalsAreOk(60, 80, 20)).to.be.false; // Low BPM, SPO2 and RespiratoryRate
getReport(100, 95, 70);
console.log('checker is done');

