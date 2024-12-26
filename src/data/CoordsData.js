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
                description: "O lóbulo paracentral é visualizado na vista medial do hemisfério, sendo delimitado anteriormente pelo sulco paracentral e posteriormente pelo sulco parietoccipital. Essa estrutura é separada em duas partes: uma porção anterior(responsável pelo controle motor dos membros inferiores, como o movimento da perna e do pé) compreende o lobo frontal, junto do giro frontal superior e parte do giro do cíngulo, e sua porção posterior( responsável pelas controle sensorial dos membros inferiores) compreende o lobo parietal. Essa divisão em duas porções quase sempre é marcada por uma fração do sulco central que se estende até a face medial do hemisfério",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
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