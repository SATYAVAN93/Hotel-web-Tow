
// Ḥeader Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navcollapse.classList.remove("show");
    })
})



// Counter design
Document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end , duration) {
        let onj = Document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            Object.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        },step);
    }
    counter("count1", 0 , 1287, 3000);
    counter("count2", 100 , 5786, 3000);
    counter("count3", 0 , 1440, 3000);
    counter("count4", 0 , 7110, 3000);
});


// Our Partner

// alert('Regard aggre me')