const productElements = document.querySelectorAll(".product");
const dopElements = document.querySelectorAll(".dop");

dopElements.forEach(function(dopElement) {
  dopElement.addEventListener("click", function() {
    clearActive();
    const listItem = this.closest(".list__item");
    listItem.classList.toggle("active");
  });
});

function clearActive() {
    productElements.forEach((item) => {
        item.classList.remove("active");
    })
}

productElements.forEach(function(productElement){
    productElement.addEventListener("click", function(){
        const listItem = this.closest(".list__item");
        listItem.classList.toggle("active");
    });
});

// dopElements.forEach((dopElement) => {
//     dop.addEventListener("click", () => {
//         const listItem = this.closest(".list__item");
//         listItem.style.backgroundColor = "rgb(224, 113, 83)";
//     });
// })
// product.addEventListener("click", handleProductClick);

