let openbtn = document.getElementById('open-btn');
let modalcont = document.getElementById('container');
let closebtn = document.getElementById('close-btn');

openbtn.addEventListener('click', function() {
	modalcont.style.display = 'block';
});

closebtn.addEventListener('click', function(){
	modalcont.style.display = 'none';
});

window.addEventListener('click', function(e){
	if(e.target == modalcont){
		modalcont.style.display = 'none';
	}
});