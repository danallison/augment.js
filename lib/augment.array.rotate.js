if (!Array.prototype.rotate) {
  Array.prototype.rotate = function (n) {
    var t = this, len = t.length, i;
    n = n || 1;
    n = ((n % len) + len) % len;
    for (i = 0; i < n; i++) {
      t.push(t.shift());
    }
  };
}