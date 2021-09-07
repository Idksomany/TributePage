let tl = gsap.timeline({
    scrollTrigger:{
        trigger:"header"
    }
});
tl.from("nav",{opacity:0.5,scale:0.3,y:-200,duration:1})
tl.to("nav",{opacity:1,scale:1,duration:1},"-=1")
tl.from(".header-text",{opacity:0,duration:2},"-=1")
tl.to(".header-text",{opacity:1,duration:2},"-=1")
 