
const Cer = [
    // esse primeiro objeto é para condicional que impede as areas
    // de serem mostradas quando não é a terceira imagem.
    {
        name: "null",
        areas: [

        ],
    },
    {
        name: "cerebelo01",
        areas: [
            {
                shape: "rect", // Forma retangular
                coords: [406,186,696,121], // Coordenadas [x1, y1, x2, y2]
                title: "Lóbulo Paracentral", // Título da área 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Lóbulo Paracentral é visualizado na vista medial do hemisfério, sendo delimitado anteriormente pelo Sulco Paracentral e posteriormente pelo Sulco Parietoccipital. Essa estrutura é separada em duas partes: uma porção anterior (responsável pelo controle motor dos membros inferiores, como o movimento da perna e do pé) compreende o Lobo Frontal, junto do Giro Frontal Superior e parte do Giro do Cíngulo, e sua porção posterior (responsável pelas controle sensorial dos membros inferiores) compreende o Lobo Parietal. Essa divisão em duas porções quase sempre é marcada por uma fração do Sulco Central que se estende até a Face Medial do hemisfério.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
        ],
    },
];

  export default Cer