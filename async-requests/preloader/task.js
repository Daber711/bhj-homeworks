const itemsElement = document.getElementById('items');
const loaderElement = document.getElementById('loader');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);

loaderElement.classList.add('loader_active');

xhr.addEventListener('readystatechange', function () {
	if(xhr.readyState === XMLHttpRequest.DONE) {
		if(xhr.status === 200) {
			const response = JSON.parse(xhr.responseText);
			const valute = response.response.Valute;

			itemsElement.innerHTML = '';

			for(const key in valute) {
				const currency = valute[key];

				const itemElement = document.createElement('div');
				itemElement.className = 'item';

				const codeElement = document.createElement('div');
				codeElement.className = 'item__code';
				codeElement.textContent = currency.CharCode;

				const valueElement = document.createElement('div');
				valueElement.className = 'item__value';
				valueElement.textContent = currency.Value;

				const currencyElement = document.createElement('div');
				currencyElement.className = 'item__currency';
				currencyElement.textContent = 'руб';

				itemElement.appendChild(codeElement);
				itemElement.appendChild(valueElement);
				itemElement.appendChild(currencyElement);
				itemsElement.appendChild(itemElement);
			}
		}

		loaderElement.classList.remove('loader_active');
	}
});

xhr.send();