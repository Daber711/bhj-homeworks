let deadCount = 0;
let lostCount = 0;

const holes = document.querySelectorAll('.hole');
holes.forEach(hole => {
	hole.addEventListener('click', () => {
		if (hole.classList.contains('hole_has-mole')) {
			deadCount++;
			document.getElementById('dead').textContent = deadCount;
			if (deadCount === 10) {
				alert('Вы выиграли!');
				resetCounts();
			}
		} else {
			lostCount++;
			document.getElementById('lost').textContent = lostCount;
			// проверяем условие поражения
			if (lostCount === 5) {
				alert('Вы проиграли!');
				resetCounts();
			}
		}
	});
});

function resetCounts() {
	deadCount = 0;
	lostCount = 0;
	document.getElementById('dead').textContent = deadCount;
	document.getElementById('lost').textContent = lostCount;
}