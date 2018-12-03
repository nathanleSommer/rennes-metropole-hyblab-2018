var CursorGame = (function(quizz){

    var container;
    var question;
    var min,max;
    var step;
    var threshold=10; // right answer will be RA+-threshold and threshold is a percentage of the available values
    var output;
    var imgSrc;
    var i0,i1,i2,i3,i4; //images with lowest level as i1 and highest as i5
    var imgThreshold; // numbers associated to one image

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
                            document.getElementById('answer--wrapper--incorrect').classList.toggle('close');
                            document.getElementById('answer--wrapper--incorrect').onclick = function(){
                                document.getElementById('answer--wrapper--incorrect').classList.toggle('close');
                                quizz.goNext();
                            };
                        }
                    };
    

    return {
        build: function(q, c) {
            container = c;
            question = q;
            
            i0 = "data/images/i0.png"
            i1 = "data/images/i1.png"
            i2 = "data/images/i2.png"
            i3 = "data/images/i3.png"
            i4 = "data/images/i4.png"
            
            var _this=this;

            TemplateLoader.getTemplate(question.type, template =>{
                min= question.range[0];
                max= question.range[1];
                imgThreshold = (max - min) / 5
                container.innerHTML = template(question);

                var rangeslider = document.getElementById("myRange");
                output = document.getElementById("demo");
                output.innerHTML = rangeslider.value;
                   
                rangeslider.oninput = function() {
                    output.innerHTML = this.value;
                    // TODO : charger les 5 images sur la page et faire disparaitre avec l'attribut hidden de CSS
                    if(min <= this.value & this.value < min + imgThreshold){
                        imgSrc=i0;
                    } else if(min+imgThreshold <= this.value & this.value < min + 2*imgThreshold){
                        imgSrc=i1;
                    } else if(min+ 2* imgThreshold <= this.value & this.value < min + 3*imgThreshold){
                        imgSrc=i2;
                    } else if(min+ 3* imgThreshold <= this.value & this.value < min + 4*imgThreshold){
                        imgSrc=i3;
                    } else if(min+ 4* imgThreshold <= this.value & this.value <= min + 5*imgThreshold){
                        imgSrc=i4;
                    }

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





