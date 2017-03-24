function drawTree(treeRowsNo){
	for (var treeRow = 1 ; treeRow < treeRowsNo + 1 ; treeRow++) {
			var star = "";
			var spaceNo = 0;
			
			for (var pcs = 0 ; pcs < (treeRow * 2) - 1 ; pcs++) {
				star += "*";
			}
				
			for (var spaceNo = 0 ; spaceNo < (treeRowsNo-treeRow) ; spaceNo++) {
				star = " " + star;
			}
				
			console.log(star)
	}
	
}

var treeHeight = parseInt(prompt("Podaj wysokość choinki:"));
rysujChoinke(treeHeight);
