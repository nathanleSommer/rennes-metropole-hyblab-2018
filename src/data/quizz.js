var INTRO = {
    title: "QUIZZ",
    subtitle: "Avez-vous bien suivi l'actu de la semaine ?"
};

var OUTRO = {
    title: "Bravo !",
    subtitle: "",
    bonusImg: "data/images/poubelle2.svg",
    bonusText: "Ceci est votre info bonus. <a href=''>avec un lien</a>",
};

var QUIZZ_EASY = [
    {
        type:"cursor",
        title:"L'association \"La Belle Déchette\" collecte actuellement 86 tonnes d'objets qui seront recyclés plus tard. Combien de tonnes cherche-t-elle à collecter d'ici 2020 ?",
        range : [100,300],
        step: 10,
        theme : "poubelle",
        answer: 270,
        text: "En effet, plus de 3 fois la quantité actuelle de déchets seront récoltés et recyclés d'ici 2020 !"
    },
    {
        type:"default",
        title:"La ville de Rennes cherche à renforcer son plan d'action pour la propreté. Combien de poubelles de rue sont actuellement à la disposition des rennais ?",
        theme:"poubelle",
        choices: ["700","1000","1300", "1600"],
        answer:2,
        text: "L'objectif de la ville de Rennes est de doubler ce nombre d'ici 2020."
    },

    {
        type:"default",
        title:"De lourds travaux seront lancés en 2022 à l'usine d'incinération de Villejean. Combien de tonnes de déchets sont-elles brûlées annuellement ?",
        theme:"poubelle",
        choices: ["50 000 tonnes","90 000 tonnes","120 000 tonnes", "140 000 tonnes"],
        answer:3,
        text: "Cela représente à peu près 380 tonnes de déchets par jours !"
    },


    {
        type:"cursor",
        title:"L'entreprise Samsic installe son siège près de la gare, où une tour de 100 mètres sera construite. Combien d'étages cela représente-t-il ?",
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
                title: "Un nouveau moyen de transport est actuellement en phase de test à Rennes, de quoi s'agit t'il ?",
                choices: ["vélo", "train", "navette", "bus"],
                answer: 2
            },
            {
                title: "Où cette navette se trouve t-elle ? ?",
                choices: ["Sur le campus de Beaulieu", "Dans le centre-ville"],
                answer: 0
            },
            {
                title: "Quelle est la particularité de cette navette",
                choices: ["elle fonctionne au gaz", "elle est entièrement autonome"],
                answer: 1
            },
        ]
    },
    {
        type: "map",
        theme:"transport",
        title: "Seriez-vous capable de relier les points qui forment la nouvelle ligne B du métro de Rennes ?"
    }
];

var QUIZZ_NORMAL = QUIZZ_EASY;

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

