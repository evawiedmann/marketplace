// Business (or back-end) logic:



// User interface (or front-end) logic:
$(document).ready(function() {
  $("form#information").submit(function(event){
    event.preventDefault();
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var item = $("#item").val();
    var sel = document.getElementById("item");
    console.log(sel.value);

    $(".name").append(nameInput);
    $(".address").append(addressInput);

    $("#receipt").show();
    $("#output").text(sel);

    // $("#item").val()

  });
});
