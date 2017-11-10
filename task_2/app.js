var idt;
	idt=1;
	
function deleteKnopka() {
    var elem = document.getElementById('num1');
    elem.parentNode.removeChild(elem);
    return false;
}
function deleteNewKnopka(as) {
    var eleme = document.getElementById(as);
    eleme.parentNode.removeChild(eleme);
    return false;
}
function addTaska() {
    var task; 
    name = $("#add_task_input").val();
	task='<li id='+idt+'>'+'<span>' + name + '</span> <button onclick="deleteNewKnopka(' + idt+ ');"> Удалить </button>';
	$('ul').append(task); 		
}
$(window).on ('load', function(){ 
$("#root").append('<ul>');
$('ul').append('<li id="num1">');
$('li').append('<span> Сделать задание #3 по web-программированию </span> <button onclick="deleteKnopka();"> Удалить </button>');
$("#root").append('<input id="add_task_input" type=text> </input> <br> <button id="add_task" onclick="addTaska(); idt=idt+1;"> Добавить задачу </button>');
}); 
