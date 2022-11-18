$(document).ready(function(){
	$('#button_login').submit(function(){

var txt_name = $('#input_name').val();
var txt_password = $('#input_password').val();

localstorage.setitem('usuario',txt_name);
localstorage.setitem('password',txt_password);
console.log(localstorage);
});

});