var Intro = (function(quizz){

    var container;

    var _start = function(index) {
        quizz.selectQuizz(index);
    };

    return {
        build: function(data, c) {
            container = c;

            var _this = this;

            TemplateLoader.getTemplate('intro', template => {

                container.innerHTML = template(data);

                data.quizzes.forEach(function(q, index){
                    container.querySelector('input.select-quizz-' + index).onclick = function() { _this.start(index); };
                });
            });
        },

        start: _start,
    }

});