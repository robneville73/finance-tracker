var init_stock_lookup = function() {
  $('#stock-lookup-form').on('ajax:before', function() {
    show_spinner();
  });

  $('#stock-lookup-form').on('ajax:after', function() {
    hide_spinner();
  });

  $('#stock-lookup-form').on('ajax:success', function(event) {
    $('#stock-lookup').replaceWith(event.detail[2].responseText);
    init_stock_lookup();
  });

  $('#stock-lookup-form').on('ajax:error', function(event, xhr, status, error) {
    $('#stock-lookup-results').replaceWith(' ');
    $('#stock-lookup-errors').replaceWith('Stock was not found.');
    hide_spinner();
  });
};


$(document).ready(function() {
  init_stock_lookup();
});