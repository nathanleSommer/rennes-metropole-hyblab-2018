var DefaultGame = (function(quizz){

    var container;
    var question;

    var _onanswer = function(qId) {
        if (qId === question.answer) {
            
            //Affiche le panneau de réponse au moment où l'on clique sur une proposition
            document.getElementById('answer--wrapper--correct').classList.toggle('close');
            document.getElementById('answer--wrapper--correct').onclick = function(){
                document.getElementById('answer--wrapper--correct').classList.toggle('close');
                quizz.goNext();
            };
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