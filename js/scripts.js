var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var animal = prompt("nazwa nowych zwierzątek:");

console.log("Text oryginalny: " + text); // pobieramy nazwe nowego animalsa

var tablica = text.split(' '); // rozwalamy  text na tablice
tablica[0] = animal; // pierwszy element tablicy = pierwszemu wyrazowi podmieniamy na nowe zwierzatko
text=tablica.join(" "); // sklajamy tablice w text ponownie

text = text.replace('Papugi', animal);

console.log("Pełen text: " + text);
console.log("Połowa textu: " + text.substr(0, text.length / 2));