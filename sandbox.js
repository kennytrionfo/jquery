$(document).ready(function() {
  // everyting in this block runs when the document is ready
  console.log('document now ready');
  var sandbox = $('#sandbox');
  console.log(sandbox.text());
  sandbox.css({
    'color': '#ff0000',
    'border': '3px solid #ff0000',
    'padding': '10px',
    'background-color': '#ffeeee'
  });
  window.setTimeout(function() {
    console.log('timeout fired');
    sandbox.text('Zomg!');
    var bigText = $('<h1></h1>');
    bigText.text('BOOM!');
    sandbox.append(bigText);
    sandbox.animate({
      'width': '50%'
    }, 1500);
  }, 2500);

  var light = $('<div></div>');
  light.css({
    'width': '40px',
    'height': '40px',
    'padding': '10px',
    'border-radius': '50%',
    'background-color': 'green',
    'text-align': 'left'
  });

  sandbox.after(light);
  light.data('switch', 'on');

  light.click(function() {
    var switchState = $(this).data('switch');
    if(switchState == 'on') {
      $(this).data('switch', 'off');
      $(this).css({
      'background-color': 'red',
      'float': 'right'
    });
    } else {
      $(this).data('switch', 'on');
      $(this).css({
      'background-color': 'red',
      'float': 'left'
    });
  }
});

  $(':text').blur(function() {
    sandbox.text($(this).val());
  });

  $(':text').focus(function() {
    $(this).val('');
  });

  $('#linkarea a').click(function(event) {
    //event.preventDefault();
    console.log($(this).attr('href'));
    return false;
  });

  //bind a click to all a.switch that curretnly exist in the DOM.
  // $('a.switch').click(function() {
  //   light.click();
  //   return false;
  // });
  //bind a click to all a.switch even future ones appended to DOM.

  $(document).on('click', 'a.switch', function(){
    light.click();
    return false;
  });

  var newSwitch = $('<a href="#" class="switch">Switch</a>');
  sandbox.after(newSwitch);

  $('select#langs').change(function(){
    sandbox.text($(this).val());
  });


});
