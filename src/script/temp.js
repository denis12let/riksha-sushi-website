const buttonsOrder = document.querySelectorAll(".button");
const nextLocation = location.pathname;

buttonsOrder.forEach(function(button) {
    button.addEventListener("click", function() {
      // console.log(document);
      location.replace("/src/pages/card.html");
    });
  });


  // window.addEventListener('DOMContentLoaded', function() {
  //   const currentUrl = window.location.pathname;
  //   alert(currentUrl);
  //   const validUrls = ['/page1', '/page2', '/page3']; // Здесь вы можете указать допустимые URL
    
  //   if (!validUrls.includes(currentUrl)) {
  //     window.location.href = '/src/pages/404.html'; // Перенаправление на страницу 404
  //   }
  // });

  // window.navigator.addEventListener('navigate', (event) => {
  //   alert('location changed!');
  // });
