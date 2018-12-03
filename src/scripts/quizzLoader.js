var QuizzLoader = (function(){
    var prevLink = document.querySelector('a.prev');
    var nextLink = document.querySelector('a.next');
    var barbaContainer;

    var currentGame;
    var questionId;

    var gameFactories = {
        'intro': Intro,
        'default': DefaultGame,
        'cursor': CursorGame
    };

    var _hasPrevious = function() {
        return questionId > 0;
    };

    var _hasNext = function() {
        return questionId < QUIZZ.length;
    };

    return {
        init: function() {
            this.updateLinks(document.querySelector('div.barba-container'));
            this.loadCurrent(barbaContainer);
        },

        goNext: function() {
            if (!_hasNext()) return;

            Barba.Pjax.goTo('index.html?q=' + (questionId + 1));
        },

        updateLinks: function(container) {
            barbaContainer = container;

            const urlParams = new URLSearchParams(window.location.search);
            questionId = parseInt(urlParams.get('q'));
            if (!questionId) questionId = 0;

            prevLink.setAttribute('href', 'index.html?q=' + (questionId - 1));
            nextLink.setAttribute('href', 'index.html?q=' + (questionId + 1));
            barbaContainer.setAttribute('data-prev', 'index.html?q=' + (questionId - 1));
            barbaContainer.setAttribute('data-next', 'index.html?q=' + (questionId + 1));

            prevLink.style.display = _hasPrevious() ? 'block' : 'none';
            nextLink.style.display = _hasNext() ? 'block' : 'none';
        },

        loadCurrent: function(container) {
            container.querySelector('label.question-num').innerHTML = questionId;

            if (!QUIZZ[questionId]) {
                container.querySelector('div.question-container').innerHTML = '[Question not found]';
                return;
            }

            var data, type;
            if (questionId == 0) {
                data = INTRO;
                type = 'intro';
            } else {
                data = QUIZZ[questionId];
                type = data.type;
            }
            
            var _this = this;
            currentGame = gameFactories[type]({
                success: function() {
                    _this.goNext();
                },
            });

            currentGame.build(data, container.querySelector('div.question-container'));
        }
    }

})();
