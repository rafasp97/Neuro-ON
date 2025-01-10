
const SeG = [
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
                coords: [406,186,696,121], // Coordenadas [x1, y1, x2, y2]
                title: "Lóbulo Paracentral", // Título da área 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Lóbulo Paracentral é visualizado na vista medial do hemisfério, sendo delimitado anteriormente pelo Sulco Paracentral e posteriormente pelo Sulco Parietoccipital. Essa estrutura é separada em duas partes: uma porção anterior (responsável pelo controle motor dos membros inferiores, como o movimento da perna e do pé) compreende o Lobo Frontal, junto do Giro Frontal Superior e parte do Giro do Cíngulo, e sua porção posterior (responsável pelas controle sensorial dos membros inferiores) compreende o Lobo Parietal. Essa divisão em duas porções quase sempre é marcada por uma fração do Sulco Central que se estende até a Face Medial do hemisfério.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [389,460,210,399],
                title: "Pré-cuneo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Pré-cuneo se localiza na face medial e posterior do lobo parietal, anteriormente ao cuneo. É delimitado pelo ramo marginal do sulco do cíngulo na margem anterior, pelo sulco parieto-occipital na margem posterior e pelo ramo subparietal na margem inferior. Estudos demonstraram a participação do pré-cuneo em diversas funções cognitivas específicas relacionadas ao processamento somatossensorial, ao processamento visuoespacial e a cognição.",
                reference: "Al-Ramadhani RR, Shivamurthy VKN, Elkins K, Gedela S, Pedersen NP, Kheder A. The precuneal cortex: anatomy and seizure semiology. Epileptic Disord. 2021 Apr 1;23(2):218-227. doi: 10.1684/epd.2021.1257. PMID: 33772513; PMCID: PMC8525033."
            },
            {
                shape: "rect", 
                coords: [1079,137,1322,79],
                title: "Giro do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Giro do Cíngulo se localiza inferior ao sulco do Giro do Cíngulo e superior ao Sulco do Corpo Caloso. Esse Giro é um dos componentes do Sistema Límbico, sendo importante para memória e para emoção, pois desempenha uma função na formação e processamento emocional.",
                reference: "Pare JR, Kahn JH. Basic neuroanatomy and stroke syndromes. Emerg Med Clin North Am. 2012 Aug;30(3):601-15. doi: 10.1016/j.emc.2012.05.004. PMID: 22974640. | Claussenius-Kalman H, Vaughn KA, Archila-Suerte P, Hernandez AE. Age of acquisition impacts the brain differently depending on neuroanatomical metric. Hum Brain Mapp. 2020 Feb 1;41(2):484-502. doi: 10.1002/hbm.24817. Epub 2019 Oct 10. PMID: 31600019; PMCID: PMC7267963. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect", 
                coords: [289,847,150,790],
                title: "Cuneo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Cúneo se localiza no Lobo Occipital, superior ao Sulco Calcarino, e é visualizado na Face Medial do hemisfério cerebral. Ele possui um formato triangular e é delimitado anteriormente pelo Sulco Parieto-occipital e inferiormente pelo Sulco Calcarino. É um dos componentes do processamento visual e cognitivo.",
                reference: "Alves RV, Ribas GC, Párraga RG, de Oliveira E. The occipital lobe convexity sulci and gyri. J Neurosurg. 2012 May;116(5):1014-23. doi: 10.3171/2012.1.JNS11978. Epub 2012 Feb 17. PMID: 22339163. RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656. | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [1306,174,1589,234],
                title: "Giro Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista Superolateral é delimitado superiormente pela margem superior do hemisfério e pelo Sulco Frontal superior inferiormente. Na vista medial tem como limite superior a margem superior do hemisfério e tem o Sulco do Giro do Cíngulo como limite inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952 | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
        ],
    },
    {
        name: "sulcos-e-giros02",
        areas: [
            {
                shape: "rect", 
                coords: [544,112,838,47],
                title: "Sulco do giro do cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Sulco do Cíngulo situa-se superior ao Giro do Cíngulo e inferior ao Giro Frontal Superior e ao Lóbulo Paracentral. Essa estrutura circunda o Giro do Cíngulo e, em sua porção mais posterior, emite um ramo, chamado de Ramo Marginal, e se continua como Sulco Subparietal.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [1028,209,1322,144],
                title: "Sulco Paracentral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Sulco Paracentral é responsável por separar o Giro Frontal Superior e o Lóbulo Paracentral. Além disso, esse sulco, junto com o Sulco Central, delimita a região do Lóbulo Paracentral que corresponde a área motora dos membros inferiores. Essa estrutura é visualizada na Face Medial do hemisfério.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [85,235,528,166],
                title: "Ramo Marginal do Sulco do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: " O Sulco do Cíngulo, em sua porção posterior, emite um ramo ascendente, denominado ramo marginal do Sulco do Cíngulo. Essa estrutura ascende na direção póstero-superior, onde separa o Lóbulo Paracentral do Pré-Cúneo.",
                reference: "Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect", 
                coords: [1,514,444,445],
                title: "Sulco Subparietal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Sulco Subparietal é uma continuação do Sulco do Cíngulo após a emissão do Ramo Marginal. Esse Sulco é responsável por separar o Pré-cuneo do Giro do Cíngulo.",
                reference: "Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect", 
                coords: [56,808,369,740],
                title: "Sulco Parietoccipital",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Sulco Parietoccipital é visualizado na vista medial, onde marca o ponto de distinção entre o Lobo Parietal e o lobo occipital. Sua porção posterior se inicia na margem superomedial do hemisfério telencefálico, onde corre em direção ínfero-anterior, podendo se unir à porção anterior do Sulco Calcarino.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [170,1190,483,1122],
                title: "Sulco Calcarino",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Sulco Calcarino é um importante marco anatômico localizado na vista medial do Lobo Occipital. Essa estrutura se inicia ao nível do esplênio do Corpo Caloso e corre em direção posterior, como uma curvatura com convexidade superior, sendo responsável por separar o Cuneo e o Giro Occipitotemporal Medial. Além disso, é atribuída a essa estrutura funções visuais, pois nos lábios do Sulco Calcarino se encontra a área visual primária do Córtex.",
                reference: "El Mohamad AR, Tatu L, Moulin T, Fadoul S, Vuillier F. Main anatomical features of the calcarine sulcus: a 3D magnetic resonance imaging at 3T study. Surg Radiol Anat. 2019 Feb;41(2):181-186. doi: 10.1007/s00276-018-2118-x. Epub 2018 Nov 14. PMID: 30430185. | Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574. | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },

        ],
    },
    {
        name: "sulcos-e-giros03",
        areas: [
            {
                shape: "rect", 
                coords: [609,297,297,230],
                title: "Lóbulo Paracentral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Lóbulo Paracentral é visualizado na vista medial do hemisfério, sendo delimitado anteriormente pelo Sulco paracentral e posteriormente pelo sulco parietoccipital. Essa estrutura é separada em duas partes: uma porção anterior(responsável pelo controle motor dos membros inferiores, como o movimento da perna e do pé) compreende o lobo frontal, junto do giro frontal superior e parte do Giro do Cíngulo, e sua porção posterior (responsável pelas controle sensorial dos membros inferiores) compreende o lobo parietal. Essa divisão em duas porções quase sempre é marcada por uma fração do sulco central que se estende até a face medial do hemisfério.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [327,503,116,568],
                title: "Pré-cuneo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Pré-cuneo se localiza na face medial e posterior do lobo parietal, anteriormente ao cuneo. É delimitado pelo ramo marginal do sulco do cíngulo na margem anterior, pelo sulco parieto-occipital na margem posterior e pelo ramo subparietal na margem inferior. Estudos demonstraram a participação do pré-cuneo em diversas funções cognitivas específicas relacionadas ao processamento somatossensorial, ao processamento visuoespacial e a cognição.",
                reference: "Al-Ramadhani RR, Shivamurthy VKN, Elkins K, Gedela S, Pedersen NP, Kheder A. The precuneal cortex: anatomy and seizure semiology. Epileptic Disord. 2021 Apr 1;23(2):218-227. doi: 10.1684/epd.2021.1257. PMID: 33772513; PMCID: PMC8525033."
            },
            {
                shape: "rect", 
                coords: [1239,198,935,265],
                title: "Giro do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Giro do Cíngulo se localiza inferior ao sulco do giro do cíngulo e superior ao sulco do corpo caloso. Esse giro é um dos componentes do sistema límbico, sendo importante para memória e para emoção, pois desempenha uma função na formação e processamento emocional.",
                reference: "Pare JR, Kahn JH. Basic neuroanatomy and stroke syndromes. Emerg Med Clin North Am. 2012 Aug;30(3):601-15. doi: 10.1016/j.emc.2012.05.004. PMID: 22974640. | Claussenius-Kalman H, Vaughn KA, Archila-Suerte P, Hernandez AE. Age of acquisition impacts the brain differently depending on neuroanatomical metric. Hum Brain Mapp. 2020 Feb 1;41(2):484-502. doi: 10.1002/hbm.24817. Epub 2019 Oct 10. PMID: 31600019; PMCID: PMC7267963. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect", 
                coords: [222,883,73,952],
                title: "Cuneo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Cúneo se localiza no Lobo Occipital, superior ao Sulco Calcarino, e é visualizado na face medial do hemisfério cerebral. Ele possui um formato triangular e é delimitado anteriormente pelo sulco parieto-occipital e inferiormente pelo sulco calcarino. É um dos componentes do processamento visual e cognitivo.",
                reference: "Alves RV, Ribas GC, Párraga RG, de Oliveira E. The occipital lobe convexity sulci and gyri. J Neurosurg. 2012 May;116(5):1014-23. doi: 10.3171/2012.1.JNS11978. Epub 2012 Feb 17. PMID: 22339163. RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656. | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [1669,357,1373,285],
                title: "Giro Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista Superolateral é delimitado superiormente pela margem superior do hemisfério e pelo Sulco Frontal Superior inferiormente. Na vista medial tem como limite superior a margem superior do hemisfério e tem o Sulco do Giro do Cíngulo como limite inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952 | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
        ],
    },
    {
        name: "sulcos-e-giros04",
        areas: [
            {
                shape: "rect", 
                coords: [268,187,27,152],
                title: "Sulco Subparietal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Sulco Subparietal é uma continuação do Sulco do Cíngulo após a emissão do Ramo Marginal. Esse Sulco é responsável por separar o Pré-cuneo do Giro do Cíngulo.",
                reference: "Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect", 
                coords: [476,130,319,96],
                title: "Sulco Paracentral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Sulco Paracentral é responsável por separar o Giro Frontal superior e o Lóbulo Paracentral. Além disso, esse sulco, junto com o Sulco central, delimita a região do Lóbulo Paracentral que corresponde a área motora dos membros inferiores. Essa estrutura é visualizada na face medial do hemisfério.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [795,116,626,78],
                title: "Sulco do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Sulco do Cíngulo situa-se superior ao Giro do Cíngulo e inferior ao Giro Frontal superior e ao Lóbulo Paracentral. Essa estrutura circunda o Giro do Cíngulo e, em sua porção mais posterior, emite um ramo, chamado de ramo marginal, e se continua como Sulco Subparietal.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [165,628,29,590],
                title: "Sulco Calcarino",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Sulco Calcarino é um importante marco anatômico localizado na vista medial do lobo occipital. Essa estrutura se inicia ao nível do esplênio do Corpo Caloso e corre em direção posterior, como uma curvatura com convexidade superior, sendo responsável por separar o Cuneo e o Giro Occipitotemporal Medial. Além disso, é atribuída a essa estrutura funções visuais, pois nos lábios do Sulco Calcarino se encontra a área visual primária do Córtex.",
                reference: "El Mohamad AR, Tatu L, Moulin T, Fadoul S, Vuillier F. Main anatomical features of the calcarine sulcus: a 3D magnetic resonance imaging at 3T study. Surg Radiol Anat. 2019 Feb;41(2):181-186. doi: 10.1007/s00276-018-2118-x. Epub 2018 Nov 14. PMID: 30430185. | Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574. | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [134,449,3,403],
                title: "Sulco Parietoccipital",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Sulco Parietoccipital é visualizado na vista medial, onde marca o ponto de distinção entre o Lobo Parietal e o lobo occipital. Sua porção posterior se inicia na margem superomedial do hemisfério telencefálico, onde corre em direção ínfero-anterior, podendo se unir à porção anterior do Sulco Calcarino.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
        ],
    },
    {
        name: "sulcos-e-giros05",
        areas: [
            {
                shape: "rect", 
                coords: [64,189,238,152],
                title: "Giro Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista Superolateral é delimitado superiormente pela margem superior do hemisfério e pelo Sulco Frontal superior inferiormente. Na vista medial tem como limite superior a margem superior do hemisfério e tem o Sulco do Giro do Cíngulo como limite inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952 | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect", 
                coords: [253,147,427,110],
                title: "Giro do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Giro do Cíngulo se localiza inferior ao sulco do Giro do Cíngulo e superior ao Sulco do Corpo Caloso. Esse Giro é um dos componentes do Sistema Límbico, sendo importante para memória e para emoção, pois desempenha uma função na formação e processamento emocional.",
                reference: "Pare JR, Kahn JH. Basic neuroanatomy and stroke syndromes. Emerg Med Clin North Am. 2012 Aug;30(3):601-15. doi: 10.1016/j.emc.2012.05.004. PMID: 22974640. | Claussenius-Kalman H, Vaughn KA, Archila-Suerte P, Hernandez AE. Age of acquisition impacts the brain differently depending on neuroanatomical metric. Hum Brain Mapp. 2020 Feb 1;41(2):484-502. doi: 10.1002/hbm.24817. Epub 2019 Oct 10. PMID: 31600019; PMCID: PMC7267963. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect", 
                coords: [510,139,684,102],
                title: "Lóbulo Paracentral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Lóbulo Paracentral é visualizado na vista medial do hemisfério, sendo delimitado anteriormente pelo Sulco Paracentral e posteriormente pelo Sulco Parietoccipital. Essa estrutura é separada em duas partes: uma porção anterior (responsável pelo controle motor dos membros inferiores, como o movimento da perna e do pé) compreende o Lobo Frontal, junto do Giro Frontal Superior e parte do Giro do Cíngulo, e sua porção posterior (responsável pelas controle sensorial dos membros inferiores) compreende o Lobo Parietal. Essa divisão em duas porções quase sempre é marcada por uma fração do Sulco Central que se estende até a Face Medial do hemisfério.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [699,208,815,168],
                title: "Pré-cuneo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Pré-cuneo se localiza na face medial e posterior do lobo parietal, anteriormente ao cuneo. É delimitado pelo ramo marginal do sulco do cíngulo na margem anterior, pelo sulco parieto-occipital na margem posterior e pelo ramo subparietal na margem inferior. Estudos demonstraram a participação do pré-cuneo em diversas funções cognitivas específicas relacionadas ao processamento somatossensorial, ao processamento visuoespacial e a cognição.",
                reference: "Al-Ramadhani RR, Shivamurthy VKN, Elkins K, Gedela S, Pedersen NP, Kheder A. The precuneal cortex: anatomy and seizure semiology. Epileptic Disord. 2021 Apr 1;23(2):218-227. doi: 10.1684/epd.2021.1257. PMID: 33772513; PMCID: PMC8525033."
            },
            {
                shape: "rect", 
                coords: [804,329,906,293],
                title: "Cuneo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Cúneo se localiza no Lobo Occipital, superior ao Sulco Calcarino, e é visualizado na Face Medial do hemisfério cerebral. Ele possui um formato triangular e é delimitado anteriormente pelo Sulco Parieto-occipital e inferiormente pelo Sulco Calcarino. É um dos componentes do processamento visual e cognitivo.",
                reference: "Alves RV, Ribas GC, Párraga RG, de Oliveira E. The occipital lobe convexity sulci and gyri. J Neurosurg. 2012 May;116(5):1014-23. doi: 10.3171/2012.1.JNS11978. Epub 2012 Feb 17. PMID: 22339163. RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656. | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [804,329,906,293],
                title: "Cuneo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Cúneo se localiza no Lobo Occipital, superior ao Sulco Calcarino, e é visualizado na Face Medial do hemisfério cerebral. Ele possui um formato triangular e é delimitado anteriormente pelo Sulco Parieto-occipital e inferiormente pelo Sulco Calcarino. É um dos componentes do processamento visual e cognitivo.",
                reference: "Alves RV, Ribas GC, Párraga RG, de Oliveira E. The occipital lobe convexity sulci and gyri. J Neurosurg. 2012 May;116(5):1014-23. doi: 10.3171/2012.1.JNS11978. Epub 2012 Feb 17. PMID: 22339163. RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656. | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [714,619,948,579],
                title: "Giro Occipitotemporal Medial",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Giro Occipitotemporal Medial pode ser visualizado tanto na vista medial quanto na vista inferior, se localizando abaixo do Sulco Calcarino. Alguns estudos classificam essa estrutura como união do Giro Para-hipocampal, anterior, com o Giro Lingual, posterior.  ",
                reference: "Chau AM, Gagliardi F, Smith A, Pelzer NR, Stewart F, Mortini P, Elbabaa SK, Caputy AJ, Gragnaniello C. The paramedian supracerebellar transtentorial approach to the posterior fusiform gyrus. Acta Neurochir (Wien). 2016 Nov;158(11):2149-2154. doi: 10.1007/s00701-016-2960-8. Epub 2016 Sep 27. PMID: 27677522. "
            },
            {
                shape: "rect", 
                coords: [570,678,820,639],
                title: "Giro Occipitotemporal Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Giro Occipitotemporal Lateral é uma estrutura localizada entre o Sulco Colateral e o Sulco Occipitotemporal. O Giro pode ser visualizado tanto na vista medial, como na vista inferior do hemisfério.",
                reference: "Lehman VT, Black DF, Bernstein MA, Welker KM. Temporal lobe anatomy: eight imaging signs to facilitate interpretation of MRI. Surg Radiol Anat. 2016 May;38(4):433-43. doi: 10.1007/s00276-015-1582-9. Epub 2015 Oct 29. PMID: 26514961."
            },
            {
                shape: "rect", 
                coords: [314,674,551,640],
                title: "Istmo do Giro do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Istmo do Giro do Cíngulo está situado na região posterior do Giro do Cíngulo, conectando-se ao Giro Parahipocampal e ao Hipocampo. Ele faz parte do Sistema Límbico, que desempenha um papel fundamental na memória, emoção e navegação. Além disso, essa área integra o circuito de Papez, que conecta o Giro Parahipocampal e o Hipocampo ao Sistema Límbico.",
                reference: "Alves RV, Ribas GC, Párraga RG, de Oliveira E. The occipital lobe convexity sulci and gyri. J Neurosurg. 2012 May;116(5):1014-23. doi: 10.3171/2012.1.JNS11978. Epub 2012 Feb 17. PMID: 22339163. RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656. | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [164,638,352,601],
                title: "Giro Para-hipocampal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Giro Para-hipocampal pode ser visualizado tanto na vista medial quanto na vista inferior. Ele é limitado medialmente pelo Sulco do Hipocampo e lateralmente pelo Sulco Colateral (que o separa do Giro Occipitotemporal Lateral). Na extremidade anterior esse Giro desvia-se medialmente e cruza para posterior, dando origem ao Unco. Na extremidade posterior, esse Giro é contínuo com o Istmo do Giro do Cíngulo, sendo o Sulco Calcarino o marco utilizado para diferenciar o ambas estruturas. Além disso, a porção anterior desse Giro é denominada de área entorrinal, sendo uma das primeiras regiões a serem danificadas no Alzheimer devido a sua importância para a memória.",
                reference: "Wen HT, Rhoton AL Jr, de Oliveira E, Cardoso AC, Tedeschi H, Baccanelli M, Marino R Jr. Microsurgical anatomy of the temporal lobe: part 1: mesial temporal lobe anatomy and its vascular relationships as applied to amygdalohippocampectomy. Neurosurgery. 1999 Sep;45(3):549-91; discussion 591-2. doi: 10.1097/00006123-199909000-00028. PMID: 10493377. | Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574. | Lin YH, Dhanaraj V, Mackenzie AE, Young IM, Tanglay O, Briggs RG, Chakraborty AR, Hormovas J, Fonseka RD, Kim SJ, Yeung JT, Teo C, Sughrue ME. Anatomy and White Matter Connections of the Parahippocampal Gyrus. World Neurosurg. 2021 Apr;148:e218-e226. doi: 10.1016/j.wneu.2020.12.136. Epub 2021 Jan 4. PMID: 33412321."
            },
            {
                shape: "rect", 
                coords: [219,583,119,552],
                title: "Unco",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  Também conhecido como Uncus, é a parte anterior do Giro Para-hipocampal que projeta medialmente, quando visto de cima ou de baixo, tem uma forma angular com segmentos anterior e posterior que se encontram em um ápice direcionado medialmente. Imediatamente inferior ao Uncus encontra-se o Complexo Amigdalóide.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007.) | GUSTAVO RASSIER ISOLAN et al. Vascularization of the uncus – Anatomical study and clinical implications. Surgical Neurology International, v. 12, p. 393–393, 9 ago.2021."
            },  
        ],
    },
    {
        name: "sulcos-e-giros06",
        areas: [
            {
                shape: "rect", 
                coords: [73,180,246,214],
                title: "Sulco do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Sulco do Cíngulo situa-se superior ao Giro do Cíngulo e inferior ao Giro Frontal Superior e ao Lóbulo Paracentral. Essa estrutura circunda o Giro do Cíngulo e, em sua porção mais posterior, emite um ramo, chamado de Ramo Marginal, e se continua como Sulco Subparietal.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [358,63,528,98],
                title: "Sulco Paracentral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Sulco Paracentral é responsável por separar o Giro Frontal Superior e o Lóbulo Paracentral. Além disso, esse sulco, junto com o Sulco Central, delimita a região do Lóbulo Paracentral que corresponde a área motora dos membros inferiores. Essa estrutura é visualizada na Face Medial do hemisfério.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [708,188,904,229],
                title: "Sulco Subparietal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Sulco Subparietal é uma continuação do Sulco do Cíngulo após a emissão do Ramo Marginal. Esse Sulco é responsável por separar o Pré-cuneo do Giro do Cíngulo.",
                reference: "Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect", 
                coords: [560,76,825,115],
                title: "Ramo Marginal do Sulco do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: " O Sulco do Cíngulo, em sua porção posterior, emite um ramo ascendente, denominado ramo marginal do Sulco do Cíngulo. Essa estrutura ascende na direção póstero-superior, onde separa o Lóbulo Paracentral do Pré-Cúneo.",
                reference: "Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect", 
                coords: [765,287,938,323],
                title: "Sulco Parietoccipital",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Sulco Parietoccipital é visualizado na vista medial, onde marca o ponto de distinção entre o Lobo Parietal e o lobo occipital. Sua porção posterior se inicia na margem superomedial do hemisfério telencefálico, onde corre em direção ínfero-anterior, podendo se unir à porção anterior do Sulco Calcarino.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [826,377,947,414],
                title: "Sulco Calcarino",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Sulco Calcarino é um importante marco anatômico localizado na vista medial do Lobo Occipital. Essa estrutura se inicia ao nível do esplênio do Corpo Caloso e corre em direção posterior, como uma curvatura com convexidade superior, sendo responsável por separar o Cuneo e o Giro Occipitotemporal Medial. Além disso, é atribuída a essa estrutura funções visuais, pois nos lábios do Sulco Calcarino se encontra a área visual primária do Córtex.",
                reference: "El Mohamad AR, Tatu L, Moulin T, Fadoul S, Vuillier F. Main anatomical features of the calcarine sulcus: a 3D magnetic resonance imaging at 3T study. Surg Radiol Anat. 2019 Feb;41(2):181-186. doi: 10.1007/s00276-018-2118-x. Epub 2018 Nov 14. PMID: 30430185. | Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574. | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect", 
                coords: [592,621,733,658],
                title: "Sulco Colateral",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  O Sulco Colateral é uma estrutura que separa o Giro Parahipocampal do Giro Occipitotemporal Lateral. Alguns autores consideram o Sulco Colateral como um complexo de vários sulcos. Na porção anterior, o Sulco Colateral pode terminar de forma independente ou pode se unir ao Sulco Rinal ou ao Sulco Occipitotemporal.",
                reference: "Lehman VT, Black DF, Bernstein MA, Welker KM. Temporal lobe anatomy: eight imaging signs to facilitate interpretation of MRI. Surg Radiol Anat. 2016 May;38(4):433-43. doi: 10.1007/s00276-015-1582-9. Epub 2015 Oct 29. PMID: 26514961."
            },        
        ],
    },
    {
        name: "sulcos-e-giros07",
        areas: [
            {
                shape: "rect", 
                coords: [2,241,191,282],
                title: "Giro Supramarginal",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  O Giro Supramarginal constitui uma das porções do lobo parietal inferior. Esse Giro se origina na porção mais posterior do ramo posterior do Sulco Lateral, onde ele se arqueia sobre a porção terminal do sulco e forma os lábios operculares mais posteriores do Sulco Lateral.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },  
            {
                shape: "rect", 
                coords: [50,140,188,175],
                title: "Giro Angular",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  O Giro Angular constitui uma das porções do lobo parietal inferior. Esse giro se origina na porção mais posterior do sulco temporal superior, onde ele se arqueia sobre a porção terminal do sulco temporal superior.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },  
            {
                shape: "rect", 
                coords: [278,60,416,95],
                title: "Giro Pós-central",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  O Giro Pós-central se localiza no Lobo Parietal, sendo separado do Lobo Frontal pelo Sulco Central. Essa estrutura corresponde a área somatossensorial primária, cuja função é organizada para refletir a distribuição das sensações do corpo. Além disso, o giro pós central possui uma organização somatotópica, em que cada parte do giro corresponde a áreas diferentes no corpo.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952."
            },  
            {
                shape: "rect", 
                coords: [458,71,596,106],
                title: "Giro Pré-central",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  Giro Pré-Central se localiza no Lobo Frontal, sendo separado do Lobo Parietal pelo Sulco Central. Essa estrutura corresponde ao córtex motor primário, sendo responsável por participar da realização de movimentos dos músculos esqueléticos. Essa área possui uma organização somatotópica em que cada parte do giro corresponde a áreas diferentes do corpo.",
                reference: "Pare JR, Kahn JH. Basic neuroanatomy and stroke syndromes. Emerg Med Clin North Am. 2012 Aug;30(3):601-15. doi: 10.1016/j.emc.2012.05.004. PMID: 22974640. | Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | Claussenius-Kalman H, Vaughn KA, Archila-Suerte P, Hernandez AE. Age of acquisition impacts the brain differently depending on neuroanatomical metric. Hum Brain Mapp. 2020 Feb 1;41(2):484-502. doi: 10.1002/hbm.24817. Epub 2019 Oct 10. PMID: 31600019; PMCID: PMC7267963. | El-Baba RM, Schury MP. Neuroanatomy, Frontal Cortex. 2023 May 29. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan–. PMID: 32119370."
            },  
            {
                shape: "rect", 
                coords: [693,121,901,157],
                title: "Giro Frontal Superior",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  Na vista Superolateral é delimitado superiormente pela margem superior do hemisfério e pelo Sulco Frontal superior inferiormente. Na vista medial tem como limite superior a margem superior do hemisfério e tem o Sulco do Giro do Cíngulo como limite inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952 | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },  
            {
                shape: "rect", 
                coords: [763,226,943,262],
                title: "Giro Frontal Médio",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  Na vista superolateral está localizado entre os Sulcos Frontal Superior e Frontal Inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },  
            {
                shape: "rect", 
                coords: [795,312,947,364],
                title: "Giro Frontal Inferior (opercular)",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  O Giro Frontal Inferior do hemisfério cerebral esquerdo é denominado Giro de Broca, e aí se localiza, na maioria dos indivíduos, uma das áreas de linguagem do cérebro. Essa estrutura é delimitada pelo Sulco Lateral e pelo Sulco Frontal Inferior. Parte Opercular: Localizada entre o sulco pré-central e o ramo ascendente do sulco lateral.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },  
            {
                shape: "rect", 
                coords: [794,408,946,460],
                title: "Giro Frontal Inferior (triangular)",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  O Giro Frontal Inferior do hemisfério cerebral esquerdo é denominado Giro de Broca, e aí se localiza, na maioria dos indivíduos, uma das áreas de linguagem do cérebro. Essa estrutura é delimitada pelo Sulco Lateral e pelo Sulco Frontal Inferior. Parte Triangular: Localizada entre as porções anterior e ascendente do sulco lateral.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },  
            {
                shape: "rect", 
                coords: [759,530,916,584],
                title: "Giro Frontal Inferior (orbital)",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  O Giro Frontal Inferior do hemisfério cerebral esquerdo é denominado Giro de Broca, e aí se localiza, na maioria dos indivíduos, uma das áreas de linguagem do cérebro. Essa estrutura é delimitada pelo Sulco Lateral e pelo Sulco Frontal Inferior. Parte Orbital: Parte mais anterior do giro, delimitada pela porção anterior do sulco lateral.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },  
            {
                shape: "rect", 
                coords: [477,607,693,645],
                title: "Giro Temporal Inferior",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  O Lobo Temporal tem suas estruturas delimitadas por três sulcos paralelos, o Sulco Lateral (ramo posterior), o Sulco Temporal Superior e o Sulco Temporal Inferior. O Giro Temporal Inferior se localiza entre o Sulco Temporal Inferior (superiormente) e o Sulco Occipitotemporal (inferiormente). Essa estrutura pode se apresentar fragmentada, em alguns casos, e fundida ao giro temporal médio, sem apresentar limites bem definidos entre os dois giros. Além disso, o giro temporal inferior pode ser visualizado tanto na vista superolateral, como na vista inferior, pois ele compõe a parte lateral da superfície basal do cérebro.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },  
            {
                shape: "rect", 
                coords: [285,594,473,633],
                title: "Giro Temporal Médio",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  O Lobo Temporal tem suas estruturas delimitadas por três sulcos paralelos, o Sulco Lateral (ramo posterior), o sulco temporal superior e o sulco temporal inferior. O Giro Temporal Médio se localiza entre o Sulco Temporal Superior e o Sulco Temporal Inferior. Em alguns casos esse giro pode aparecer fundido ao Giro Temporal Inferior, sem apresentar limites bem definidos entre os dois giros.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },  
            {
                shape: "rect", 
                coords: [54,594,278,631],
                title: "Giro Temporal Superior",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  O Lobo Temporal tem suas estruturas delimitadas por três sulcos paralelos, o Sulco Lateral (ramo posterior), o Sulco Temporal Superior e o Sulco Temporal Inferior. O Giro Temporal Superior se localiza entre o Sulco Temporal Superior (inferiormente) e o Ramo Posterior do Sulco Lateral. Em sua porção superior se localiza os giros temporais transversos, sendo o Giro Temporal Transverso Anterior, o Giro de Heschl, é o local da área auditiva primária do córtex.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },  
        ],
    },
    {
        name: "sulcos-e-giros08",
        areas: [
            {
                shape: "rect", 
                coords: [427,135,251,97],
                title: "Sulco Pós-central",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  Localizado entre o Giro Central e o Giro Pós-central e percorre paralelamente ao Sulco Pré-central. Pode apresentar-se dividido em dois segmentos, sendo que eles podem estar mais ou menos distantes um do outro. ",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },  
            {
                shape: "rect", 
                coords: [563,102,430,67],
                title: "Sulco Central",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  É uma estrutura profunda e geralmente contínua que se inicia na borda superior da superfície lateral do hemisfério, podendo se estender em alguns casos para a face medial onde divide o lóbulo paracentral, e percorre inferolateralmente a superfície lateral do telencéfalo em direção ao ramo posterior do sulco lateral. É responsável por separar os lobos frontal e parietal e, também, por separar a área motora primária da área somatossensorial primária.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },  
            {
                shape: "rect", 
                coords: [657,152,500,117],
                title: "Sulco Pré-central",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  Localizado entre o Giro Central e o Giro Pré-central e percorre paralelamente ao Sulco Pós-central. Pode apresentar-se bifurcado.",
                reference: "Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574 | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314. | El-Baba RM, Schury MP. Neuroanatomy, Frontal Cortex. 2023 May 29. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan–. PMID: 32119370."
            },  
            {
                shape: "rect", 
                coords: [889,188,664,153],
                title: "Sulco Frontal Superior",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  O Sulco Frontal Superior sai anterior ao Sulco Pré-central e percorre o Lobo Frontal, onde marca o limite entre o Giro Frontal Superior e o Giro Frontal Médio.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },  
            {
                shape: "rect", 
                coords: [947,259,722,224],
                title: "Sulco Frontal Inferior",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  O Sulco Frontal Inferior sai anterior ao Sulco Pré-central e Percorre o Lobo Frontal, onde marca o limite entre o Giro Frontal Médio e o Giro Frontal Inferior.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },  
            {
                shape: "rect", 
                coords: [947,436,794,362],
                title: "Porção Ascendente do Sulco Lateral",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  Esse sulco é descrito como um dos mais importantes no Telencéfalo, sendo responsável por separar o Lobo Temporal do Lobo Parietal e do Lobo Frontal. Porção Ascendente:  Se dirige para o lobo frontal, sendo responsável por separar as porções triangular e opercular do giro frontal inferior.",
                reference: "Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574. | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },  
            {
                shape: "rect", 
                coords: [948,565,721,525],
                title: "Porção Anterior do Sulco Lateral",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  Esse sulco é descrito como um dos mais importantes no Telencéfalo, sendo responsável por separar o Lobo Temporal do Lobo Parietal e do Lobo Frontal. Porção Anterior:  Se dirige para o lobo frontal, sendo responsável por separar as porções orbital e triangular do giro frontal inferior.",
                reference: "Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574. | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },  
            {
                shape: "rect", 
                coords: [849,637,606,596],
                title: "Porção Posterior do Sulco Lateral",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  Esse sulco é descrito como um dos mais importantes no Telencéfalo, sendo responsável por separar o Lobo Temporal do Lobo Parietal e do Lobo Frontal. Porção Posterior:  É o maior dos ramos e percorre em direção a porção posterior do Telencéfalo, sendo que na porção posterior é circundado pelo Giro Supramarginal. Responsável pela separação dos Lobos Temporal e Parietal.",
                reference: "Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574. | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },  
            {
                shape: "rect", 
                coords: [538,655,321,614],
                title: "Sulco Temporal Inferior",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  O Sulco Temporal Inferior se origina anteriormente na região do Lobo Temporal, onde percorre paralelo ao Sulco Temporal Superior até chegar ao Lobo Parietal, assim como o Sulco Temporal Superior. Essa estrutura pode se apresentar dividida em dois ou três sulcos pequenos.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },  
            {
                shape: "rect", 
                coords: [298,628,123,584],
                title: "Sulco Temporal Superior",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  O Sulco Temporal Superior se origina próximo ao Polo Temporal e percorre posteriormente até adentrar na região do Lobo Parietal, onde termina no Giro Angular. Essa estrutura percorre paralelamente ao Ramo Posterior do Sulco Lateral.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },  
        ],
    },
    {
        name: "sulcos-e-giros09",
        areas: [
            {
                shape: "rect", 
                coords: [825,790,927,836],
                title: "Cuneo",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  O Cúneo se localiza no Lobo Occipital, superior ao Sulco Calcarino, e é visualizado na Face Medial do hemisfério cerebral. Ele possui um formato triangular e é delimitado anteriormente pelo Sulco Parieto-occipital e inferiormente pelo Sulco Calcarino. É um dos componentes do processamento visual e cognitivo.",
                reference: "Alves RV, Ribas GC, Párraga RG, de Oliveira E. The occipital lobe convexity sulci and gyri. J Neurosurg. 2012 May;116(5):1014-23. doi: 10.3171/2012.1.JNS11978. Epub 2012 Feb 17. PMID: 22339163. RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656. | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },  
            {
                shape: "rect", 
                coords: [902,505,1143,551],
                title: "Giro Para-hipocampal",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  O Giro Para-hipocampal pode ser visualizado tanto na vista medial quanto na vista inferior. Ele é limitado medialmente pelo Sulco do Hipocampo e lateralmente pelo Sulco Colateral (que o separa do Giro Occipitotemporal Lateral). Na extremidade anterior esse Giro desvia-se medialmente e cruza para posterior, dando origem ao Unco. Na extremidade posterior, esse Giro é contínuo com o Istmo do Giro do Cíngulo, sendo o Sulco Calcarino o marco utilizado para diferenciar o ambas estruturas. Além disso, a porção anterior desse Giro é denominada de área entorrinal, sendo uma das primeiras regiões a serem danificadas no Alzheimer devido a sua importância para a memória.",
                reference: "Wen HT, Rhoton AL Jr, de Oliveira E, Cardoso AC, Tedeschi H, Baccanelli M, Marino R Jr. Microsurgical anatomy of the temporal lobe: part 1: mesial temporal lobe anatomy and its vascular relationships as applied to amygdalohippocampectomy. Neurosurgery. 1999 Sep;45(3):549-91; discussion 591-2. doi: 10.1097/00006123-199909000-00028. PMID: 10493377. | Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574. | Lin YH, Dhanaraj V, Mackenzie AE, Young IM, Tanglay O, Briggs RG, Chakraborty AR, Hormovas J, Fonseka RD, Kim SJ, Yeung JT, Teo C, Sughrue ME. Anatomy and White Matter Connections of the Parahippocampal Gyrus. World Neurosurg. 2021 Apr;148:e218-e226. doi: 10.1016/j.wneu.2020.12.136. Epub 2021 Jan 4. PMID: 33412321."
            },  
            {
                shape: "rect", 
                coords: [0,469,308,517],
                title: "Giro Occipitotemporal Lateral",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  O Giro Occipitotemporal Lateral é uma estrutura localizada entre o Sulco Colateral e o Sulco Occipitotemporal. O giro pode ser visualizado tanto na vista medial, como na vista inferior do hemisfério.",
                reference: "Lehman VT, Black DF, Bernstein MA, Welker KM. Temporal lobe anatomy: eight imaging signs to facilitate interpretation of MRI. Surg Radiol Anat. 2016 May;38(4):433-43. doi: 10.1007/s00276-015-1582-9. Epub 2015 Oct 29. PMID: 26514961. "
            },  
            {
                shape: "rect", 
                coords: [2,761,327,808],
                title: "Giro Occipitotemporal Medial",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  O Giro Occipitotemporal Medial pode ser visualizado tanto na vista medial quanto na vista inferior, se localizando abaixo do Sulco Calcarino. Alguns estudos classificam essa estrutura como união do Giro Para-hipocampal, anterior, com o Giro Lingual, Posterior. ",
                reference: "Chau AM, Gagliardi F, Smith A, Pelzer NR, Stewart F, Mortini P, Elbabaa SK, Caputy AJ, Gragnaniello C. The paramedian supracerebellar transtentorial approach to the posterior fusiform gyrus. Acta Neurochir (Wien). 2016 Nov;158(11):2149-2154. doi: 10.1007/s00701-016-2960-8. Epub 2016 Sep 27. PMID: 27677522."
            },  
            {
                shape: "rect", 
                coords: [974,374,860,323],
                title: "Unco",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  Também conhecido como Uncus, é a parte anterior do Giro Para-hipocampal que projeta medialmente, quando visto de cima ou de baixo, tem uma forma angular com segmentos anterior e posterior que se encontram em um ápice direcionado medialmente. Imediatamente inferior ao Uncus encontra-se o Complexo Amigdalóide.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007.) | GUSTAVO RASSIER ISOLAN et al. Vascularization of the uncus – Anatomical study and clinical implications. Surgical Neurology International, v. 12, p. 393–393, 9 ago.2021."
            },  
        ],
    },
    {
        name: "sulcos-e-giros10",
        areas: [
            {
                shape: "rect", 
                coords: [1,521,213,474],
                title: "Sulco Occipitotemporal",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  O Sulco Occipitotemporal é responsável por separar o Giro Temporal Inferior do Giro Occipitotemporal Lateral. Essa estrutura apresenta uma trajetória curvilínea ligando os Lobos Temporal e Occipital. Além disso, esse sulco pode ser contínuo ou pode sofrer interrupções em seu percurso.",
                reference: "Chau AM, Stewart F, Gragnaniello C. Sulcal and gyral anatomy of the basal occipital-temporal lobe. Surg Radiol Anat. 2014 Dec;36(10):959-65. doi: 10.1007/s00276-014-1294-6. Epub 2014 Apr 18. PMID: 24744138. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            }, 
            {
                shape: "rect", 
                coords: [87,660,299,613],
                title: "Sulco Colateral",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  O Sulco Colateral é uma estrutura que separa o Giro Parahipocampal do Giro Occipitotemporal Lateral. Alguns autores consideram o Sulco Colateral como um complexo de vários sulcos. Na porção anterior, o Sulco Colateral pode terminar de forma independente ou pode se unir ao Sulco Rinal ou ao Sulco Occipitotemporal.",
                reference: "Lehman VT, Black DF, Bernstein MA, Welker KM. Temporal lobe anatomy: eight imaging signs to facilitate interpretation of MRI. Surg Radiol Anat. 2016 May;38(4):433-43. doi: 10.1007/s00276-015-1582-9. Epub 2015 Oct 29. PMID: 26514961."
            }, 
            {
                shape: "rect", 
                coords: [883,870,1095,823],
                title: "Sulco Calcarino",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  O Sulco Calcarino é um importante marco anatômico localizado na vista medial do Lobo Occipital. Essa estrutura se inicia ao nível do esplênio do Corpo Caloso e corre em direção posterior, como uma curvatura com convexidade superior, sendo responsável por separar o Cuneo e o Giro Occipitotemporal Medial. Além disso, é atribuída a essa estrutura funções visuais, pois nos lábios do Sulco Calcarino se encontra a área visual primária do Córtex.",
                reference: "El Mohamad AR, Tatu L, Moulin T, Fadoul S, Vuillier F. Main anatomical features of the calcarine sulcus: a 3D magnetic resonance imaging at 3T study. Surg Radiol Anat. 2019 Feb;41(2):181-186. doi: 10.1007/s00276-018-2118-x. Epub 2018 Nov 14. PMID: 30430185. | Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574. | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            }, 
        ],
    },
    {
        name: "modelo",
        areas: [
            {
                shape: "rect", 
                coords: [572,623,721,589],
                title: "Sulco Colateral",
                fillColor: "rgba(167, 62, 20, 0)",
                strokeColor: "rgba(115, 201, 34, 0)",
                description: "  ",
                reference: ""
            },  
        ],
    },
    
];

  export default SeG