var CursorGame = (function(quizz){

    var container;
    var question;
    var min,max;
    var step;
    var threshold=10; // right answer will be RA+-threshold and threshold is a percentage of the available values
    var output;

    var _onvalidate = function() {
        console.log("min= "+min)
        console.log("max= "+max)
        console.log("threshold= "+threshold)

        var error = (max-min)*(threshold/100);
        var success = question.answer-error <= output.value && question.answer+error >= output.value;
        
        console.log("error= "+error)
        
        quizz.openAnswer({
            success: success,
            value: output.value,
        });
    
    };

    return {
        build: function(q, c) {
            container = c;
            question = q;
            
            var _this=this;

            TemplateLoader.getTemplate(question.type, template =>{
                min= question.range[0];
                max= question.range[1];
                container.innerHTML = template(question);

                var rangeslider = document.getElementById("myRange");
                output = document.getElementById("demo");
                output.innerHTML = rangeslider.value;
                   
                rangeslider.oninput = function() {
                    output.innerHTML = this.value;
                }
                
                container.querySelector('input.checker').onclick = function() { _this.onValidate(); };
                var rangeSliderContainer = document.querySelector('.range-slidecontainer');
                rangeSliderContainer.style.height = rangeSliderContainer.offsetWidth + 'px';    
            });
           
            },
        onValidate: _onvalidate,
    }

});





