// ================= HERO SLIDER =================

let heroSlides = document.querySelectorAll(".slide");
let heroIndex = 0;

function changeSlide(){
    heroSlides[heroIndex].classList.remove("active");
    heroIndex = (heroIndex + 1) % heroSlides.length;
    heroSlides[heroIndex].classList.add("active");
}

if(heroSlides.length > 0){
    setInterval(changeSlide, 4000);
}


// ================= SERVICE 3D SLIDER =================

const cards = document.querySelectorAll(".service-card");
const next = document.querySelector(".right");
const prev = document.querySelector(".left");

let serviceIndex = 0;

function updateSlider(){
    cards.forEach((card,i)=>{
        card.classList.remove("active","left-card","right-card");

        if(i === serviceIndex){
            card.classList.add("active");
        }
        else if(i === (serviceIndex - 1 + cards.length) % cards.length){
            card.classList.add("left-card");
        }
        else if(i === (serviceIndex + 1) % cards.length){
            card.classList.add("right-card");
        }
    });
}

if(cards.length > 0){

    next.addEventListener("click",()=>{
        serviceIndex = (serviceIndex + 1) % cards.length;
        updateSlider();
    });

    prev.addEventListener("click",()=>{
        serviceIndex = (serviceIndex - 1 + cards.length) % cards.length;
        updateSlider();
    });

    updateSlider();
}


// ================= SCROLL ANIMATION =================

window.addEventListener("scroll", function(){

    let reveals = document.querySelectorAll(".card");

    reveals.forEach((element)=>{
        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });

});
