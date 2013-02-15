if (!Array.prototype.shuffle) {
  Array.prototype.shuffle = function () {
    var i = 0,
        len = this.length,
        shuffledArr = [];
    for (i; i < len; i++) {
      shuffledArr.push(this.splice(Math.floor(Math.random() * this.length), 1)[0]);
    }
    for (i = 0; i < len; i++) {
      this.push(shuffledArr[i]);
    }
  };
}