var CursorGame = (function(quizz){

    var container;
    var question;
    var min,max;
    var step;
    var output;
    var _onvalidate = function() {
                        if (output.value == question.answer)
                            quizz.goNext();
                    };
    

    return {
        build: function(q, c) {
            container = c;
            question = q;
            min=question.range[0];
            max=question.range[1];
            step= question.step;


            
            container.innerHTML = 
            
                "<div class='slidecontainer'>"+
                "<input type='range' rotate='90deg' min="+ min +" max=" +max +" step=" + step+" value='5' class='slider'  orient='vertical' id='myRange'>"+
                "</div><output id='demo'></output>"+
                '<input class="checker" type="button" value="Valider" />';

            var rangeslider = document.getElementById("myRange");
            output = document.getElementById("demo");
            output.innerHTML = rangeslider.value;
               
            rangeslider.oninput = function() {
                output.innerHTML = this.value;
            }
            var _this=this;
            container.querySelector('input.checker').onclick = function() { _this.onValidate(); };

        },
        onValidate: _onvalidate,
    }

});





