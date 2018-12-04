var Outro = (function(quizz){

    var container;

    var _restart = function() {
        quizz.restart();
    };

    var _about = function() {
        quizz.openAnswer({});
    }

    return {
        build: function(data, c) {
            container = c;

            var _this = this;

            TemplateLoader.getTemplate('outro', template => {

                container.innerHTML = template(data);

                container.querySelector('input.restart-game').onclick = function() { _this.restart(); };
                container.querySelector('input.about').onclick = function() { _this.about(); };
            });
        },

        restart: _restart,
        about: _about,
    }

});