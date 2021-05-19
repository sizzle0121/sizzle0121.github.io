const controller = new ScrollMagic.Controller();
var W = window.innerWidth;

// Home
var PREFIX = "./assets/";
var slider_bgs = ["slider-bg1.jpg", "slider-bg2.jpg", "slider-bg3.jpg"]
var canvas = document.getElementsByClassName("Home")[0];
var show_bg_idx = 0;
var t1_home = new TimelineMax();

for(var i = slider_bgs.length-1; i >= 0; i--){
    var bg = document.createElement("img");
    var pivot = document.getElementById("bg-slider-container-home");
    bg.src = PREFIX.concat(slider_bgs[i]);
    bg.classList.add("bg-in-slider-home");
    if(i == 0) bg.classList.add("fade-in");
    if(i == slider_bgs.length - 1){
        t1_home.to(bg, 1, {y: "15vh"});
    }
    else{
        t1_home.to(bg, 1, {y: "15vh"}, "=-1");
    }
    canvas.insertBefore(bg, pivot);
}

const sceneHome = new ScrollMagic.Scene({
    triggerElement: ".Home",
    triggerHook: 0,
    duration: 1000,
})
.setTween(t1_home)
.addTo(controller);

function slideShow() {
    show_bg_idx += 1;
    show_bg_idx %= slider_bgs.length;
    var bgs = document.getElementsByClassName("bg-in-slider-home");
    for(var i = 0; i < slider_bgs.length; i++){
        bgs[i].classList.remove("fade-in");
    }
    bgs[slider_bgs.length - 1 - show_bg_idx].classList.add("fade-in");
}
setInterval(slideShow, 4000);


// About
var t1 = new TimelineMax();

t1.from( "#title", 1, { opacity: 0, scale: 0 });
if(W > 1050){
    t1.to("#title",.5,{top: "7%"});
    t1.to("#title",.5,{left: "55%",color: "#ffffff",});
    t1.to("#cover-bg-about", 1, {clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"}, "=-1");
}else if (W <= 1050 && W > 768){
    t1.to("#title",.5,{top: "7%",});
    t1.to("#title",.5,{left: "20%", color: "#ffffff"}); 
    t1.to("#cover-bg-about", 1, {clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"}, "=-1");
}
else if(W <= 768){
    t1.to("#title",.5,{top: "7%",});
    t1.to("#title",.5,{left: "20%", color: "#ffffff"}); 
    t1.to("#cover-bg-about", 1, {clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"}, "=-1");
}

t1.from( "#intro", .5, { x: -200, opacity: 0}, "=-.5");
t1.to("#interlude-about", .3, {clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)"}, "=+.3");

const sceneAbout = new ScrollMagic.Scene({
    triggerElement: ".About",
    triggerHook: 0,
    duration: 3000,
})
.setPin(".About")
.setTween(t1)
.addTo(controller);



// Experience
var t1_exp = new TimelineMax();
t1_exp.from("#title-exp", .7, {opacity: 0, scale: 0});
if(W > 1050){
    t1_exp.to("#title-exp", .5, {top: "5%"});
    t1_exp.to("#title-exp", .5, {left: "15%", color: "#ffffff"});
    t1_exp.to("#cover-bg-exp", 1, {clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)"}, "=-1");
}
else if(W <= 1050 && W > 768){
    t1_exp.to("#title-exp", .5, {top: "5%"});
    t1_exp.to("#title-exp", .5, {left: "25%", color: "#ffffff"});
    t1_exp.to("#cover-bg-exp", 1, {clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)"}, "=-1");
}
else if(W <= 768){
    t1_exp.to("#title-exp", .5, {top: "5%"});
    t1_exp.to("#title-exp", .5, {left: "30%", color: "#ffffff"});
    t1_exp.to("#cover-bg-exp", 1, {clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)"}, "=-1");
}
var container = document.getElementById("content-exp");
var container_timeline = document.getElementById("timeline-exp");
var exps = [
    {
        "title": "Teaching Assistant",
        "location": "@ University of Pennsylvania",
        "brief": "🎯 TA of CIS 380 Operating Systems",
        "image": "./assets/upenn-logo.png"
    },
    {
        "title": "Artificial Intelligence Intern",
        "location": "@ URS Robot Inc.",
        "brief": "🎯 Pioneered the research of AI in SLAM\n🎯 Developed AI for obstacle avoidance\n🎯 Analyzed sensor data for bump detection",
        "image": "./assets/ursrobot-logo.png"
    },
    {
        "title": "Undergraduate Researcher",
        "location": "@ NCTU CGI Lab",
        "brief": "🎯 Improved DRL algorithm in sparse-reward environment\n🎯 Analyzed actor-critic based DRL on MuJoCo\n🎯 Improved valued-based DRL on Atari Tennis",
        "image": "./assets/nctu-logo.png"
    }
]

for(var i = 0; i < exps.length; i++){
    // cards
    var card = document.createElement("div");
    card.classList.add("card-exp");
    var content = document.createElement("div");
    content.classList.add("card-content-exp");

    var title = document.createTextNode(exps[i]["title"]);
    var title_tag = document.createElement("p");
    title_tag.classList.add("card-title-exp");
    title_tag.appendChild(title);
    content.appendChild(title_tag);
    var loc = document.createTextNode(exps[i]["location"]);
    var loc_tag = document.createElement("p");
    loc_tag.classList.add("card-loc-exp");
    loc_tag.appendChild(loc);
    content.appendChild(loc_tag);
    var brief = document.createTextNode(exps[i]["brief"]);
    var brief_tag = document.createElement("p");
    brief_tag.classList.add("card-brief-exp");
    brief_tag.appendChild(brief);
    content.appendChild(brief_tag);

    var image = document.createElement("img");
    image.src = exps[i]["image"];
    image.classList.add("card-image-exp");

    card.appendChild(content);
    card.appendChild(image);
    t1_exp.from(card, .5, {x:-200, opacity: 0}, "=-.1");
    container.appendChild(card);
    
    // timeline
    var dot = document.createElement("div");
    dot.classList.add("timeline-dot-exp");
    // var dot_container = document.createElement("div");
    // dot_container.classList.add("timeline-dot-container-exp");
    // dot_container.appendChild(dot);
    if(i != 0){
        var line = document.createElement("div");
        line.classList.add("timeline-line-exp");
        t1_exp.from(line, .2, {height: 0}, "=-.7");
        container_timeline.appendChild(line);
    }
    t1_exp.from(dot, .2, {opacity: 0}, "=-.5");
    container_timeline.appendChild(dot);
}


t1_exp.to("#bg-exp", 2, {y: "-10vh"}, "=-1.3");

const sceneExperience = new ScrollMagic.Scene({
    triggerElement: ".Experience",
    triggerHook: 0,
    duration: 3000,
})
.setPin(".Experience")
.setTween(t1_exp)
.addTo(controller);

