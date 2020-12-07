var mover =  document.getElementById('mover')
const sort =  new Sortable(mover, {
   animation: 150,
   group:  'shared',
   onChoose: function(evento, ini)  {
      ini = evento.oldIndex
       console.log('Se ha seleccionado un elemento', ini)
       localStorage.setItem('inicio', ini)
   },
   onChange: function(evento, fi)  { 
       evento.newIndex;   
      fi = evento.newIndex
       console.log('Se ha cambiado un elemento', fi)
       localStorage.setItem('final', fi)
   }, 
   onMove: function (/**Event*/ evt, /**Event*/ originalEvent) {
   // Example: https://jsbin.com/nawahef/edit?js,output
   console.log(evt.dragged); // dragged HTMLElement
   console.log(evt.related); // HTMLElement on which have guided
   var itemU = evt.dragged
   var itemD = evt.related
   var movidoUno = []
   var movidoDos = []
   
   movidoUno.push(
       itemU
   )

   movidoDos.push(
       itemD
   )
   localStorage.setItem('movidoUno', JSON.stringify(movidoUno));   
   localStorage.setItem('movidoDos', JSON.stringify(movidoDos)); 
},
   
   });
function camb() {
   document.getElementById('menus').style.border='dashed'
   document.getElementById('header').style.border='none'
   document.getElementById('produc').style.border='none'
   document.getElementById('demasProd').style.border='none'

 
}

function header() {
    document.getElementById('header').style.border='dashed'
    document.getElementById('menus').style.border='none'
    document.getElementById('produc').style.border='none'
    document.getElementById('demasProd').style.border='none'
 }
 function productos() {
    document.getElementById('produc').style.border='dashed'
    document.getElementById('header').style.border='none'
    document.getElementById('menus').style.border='none'
    document.getElementById('demasProd').style.border='none'
 }
 function demasProd() {
    document.getElementById('demasProd').style.border='dashed'
    document.getElementById('produc').style.border='none'
    document.getElementById('header').style.border='none'
    document.getElementById('menus').style.border='none'
 }

