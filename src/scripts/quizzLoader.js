var QuizzLoader = (function(){
    var prevLink = document.querySelector('a.prev');
    var nextLink = document.querySelector('a.next');
    var barbaContainer;

    var currentGame;
    var questionId;

    var quizzId;
    var quizz = null;

    var userAnswer = null;

    var _switchingQuestion = false;
    var _switchingAnswer = false;

    var gameFactories = {
        'intro': Intro,
        'outro': Outro,
        'default': DefaultGame,
        'chained': ChainedGame,
        'cursor': CursorGame,
        'map': MapGame,
        'answer': AnswerPopup,
    };

    var _hasPrevious = function() {
        return questionId > 0;
    };

    var _hasNext = function() {
        if (!quizz)
            return false;
        return questionId < quizz.length + 1;
    };

    var _getUrl = function(q) {
        return 'index.html?q=' + q + (quizz ? "&quizz=" + quizzId : '');
    }

    return {
        init: function() {
            const urlParams = new URLSearchParams(window.location.search);
            quizzId = parseInt(urlParams.get('quizz'));
            if (!isNaN(quizzId))
                quizz = GAME.quizzes[quizzId].quizz;

            this.updateLinks(document.querySelector('div.barba-container'));
            this.loadCurrent(barbaContainer);

            _switchingQuestion = false;
            _switchingAnswer = false;
        },

        restart: function() {
            quizz = null;
            _switchingQuestion = true;
            Barba.Pjax.goTo('index.html');
        },

        goNext: function() {
            if (!_hasNext()) return;
            _switchingQuestion = true;
            Barba.Pjax.goTo(_getUrl(questionId + 1));
        },

        selectQuizz: function(id) {
            quizzId = id;
            quizz = GAME.quizzes[id].quizz;
            this.goNext();
        },

        openAnswer: function(res) {
            userAnswer = res;
            _switchingAnswer = true;
            Barba.Pjax.goTo(_getUrl(questionId) + "&answer=1");
        },

        updateLinks: function(container) {
            barbaContainer = container;

            const urlParams = new URLSearchParams(window.location.search);
            questionId = parseInt(urlParams.get('q'));
            if (!questionId) questionId = 0;

            document.getElementsByClassName("progression")[0].setAttribute("src", "/data/images/progression" + questionId + ".svg");
            document.getElementsByClassName("progression")[0].style.visibility = questionId > 0 || questionId < 7 ? "visible" : "node";

            prevLink.setAttribute('href', _getUrl(questionId - 1));
            nextLink.setAttribute('href', _getUrl(questionId + 1));
            barbaContainer.setAttribute('data-prev', _getUrl(questionId - 1));
            barbaContainer.setAttribute('data-next', _getUrl(questionId + 1));

            prevLink.style.display = _hasPrevious() ? 'block' : 'none';
            nextLink.style.display = _hasNext() ? 'block' : 'none';

            _switchingQuestion = false;
            _switchingAnswer = false;

            //prevLink.style.display = 'none';
            //nextLink.style.display = 'none';
        },

        loadCurrent: function(container) {
            //container.querySelector('label.question-num').innerHTML = questionId;

            var data, type;

            const urlParams = new URLSearchParams(window.location.search);
            _isAnswer = parseInt(urlParams.get('answer'));

            if (questionId == 0 || questionId > quizz.length) {
                data = GAME;
                type = questionId == 0 ? 'intro' : 'outro';
            } else {
                if (!quizz[questionId-1]) {     // -1 parceque sinon on saute la première question
                    container.querySelector('div.question-container').innerHTML = '[Question not found]';
                    return;
                }

                data = quizz[questionId-1]; // -1 parceque sinon on saute la première question

                if (!isNaN(_isAnswer) && _isAnswer === 1 && userAnswer !== null) {
                    type = 'answer';
                    data.userAnswer = userAnswer;
                } else {
                    type = data.type;
                }
            }

            if (document.getElementsByClassName("progression").length) {
                document.getElementsByClassName("progression")[0].setAttribute("src", "/data/images/progression" + questionId + ".svg");
                document.getElementsByClassName("progression")[0].style.visibility = questionId > 0 || questionId < 7 ? "visible" : "node";
            }

            var _this = this;
            currentGame = gameFactories[type](this);

            currentGame.build(data, container.querySelector('div.question-container'));
        },

        isSwitchingQuestion: function() {
            return _switchingQuestion;
        },
        isSwitchingAnswer: function() {
            return _switchingAnswer;
        },

        getUrl : _getUrl,
        getQuestionId: function() { return questionId; },
    }
})();
