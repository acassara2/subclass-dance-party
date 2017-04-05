$(document).ready(function() {
  window.dancers = [];

  $('audio').prop("volume", 0.5);
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer.$node);
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
    var newHeight = $('body').height()/2 - 100;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].animate({top: newHeight}, "slow");
    }
  });

  $('.moveAround').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].trigger('.moveItems');
    }
  });

  $('.concert').on('click', function(event) {
    for (var i = 0; i < 75; i++) {
      var dancersArray = ['makeCeleryMan', 'makeTayne'];
      var randomPerson = Math.floor(Math.random() * dancersArray.length);
      var dancerMakerFunctionName = 'makeBlinkyDancer';

      // get the maker function for the kind of dancer we're supposed to make
      var dancerMakerFunction = window[dancerMakerFunctionName];

      // make a dancer with a random position

      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );
      window.dancers.push(dancer.$node);
      $('body').append(dancer.$node);
    }
    $('body').addClass('concert');
    $('audio').trigger('play');
  });

  $('body').on('mouseover', '.dancer', function(event){
    $('.dancer').mouseover(function() {
      var dWidth = $(document).width() - 100, // 100 = image width
        dHeight = $(document).height() - 100, // 100 = image height
        nextX = Math.floor(Math.random() * dWidth),
        nextY = Math.floor(Math.random() * dHeight);
      $(this).animate({ left: nextX + 'px', top: nextY + 'px' });
    });
  });

  $('.tendancers').on('click', function(event) {
    for (var i = 0; i < 10; i++) {
      var dancersArray = ['makeCeleryMan', 'makeTayne'];
      var randomPerson = Math.floor(Math.random() * dancersArray.length);
      var dancerMakerFunctionName = dancersArray[randomPerson];

      // get the maker function for the kind of dancer we're supposed to make
      var dancerMakerFunction = window[dancerMakerFunctionName];

      // make a dancer with a random position

      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );
      window.dancers.push(dancer.$node);
      $('body').append(dancer.$node);
    }
  });
});