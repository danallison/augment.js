if (!Array.prototype.clone) {
  Array.prototype.clone = function () {
    var i = 0,
        len = this.length,
        clone = [];
    for (i; i < len; i++) {
      clone.push(this[i]);
    }
    return clone;
  };
}