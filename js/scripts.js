var a;
var b; 
var value;

a = prompt("Podaj a:");
b = prompt("Podaj b:");
			
value = ( a * a ) + ( 2 * a * b ) - ( b * b );
		
console.log('Wynik operacji wynosi: ' + value);

if(value > 0){ 
	console.log('Wynik dodatni');
} else {
	value < 0 ? console.log ('Wynik ujemny') : console.log ('Wynik równy zero');
}