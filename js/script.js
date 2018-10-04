var islands = ["ElNido", "Boracay", "Bohol", "Cebu", "Batan"];
$(document).ready(function() {
  for(i=0;i<islands.length;i++) {
    $('#island-type').append('<option value="' + islands[i] + '">' + islands[i] + '</option>');
  }
  $('form').on('change', '#island-type',function(){
    var island = $('#island-type').val();
    if(city == 'ElNido') {
      $('body').attr('class','elnido');
    }
    else if (island == 'Boracay') {
      $('body').attr('class','boracay');
    }
    else if (island == 'Bohol') {
      $('body').attr('class','bohol');
    }
    else if (island == 'Cebu') {
      $('body').attr('class','cebu');
    }
    else if (island == 'Batan') {
      $('body').attr('class','batan');
    }
  });
});