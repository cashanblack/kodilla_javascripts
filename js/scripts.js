var a, b, value, switcher;

a=prompt ("Podaj a:");
b=prompt ("Podaj b:");
			
value = (a*a) + (2*a*b) - (b*b);
		
console.log ('Wynik operacji wynosi: ' + value);
/*
if (value>0){ 
	console.log ('Wynik dodatni');
}
		
if (value<0){
	console.log ('Wynik ujemny');
}

if (value==0){
	console.log ('Wynik równy zero');
}
*/
/*
if (value>0){ 
	console.log ('Wynik dodatni');
} else if (value<0){
	console.log ('Wynik ujemny');
} else if (value==0){
	console.log ('Wynik równy zero');
}

*/

switcher = (value<0)*(-1) + (value==0)*(0) + (value>0)*(1);
switch (switcher) { 
	case -1: 
		console.log ('Wynik ujemny'); 
		break; 
	case 0: 
		console.log ('Wynik równy zero');
		break;
	case 1: 
		console.log ('Wynik dodatni'); 
		break; 
	default: 
		alert("Trudno wyczaić..."); 
}