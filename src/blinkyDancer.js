var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left, timeBetweenSteps);
  this.setColorAndWidth();
};

makeBlinkyDancer.prototype = Object.create(dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  dancer.prototype.step.call(this);
  this.$node.toggle();
  this.$node.hide(1000);
};

makeBlinkyDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeBlinkyDancer.prototype.setColorAndWidth = function() {
  var randomWidth = Math.random() * 140;
  var randomHeight = Math.random() * 140;
  // var randomColor = '#' + ((1<<9)*Math.random()|0).toString(16);
  	this.$node.css('width', randomWidth);
  	this.$node.css('height', randomHeight);
  	this.$node.css('background-color', this.getRandomColor());
};

makeBlinkyDancer.prototype.getRandomColor = function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}