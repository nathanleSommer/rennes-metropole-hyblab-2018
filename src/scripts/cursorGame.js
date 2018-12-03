var CursorGame = (function(quizz){

    var container;
    var question;
    var min,max;
    var step;
    var output;
    var _onvalidate = function() {
                        if (output.value == question.answer)
                            quizz.success();
                    };
    

    return {
        build: function(q, c) {
            container = c;
            question = q;
            min=question.range[0];
            max=question.range[1];
            step= question.step;


            
            container.innerHTML = 
                "<div class='volumesContainer'>"+
                "<div class='range-slidecontainer'>"+
                "<div class='minContainer'>" +min+ "</div>"+
                "<input class='range-slider' type='range' step="+step+" min="+ min +" max=" +max +" value='5'   id='myRange'>"+
                "<div class='maxContainer'>" +max+ "</div>"+
                "</div><output id='demo'></output>"+
                "<div class='imagesContainer'>"+

                "</div>"+
                "</div>"+
                '<input class="checker" type="button" value="Valider" />';

            var rangeslider = document.getElementById("myRange");
            output = document.getElementById("demo");
            output.innerHTML = rangeslider.value;
               
            rangeslider.oninput = function() {
                output.innerHTML = this.value;
            }
            var _this=this;
            container.querySelector('input.checker').onclick = function() { _this.onValidate(); };
            console.dir(container);
            var rangeSliderContainer = document.querySelector('.range-slidecontainer');
            rangeSliderContainer.style.height = rangeSliderContainer.offsetWidth + 'px';
        },
        onValidate: _onvalidate,
    }

});





