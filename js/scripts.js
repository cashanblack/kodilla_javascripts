function rysujChoinke(iloscRzedowChoinki){
	for ( var wierszChoinki = 1 ; wierszChoinki < iloscRzedowChoinki+1 ; wierszChoinki++) 
		{
			var star = "";
			var iloscSpacji=0;
			
			for ( var bombka = 0 ; bombka < (wierszChoinki * 2) - 1 ; bombka++) 
				{
					star += "*";
				}
				
			for ( var iloscSpacji = 0 ; iloscSpacji < (iloscRzedowChoinki-wierszChoinki) ; iloscSpacji++) 
				{
					star = " " + star;
				}
				
			console.log(star)
		}
	
}

var wysokoscChoinki = parseInt(prompt("Podaj wysokość choinki:"));
rysujChoinke(wysokoscChoinki);