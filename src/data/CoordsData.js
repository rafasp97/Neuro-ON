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
                description: "  O lóbulo paracentral é visualizado na vista medial do hemisfério, sendo delimitado anteriormente pelo sulco paracentral e posteriormente pelo sulco parietoccipital. Essa estrutura é separada em duas partes: uma porção anterior(responsável pelo controle motor dos membros inferiores, como o movimento da perna e do pé) compreende o lobo frontal, junto do giro frontal superior e parte do giro do cíngulo, e sua porção posterior( responsável pelas controle sensorial dos membros inferiores) compreende o lobo parietal. Essa divisão em duas porções quase sempre é marcada por uma fração do sulco central que se estende até a face medial do hemisfério.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [331,395,130,465],
                title: "Pré-cuneo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O pré-cuneo se localiza na face medial e posterior do lobo parietal, anteriormente ao cuneo. É delimitado pelo ramo marginal do sulco do cíngulo na margem anterior, pelo sulco parieto-occipital na margem posterior e pelo ramo subparietal na margem inferior. Estudos demonstraram a participação do pré-cuneo em diversas funções cognitivas específicas relacionadas ao processamento somatossensorial, ao processamento visuoespacial e a cognição.",
                reference: "Al-Ramadhani RR, Shivamurthy VKN, Elkins K, Gedela S, Pedersen NP, Kheder A. The precuneal cortex: anatomy and seizure semiology. Epileptic Disord. 2021 Apr 1;23(2):218-227. doi: 10.1684/epd.2021.1257. PMID: 33772513; PMCID: PMC8525033."
            },
            {
                shape: "rect", 
                coords: [1130,99,1409,23],
                title: "Giro do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro do cíngulo se localiza inferior ao sulco do giro do cíngulo e superior ao sulco do corpo caloso. Esse giro é um dos componentes do sistema límbico, sendo importante para memória e para emoção, pois desempenha uma função na formação e processamento emocional.",
                reference: "Pare JR, Kahn JH. Basic neuroanatomy and stroke syndromes. Emerg Med Clin North Am. 2012 Aug;30(3):601-15. doi: 10.1016/j.emc.2012.05.004. PMID: 22974640. | Claussenius-Kalman H, Vaughn KA, Archila-Suerte P, Hernandez AE. Age of acquisition impacts the brain differently depending on neuroanatomical metric. Hum Brain Mapp. 2020 Feb 1;41(2):484-502. doi: 10.1002/hbm.24817. Epub 2019 Oct 10. PMID: 31600019; PMCID: PMC7267963. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect", 
                coords: [118,856,270,784],
                title: "Cuneo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O cúneo se localiza no lobo occipital, superior ao sulco calcarino, e é visualizado na face medial do hemisfério cerebral. Ele possui um formato triangular e é delimitado anteriormente pelo sulco parieto-occipital e inferiormente pelo sulco calcarino. É um dos componentes do processamento visual e cognitivo.",
                reference: "Alves RV, Ribas GC, Párraga RG, de Oliveira E. The occipital lobe convexity sulci and gyri. J Neurosurg. 2012 May;116(5):1014-23. doi: 10.3171/2012.1.JNS11978. Epub 2012 Feb 17. PMID: 22339163. RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656. | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [1346,221,1724,151],
                title: "Giro Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista superolateral é delimitado  superiormente pela margem superior do hemisfério e pelo sulco frontal superior inferiormente. Na vista medial tem como limite superior a margem superior do hemisfério e tem o sulco do giro do cíngulo como limite inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952 | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
        ],
    },
    {
        name: "sulcos-e-giros02",
        areas: [
            {
                shape: "rect", 
                coords: [517,20,811,77],
                title: "Sulco do giro do cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco do cíngulo situa-se superior ao giro do cíngulo e inferior ao giro frontal superior e ao lóbulo paracentral. Essa estrutura circunda o giro do cíngulo e, em sua porção mais posterior, emite um ramo, chamado de ramo marginal, e se continua como sulco subparietal.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [1004,126,1294,177],
                title: "Sulco Paracentral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco paracentral é responsável por separar o giro frontal superior e o lóbulo paracentral. Além disso, esse sulco, junto com o sulco central, delimita a região do lóbulo paracentral que corresponde a área motora dos membros inferiores. Essa estrutura é visualizada na face medial do hemisfério.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [130,161,540,214],
                title: "Ramo Marginal do Sulco do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: " O sulco do cíngulo, em sua porção posterior, emite um ramo ascendente, denominado ramo marginal do sulco do cíngulo. Essa estrutura ascende na direção póstero-superior, onde separa o lóbulo paracentral do pré-cúneo.",
                reference: "Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect", 
                coords: [31,496,443,437],
                title: "Ramo Subparietal do Sulco do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O ramo subparietal do sulco do cíngulo é uma continuação do sulco do cíngulo após a emissão do ramo marginal. Esse sulco é responsável por separar o pré-cuneo do giro do cíngulo.",
                reference: "Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect", 
                coords: [63,800,356,740],
                title: "Sulco Parietoccipital",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Sulco Parietoccipital é visualizado na vista medial, onde marca o ponto de distinção entre o lobo parietal e o lobo occipital. Sua porção posterior se inicia na margem superomedial do hemisfério telencefálico, onde corre em direção ínfero-anterior, podendo se unir à porção anterior do sulco calcarino.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [239,1202,535,1137],
                title: "Sulco Calcarino",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco calcarino é um importante marco anatômico localizado na vista medial do lobo occipital. Essa estrutura se inicia ao nível do esplênio do corpo caloso e corre em direção posterior, como uma curvatura com convexidade superior, sendo responsável por separar o cuneo e o giro occipitotemporal medial. Além disso, é atribuída a essa estrutura funções visuais, pois nos lábios do sulco calcarino se encontra a área visual primária do córtex.",
                reference: "El Mohamad AR, Tatu L, Moulin T, Fadoul S, Vuillier F. Main anatomical features of the calcarine sulcus: a 3D magnetic resonance imaging at 3T study. Surg Radiol Anat. 2019 Feb;41(2):181-186. doi: 10.1007/s00276-018-2118-x. Epub 2018 Nov 14. PMID: 30430185. | Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574. | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },

        ],
    },
    {
        name: "sulcos-e-giros03",
        areas: [
            {
                shape: "rect", 
                coords: [312,226,619,291],
                title: "Lóbulo Paracentral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lóbulo paracentral é visualizado na vista medial do hemisfério, sendo delimitado anteriormente pelo sulco paracentral e posteriormente pelo sulco parietoccipital. Essa estrutura é separada em duas partes: uma porção anterior(responsável pelo controle motor dos membros inferiores, como o movimento da perna e do pé) compreende o lobo frontal, junto do giro frontal superior e parte do giro do cíngulo, e sua porção posterior( responsável pelas controle sensorial dos membros inferiores) compreende o lobo parietal. Essa divisão em duas porções quase sempre é marcada por uma fração do sulco central que se estende até a face medial do hemisfério.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [80,539,296,481],
                title: "Pré-cuneo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O pré-cuneo se localiza na face medial e posterior do lobo parietal, anteriormente ao cuneo. É delimitado pelo ramo marginal do sulco do cíngulo na margem anterior, pelo sulco parieto-occipital na margem posterior e pelo ramo subparietal na margem inferior. Estudos demonstraram a participação do pré-cuneo em diversas funções cognitivas específicas relacionadas ao processamento somatossensorial, ao processamento visuoespacial e a cognição.",
                reference: "Al-Ramadhani RR, Shivamurthy VKN, Elkins K, Gedela S, Pedersen NP, Kheder A. The precuneal cortex: anatomy and seizure semiology. Epileptic Disord. 2021 Apr 1;23(2):218-227. doi: 10.1684/epd.2021.1257. PMID: 33772513; PMCID: PMC8525033."
            },
            {
                shape: "rect", 
                coords: [932,248,1205,191],
                title: "Giro do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro do cíngulo se localiza inferior ao sulco do giro do cíngulo e superior ao sulco do corpo caloso. Esse giro é um dos componentes do sistema límbico, sendo importante para memória e para emoção, pois desempenha uma função na formação e processamento emocional.",
                reference: "Pare JR, Kahn JH. Basic neuroanatomy and stroke syndromes. Emerg Med Clin North Am. 2012 Aug;30(3):601-15. doi: 10.1016/j.emc.2012.05.004. PMID: 22974640. | Claussenius-Kalman H, Vaughn KA, Archila-Suerte P, Hernandez AE. Age of acquisition impacts the brain differently depending on neuroanatomical metric. Hum Brain Mapp. 2020 Feb 1;41(2):484-502. doi: 10.1002/hbm.24817. Epub 2019 Oct 10. PMID: 31600019; PMCID: PMC7267963. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect", 
                coords: [73,920,214,863],
                title: "Cuneo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O cúneo se localiza no lobo occipital, superior ao sulco calcarino, e é visualizado na face medial do hemisfério cerebral. Ele possui um formato triangular e é delimitado anteriormente pelo sulco parieto-occipital e inferiormente pelo sulco calcarino. É um dos componentes do processamento visual e cognitivo.",
                reference: "Alves RV, Ribas GC, Párraga RG, de Oliveira E. The occipital lobe convexity sulci and gyri. J Neurosurg. 2012 May;116(5):1014-23. doi: 10.3171/2012.1.JNS11978. Epub 2012 Feb 17. PMID: 22339163. RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656. | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [1368,340,1639,280],
                title: "Giro Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista superolateral é delimitado  superiormente pela margem superior do hemisfério e pelo sulco frontal superior inferiormente. Na vista medial tem como limite superior a margem superior do hemisfério e tem o sulco do giro do cíngulo como limite inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952 | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
        ],
    },
];

  export default CoodsData