const acc = document.getElementsByClassName('content-container');

for(let i = 0; i<acc.length; i++){
	acc[i].addEventListener('click', function(){
		this.classList.toggle('active');
	});
}

// console.log(acc.length);