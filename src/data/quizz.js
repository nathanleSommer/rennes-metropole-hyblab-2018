var INTRO = {
    title: "Bienvenue sur le quizz !"
};

var QUIZZ_EASY = [
    {
        type:"cursor",
        title:"Quel est l'âge moyen des rennais ?",
        range:[0,10],
        step:1,
        answer:3
    },
    {
        type:"default",
        title:"Evenement connu à Rennes cette semaine ?",
        choices: ["marathon","transmusicale","reponseD", "onemore"],
        answer: 1
    }
];

var QUIZZ_NORMAL = [
    {
        type:"default",
        title:"Evenement connu à Rennes cette semaine ?",
        choices: ["marathon","transmusicale","reponseD"],
        answer: 1
    },
    {
<<<<<<< Updated upstream
        type:"cursor",
        title:"Quel est l'âge moyen des rennais ?",
        range:[0,10],
        step:1,
        answer:3
    },
    {
        type: "chained",
        questions: [
            {
                title: "Nouveau moyen de transport sur Rennes ?",
                choices: ["vélo", "train", "navette", "bus"],
                answer: 1
            },
            {
                title: "A quel endroit ?",
                choices: ["campus beaulieu", "centre-ville", ""],
                answer: 1
            },
            {
                title: "Particularité ?",
                choices: ["fonctionne au gaz", "autonome"],
                answer: 1
            },
        ]
    }
];

var GAME = {
    intro: INTRO,
    quizzes: [
        {
            name: "Facile",
            quizz: QUIZZ_EASY,
        },
        {
            name: "Normal",
            quizz: QUIZZ_NORMAL,
        },
    ]
};

=======
        type:"map",
        title:"Entourer la zone du thabor sur la carte"
        /*map:[ { "elementType": "geometry", "stylers": [ { "color": "#ebe3cd" } ] }, { "elementType": "labels.text.fill", "stylers": [ { "color": "#523735" } ] }, { "elementType": "labels.text.stroke", "stylers": [ { "color": "#f5f1e6" } ] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [ { "color": "#c9b2a6" } ] }, { "featureType": "administrative.land_parcel", "elementType": "geometry.stroke", "stylers": [ { "color": "#dcd2be" } ] }, { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [ { "color": "#ae9e90" } ] }, { "featureType": "landscape.natural", "elementType": "geometry", "stylers": [ { "color": "#dfd2ae" } ] }, { "featureType": "poi", "elementType": "geometry", "stylers": [ { "color": "#dfd2ae" } ] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [ { "color": "#93817c" } ] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [ { "color": "#a5b076" } ] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [ { "color": "#447530" } ] }, { "featureType": "road", "elementType": "geometry", "stylers": [ { "color": "#f5f1e6" } ] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [ { "color": "#fdfcf8" } ] }, { "featureType": "road.arterial", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [ { "color": "#f8c967" } ] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "color": "#e9bc62" } ] }, { "featureType": "road.highway", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [ { "color": "#e98d58" } ] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry.stroke", "stylers": [ { "color": "#db8555" } ] }, { "featureType": "road.local", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [ { "color": "#806b63" } ] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [ { "color": "#dfd2ae" } ] }, { "featureType": "transit.line", "elementType": "labels.text.fill", "stylers": [ { "color": "#8f7d77" } ] }, { "featureType": "transit.line", "elementType": "labels.text.stroke", "stylers": [ { "color": "#ebe3cd" } ] }, { "featureType": "transit.station", "elementType": "geometry", "stylers": [ { "color": "#dfd2ae" } ] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "color": "#b9d3c2" } ] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "color": "#92998d" } ] } ]
    */}
]
>>>>>>> Stashed changes
