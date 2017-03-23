var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola']; 
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames;

console.log(femaleNames);
console.log(maleNames);

var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName =prompt("Podaj imię:");

if(allNames.indexOf(newName) === -1){
	allNames.push(newName);
}else{
	console.log("Imię już wystepuje w tabeli.");
}
	
console.log(allNames);