var DefaultGame = (function(quizz){

    var container;
    var question;

    var _onanswer = function(qId) {
        if (qId === question.answer)
            quizz.success();
    };

    return {
        build: function(q, c) {
            container = c;
            question = q;

            var _this = this;
            TemplateLoader.getTemplate(question.type, template => {

                container.innerHTML = template(question);

                container.querySelector('input.ans0').onclick = function() { _this.onAnswer(0); };
                container.querySelector('input.ans1').onclick = function() { _this.onAnswer(1); };
                container.querySelector('input.ans2').onclick = function() { _this.onAnswer(2); };
            });
        },

        onAnswer: _onanswer,
    }

});