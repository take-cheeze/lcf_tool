$.get('./TestGame/TestGame/RPG_RT.ldb', function (data) {
  var m = new Model(data);
  $('#ldb').text(JSON.stringify(m));
}, 'binary');

$.get('./TestGame/TestGame/RPG_RT.lmt', function (data) {
  var m = new Model(data);
  $('#lmt').text(JSON.stringify(m));
}, 'binary');

for(var i = 1; i <= 47; ++i) {
  $.get('./TestGame/TestGame/Map' + (i < 10? '000' : '00') + i + '.lmu', function (data) {
    var m = new Model(data);
    $('#lmu').append($(document.createElement('div')).text(JSON.stringify(m)).addClass('Map' + i));
  }, 'binary');
}
