var INTRO = {
    title: "Bienvenue sur le quizz !"
};

var OUTRO = {
    title: "Merci d'avoir joué !"
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
        type:"cursor",
        title:"Quel est l'âge moyen des rennais ?",
        range:[0,10],
        step:1,
        answer:6
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
    ],
    outro: OUTRO,
};

