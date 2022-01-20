// gallery item filter

const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;
const firstcategory = "3dmotion";
for (let p = 0; p < items.length; kp++) {
    items[p].style.display = "none";
    if (firstcategory == items[p].getAttribute("data-id")) {
        items[p].style.display = "block";
    }
}

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")

        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if (target == items[k].getAttribute("data-id")) {
                items[k].style.display = "block";
            }
            if (target == "all") {
                items[k].style.display = "block";
            }
        }

    })
}
