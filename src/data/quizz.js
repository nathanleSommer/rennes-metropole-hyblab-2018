var INTRO = {
    title: "QUIZZ",
    subtitle: "Avez-vous bien suivi l'actu de la semaine ?"
};

var OUTRO = {
    title: "Merci d'avoir joué !",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    bonusImg: "data/images/poubelle2.svg",
    bonusText: "Ceci est votre info bonus. <a href=''>avec un lien</a>",
};

var QUIZZ_EASY = [
    {
        type: "map",
        title: "Pouvez-vous retracer le chemin de la ligne B du métro ?"
    },
    {
        type:"cursor",
        title:"Quel est l'âge moyen des rennais ?",
        range:[20,100],
        step:5,
        theme:"immeuble",
        answer:35
    },
    {
        type:"default",
        title:"Evenement connu à Rennes cette semaine ?",
        choices: ["marathon","transmusicale","reponseD", "onemore"],
        theme : "poubelle",
        answer: 1
    },
];

var QUIZZ_NORMAL = [
    {
        type:"default",
        title:"Evenement connu à Rennes cette semaine ?",
        choices: ["marathon","transmusicale","reponseD"],
        theme : "transport",
        answer: 1
    },
    {
        type:"cursor",
        title:"Combien de Kg d'ordures ménagères jette un usager par an?",
        theme:"poubelle",
        range:[0,500],
        step:50,
        answer:192
    },
    {
        type:"cursor",
        title:"De combien d'étage dispose la nouvelle tour Samsic?",
        theme:"immeuble",
        range:[8,32],
        step:3,
        answer:26
    },

    {
        type: "chained",
        theme: "transport",
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
    ],
    outro: OUTRO,
};

