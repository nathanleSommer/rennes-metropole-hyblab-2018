var CursorGame = (function(){

    var container;
    var question;
    var min,max;
    var step;
    //var htmlSlider="<div class='slidecontainer'><input type='range' min='1' max='100' value='5' class='slider'  orient='vertical' id='myRange'></div>"
    //var slider = document.getElementById("myRange");
    //var output = document.getElementById("demo");
    
    var _sliderBuiling = function(Q){
        

    }

    output.innerHTML = slider.value; // Display the default slider value
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        output.innerHTML = this.value;
    }

    
    return {
        build: function(q, c) {
            container = c;
            question = q;
            min=question.range[0];
            max=question.range[1];
            step= question.step;

            container.innerHTML = "<div class='slidecontainer'>\n<input type='range' min="+ min +" max=" +max +" value='5' class='slider'  orient='vertical' id='myRange'>\n</div>";


        }
    }

});





