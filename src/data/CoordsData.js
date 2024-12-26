const CoodsData = [
    // esse primeiro objeto é para condicional que impede as areas
    // de serem mostradas quando não é a terceira imagem.
    {
        name: "null",
        areas: [

        ],
    },
    {
        name: "sulcos-e-giros01",
        areas: [
            {
                shape: "rect", // Forma retangular
                coords: [554,176,219,102], // Coordenadas [x1, y1, x2, y2]
                href: "#", // Link ou ação ao clicar
                alt: "Area 1", // Descrição da área
                title: "Lóbulo Paracentral", // Título da área 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "lipe feioso",
                reference: "aceitaa"
            },
            {
                shape: "rect", 
                coords: [319,402,142,460],
                href: "#",
                alt: "Area 2",
                title: "Pré-cuneo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "consegui??",
                reference: "conseguiiiikkkkkkkk"
            },
        ],
    },
    {
        name: "teste1",
        areas: [
            {
                shape: "rect", // Forma retangular
                coords: [34, 44, 270, 350], // Coordenadas [x1, y1, x2, y2]
                href: "#", // Link ou ação ao clicar
                alt: "Area 1", // Descrição da área
                title: "Area 11", // Título da área 
                fillColor: "rgba(0, 0, 0, 0.9)",
                prefillColor: "rgba(255, 0, 0, 0.9)",
                description: "oiiiiiiiiiiiiiiii",
                reference: "fulaninho, P.J."
            },
            {
                shape: "circle", // Forma circular
                coords: [400, 400, 50], // Coordenadas [x, y, raio]
                href: "#",
                alt: "Area 2",
                title: "Another area",
                fillColor: "rgba(0, 0, 0, 0.9)",
                prefillColor: "rgba(255, 0, 0, 0.9)",
                description: "oolaaaaaaai",
                reference: "cicrano, T.A."
            },
        ],
    }
];

  export default CoodsData