const value = document.querySelector('.dropdown__value');
value.addEventListener('click', function ()  {
	document.querySelector('.dropdown__list').classList.add('dropdown__list_active')  
});

const list = document.querySelector('.dropdown__list');



const item = Array.from(document.querySelectorAll('.dropdown__item'));
item.forEach(items => {
	items.addEventListener('click', (event) => {
		event.preventDefault();
		value.textContent = items.textContent;
		list.classList.remove('dropdown__list_active')	
	});
});

