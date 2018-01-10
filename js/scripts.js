$(document).ready(function() {
  $("form#addressBook").submit(function(event) {

    var address = $("input#address").val();
    var name = $("input#userName").val();
    var phoneNumber = $("input#phoneNumber").val();
    $("ul.contacts").append("<li class='contact'><h2 class ='userName'>"+name+"</h2><p class='information'><span class ='address'>"+address+"</span><br><span class ='phoneNumber'>"+phoneNumber+"</span></p></li>")
    $(".output").show();
    event.preventDefault();

    $("li.contact").last().click(function() {
      $(this).children(".userName").toggle();
      $(this).children(".information").toggle();
      // $(this).children("ul#userName").after(".output");
    });

  });

});
