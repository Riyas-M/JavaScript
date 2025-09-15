/* The includes() method, whether for arrays or strings, is a relatively modern addition to JavaScript. Older browsers might not recognize this method, leading to errors when your code attempts to use it. */

if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement, fromIndex) {
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);
    var len = O.length >>> 0;

    if (len === 0) {
      return false;
    }

    var n = fromIndex | 0;
    var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    while (k < len) {
      if (O[k] === searchElement) {
        return true;
      }
      k++;
    }
    return false;
  };
}

/* 
    This polyfill checks if Array.prototype.includes already exists. 
    If not, it defines the includes method on Array.prototype, making it available for all arrays in environments where it was previously missing. 
*/