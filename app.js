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

t1.from( "#title", .5, { opacity: 0, scale: 0 });
if(W > 1050){
    t1.to("#title",.3,{top: "7%"});
    t1.to("#title",.3,{left: "55%",color: "#ffffff",});
    t1.to("#cover-bg-about", .5, {clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"}, "=-.6");
}else if (W <= 1050 && W > 768){
    t1.to("#title",.3,{top: "7%",});
    t1.to("#title",.3,{left: "20%", color: "#ffffff"}); 
    t1.to("#cover-bg-about", .5, {clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"}, "=-.6");
}
else if(W <= 768){
    t1.to("#title",.3,{top: "7%",});
    t1.to("#title",.3,{left: "20%", color: "#ffffff"}); 
    t1.to("#cover-bg-about", .5, {clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"}, "=-.6");
}

t1.from( "#intro", .5, { x: -200, opacity: 0}, "=-.5");
// t1.to("#interlude-about", .3, {clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)"}, "=+.3");

const sceneAbout = new ScrollMagic.Scene({
    triggerElement: ".About",
    triggerHook: 0,
    duration: 700,
})
.setPin(".About")
.setTween(t1)
.addTo(controller);

var t2_about = new TimelineMax();
t2_about.to(".About", .5, {y: "50vh"});
const sceneAbout2 = new ScrollMagic.Scene({
    triggerElement: ".Experience",
    triggerHook: 1,
    duration: "100%",
})
.setTween(t2_about)
.addTo(controller);

// Experience
var t1_exp = new TimelineMax();
t1_exp.from("#title-exp", .5, {opacity: 0, scale: 0});
if(W > 1050){
    t1_exp.to("#title-exp", .1, {top: "5%"});
    t1_exp.to("#title-exp", .1, {left: "15%", color: "#ffffff"});
    t1_exp.to("#cover-bg-exp", .3, {clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)"}, "=-.2");
}
else if(W <= 1050 && W > 768){
    t1_exp.to("#title-exp", .1, {top: "5%"});
    t1_exp.to("#title-exp", .1, {left: "25%", color: "#ffffff"});
    t1_exp.to("#cover-bg-exp",.3, {clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)"}, "=-.2");
}
else if(W <= 768){
    t1_exp.to("#title-exp", .1, {top: "5%"});
    t1_exp.to("#title-exp", .1, {left: "30%", color: "#ffffff"});
    t1_exp.to("#cover-bg-exp", .3, {clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)"}, "=-.2");
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
    t1_exp.from(card, .2, {x:-200, opacity: 0}, "=-.1");
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
        t1_exp.from(line, .05, {height: 0}, "=-.25");
        container_timeline.appendChild(line);
    }
    t1_exp.from(dot, .05, {opacity: 0}, "=-.2");
    container_timeline.appendChild(dot);
}


t1_exp.to("#bg-exp", 2, {y: "-10vh"}, "=-1.3");

const sceneExperience = new ScrollMagic.Scene({
    triggerElement: ".Experience",
    triggerHook: 0,
    duration: 1500,
})
.setPin(".Experience")
.setTween(t1_exp)
.addTo(controller);

var t2_exp = new TimelineMax();
t2_exp.to(".Experience", .5, {y: "50vh"});
const sceneExperience2 = new ScrollMagic.Scene({
    triggerElement: ".Projects",
    triggerHook: 1,
    duration: 1000,
})
.setTween(t2_exp)
.addTo(controller);

// Projects
var t1_pj = new TimelineMax();
if(W > 1050){
    t1_pj.from("#title-pj", .5, {opacity: 0, scale: 0});
    t1_pj.to("#title-pj", .1, {top: "5%"});
    t1_pj.to("#title-pj", .1, {left: "50%", color: "#ffffff"});
    t1_pj.to("#cover-bg-pj", .3, {clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"}, "=-.2");
}
else if(W <= 1050 && W > 768){
    t1_pj.from("#title-pj", .5, {opacity: 0, scale: 0});
    t1_pj.to("#title-pj", .1, {top: "5%"});
    t1_pj.to("#title-pj", .1, {left: "50%", color: "#ffffff"});
    t1_pj.to("#cover-bg-pj", .3, {clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"}, "=-.2");
}
else if(W <= 768){
    t1_pj.from("#title-pj", .5, {opacity: 0, scale: 0});
    t1_pj.to("#title-pj", .1, {top: "5%"});
    t1_pj.to("#title-pj", .1, {left: "50%", color: "#ffffff"});
    t1_pj.to("#cover-bg-pj", .3, {clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"}, "=-.2");
}
var pjs = [
    {
        "title": "Atari Tennis Master",
        "brief": "hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~",
        "image": "atari-tennis.png",
        "tags": ["Python", "Pytorch", "Deep Reinforcement Learning"]
    },
    {
        "title": "Deep Flappy Bird",
        "brief": "hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hellollo~hello~hello~hello~hello~hello~hello~",
        "image": "flappy-bird.png",
        "tags": ["Python", "Pytorch", "Deep Reinforcement Learning"]
    },
    {
        "title": "RL in 2048 Game",
        "brief": "hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hellollo~hello~hello~hello~hello~hello~hello~",
        "image": "2048.png",
        "tags": ["Python", "Pytorch", "Deep Reinforcement Learning"]
    },
    {
        "title": "Naruto Boruto Noruto Baruto",
        "brief": "hello~hello~hello~hello~hello~hello~hello~",
        "image": "naruto.png",
        "tags": ["Python", "Pytorch", "Deep Reinforcement Learning"]
    },
    {
        "title": "DRL in MuJoCo Hopper",
        "brief": "hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hellollo~hello~hello~hello~hello~hello~hello~",
        "image": "mujoco.jpeg",
        "tags": ["Python", "Pytorch", "Deep Reinforcement Learning"]
    }
]
var container_pj = document.getElementById("container-pj");
for(var i = 0; i < pjs.length; i++){
    var new_card = document.createElement("div");
    if((i + 1) % 2 == 1){ // odd card
        new_card.classList.add("card-pj-odd");
        if(W > 1050){
            if(i == 0) t1_pj.from(new_card, .2, {x: -200, opacity: 0});
            else  t1_pj.from(new_card, .2, {x: -200, opacity: 0}, "=+.5");
        }
        else if(W <= 1050 && W > 768){
            if(i == 0) t1_pj.from(new_card, .5, {x: -200, opacity: 0}, "=+1");
            else  t1_pj.from(new_card, .5, {x: -200, opacity: 0}, "=+1");
        }
        else if(W <= 768){
            if(i == 0) t1_pj.from(new_card, .2, {x: -200, opacity: 0});
            else  t1_pj.from(new_card, .2, {x: -200, opacity: 0}, "=+.5");
        }
    }
    else{ // even card
        new_card.classList.add("card-pj-even");
        if(W > 1050){
            if(i == 1) t1_pj.from(new_card, .2, {x: 200, opacity: 0});
            else  t1_pj.from(new_card, .2, {x: 200, opacity: 0}, "=+.5");
        }
        else if(W <= 1050 && W > 768){
            if(i == 1) t1_pj.from(new_card, .5, {x: 200, opacity: 0}, "=+2");
            else  t1_pj.from(new_card, .5, {x: 200, opacity: 0}, "=+2");
        }
        else if(W <= 768){
            if(i == 1) t1_pj.from(new_card, .2, {x: 200, opacity: 0});
            else  t1_pj.from(new_card, .2, {x: 200, opacity: 0}, "=+.5");
        }
    }
    var card_bg = document.createElement("img");
    card_bg.src = PREFIX.concat(pjs[i]["image"]);
    card_bg.classList.add("card-pj-bg");
    new_card.appendChild(card_bg);

    var card_title = document.createElement("p");
    var title = document.createTextNode(pjs[i]["title"]);
    card_title.appendChild(title);
    card_title.classList.add("card-pj-title");
    new_card.appendChild(card_title);

    var card_brief = document.createElement("p");
    var brief = document.createTextNode(pjs[i]["brief"]);
    card_brief.appendChild(brief);
    card_brief.classList.add("card-pj-brief");
	var card_brief_container = document.createElement("div");
	card_brief_container.classList.add("card-pj-brief-container");
    card_brief_container.appendChild(card_brief);
    new_card.appendChild(card_brief_container);

    container_pj.appendChild(new_card);
}
var du = 2500, hook = 0.9;
if(W <= 1050 && W > 768){
    du = 4500;
    hook = 0.8;
}
else if(W <= 768){
    du = 3000;
    hook = 0.7;
}
const sceneProjects = new ScrollMagic.Scene({
    triggerElement: ".Projects",
    triggerHook: hook,
    duration: du,
})
.setTween(t1_pj)
.addTo(controller);



