var MapGame = (function(quizz){

    var container;
    var question;

    let validated = false;

    var _onvalidate = function() {

        if(!validated) {
            document.querySelector('input.checker').value = "Continuer";
            document.querySelector('#line-player').style.stroke = "#c0392b";
            document.querySelector('#line-answer').style.stroke = "#27ae60";
            last_circle.style.fill = "none";
            stop_drawing = true;

            validated = true;
        }
        else {
            quizz.openAnswer({
                // TODO
                // success: success,
                // value: output.value,
                // imgAnswer: idImage(question.answer),
                // imgUserAnswer: idImage(output.value),
            });
        }
    };

    return {
        build: function(q, c) {
            container = c;
            question = q;

            var _this = this;

            TemplateLoader.getTemplate(question.type, template => {

                container.innerHTML = template(question);

                let svg = document.getElementById("map-svg");

                addAllCircles(svg);

                // for (let x = 0; x < grid_width; x++) {
                //     for (let y = 0; y < grid_height; y++) {
                //         addCircle(svg, x, y);
                //     }
                // }

                var circles = Array.from(document.querySelectorAll('svg > circle'));


                circles.forEach(circle => {
                    circle.setAttribute("onmouseenter", "clickcircle(evt)");
                    circle.setAttribute("onmousedown", "clickcircle(evt)");
                });

                container.querySelector('input.checker').onclick = function() { _this.onValidate(); };
            });
        },
        onValidate: _onvalidate,
    }

});

const svgns = "http://www.w3.org/2000/svg";
const segment_height = 42.5;
const segment_width = 36.8;
const grid_height = 22;
const grid_width = 29;
const snap_radius = 20;

var last_circle = null;
var stop_drawing = false;

let clickcircle = function (evt) {

    if(stop_drawing || event.buttons != 1) return;

    let svg = document.querySelector("#map-svg");
    let line = document.querySelector("#map-svg > polyline");
    let circle = evt.target;

    let point = svg.createSVGPoint();
    point.x = circle.getAttributeNS(null, "cx");
    point.y = circle.getAttributeNS(null, "cy");

    line.points.appendItem(point);

    if (last_circle != null) last_circle.style.fill = "none";

    circle.style.fill = "#2980b9";
    last_circle = circle;
};

let getCoordinates = function (x, y) {

    let mapx = x * segment_width;
    let mapy = y * segment_height;

    if (x % 2 === 1) mapy += segment_height / 2;

    return {x: mapx, y: mapy}
};

let addCircle = function (container, x, y) {
    let circle = document.createElementNS(svgns, 'circle');

    // let coordinates = getCoordinates(x, y);

    circle.setAttributeNS(null, 'cx', x);
    circle.setAttributeNS(null, 'cy', y);
    circle.setAttributeNS(null, 'r', snap_radius);
    circle.setAttributeNS(null, 'pointer-events', 'visible');
    // circle.setAttributeNS(null, 'onclick', "click(evt)");
    circle.setAttributeNS(null, 'style', 'fill: none; stroke: none; stroke-width: 1px; fill-opacity:.8');

    container.appendChild(circle);
};

let addAllCircles = function(svg) {
    addCircle(svg,36.8, 701.25);
    addCircle(svg,331.2, 786.25);
    addCircle(svg,552, 658.75);
    addCircle(svg,809.6, 680);
    addCircle(svg,772.8, 403.75);
    addCircle(svg,846.4, 233.75);
    addCircle(svg,956.8, 212.5);
    addCircle(svg,552,106.25);
    addCircle(svg,257.6, 191.25);
    addCircle(svg,147.2, 340);
    addCircle(svg,110.4, 488.75);
    addCircle(svg,110.4, 531.25);
    addCircle(svg,147.2, 595);
    addCircle(svg,257.6, 573.75);
    addCircle(svg,368, 552.5);
    addCircle(svg,441.6, 552.5);
    addCircle(svg,441.6, 467.5);
    addCircle(svg,294.4, 467.5);
    addCircle(svg,220.8, 467.5);
    addCircle(svg,404.8, 403.75);
    addCircle(svg,588.8, 425);
    addCircle(svg,588.8, 297.5);
    addCircle(svg,478.4, 276.25);
    addCircle(svg,441.6, 255);
    addCircle(svg,515.2, 212.5);
    addCircle(svg,588.8, 212.5);
    addCircle(svg,662.4, 255);
    addCircle(svg,736, 297.5);
};