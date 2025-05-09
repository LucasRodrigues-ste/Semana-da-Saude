//#region Quiz
export const quizFoods = [

    {
        description: "Esta fruta cremosa e de cor verde-escura é rica em gorduras boas, que ajudam a proteger o coração. Tem um caroço grande no centro e sua casca pode ser lisa ou enrugada. Muito usado em vitaminas e guacamole.",

        correctImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEZY00I9IQdwNxYDKChHH8HRW_akfQO_jqw&s",

        wrongImages: [

            "https://img.freepik.com/fotos-gratis/fruta-de-goiaba-natureza-morta_23-2151551139.jpg?semt=ais_hybrid&w=740",

            "https://img.freepik.com/fotos-premium/soursop-graviola-guyabano-ou-annona-muricata-sao-vendidos-e-consumidos-como-ervas-medicinais_190272-975.jpg?ga=GA1.1.715686425.1743604238&semt=ais_hybrid&w=740"


        ]

    },


    {

        description: "Este vegetal de cor laranja é rico em betacaroteno, que ajuda na saúde da visão. Pode ser consumido cru, cozido ou em sopas, e tem um formato alongado e pontiagudo.",

        correctImage: "https://media.istockphoto.com/id/1388403435/pt/foto/fresh-carrots-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=FKPHvwFCJRcXWj-Xwazl4eGAIHGY2HVSQQjp1LOZ_tA=",

        wrongImages: [

            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwYJgpIId7Ay-OZjKfZJL14YHDtQhgT10VYQ&s",

            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeUf_RItxD-uE3dX6--UaSuhFtHMPrFIua-w&s"

        ]


    },


    {

        description: "Este vegetal verde escuro tem formato de pequenas árvores e é rico em fibras, vitamina C e antioxidantes. Pode ser consumido cozido no vapor ou em saladas.",

        correctImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcZCkkiIvoDoTJh7pMENItXDRNCkUN55MXvyq7ugwFd2GBbRjTL4ZET525w&s",

        wrongImages: [

            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-cQ7uNhsYNRvz_syQiyIdDRLal3lIVKUZw&s",

            "https://img.freepik.com/fotos-gratis/couve-deixa-a-fotografia-de-comida-plana_53876-106101.jpg?ga=GA1.1.715686425.1743604238&semt=ais_hybrid&w=740"

        ]

    },

    {

        description: "Teste.",

        correctImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcZCkkiIvoDoTJh7pMENItXDRNCkUN55MXvyq7ugwFd2GBbRjTL4ZET525w&s",

        wrongImages: [

            "https://img.freepik.com/vetores-gratis/utilizador-de-negocios-com-lupa_78370-7020.jpg?t=st=1746717504~exp=1746721104~hmac=198927ecc28be18d3c4f753e6c3dcd5e266570aabcd075989f28732660b35f27&w=900",

            "https://img.freepik.com/vetores-gratis/utilizador-de-negocios-com-lupa_78370-7020.jpg?t=st=1746717504~exp=1746721104~hmac=198927ecc28be18d3c4f753e6c3dcd5e266570aabcd075989f28732660b35f27&w=900"

        ]

    }

];

//#endregion

//#region Memoria
export const foodPairs = [


    { name: "Leite", image: "https://img.freepik.com/vetores-gratis/ilustracao-realista-de-icones-vetoriais-fazenda-lactea-espresso-de-leite-fresco-com-jarro-e-garrafa-de-leite-isola_134830-2399.jpg?ga=GA1.1.715686425.1743604238&semt=ais_hybrid&w=740" },

    { name: "Cenoura", image: "https://media.istockphoto.com/id/166106089/pt/foto/cenoura-isolado.jpg?b=1&s=612x612&w=0&k=20&c=y6PwFXhd3i5DnhyTPVd_nlCxFgtMQ7aW4lWZchQkj_k=" },

    { name: "Ervilha", image: "https://img.freepik.com/fotos-gratis/ervilhas-em-uma-tigela-branca-vista-superior-em-uma-parede-branca_176474-5765.jpg?ga=GA1.1.715686425.1743604238&semt=ais_hybrid&w=740" },

    { name: "Alface", image: "https://img.freepik.com/fotos-gratis/alface-fresca_1339-2068.jpg?ga=GA1.1.715686425.1743604238&semt=ais_hybrid&w=740" },

    { name: "Carne", image: "https://img.freepik.com/fotos-premium/costelas-de-porco-grelhadas_1339-19960.jpg?ga=GA1.1.715686425.1743604238&semt=ais_hybrid&w=740" },

    { name: "Chocolate", image: "https://media.istockphoto.com/id/121282958/pt/foto/chocolate.jpg?b=1&s=612x612&w=0&k=20&c=Ht92z17qNsK3fsXX8unUeAP6LRRyZqpnDShmA13kt_M=" }

];

//#endregion

//#region Monte seu Prato
export const foodChoices = [
    { name: "Maçã", image: "/images/maca.png", isHealthy: true },
    { name: "Chocolate", image: "https://media.istockphoto.com/id/121282958/pt/foto/chocolate.jpg?b=1&s=612x612&w=0&k=20&c=Ht92z17qNsK3fsXX8unUeAP6LRRyZqpnDShmA13kt_M=", isHealthy: false },
    { name: "Salada", image: "/images/salada.png", isHealthy: true },
    { name: "Refrigerante", image: "/images/refrigerante.png", isHealthy: false },
    { name: "Peixe", image: "/images/peixe.png", isHealthy: true },
    { name: "Peixe", image: "/images/peixe.png", isHealthy: true },
    { name: "Peixe", image: "/images/peixe.png", isHealthy: true },
    { name: "Peixe", image: "/images/peixe.png", isHealthy: true },
    { name: "Peixe", image: "/images/peixe.png", isHealthy: true },
    { name: "Peixe", image: "/images/peixe.png", isHealthy: true },
    { name: "Peixe", image: "/images/peixe.png", isHealthy: true },
    { name: "Peixe", image: "/images/peixe.png", isHealthy: true },
];

//#endregion