let icon = document.querySelector('.menu');
let ul = document.querySelector('.links');
let spans = document.querySelectorAll('.menu span');

icon.onclick = function () {
	ul.classList.toggle('fill-hei');
	spans[0].classList.toggle('change');
	spans[1].classList.toggle('opacity');
	spans[2].classList.toggle('change');
	spans[0].classList.toggle('rot-1');
	spans[2].classList.toggle('rot-2');
};

ul.onclick = function () {
	ul.classList.remove('fill-hei');
	spans[0].classList.remove('change');
	spans[1].classList.remove('opacity');
	spans[2].classList.remove('change');
	spans[0].classList.remove('rot-1');
	spans[2].classList.remove('rot-2');
}
document.body.addEventListener('click', function (e) {
	if (
		e.target.classList.contains('menu') ||
		e.target.classList.contains('change') ||
		e.target.classList.contains('opacity')
	) {
		
	} else {
		ul.classList.remove('fill-hei');
		spans[0].classList.remove('change');
		spans[1].classList.remove('opacity');
		spans[2].classList.remove('change');
		spans[0].classList.remove('rot-1');
		spans[2].classList.remove('rot-2');
	}
});

// Landing
var i = 0;
var txt = 'Full-Stack Developer';
var speed = 80;

function typeWriter() {
	if (i < txt.length) {
		document.getElementById('demo').innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}
typeWriter()
// Landing


