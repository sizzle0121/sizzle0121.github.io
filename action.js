
var counterCoffeeReach = false, counterProjectsReach = false;
function SkillsEnter(){
	var sec = document.getElementById("Skills");
	var scrollY = window.pageYOffset;
	var scrollUnit = sec.scrollHeight;

	//console.log(scrollY);
	//console.log(scrollUnit);

	if(scrollY > 2.6*scrollUnit){
		var ids = ["#Skills-bar-python-done", "#Skills-bar-DRL-done", "#Skills-bar-team-done", "#Skills-bar-c-done", "#Skills-bar-algo-done", "#Skills-bar-math-done"];
		setTimeout(() => {
			for(var i=0; i<3; i++){
				const skill = document.querySelector(ids[i]);
				skill.style.width = skill.getAttribute('data-done') + '%';
				skill.style.opacity = 1;
			}
		}, 100);
		setTimeout(() => {
			for(var i=3; i<6; i++){
				const skill = document.querySelector(ids[i]);
				skill.style.width = skill.getAttribute('data-done') + '%';
				skill.style.opacity = 1;
			}
		}, 1000);
	}

	if(scrollY > 0.6*scrollUnit){
		var i = 0, j = 0;
		if(counterCoffeeReach == false){
			var cntCoffee = setInterval(function() {     
				if(i < 547)
					document.getElementById("counter-Coffee").innerHTML = ++i;
				else
					clearInterval(cntCoffee);
			}, 5500 / 547);
			counterCoffeeReach = true;
		}
		if(counterProjectsReach == false){
			var cntProjects = setInterval(function() {     
				if(j < 12)
					document.getElementById("counter-Project").innerHTML = ++j;
				else
					clearInterval(cntProjects);
			}, 5500 / 12);
			counterProjectsReach = true;
		}
	}

}

window.addEventListener("scroll", SkillsEnter);


function toggleSideBar(){
	document.querySelector('#side-bar').classList.toggle('side-bar-active');
	document.querySelector('#main-container').classList.toggle('main-container-active');
	document.querySelector('#particles-js').classList.toggle('particles-js-active');
	if(document.querySelector('.fa-chevron-right')){
		document.querySelector('#toggle-button-icon').classList.remove('fa-chevron-right');
		document.querySelector('#toggle-button-icon').classList.add('fa-chevron-left');
	}else if(document.querySelector('.fa-chevron-left')){
		document.querySelector('#toggle-button-icon').classList.remove('fa-chevron-left');
		document.querySelector('#toggle-button-icon').classList.add('fa-chevron-right');
	}
}

history.scrollRestoration = "manual";
window.onbeforeunload = function () {
	document.querySelector('html').style.scrollBehavior = '';
 	window.scrollTo(0, 0);
 	document.querySelector('html').style.scrollBehavior = 'smooth';
}


