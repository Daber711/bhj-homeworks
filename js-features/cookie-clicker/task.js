const cookie = document.getElementById('cookie')
const clicker = document.getElementById('clicker__counter')

let cookieCounter = 0;

cookie.onclick = function () {
	cookieCounter +=1;
	cookie.width === 200 ? (cookie.width = 150) : (cookie.width = 200);
	clicker.textContent = cookieCounter;
}