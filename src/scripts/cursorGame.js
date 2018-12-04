var CursorGame = (function(quizz){

    var container;
    var question;
    var min,max;
    var step;
    var threshold=10; // right answer will be RA+-threshold and threshold is a percentage of the available values
    var output;
    var i0,i1,i2,i3,i4; // five cursor images
    var imageType = "immeuble"; // image type name
    var ImgThreshold;
    var imgSrc;

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
            
            i0="data/images/"+imageType +"1.svg";
            i1="data/images/"+imageType +"2.svg";
            i2="data/images/"+imageType +"3.svg";
            i3="data/images/"+imageType +"4.svg";
            i4="data/images/"+imageType +"5.svg";
            console.log("srcs= "+i1+i0+i2+i3+i4);
            var _this=this;

            TemplateLoader.getTemplate(question.type, template =>{
                min= question.range[0];
                max= question.range[1];
                ImgThreshold= (max - min)/5

                question.i0 = i0;
                question.i1 = i1;
                question.i2 = i2;
                question.i3 = i3;
                question.i4 = i4;

                container.innerHTML = template(question);

                var rangeslider = document.getElementById("myRange");
                output = document.getElementById("demo");
                output.innerHTML = rangeslider.value;
                   
                rangeslider.oninput = function() {
                    output.innerHTML = this.value;
                    if(min<= this.value & this.value < min + ImgThreshold){
                        document.getElementById("i2").style.visibility='hidden';
                        document.getElementById("i3").style.visibility='hidden';
                        document.getElementById("i4").style.visibility='hidden';
                        document.getElementById("i5").style.visibility='hidden';
                        document.getElementById("i1").style.visibility='visible';
                        
                    }else if(min + ImgThreshold <= this.value & this.value < min +2* ImgThreshold){
                        document.getElementById("i1").style.visibility='hidden';
                        document.getElementById("i3").style.visibility='hidden';
                        document.getElementById("i4").style.visibility='hidden';
                        document.getElementById("i5").style.visibility='hidden';
                        document.getElementById("i2").style.visibility='visible';

                    }else if(min + 2*ImgThreshold <= this.value & this.value < min +3* ImgThreshold){
                        document.getElementById("i2").style.visibility='hidden';
                        document.getElementById("i1").style.visibility='hidden';
                        document.getElementById("i4").style.visibility='hidden';
                        document.getElementById("i5").style.visibility='hidden';
                        document.getElementById("i3").style.visibility='visible';

                    }else if(min + 3*ImgThreshold <= this.value & this.value < min +4* ImgThreshold){
                        document.getElementById("i2").style.visibility='hidden';
                        document.getElementById("i3").style.visibility='hidden';
                        document.getElementById("i1").style.visibility='hidden';
                        document.getElementById("i5").style.visibility='hidden';
                        document.getElementById("i4").style.visibility='visible';
                        
                    }else if(min + 4*ImgThreshold <= this.value & this.value <= min +5* ImgThreshold){
                        document.getElementById("i2").style.visibility='hidden';
                        document.getElementById("i3").style.visibility='hidden';
                        document.getElementById("i4").style.visibility='hidden';
                        document.getElementById("i1").style.visibility='hidden';
                        document.getElementById("i5").style.visibility='visible';
                        
                    }
                    

                }
                
                container.querySelector('input.checker').onclick = function() { _this.onValidate(); };
                var rangeSliderContainer = document.querySelector('.range-slidecontainer');
                rangeSliderContainer.style.height = rangeSliderContainer.offsetWidth + 'px';    
            });
           
            },
        onValidate: _onvalidate,
    }

});





