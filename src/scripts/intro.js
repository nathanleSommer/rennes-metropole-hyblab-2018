var Intro = (function(quizz){

    var container;

    var _start = function() {
        quizz.success();
    };

    return {
        build: function(data, c) {
            container = c;
            question = data;

            container.innerHTML =
                '<h3>' + question.title + '</h3><br />' +
                '<input class="start" type="button" value="Commencer"/>';

            var _this = this;
            container.querySelector('input.start').onclick = function() { _this.start(); };
        },

        start: _start,
    }

});