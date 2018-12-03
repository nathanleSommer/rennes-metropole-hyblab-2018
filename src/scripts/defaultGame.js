var DefaultGame = (function(quizz){

    var container;
    var question;

    var _onanswer = function(qId) {
        if (qId === question.answer) {
            quizz.openAnswer(qId);
        } else {
            let answered = container.querySelector('input.ans' + qId);

            answered.classList.add('btn-danger');
            answered.classList.add('disabled');
            answered.disabled = true;
        }
    };

    return {
        build: function(q, c) {
            container = c;
            question = q;

            var _this = this;
            TemplateLoader.getTemplate(question.type, template => {

                container.innerHTML = template(question);

                question.choices.forEach(function (choice, index) {
                    container.querySelector('input.ans' + index).onclick = function() { _this.onAnswer(index); };
                });
            });
        },

        onAnswer: _onanswer,
    }

});