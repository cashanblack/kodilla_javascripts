var triangle1Area, triangle2Area, triangle3Area;
		
function getTriangleArea(a, h) {
	if (a<0 || h<0){return "Nieprawidłowe dane";}
	return a*h/2;
}
		
triangle1Area = getTriangleArea(10,6);
triangle2Area = getTriangleArea(2,1);
triangle3Area = getTriangleArea(4,5);
		
console.log( triangle1Area );
console.log( triangle2Area );
console.log( triangle3Area );