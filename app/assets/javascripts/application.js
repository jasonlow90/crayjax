// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
// require turbolinks
//= require_tree .
//= require materialize-sprockets
$(document).ready(function(){
  $('.modal-trigger').leanModal();

  $('.modal-content form').on('submit', function(e){
    e.preventDefault(); // To stop the submit button from working in ruby/rails
    var data = $(this).serialize();
    $.post('/todos', data, function(data){
      console.log(data);
      $('#modal1').closeModal();

      var tr = $('<tr>');
      var td = tr.append($('<td>').text(data.done),$('<td>').text(data.priority),$('<td>').text(data.task));
      $('tbody').append(td);

      // $('tbody').append($('<tr>'));
      // $('tbody tr:last-child').append($('<td>').text(data.done));
      // $('tbody tr:last-child').append($('<td>').text(data.priority));
      // $('tbody tr:last-child').append($('<td>').text(data.task));

    })
  });

  $('.button_to').on('submit', function(e){
    e.preventDefault();
    var todosId = $(this).attr('id'); //Passing id of todo to ruby routes
    console.log(todosId);
    $.ajax({
      url: '/todos/'+todosId,
      method: 'DELETE',
      success: function(data){
        $('#'+todosId).parent().parent().remove();
      }
    })
  })


});
