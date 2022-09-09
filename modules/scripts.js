const servicesBlock = document.querySelectorAll(".content__services_blocks_inside")
const servicesBlockH1 = document.querySelectorAll(".content__services_blocks_h1")
const servicesBlockText = document.querySelectorAll(".content__services_blocks_text")
const servicesBlockIco = document.querySelectorAll(".content__services_blocks_ico")
const servicesBlockLM = document.querySelectorAll(".content__services_blocks_learn-more")

servicesBlock.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let childEl = currentBtn.children;

        console.log(childEl)

        servicesBlock.forEach(function(item) {
            item.classList.remove('active')
        });

        servicesBlockH1.forEach(function(item) {
            item.classList.remove('active')
        });

        servicesBlockText.forEach(function(item) {
            item.classList.remove('active')
        });

        servicesBlockIco.forEach(function(item) {
            item.classList.remove('active')
        });

        servicesBlockLM.forEach(function(item) {
            item.classList.remove('active')
        });

        currentBtn.classList.add('active');
        childEl.item(0).classList.add('active');
        childEl.item(1).classList.add('active');
        childEl.item(2).classList.add('active');
        childEl.item(3).classList.add('active');
    });
})
