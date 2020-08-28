function checkRespRate(respRate)
{
    if(respRate < 30)
        return [false, "Low RespRate"]
    else if (respRate > 95) {
        return [false, "High RespRate"]
    } 
    else {
        return [true, "Normal"]
    }
}
module.exports = {
    checkRespRate : checkRespRate
};