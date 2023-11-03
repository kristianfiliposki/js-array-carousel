//al caricamento della pagina voglio inserire delle immagini
let foto=document.getElementsByClassName("photos")
const btndx=document.getElementById("btn-right")
const btnsx=document.getElementById("btn-left")



let imgAttuale = 0;
const ultimaImg = 4;
foto[imgAttuale].classList.remove("invisible");

// gestire evento di click sulle freccette
// al click, cambiare l'immagine visibile
btnsx.addEventListener("click", function () {
    
    if(imgAttuale != ultimaImg){
    //rimuovo la visibilità sull'immagine attuale
    foto[imgAttuale].classList.add("invisible")
    
		//aggiorno il contatore dell'immagine attuale
		imgAttuale--;

		//aggiungo la visibilità sulla prossima immagine
		foto[imgAttuale].classList.remove("invisible");
    }

});

btndx.addEventListener("click", function () {

        if(imgAttuale < ultimaImg){
		//rimuovo la visibilità sull'immagine attuale
		foto[imgAttuale].classList.add("invisible")

		//aggiorno il contatore dell'immagine attuale
		imgAttuale++;

		//aggiungo la visibilità sulla prossima immagine
		foto[imgAttuale].classList.remove("invisible");
        }

}); 


































