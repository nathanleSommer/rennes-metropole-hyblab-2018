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
            
            var _this=this;

            TemplateLoader.getTemplate(question.type, template =>{
                container.innerHTML = template(question);

                var rangeslider = document.getElementById("myRange");
                output = document.getElementById("demo");
                output.innerHTML = rangeslider.value;
                   
                rangeslider.oninput = function() {
                    output.innerHTML = this.value;
                }
                
                container.querySelector('input.checker').onclick = function() { _this.onValidate(); };
                console.dir(container);
                var rangeSliderContainer = document.querySelector('.range-slidecontainer');
                rangeSliderContainer.style.height = rangeSliderContainer.offsetWidth + 'px';    
            });
           
            },
        onValidate: _onvalidate,
    }

});





