var tl = gsap.timeline();


tl.from('.st', {
    stagger : .2,
    y:-40,
    color : 'red',
    duration: 3,
    opacity : 0,
    ease : "Expo.easeInOut"
})
.from('#at',{
   y : 40,
   opacity : 0,
   duration: 1,
   color : 'red',
   ease : "Expo.easeInOut"
}, '-=1')
.to('#at',{
    color : ' #f79292',
})