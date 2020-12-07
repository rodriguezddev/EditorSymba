
function menures(){
  document.getElementById('nava').style.display = "block"
  document.getElementById('nava').style.width = "250px"
  document.getElementById('logo').innerHTML = "Symba"
  document.getElementById('indexmenu').style.zIndex = "999999"
  document.getElementById('bloque').style.filter = "blur(6px)"
  document.getElementById('bloquedos').style.filter = "blur(6px)"
}
function desmob(){
  document.getElementById('nava').style.display = "none"
  document.getElementById('nava').style.width = "55px"

  document.getElementById('indexmenu').style.zIndex = "999999"
  document.getElementById('bloque').style.filter = "blur(0px)"
  document.getElementById('bloquedos').style.filter = "blur(0px)"
}

function ajustprin(){
  document.getElementById('ajustprin').style.display = "inline"
}
$(document).on("click",function(e) {

        var modin = $(".modin");

           if (!modin.is(e.target) && modin.has(e.target).length === 0) {
              document.getElementById('ajustprin').style.display = "none"
           }



    });

function myFunction(x) {
  if (x.matches) { // If media query matches
    $( "#main-menu" ).mouseover(function() {
      document.getElementById("rowd").style.marginLeft = "15px !important";

document.getElementById("rowd2").style.marginLeft = "15px !important";
document.getElementById("rowd3").style.marginLeft = "15px !important";
document.getElementById("rowd4").style.marginLeft = "15px !important";
document.getElementById("rowd5").style.marginLeft = "15px !important";
document.getElementById("rowd6").style.marginLeft = "15px !important";
        document.getElementById("rowd").style.marginLeft = "15px !important";
        document.getElementById("logo").innerHTML = "S";
});

  } else {

  }
}



function ajustprinnoti(){
  $(".modineliminar").css("display","inline");
}
$(document).on("click",function(e) {

        var modin2 = $(".modinno");

           if (!modin2.is(e.target) && modin2.has(e.target).length === 0) {
              $(".modineliminar").css("display","none");
              console.log("funciona")
           }



    });

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
