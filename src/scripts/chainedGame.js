var ChainedGame = (function(quizz){

    var container;
    var question;

    var subQuestionId = 0;
    var subQuestion = null;

    var _onanswer = function(subId, qId) {
        if (qId === subQuestion.answer) {

            // Was it last question ?
            if (subQuestionId == question.questions.length - 1) {
                quizz.openAnswer({});
            } else {
                subQuestionId++;
                Barba.Pjax.goTo(quizz.getUrl(quizz.getQuestionId()) + "&sid=" + subQuestionId);
            }
        } else {
            container.querySelector('input.ans' + subQuestionId + "_" + qId).classList.add('btn-danger');
            container.querySelector('input.ans' + subQuestionId + "_" + qId).classList.add('disabled');
        }
    };

    return {
        build: function(q, c) {
            container = c;
            question = q;

            if (subQuestion === null) {
                subQuestionId = 0;
            }

            const urlParams = new URLSearchParams(window.location.search);
            _sid = parseInt(urlParams.get('sid'));
            if (!isNaN(_sid))
                subQuestionId = _sid;

            subQuestion = question.questions[subQuestionId];

            var _this = this;
            TemplateLoader.getTemplate(question.type, template => {

                container.innerHTML = template({
                    "subQuestionId": subQuestionId,
                    "title": subQuestion.title,
                    "choices": subQuestion.choices,
                    "answer": subQuestion.answer,
                });

                subQuestion.choices.forEach(function (choice, index) {
                    container.querySelector('input.ans' + subQuestionId + "_" + index).onclick = function() { _this.onAnswer(subQuestionId, index); };
                });
            });
        },

        onAnswer: _onanswer,
    }

});