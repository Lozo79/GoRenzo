// $.ready() to delay code execution until all the DOM data have been loaded
$().ready(function() {
    // Click "read more" and it shows more text
    $('.readmore').click(function(){
    $('#show-this-on-click').slideDown();
    // Click it again and it hides the text
    $('.readless').show();
    $('.readmore').hide();
      
    event.preventDefault();

    });
    // Reverse the function above so that the text is hidden
    $('.readless').click(function(){
    $('#show-this-on-click').slideUp();
    $('.readmore').show();
    $('.readless').hide();
    
    event.preventDefault();

    });
    
    // On the right panel click "learn More" to show more text
    $('.learnmore').click(function(){
    $('#learnmoretext').slideDown();
    $('.learnmore').hide();
    //   Prevent from submitting form
    
    event.preventDefault();

    });


  });
  