function checkSpo2(spo2)
{
    if(spo2<90)
        return [false, "Low Spo2"]
    else {
        return [true, "Normal"]
    }
}
module.exports = {
    checkSpo2 : checkSpo2
};