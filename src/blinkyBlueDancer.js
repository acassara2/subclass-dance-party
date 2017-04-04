var makeBlinkyBlueDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.blueify();
};

makeBlinkyBlueDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeBlinkyBlueDancer.prototype.constructor = makeBlinkyBlueDancer;

makeBlinkyBlueDancer.prototype.blueify = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.addClass('blueify');
  
};