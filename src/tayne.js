var makeTayne = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left, timeBetweenSteps);
  this.tayne();
};

makeTayne.prototype = Object.create(dancer.prototype);
makeTayne.prototype.constructor = makeTayne;

makeTayne.prototype.tayne = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  console.log('hey from tayne');
  // this.$node.addClass('tayne');
  this.$node.prepend('<img id="tayne" src="tayne.gif" />');
};