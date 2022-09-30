
// funzione dropdown
function mostraCorsi() {
   document.getElementById('btn-panel').classList.toggle("mostra")

}
//-----------------------------------------

// functioni sulla  Lista:
function selectItems(){
    let allItems=document.getElementsByClassName('item');

    for(let item of allItems){
        item.classList.toggle('fatto');
    }
}

function selectItem(e){
    let itemSelected=e.target;
    itemSelected.classList.toggle('fatto');
}





let item =  document.getElementById('items');


function getInputAndAddItem(eventObject){

    let input= document.getElementById('inputItem');
    if(eventObject.key !=='Enter'){
        return;
    }
 //se l untete scrive qualcosa...lo aggiungiamo altrimenti alert schermo vuoto
   if(input.value!==""){
    item.innerHTML += `<div class="item"onclick="selectItem(event)">${input.value}</div>`
   }  else{
    alert("campo di testo vuoto");
   }
}



//-----------------------------------------------------

function corsivo(){
    let paragrafo=document.getElementById('testo');
    paragrafo.classList.toggle('corsivo');
}
function grassetto(){
    let paragrafo=document.getElementById('testo');
    paragrafo.classList.toggle('grassetto');
}


