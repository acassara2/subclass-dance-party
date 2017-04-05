var makeCeleryMan = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left, timeBetweenSteps);
  this.addCelery();
  // this.newPosition();
  // this.animateSpan();
};

makeCeleryMan.prototype = Object.create(dancer.prototype);
makeCeleryMan.prototype.constructor = makeCeleryMan;

makeCeleryMan.prototype.addCelery = function() {
  this.$node.prepend('<img class=CeleryMan" id=CeleryMan" src="img/celerymanfast1.gif" />');
};

makeCeleryMan.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings)
};

// makeCeleryMan.prototype.newPosition = function() {
//  var height = $(window).height();
//  var width = $(window).width();

//  var newHeight = Math.floor(Math.random() * height);
//  var newWidth = Math.floor(Math.random() * width);

//  return [newHeight, newWidth];
// };

// makeCeleryMan.prototype.animateSpan = function() {
//  var newPosition = this.newPosition();
//  var context = this;
//  $('.runningDancer').animate({top: newPosition[0], left: newPosition[1]}, function() {
//    context.animateSpan.bind(context);
//  });
// };