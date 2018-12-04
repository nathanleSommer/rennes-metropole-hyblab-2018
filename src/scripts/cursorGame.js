var CursorGame = (function(quizz){

    var container;
    var question;
    var min,max;
    var step;
    var threshold=10; // right answer will be RA+-threshold and threshold is a percentage of the available values
    var output;
    var i0,i1,i2,i3,i4; // five cursor images
    var imageType; // image type name
    var ImgThreshold;
    var imgSrc;
    var imgUserAnswer;
    var imgAnswer;

    var idImage = function(value){
      if(min<= value & value < min + ImgThreshold){
          return i0;

      }else if(min + ImgThreshold <= value & value < min +2* ImgThreshold){
          return i1;

      }else if(min + 2*ImgThreshold <= value & value < min +3* ImgThreshold){
          return i2;

      }else if(min + 3*ImgThreshold <= value & value < min +4* ImgThreshold){
          return i3;

      }else if(min + 4*ImgThreshold <= value & value <= min +5* ImgThreshold){
          return i4;

      }
    }
    var _onvalidate = function() {
        

        var error = (max-min)*(threshold/100);
        var success = question.answer-error <= output.value && question.answer+error >= output.value;
        console.log("error= "+error)
        console.log("imganswer= "+idImage(question.answer))
        quizz.openAnswer({
            success: success,
            value: output.value,
            imgAnswer: idImage(question.answer),
            imgUserAnswer: idImage(output.value),
        });

    };

    return {
        build: function(q, c) {
            container = c;
            question = q;
            imageType=question.theme;
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



                container.innerHTML = template(question);
                imgSrc= document.getElementById("im");
                imgSrc.src=i0;
                var rangeslider = document.getElementById("myRange");
                output = document.getElementById("demo");
                output.innerHTML = rangeslider.value;

                rangeslider.oninput = function() {
                    output.innerHTML = this.value;
                    imgSrc.src = idImage(this.value);

                }

                container.querySelector('input.checker').onclick = function() { _this.onValidate(); };
                var rangeSliderContainer = document.querySelector('.range-slidecontainer');
                rangeSliderContainer.style.height = rangeSliderContainer.offsetWidth + 'px';
            });

            },
        onValidate: _onvalidate,
    }

});
