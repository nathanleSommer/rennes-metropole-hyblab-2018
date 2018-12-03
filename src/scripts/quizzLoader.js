var QuizzLoader = (function(){
    var prevLink = document.querySelector('a.prev');
    var nextLink = document.querySelector('a.next');
    var barbaContainer;

    var currentGame;
    var questionId;

    var quizzId;
    var quizz = null;

    var gameFactories = {
        'intro': Intro,
        'default': DefaultGame,
        'cursor': CursorGame
    };

    var _hasPrevious = function() {
        return questionId > 0;
    };

    var _hasNext = function() {
        if (!quizz)
            return false;
        return questionId < quizz.length;
    };

    var _getUrl = function(q) {
        return 'index.html?q=' + q + (quizz ? "&quizz=" + quizzId : '');
    }

    return {
        init: function() {
            const urlParams = new URLSearchParams(window.location.search);
            quizzId = parseInt(urlParams.get('quizz'));
            if (quizzId !== null)
                quizz = GAME.quizzes[quizzId].quizz;

            this.updateLinks(document.querySelector('div.barba-container'));
            this.loadCurrent(barbaContainer);
        },

        goNext: function() {
            if (!_hasNext()) return;

            Barba.Pjax.goTo(_getUrl(questionId + 1));
        },

        selectQuizz: function(id) {
            quizzId = id;
            quizz = GAME.quizzes[id].quizz;
            this.goNext();
        },

        updateLinks: function(container) {
            barbaContainer = container;

            const urlParams = new URLSearchParams(window.location.search);
            questionId = parseInt(urlParams.get('q'));
            if (!questionId) questionId = 0;

            prevLink.setAttribute('href', _getUrl(questionId - 1));
            nextLink.setAttribute('href', _getUrl(questionId + 1));
            barbaContainer.setAttribute('data-prev', _getUrl(questionId - 1));
            barbaContainer.setAttribute('data-next', _getUrl(questionId + 1));

            prevLink.style.display = _hasPrevious() ? 'block' : 'none';
            nextLink.style.display = _hasNext() ? 'block' : 'none';
        },

        loadCurrent: function(container) {
            container.querySelector('label.question-num').innerHTML = questionId;
            if (questionId != 0){
                if (!quizz[questionId-1]) {     // -1 parceque sinon on saute la première question
                    container.querySelector('div.question-container').innerHTML = '[Question not found]';
                    return;
                }

                var data, type;
                data = quizz[questionId-1]; // -1 parceque sinon on saute la première question
                type = data.type;
                
            }else{
                var data, type;
                data = INTRO;
                type = 'intro';
            }
            var _this = this;
            currentGame = gameFactories[type](this);

            currentGame.build(data, container.querySelector('div.question-container'));
        }
    }

})();
