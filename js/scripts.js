$(document).ready(function() {
  $("form#addressBook").submit(function(event) {

    var address = $("input#address").val();
    var name = $("input#userName").val();
    var phoneNumber = $("input#phoneNumber").val();

    $(".address").text(address);
    $(".userName").text(name);
    $(".phoneNumber").text(phoneNumber);
    $(".output").show();
    event.preventDefault();
  });


  $(".output").click(function() {
    $(".userName").toggle();
    $(".information").toggle();
  });
});
