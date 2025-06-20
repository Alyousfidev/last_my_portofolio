$(document).ready(function(){

  $(".card-contact").click(function() {
    // أولاً: نزيل الكلاس من كل الكروت الأخرى
    $(".card-contact").not(this).removeClass("active").find("p").removeClass("active");

    // ثانياً: نفعّل/نلغي الكرت الحالي
    $(this).toggleClass("active");
    $(this).find("p").toggleClass("active");
  });

})