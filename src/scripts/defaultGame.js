var DefaultGame = (function(){

    var container;
    var question;

    return {
        build: function(q, c) {
            container = c;
            question = q;

            container.innerHTML = question.title;
        }
    }

});