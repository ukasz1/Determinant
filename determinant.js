	/*Dane wejściowe*/
	var tab=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
	var kolumna=3;
	
	
	//FUNKCJA minorMacierz(tab,kolumna)
	// Funkcja zwraca minor macierzy 'tab' po usunięciu pierwszego [zerowego] wiersza i kolumny o indeksie 'kolumna'.
	//
	// tab - tablica dwuwymiarowa
	// kolumna - kolumna wykreślana w rozwinięciu Laplace'a
	
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
	
	
	//Sprawdzenie wyników
	console.log('Macierz pierwotna:');
	console.log(tab);
	console.log("Indeks kolumny z rozwiniecia Laplace'a: " + kolumna);
	console.log('Minor:');
	console.log(minorMacierzy(tab,kolumna));
	

	
	//FUNKCJA determinant();
	
	function determinant(){
		

		
	
	}
	

	
	
	

		
	// console.log(Math.pow(-2,3));