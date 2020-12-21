// PROJECT 1
let tl = new TimelineMax({onUpdate:updatePercentage});
let tl2 = new TimelineMax();

let tl3 = new TimelineMax({onUpdate:updatePercentage});
let tl4 = new TimelineMax();

const controller = new ScrollMagic.Controller();

tl.from('.right-slide__description', .5, {x:200, opacity:0, ease:Power0.easeNone}, '=-.2');
tl.from('.project-1__span', 1, {width:0}, '=-.10');
tl.from('.right-slide__title', .5, {x:200, opacity:0, ease:Power0.easeNone});
tl.from('.right-slide__img1', 1, {x:-200, opacity:0, ease:Power0.easeNone}, '=-.1');
tl.from('.right-slide__img2', 1, {x:200, opacity:0, ease:Power0.easeNone}, '=-.7');
tl2.from('.right-slide__box', 1, {opacity:0, scale:0});
tl2.to('.right-slide__box', 1, {
  left: '20%',
  top: '75%',
  scale: '1.3',
  borderColor: 'white',
  borderWidth: 12,
  boxShadow: '1px 1px 0px 0px rgba(0,0,0,0,.09)'
});
tl.from('#btn1', .5, {x:200, opacity:0, ease:Power0.easeNone}, '=-.2');
tl.from('#btn2', .5, {x:200, opacity:0, ease:Power0.easeNone}, '=-.2');


tl3.from('.left-slide__description', .5, {x:200, opacity:0, ease:Power0.easeNone}, '=-.2');
tl3.from('.project-2__span', 1, {width:0}, '=-.10');
tl3.from('.left-slide__title', .5, {x:200, opacity:0, ease:Power0.easeNone});
tl3.from('.left-slide__img1', 1, {x:-200, opacity:0, ease:Power0.easeNone}, '=-.1');
tl3.from('.left-slide__img2', 1, {x:200, opacity:0, ease:Power0.easeNone}, '=-.7');
tl4.from('.left-slide__box', 1, {opacity:0, scale:0});
tl4.to('.left-slide__box', 1, {
  left: '38%',
  top: '75%',
  scale: '1.3',
  borderColor: 'white',
  borderWidth: 12,
  boxShadow: '1px 1px 0px 0px rgba(0,0,0,0,.09)'
});
tl3.from('#btn3', .5, {x:200, opacity:0, ease:Power0.easeNone}, '=-.2');
tl3.from('#btn4', .5, {x:200, opacity:0, ease:Power0.easeNone}, '=-.2');

const scene = new ScrollMagic.Scene({
  triggerElement: '.project-1',
  triggerHook: 'onLeave',
  duration: '100%'
})
  .setPin('.project-1')
  .setTween(tl)
    .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: '.right-side__description'
})
  .setTween(tl2)
    .addTo(controller);


const scene3 = new ScrollMagic.Scene({
   triggerElement: '.project-2',
   triggerHook: 'onLeave',
   duration: '100%'
})
  .setPin('.project-2')
  .setTween(tl3)
    .addTo(controller);
    
const scene4 = new ScrollMagic.Scene({
  triggerElement: '.left-side__description'
})
  .setTween(tl4)
    .addTo(controller);

function updatePercentage() {
  tl.progress();
  t3.progress();
}