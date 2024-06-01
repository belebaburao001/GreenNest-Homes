var menu = document.querySelector("#menu");
var close = document.querySelector("#closed");

var tl = gsap.timeline();

tl.to("#nav-links", {
    right:0,
    duration:0.6
})

tl.pause()

menu.addEventListener("click", function(){
    tl.play()
})

close.addEventListener("click", function(){
    tl.reverse()
})