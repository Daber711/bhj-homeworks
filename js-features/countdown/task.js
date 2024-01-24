const addText = function() {
const timerElement = document.getElementById('timer');
timerElement.textContent--;

if (timerElement.textContent <= 0) {
	alert('Вы победили в конкурсе!');
	clearInterval(timerId)
}
}
let timerId = setInterval(addText, 1000);


