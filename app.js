let animatedText=document.querySelector(".anii");

let ani=()=>{
    setTimeout(() => {
        animatedText.innerHTML="Frontend Devolper"
    }, 0);
    setTimeout(() => {
        animatedText.innerHTML="Web Designer"
    }, 4000);
    setTimeout(() => {
        animatedText.innerHTML="Portfolio Designer"
    }, 8000);setTimeout(() => {
        animatedText.innerHTML="Landing Page Designer"
    }, 12000);
}
ani();
setInterval(ani,16000);


let menu=document.querySelector(".menu");

let links=document.querySelector(".links");

menu.addEventListener("click",()=>{
    links.classList.toggle("links-active")
});
let linksLi=document.querySelectorAll(".links li");
let links2=document.querySelector(".links");


linksLi.forEach(val=>{
    val.addEventListener("click",()=>{
        links.classList.toggle("links-active")

    })

});

let bars=document.querySelector("#bars");

bars.addEventListener("click",()=>{
    bars.classList.toggle("bars-active")
})


// gsap animation

gsap.from(".menu",{
    y:-200,
    delay:.3,
    stagger :0.3,
})
gsap.from("nav ul li",{
    y:-200,
    delay:.3,
    stagger :0.3,
})

gsap.from(".small-name",{
    y:-200,
    delay:1,
})
gsap.from(".icons",{
    x:-300,
    delay:2,

})
gsap.from(".intro h1",{
    x:-500,
    delay:3,

})
gsap.from(".anii",{
    x:-500,
    delay:4,

})
gsap.from(".animated-btn-home",{
   x:-500,
    delay:5,

})

gsap.from(".main-img",{
    y:-1000,
     delay:6,
 
 })
 










