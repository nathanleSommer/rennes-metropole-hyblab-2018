var Outro = (function(quizz){

    var container;

    var _restart = function() {
        quizz.restart();
    };

    return {
        build: function(data, c) {
            container = c;

            var _this = this;

            TemplateLoader.getTemplate('outro', template => {

                container.innerHTML = template(data);

                container.querySelector('input.restart-game').onclick = function() { _this.restart(); };
            });
        },

        restart: _restart,
    }

});