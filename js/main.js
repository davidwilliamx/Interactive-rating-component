$(function (){    
     $("#card-main__rating .rating__item").on('click', function () {
          $(this).addClass('selected').siblings().removeClass('selected');
     });
     $(".card-main__button").on("click", function () {
          $("#card-main").addClass("disable");
          $("#card-success").removeClass("disable");
          let current = $("#card-main__rating .rating__item.selected").attr("value");
          $("#number").text(current);
     });
});