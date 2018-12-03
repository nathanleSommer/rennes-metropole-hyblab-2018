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

            container.innerHTML =
                '<h3>' + question.title + '</h3><br />' +
                '<input class="ans0" type="button" value="' + question.choices[0] + '"/>' +
                '<input class="ans1" type="button" value="' + question.choices[1] + '"/>' +
                '<input class="ans2" type="button" value="' + question.choices[2] + '"/>';

            var _this = this;
            container.querySelector('input.ans0').onclick = function() { _this.onAnswer(0); };
            container.querySelector('input.ans1').onclick = function() { _this.onAnswer(1); };
            container.querySelector('input.ans2').onclick = function() { _this.onAnswer(2); };
        },

        onAnswer: _onanswer,
    }

});