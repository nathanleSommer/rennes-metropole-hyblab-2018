var AnswerPopup = (function(quizz){

    var container;
    var question;
    var userAnswer;
    
    return {
        build: function(q, c) {
            container = c;
            question = q;
            userAnswer = q.userAnswer;

            var _this = this;
            TemplateLoader.getTemplate('answer.' + question.type, template => {

                container.innerHTML = template(question);

                container.querySelector('input.go-next').onclick = function() { quizz.goNext(); };
            });
        },
    }

});