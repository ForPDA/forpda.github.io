/*
 *		margin header
 */

var body = document.body;
// body.style.height = document.documentElement.clientHeight + "px";

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
