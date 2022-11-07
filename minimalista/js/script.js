//navbar/sidebar

const menuBtn = document.querySelectorAll('.menu-btn');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu li');

//toggle siderbar open/close

menuBtn.forEach(btn => {
    btn.addEventListener('click', sideNavToggle);
});

function sideNavToggle() {
    //aniamtion delay
    let delay = 100;
    //toggle open class
    menu.classList.toggle('menu-open');


    //sidenav link slide animations
    setTimeout(() => {
        //reset animations ofter all of them end
        resetAnimation();
    }, delay * (links.length + 1));

    
    //add animation to link
    links.forEach(links => {
        //opacity
        links.style.opacity = "0";
        //animation
        links.style.amimation = "slideIn 400ms ease-in-out forwards";
        //dealay
        links.style.animationDelay = delay + "ms";
        delay += 100;
    });

    //*reset animations so they can be activated again*/

    function resetAnimation() {
        //select all links
        links.forEach(links => {
            //remove animations
            links.style.animation = "none";
            //set opacity back to default
            links.style.opacity = "1";
        });
    }
}

//slider

const cntrl = document.querySelectorAll('.slider-cntrl');
const cntrlMob = document.querySelectorAll('.pagination-mobile > li');
const title = document.querySelector('.title');
const subTitle = document.querySelectorAll('.sub-title');
const img = document.querySelector('.thumbnail');
const count = document.querySelector('.slider-count');
const progress = document.querySelector('.progress div');

let id = 0;

//data
//array with image paths for the slider

const images = [
    './img/img1.jpg',
    './img/img2.jpg',
    './img/img3.jpg',
];

//progress widths for the slider

const progressWidth = [
    '33%',
    '66%',
    '100%',
];

//text varoations for the slider
const text = [
    'Work',
    'Active',
    'Travel',
];

//pagination controls

for(let i= 0; i < cntrl.length; i++){
    //add click event for all pagination
    cntrl[i].addEventListener('click', () => {
        //run the slider finction
        slider(i);
        //set ia too clicked pagination index
        id = i;
        //stop auto slider
        stopAutoSlide();
    });

    //add click event for all pagination on mobile
    cntrlMob[i].addEventListener('click', () => {
        //run the slider function
        slider(i);
        //set id to clicked pagination index
        id = i;
        //stop autp slide
        stopAutoSlide();
    });
}

function slider(i) {
    //change thumbnail image
    img.src = images[i];
    //ptogress progression
    progress.style.Width = progressWidth[i];
    //change title
    title.innerText = text[i] + " Collection";
    //change sub title
    subTitle.forEach(sub => {
        sub.innerText = text[i] + "Collection"
    });

    //change slide number

    count.innerText = "/0" + (i +1);

    //remove active class from all
    for(let i = 0; i < cntrl.length; i++) {
        cntrl[i].classList.remove('active');
        cntrlMob[i].classList.remove('pag-active');
    }

    //reset active class to clicked alement
    cntrl[i].classList.add('active');
    cntrlMob[i].classList.add('pag-active');
}

//slider automation
function nextSlide() {
    //increment img id
    idd++;

    //*check if id is greater than the number of avaiLable slides*/
    if(id > cntrl.length - 1) {
        id = 0;
    }

    //run the slider function
    slider(id);
}

    //stop automatic slide
let autoSlide = setInterval(nextSlide, 10000);

//STOP AUTOMATIC SLIDE
function stopAutoSlide() {
    clearInterval(autoSlide);

    //restart auto slider
    autoSlide = setInterval(nextSlide, 10000);
}