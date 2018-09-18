module.exports = function makeExchange(currency) {
    if (currancy > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    var currancies = {"H":1,"Q":1,"D":1,"N":1,"P":1};
    var currentCurrency = currency;
    var result = {};

    for (var key in currencies) {
        if (currentCurrency >= currancies[key]) {
            var value = Math.floor(currentCurrency / currancies[key]);
            result[key] = value;
            currentCurrency -= value * currancies[key];
        }
    }
    return result;
}
