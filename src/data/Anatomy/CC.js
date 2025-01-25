
const CC = [
    // esse primeiro objeto é para condicional que impede as areas
    // de serem mostradas quando não é a terceira imagem.
    {
        name: "null",
        areas: [

        ],
    },
    {
        name: "cortes-coronais01",
        areas: [
            {
                shape: "rect",
                coords: [462,997,905,1131],
                title: "Giro Reto",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro reto é uma estrutura do lobo frontal localizada na superfície inferior do cérebro, ao longo da linha média, imediatamente acima do trato olfatório. Ele faz parte do córtex orbitofrontal e está envolvido em funções relacionadas ao processamento de informações emocionais, tomada de decisão e integração olfativa. O giro reto também contribui para a regulação de comportamentos sociais e funções executivas. É irrigado por ramos da artéria cerebral anterior e desempenha um papel importante em circuitos límbicos e frontais.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [341,769,992,903],
                title: "Giro do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro do cíngulo se localiza inferior ao sulco do giro do cíngulo e superior ao sulco do corpo caloso. Esse giro é um dos componentes do sistema límbico, sendo importante para memória e para emoção, pois desempenha uma função na formação e processamento emocional.",
                reference: "Pare JR, Kahn JH. Basic neuroanatomy and stroke syndromes. Emerg Med Clin North Am. 2012 Aug;30(3):601-15. doi: 10.1016/j.emc.2012.05.004. PMID: 22974640. | Claussenius-Kalman H, Vaughn KA, Archila-Suerte P, Hernandez AE. Age of acquisition impacts the brain differently depending on neuroanatomical metric. Hum Brain Mapp. 2020 Feb 1;41(2):484-502. doi: 10.1002/hbm.24817. Epub 2019 Oct 10. PMID: 31600019; PMCID: PMC7267963. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect",
                coords: [425,488,1076,622],
                title: "Giro Frontal Médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista superolateral está localizado entre os sulcos frontal superior e frontal inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect",
                coords: [596,271,1247,405],
                title: "Sulco do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco do cíngulo situa-se superior ao giro do cíngulo e inferior ao giro frontal superior e ao lóbulo paracentral. Essa estrutura circunda o giro do cíngulo e, em sua porção mais posterior, emite um ramo, chamado de ramo marginal, e se continua como sulco subparietal.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [767,83,1418,217],
                title: "Sulco Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco frontal superior sai anterior ao sulco pré-central e percorre o lobo frontal, onde marca o limite entre o giro frontal superior e o giro frontal médio.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [1424,6,2075,140],
                title: "Giro Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista superolateral é delimitado superiormente pela margem superior do hemisfério e pelo sulco frontal superior inferiormente. Na vista medial tem como limite superior a margem superior do hemisfério e tem o sulco do giro do cíngulo como limite inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect",
                coords: [2824,414,3475,548],
                title: "Fascículo do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O fascículo do cíngulo é um feixe de fibras nervosas localizado no sistema límbico, situado dentro do giro do cíngulo, logo acima do corpo caloso. Ele conecta regiões do córtex frontal ao córtex parietal e temporal, desempenhando um papel essencial na integração de funções emocionais, cognitivas e de memória. Essa estrutura também contribui para a regulação de respostas emocionais e comportamentais. É fundamental em circuitos associados à atenção, aprendizado e processamento de informações emocionais. Alterações no fascículo do cíngulo podem estar associadas a transtornos psiquiátricos, como depressão e ansiedade.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [2948,804,3599,938],
                title: "Giros Orbitários",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Os giros orbitários estão localizados na superfície orbital do lobo frontal, formando a base anterior do cérebro. Eles são delimitados por sulcos orbitários e, geralmente, criam uma disposição em forma de H. Esses giros estão envolvidos em funções relacionadas ao processamento emocional, tomada de decisão, comportamento social e integração sensorial. Conectados ao córtex pré-frontal, desempenham um papel crucial em funções executivas e na regulação de respostas ao ambiente.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [2955,975,3606,1109],
                title: "Sulco Olfatório",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco olfatório é uma estrutura localizada na superfície orbital do lobo frontal, ao longo da base do cérebro. Ele abriga o bulbo e o trato olfatório, estruturas responsáveis por transmitir informações sensoriais relacionadas ao olfato para o córtex cerebral. Situado entre o giro reto e os giros orbitais, o sulco olfatório é fundamental para a percepção e processamento dos estímulos olfativos.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            }
        ],
    },
    {
        name: "cortes-coronais02",
        areas: [
            {
                shape: "rect",
                coords: [203,1550,901,1695],
                title: "Sulco Olfatório",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco olfatório é uma estrutura localizada na superfície orbital do lobo frontal, ao longo da base do cérebro. Ele abriga o bulbo e o trato olfatório, estruturas responsáveis por transmitir informações sensoriais relacionadas ao olfato para o córtex cerebral. Situado entre o giro reto e os giros orbitais, o sulco olfatório é fundamental para a percepção e processamento dos estímulos olfativos.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [287,1266,985,1411],
                title: "Giro Reto",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro reto é uma estrutura do lobo frontal localizada na superfície inferior do cérebro, ao longo da linha média, imediatamente acima do trato olfatório. Ele faz parte do córtex orbitofrontal e está envolvido em funções relacionadas ao processamento de informações emocionais, tomada de decisão e integração olfativa. O giro reto também contribui para a regulação de comportamentos sociais e funções executivas. É irrigado por ramos da artéria cerebral anterior e desempenha um papel importante em circuitos límbicos e frontais.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [206,1037,904,1182],
                title: "Giro do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro do cíngulo se localiza inferior ao sulco do giro do cíngulo e superior ao sulco do corpo caloso. Esse giro é um dos componentes do sistema límbico, sendo importante para memória e para emoção, pois desempenha uma função na formação e processamento emocional.",
                reference: "Pare JR, Kahn JH. Basic neuroanatomy and stroke syndromes. Emerg Med Clin North Am. 2012 Aug;30(3):601-15. doi: 10.1016/j.emc.2012.05.004. PMID: 22974640. | Claussenius-Kalman H, Vaughn KA, Archila-Suerte P, Hernandez AE. Age of acquisition impacts the brain differently depending on neuroanatomical metric. Hum Brain Mapp. 2020 Feb 1;41(2):484-502. doi: 10.1002/hbm.24817. Epub 2019 Oct 10. PMID: 31600019; PMCID: PMC7267963. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect",
                coords: [206,786,898,909],
                title: "Fascículo do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O fascículo do cíngulo é um feixe de fibras nervosas localizado no sistema límbico, situado dentro do giro do cíngulo, logo acima do corpo caloso. Ele conecta regiões do córtex frontal ao córtex parietal e temporal, desempenhando um papel essencial na integração de funções emocionais, cognitivas e de memória. Essa estrutura também contribui para a regulação de respostas emocionais e comportamentais. É fundamental em circuitos associados à atenção, aprendizado e processamento de informações emocionais. Alterações no fascículo do cíngulo podem estar associadas a transtornos psiquiátricos, como depressão e ansiedade.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [283,620,975,743],
                title: "Sulco do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco do cíngulo situa-se superior ao giro do cíngulo e inferior ao giro frontal superior e ao lóbulo paracentral. Essa estrutura circunda o giro do cíngulo e, em sua porção mais posterior, emite um ramo, chamado de ramo marginal, e se continua como sulco subparietal.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [179,400,1086,513],
                title: "Fascículo Longitudinal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Sendo caracterizado como uma fibra de associação, o fascículo longitudinal superior é um trato de fibras de associação bidirecional, conectando as partes anterior (frontal, opercular) às posteriores (temporal, parietal, occipital) de cada hemisfério, ligando também as áreas expressivas às receptivas da linguagem.",
                reference: "GENEVIÈVE NOLZE-CHARRON et al. Tractography of the external capsule and cognition: A diffusion MRI study of cholinergic fibers. Experimental gerontology, v. 130, p. 110792–110792, 1 fev. 2020."
            },
            {
                shape: "rect",
                coords: [562,189,1368,300],
                title: "Giro Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista superolateral é delimitado superiormente pela margem superior do hemisfério e pelo sulco frontal superior inferiormente. Na vista medial tem como limite superior a margem superior do hemisfério e tem o sulco do giro do cíngulo como limite inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect",
                coords: [1106,42,1912,153],
                title: "Seio Sagital Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Seio Sagital Superior origina-se na intersecção dos ossos frontal e etmóide, segue o corte sagital mediano superiormente a foice do cérebro. É formado pelo plexo sagital, ou plexo venoso anterior e segue para a confluência dos seios.",
                reference: "Patchana T, Zampella B, Berry JA, Lawandy S, Sweiss RB. Superior Sagittal Sinus: A Review of the History, Surgical Considerations, and Pathology. Cureus. 2019 May 3;11(5):e4597. doi: 10.7759/cureus.4597. PMID: 31309022; PMCID: PMC6609282."
            },
            {
                shape: "rect",
                coords: [2133,64,2939,175],
                title: "Foice do Cérebro",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A Foice do Cérebro é uma camada meníngea da dura-máter que reflete e compartimenta o cérebro em dois hemisférios cerebrais.",
                reference: "Bordoni B, Simonelli M, Lagana MM. Tentorium Cerebelli: Muscles, Ligaments, and Dura Mater, Part 1. Cureus. 2019 Sep 9;11(9):e5601. doi: 10.7759/cureus.5601. PMID: 31700714; PMCID: PMC6822548."
            },
            {
                shape: "rect",
                coords: [2499,252,3305,363],
                title: "Giro Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista superolateral é delimitado superiormente pela margem superior do hemisfério e pelo sulco frontal superior inferiormente. Na vista medial tem como limite superior a margem superior do hemisfério e tem o sulco do giro do cíngulo como limite inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect",
                coords: [2720,417,3526,528],
                title: "Sulco Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco frontal superior sai anterior ao sulco pré-central e percorre o lobo frontal, onde marca o limite entre o giro frontal superior e o giro frontal médio.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [2807,1067,3613,1178],
                title: "Giro Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista superolateral é delimitado superiormente pela margem superior do hemisfério e pelo sulco frontal superior inferiormente. Na vista medial tem como limite superior a margem superior do hemisfério e tem o sulco do giro do cíngulo como limite inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect",
                coords: [2767,580,3573,691],
                title: "Giro Frontal Médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista superolateral está localizado entre os sulcos frontal superior e frontal inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect",
                coords: [2794,832,3600,943],
                title: "Giro Frontal Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro frontal inferior do hemisfério cerebral esquerdo é denominado giro de Broca, e aí se localiza, na maioria dos indivíduos, uma das áreas de linguagem do cérebro. Essa estrutura é delimitada pelo sulco lateral e pelo sulco frontal inferior, sendo que esses a dividem em três porções diferentes: Opercular - Localizada entre o sulco pré-central e o ramo ascendente do sulco lateral. Triangular - Localizada entre as porções anterior e ascendente do sulco lateral. Orbital - Parte mais anterior do giro, delimitada pela porção anterior do sulco lateral.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect",
                coords: [2900,1363,3557,1515],
                title: "Giros Orbitários",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Os giros orbitários estão localizados na superfície orbital do lobo frontal, formando a base anterior do cérebro. Eles são delimitados por sulcos orbitários e, geralmente, criam uma disposição em forma de H. Esses giros estão envolvidos em funções relacionadas ao processamento emocional, tomada de decisão, comportamento social e integração sensorial. Conectados ao córtex pré-frontal, desempenham um papel crucial em funções executivas e na regulação de respostas ao ambiente.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            }
        ],
    },
    {
        name: "cortes-coronais03",
        areas: [
            {
                shape: "rect",
                coords: [415,1899,1005,2037],
                title: "Lobo Temporal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lobo temporal é uma das principais regiões do cérebro, localizado nas laterais dos hemisférios cerebrais, abaixo do sulco lateral (ou fissura de Sylvius). Ele é parte do córtex cerebral e desempenha um papel essencial em várias funções neurológicas e cognitivas, especialmente aquelas relacionadas à percepção sensorial, memória e linguagem.",
                reference: "Almeida LCA, Lobato VA, Santos MCV, Moraes AC, Costa BS. Surgical treatment of temporal lobe epilepsy: comparative results of selective amygdalohippocampectomy versus anterior temporal lobectomy from a referral center in Brazil. Arq Neuropsiquiatr. 2023;81(7):647–655. DOI: https://doi.org/10.1055/s-0043-1771172."
            },
            {
                shape: "rect",
                coords: [234,1644,895,1785],
                title: "Giros Curtos da Ínsula",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A ínsula tem uma forma triangular com seu ápice direcionado anteriormente e inferiormente, sendo circundada pelo sulco circular da ínsula. O sulco central da ínsula, é um sulco relativamente constante que se estende para cima e para trás através da ínsula e a divide em uma grande parte anterior que é dividida por vários sulcos rasos em três a cinco giros curtos, e uma parte posterior que é formada pelos giros longos anterior e posterior. A ínsula tem uma organização complexa com uma representação neuroanatômica topográfica dos processos viscerais e três sub-regiões com diferentes níveis de granularidade laminar, distribuição de receptores acetilcolinérgicos e padrões de conectividade local, cortical, subcortical e do tronco cerebral. Essas características citoarquitetônicas e de conectividade anatômica sugerem uma posição central e especialização do córtex insular no processamento de informações interoceptivas. Essa convergência de informações corticais e interoceptivas no córtex insular levou a hipóteses influentes sobre seus potenciais papéis na predição interoceptiva, integração de informações para a consciência, consciência emocional, inferência interoceptiva e emoção e aprendizado baseado em erros de sentimentos.",
                reference: "Jobst BC, Gonzalez-Martinez J, Isnard J, Kahane P, Lacuey N, Lahtoo SD, Nguyen DK, Wu C, Lado F. The Insula and Its Epilepsies. Epilepsy Curr. 2019 Jan;19(1):11-21. doi: 10.1177/1535759718822847. Epub 2019 Jan 31. PMID: 30838920; PMCID: PMC6610377. | FERMIN, A. S. R.; FRISTON, K.; YAMAWAKI, S. An insula hierarchical network architecture for active interoceptive inference. Royal Society Open Science, v. 9, n. 6, jun. 2022."
            },
            {
                shape: "rect",
                coords: [207,1398,868,1607],
                title: "Ramo Posterior do Sulco Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  É o maior dos ramos e percorre em direção a porção posterior do telencéfalo, sendo que na porção posterior é circundado pelo giro supramarginal. Responsável pela separação dos lobos temporal e parietal.",
                reference: "Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574 | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [173,1055,871,1203],
                title: "Giro Frontal Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro frontal inferior do hemisfério cerebral esquerdo é denominado giro de Broca, e aí se localiza, na maioria dos indivíduos, uma das áreas de linguagem do cérebro. Essa estrutura é delimitada pelo sulco lateral e pelo sulco frontal inferior, sendo que esses a dividem em três porções diferentes: Opercular - Localizada entre o sulco pré-central e o ramo ascendente do sulco lateral. Triangular - Localizada entre as porções anterior e ascendente do sulco lateral. Orbital - Parte mais anterior do giro, delimitada pela porção anterior do sulco lateral.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect",
                coords: [180,824,878,972],
                title: "Sulco frontal inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco frontal inferior sai anterior ao sulco pré-central e percorre o lobo frontal, onde marca o limite entre o giro frontal médio e o giro frontal inferior.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [367,443,1065,591],
                title: "Giro Frontal Médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista superolateral está localizado entre os sulcos frontal superior e frontal inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect",
                coords: [631,181,1329,329],
                title: "Sulco Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco frontal superior sai anterior ao sulco pré-central e percorre o lobo frontal, onde marca o limite entre o giro frontal superior e o giro frontal médio.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [1373,92,2053,235],
                title: "Giro Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista superolateral é delimitado superiormente pela margem superior do hemisfério e pelo sulco frontal superior inferiormente. Na vista medial tem como limite superior a margem superior do hemisfério e tem o sulco do giro do cíngulo como limite inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect",
                coords: [2088,72,2768,215],
                title: "Sulco do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco do cíngulo situa-se superior ao giro do cíngulo e inferior ao giro frontal superior e ao lóbulo paracentral. Essa estrutura circunda o giro do cíngulo e, em sua porção mais posterior, emite um ramo, chamado de ramo marginal, e se continua como sulco subparietal.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [2368,312,2996,416],
                title: "Giro do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro do cíngulo se localiza inferior ao sulco do giro do cíngulo e superior ao sulco do corpo caloso. Esse giro é um dos componentes do sistema límbico, sendo importante para memória e para emoção, pois desempenha uma função na formação e processamento emocional.",
                reference: "Pare JR, Kahn JH. Basic neuroanatomy and stroke syndromes. Emerg Med Clin North Am. 2012 Aug;30(3):601-15. doi: 10.1016/j.emc.2012.05.004. PMID: 22974640. | Claussenius-Kalman H, Vaughn KA, Archila-Suerte P, Hernandez AE. Age of acquisition impacts the brain differently depending on neuroanatomical metric. Hum Brain Mapp. 2020 Feb 1;41(2):484-502. doi: 10.1002/hbm.24817. Epub 2019 Oct 10. PMID: 31600019; PMCID: PMC7267963. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect",
                coords: [2640,444,3268,548],
                title: "Fascículo do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O fascículo do cíngulo é um feixe de fibras nervosas localizado no sistema límbico, situado dentro do giro do cíngulo, logo acima do corpo caloso. Ele conecta regiões do córtex frontal ao córtex parietal e temporal, desempenhando um papel essencial na integração de funções emocionais, cognitivas e de memória. Essa estrutura também contribui para a regulação de respostas emocionais e comportamentais. É fundamental em circuitos associados à atenção, aprendizado e processamento de informações emocionais. Alterações no fascículo do cíngulo podem estar associadas a transtornos psiquiátricos, como depressão e ansiedade.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [2828,750,3798,896],
                title: "Fascículo Longitudinal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Sendo caracterizado como uma fibra de associação, o fascículo longitudinal superior é um trato de fibras de associação bidirecional, conectando as partes anterior (frontal, opercular) às posteriores (temporal, parietal, occipital) de cada hemisfério, ligando também as áreas expressivas às receptivas da linguagem.",
                reference: "GENEVIÈVE NOLZE-CHARRON et al. Tractography of the external capsule and cognition: A diffusion MRI study of cholinergic fibers. Experimental gerontology, v. 130, p. 110792–110792, 1 fev. 2020."
            },
            {
                shape: "rect",
                coords: [2969,1211,3735,1440],
                title: "Corno Anterior do Ventrículo Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Os ventrículos laterais estão localizados no parênquima encefálico, um em cada hemisfério cerebral. Possuem formato semelhante à letra 'C' e são compostos por um corpo e três cornos: anterior (frontal), posterior (occipital) e inferior (temporal). O corno inferior encontra-se no lobo temporal, enquanto o corpo do ventrículo atravessa o lobo parietal em direção ao frontal. O corno anterior estende-se anteriormente no lobo frontal, e o corno posterior projeta-se posteriormente no lobo occipital. Na extremidade anterior do corpo, há uma abertura em forma de 'Y', o forame interventricular, que conecta os ventrículos laterais ao terceiro ventrículo.",
                reference: "Lehtinen MK, Bjornsson CS, Dymecki SM, Gilbertson RJ, Holtzman DM, Monuki ES. The choroid plexus and cerebrospinal fluid: emerging roles in development, disease, and therapy. J Neurosci. 2013 Nov 6;33(45):17553-9. doi: 10.1523/JNEUROSCI.3258-13.2013. PMID: 24198345; PMCID: PMC3818536. | Chitty LS, Chudleigh P, Wright E, Campbell S, Pembrey M. The significance of choroid plexus cysts in an unselected population: results of a multicenter study. Ultrasound Obstet Gynecol. 1998 Dec;12(6):391-7. doi: 10.1046/j.1469-0705.1998.12060391.x. PMID: 9918087. | Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [3026,1480,3792,1596],
                title: "Joelho do Corpo Caloso",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  É a parte anterior do corpo caloso e se funde abaixo com o rostro, uma porção fina e afilada em formato de bico de pássaro que forma o assoalho do corno frontal e é contínua para baixo, em frente à comissura anterior, com a lâmina terminal. O joelho dá origem a um grande feixe de fibras, o fórceps menor, que forma a parede anterior do corno frontal e interconecta os lobos frontais. É suprido por ramos da artéria cerebral anterior.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | MORADI, B. et al. Fetal corpus callosum abnormalities: Ultrasound and magnetic resonance imaging role. Journal of Clinical Ultrasound, v. 50, n. 7, p. 989–1003, 30 abr. 2022."
            },
            {
                shape: "rect",
                coords: [2942,1644,3446,1762],
                title: "Giro Reto",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro reto é uma estrutura do lobo frontal localizada na superfície inferior do cérebro, ao longo da linha média, imediatamente acima do trato olfatório. Ele faz parte do córtex orbitofrontal e está envolvido em funções relacionadas ao processamento de informações emocionais, tomada de decisão e integração olfativa. O giro reto também contribui para a regulação de comportamentos sociais e funções executivas. É irrigado por ramos da artéria cerebral anterior e desempenha um papel importante em circuitos límbicos e frontais.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [2986,2007,3490,2125],
                title: "Giros Orbitários",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Os giros orbitários estão localizados na superfície orbital do lobo frontal, formando a base anterior do cérebro. Eles são delimitados por sulcos orbitários e, geralmente, criam uma disposição em forma de H. Esses giros estão envolvidos em funções relacionadas ao processamento emocional, tomada de decisão, comportamento social e integração sensorial. Conectados ao córtex pré-frontal, desempenham um papel crucial em funções executivas e na regulação de respostas ao ambiente.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [3036,1830,3540,1948],
                title: "Sulco Olfatório",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco olfatório é uma estrutura localizada na superfície orbital do lobo frontal, ao longo da base do cérebro. Ele abriga o bulbo e o trato olfatório, estruturas responsáveis por transmitir informações sensoriais relacionadas ao olfato para o córtex cerebral. Situado entre o giro reto e os giros orbitais, o sulco olfatório é fundamental para a percepção e processamento dos estímulos olfativos.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            }
        ],
    },
    {
        name: "cortes-coronais04",
        areas: [
            {
                shape: "rect",
                coords: [710,2091,1146,2235],
                title: "Giro Reto",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro reto é uma estrutura do lobo frontal localizada na superfície inferior do cérebro, ao longo da linha média, imediatamente acima do trato olfatório. Ele faz parte do córtex orbitofrontal e está envolvido em funções relacionadas ao processamento de informações emocionais, tomada de decisão e integração olfativa. O giro reto também contribui para a regulação de comportamentos sociais e funções executivas. É irrigado por ramos da artéria cerebral anterior e desempenha um papel importante em circuitos límbicos e frontais.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [455,1933,1079,2052],
                title: "Sulco Olfatório",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco olfatório é uma estrutura localizada na superfície orbital do lobo frontal, ao longo da base do cérebro. Ele abriga o bulbo e o trato olfatório, estruturas responsáveis por transmitir informações sensoriais relacionadas ao olfato para o córtex cerebral. Situado entre o giro reto e os giros orbitais, o sulco olfatório é fundamental para a percepção e processamento dos estímulos olfativos.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [462,1777,1086,1896],
                title: "Giros Orbitários",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Os giros orbitários estão localizados na superfície orbital do lobo frontal, formando a base anterior do cérebro. Eles são delimitados por sulcos orbitários e, geralmente, criam uma disposição em forma de H. Esses giros estão envolvidos em funções relacionadas ao processamento emocional, tomada de decisão, comportamento social e integração sensorial. Conectados ao córtex pré-frontal, desempenham um papel crucial em funções executivas e na regulação de respostas ao ambiente.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [472,1602,1096,1721],
                title: "Lobo Temporal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lobo temporal é uma das principais regiões do cérebro, localizado nas laterais dos hemisférios cerebrais, abaixo do sulco lateral (ou fissura de Sylvius). Ele é parte do córtex cerebral e desempenha um papel essencial em várias funções neurológicas e cognitivas, especialmente aquelas relacionadas à percepção sensorial, memória e linguagem.",
                reference: "Almeida LCA, Lobato VA, Santos MCV, Moraes AC, Costa BS. Surgical treatment of temporal lobe epilepsy: comparative results of selective amygdalohippocampectomy versus anterior temporal lobectomy from a referral center in Brazil. Arq Neuropsiquiatr. 2023;81(7):647–655. DOI: https://doi.org/10.1055/s-0043-1771172."
            },
            {
                shape: "rect",
                coords: [2,1351,945,1480],
                title: "Ramo Posterior do Sulco Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  É o maior dos ramos e percorre em direção a porção posterior do telencéfalo, sendo que na porção posterior é circundado pelo giro supramarginal. Responsável pela separação dos lobos temporal e parietal.",
                reference: "Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574 | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [183,1087,921,1221],
                title: "Giro Frontal Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro frontal inferior do hemisfério cerebral esquerdo é denominado giro de Broca, e aí se localiza, na maioria dos indivíduos, uma das áreas de linguagem do cérebro. Essa estrutura é delimitada pelo sulco lateral e pelo sulco frontal inferior, sendo que esses a dividem em três porções diferentes: Opercular - Localizada entre o sulco pré-central e o ramo ascendente do sulco lateral. Triangular - Localizada entre as porções anterior e ascendente do sulco lateral. Orbital - Parte mais anterior do giro, delimitada pela porção anterior do sulco lateral.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect",
                coords: [176,814,914,948],
                title: "Sulco frontal inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco frontal inferior sai anterior ao sulco pré-central e percorre o lobo frontal, onde marca o limite entre o giro frontal médio e o giro frontal inferior.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [337,599,1075,733],
                title: "Giro Frontal Médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista superolateral está localizado entre os sulcos frontal superior e frontal inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect",
                coords: [438,360,1176,494],
                title: "Sulco Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco frontal superior sai anterior ao sulco pré-central e percorre o lobo frontal, onde marca o limite entre o giro frontal superior e o giro frontal médio.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [1043,108,1781,242],
                title: "Giro Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista superolateral é delimitado superiormente pela margem superior do hemisfério e pelo sulco frontal superior inferiormente. Na vista medial tem como limite superior a margem superior do hemisfério e tem o sulco do giro do cíngulo como limite inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect",
                coords: [1849,54,2482,198],
                title: "Giro do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro do cíngulo se localiza inferior ao sulco do giro do cíngulo e superior ao sulco do corpo caloso. Esse giro é um dos componentes do sistema límbico, sendo importante para memória e para emoção, pois desempenha uma função na formação e processamento emocional.",
                reference: "Pare JR, Kahn JH. Basic neuroanatomy and stroke syndromes. Emerg Med Clin North Am. 2012 Aug;30(3):601-15. doi: 10.1016/j.emc.2012.05.004. PMID: 22974640. | Claussenius-Kalman H, Vaughn KA, Archila-Suerte P, Hernandez AE. Age of acquisition impacts the brain differently depending on neuroanatomical metric. Hum Brain Mapp. 2020 Feb 1;41(2):484-502. doi: 10.1002/hbm.24817. Epub 2019 Oct 10. PMID: 31600019; PMCID: PMC7267963. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect",
                coords: [2543,191,3176,335],
                title: "Sulco do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco do cíngulo situa-se superior ao giro do cíngulo e inferior ao giro frontal superior e ao lóbulo paracentral. Essa estrutura circunda o giro do cíngulo e, em sua porção mais posterior, emite um ramo, chamado de ramo marginal, e se continua como sulco subparietal.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [2781,373,3414,517],
                title: "Fascículo do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O fascículo do cíngulo é um feixe de fibras nervosas localizado no sistema límbico, situado dentro do giro do cíngulo, logo acima do corpo caloso. Ele conecta regiões do córtex frontal ao córtex parietal e temporal, desempenhando um papel essencial na integração de funções emocionais, cognitivas e de memória. Essa estrutura também contribui para a regulação de respostas emocionais e comportamentais. É fundamental em circuitos associados à atenção, aprendizado e processamento de informações emocionais. Alterações no fascículo do cíngulo podem estar associadas a transtornos psiquiátricos, como depressão e ansiedade.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [2858,906,3792,1064],
                title: "Fascículo Longitudinal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Sendo caracterizado como uma fibra de associação, o fascículo longitudinal superior é um trato de fibras de associação bidirecional, conectando as partes anterior (frontal, opercular) às posteriores (temporal, parietal, occipital) de cada hemisfério, ligando também as áreas expressivas às receptivas da linguagem.",
                reference: "GENEVIÈVE NOLZE-CHARRON et al. Tractography of the external capsule and cognition: A diffusion MRI study of cholinergic fibers. Experimental gerontology, v. 130, p. 110792–110792, 1 fev. 2020."
            },
            {
                shape: "rect",
                coords: [2858,1234,3792,1392],
                title: "Corno Anterior do Ventrículo Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Os ventrículos laterais estão localizados no parênquima encefálico, um em cada hemisfério cerebral. Possuem formato semelhante à letra 'C' e são compostos por um corpo e três cornos: anterior (frontal), posterior (occipital) e inferior (temporal). O corno inferior encontra-se no lobo temporal, enquanto o corpo do ventrículo atravessa o lobo parietal em direção ao frontal. O corno anterior estende-se anteriormente no lobo frontal, e o corno posterior projeta-se posteriormente no lobo occipital. Na extremidade anterior do corpo, há uma abertura em forma de 'Y', o forame interventricular, que conecta os ventrículos laterais ao terceiro ventrículo.",
                reference: "Lehtinen MK, Bjornsson CS, Dymecki SM, Gilbertson RJ, Holtzman DM, Monuki ES. The choroid plexus and cerebrospinal fluid: emerging roles in development, disease, and therapy. J Neurosci. 2013 Nov 6;33(45):17553-9. doi: 10.1523/JNEUROSCI.3258-13.2013. PMID: 24198345; PMCID: PMC3818536. | Chitty LS, Chudleigh P, Wright E, Campbell S, Pembrey M. The significance of choroid plexus cysts in an unselected population: results of a multicenter study. Ultrasound Obstet Gynecol. 1998 Dec;12(6):391-7. doi: 10.1046/j.1469-0705.1998.12060391.x. PMID: 9918087. | Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [2864,1505,3798,1663],
                title: "Cabeça do Núcleo Caudado",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O núcleo caudado é uma estrutura subcortical em forma de \"C\" localizada nos hemisférios cerebrais e faz parte dos gânglios da base. Ele desempenha um papel crucial no controle motor, aprendizado, memória e regulação emocional. Suas principais divisões são a cabeça, o corpo e a cauda, cada uma conectada a diferentes áreas cerebrais para integrar informações motoras e cognitivas. Alterações no núcleo caudado estão associadas a doenças como Parkinson, Huntington e transtornos psiquiátricos.",
                reference: "Driscoll ME, Bollu PC, Tadi P. Neuroanatomy, Nucleus Caudate. [Updated 2023 Jul 24]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2025 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK557407/"
            },
            {
                shape: "rect",
                coords: [2861,1714,3654,1862],
                title: "Joelho do Corpo Caloso",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  É a parte anterior do corpo caloso e se funde abaixo com o rostro, uma porção fina e afilada em formato de bico de pássaro que forma o assoalho do corno frontal e é contínua para baixo, em frente à comissura anterior, com a lâmina terminal. O joelho dá origem a um grande feixe de fibras, o fórceps menor, que forma a parede anterior do corno frontal e interconecta os lobos frontais. É suprido por ramos da artéria cerebral anterior.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | MORADI, B. et al. Fetal corpus callosum abnormalities: Ultrasound and magnetic resonance imaging role. Journal of Clinical Ultrasound, v. 50, n. 7, p. 989–1003, 30 abr. 2022."
            },
        ],
    },
    {
        name: "cortes-coronais05",
        areas: [
            {
                shape: "rect",
                coords: [1452,2755,1680,2852],
                title: "Uncus",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  É a parte anterior do giro parahipocampal que projeta medialmente, quando visto de cima ou de baixo, tem uma forma angular com segmentos anterior e posterior que se encontram em um ápice direcionado medialmente. Imediatamente inferior ao Uncus encontra-se o complexo amigdalóide.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | GUSTAVO RASSIER ISOLAN et al. Vascularization of the uncus – Anatomical study and clinical implications. Surgical Neurology International, v. 12, p. 393–393, 9 ago.2021."
            },
            {
                shape: "rect",
                coords: [697,2670,1277,2775],
                title: "Giro para-hipocampal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro para-hipocampal pode ser visualizado tanto na vista medial quanto na vista inferior. Ele é limitado medialmente pelo sulco do hipocampo e lateralmente pelo sulco colateral (que o separa do giro occipitotemporal lateral). Na extremidade anterior esse giro desvia-se medialmente e cruza para posterior, dando origem ao unco. Na extremidade posterior, esse giro é contínuo com o istmo do giro do cíngulo, sendo o sulco calcarino o marco utilizado para diferenciar o ambas estruturas. Além disso, a porção anterior desse giro é denominada de área entorrinal, sendo uma das primeiras regiões a serem danificadas no Alzheimer devido a sua importância para a memória.",
                reference: "Wen HT, Rhoton AL Jr, de Oliveira E, Cardoso AC, Tedeschi H, Baccanelli M, Marino R Jr. Microsurgical anatomy of the temporal lobe: part 1: mesial temporal lobe anatomy and its vascular relationships as applied to amygdalohippocampectomy. Neurosurgery. 1999 Sep;45(3):549-91; discussion 591-2. doi: 10.1097/00006123-199909000-00028. PMID: 10493377. | Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574 | Lin YH, Dhanaraj V, Mackenzie AE, Young IM, Tanglay O, Briggs RG, Chakraborty AR, Hormovas J, Fonseka RD, Kim SJ, Yeung JT, Teo C, Sughrue ME. Anatomy and White Matter Connections of the Parahippocampal Gyrus. World Neurosurg. 2021 Apr;148:e218-e226. doi: 10.1016/j.wneu.2020.12.136. Epub 2021 Jan 4. PMID: 33412321."
            },
            {
                shape: "rect",
                coords: [744,2551,1183,2641],
                title: "Sulco Rinal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco rinal é uma estrutura pouco pronunciada localizada na superfície medial do lobo temporal, próxima ao uncus e ao giro para-hipocampal. Ele marca a transição entre o córtex olfatório primário e áreas associadas ao processamento de informações olfativas e emocionais. Essa região está intimamente ligada ao sistema límbico, contribuindo para a integração de memória, olfato e emoções.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [284,2409,1099,2500],
                title: "Giro occipitotemporal lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro occipitotemporal lateral é uma estrutura localizada entre o sulco colateral e o sulco occipitotemporal. O giro pode ser visualizado tanto na vista medial, como na vista inferior do hemisfério.",
                reference: "Lehman VT, Black DF, Bernstein MA, Welker KM. Temporal lobe anatomy: eight imaging signs to facilitate interpretation of MRI. Surg Radiol Anat. 2016 May;38(4):433-43. doi: 10.1007/s00276-015-1582-9. Epub 2015 Oct 29. PMID: 26514961."
            },
            {
                shape: "rect",
                coords: [304,2291,1119,2382],
                title: "Sulco occipitotemporal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco occipitotemporal é responsável por separar o giro temporal inferior do giro occipitotemporal lateral. Essa estrutura apresenta uma trajetória curvilínea ligando os lobos temporal e occipital. Além disso, esse sulco pode ser contínuo ou pode sofrer interrupções em seu percurso.",
                reference: "Chau AM, Stewart F, Gragnaniello C. Sulcal and gyral anatomy of the basal occipital-temporal lobe. Surg Radiol Anat. 2014 Dec;36(10):959-65. doi: 10.1007/s00276-014-1294-6. Epub 2014 Apr 18. PMID: 24744138. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect",
                coords: [260,2120,1075,2211],
                title: "Giro temporal inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lobo temporal tem suas estruturas delimitadas por três sulcos paralelos, o sulco lateral(ramo posterior), o sulco temporal superior e o sulco temporal inferior. O giro temporal inferior se localiza entre o sulco temporal inferior(superiormente) e o sulco occipitotemporal(inferiormente). Essa estrutura pode se apresentar fragmentada, em alguns casos, e fundida ao giro temporal médio, sem apresentar limites bem definidos entre os dois giros. Além disso, o giro temporal inferior pode ser visualizado tanto na vista superolateral, como na vista inferior, pois ele compõe a parte lateral da superfície basal do cérebro.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [186,2015,1001,2106],
                title: "Sulco temporal inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco temporal inferior se origina anteriormente na região do lobo temporal, onde percorre paralelo ao sulco temporal superior até chegar ao lobo parietal, assim como o sulco temporal superior. Essa estrutura pode se apresentar dividida em dois ou três sulcos pequenos.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [102,1904,917,1995],
                title: "Giro temporal médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lobo temporal tem suas estruturas delimitadas por três sulcos paralelos, o sulco lateral (ramo posterior), o sulco temporal superior e o sulco temporal inferior. O giro temporal médio se localiza entre o sulco temporal superior e o sulco temporal inferior. Em alguns casos, esse giro pode aparecer fundido ao giro temporal inferior, sem apresentar limites bem definidos entre os dois giros.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [21,1787,836,1878],
                title: "Sulco temporal superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco temporal superior se origina próximo ao polo temporal e percorre posteriormente até adentrar na região do lobo parietal, onde termina no giro angular. Essa estrutura percorre paralelamente ao ramo posterior do sulco lateral.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [11,1626,826,1717],
                title: "Giro temporal superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lobo temporal tem suas estruturas delimitadas por três sulcos paralelos, o sulco lateral (ramo posterior), o sulco temporal superior e o sulco temporal inferior. O giro temporal superior se localiza entre o sulco temporal superior (inferiormente) e o ramo posterior do sulco lateral. Em sua porção superior se localizam os giros temporais transversos, sendo o giro temporal transverso anterior, o giro de Heschl, o local da área auditiva primária do córtex.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [8,1315,823,1406],
                title: "Giros Curtos da Ínsula",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A ínsula tem uma forma triangular com seu ápice direcionado anteriormente e inferiormente, sendo circundada pelo sulco circular da ínsula. O sulco central da ínsula é um sulco relativamente constante que se estende para cima e para trás através da ínsula e a divide em uma grande parte anterior que é dividida por vários sulcos rasos em três a cinco giros curtos, e uma parte posterior que é formada pelos giros longos anterior e posterior. A ínsula tem uma organização complexa com uma representação neuroanatômica topográfica dos processos viscerais e três sub-regiões com diferentes níveis de granularidade laminar, distribuição de receptores acetilcolinérgicos e padrões de conectividade local, cortical, subcortical e do tronco cerebral. Essas características citoarquitetônicas e de conectividade anatômica sugerem uma posição central e especialização do córtex insular no processamento de informações interoceptivas. Essa convergência de informações corticais e interoceptivas no córtex insular levou a hipóteses influentes sobre seus potenciais papéis na predição interoceptiva, integração de informações para a consciência, consciência emocional, inferência interoceptiva, emoção e aprendizado baseado em erros de sentimentos.",
                reference: "Jobst BC, Gonzalez-Martinez J, Isnard J, Kahane P, Lacuey N, Lahtoo SD, Nguyen DK, Wu C, Lado F. The Insula and Its Epilepsies. Epilepsy Curr. 2019 Jan;19(1):11-21. doi: 10.1177/1535759718822847. Epub 2019 Jan 31. PMID: 30838920; PMCID: PMC6610377. | FERMIN, A. S. R.; FRISTON, K.; YAMAWAKI, S. An insula hierarchical network architecture for active interoceptive inference. Royal Society Open Science, v. 9, n. 6, jun. 2022."
            },
            {
                shape: "rect",
                coords: [15,1112,881,1211],
                title: "Ramo Posterior do Sulco Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  É o maior dos ramos e percorre em direção a porção posterior do telencéfalo, sendo que na porção posterior é circundado pelo giro supramarginal. Responsável pela separação dos lobos temporal e parietal.",
                reference: "Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574 | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [2,927,754,1034],
                title: "Sulco Circular da Ínsula",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco circular da ínsula é uma estrutura anatômica que delimita a ínsula (ou córtex insular), separando-a das regiões adjacentes do cérebro. A ínsula é uma área do córtex cerebral localizada profundamente no interior do sulco lateral (fissura de Sylvius) e está envolvida em funções como percepção sensorial, emoções e regulação autonômica.",
                reference: "Jobst BC, Gonzalez-Martinez J, Isnard J, Kahane P, Lacuey N, Lahtoo SD, Nguyen DK, Wu C, Lado F. The Insula and Its Epilepsies. Epilepsy Curr. 2019 Jan;19(1):11-21. doi: 10.1177/1535759718822847. Epub 2019 Jan 31. PMID: 30838920; PMCID: PMC6610377. | FERMIN, A. S. R.; FRISTON, K.; YAMAWAKI, S. An insula hierarchical network architecture for active interoceptive inference. Royal Society Open Science, v. 9, n. 6, jun. 2022."
            },
            {
                shape: "rect",
                coords: [170,779,760,869],
                title: "Giro Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista superolateral é delimitado superiormente pela margem superior do hemisfério e pelo sulco frontal superior inferiormente. Na vista medial tem como limite superior a margem superior do hemisfério e tem o sulco do giro do cíngulo como limite inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect",
                coords: [308,625,898,715],
                title: "Sulco frontal inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco frontal inferior sai anterior ao sulco pré-central e percorre o lobo frontal, onde marca o limite entre o giro frontal médio e o giro frontal inferior.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [326,458,916,548],
                title: "Giro Frontal Médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista superolateral está localizado entre os sulcos frontal superior e frontal inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect",
                coords: [513,305,1103,395],
                title: "Sulco Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco frontal superior sai anterior ao sulco pré-central e percorre o lobo frontal, onde marca o limite entre o giro frontal superior e o giro frontal médio.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [1060,152,1650,242],
                title: "Giro Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista superolateral é delimitado superiormente pela margem superior do hemisfério e pelo sulco frontal superior inferiormente. Na vista medial tem como limite superior a margem superior do hemisfério e tem o sulco do giro do cíngulo como limite inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect",
                coords: [1721,198,2180,399],
                title: "Fascículo do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O fascículo do cíngulo é um feixe de fibras nervosas localizado no sistema límbico, situado dentro do giro do cíngulo, logo acima do corpo caloso. Ele conecta regiões do córtex frontal ao córtex parietal e temporal, desempenhando um papel essencial na integração de funções emocionais, cognitivas e de memória. Essa estrutura também contribui para a regulação de respostas emocionais e comportamentais. É fundamental em circuitos associados à atenção, aprendizado e processamento de informações emocionais. Alterações no fascículo do cíngulo podem estar associadas a transtornos psiquiátricos, como depressão e ansiedade.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [1842,44,2580,171],
                title: "Tronco do Corpo Caloso",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  É a porção central e alongada do corpo caloso, localizada entre o joelho, na parte anterior, e o esplênio, na parte posterior. Ele constitui a maior parte do corpo caloso e contém fibras comissurais que conectam amplamente os hemisférios cerebrais, incluindo áreas do córtex parietal e temporal. O tronco é essencial para a integração e coordenação das funções bilaterais do cérebro. É irrigado por ramos da artéria cerebral anterior e, em menor grau, pela artéria cerebral posterior.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | MORADI, B. et al. Fetal corpus callosum abnormalities: Ultrasound and magnetic resonance imaging role. Journal of Clinical Ultrasound, v. 50, n. 7, p. 989–1003, 30 abr. 2022."
            },
            {
                shape: "rect",
                coords: [2416,192,3191,292],
                title: "Fascículo Longitudinal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Sendo caracterizado como uma fibra de associação, o fascículo longitudinal superior é um trato de fibras de associação bidirecional, conectando as partes anterior (frontal, opercular) às posteriores (temporal, parietal, occipital) de cada hemisfério, ligando também as áreas expressivas às receptivas da linguagem.",
                reference: "GENEVIÈVE NOLZE-CHARRON et al. Tractography of the external capsule and cognition: A diffusion MRI study of cholinergic fibers. Experimental gerontology, v. 130, p. 110792–110792, 1 fev. 2020."
            },
            {
                shape: "rect",
                coords: [2463,363,3335,446],
                title: "Septo Pelúcido",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Septo Pelúcido está localizado entre o corpo caloso e o fórnix, sendo uma fina placa triangular de duas camadas que separa os cornos anteriores dos ventrículos laterais direito e esquerdo do cérebro um do outro.",
                reference: "de Melo Mussi, A.C. and de Oliveira, E.P.D.L., 2019. Ventricular Anatomy. In Comprehensive Overview of Modern Surgical Approaches to Intrinsic Brain Tumors (pp. 107-118). Academic Press."
            },
            {
                shape: "rect",
                coords: [2672,472,3745,560],
                title: "Parte Central do Ventrículo Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Os ventrículos laterais estão localizados no parênquima encefálico, um em cada hemisfério cerebral. Possuem formato semelhante à letra 'C' e são compostos por um corpo e três cornos: anterior (frontal), posterior (occipital) e inferior (temporal). O corno inferior encontra-se no lobo temporal, enquanto o corpo do ventrículo atravessa o lobo parietal em direção ao frontal. O corno anterior estende-se anteriormente no lobo frontal, e o corno posterior projeta-se posteriormente no lobo occipital. Na extremidade anterior do corpo, há uma abertura em forma de 'Y', o forame interventricular, que conecta os ventrículos laterais ao terceiro ventrículo.",
                reference: "Lehtinen MK, Bjornsson CS, Dymecki SM, Gilbertson RJ, Holtzman DM, Monuki ES. The choroid plexus and cerebrospinal fluid: emerging roles in development, disease, and therapy. J Neurosci. 2013 Nov 6;33(45):17553-9. doi: 10.1523/JNEUROSCI.3258-13.2013. PMID: 24198345; PMCID: PMC3818536. Chitty LS, Chudleigh P, Wright E, Campbell S, Pembrey M. The significance of choroid plexus cysts in an unselected population: results of a multicenter study. Ultrasound Obstet Gynecol. 1998 Dec;12(6):391-7. doi: 10.1046/j.1469-0705.1998.12060391.x. PMID: 9918087. Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [2876,583,3512,667],
                title: "Gruta Septal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O septo pelúcido possui um espaço entre essas camadas conhecido como caverna do septo pelúcido ou gruta septal.  Esse espaço geralmente desaparece durante a infância. Embora o termo 'quinto ventrículo' tenha sido usado para esse espaço, ele não é mais considerado preciso devido à falta de conexão contínua com o sistema ventricular.",
                reference: "de Melo Mussi, A.C. and de Oliveira, E.P.D.L., 2019. Ventricular Anatomy. In Comprehensive Overview of Modern Surgical Approaches to Intrinsic Brain Tumors (pp. 107-118). Academic Press."
            },
            {
                shape: "rect",
                coords: [2963,701,3748,785],
                title: "Cabeça do Núcleo Caudado",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O núcleo caudado é uma estrutura subcortical em forma de \"C\" localizada nos hemisférios cerebrais e faz parte dos gânglios da base. Ele desempenha um papel crucial no controle motor, aprendizado, memória e regulação emocional. Suas principais divisões são a cabeça, o corpo e a cauda, cada uma conectada a diferentes áreas cerebrais para integrar informações motoras e cognitivas. Alterações no núcleo caudado estão associadas a doenças como Parkinson, Huntington e transtornos psiquiátricos.",
                reference: "Driscoll ME, Bollu PC, Tadi P. Neuroanatomy, Nucleus Caudate. [Updated 2023 Jul 24]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2025 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK557407/"
            },
            {
                shape: "rect",
                coords: [2905,822,3604,906],
                title: "Cápsula extrema",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A cápsula extrema está diretamente abaixo da superfície insular e é composta de fibras de associação curtas que se estendem em direção a todos os opérculos. A cápsula extrema é a cápsula mais externa e superficial, situada entre a superfície insular e o claustro. Ela é formada principalmente por fibras de associação curtas localizadas logo abaixo do córtex insular, conectando os giros insulares. Essas fibras se estendem sob os sulcos limitantes da ínsula até os opérculos, conectando os córtices insular e opercular.",
                reference: "RIBAS, E. C. et al. Microsurgical anatomy of the central core of the brain. Journal of Neurosurgery, v. 129, n. 3, p. 752–769, set. 2018."
            },
            {
                shape: "rect",
                coords: [2892,938,3520,1028],
                title: "Claustrum",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  É uma fina camada de substância cinzenta localizada no cérebro anterior, que se estende de anterior para posterior ao longo do estriado e situado medialmente ao córtex insular e lateralmente ao putâmen. Está entre as cápsulas externa e extrema, causando um certo destaque por ser substância cinzenta entre duas substâncias brancas. Estudos recentes sugerem que o Claustro atua nas informações límbicas e sensoriais para determinar a saliência de diferentes estímulos e guiar a atenção.",
                reference: "SMITH, J. B.; LEE, A. K.; JACKSON, J. The claustrum. Current Biology, v. 30, n. 23, p. R1401–R1406, dez. 2020."
            },
            {
                shape: "rect",
                coords: [2912,1051,3540,1141],
                title: "Cápsula externa",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Localizada medialmente ao claustro e lateralmente ao putâmen, é uma estrutura formada por feixes de fibras brancas oriundas do fascículo uncinado, fascículo fronto-occipital inferior e claustro corticais.",
                reference: "RIBAS, E. C. et al. Microsurgical anatomy of the central core of the brain. Journal of Neurosurgery, v. 129, n. 3, p. 752–769, set. 2018."
            },
            {
                shape: "rect",
                coords: [2929,1173,3557,1263],
                title: "Globo Pálido",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Ele é dividido em globo pálido interno e globo pálido externo a partir da lâmina medular medial, sendo uma massa triangular de células localizada medialmente ao putâmen e sua função primária é controlar movimentos conscientes e proprioceptivos, recebendo suprimento sanguíneo da artéria coroidal anterior, artéria cerebral média e artéria cerebral anterior. Assim como o estriado, a maior parte dos neurônios do pálido possuem o GABA, entretanto a densidade é menor, os neurônios palidais recebem a maior parte das suas aferências do estriado e do subtalâmico e enviam referências para outros núcleos da base, para o tálamo ou para o tronco cerebral. Confere a principal saída do sistema dos núcleos da base a partir do pálido interno, direcionando para os núcleos talâmicos e alcançando áreas corticais, diferentemente, o pálido externo possui conexões externas limitadas, se restringindo a conexões com o pálido interno. Como o globo pálido interno é o principal circuito de saída do estriado, ele tem sido usado significativamente em cirurgia ablativa para vários distúrbios neuropsiquiátricos. A cirurgia do globo pálido interno tem sido alvo de tratamento de distúrbios de movimento hipercinéticos e hipocinéticos, incluindo distúrbios comportamentais como a síndrome de Tourette.",
                reference: "JAVED, N.; CASCELLA, M. Neuroanatomy, Globus Pallidus. StatPearls, 31 jul. 2021. ARBER, S.; COSTA, R. M. Networking brainstem and basal ganglia circuits for movement. Nature Reviews Neuroscience, 14 abr. 2022."
            },
            {
                shape: "rect",
                coords: [2973,1315,3601,1405],
                title: "Núcleo Lentiforme",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O núcleo lentiforme é formado pelo Globo Pálido e Putâmen, sendo uma importante estrutura subcortical do cérebro, situada nos hemisférios cerebrais, dentro dos gânglios da base. Ele desempenha um papel crucial no controle motor, aprendizado de hábitos, regulação do movimento, e em processos emocionais e cognitivos.",
                reference: "ARBER, S.; COSTA, R. M. Networking brainstem and basal ganglia circuits for movement. Nature Reviews Neuroscience, 14 abr. 2022. HJORTH, J. J. J. et al. The microcircuits of striatum in silico. Proceedings of the National Academy of Sciences, v. 117, n. 17, p. 9554–9565, 22 abr. 2020."
            },
            {
                shape: "rect",
                coords: [3010,1437,3638,1527],
                title: "Corpo Amigdalóide",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A amígdala é formada por vários núcleos e campos corticais localizados bilateralmente na parte anteromedial dos lobos temporais do cérebro, se conectando de maneira extensiva e recíproca com uma variedade de regiões corticais e subcorticais. Está envolvida em uma ampla diversidade de processos comportamentais, como aprendizagem associativa, como o condicionamento do medo. Superiormente, a amígdala se funde com o claustro e o globo pálido sem nenhuma demarcação clara. A porção superior posterior da amígdala inclina-se para trás acima da cabeça do hipocampo e do recesso uncal para formar a porção anterior do teto do corno temporal. Medialmente, está relacionada aos segmentos anterior e posterior do uncus. A amígdala dá origem à estria terminal, que percorre entre o tálamo e o núcleo caudado, profundamente à veia talamoestriada.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. ŠIMIĆ, G. et al. Understanding Emotions: Origins and Roles of the Amygdala. Biomolecules, v. 11, n. 6, p. 823, 2021."
            },
            {
                shape: "rect",
                coords: [2950,1565,3771,1664],
                title: "Fascículo Longitudinal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Sendo caracterizado como uma fibra de associação, o fascículo longitudinal superior é um trato de fibras de associação bidirecional, conectando as partes anterior (frontal, opercular) às posteriores (temporal, parietal, occipital) de cada hemisfério, ligando também as áreas expressivas às receptivas da linguagem.",
                reference: "GENEVIÈVE NOLZE-CHARRON et al. Tractography of the external capsule and cognition: A diffusion MRI study of cholinergic fibers. Experimental gerontology, v. 130, p. 110792–110792, 1 fev. 2020."
            },
            {
                shape: "rect",
                coords: [2949,1783,3476,1879],
                title: "Cápsula Interna",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A cápsula interna é uma faixa espessa de substância branca localizada entre o núcleo caudado, o tálamo e o núcleo lentiforme. Ela contém importantes fibras ascendentes e descendentes, conectando o córtex cerebral ao tronco encefálico e à medula espinhal. Divide-se em três partes: braço anterior, joelho e braço posterior, cada uma transmitindo sinais motores, sensitivos e associativos. Sua integridade é crucial para funções como movimento e percepção, e lesões nessa região podem causar déficits motores e sensoriais significativos.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378.\nMachado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [2946,1901,3577,1997],
                title: "Colunas do Fórnice",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O fórnice é uma estrutura arqueada de substância branca localizada no sistema límbico, responsável pela conexão entre o hipocampo e outras áreas cerebrais, especialmente os corpos mamilares do hipotálamo. É formado por fibras nervosas que desempenham um papel crucial na memória e na integração emocional. O fórnix é dividido em três porções principais: Colunas, Corpo e Pernas do fórnice.",
                reference: "Haines, D. E., Mihailoff, G. A. (2018). Fundamental neuroscience for basic and clinical applications. Philadelphia, PA: Elsevier.\nHaines, D.E. (2014). Neuroanatomy in clinical context: An atlas of structures, sections, systems and syndromes (9th ed.). Philadelphia, PA: Lippincott Williams & Wilkins.\nStandring, S. (2016). Gray's Anatomy (41st ed.). Edinburgh: Elsevier Churchill Livingstone.\nBlumenfeld, H. (2018). Neuroanatomy through clinical cases (2nd ed.). Sunderland, MA: Sinauer.\nMancall, E. L., Brock, D. G., & Gray, H. (2011). Gray's clinical neuroanatomy: the anatomic basis for clinical neuroscience. Philadelphia, PA: Elsevier"
            },
            {
                shape: "rect",
                coords: [2909,2064,3540,2160],
                title: "3° Ventrículo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O terceiro ventrículo é uma cavidade estreita situada na linha média, entre os dois hemisférios cerebrais. Mais especificamente, ele está situado na região do diencéfalo, onde é envolvido lateralmente pelos tálamos e inferolateralmente pelo hipotálamo. O terceiro ventrículo está conectado ao quarto ventrículo póstero-inferiormente pelo aqueduto mesencefálico (aqueduto de Sylvius). O aqueduto mesencefálico é um canal que cursa ao longo de toda a extensão do mesencéfalo, em direção à ponte.",
                reference: "Lehtinen MK, Bjornsson CS, Dymecki SM, Gilbertson RJ, Holtzman DM, Monuki ES. The choroid plexus and cerebrospinal fluid: emerging roles in development, disease, and therapy. J Neurosci. 2013 Nov 6;33(45):17553-9. doi: 10.1523/JNEUROSCI.3258-13.2013. PMID: 24198345; PMCID: PMC3818536.\nChitty LS, Chudleigh P, Wright E, Campbell S, Pembrey M. The significance of choroid plexus cysts in an unselected population: results of a multicenter study. Ultrasound Obstet Gynecol. 1998 Dec;12(6):391-7. doi: 10.1046/j.1469-0705.1998.12060391.x. PMID: 9918087.\nSnell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378.\nMachado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247"
            },
            {
                shape: "rect",
                coords: [2815,2189,3446,2285],
                title: "Comissura Anterior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A comissura anterior é um feixe de fibras nervosas que conecta os hemisférios cerebrais, localizando-se na porção anterior do terceiro ventrículo, próximo ao fórnice e à lâmina terminal. Essa estrutura é responsável pela comunicação entre áreas do lobo temporal e das amígdalas, desempenhando um papel importante na integração de informações olfativas e emocionais. Embora seja menor que o corpo caloso, sua função é essencial para a coordenação entre os hemisférios.",
                reference: "Peltier J, Verclytte S, Delmaire C, Pruvo JP, Havet E, Le Gars D. Microsurgical anatomy of the anterior commissure: correlations with diffusion tensor imaging fiber tracking and clinical relevance. Neurosurgery. 2011 Dec;69(2 Suppl Operative):ons241-6; discussion ons246-7. doi: 10.1227/NEU.0b013e31821bc822. PMID: 21499149."
            },
            {
                shape: "rect",
                coords: [2785,2318,3385,2460],
                title: "Corno Anterior do Ventrículo Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Os ventrículos laterais estão localizados no parênquima encefálico, um em cada hemisfério cerebral. Possuem formato semelhante à letra 'C' e são compostos por um corpo e três cornos: anterior (frontal), posterior (occipital) e inferior (temporal). O corno inferior encontra-se no lobo temporal, enquanto o corpo do ventrículo atravessa o lobo parietal em direção ao frontal. O corno anterior estende-se anteriormente no lobo frontal, e o corno posterior projeta-se posteriormente no lobo occipital. Na extremidade anterior do corpo, há uma abertura em forma de 'Y', o forame interventricular, que conecta os ventrículos laterais ao terceiro ventrículo.",
                reference: "Lehtinen MK, Bjornsson CS, Dymecki SM, Gilbertson RJ, Holtzman DM, Monuki ES. The choroid plexus and cerebrospinal fluid: emerging roles in development, disease, and therapy. J Neurosci. 2013 Nov 6;33(45):17553-9. doi: 10.1523/JNEUROSCI.3258-13.2013. PMID: 24198345; PMCID: PMC3818536.\nChitty LS, Chudleigh P, Wright E, Campbell S, Pembrey M. The significance of choroid plexus cysts in an unselected population: results of a multicenter study. Ultrasound Obstet Gynecol. 1998 Dec;12(6):391-7. doi: 10.1046/j.1469-0705.1998.12060391.x. PMID: 9918087.\nSnell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378.\nMachado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            }
        ],
    },
    {
        name: "cortes-coronais06",
        areas: [
            {
                shape: "rect",
                coords: [1328,2433,1532,2544],
                title: "Uncus",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  É a parte anterior do giro parahipocampal que projeta medialmente, quando visto de cima ou de baixo, tem uma forma angular com segmentos anterior e posterior que se encontram em um ápice direcionado medialmente. Imediatamente inferior ao Uncus encontra-se o complexo amigdalóide.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | GUSTAVO RASSIER ISOLAN et al. Vascularization of the uncus – Anatomical study and clinical implications. Surgical Neurology International, v. 12, p. 393–393, 9 ago.2021."
            },
            {
                shape: "rect",
                coords: [699,2544,1247,2654],
                title: "Giro para-hipocampal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro para-hipocampal pode ser visualizado tanto na vista medial quanto na vista inferior. Ele é limitado medialmente pelo sulco do hipocampo e lateralmente pelo sulco colateral (que o separa do giro occipitotemporal lateral). Na extremidade anterior esse giro desvia-se medialmente e cruza para posterior, dando origem ao unco. Na extremidade posterior, esse giro é contínuo com o istmo do giro do cíngulo, sendo o sulco calcarino o marco utilizado para diferenciar o ambas estruturas. Além disso, a porção anterior desse giro é denominada de área entorrinal, sendo uma das primeiras regiões a serem danificadas no Alzheimer devido a sua importância para a memória.",
                reference: "Wen HT, Rhoton AL Jr, de Oliveira E, Cardoso AC, Tedeschi H, Baccanelli M, Marino R Jr. Microsurgical anatomy of the temporal lobe: part 1: mesial temporal lobe anatomy and its vascular relationships as applied to amygdalohippocampectomy. Neurosurgery. 1999 Sep;45(3):549-91; discussion 591-2. doi: 10.1097/00006123-199909000-00028. PMID: 10493377. | Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574 | Lin YH, Dhanaraj V, Mackenzie AE, Young IM, Tanglay O, Briggs RG, Chakraborty AR, Hormovas J, Fonseka RD, Kim SJ, Yeung JT, Teo C, Sughrue ME. Anatomy and White Matter Connections of the Parahippocampal Gyrus. World Neurosurg. 2021 Apr;148:e218-e226. doi: 10.1016/j.wneu.2020.12.136. Epub 2021 Jan 4. PMID: 33412321."
            },
            {
                shape: "rect",
                coords: [706,2344,1261,2445],
                title: "Sulco Rinal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco rinal é uma estrutura pouco pronunciada localizada na superfície medial do lobo temporal, próxima ao uncus e ao giro para-hipocampal. Ele marca a transição entre o córtex olfatório primário e áreas associadas ao processamento de informações olfativas e emocionais. Essa região está intimamente ligada ao sistema límbico, contribuindo para a integração de memória, olfato e emoções.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [247,2222,1116,2319],
                title: "Giro occipitotemporal lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro occipitotemporal lateral é uma estrutura localizada entre o sulco colateral e o sulco occipitotemporal. O giro pode ser visualizado tanto na vista medial, como na vista inferior do hemisfério.",
                reference: "Lehman VT, Black DF, Bernstein MA, Welker KM. Temporal lobe anatomy: eight imaging signs to facilitate interpretation of MRI. Surg Radiol Anat. 2016 May;38(4):433-43. doi: 10.1007/s00276-015-1582-9. Epub 2015 Oct 29. PMID: 26514961."
            },
            {
                shape: "rect",
                coords: [220,2090,1089,2187],
                title: "Sulco occipitotemporal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco occipitotemporal é responsável por separar o giro temporal inferior do giro occipitotemporal lateral. Essa estrutura apresenta uma trajetória curvilínea ligando os lobos temporal e occipital. Além disso, esse sulco pode ser contínuo ou pode sofrer interrupções em seu percurso.",
                reference: "Chau AM, Stewart F, Gragnaniello C. Sulcal and gyral anatomy of the basal occipital-temporal lobe. Surg Radiol Anat. 2014 Dec;36(10):959-65. doi: 10.1007/s00276-014-1294-6. Epub 2014 Apr 18. PMID: 24744138. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect",
                coords: [200,1969,1069,2066],
                title: "Giro temporal inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lobo temporal tem suas estruturas delimitadas por três sulcos paralelos, o sulco lateral(ramo posterior), o sulco temporal superior e o sulco temporal inferior. O giro temporal inferior se localiza entre o sulco temporal inferior(superiormente) e o sulco occipitotemporal(inferiormente). Essa estrutura pode se apresentar fragmentada, em alguns casos, e fundida ao giro temporal médio, sem apresentar limites bem definidos entre os dois giros. Além disso, o giro temporal inferior pode ser visualizado tanto na vista superolateral, como na vista inferior, pois ele compõe a parte lateral da superfície basal do cérebro.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [217,1716,1086,1813],
                title: "Sulco temporal inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco temporal inferior se origina anteriormente na região do lobo temporal, onde percorre paralelo ao sulco temporal superior até chegar ao lobo parietal, assim como o sulco temporal superior. Essa estrutura pode se apresentar dividida em dois ou três sulcos pequenos.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [187,1585,1056,1682],
                title: "Giro temporal médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lobo temporal tem suas estruturas delimitadas por três sulcos paralelos, o sulco lateral (ramo posterior), o sulco temporal superior e o sulco temporal inferior. O giro temporal médio se localiza entre o sulco temporal superior e o sulco temporal inferior. Em alguns casos, esse giro pode aparecer fundido ao giro temporal inferior, sem apresentar limites bem definidos entre os dois giros.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [150,1445,1019,1542],
                title: "Sulco temporal superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco temporal superior se origina próximo ao polo temporal e percorre posteriormente até adentrar na região do lobo parietal, onde termina no giro angular. Essa estrutura percorre paralelamente ao ramo posterior do sulco lateral.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [110,1325,979,1422],
                title: "Giro temporal superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lobo temporal tem suas estruturas delimitadas por três sulcos paralelos, o sulco lateral (ramo posterior), o sulco temporal superior e o sulco temporal inferior. O giro temporal superior se localiza entre o sulco temporal superior (inferiormente) e o ramo posterior do sulco lateral. Em sua porção superior se localizam os giros temporais transversos, sendo o giro temporal transverso anterior, o giro de Heschl, o local da área auditiva primária do córtex.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [32,966,901,1063],
                title: "Giros Curtos da Ínsula",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A ínsula tem uma forma triangular com seu ápice direcionado anteriormente e inferiormente, sendo circundada pelo sulco circular da ínsula. O sulco central da ínsula é um sulco relativamente constante que se estende para cima e para trás através da ínsula e a divide em uma grande parte anterior que é dividida por vários sulcos rasos em três a cinco giros curtos, e uma parte posterior que é formada pelos giros longos anterior e posterior. A ínsula tem uma organização complexa com uma representação neuroanatômica topográfica dos processos viscerais e três sub-regiões com diferentes níveis de granularidade laminar, distribuição de receptores acetilcolinérgicos e padrões de conectividade local, cortical, subcortical e do tronco cerebral. Essas características citoarquitetônicas e de conectividade anatômica sugerem uma posição central e especialização do córtex insular no processamento de informações interoceptivas. Essa convergência de informações corticais e interoceptivas no córtex insular levou a hipóteses influentes sobre seus potenciais papéis na predição interoceptiva, integração de informações para a consciência, consciência emocional, inferência interoceptiva, emoção e aprendizado baseado em erros de sentimentos.",
                reference: "Jobst BC, Gonzalez-Martinez J, Isnard J, Kahane P, Lacuey N, Lahtoo SD, Nguyen DK, Wu C, Lado F. The Insula and Its Epilepsies. Epilepsy Curr. 2019 Jan;19(1):11-21. doi: 10.1177/1535759718822847. Epub 2019 Jan 31. PMID: 30838920; PMCID: PMC6610377. | FERMIN, A. S. R.; FRISTON, K.; YAMAWAKI, S. An insula hierarchical network architecture for active interoceptive inference. Royal Society Open Science, v. 9, n. 6, jun. 2022."
            },
            {
                shape: "rect",
                coords: [22,1203,891,1300],
                title: "Ramo Posterior do Sulco Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  É o maior dos ramos e percorre em direção a porção posterior do telencéfalo, sendo que na porção posterior é circundado pelo giro supramarginal. Responsável pela separação dos lobos temporal e parietal.",
                reference: "Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574 | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [45,803,914,900],
                title: "Sulco Circular da Ínsula",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco circular da ínsula é uma estrutura anatômica que delimita a ínsula (ou córtex insular), separando-a das regiões adjacentes do cérebro. A ínsula é uma área do córtex cerebral localizada profundamente no interior do sulco lateral (fissura de Sylvius) e está envolvida em funções como percepção sensorial, emoções e regulação autonômica.",
                reference: "Jobst BC, Gonzalez-Martinez J, Isnard J, Kahane P, Lacuey N, Lahtoo SD, Nguyen DK, Wu C, Lado F. The Insula and Its Epilepsies. Epilepsy Curr. 2019 Jan;19(1):11-21. doi: 10.1177/1535759718822847. Epub 2019 Jan 31. PMID: 30838920; PMCID: PMC6610377. | FERMIN, A. S. R.; FRISTON, K.; YAMAWAKI, S. An insula hierarchical network architecture for active interoceptive inference. Royal Society Open Science, v. 9, n. 6, jun. 2022."
            },
            {
                shape: "rect",
                coords: [380,656,1052,765],
                title: "Giro Frontal Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro frontal inferior do hemisfério cerebral esquerdo é denominado giro de Broca, e aí se localiza, na maioria dos indivíduos, uma das áreas de linguagem do cérebro. Essa estrutura é delimitada pelo sulco lateral e pelo sulco frontal inferior, sendo que esses a dividem em três porções diferentes: Opercular - Localizada entre o sulco pré-central e o ramo ascendente do sulco lateral. Triangular - Localizada entre as porções anterior e ascendente do sulco lateral. Orbital - Parte mais anterior do giro, delimitada pela porção anterior do sulco lateral.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect",
                coords: [501,396,1173,505],
                title: "Giro Frontal Médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista superolateral está localizado entre os sulcos frontal superior e frontal inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect",
                coords: [668,272,1340,381],
                title: "Sulco Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco frontal superior sai anterior ao sulco pré-central e percorre o lobo frontal, onde marca o limite entre o giro frontal superior e o giro frontal médio.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [856,147,1528,256],
                title: "Giro Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista superolateral é delimitado superiormente pela margem superior do hemisfério e pelo sulco frontal superior inferiormente. Na vista medial tem como limite superior a margem superior do hemisfério e tem o sulco do giro do cíngulo como limite inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect",
                coords: [1514,27,2029,128],
                title: "Sulco do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco do cíngulo situa-se superior ao giro do cíngulo e inferior ao giro frontal superior e ao lóbulo paracentral. Essa estrutura circunda o giro do cíngulo e, em sua porção mais posterior, emite um ramo, chamado de ramo marginal, e se continua como sulco subparietal.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [2134,44,2649,145],
                title: "Giro do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro do cíngulo se localiza inferior ao sulco do giro do cíngulo e superior ao sulco do corpo caloso. Esse giro é um dos componentes do sistema límbico, sendo importante para memória e para emoção, pois desempenha uma função na formação e processamento emocional.",
                reference: "Pare JR, Kahn JH. Basic neuroanatomy and stroke syndromes. Emerg Med Clin North Am. 2012 Aug;30(3):601-15. doi: 10.1016/j.emc.2012.05.004. PMID: 22974640. | Claussenius-Kalman H, Vaughn KA, Archila-Suerte P, Hernandez AE. Age of acquisition impacts the brain differently depending on neuroanatomical metric. Hum Brain Mapp. 2020 Feb 1;41(2):484-502. doi: 10.1002/hbm.24817. Epub 2019 Oct 10. PMID: 31600019; PMCID: PMC7267963. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect",
                coords: [2517,165,3032,266],
                title: "Fascículo do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O fascículo do cíngulo é um feixe de fibras nervosas localizado no sistema límbico, situado dentro do giro do cíngulo, logo acima do corpo caloso. Ele conecta regiões do córtex frontal ao córtex parietal e temporal, desempenhando um papel essencial na integração de funções emocionais, cognitivas e de memória. Essa estrutura também contribui para a regulação de respostas emocionais e comportamentais. É fundamental em circuitos associados à atenção, aprendizado e processamento de informações emocionais. Alterações no fascículo do cíngulo podem estar associadas a transtornos psiquiátricos, como depressão e ansiedade.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [2601,293,3466,403],
                title: "Fascículo Longitudinal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Sendo caracterizado como uma fibra de associação, o fascículo longitudinal superior é um trato de fibras de associação bidirecional, conectando as partes anterior (frontal, opercular) às posteriores (temporal, parietal, occipital) de cada hemisfério, ligando também as áreas expressivas às receptivas da linguagem.",
                reference: "GENEVIÈVE NOLZE-CHARRON et al. Tractography of the external capsule and cognition: A diffusion MRI study of cholinergic fibers. Experimental gerontology, v. 130, p. 110792–110792, 1 fev. 2020."
            },
            {
                shape: "rect",
                coords: [2813,437,3506,519],
                title: "Cabeça do Núcleo Caudado",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O núcleo caudado é uma estrutura subcortical em forma de \"C\" localizada nos hemisférios cerebrais e faz parte dos gânglios da base. Ele desempenha um papel crucial no controle motor, aprendizado, memória e regulação emocional. Suas principais divisões são a cabeça, o corpo e a cauda, cada uma conectada a diferentes áreas cerebrais para integrar informações motoras e cognitivas. Alterações no núcleo caudado estão associadas a doenças como Parkinson, Huntington e transtornos psiquiátricos.",
                reference: "Driscoll ME, Bollu PC, Tadi P. Neuroanatomy, Nucleus Caudate. [Updated 2023 Jul 24]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2025 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK557407/"
            },
            {
                shape: "rect",
                coords: [2793,542,3486,624],
                title: "Globo Pálido",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Ele é dividido em globo pálido interno e globo pálido externo a partir da lâmina medular medial, sendo uma massa triangular de células localizada medialmente ao putâmen e sua função primária é controlar movimentos conscientes e proprioceptivos, recebendo suprimento sanguíneo da artéria coroidal anterior, artéria cerebral média e artéria cerebral anterior. Assim como o estriado, a maior parte dos neurônios do pálido possuem o GABA, entretanto a densidade é menor, os neurônios palidais recebem a maior parte das suas aferências do estriado e do subtalâmico e enviam referências para outros núcleos da base, para o tálamo ou para o tronco cerebral. Confere a principal saída do sistema dos núcleos da base a partir do pálido interno, direcionando para os núcleos talâmicos e alcançando áreas corticais, diferentemente, o pálido externo possui conexões externas limitadas, se restringindo a conexões com o pálido interno. Como o globo pálido interno é o principal circuito de saída do estriado, ele tem sido usado significativamente em cirurgia ablativa para vários distúrbios neuropsiquiátricos. A cirurgia do globo pálido interno tem sido alvo de tratamento de distúrbios de movimento hipercinéticos e hipocinéticos, incluindo distúrbios comportamentais como a síndrome de Tourette.",
                reference: "JAVED, N.; CASCELLA, M. Neuroanatomy, Globus Pallidus. StatPearls, 31 jul. 2021. ARBER, S.; COSTA, R. M. Networking brainstem and basal ganglia circuits for movement. Nature Reviews Neuroscience, 14 abr. 2022."
            },
            {
                shape: "rect",
                coords: [2857,651,3550,733],
                title: "Núcleo Lentiforme",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O núcleo lentiforme é formado pelo Globo Pálido e Putâmen, sendo uma importante estrutura subcortical do cérebro, situada nos hemisférios cerebrais, dentro dos gânglios da base. Ele desempenha um papel crucial no controle motor, aprendizado de hábitos, regulação do movimento, e em processos emocionais e cognitivos.",
                reference: "ARBER, S.; COSTA, R. M. Networking brainstem and basal ganglia circuits for movement. Nature Reviews Neuroscience, 14 abr. 2022. HJORTH, J. J. J. et al. The microcircuits of striatum in silico. Proceedings of the National Academy of Sciences, v. 117, n. 17, p. 9554–9565, 22 abr. 2020."
            },

            {
                shape: "rect",
                coords: [3106,1031,3648,1107],
                title: "Cápsula extrema",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A cápsula extrema está diretamente abaixo da superfície insular e é composta de fibras de associação curtas que se estendem em direção a todos os opérculos. A cápsula extrema é a cápsula mais externa e superficial, situada entre a superfície insular e o claustro. Ela é formada principalmente por fibras de associação curtas localizadas logo abaixo do córtex insular, conectando os giros insulares. Essas fibras se estendem sob os sulcos limitantes da ínsula até os opérculos, conectando os córtices insular e opercular.",
                reference: "RIBAS, E. C. et al. Microsurgical anatomy of the central core of the brain. Journal of Neurosurgery, v. 129, n. 3, p. 752–769, set. 2018."
            },
            {
                shape: "rect",
                coords: [3042,896,3584,972],
                title: "Claustrum",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  É uma fina camada de substância cinzenta localizada no cérebro anterior, que se estende de anterior para posterior ao longo do estriado e situado medialmente ao córtex insular e lateralmente ao putâmen. Está entre as cápsulas externa e extrema, causando um certo destaque por ser substância cinzenta entre duas substâncias brancas. Estudos recentes sugerem que o Claustro atua nas informações límbicas e sensoriais para determinar a saliência de diferentes estímulos e guiar a atenção.",
                reference: "SMITH, J. B.; LEE, A. K.; JACKSON, J. The claustrum. Current Biology, v. 30, n. 23, p. R1401–R1406, dez. 2020."
            },
            {
                shape: "rect",
                coords: [3015,793,3557,869],
                title: "Cápsula externa",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Localizada medialmente ao claustro e lateralmente ao putâmen, é uma estrutura formada por feixes de fibras brancas oriundas do fascículo uncinado, fascículo fronto-occipital inferior e claustro corticais.",
                reference: "RIBAS, E. C. et al. Microsurgical anatomy of the central core of the brain. Journal of Neurosurgery, v. 129, n. 3, p. 752–769, set. 2018."
            },
            {
                shape: "rect",
                coords: [3123,1164,3665,1240],
                title: "Corpo Amigdalóide",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A amígdala é formada por vários núcleos e campos corticais localizados bilateralmente na parte anteromedial dos lobos temporais do cérebro, se conectando de maneira extensiva e recíproca com uma variedade de regiões corticais e subcorticais. Está envolvida em uma ampla diversidade de processos comportamentais, como aprendizagem associativa, como o condicionamento do medo. Superiormente, a amígdala se funde com o claustro e o globo pálido sem nenhuma demarcação clara. A porção superior posterior da amígdala inclina-se para trás acima da cabeça do hipocampo e do recesso uncal para formar a porção anterior do teto do corno temporal. Medialmente, está relacionada aos segmentos anterior e posterior do uncus. A amígdala dá origem à estria terminal, que percorre entre o tálamo e o núcleo caudado, profundamente à veia talamoestriada.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. ŠIMIĆ, G. et al. Understanding Emotions: Origins and Roles of the Amygdala. Biomolecules, v. 11, n. 6, p. 823, 2021."
            },
            {
                shape: "rect",
                coords: [2888,1393,3778,1490],
                title: "Fascículo Longitudinal Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Sendo caracterizado como uma fibra de associação, o fascículo longitudinal inferior passa adjacente ao fascículo uncinado e interconecta os lobos frontal, occipital e temporal. É responsável por conectar o lobo temporal ao lobo occipital de forma bidirecional.",
                reference: "PALACIOS, E.; CLAVIJO-PRADO, C. Fascículo longitudinal inferior: una nueva mirada del lenguaje. Repertorio de Medicina y Cirugía, v. 25, n. 4, p. 232–234, 1 out. 2016.\nZEMMOURA, Ilyess, et al. “The Inferior Longitudinal Fasciculus: Anatomy, Function and Surgical Considerations.” Journal of Neurosurgical Sciences, vol. 65, no. 6, Feb. 2022, https://doi.org/10.23736/s0390-5616.21.05391-1."
            },
            {
                shape: "rect",
                coords: [2898,1583,3788,1680],
                title: "Corno Inferior do Ventrículo Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Os ventrículos laterais estão localizados no parênquima encefálico, um em cada hemisfério cerebral. Possuem formato semelhante à letra 'C' e são compostos por um corpo e três cornos: anterior (frontal), posterior (occipital) e inferior (temporal). O corno inferior encontra-se no lobo temporal, enquanto o corpo do ventrículo atravessa o lobo parietal em direção ao frontal. O corno anterior estende-se anteriormente no lobo frontal, e o corno posterior projeta-se posteriormente no lobo occipital. Na extremidade anterior do corpo, há uma abertura em forma de 'Y', o forame interventricular, que conecta os ventrículos laterais ao terceiro ventrículo.",
                reference: "Lehtinen MK, Bjornsson CS, Dymecki SM, Gilbertson RJ, Holtzman DM, Monuki ES. The choroid plexus and cerebrospinal fluid: emerging roles in development, disease, and therapy. J Neurosci. 2013 Nov 6;33(45):17553-9. doi: 10.1523/JNEUROSCI.3258-13.2013. PMID: 24198345; PMCID: PMC3818536.\nChitty LS, Chudleigh P, Wright E, Campbell S, Pembrey M. The significance of choroid plexus cysts in an unselected population: results of a multicenter study. Ultrasound Obstet Gynecol. 1998 Dec;12(6):391-7. doi: 10.1046/j.1469-0705.1998.12060391.x. PMID: 9918087.\nSnell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378.\nMachado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [2388,2377,3392,2497],
                title: "Parte Central do Ventrículo Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Os ventrículos laterais estão localizados no parênquima encefálico, um em cada hemisfério cerebral. Possuem formato semelhante à letra 'C' e são compostos por um corpo e três cornos: anterior (frontal), posterior (occipital) e inferior (temporal). O corno inferior encontra-se no lobo temporal, enquanto o corpo do ventrículo atravessa o lobo parietal em direção ao frontal. O corno anterior estende-se anteriormente no lobo frontal, e o corno posterior projeta-se posteriormente no lobo occipital. Na extremidade anterior do corpo, há uma abertura em forma de 'Y', o forame interventricular, que conecta os ventrículos laterais ao terceiro ventrículo.",
                reference: "Lehtinen MK, Bjornsson CS, Dymecki SM, Gilbertson RJ, Holtzman DM, Monuki ES. The choroid plexus and cerebrospinal fluid: emerging roles in development, disease, and therapy. J Neurosci. 2013 Nov 6;33(45):17553-9. doi: 10.1523/JNEUROSCI.3258-13.2013. PMID: 24198345; PMCID: PMC3818536.\nChitty LS, Chudleigh P, Wright E, Campbell S, Pembrey M. The significance of choroid plexus cysts in an unselected population: results of a multicenter study. Ultrasound Obstet Gynecol. 1998 Dec;12(6):391-7. doi: 10.1046/j.1469-0705.1998.12060391.x. PMID: 9918087.\nSnell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378.\nMachado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [2908,1855,3459,1977],
                title: "Cápsula Interna",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A cápsula interna é uma faixa espessa de substância branca localizada entre o núcleo caudado, o tálamo e o núcleo lentiforme. Ela contém importantes fibras ascendentes e descendentes, conectando o córtex cerebral ao tronco encefálico e à medula espinhal. Divide-se em três partes: braço anterior, joelho e braço posterior, cada uma transmitindo sinais motores, sensitivos e associativos. Sua integridade é crucial para funções como movimento e percepção, e lesões nessa região podem causar déficits motores e sensoriais significativos.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378.\nMachado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },

            {
                shape: "rect",
                coords: [2334,2675,2885,2797],
                title: "3° Ventrículo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O terceiro ventrículo é uma cavidade estreita situada na linha média, entre os dois hemisférios cerebrais. Mais especificamente, ele está situado na região do diencéfalo, onde é envolvido lateralmente pelos tálamos e inferolateralmente pelo hipotálamo. O terceiro ventrículo está conectado ao quarto ventrículo póstero-inferiormente pelo aqueduto mesencefálico (aqueduto de Sylvius). O aqueduto mesencefálico é um canal que cursa ao longo de toda a extensão do mesencéfalo, em direção à ponte.",
                reference: "Lehtinen MK, Bjornsson CS, Dymecki SM, Gilbertson RJ, Holtzman DM, Monuki ES. The choroid plexus and cerebrospinal fluid: emerging roles in development, disease, and therapy. J Neurosci. 2013 Nov 6;33(45):17553-9. doi: 10.1523/JNEUROSCI.3258-13.2013. PMID: 24198345; PMCID: PMC3818536.\nChitty LS, Chudleigh P, Wright E, Campbell S, Pembrey M. The significance of choroid plexus cysts in an unselected population: results of a multicenter study. Ultrasound Obstet Gynecol. 1998 Dec;12(6):391-7. doi: 10.1046/j.1469-0705.1998.12060391.x. PMID: 9918087.\nSnell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378.\nMachado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247"
            },

        ],
    },
    {
        name: "cortes-coronais07",
        areas: [
            {
                shape: "rect",
                coords: [147,621,292,643],
                title: "Giro para-hipocampal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro para-hipocampal pode ser visualizado tanto na vista medial quanto na vista inferior. Ele é limitado medialmente pelo sulco do hipocampo e lateralmente pelo sulco colateral (que o separa do giro occipitotemporal lateral). Na extremidade anterior esse giro desvia-se medialmente e cruza para posterior, dando origem ao unco. Na extremidade posterior, esse giro é contínuo com o istmo do giro do cíngulo, sendo o sulco calcarino o marco utilizado para diferenciar o ambas estruturas. Além disso, a porção anterior desse giro é denominada de área entorrinal, sendo uma das primeiras regiões a serem danificadas no Alzheimer devido a sua importância para a memória.",
                reference: "Wen HT, Rhoton AL Jr, de Oliveira E, Cardoso AC, Tedeschi H, Baccanelli M, Marino R Jr. Microsurgical anatomy of the temporal lobe: part 1: mesial temporal lobe anatomy and its vascular relationships as applied to amygdalohippocampectomy. Neurosurgery. 1999 Sep;45(3):549-91; discussion 591-2. doi: 10.1097/00006123-199909000-00028. PMID: 10493377. | Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574 | Lin YH, Dhanaraj V, Mackenzie AE, Young IM, Tanglay O, Briggs RG, Chakraborty AR, Hormovas J, Fonseka RD, Kim SJ, Yeung JT, Teo C, Sughrue ME. Anatomy and White Matter Connections of the Parahippocampal Gyrus. World Neurosurg. 2021 Apr;148:e218-e226. doi: 10.1016/j.wneu.2020.12.136. Epub 2021 Jan 4. PMID: 33412321."
            },
            {
                shape: "rect",
                coords: [143,594,288,616],
                title: "Sulco Colateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco colateral é uma estrutura que separa o giro parahipocampal do giro occipitotemporal lateral. Alguns autores consideram o sulco colateral como um complexo de vários sulcos. Na porção anterior, o sulco colateral pode terminar de forma independente ou pode se unir ao sulco rinal ou ao sulco occipitotemporal.",
                reference: "Lehman VT, Black DF, Bernstein MA, Welker KM. Temporal lobe anatomy: eight imaging signs to facilitate interpretation of MRI. Surg Radiol Anat. 2016 May;38(4):433-43. doi: 10.1007/s00276-015-1582-9. Epub 2015 Oct 29. PMID: 26514961."
            },
            {
                shape: "rect",
                coords: [69,562,258,588],
                title: "Giro occipitotemporal lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro occipitotemporal lateral é uma estrutura localizada entre o sulco colateral e o sulco occipitotemporal. O giro pode ser visualizado tanto na vista medial, como na vista inferior do hemisfério.",
                reference: "Lehman VT, Black DF, Bernstein MA, Welker KM. Temporal lobe anatomy: eight imaging signs to facilitate interpretation of MRI. Surg Radiol Anat. 2016 May;38(4):433-43. doi: 10.1007/s00276-015-1582-9. Epub 2015 Oct 29. PMID: 26514961."
            },
            {
                shape: "rect",
                coords: [89,529,261,550],
                title: "Sulco Occipitotemporal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco occipitotemporal é responsável por separar o giro temporal inferior do giro occipitotemporal lateral. Essa estrutura apresenta uma trajetória curvilínea ligando os lobos temporal e occipital. Além disso, esse sulco pode ser contínuo ou pode sofrer interrupções em seu percurso.",
                reference: "Chau AM, Stewart F, Gragnaniello C. Sulcal and gyral anatomy of the basal occipital-temporal lobe. Surg Radiol Anat. 2014 Dec;36(10):959-65. doi: 10.1007/s00276-014-1294-6. Epub 2014 Apr 18. PMID: 24744138.\nVachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect",
                coords: [70,499,259,525],
                title: "Giro temporal inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lobo temporal tem suas estruturas delimitadas por três sulcos paralelos, o sulco lateral(ramo posterior), o sulco temporal superior e o sulco temporal inferior. O giro temporal inferior se localiza entre o sulco temporal inferior(superiormente) e o sulco occipitotemporal(inferiormente). Essa estrutura pode se apresentar fragmentada, em alguns casos, e fundida ao giro temporal médio, sem apresentar limites bem definidos entre os dois giros. Além disso, o giro temporal inferior pode ser visualizado tanto na vista superolateral, como na vista inferior, pois ele compõe a parte lateral da superfície basal do cérebro.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [0,456,211,481],
                title: "Fascículo Longitudinal Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Sendo caracterizado como uma fibra de associação, o fascículo longitudinal inferior passa adjacente ao fascículo uncinado e interconecta os lobos frontal, occipital e temporal. É responsável por conectar o lobo temporal ao lobo occipital de forma bidirecional.",
                reference: "PALACIOS, E.; CLAVIJO-PRADO, C. Fascículo longitudinal inferior: una nueva mirada del lenguaje. Repertorio de Medicina y Cirugía, v. 25, n. 4, p. 232–234, 1 out. 2016.\nZEMMOURA, Ilyess, et al. “The Inferior Longitudinal Fasciculus: Anatomy, Function and Surgical Considerations.” Journal of Neurosurgical Sciences, vol. 65, no. 6, Feb. 2022, https://doi.org/10.23736/s0390-5616.21.05391-1."
            },
            {
                shape: "rect",
                coords: [13,414,175,439],
                title: "Sulco temporal inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco temporal inferior se origina anteriormente na região do lobo temporal, onde percorre paralelo ao sulco temporal superior até chegar ao lobo parietal, assim como o sulco temporal superior. Essa estrutura pode se apresentar dividida em dois ou três sulcos pequenos.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [2,354,164,379],
                title: "Giro temporal médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lobo temporal tem suas estruturas delimitadas por três sulcos paralelos, o sulco lateral (ramo posterior), o sulco temporal superior e o sulco temporal inferior. O giro temporal médio se localiza entre o sulco temporal superior e o sulco temporal inferior. Em alguns casos, esse giro pode aparecer fundido ao giro temporal inferior, sem apresentar limites bem definidos entre os dois giros.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [2,326,164,351],
                title: "Sulco temporal superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco temporal superior se origina próximo ao polo temporal e percorre posteriormente até adentrar na região do lobo parietal, onde termina no giro angular. Essa estrutura percorre paralelamente ao ramo posterior do sulco lateral.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [5,265,167,290],
                title: "Giro temporal superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lobo temporal tem suas estruturas delimitadas por três sulcos paralelos, o sulco lateral (ramo posterior), o sulco temporal superior e o sulco temporal inferior. O giro temporal superior se localiza entre o sulco temporal superior (inferiormente) e o ramo posterior do sulco lateral. Em sua porção superior se localizam os giros temporais transversos, sendo o giro temporal transverso anterior, o giro de Heschl, o local da área auditiva primária do córtex.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [0,225,219,250],
                title: "Ramo Posterior do Sulco Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  É o maior dos ramos e percorre em direção a porção posterior do telencéfalo, sendo que na porção posterior é circundado pelo giro supramarginal. Responsável pela separação dos lobos temporal e parietal.",
                reference: "Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574 | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [35,175,185,205],
                title: "Giros Curtos da Ínsula",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A ínsula tem uma forma triangular com seu ápice direcionado anteriormente e inferiormente, sendo circundada pelo sulco circular da ínsula. O sulco central da ínsula, é um sulco relativamente constante que se estende para cima e para trás através da ínsula e a divide em uma grande parte anterior que é dividida por vários sulcos rasos em três a cinco giros curtos, e uma parte posterior que é formada pelos giros longos anterior e posterior. A ínsula tem uma organização complexa com uma representação neuroanatômica topográfica dos processos viscerais e três sub-regiões com diferentes níveis de granularidade laminar, distribuição de receptores acetilcolinérgicos e padrões de conectividade local, cortical, subcortical e do tronco cerebral. Essas características citoarquitetônicas e de conectividade anatômica sugerem uma posição central e especialização do córtex insular no processamento de informações interoceptivas. Essa convergência de informações corticais e interoceptivas no córtex insular levou a hipóteses influentes sobre seus potenciais papéis na predição interoceptiva, integração de informações para a consciência, consciência emocional, inferência interoceptiva e emoção e aprendizado baseado em erros de sentimentos.",
                reference: "Jobst BC, Gonzalez-Martinez J, Isnard J, Kahane P, Lacuey N, Lahtoo SD, Nguyen DK, Wu C, Lado F. The Insula and Its Epilepsies. Epilepsy Curr. 2019 Jan;19(1):11-21. doi: 10.1177/1535759718822847. Epub 2019 Jan 31. PMID: 30838920; PMCID: PMC6610377. | FERMIN, A. S. R.; FRISTON, K.; YAMAWAKI, S. An insula hierarchical network architecture for active interoceptive inference. Royal Society Open Science, v. 9, n. 6, jun. 2022."
            },
            {
                shape: "rect",
                coords: [76,138,220,161],
                title: "Sulco Circular da Ínsula",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco circular da ínsula é uma estrutura anatômica que delimita a ínsula (ou córtex insular), separando-a das regiões adjacentes do cérebro. A ínsula é uma área do córtex cerebral localizada profundamente no interior do sulco lateral (fissura de Sylvius) e está envolvida em funções como percepção sensorial, emoções e regulação autonômica.",
                reference: "Jobst BC, Gonzalez-Martinez J, Isnard J, Kahane P, Lacuey N, Lahtoo SD, Nguyen DK, Wu C, Lado F. The Insula and Its Epilepsies. Epilepsy Curr. 2019 Jan;19(1):11-21. doi: 10.1177/1535759718822847. Epub 2019 Jan 31. PMID: 30838920; PMCID: PMC6610377. | FERMIN, A. S. R.; FRISTON, K.; YAMAWAKI, S. An insula hierarchical network architecture for active interoceptive inference. Royal Society Open Science, v. 9, n. 6, jun. 2022."
            },
            {
                shape: "rect",
                coords: [93,101,237,124],
                title: "Giro Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista superolateral é delimitado superiormente pela margem superior do hemisfério e pelo sulco frontal superior inferiormente. Na vista medial tem como limite superior a margem superior do hemisfério e tem o sulco do giro do cíngulo como limite inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect",
                coords: [116,75,260,98],
                title: "Sulco Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco frontal superior sai anterior ao sulco pré-central e percorre o lobo frontal, onde marca o limite entre o giro frontal superior e o giro frontal médio.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [156,46,300,69],
                title: "Giro Frontal Médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista superolateral está localizado entre os sulcos frontal superior e frontal inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect",
                coords: [172,17,316,40],
                title: "Sulco Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco frontal superior sai anterior ao sulco pré-central e percorre o lobo frontal, onde marca o limite entre o giro frontal superior e o giro frontal médio.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [322,12,445,35],
                title: "Giro Frontal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Na vista superolateral é delimitado superiormente pela margem superior do hemisfério e pelo sulco frontal superior inferiormente. Na vista medial tem como limite superior a margem superior do hemisfério e tem o sulco do giro do cíngulo como limite inferior.",
                reference: "Barha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952. | RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007."
            },
            {
                shape: "rect",
                coords: [399,42,498,85],
                title: "Cabeça do Núcleo Caudado",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O núcleo caudado é uma estrutura subcortical em forma de \"C\" localizada nos hemisférios cerebrais e faz parte dos gânglios da base. Ele desempenha um papel crucial no controle motor, aprendizado, memória e regulação emocional. Suas principais divisões são a cabeça, o corpo e a cauda, cada uma conectada a diferentes áreas cerebrais para integrar informações motoras e cognitivas. Alterações no núcleo caudado estão associadas a doenças como Parkinson, Huntington e transtornos psiquiátricos.",
                reference: "Driscoll ME, Bollu PC, Tadi P. Neuroanatomy, Nucleus Caudate. [Updated 2023 Jul 24]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2025 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK557407/"
            },
            {
                shape: "rect",
                coords: [511,22,637,46],
                title: "Sulco do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco do cíngulo situa-se superior ao giro do cíngulo e inferior ao giro frontal superior e ao lóbulo paracentral. Essa estrutura circunda o giro do cíngulo e, em sua porção mais posterior, emite um ramo, chamado de ramo marginal, e se continua como sulco subparietal.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [583,53,709,77],
                title: "Giro do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro do cíngulo se localiza inferior ao sulco do giro do cíngulo e superior ao sulco do corpo caloso. Esse giro é um dos componentes do sistema límbico, sendo importante para memória e para emoção, pois desempenha uma função na formação e processamento emocional.",
                reference: "Pare JR, Kahn JH. Basic neuroanatomy and stroke syndromes. Emerg Med Clin North Am. 2012 Aug;30(3):601-15. doi: 10.1016/j.emc.2012.05.004. PMID: 22974640. | Claussenius-Kalman H, Vaughn KA, Archila-Suerte P, Hernandez AE. Age of acquisition impacts the brain differently depending on neuroanatomical metric. Hum Brain Mapp. 2020 Feb 1;41(2):484-502. doi: 10.1002/hbm.24817. Epub 2019 Oct 10. PMID: 31600019; PMCID: PMC7267963. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect",
                coords: [603,85,729,109],
                title: "Fascículo do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O fascículo do cíngulo é um feixe de fibras nervosas localizado no sistema límbico, situado dentro do giro do cíngulo, logo acima do corpo caloso. Ele conecta regiões do córtex frontal ao córtex parietal e temporal, desempenhando um papel essencial na integração de funções emocionais, cognitivas e de memória. Essa estrutura também contribui para a regulação de respostas emocionais e comportamentais. É fundamental em circuitos associados à atenção, aprendizado e processamento de informações emocionais. Alterações no fascículo do cíngulo podem estar associadas a transtornos psiquiátricos, como depressão e ansiedade.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [633,112,854,139],
                title: "Fascículo Longitudinal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Sendo caracterizado como uma fibra de associação, o fascículo longitudinal superior é um trato de fibras de associação bidirecional, conectando as partes anterior (frontal, opercular) às posteriores (temporal, parietal, occipital) de cada hemisfério, ligando também as áreas expressivas às receptivas da linguagem.",
                reference: "GENEVIÈVE NOLZE-CHARRON et al. Tractography of the external capsule and cognition: A diffusion MRI study of cholinergic fibers. Experimental gerontology, v. 130, p. 110792–110792, 1 fev. 2020."
            },
            {
                shape: "rect",
                coords: [686,151,821,179],
                title: "Tronco do Corpo Caloso",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  É a porção central e alongada do corpo caloso, localizada entre o joelho, na parte anterior, e o esplênio, na parte posterior. Ele constitui a maior parte do corpo caloso e contém fibras comissurais que conectam amplamente os hemisférios cerebrais, incluindo áreas do córtex parietal e temporal. O tronco é essencial para a integração e coordenação das funções bilaterais do cérebro. É irrigado por ramos da artéria cerebral anterior e, em menor grau, pela artéria cerebral posterior.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007.\nMORADI, B. et al. Fetal corpus callosum abnormalities: Ultrasound and magnetic resonance imaging role. Journal of Clinical Ultrasound, v. 50, n. 7, p. 989–1003, 30 abr. 2022."
            },
            {
                shape: "rect",
                coords: [754,194,889,222],
                title: "Corpo do Fórnice",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O fórnice é uma estrutura arqueada de substância branca localizada no sistema límbico, responsável pela conexão entre o hipocampo e outras áreas cerebrais, especialmente os corpos mamilares do hipotálamo. É formado por fibras nervosas que desempenham um papel crucial na memória e na integração emocional. O fórnix é dividido em três porções principais: Colunas, Corpo e Pernas do fórnice.",
                reference: "Haines, D. E., Mihailoff, G. A. (2018). Fundamental neuroscience for basic and clinical applications. Philadelphia, PA: Elsevier.\nHaines, D.E. (2014). Neuroanatomy in clinical context: An atlas of structures, sections, systems and syndromes (9th ed.). Philadelphia, PA: Lippincott Williams & Wilkins.\nStandring, S. (2016). Gray's Anatomy (41st ed.). Edinburgh: Elsevier Churchill Livingstone.\nBlumenfeld, H. (2018). Neuroanatomy through clinical cases (2nd ed.). Sunderland, MA: Sinauer.\nMancall, E. L., Brock, D. G., & Gray, H. (2011). Gray's clinical neuroanatomy: the anatomic basis for clinical neuroscience. Philadelphia, PA: Elsevier."
            },
            {
                shape: "rect",
                coords: [751,227,846,256],
                title: "Tálamo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O tálamo é uma estrutura pareada localizada no diencéfalo, constituindo uma importante estação de retransmissão de informações sensoriais e motoras. Ele filtra e direciona estímulos do corpo ao córtex cerebral, além de desempenhar funções em processos como consciência, sono e regulação emocional. Dividido em núcleos específicos e inespecíficos, conecta-se com diversas áreas cerebrais para integrar informações. É suprido principalmente pelas artérias da circulação posterior, como a artéria cerebral posterior.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378.\nMachado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [751,260,892,289],
                title: "Cápsula Interna",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A cápsula interna é uma faixa espessa de substância branca localizada entre o núcleo caudado, o tálamo e o núcleo lentiforme. Ela contém importantes fibras ascendentes e descendentes, conectando o córtex cerebral ao tronco encefálico e à medula espinhal. Divide-se em três partes: braço anterior, joelho e braço posterior, cada uma transmitindo sinais motores, sensitivos e associativos. Sua integridade é crucial para funções como movimento e percepção, e lesões nessa região podem causar déficits motores e sensoriais significativos.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378.\nMachado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [748,296,889,325],
                title: "Pilar do Cérebro",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Pilar do Cérebro ou Base do Pedúnculo Cerebral é uma estrutura bilateral à linha média na sustentação da base central do cérebro. Os pedúnculos convergem à junção pontomesencefálica, são posteriores ao quiasma óptico e são contornados pelo nervo troclear (NV IV). Além disso, auxilia na formação do assoalho do terceiro ventrículo e são formados por fibras corticoespinhais, corticonucleares e corticopontinas.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016."
            },
            {
                shape: "rect",
                coords: [751,358,930,387],
                title: "Corpo Geniculado Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O corpo geniculado lateral é uma estrutura do diencéfalo situada na parte póstero-lateral do tálamo, atuando como uma estação de retransmissão essencial no sistema visual. Ele recebe fibras do trato óptico e projeta axônios para o córtex visual primário através da radiação óptica. Essa estrutura é organizada em camadas que processam informações visuais, incluindo cor, contraste e movimento. É crucial para a percepção visual consciente e a integração de estímulos provenientes da retina.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378."
            },
            {
                shape: "rect",
                coords: [748,423,927,452],
                title: "Cauda do Núcleo Caudado",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O núcleo caudado é uma estrutura subcortical em forma de 'C' localizada nos hemisférios cerebrais e faz parte dos gânglios da base. Ele desempenha um papel crucial no controle motor, aprendizado, memória e regulação emocional. Suas principais divisões são a cabeça, o corpo e a cauda, cada uma conectada a diferentes áreas cerebrais para integrar informações motoras e cognitivas. Alterações no núcleo caudado estão associadas a doenças como Parkinson, Huntington e transtornos psiquiátricos.",
                reference: "Driscoll ME, Bollu PC, Tadi P. Neuroanatomy, Nucleus Caudate. [Updated 2023 Jul 24]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2025 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK557407/"
            },
            {
                shape: "rect",
                coords: [715,500,835,530],
                title: "Hipocampo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O hipocampo é dividido em três partes: cabeça, corpo e cauda. A cabeça do hipocampo, a parte anterior e maior, está direcionada anterior e medialmente, e forma a parte superior do segmento posterior uncal. O corpo do hipocampo se estende para trás ao longo da parte medial do assoalho do corno temporal, estreitando-se na cauda, que desaparece como uma estrutura ventricular. Sua função é dividida, apresentando participações no controle cognitivo do estresse, emoção e afeto, mas também se relaciona com o processamento de informações e na formação e recuperação de memória.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007.\nFANSELOW, M. S.; DONG, H.-W. Are the Dorsal and Ventral Hippocampus Functionally Distinct Structures? Neuron, v. 65, n. 1, p. 7–19, jan. 2010.\nSHI, H.-J. et al. Hippocampus: Molecular, Cellular, and Circuit Features in Anxiety. Neuroscience Bulletin, 21 jan. 2023."
            },
            {
                shape: "rect",
                coords: [598,570,718,600],
                title: "3° Ventrículo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O terceiro ventrículo é uma cavidade estreita situada na linha média, entre os dois hemisférios cerebrais. Mais especificamente, ele está situado na região do diencéfalo, onde é envolvido lateralmente pelos tálamos e inferolateralmente pelo hipotálamo. O terceiro ventrículo está conectado ao quarto ventrículo póstero-inferiormente pelo aqueduto mesencefálico (aqueduto de Sylvius). O aqueduto mesencefálico é um canal que cursa ao longo de toda a extensão do mesencéfalo, em direção à ponte.",
                reference: "Lehtinen MK, Bjornsson CS, Dymecki SM, Gilbertson RJ, Holtzman DM, Monuki ES. The choroid plexus and cerebrospinal fluid: emerging roles in development, disease, and therapy. J Neurosci. 2013 Nov 6;33(45):17553-9. doi: 10.1523/JNEUROSCI.3258-13.2013. PMID: 24198345; PMCID: PMC3818536.\nChitty LS, Chudleigh P, Wright E, Campbell S, Pembrey M. The significance of choroid plexus cysts in an unselected population: results of a multicenter study. Ultrasound Obstet Gynecol. 1998 Dec;12(6):391-7. doi: 10.1046/j.1469-0705.1998.12060391.x. PMID: 9918087.\nSnell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378.\nMachado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247"
            },
            
        ],
    },
    {
        name: "cortes-coronais08",
        areas: [
            {
                shape: "rect",
                coords: [67,604,279,640],
                title: "Giro occipitotemporal lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro occipitotemporal lateral é uma estrutura localizada entre o sulco colateral e o sulco occipitotemporal. O giro pode ser visualizado tanto na vista medial, como na vista inferior do hemisfério.",
                reference: "Lehman VT, Black DF, Bernstein MA, Welker KM. Temporal lobe anatomy: eight imaging signs to facilitate interpretation of MRI. Surg Radiol Anat. 2016 May;38(4):433-43. doi: 10.1007/s00276-015-1582-9. Epub 2015 Oct 29. PMID: 26514961."
            },
            {
                shape: "rect",
                coords: [37,553,235,588],
                title: "Sulco occipitotemporal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco occipitotemporal é responsável por separar o giro temporal inferior do giro occipitotemporal lateral. Essa estrutura apresenta uma trajetória curvilínea ligando os lobos temporal e occipital. Além disso, esse sulco pode ser contínuo ou pode sofrer interrupções em seu percurso.",
                reference: "Chau AM, Stewart F, Gragnaniello C. Sulcal and gyral anatomy of the basal occipital-temporal lobe. Surg Radiol Anat. 2014 Dec;36(10):959-65. doi: 10.1007/s00276-014-1294-6. Epub 2014 Apr 18. PMID: 24744138. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect",
                coords: [260,2120,1075,2211],
                title: "Giro temporal inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lobo temporal tem suas estruturas delimitadas por três sulcos paralelos, o sulco lateral(ramo posterior), o sulco temporal superior e o sulco temporal inferior. O giro temporal inferior se localiza entre o sulco temporal inferior(superiormente) e o sulco occipitotemporal(inferiormente). Essa estrutura pode se apresentar fragmentada, em alguns casos, e fundida ao giro temporal médio, sem apresentar limites bem definidos entre os dois giros. Além disso, o giro temporal inferior pode ser visualizado tanto na vista superolateral, como na vista inferior, pois ele compõe a parte lateral da superfície basal do cérebro.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [2,462,200,497],
                title: "Sulco temporal inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco temporal inferior se origina anteriormente na região do lobo temporal, onde percorre paralelo ao sulco temporal superior até chegar ao lobo parietal, assim como o sulco temporal superior. Essa estrutura pode se apresentar dividida em dois ou três sulcos pequenos.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [0,386,198,421],
                title: "Giro temporal médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lobo temporal tem suas estruturas delimitadas por três sulcos paralelos, o sulco lateral (ramo posterior), o sulco temporal superior e o sulco temporal inferior. O giro temporal médio se localiza entre o sulco temporal superior e o sulco temporal inferior. Em alguns casos, esse giro pode aparecer fundido ao giro temporal inferior, sem apresentar limites bem definidos entre os dois giros.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [10,308,208,343],
                title: "Sulco temporal superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco temporal superior se origina próximo ao polo temporal e percorre posteriormente até adentrar na região do lobo parietal, onde termina no giro angular. Essa estrutura percorre paralelamente ao ramo posterior do sulco lateral.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [16,239,214,274],
                title: "Giro temporal superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lobo temporal tem suas estruturas delimitadas por três sulcos paralelos, o sulco lateral (ramo posterior), o sulco temporal superior e o sulco temporal inferior. O giro temporal superior se localiza entre o sulco temporal superior (inferiormente) e o ramo posterior do sulco lateral. Em sua porção superior se localizam os giros temporais transversos, sendo o giro temporal transverso anterior, o giro de Heschl, o local da área auditiva primária do córtex.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [51,176,298,215],
                title: "Ramo Posterior do Sulco Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  É o maior dos ramos e percorre em direção a porção posterior do telencéfalo, sendo que na porção posterior é circundado pelo giro supramarginal. Responsável pela separação dos lobos temporal e parietal.",
                reference: "Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574 | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [124,86,281,121],
                title: "Giro Pré-central",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro pré-central se localiza no lobo frontal, sendo separado do lobo parietal pelo sulco central. Essa estrutura corresponde ao córtex motor primário, sendo responsável por participar da realização de movimentos dos músculos esqueléticos. Essa área possui uma organização somatotópica em que cada parte do giro corresponde a áreas diferentes do corpo.",
                reference: "Pare JR, Kahn JH. Basic neuroanatomy and stroke syndromes. Emerg Med Clin North Am. 2012 Aug;30(3):601-15. doi: 10.1016/j.emc.2012.05.004. PMID: 22974640.\nBarha CK, Nagamatsu LS, Liu-Ambrose T. Basics of neuroanatomy and neurophysiology. Handb Clin Neurol. 2016;138:53-68. doi: 10.1016/B978-0-12-802973-2.00004-5. PMID: 27637952.\nClaussenius-Kalman H, Vaughn KA, Archila-Suerte P, Hernandez AE. Age of acquisition impacts the brain differently depending on neuroanatomical metric. Hum Brain Mapp. 2020 Feb 1;41(2):484-502. doi: 10.1002/hbm.24817. Epub 2019 Oct 10. PMID: 31600019; PMCID: PMC7267963.\nEl-Baba RM, Schury MP. Neuroanatomy, Frontal Cortex. 2023 May 29. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan–. PMID: 32119370."
            },
            {
                shape: "rect",
                coords: [233,37,390,72],
                title: "Giro do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro do cíngulo se localiza inferior ao sulco do giro do cíngulo e superior ao sulco do corpo caloso. Esse giro é um dos componentes do sistema límbico, sendo importante para memória e para emoção, pois desempenha uma função na formação e processamento emocional.",
                reference: "Pare JR, Kahn JH. Basic neuroanatomy and stroke syndromes. Emerg Med Clin North Am. 2012 Aug;30(3):601-15. doi: 10.1016/j.emc.2012.05.004. PMID: 22974640. | Claussenius-Kalman H, Vaughn KA, Archila-Suerte P, Hernandez AE. Age of acquisition impacts the brain differently depending on neuroanatomical metric. Hum Brain Mapp. 2020 Feb 1;41(2):484-502. doi: 10.1002/hbm.24817. Epub 2019 Oct 10. PMID: 31600019; PMCID: PMC7267963. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect",
                coords: [428,42,585,77],
                title: "Sulco do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco do cíngulo situa-se superior ao giro do cíngulo e inferior ao giro frontal superior e ao lóbulo paracentral. Essa estrutura circunda o giro do cíngulo e, em sua porção mais posterior, emite um ramo, chamado de ramo marginal, e se continua como sulco subparietal.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [612,51,769,86],
                title: "Fascículo do Cíngulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O fascículo do cíngulo é um feixe de fibras nervosas localizado no sistema límbico, situado dentro do giro do cíngulo, logo acima do corpo caloso. Ele conecta regiões do córtex frontal ao córtex parietal e temporal, desempenhando um papel essencial na integração de funções emocionais, cognitivas e de memória. Essa estrutura também contribui para a regulação de respostas emocionais e comportamentais. É fundamental em circuitos associados à atenção, aprendizado e processamento de informações emocionais. Alterações no fascículo do cíngulo podem estar associadas a transtornos psiquiátricos, como depressão e ansiedade.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [678,94,872,129],
                title: "Tronco do Corpo Caloso",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  É a porção central e alongada do corpo caloso, localizada entre o joelho, na parte anterior, e o esplênio, na parte posterior. Ele constitui a maior parte do corpo caloso e contém fibras comissurais que conectam amplamente os hemisférios cerebrais, incluindo áreas do córtex parietal e temporal. O tronco é essencial para a integração e coordenação das funções bilaterais do cérebro. É irrigado por ramos da artéria cerebral anterior e, em menor grau, pela artéria cerebral posterior.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | MORADI, B. et al. Fetal corpus callosum abnormalities: Ultrasound and magnetic resonance imaging role. Journal of Clinical Ultrasound, v. 50, n. 7, p. 989–1003, 30 abr. 2022."
            },
            {
                shape: "rect",
                coords: [748,138,942,173],
                title: "Fascículo Longitudinal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Sendo caracterizado como uma fibra de associação, o fascículo longitudinal superior é um trato de fibras de associação bidirecional, conectando as partes anterior (frontal, opercular) às posteriores (temporal, parietal, occipital) de cada hemisfério, ligando também as áreas expressivas às receptivas da linguagem.",
                reference: "GENEVIÈVE NOLZE-CHARRON et al. Tractography of the external capsule and cognition: A diffusion MRI study of cholinergic fibers. Experimental gerontology, v. 130, p. 110792–110792, 1 fev. 2020."
            },
            {
                shape: "rect",
                coords: [749,224,943,259],
                title: "Cabeça do Núcleo Caudado",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O núcleo caudado é uma estrutura subcortical em forma de \"C\" localizada nos hemisférios cerebrais e faz parte dos gânglios da base. Ele desempenha um papel crucial no controle motor, aprendizado, memória e regulação emocional. Suas principais divisões são a cabeça, o corpo e a cauda, cada uma conectada a diferentes áreas cerebrais para integrar informações motoras e cognitivas. Alterações no núcleo caudado estão associadas a doenças como Parkinson, Huntington e transtornos psiquiátricos.",
                reference: "Driscoll ME, Bollu PC, Tadi P. Neuroanatomy, Nucleus Caudate. [Updated 2023 Jul 24]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2025 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK557407/"
            },
            {
                shape: "rect",
                coords: [778,291,949,326],
                title: "Pernas do Fórnice",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O fórnice é uma estrutura arqueada de substância branca localizada no sistema límbico, responsável pela conexão entre o hipocampo e outras áreas cerebrais, especialmente os corpos mamilares do hipotálamo. É formado por fibras nervosas que desempenham um papel crucial na memória e na integração emocional. O fórnix é dividido em três porções principais: Colunas, Corpo e Pernas do fórnice.",
                reference: "Haines, D. E., Mihailoff, G. A. (2018). Fundamental neuroscience for basic and clinical applications. Philadelphia, PA: Elsevier. | Haines, D.E. (2014). Neuroanatomy in clinical context: An atlas of structures, sections, systems and syndromes (9th ed.). Philadelphia, PA: Lippincott Williams & Wilkins. | Standring, S. (2016). Gray's Anatomy (41st ed.). Edinburgh: Elsevier Churchill Livingstone. | Blumenfeld, H. (2018). Neuroanatomy through clinical cases (2nd ed.). Sunderland, MA: Sinauer.| Mancall, E. L., Brock, D. G., & Gray, H. (2011). Gray's clinical neuroanatomy: the anatomic basis for clinical neuroscience. Philadelphia, PA: Elsevier."
            },
            {
                shape: "rect",
                coords: [770,333,941,368],
                title: "3° Ventrículo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O terceiro ventrículo é uma cavidade estreita situada na linha média, entre os dois hemisférios cerebrais. Mais especificamente, ele está situado na região do diencéfalo, onde é envolvido lateralmente pelos tálamos e inferolateralmente pelo hipotálamo. O terceiro ventrículo está conectado ao quarto ventrículo póstero-inferiormente pelo aqueduto mesencefálico (aqueduto de Sylvius). O aqueduto mesencefálico é um canal que cursa ao longo de toda a extensão do mesencéfalo, em direção à ponte.",
                reference: "Lehtinen MK, Bjornsson CS, Dymecki SM, Gilbertson RJ, Holtzman DM, Monuki ES. The choroid plexus and cerebrospinal fluid: emerging roles in development, disease, and therapy. J Neurosci. 2013 Nov 6;33(45):17553-9. doi: 10.1523/JNEUROSCI.3258-13.2013. PMID: 24198345; PMCID: PMC3818536. | Chitty LS, Chudleigh P, Wright E, Campbell S, Pembrey M. The significance of choroid plexus cysts in an unselected population: results of a multicenter study. Ultrasound Obstet Gynecol. 1998 Dec;12(6):391-7. doi: 10.1046/j.1469-0705.1998.12060391.x. PMID: 9918087.| Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378.\nMachado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247"
            },
            {
                shape: "rect",
                coords: [756,382,950,410],
                title: "Cauda do Núcleo Caudado",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O núcleo caudado é uma estrutura subcortical em forma de 'C' localizada nos hemisférios cerebrais e faz parte dos gânglios da base. Ele desempenha um papel crucial no controle motor, aprendizado, memória e regulação emocional. Suas principais divisões são a cabeça, o corpo e a cauda, cada uma conectada a diferentes áreas cerebrais para integrar informações motoras e cognitivas. Alterações no núcleo caudado estão associadas a doenças como Parkinson, Huntington e transtornos psiquiátricos.",
                reference: "Driscoll ME, Bollu PC, Tadi P. Neuroanatomy, Nucleus Caudate. [Updated 2023 Jul 24]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2025 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK557407/"
            },
            {
                shape: "rect",
                coords: [748,419,889,449],
                title: "Hipocampo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O hipocampo é dividido em três partes: cabeça, corpo e cauda. A cabeça do hipocampo, a parte anterior e maior, está direcionada anterior e medialmente, e forma a parte superior do segmento posterior uncal. O corpo do hipocampo se estende para trás ao longo da parte medial do assoalho do corno temporal, estreitando-se na cauda, que desaparece como uma estrutura ventricular. Sua função é dividida, apresentando participações no controle cognitivo do estresse, emoção e afeto, mas também se relaciona com o processamento de informações e na formação e recuperação de memória.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007.| FANSELOW, M. S.; DONG, H.-W. Are the Dorsal and Ventral Hippocampus Functionally Distinct Structures? Neuron, v. 65, n. 1, p. 7–19, jan. 2010. | SHI, H.-J. et al. Hippocampus: Molecular, Cellular, and Circuit Features in Anxiety. Neuroscience Bulletin, 21 jan. 2023."
            },
            {
                shape: "rect",
                coords: [716,502,916,535],
                title: "Base do Pedúnculo Cerebral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A Base do Pedúnculo Cerebral é uma estrutura bilateral à linha média na sustentação da base central do cérebro. Os pedúnculos convergem à junção pontomesencefálica, são posteriores ao quiasma óptico e são contornados pelo nervo troclear (NV IV). Além disso, auxilia na formação do assoalho do terceiro ventrículo e são formados por fibras corticoespinhais, corticonucleares e corticopontinas.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016."
            },
            {
                shape: "rect",
                coords: [608,593,808,626],
                title: "Aderência Intertalâmica",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A aderência intertalâmica é uma conexão de substância cinzenta que une as partes mediais dos dois tálamos através do terceiro ventrículo. Embora não contenha fibras nervosas de condução significativa, sua presença é variável entre os indivíduos, podendo estar ausente sem comprometer as funções cerebrais. Essa estrutura é mais comum em mulheres e não desempenha papel essencial na transmissão de informações entre os tálamos.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378.\nMachado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [405,610,571,643],
                title: "Giro para-hipocampal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro para-hipocampal pode ser visualizado tanto na vista medial quanto na vista inferior. Ele é limitado medialmente pelo sulco do hipocampo e lateralmente pelo sulco colateral (que o separa do giro occipitotemporal lateral). Na extremidade anterior esse giro desvia-se medialmente e cruza para posterior, dando origem ao unco. Na extremidade posterior, esse giro é contínuo com o istmo do giro do cíngulo, sendo o sulco calcarino o marco utilizado para diferenciar o ambas estruturas. Além disso, a porção anterior desse giro é denominada de área entorrinal, sendo uma das primeiras regiões a serem danificadas no Alzheimer devido a sua importância para a memória.",
                reference: "Wen HT, Rhoton AL Jr, de Oliveira E, Cardoso AC, Tedeschi H, Baccanelli M, Marino R Jr. Microsurgical anatomy of the temporal lobe: part 1: mesial temporal lobe anatomy and its vascular relationships as applied to amygdalohippocampectomy. Neurosurgery. 1999 Sep;45(3):549-91; discussion 591-2. doi: 10.1097/00006123-199909000-00028. PMID: 10493377.\nMachado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574\nLin YH, Dhanaraj V, Mackenzie AE, Young IM, Tanglay O, Briggs RG, Chakraborty AR, Hormovas J, Fonseka RD, Kim SJ, Yeung JT, Teo C, Sughrue ME. Anatomy and White Matter Connections of the Parahippocampal Gyrus. World Neurosurg. 2021 Apr;148:e218-e226. doi: 10.1016/j.wneu.2020.12.136. Epub 2021 Jan 4. PMID: 33412321."
            },
            {
                shape: "rect",
                coords: [319,570,485,603],
                title: "Sulco colateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco colateral é uma estrutura que separa o giro parahipocampal do giro occipitotemporal lateral. Alguns autores consideram o sulco colateral como um complexo de vários sulcos. Na porção anterior, o sulco colateral pode terminar de forma independente ou pode se unir ao sulco rinal ou ao sulco occipitotemporal.",
                reference: "Lehman VT, Black DF, Bernstein MA, Welker KM. Temporal lobe anatomy: eight imaging signs to facilitate interpretation of MRI. Surg Radiol Anat. 2016 May;38(4):433-43. doi: 10.1007/s00276-015-1582-9. Epub 2015 Oct 29. PMID: 26514961."
            }
        ],
    },
    {
        name: "cortes-coronais09",
        areas: [
            {
                shape: "rect",
                coords: [1888,2507,2419,2614],
                title: "Núcleo Denteado",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O núcleo denteado é a maior e mais lateral das estruturas dos núcleos profundos do cerebelo, localizado na substância branca. Ele tem uma forma característica de folha ondulada e é responsável por processar informações motoras enviadas pelo córtex cerebral para o cerebelo. Suas fibras eferentes formam grande parte do pedúnculo cerebelar superior, conectando-se ao tálamo e outras áreas motoras. É essencial para o planejamento, coordenação e precisão dos movimentos voluntários.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [1314,2505,1845,2612],
                title: "Sulco Calcarino",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco calcarino é um importante marco anatômico localizado na vista medial do lobo occipital. Essa estrutura se inicia ao nível do esplênio do corpo caloso e corre em direção posterior, como uma curvatura com convexidade superior, sendo responsável por separar o cuneo e o giro occipitotemporal medial. Além disso, é atribuída a essa estrutura funções visuais, pois nos lábios do sulco calcarino se encontra a área visual primária do córtex.",
                reference: "El Mohamad AR, Tatu L, Moulin T, Fadoul S, Vuillier F. Main anatomical features of the calcarine sulcus: a 3D magnetic resonance imaging at 3T study. Surg Radiol Anat. 2019 Feb;41(2):181-186. doi: 10.1007/s00276-018-2118-x. Epub 2018 Nov 14. PMID: 30430185. Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574 Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [95,2437,1301,2554],
                title: "Giro Occipto-temporal Medial e Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro occipitotemporal medial pode ser visualizado tanto na vista medial quanto na vista inferior, se localizando abaixo do sulco calcarino. Alguns estudos classificam essa estrutura como união do giro para-hipocampal, anterior, com o giro lingual, posterior. O giro occipitotemporal lateral é uma estrutura localizada entre o sulco colateral e o sulco occipitotemporal. O giro pode ser visualizado tanto na vista medial, como na vista inferior do hemisfério.",
                reference: "Chau AM, Gagliardi F, Smith A, Pelzer NR, Stewart F, Mortini P, Elbabaa SK, Caputy AJ, Gragnaniello C. The paramedian supracerebellar transtentorial approach to the posterior fusiform gyrus. Acta Neurochir (Wien). 2016 Nov;158(11):2149-2154. doi: 10.1007/s00701-016-2960-8. Epub 2016 Sep 27. PMID: 27677522. Lehman VT, Black DF, Bernstein MA, Welker KM. Temporal lobe anatomy: eight imaging signs to facilitate interpretation of MRI. Surg Radiol Anat. 2016 May;38(4):433-43. doi: 10.1007/s00276-015-1582-9. Epub 2015 Oct 29. PMID: 26514961."
            },
            {
                shape: "rect",
                coords: [129,2192,895,2303],
                title: "Sulco occipitotemporal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco occipitotemporal é responsável por separar o giro temporal inferior do giro occipitotemporal lateral. Essa estrutura apresenta uma trajetória curvilínea ligando os lobos temporal e occipital. Além disso, esse sulco pode ser contínuo ou pode sofrer interrupções em seu percurso.",
                reference: "Chau AM, Stewart F, Gragnaniello C. Sulcal and gyral anatomy of the basal occipital-temporal lobe. Surg Radiol Anat. 2014 Dec;36(10):959-65. doi: 10.1007/s00276-014-1294-6. Epub 2014 Apr 18. PMID: 24744138. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect",
                coords: [32,1988,798,2099],
                title: "Giro temporal inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lobo temporal tem suas estruturas delimitadas por três sulcos paralelos, o sulco lateral(ramo posterior), o sulco temporal superior e o sulco temporal inferior. O giro temporal inferior se localiza entre o sulco temporal inferior(superiormente) e o sulco occipitotemporal(inferiormente). Essa estrutura pode se apresentar fragmentada, em alguns casos, e fundida ao giro temporal médio, sem apresentar limites bem definidos entre os dois giros. Além disso, o giro temporal inferior pode ser visualizado tanto na vista superolateral, como na vista inferior, pois ele compõe a parte lateral da superfície basal do cérebro.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [2,1622,768,1733],
                title: "Sulco temporal inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco temporal inferior se origina anteriormente na região do lobo temporal, onde percorre paralelo ao sulco temporal superior até chegar ao lobo parietal, assim como o sulco temporal superior. Essa estrutura pode se apresentar dividida em dois ou três sulcos pequenos.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [2,1503,768,1614],
                title: "Giro temporal médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lobo temporal tem suas estruturas delimitadas por três sulcos paralelos, o sulco lateral (ramo posterior), o sulco temporal superior e o sulco temporal inferior. O giro temporal médio se localiza entre o sulco temporal superior e o sulco temporal inferior. Em alguns casos, esse giro pode aparecer fundido ao giro temporal inferior, sem apresentar limites bem definidos entre os dois giros.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [0,1306,766,1417],
                title: "Sulco temporal superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco temporal superior se origina próximo ao polo temporal e percorre posteriormente até adentrar na região do lobo parietal, onde termina no giro angular. Essa estrutura percorre paralelamente ao ramo posterior do sulco lateral.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [104,1093,870,1204],
                title: "Giro temporal superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lobo temporal tem suas estruturas delimitadas por três sulcos paralelos, o sulco lateral (ramo posterior), o sulco temporal superior e o sulco temporal inferior. O giro temporal superior se localiza entre o sulco temporal superior (inferiormente) e o ramo posterior do sulco lateral. Em sua porção superior se localizam os giros temporais transversos, sendo o giro temporal transverso anterior, o giro de Heschl, o local da área auditiva primária do córtex.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [102,942,952,1057],
                title: "Ramo Posterior do Sulco Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  É o maior dos ramos e percorre em direção a porção posterior do telencéfalo, sendo que na porção posterior é circundado pelo giro supramarginal. Responsável pela separação dos lobos temporal e parietal.",
                reference: "Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574 | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [244,750,1094,865],
                title: "Lóbulo Parietal Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Localizado abaixo do sulco intraparietal, o lóbulo parietal inferior está associado à linguagem, atenção visual e integração de informações sensoriais. Ele também participa de funções mais complexas, como percepção do próprio corpo e processamento de estímulos sociais e emocionais.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [2432,584,1109,698],
                title: "Sulco Intraparietal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco intraparietal é uma estrutura proeminente no lobo parietal, localizada logo posteriormente ao giro pós-central. Ele divide o lobo parietal em dois lóbulos: superior e inferior. Além de sua função anatômica, está envolvido em processos cognitivos, como atenção visual, integração sensorial e coordenação visuomotora.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [1136,472,1813,586],
                title: "Lóbulo Parietal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lóbulo parietal superior, situado acima do sulco intraparietal, é responsável por funções relacionadas à percepção sensorial, integração espacial e orientação corporal no espaço. Ele desempenha um papel essencial no processamento de informações táteis e na coordenação de movimentos complexos.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [2922,913,3792,1054],
                title: "Fascículo Longitudinal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Sendo caracterizado como uma fibra de associação, o fascículo longitudinal superior é um trato de fibras de associação bidirecional, conectando as partes anterior (frontal, opercular) às posteriores (temporal, parietal, occipital) de cada hemisfério, ligando também as áreas expressivas às receptivas da linguagem.",
                reference: "GENEVIÈVE NOLZE-CHARRON et al. Tractography of the external capsule and cognition: A diffusion MRI study of cholinergic fibers. Experimental gerontology, v. 130, p. 110792–110792, 1 fev. 2020."
            },
            {
                shape: "rect",
                coords: [2858,1240,3798,1386],
                title: "Corno Posterior do Ventrículo Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Os ventrículos laterais estão localizados no parênquima encefálico, um em cada hemisfério cerebral. Possuem formato semelhante à letra 'C' e são compostos por um corpo e três cornos: anterior (frontal), posterior (occipital) e inferior (temporal). O corno inferior encontra-se no lobo temporal, enquanto o corpo do ventrículo atravessa o lobo parietal em direção ao frontal. O corno anterior estende-se anteriormente no lobo frontal, e o corno posterior projeta-se posteriormente no lobo occipital. Na extremidade anterior do corpo, há uma abertura em forma de 'Y', o forame interventricular, que conecta os ventrículos laterais ao terceiro ventrículo.",
                reference: "Lehtinen MK, Bjornsson CS, Dymecki SM, Gilbertson RJ, Holtzman DM, Monuki ES. The choroid plexus and cerebrospinal fluid: emerging roles in development, disease, and therapy. J Neurosci. 2013 Nov 6;33(45):17553-9. doi: 10.1523/JNEUROSCI.3258-13.2013. PMID: 24198345; PMCID: PMC3818536. Chitty LS, Chudleigh P, Wright E, Campbell S, Pembrey M. The significance of choroid plexus cysts in an unselected population: results of a multicenter study. Ultrasound Obstet Gynecol. 1998 Dec;12(6):391-7. doi: 10.1046/j.1469-0705.1998.12060391.x. PMID: 9918087. Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [2979,1582,3490,1693],
                title: "Plexo Corióide",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O plexo corióide é uma rede de capilares revestida por células ependimárias especializada na produção do líquido cefalorraquidiano (LCR). Ele está localizado nos ventrículos cerebrais, incluindo os laterais, o terceiro e o quarto ventrículo. Além de secretar o LCR, também atua como barreira seletiva, regulando a composição do líquido. Essa estrutura é essencial para a proteção e nutrição do sistema nervoso central, além de auxiliar na remoção de resíduos metabólicos.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [2962,2111,3547,2215],
                title: "Sulco Parieto-occipital",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco parieto-occipital é visualizado na vista medial, onde marca o ponto de distinção entre o lobo parietal e o lobo occipital. Sua porção posterior se inicia na margem superomedial do hemisfério telencefálico, onde corre em direção ínfero-anterior, podendo se unir à porção anterior do sulco calcarino.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            }
        ],
    },
    {
        name: "cortes-coronais10",
        areas: [
            {
                shape: "rect",
                coords: [2593,403,3419,534],
                title: "Fascículo Longitudinal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Sendo caracterizado como uma fibra de associação, o fascículo longitudinal superior é um trato de fibras de associação bidirecional, conectando as partes anterior (frontal, opercular) às posteriores (temporal, parietal, occipital) de cada hemisfério, ligando também as áreas expressivas às receptivas da linguagem.",
                reference: "GENEVIÈVE NOLZE-CHARRON et al. Tractography of the external capsule and cognition: A diffusion MRI study of cholinergic fibers. Experimental gerontology, v. 130, p. 110792–110792, 1 fev. 2020."
            },
            {
                shape: "rect", 
                coords: [3083,983,3798,1104], 
                title: "Giros Longos da Ínsula", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A ínsula tem uma forma triangular com seu ápice direcionado anteriormente e inferiormente, sendo circundada pelo sulco circular da ínsula. O sulco central da ínsula é um sulco relativamente constante que se estende para cima e para trás através da ínsula e a divide em uma grande parte anterior que é dividida por vários sulcos rasos em três a cinco giros curtos, e uma parte posterior que é formada pelos giros longos anterior e posterior. A ínsula tem uma organização complexa com uma representação neuroanatômica topográfica dos processos viscerais e três sub-regiões com diferentes níveis de granularidade laminar, distribuição de receptores acetilcolinérgicos e padrões de conectividade local, cortical, subcortical e do tronco cerebral. Essas características citoarquitetônicas e de conectividade anatômica sugerem uma posição central e especialização do córtex insular no processamento de informações interoceptivas. Essa convergência de informações corticais e interoceptivas no córtex insular levou a hipóteses influentes sobre seus potenciais papéis na predição interoceptiva, integração de informações para a consciência, consciência emocional, inferência interoceptiva, e emoções e aprendizado baseado em erros de sentimentos.", 
                reference: "Jobst BC, Gonzalez-Martinez J, Isnard J, Kahane P, Lacuey N, Lahtoo SD, Nguyen DK, Wu C, Lado F. The Insula and Its Epilepsies. Epilepsy Curr. 2019 Jan;19(1):11-21. doi: 10.1177/1535759718822847. Epub 2019 Jan 31. PMID: 30838920; PMCID: PMC6610377. | FERMIN, A. S. R.; FRISTON, K.; YAMAWAKI, S. An insula hierarchical network architecture for active interoceptive inference. Royal Society Open Science, v. 9, n. 6, jun. 2022. |"
            },
            {
                shape: "rect",
                coords: [2858,1240,3798,1386],
                title: "Corno Posterior do Ventrículo Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Os ventrículos laterais estão localizados no parênquima encefálico, um em cada hemisfério cerebral. Possuem formato semelhante à letra 'C' e são compostos por um corpo e três cornos: anterior (frontal), posterior (occipital) e inferior (temporal). O corno inferior encontra-se no lobo temporal, enquanto o corpo do ventrículo atravessa o lobo parietal em direção ao frontal. O corno anterior estende-se anteriormente no lobo frontal, e o corno posterior projeta-se posteriormente no lobo occipital. Na extremidade anterior do corpo, há uma abertura em forma de 'Y', o forame interventricular, que conecta os ventrículos laterais ao terceiro ventrículo.",
                reference: "Lehtinen MK, Bjornsson CS, Dymecki SM, Gilbertson RJ, Holtzman DM, Monuki ES. The choroid plexus and cerebrospinal fluid: emerging roles in development, disease, and therapy. J Neurosci. 2013 Nov 6;33(45):17553-9. doi: 10.1523/JNEUROSCI.3258-13.2013. PMID: 24198345; PMCID: PMC3818536. Chitty LS, Chudleigh P, Wright E, Campbell S, Pembrey M. The significance of choroid plexus cysts in an unselected population: results of a multicenter study. Ultrasound Obstet Gynecol. 1998 Dec;12(6):391-7. doi: 10.1046/j.1469-0705.1998.12060391.x. PMID: 9918087. Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [2918,2012,3547,2121],
                title: "Sulco Parieto-occipital",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco parieto-occipital é visualizado na vista medial, onde marca o ponto de distinção entre o lobo parietal e o lobo occipital. Sua porção posterior se inicia na margem superomedial do hemisfério telencefálico, onde corre em direção ínfero-anterior, podendo se unir à porção anterior do sulco calcarino.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [2058,2331,2687,2440],
                title: "Núcleo Denteado",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O núcleo denteado é a maior e mais lateral das estruturas dos núcleos profundos do cerebelo, localizado na substância branca. Ele tem uma forma característica de folha ondulada e é responsável por processar informações motoras enviadas pelo córtex cerebral para o cerebelo. Suas fibras eferentes formam grande parte do pedúnculo cerebelar superior, conectando-se ao tálamo e outras áreas motoras. É essencial para o planejamento, coordenação e precisão dos movimentos voluntários.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [1353,2344,1976,2534],
                title: "Giro Occipto-temporal Medial e Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O giro occipitotemporal medial pode ser visualizado tanto na vista medial quanto na vista inferior, se localizando abaixo do sulco calcarino. Alguns estudos classificam essa estrutura como união do giro para-hipocampal, anterior, com o giro lingual, posterior. O giro occipitotemporal lateral é uma estrutura localizada entre o sulco colateral e o sulco occipitotemporal. O giro pode ser visualizado tanto na vista medial, como na vista inferior do hemisfério.",
                reference: "Chau AM, Gagliardi F, Smith A, Pelzer NR, Stewart F, Mortini P, Elbabaa SK, Caputy AJ, Gragnaniello C. The paramedian supracerebellar transtentorial approach to the posterior fusiform gyrus. Acta Neurochir (Wien). 2016 Nov;158(11):2149-2154. doi: 10.1007/s00701-016-2960-8. Epub 2016 Sep 27. PMID: 27677522. Lehman VT, Black DF, Bernstein MA, Welker KM. Temporal lobe anatomy: eight imaging signs to facilitate interpretation of MRI. Surg Radiol Anat. 2016 May;38(4):433-43. doi: 10.1007/s00276-015-1582-9. Epub 2015 Oct 29. PMID: 26514961."
            },
            {
                shape: "rect",
                coords: [604,2287,1334,2416],
                title: "Sulco occipitotemporal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco occipitotemporal é responsável por separar o giro temporal inferior do giro occipitotemporal lateral. Essa estrutura apresenta uma trajetória curvilínea ligando os lobos temporal e occipital. Além disso, esse sulco pode ser contínuo ou pode sofrer interrupções em seu percurso.",
                reference: "Chau AM, Stewart F, Gragnaniello C. Sulcal and gyral anatomy of the basal occipital-temporal lobe. Surg Radiol Anat. 2014 Dec;36(10):959-65. doi: 10.1007/s00276-014-1294-6. Epub 2014 Apr 18. PMID: 24744138. | Vachha BA, Massoud TF, Huang SY. Anatomy of the Cerebral Cortex, Lobes, and Cerebellum. Neuroimaging Clin N Am. 2022 Aug;32(3):463-473. doi: 10.1016/j.nic.2022.04.008. PMID: 35843656."
            },
            {
                shape: "rect",
                coords: [356,2128,1006,2252],
                title: "Giro temporal inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lobo temporal tem suas estruturas delimitadas por três sulcos paralelos, o sulco lateral(ramo posterior), o sulco temporal superior e o sulco temporal inferior. O giro temporal inferior se localiza entre o sulco temporal inferior(superiormente) e o sulco occipitotemporal(inferiormente). Essa estrutura pode se apresentar fragmentada, em alguns casos, e fundida ao giro temporal médio, sem apresentar limites bem definidos entre os dois giros. Além disso, o giro temporal inferior pode ser visualizado tanto na vista superolateral, como na vista inferior, pois ele compõe a parte lateral da superfície basal do cérebro.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [218,1882,868,2006],
                title: "Sulco temporal inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco temporal inferior se origina anteriormente na região do lobo temporal, onde percorre paralelo ao sulco temporal superior até chegar ao lobo parietal, assim como o sulco temporal superior. Essa estrutura pode se apresentar dividida em dois ou três sulcos pequenos.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [149,1714,799,1838],
                title: "Giro temporal médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lobo temporal tem suas estruturas delimitadas por três sulcos paralelos, o sulco lateral (ramo posterior), o sulco temporal superior e o sulco temporal inferior. O giro temporal médio se localiza entre o sulco temporal superior e o sulco temporal inferior. Em alguns casos, esse giro pode aparecer fundido ao giro temporal inferior, sem apresentar limites bem definidos entre os dois giros.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [45,1520,744,1641],
                title: "Sulco temporal superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco temporal superior se origina próximo ao polo temporal e percorre posteriormente até adentrar na região do lobo parietal, onde termina no giro angular. Essa estrutura percorre paralelamente ao ramo posterior do sulco lateral.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [22,1275,721,1396],
                title: "Giro temporal superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lobo temporal tem suas estruturas delimitadas por três sulcos paralelos, o sulco lateral (ramo posterior), o sulco temporal superior e o sulco temporal inferior. O giro temporal superior se localiza entre o sulco temporal superior (inferiormente) e o ramo posterior do sulco lateral. Em sua porção superior se localizam os giros temporais transversos, sendo o giro temporal transverso anterior, o giro de Heschl, o local da área auditiva primária do córtex.",
                reference: "Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [22,995,965,1114],
                title: "Ramo Posterior do Sulco Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  É o maior dos ramos e percorre em direção a porção posterior do telencéfalo, sendo que na porção posterior é circundado pelo giro supramarginal. Responsável pela separação dos lobos temporal e parietal.",
                reference: "Machado A; Haertel LM. Neuroanatomia funcional. 3. ed. São Paulo: Atheneu, 2014, 340 p. ISBN 9788538804574 | Chauhan P, Rathawa A, Jethwa K, Mehra S. The Anatomy of the Cerebral Cortex. In: Pluta R, editor. Cerebral Ischemia [Internet]. Brisbane (AU): Exon Publications; 2021 Nov 6. Chapter 1. PMID: 34905314."
            },
            {
                shape: "rect",
                coords: [150,767,848,883],
                title: "Lóbulo Parietal Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Localizado abaixo do sulco intraparietal, o lóbulo parietal inferior está associado à linguagem, atenção visual e integração de informações sensoriais. Ele também participa de funções mais complexas, como percepção do próprio corpo e processamento de estímulos sociais e emocionais.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [412,543,1110,659],
                title: "Sulco Intraparietal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco intraparietal é uma estrutura proeminente no lobo parietal, localizada logo posteriormente ao giro pós-central. Ele divide o lobo parietal em dois lóbulos: superior e inferior. Além de sua função anatômica, está envolvido em processos cognitivos, como atenção visual, integração sensorial e coordenação visuomotora.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
            {
                shape: "rect",
                coords: [610,334,1308,450],
                title: "Lóbulo Parietal Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lóbulo parietal superior, situado acima do sulco intraparietal, é responsável por funções relacionadas à percepção sensorial, integração espacial e orientação corporal no espaço. Ele desempenha um papel essencial no processamento de informações táteis e na coordenação de movimentos complexos.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247."
            },
        ],
    },
    // {
    //     name: "teste",
    //     areas: [
    //         {
    //             shape: "rect", 
    //             coords: [406,186,696,121], 
    //             title: "", 
    //             fillColor: "rgba(0, 0, 0, 0)",
    //             strokeColor: "rgba(0, 0, 0, 0)",
    //             description: "  ",
    //             reference: ""
    //         }, 
    //     ],
    // },
];

  export default CC