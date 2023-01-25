var rellax = new Rellax('.rellax');

var btn = document.getElementById('botao-scroll');

var scrollUp = true;
window.addEventListener('scroll', function () {
	if (window.pageYOffset > 2500) {
		btn.style.display = 'flex';
	} else {
		btn.style.display = 'none';
	}
});

function prevDiv() {
	document.getElementById('jaqueta').scrollIntoView();
}
