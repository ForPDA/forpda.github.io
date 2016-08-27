/*
 *		header hidden
 */

var body = document.body;
var header = document.querySelector("header");
var header_container = document.querySelector(".header_container");
var nav = document.querySelector("nav");
var header_container_height = header_container.clientHeight;


body.style.paddingTop = header.clientHeight + "px";
window.addEventListener("scroll", function(e) {
	if (nav.getBoundingClientRect().top <= 20) {
		header_container.classList.add("hidden");
		header.classList.add("fixed");
	}
	if (window.pageYOffset < header_container_height) {
		header_container.classList.remove("hidden");
		header.classList.remove("fixed");
	}
});

/*
 *		Gallery	
 */ 

var gallery = document.querySelector('.gallery > div');

var massPic = [
	'light.png',
	'dark.png',
	'black.png',
	'material_light.png',
	'material_dark.png',
	'material_black.png',
	'white_old.png'
];

for (var i = 0; i < massPic.length; i++) {
	var pic = massPic[i];
	var a = document.createElement('a');
	var img = document.createElement('img');
	a.href = 'src/' + pic;
	img.src = 'src/mini-' + pic;
	img.alt = pic;
	a.appendChild(img);
	gallery.appendChild(a);

}

gallery.addEventListener('click', function() {
//	alert(event.target.parentNode.innerHTML);
});
