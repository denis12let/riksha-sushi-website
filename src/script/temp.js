const buttonsOrder = document.querySelectorAll(".button");

buttonsOrder.forEach(function(button) {
    button.addEventListener("click", function() {
      location.replace("/src/pages/card.html");
    });
  });