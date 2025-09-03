document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.getElementById('question-container');
    const answerButtons = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-btn');
    const addForm = document.getElementById('add-question-form');

    let currentQuestionIndex = 0;
    let questions = [];
    let score = 0;
    let total = 0;

    function loadQuestions() {
        fetch('/api/questions')
            .then(response => response.json())
            .then(data => {
                questions = data;
                currentQuestionIndex = 0;
                score = 0;
                total = 0;
                updateScoreDisplay();
                showQuestion();
            })
            .catch(err => {
                questionContainer.innerText = "Fehler beim Laden der Fragen: " + err;
            });
    }

    function showQuestion() {
        resetState();
        const question = questions[currentQuestionIndex];
        questionContainer.innerText = question.question;

        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.innerText = answer;
            button.classList.add('btn');
            if (index === question.correct) {
                button.dataset.correct = true;
            }
            button.addEventListener('click', selectAnswer);
            answerButtons.appendChild(button);
        });
    }

    function resetState() {
        nextButton.classList.add('hide');
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct === "true";

        // Punkte aktualisieren
        total++;
        if (correct) {
            score++;
        }
        updateScoreDisplay();

        Array.from(answerButtons.children).forEach(button => {
            setStatusClass(button, button.dataset.correct === "true");
        });
        if (currentQuestionIndex < questions.length - 1) {
            nextButton.classList.remove('hide');
        } else {
            nextButton.innerText = 'Neu starten';
            nextButton.classList.remove('hide');
        }
    }

    function updateScoreDisplay() {
        const scoreDiv = document.getElementById("score");
        if (scoreDiv) {
            scoreDiv.innerText = `Punkte: ${score}/${total}`;
        }
    }

    function setStatusClass(element, correct) {
        clearStatusClass(element);
        if (correct) {
            element.classList.add('correct');
        } else {
            element.classList.add('wrong');
        }
    }

    function clearStatusClass(element) {
        element.classList.remove('correct');
        element.classList.remove('wrong');
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            currentQuestionIndex = 0;
            loadQuestions(); // vollständiger Reload + Score reset
        }
    });

    if (addForm) {
        addForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(addForm);
            const newQuestion = {
                question: formData.get('question'),
                answers: [
                    formData.get('a'),
                    formData.get('b'),
                    formData.get('c'),
                    formData.get('d')
                ],
                correct: parseInt(formData.get('correct')),
                explanation: formData.get('explanation') || ""
            };

            fetch('/api/questions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newQuestion)
            })
            .then(res => res.json())
            .then(data => {
                alert("Frage erfolgreich gespeichert!");
                addForm.reset();
                loadQuestions();
            })
            .catch(err => {
                alert("Fehler beim Speichern der Frage: " + err);
            });
        });
    }

    loadQuestions();
});

