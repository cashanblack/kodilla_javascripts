var text="Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var animal="Zielone słonie";

console.log("Text oryginalny: " + text);

animal = animal.toUpperCase();
text = text.replace('Papugi', animal);

console.log("Pełen text: " + text);
console.log("Połowa textu: " + text.substr(0, text.length / 2));