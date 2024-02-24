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
    links.classList.toggle("links-active");

});
let linksLi=document.querySelectorAll(".links li");
let links2=document.querySelector(".links");


linksLi.forEach(val=>{
    val.addEventListener("click",()=>{
        links.classList.toggle("links-active")

    })

});




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
    delay:.2,
})
gsap.from(".icons",{
    x:-300,
    delay:.6,

})
gsap.from(".intro h1",{
    x:-500,
    delay:.9,

})
gsap.from(".anii",{
    x:-500,
    delay:1.3,

})
gsap.from(".animated-btn-home",{
   x:-500,
    delay:5,

})

gsap.from(".main-img",{
    y:-1000,
     delay:1.6,
 
 })
//  scroll trigger animation about page

gsap.from(".about .right .heading h1",{
    opacity:0,
      scrollTrigger:{
          scroller:"body",
          trigger:".about .right .heading h1",
    
      }
      })
gsap.from(".about .right .box",{
x:-500,
scrollTrigger:{
    scroller:"body",
    trigger:".about .right .box",
}
})
gsap.from(".myself p",{
    x:1000,
    delay:1,
    stagger:0.3,
    scrollTrigger:{
        scroller:"body",
        trigger:".myself p",
    }
    })
    


gsap.from(".about-btn .btn",{
    x:-200,
    delay:2,
    scrollTrigger:{
        scroller:"body",
        trigger:".about-btn .btn",
    }
})
 


gsap.from(".about .left .img-cont",{
   opacity:0,
   scale:0,
    delay:2,
    scrollTrigger:{
        scroller:"body",
        trigger:".about .left .img-cont",
    }
})
    


// services section animation



gsap.from(".services .services-heading",{
scale:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".services .services-heading",
    }
})


    
    















// skill animation

gsap.from(".skill .skill-heading",{
    scale:0,
    scrollTrigger:{
       scroller:"body",
       trigger: ".skill .skill-heading",
    }
})

gsap.from(".skill .skil-head .html .line-inside",{
    x:-100,
    opacity:0,
    stagger:0.4,
    delay:.5,
    scrollTrigger:{
       scroller:"body",
       trigger: ".skill .skil-head .html .line-inside",
      
    }
})
    


// contact animation



gsap.from(".contact .contact-heading",{
    scale:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".contact .contact-heading",

    }
})
gsap.from(".contact .contact-content .contact-left",{
    x:-500,
    scrollTrigger:{
        scroller:"body",
        trigger:".contact .contact-content .contact-left",
    
    }
})

gsap.from(".contact .contact-content .contact-right input,textarea,.sumbit",{
    x:600,
    delay:3,
    stagger:0.3,
    scrollTrigger:{
        scroller:"body",
        trigger:".contact .contact-content .contact-right input,textarea,button",
   
    }
})


gsap.from(".footer p",{
    opacity:0,
    scale:0,
    y:200,
    delay:2,
    scrollTrigger:{
        scroller:"body",
        trigger:".footer .p",
    }
})



let body=document.querySelector("body"); 
let circle=document.querySelector(".mouse-back");
    body.addEventListener("mousemove",(details)=>{
        circle.style.left=details.x+"px";
        circle.style.top=details.y+"px";
        circle.style.scale=1;

        body.addEventListener("mouseleave",()=>{
            circle.style.scale=0;
            circle.style.opacity=0;


        })
        body.addEventListener("mouseenter",()=>{
            circle.style.scale=1;
            circle.style.opacity=1;
        })
        })
        

