var init_friend_lookup = function() {
  $('#friend-lookup-form').on('ajax:before', function() {
    show_spinner();
  });

  $('#friend-lookup-form').on('ajax:after', function() {
    hide_spinner();
  });

  $('#friend-lookup-form').on('ajax:success', function(event) {
    $('#friend-lookup').replaceWith(event.detail[2].responseText);
    init_friend_lookup();
  });

  $('#friend-lookup-form').on('ajax:error', function(event, xhr, status, error) {
    $('#friend-lookup-results').replaceWith(' ');
    $('#friend-lookup-errors').replaceWith('Person was not found.');
    hide_spinner();
  });
};


$(document).ready(function() {
  init_friend_lookup();
});