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
                coords: [554,174,220,99], // Coordenadas [x1, y1, x2, y2]
                title: "Lóbulo Paracentral", // Título da área 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "O lóbulo paracentral é visualizado na vista medial do hemisfério, sendo delimitado anteriormente pelo sulco paracentral e posteriormente pelo sulco parietoccipital. Essa estrutura é separada em duas partes: uma porção anterior(responsável pelo controle motor dos membros inferiores, como o movimento da perna e do pé) compreende o lobo frontal, junto do giro frontal superior e parte do giro do cíngulo, e sua porção posterior( responsável pelas controle sensorial dos membros inferiores) compreende o lobo parietal. Essa divisão em duas porções quase sempre é marcada por uma fração do sulco central que se estende até a face medial do hemisfério",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [331,395,130,465],
                title: "Pré-cuneo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "O pré-cuneo se localiza na face medial e posterior do lobo parietal, anteriormente ao cuneo. É delimitado pelo ramo marginal do sulco do cíngulo na margem anterior, pelo sulco parieto-occipital na margem posterior e pelo ramo subparietal na margem inferior. Estudos demonstraram a participação do pré-cuneo em diversas funções cognitivas específicas relacionadas ao processamento somatossensorial, ao processamento visuoespacial e a cognição.",
                reference: "Al-Ramadhani RR, Shivamurthy VKN, Elkins K, Gedela S, Pedersen NP, Kheder A. The precuneal cortex: anatomy and seizure semiology. Epileptic Disord. 2021 Apr 1;23(2):218-227. doi: 10.1684/epd.2021.1257. PMID: 33772513; PMCID: PMC8525033."
            },
            {
                shape: "rect", 
                coords: [1130,99,1409,23],
                title: "Giro do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "O giro do cíngulo se localiza inferior ao sulco do giro do cíngulo e superior ao sulco do corpo caloso. Esse giro é um dos componentes do sistema límbico, sendo importante para memória e para emoção, pois desempenha uma função na formação e processamento emocional.",
                reference: "Pare JR, Kahn JH. Basic neuroanatomy and stroke syndromes. Emerg Med Clin North Am. 2012 Aug;30(3):601-15. doi: 10.1016/j.emc.2012.05.004. PMID: 22974640. | Claussenius-Kalman H, Vaughn KA, Archila-Suerte P, Hernandez AE. Age of acquisition impacts the brain differently depending on neuroanatomical metric. Hum Brain Mapp. 2020 Feb 1;41(2):484-502. doi: 10.1002/hbm.24817. Epub 2019 Oct 10. PMID: 31600019; PMCID: PMC7267963. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect", 
                coords: [118,856,270,784],
                title: "Cuneo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "O cúneo se localiza no lobo occipital, superior ao sulco calcarino, e é visualizado na face medial do hemisfério cerebral. Ele possui um formato triangular e é delimitado anteriormente pelo sulco parieto-occipital e inferiormente pelo sulco calcarino. É um dos componentes do processamento visual e cognitivo.",
                reference: "Alves RV, Ribas GC, Párraga RG, de Oliveira E. The occipital lobe convexity sulci and gyri. J Neurosurg. 2012 May;116(5):1014-23. doi: 10.3171/2012.1.JNS11978. Epub 2012 Feb 17. PMID: 22339163. RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656. | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [1346,221,1724,151],
                title: "Giro Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "Na vista superolateral é delimitado  superiormente pela margem superior do hemisfério e pelo sulco frontal superior inferiormente. Na vista medial tem como limite superior a margem superior do hemisfério e tem o sulco do giro do cíngulo como limite inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952 | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
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