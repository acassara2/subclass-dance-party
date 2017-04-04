var makeCeleryMan = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left, timeBetweenSteps);
  this.addCelery();
  // this.animate();
};

makeCeleryMan.prototype = Object.create(dancer.prototype);
makeCeleryMan.prototype.constructor = makeCeleryMan;

makeCeleryMan.prototype.addCelery = function() {
  this.$node.prepend('<img class=CeleryMan" id=CeleryMan" src="img/celerymanfast.gif" />');
};

makeCeleryMan.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings)
};