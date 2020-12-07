(function () {
  var input = '',
  correct = '8989';

  var dots = document.getElementsByClassName('dot'),
  numbers = document.getElementsByClassName('number');
  dots = Array.from(dots);
  numbers = Array.from(numbers);

  var numbersBox = document.getElementsByClassName('numbers')[0];
  $(numbersBox).on('click', '.number', function (evt) {
    var number = $(this);

    number.addClass('grow');
    input += number.index() + 1;
    $(dots[input.length - 1]).addClass('active');

    if (input.length >= 4) {
      if (input !== correct) {
        dots.forEach(dot => $(dot).addClass('wrong'));
        $(document.body).addClass('wrong');
      } else
      {
        dots.forEach(dot => $(dot).addClass('correct'));
        $(document.body).addClass('correct');
      }
      setTimeout(function () {
        dots.forEach(dot => dot.className = 'dot');
        input = '';
      }, 900);
      setTimeout(function () {
        document.body.className = '';
      }, 1000);
    }
    setTimeout(function () {
      number.className = 'number';
    }, 1000);
  });
})();

$(document).ready(function(){


  var $li = $('.opciones li').click(function() {
    $li.removeClass('selected');
    $(this).addClass('selected');
    banco = $(this).text()
    $(".inputabrir").val(banco)
});
  $(".flechita").click(function(){
    $(".opciones").css("display","block");
    $(".inputabrir").css("box-shadow","rgba(136, 136, 136, 0.41) 1px 1px 20px");
    $(".inputabrir").css("border","none");
    $(".flechita").css({'transform' : 'rotate('+ 270 +'deg)'});


  });
$(".inputabrir").click(function(){
 $(".opciones").css("display","block");
 $(".inputabrir").css("box-shadow","rgba(136, 136, 136, 0.41) 1px 1px 20px");
 $(".inputabrir").css("border","none");
 $(".flechita").css({'transform' : 'rotate('+ 270 +'deg)'});


});
 $(document).on("click",function(e) {

      var container = $(".conjunto");

         if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".opciones").css("display","none");
              $(".inputabrir").css("box-shadow","none");
              $(".inputabrir").css("border","1px solid #ccc");
                $(".flechita").css({'transform' : 'rotate('+ 90 +'deg)'});
         }
  });
});

$(document).ready(function(){


 var $li = $('.opciones2 li').click(function() {
   $li.removeClass('selected2');
   $(this).addClass('selected2');
   banco = $(this).text()
   $(".inputabrir2").val(banco)
});
 $(".flechita2").click(function(){
   $(".opciones2").css("display","block");
   $(".inputabrir2").css("box-shadow","rgba(136, 136, 136, 0.41) 1px 1px 20px");
   $(".inputabrir2").css("border","none");
   $(".flechita2").css({'transform' : 'rotate('+ 270 +'deg)'});


 });
$(".inputabrir2").click(function(){
$(".opciones2").css("display","block");
$(".inputabrir2").css("box-shadow","rgba(136, 136, 136, 0.41) 1px 1px 20px");
$(".inputabrir2").css("border","none");
$(".flechita2").css({'transform' : 'rotate('+ 270 +'deg)'});


});
$(document).on("click",function(e) {

     var container = $(".conjunto2");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
           $(".opciones2").css("display","none");
             $(".inputabrir2").css("box-shadow","none");
             $(".inputabrir2").css("border","1px solid #ccc");
               $(".flechita2").css({'transform' : 'rotate('+ 90 +'deg)'});
        }
 });
});
$(document).ready(function(){


 var $li = $('.opciones3 li').click(function() {
   $li.removeClass('selected3');
   $(this).addClass('selected3');
   banco = $(this).text()
   $(".inputabrir3").val(banco)
});
 $(".flechita3").click(function(){
   $(".opciones3").css("display","block");
   $(".inputabrir3").css("box-shadow","rgba(136, 136, 136, 0.41) 1px 1px 20px");
   $(".inputabrir3").css("border","none");
   $(".flechita3").css({'transform' : 'rotate('+ 270 +'deg)'});


 });
$(".inputabrir3").click(function(){
$(".opciones3").css("display","block");
$(".inputabrir3").css("box-shadow","rgba(136, 136, 136, 0.41) 1px 1px 20px");
$(".inputabrir3").css("border","none");
$(".flechita3").css({'transform' : 'rotate('+ 270 +'deg)'});


});
$(document).on("click",function(e) {

     var container = $(".conjunto3");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
           $(".opciones3").css("display","none");
             $(".inputabrir3").css("box-shadow","none");
             $(".inputabrir3").css("border","1px solid #ccc");
               $(".flechita3").css({'transform' : 'rotate('+ 90 +'deg)'});
        }
 });
});
