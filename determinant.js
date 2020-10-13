	/*	FUNKCJA minorMacierz(tab,kolumna)
		Funkcja zwraca minor macierzy 'tab' po usunięciu pierwszego [zerowego] wiersza i kolumny o indeksie 'kolumna'.
		
		Parametry:
		tab 	- tablica dwuwymiarowa
		kolumna - kolumna wykreślana w rozwinięciu Laplace'a
	*/
	
		function minorMacierzy(tab, kolumna){
		
		var minor = new Array(tab.length-1);					//deklaracja mniejszego minora
		for(let licznik=0; licznik < minor.length; licznik++)
			minor[licznik] = new Array(minor.length);
		
		var i_minora=0, j_minora=0;								//iteratory minora
		
		for(let i=1; i<tab.length; i++){						//przepisywanie macierzy do minora
			for(var j=0; j< tab.length; j++){
				if(j==kolumna)
					continue;
				else
				minor[i_minora][j_minora]=tab[i][j];
				j_minora++;
			}		
		i_minora++;
		j_minora=0;
		}
		
		return minor;
	}
	
	


	/*	FUNKCJA det(tab);
		Funkcja rekurencyjna; zwraca wyznacznik macierzy 'tab' zapisanej w postaci tablicy dwuwymiarowej
		poprzez zastosowanie rozwinięcia Laplace'a względem pierwszego wiersza.
		Do uzyskania minorów wykorzystywana jest funkcja minorMacierz().
		
		Parametry:
		tab 	- tablica dwuwymiarowa
	*/
	
	function det(tab){
		
		var wyznacznik;
		
		if (tab.length==1){			// warunek końca rekurencji
			wyznacznik=tab[0];
			return wyznacznik;
		}
		else						// rozwinięcie Laplace'a
			wyznacznik=0;
			for(let j=0; j<tab.length; j++){
				wyznacznik=wyznacznik+tab[0][j] * Math.pow(-1,j+2) * det(minorMacierzy(tab,j));
			}
			
		return wyznacznik;
	}
	


//----------Sprawdzenie wyników--------------
	
	var tab1=[5];											// det = 5
	var tab2=[[3,5],[2,8]];									// det = 14
	var tab3=[[1,2,4],[4,5,2],[3,2,2]];						// det =-26
	var tab4=[[1,1,4,4],[2,1,8,8],[3,2,2,2],[7,8,6,3]];		// det =-30

	console.log("Macierz pierwotna:");
	console.log(tab4);
	console.log("Wyznacznik macierzy jest rowny:");
	console.log(det(tab4));

//EOF