if (!Array.prototype.rotate) {
  Array.prototype.rotate = function (n) {
    var i = 0;
    n = n || 1;
    for (i; i < n; i++) {
      this.push(this.shift());
    }
  };
}