var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	list.innerHTML += '<li>item ' + document.getElementsByTagName('li').length + '</li>'	
});

// czy dodawanie tagów w ten sposób jest poprawne ?
//
// czy nie powinnismy dokładac tego przez "appendChild" + "innerHTML" ?
//
// Jest jakas różnica ?
