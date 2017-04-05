var makeTayne = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left, timeBetweenSteps);
  this.tayne();
  // this.animate();
};

makeTayne.prototype = Object.create(dancer.prototype);
makeTayne.prototype.constructor = makeTayne;

makeTayne.prototype.tayne = function() {
  this.$node.prepend('<img class="tayne" id="tayne" src="img/taynecopysmall.gif" />');
  this.$node.addClass('.tayne');
};

makeTayne.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings)
};