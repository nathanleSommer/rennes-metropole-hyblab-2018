var Intro = (function(quizz){

    var container;
    var i = 0;

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
                    container.querySelector('input.select-quizz-difficulty-' + index).onclick = function() { 
                        i = index;
                        var matches = document.querySelectorAll('.intro-difficulty-input').forEach(x => x.classList.remove('intro-difficulty-clicked'));
                        console.log(matches);
                        document.getElementById('quizz-difficulty-' + index).classList.add('intro-difficulty-clicked');
                    };
                });

                container.querySelector('input.start-quizz').onclick = function() { 
                    console.log(i);
                    _this.start(i); 
                };
            });
        },

        start: _start,
    }

});