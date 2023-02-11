let button = document.querySelector('#button');
let person = document.querySelector('.person');
let quote = document.querySelector('.quote');

const quotes = [
	{
		quote: '"It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default"',
		person: 'J.K. Rowling'
	},
	{
		quote: '"Don\'t cry because it\'s over. Smile because it happened."',
		person: 'Dr. Seuss'
	},
	{
		quote: '"Anyone who has never made a mistake has never tried anything new."',
		person: 'Dr.Seuss'
	},
	{
		quote: '"All that is gold does not glitter, not all those who wander are lost; the old that is strong. Does not wither, deep roots are not reached by the frost."',
		person: 'J.R.R. Tolkien'
	},
	{
		quote: '“Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.”',
		person: 'Mark Twain'
	},
	{
		quote: '"Life is tough my darling, but so are you."',
		person: 'Stephanie Bennett Henry'
	},
	{
		quote: '“An investment in knowledge always pays the best interest.”',
		person: 'Benjamin Franklin'
	}
];

button.addEventListener('click', change_quote);

function change_quote(){
	let random = Math.floor(Math.random()*quotes.length);
	quote.innerText = quotes[random].quote;
	person.innerText = quotes[random].person;
	console.log('clicked');
}