var QuizzLoader = (function(){
    var prevLink = document.querySelector('a.prev');
    var nextLink = document.querySelector('a.next');
    var barbaContainer;

    var currentGame;
    var questionId;

    var gameFactories = {
        'default': DefaultGame,
    };

    var _hasPrevious = function() {
        return questionId > 0;
    }

    var _hasNext = function() {
        return questionId < QUIZZ.length;
    }

    return {
        init: function() {
            this.updateLinks(document.querySelector('div.barba-container'));
            this.loadCurrent(barbaContainer);
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
            
            currentGame = gameFactories[QUIZZ[questionId].type]();
            currentGame.build(QUIZZ[questionId], container.querySelector('div.question-container'));
        }
    }

})();
