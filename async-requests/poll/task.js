function sendGetRequest(url, callback) {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.addEventListener('load', function (){
		if (xhr.status === 200) {
			callback(JSON.parse(xhr.responseText));
		}
	});
	xhr.send();
}

function displayPoll(poll) {
	const pollTitle = document.getElementById('poll__title');
	const pollAnswers = document.getElementById('poll__answers');

	pollTitle.textContent = poll.data.title;

	while (pollAnswers.firstChild) {
		pollAnswers.firstChild.remove();
	}

	poll.data.answers.forEach(function (answer) {
		const answerButton = document.createElement('button');
		answerButton.className = 'poll__answer';
		answerButton.textContent = answer;
		answerButton.addEventListener('click',  () => alert('Спасибо, ваш голос засчитан!'));
		pollAnswers.appendChild(answerButton);
	});
}

sendGetRequest ('https://students.netoservices.ru/nestjs-backend/poll', 
	function (response) {
		displayPoll(response);
	}
);