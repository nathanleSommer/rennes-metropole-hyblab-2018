var CursorGame = (function(quizz){

    var container;
    var question;
    var min,max;
    var step;
    var threshold=10; // right answer will be RA+-threshold and threshold is a percentage of the available values
    var output;

    var _onvalidate = function() {
                        var error = (max-min)*(threshold/100);

                        if ( question.answer-error <= output.value & question.answer+error >= output.value){
                            //Affiche le panneau de réponse au moment où l'on clique sur une proposition
                            document.getElementById('answer--wrapper--correct').classList.toggle('close');
                            document.getElementById('answer--wrapper--correct').onclick = function(){
                                document.getElementById('answer--wrapper--correct').classList.toggle('close');
                                quizz.goNext();
                            };
                        } else {
                            //Affiche le panneau de réponse au moment où l'on clique sur une proposition
                            document.getElementById('answer--wrapper--correct').classList.toggle('close');
                            document.getElementById('answer--wrapper--correct').onclick = function(){
                                document.getElementById('answer--wrapper--correct').classList.toggle('close');
                                quizz.goNext();
                            };
                        }
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





