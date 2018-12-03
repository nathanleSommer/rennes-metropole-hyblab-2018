var MapGame = (function(){

    var container;
    var question;

    return {
        build: function(q, c) {
            container = c;
            question = q;

            /*container.innerHTML = "<div id=\"map\"></div>";
            var mymap = L.map('map').setView([48.117266,-1.6777926], 15);
            var polygon = L.polygon([
                [51.509, -0.08],
                [51.503, -0.06],
                [51.51, -0.047]
            ]).addTo(mymap);
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mymap);*/

        }
    }

});