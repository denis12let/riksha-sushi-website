const bannerBtn = document.getElementById("banner__btn");
const itemsActive = document.querySelectorAll(".menu-3 .menu__item");

bannerBtn.addEventListener("click", function(){
    location.replace("/src/pages/card.html");
});

itemsActive.forEach(function(item){
    item.addEventListener("click", function(event){
        itemsActive.forEach(function(el){
            console.log("1");
            el.classList.remove("menu__item-active");
        });
        item.classList.toggle("menu__item-active");
    });
});


