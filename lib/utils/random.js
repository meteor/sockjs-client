'use strict';

// This string has length 32, a power of 2, so the modulus doesn't introduce a
// bias.
module.exports = {
  string: function(length) {
    var s = "";
    while (s.length < length) {
      s += Math.random().toString(36).slice(2);
    }
    return s.slice(0, length);
  }

, number: function(max) {
    return Math.floor(Math.random() * max);
  }

, numberString: function(max) {
    var t = ('' + (max - 1)).length;
    var p = new Array(t + 1).join('0');
    return (p + this.number(max)).slice(-t);
  }
};
