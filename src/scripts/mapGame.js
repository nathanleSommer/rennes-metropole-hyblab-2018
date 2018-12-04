var MapGame = (function(quizz){

    var container;
    var question;

    let validated = false;

    var _onvalidate = function() {

        if(!validated) {
            document.querySelector('input.checker').value = "Continuer";
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

                for (let x = 0; x < grid_width; x++) {
                    for (let y = 0; y < grid_height; y++) {
                        addCircle(svg, x, y);
                    }
                }

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

let last_circle = null;

let clickcircle = function (evt) {

    if(event.buttons != 1) return;

    let svg = document.querySelector("#map-svg");
    let line = document.querySelector("#map-svg > polyline");
    let circle = evt.target;

    let point = svg.createSVGPoint();
    point.x = circle.getAttributeNS(null, "cx");
    point.y = circle.getAttributeNS(null, "cy");

    line.points.appendItem(point);

    if (last_circle != null) last_circle.style.fill = "none";

    circle.style.fill = "#e74c3c";
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

    let coordinates = getCoordinates(x, y);

    circle.setAttributeNS(null, 'cx', coordinates.x);
    circle.setAttributeNS(null, 'cy', coordinates.y);
    circle.setAttributeNS(null, 'r', snap_radius);
    circle.setAttributeNS(null, 'pointer-events', 'visible');
    // circle.setAttributeNS(null, 'onclick', "click(evt)");
    circle.setAttributeNS(null, 'style', 'fill: none; stroke: none; stroke-width: 1px;');

    container.appendChild(circle);
};