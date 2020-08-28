function checkBpm(bpm)
{
    if(bpm<70)
        return [false, "Low BPM"]
    else if (bpm > 150) {
        return [false, "High BPM"]
    } 
    else {
        return [true, "Normal"]
    }
}
module.exports = {
    checkBpm : checkBpm
};