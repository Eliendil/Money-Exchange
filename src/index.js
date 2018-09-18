module.exports = function makeExchange(currency) {
var result = {};
var coins = ["H", "Q", "D", "N", "P"];
var arr = [50, 25, 10, 5, 1];
    if (currency>=10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
        else if (currency<=0) {
            return {};
        }
        else {
            for (let i = 0; i < arr.length; i++){
                if (Math.floor(currency/arr[i]) > 0){
                    result[coins[i]] = Math.floor(currency/arr[i]);
                    currency -= arr[i] * Math.floor(currency/arr[i]);}
                    }
            }
            return result;
}