var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var item = ["kabab", "tomato", "cheese"];
//1 way
function getSummary() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("Sandwich: " + item.join(","));
}
getSummary.apply(void 0, __spreadArray(__spreadArray([], item, false), ["sauce"], false));
getSummary.apply(void 0, __spreadArray(__spreadArray([], item, false), ["sauce", "chilli"], false));
getSummary.apply(void 0, __spreadArray(__spreadArray([], item, false), ["sauce", "lettuse"], false));
//2nd Way
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    if (items.length === 0) {
        console.log("You order an empty sandwich. Please add some items for sanswich");
    }
    else {
        items.forEach(function (item, i) { return [
            console.log("".concat(i + 1, ". ").concat(item))
        ]; });
    }
}
makeSandwich();
makeSandwich("chilli", "sauce", "cheese", "kabab");
makeSandwich("Tomato", "lettuse", "kabab");
makeSandwich("butter", "jelly", "cheese");
