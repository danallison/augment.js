if (!Number.prototype.withinRange) {
  Number.prototype.withinRange = function (n1, n2) {
    var min = Math.min(n1, n2),
        max = Math.max(n1, n2);
    return Math.min(max, Math.max(min, this));
  };
}