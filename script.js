const items = Array.from(document.querySelectorAll(".item"));

items.forEach((item)=>{
    const img = item.querySelector(".item-img");
    gsap.set(img,{ scale: 0});
});

function setScale(){
    items.forEach((item)=>{
        const img = item.querySelector(".item-img");
        const rect = item.getBoundingClientRect(); 

        const viewportHeight = window.innerHeight;
        const itemCenter = rect.top + rect.height/2;

        const distanceFromCenter = Math.abs(viewportHeight/2 - itemCenter);

        const progress = distanceFromCenter / (viewportHeight / 2);

        const adjustedProgress = Math.pow(progress,2);

        let scale = 1 - adjustedProgress* 0.5;
        scale = Math.max(0, Math.min(scale, 1));

        gsap.to(img,{scale: scale, duration: 0.1});


    });
}

setScale();

window.addEventListener("scroll",setScale);
let scrollY = 0;
let oldScrollY = 0;
let roundedScrollY = 0;
const lerpAmount = 0.1;

function lerp(start, end, t){
    return start * (1- t) + end * i;

}

function animate(){
    requestAnimationFrame(animate);

    roundedScrollY = lerp(roundedScrollY, scrollY, lerpAmount);

    document.querySelector(
        ".container"
    ).style.transform = `translate3d(0, ${-roundedScrollY}px, 0)`;

    setScale();
}

window.addEventListener("scroll", (e) => {
    scrollY = window.scrollY;
});

animate();