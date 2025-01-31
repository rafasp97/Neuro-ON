
const TE = [
    {
        name: "tronco-encefalico01",
        areas: [
            {
                shape: "rect",
                coords: [256,89,612,169],
                title: "Pilar do Cérebro",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O pilar do cérebro, também chamado de pedúnculos cerebrais, é uma estrutura bilateral à linha média, localizada na base central do cérebro. Os pedúnculos convergem na junção pontomesencefálica, estão situados posteriormente ao quiasma óptico e são contornados pelo nervo troclear (NV IV). Além disso, contribuem para a formação do assoalho do terceiro ventrículo e são compostos por fibras corticoespinhais, corticonucleares e corticopontinas.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [732,12,1159,96],
                title: "Fossa Interpeduncular",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A fossa interpeduncular está localizada entre os pedúnculos cerebrais e possui forma triangular. Ela abriga a substância perfurada posterior e é o local de emergência do nervo oculomotor (NC III).",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1340,219,1837,315],
                title: "Sulco Pontinomesencefálico",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco pontinomesencefálico delimita superiormente a ponte e inferiormente o mesencéfalo.",
                reference: "Moraes KR, Holanda VM, Cavalheiro S. Relação Anatômica Entre a Arquitetura Interna e as Zonas de Segurança Externas do Tronco Encefálico. J Bras Neurocirur 31(4): 293-304, 2020."
            },
            {
                shape: "rect",
                coords: [1345,431,1721,530],
                title: "Sulco Basilar",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco basilar é uma estrutura localizada na linha mediana anterior da ponte, que aloja a artéria basilar.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1357,908,1733,1007],
                title: "Sulco Bulbopontino",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco bulbopontino delimita a ponte e o bulbo, sendo o local de emergência, em ordem médio-lateral, dos nervos cranianos abducente (VI), facial (VII) e vestíbulo-coclear (VIII).",
                reference: "Moraes KR, Holanda VM, Cavalheiro S. Relação Anatômica Entre a Arquitetura Interna e as Zonas de Segurança Externas do Tronco Encefálico. J Bras Neurocirur 31(4): 293-304, 2020."
            },
            {
                shape: "rect",
                coords: [1325,1062,1780,1158],
                title: "Fissura Mediana Anterior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A fissura mediana anterior, localizada no bulbo, é contínua com a fissura de mesmo nome na medula espinhal. Ela termina superiormente no forame cego, dividindo o bulbo em duas metades. Sua porção inferior é interrompida pela decussação das pirâmides.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [608,1313,1119,1413],
                title: "Decussação das Pirâmides",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A decussação das pirâmides interrompe a porção inferior da fissura mediana anterior. Ela é formada pela decussação de fibras do trato corticoespinhal lateral.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [44,1011,461,1089],
                title: "Sulco Pré-Olivar",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco pré-olivar é o local de emergência do nervo hipoglosso (NC XII).",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [184,895,533,983],
                title: "Oliva",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A oliva está localizada na porção lateral da medula oblonga, entre os sulcos pré e pós-olivar. Ela é constituída pelo núcleo olivar inferior.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [92,700,441,788],
                title: "Forame Cego",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O forame cego está localizado centralmente no sulco bulbopontino e é o local de término da fissura mediana anterior.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            }
        ],
    },
    {
        name: "tronco-encefalico02",
        areas: [
            {
                shape: "rect",
                coords: [165,166,530,252],
                title: "Colículo Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O colículo inferior é uma estrutura bilateral, localizada inferiormente à linha horizontal do cruciforme, associada à via auditiva. O braço inferior associado se comunica com o corpo geniculado medial.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1400,143,1765,229],
                title: "Colículo Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O colículo superior é uma estrutura bilateral, em parte coberta pela glândula pineal, associada à via visual. O braço superior associado se comunica com o corpo geniculado lateral ou diretamente com fibras do trato óptico.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [776,0,1141,86],
                title: "Sulco Cruciforme",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco cruciforme separa os corpos quadrigêmeos em colículos superiores e inferiores. Sua porção longitudinal ascende e forma uma depressão que abriga a glândula pineal. De sua porção inferior emergem os nervos trocleares (NC IV).",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1493,477,1889,547],
                title: "Véu Medular Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O véu medular superior une superiormente os pedúnculos cerebelares superiores, fechando assim a porção superior do IV ventrículo.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1416,559,1894,630],
                title: "Pedúnculo Cerebelar Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O pedúnculo cerebelar superior delimita superiormente o assoalho do IV ventrículo e transporta fibras do trato espinocerebelar anterior, além de fibras eferentes do núcleo denteado para o núcleo rubro oposto.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1416,662,1894,733],
                title: "Sulco Mediano Posterior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco mediano posterior é contínuo com o sulco de mesmo nome na medula espinhal. No bulbo, ele existe apenas na porção fechada.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1421,744,1899,815],
                title: "Colículo Facial",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O colículo facial é uma elevação inferior à eminência medial, formada por fibras do nervo facial (NC VII) que contornam posteriormente o núcleo do nervo abducente (NC VI).",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1421,834,1899,905],
                title: "Estria Medular",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A estria medular, de aspecto esbranquiçado, está localizada na porção central do assoalho do IV ventrículo e constitui a divisão coclear do nervo vestibulococlear (NC VIII). Ela desaparece no sulco mediano.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1421,954,1899,1025],
                title: "Trígono Hipoglossal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O trígono hipoglossal está localizado na porção inferior do assoalho do IV ventrículo e aloja o núcleo do nervo hipoglosso (NC XII).",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [397,968,637,1040],
                title: "Fóvea Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A fóvea inferior é uma depressão localizada entre os trígonos vagal e hipoglossal medialmente e a área vestibular lateralmente.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [53,1063,419,1129],
                title: "Tubérculo Cuneiforme",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O tubérculo cuneiforme está localizado na porção posterior do bulbo e aloja o núcleo cuneiforme, ao qual o fascículo cuneiforme, formado na medula espinhal, termina formando sinapse.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1,893,335,1010],
                title: "Pedúnculo Cerebelar Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O pedúnculo cerebelar inferior delimita inferiormente o assoalho do IV ventrículo e é formado pelas fibras do trato espinocerebelar posterior, ligadas às funções proprioceptivas inconscientes.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [110,772,404,842],
                title: "Área Vestibular",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A área vestibular está localizada lateralmente à fóvea superior e possui os núcleos vestibulares, os quais recebem aferências do nervo vestibular e formam o trato vestibuloespinhal, sendo importante no controle da postura e do equilíbrio.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [110,690,404,760],
                title: "Fóvea Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A fóvea superior está localizada no sulco limitante, lateralmente ao colículo facial. Possui os núcleos sensorial principal e motor do nervo trigêmeo.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [63,564,415,680],
                title: "Pedúnculo Cerebelar Médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O pedúnculo cerebelar médio se funde bilateralmente à ponte e serve para a passagem de fibras pontinas dos núcleos pontinos para o cerebelo. Além disso, delimita a porção lateral do assoalho do IV ventrículo.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [150,465,449,537],
                title: "Sulco Limitante",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco limitante delimita bilateralmente as eminências mediais no assoalho do IV ventrículo.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [264,350,587,419],
                title: "Eminência Medial",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A eminência medial está localizada entre o sulco mediano e o limitante, rostralmente ao colículo facial.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            }
        ],
    },
    {
        name: "tronco-encefalico03",
        areas: [
            {
                shape: "rect",
                coords: [13,292,395,367],
                title: "Teto do Mesencéfalo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O teto do mesencéfalo corresponde ao mesencéfalo dorsal e possui quatro elevações, chamadas conjuntamente de corpos quadrigêmeos, ou seja, os colículos.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1288,245,1899,320],
                title: "Substância Cinzenta Periaquedutal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A substância cinzenta periaquedutal circunda o mesencéfalo, está relacionada à analgesia endógena e aos mecanismos fisiológicos e comportamentais envolvidos nas respostas de defesa.",
                reference: "MORAES, Gean Carlos Alves. Via descendente rostroventromedial bulbar que medeia as respostas cardiovasculares evocadas pela coluna dorsolateral da substância cinzenta periaquedutal. 2020. 102 f. Dissertação (Mestrado em Ciências Biológicas) – Universidade Federal de Goiás, Instituto de Ciências Biológicas, Goiânia, 2020. Disponível em: http://repositorio.bc.ufg.br/tede/handle/tede/10598. | Freitas, L. S. Estudo anatômico do tronco encefálico por imagens de ressonância magnética de 3 Teslas e correlação com cortes histológicos 2016. 124 páginas. Dissertação (Mestrado). Faculdade de Medicina de Ribeirão Preto, Universidade de São Paulo, Ribeirão Preto, 2016."
            },
            {
                shape: "rect",
                coords: [1414,337,1857,411],
                title: "Aqueduto Cerebral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O aqueduto cerebral comunica o terceiro e o quarto ventrículos cerebrais.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1439,425,1882,499],
                title: "Tegmento do Mesencéfalo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O tegmento do mesencéfalo está localizado entre o pilar do cérebro e o tegmento do mesencéfalo. Em sua porção anterior, possui o núcleo rubro, e em sua porção posterior, encontra-se o núcleo do nervo oculomotor e o núcleo de Edinger-Westphal.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1448,633,1891,707],
                title: "Substância Negra",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A substância negra estende-se da porção superior da ponte inferiormente à região subtalâmica superiormente. É composta por duas partes: uma parte reticular anterior contendo compostos de ferro e outra compacta posterior, produtora de dopamina.",
                reference: "Freitas, L. S. Estudo anatômico do tronco encefálico por imagens de ressonância magnética de 3 Teslas e correlação com cortes histológicos 2016. 124 páginas. Dissertação (Mestrado). Faculdade de Medicina de Ribeirão Preto, Universidade de São Paulo, Ribeirão Preto, 2016. | Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1,682,444,756],
                title: "Fossa Interpeduncular",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A fossa interpeduncular está entre os pedúnculos cerebrais, possui forma triangular. Abriga a substância perfurada posterior e é o local de emergência do nervo oculomotor (NC III).",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [61,528,447,609],
                title: "Núcleo Rubro",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O núcleo rubro é uma estação sináptica de sistemas neurais relacionados com movimentos, interconectando o córtex cerebral, o cerebelo e a medula espinhal. Ele origina o trato rubroespinhal, que em humanos possui função motora reduzida, uma vez que o principal é o corticoespinhal.",
                reference: "Freitas, L. S. Estudo anatômico do tronco encefálico por imagens de ressonância magnética de 3 Teslas e correlação com cortes histológicos 2016. 124 páginas. Dissertação (Mestrado). Faculdade de Medicina de Ribeirão Preto, Universidade de São Paulo, Ribeirão Preto, 2016. | DYONÍSIO, Gabriela. Investigação dos impactos da lesão medular traumática na estrutura neuroanatômica de áreas corticais sensoriomotoras. 2019. 94 f. Dissertação (Mestrado em Engenharia Biomédica) - Universidade Federal de Uberlândia, Uberlândia, 2019. DOI http://doi.org/10.14393/ufu.di.2019.2563."
            }
        ],
    },
    {
        name: "tronco-encefalico04",
        areas: [
            {
                shape: "rect",
                coords: [575,213,902,300],
                title: "Núcleo Rubro",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O núcleo rubro é uma estação sináptica de sistemas neurais relacionados com movimentos, interconectando o córtex cerebral, o cerebelo e a medula espinhal. Ele origina o trato rubroespinhal, que em humanos possui função motora reduzida, uma vez que o principal é o corticoespinhal.",
                reference: "Freitas, L. S. Estudo anatômico do tronco encefálico por imagens de ressonância magnética de 3 Teslas e correlação com cortes histológicos 2016. 124 páginas. Dissertação (Mestrado). Faculdade de Medicina de Ribeirão Preto, Universidade de São Paulo, Ribeirão Preto, 2016. | DYONÍSIO, Gabriela. Investigação dos impactos da lesão medular traumática na estrutura neuroanatômica de áreas corticais sensoriomotoras. 2019. 94 f. Dissertação (Mestrado em Engenharia Biomédica) - Universidade Federal de Uberlândia, Uberlândia, 2019. DOI http://doi.org/10.14393/ufu.di.2019.2563."
            },
            {
                shape: "rect",
                coords: [1513,820,1832,933],
                title: "Substância Cinzenta Periaquedutal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A substância cinzenta periaquedutal circunda o mesencéfalo, está relacionada à analgesia endógena e aos mecanismos fisiológicos e comportamentais envolvidos nas respostas de defesa.",
                reference: "MORAES, Gean Carlos Alves. Via descendente rostroventromedial bulbar que medeia as respostas cardiovasculares evocadas pela coluna dorsolateral da substância cinzenta periaquedutal. 2020. 102 f. Dissertação (Mestrado em Ciências Biológicas) – Universidade Federal de Goiás, Instituto de Ciências Biológicas, Goiânia, 2020. Disponível em: http://repositorio.bc.ufg.br/tede/handle/tede/10598. | Freitas, L. S. Estudo anatômico do tronco encefálico por imagens de ressonância magnética de 3 Teslas e correlação com cortes histológicos 2016. 124 páginas. Dissertação (Mestrado). Faculdade de Medicina de Ribeirão Preto, Universidade de São Paulo, Ribeirão Preto, 2016."
            },
            {
                shape: "rect",
                coords: [798,1175,1117,1288],
                title: "Aqueduto Cerebral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O aqueduto cerebral comunica o terceiro e o quarto ventrículos cerebrais.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },

        ],
    },
    {
        name: "tronco-encefalico05",
        areas: [
            {
                shape: "rect",
                coords: [1260,195,1599,259],
                title: "Pilar do Cérebro",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O pilar do cérebro, também chamado de pedúnculos cerebrais, é uma estrutura bilateral à linha média, localizada na base central do cérebro. Os pedúnculos convergem na junção pontomesencefálica, estão situados posteriormente ao quiasma óptico e são contornados pelo nervo troclear (NV IV). Além disso, contribuem para a formação do assoalho do terceiro ventrículo e são compostos por fibras corticoespinhais, corticonucleares e corticopontinas.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1255,498,1594,562],
                title: "Forame Cego",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O forame cego está localizado centralmente no sulco bulbopontino e é o local de término da fissura mediana anterior.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1275,630,1614,694],
                title: "Sulco Bulbopontino",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco bulbopontino delimita a ponte e o bulbo, sendo o local de emergência, em ordem médio-lateral, dos nervos cranianos abducente (VI), facial (VII) e vestíbulo-coclear (VIII).",
                reference: "Moraes KR, Holanda VM, Cavalheiro S. Relação Anatômica Entre a Arquitetura Interna e as Zonas de Segurança Externas do Tronco Encefálico. J Bras Neurocirur 31(4): 293-304, 2020."
            },
            {
                shape: "rect",
                coords: [1258,823,1597,887],
                title: "Sulco Pré-Olivar",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco pré-olivar é o local de emergência do nervo hipoglosso (NC XII).",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1221,740,1560,804],
                title: "Oliva",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A oliva está localizada na porção lateral da medula oblonga, entre os sulcos pré e pós-olivar. Ela é constituída pelo núcleo olivar inferior.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [103,860,540,938],
                title: "Fissura Mediana Anterior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A fissura mediana anterior está localizada no bulbo, é contínua com a fissura de mesmo nome na medula espinhal. Ela termina superiormente no forame cego, dividindo o bulbo em duas metades. Sua porção inferior é interrompida pela decussação das pirâmides.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [263,627,542,695],
                title: "Recesso Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O recesso lateral é o encontro da ponte, do bulbo e do cerebelo.",
                reference: "Freitas, L. S. Estudo anatômico do tronco encefálico por imagens de ressonância magnética de 3 Teslas e correlação com cortes histológicos 2016. 124 páginas. Dissertação (Mestrado). Faculdade de Medicina de Ribeirão Preto, Universidade de São Paulo, Ribeirão Preto, 2016."
            },
            {
                shape: "rect",
                coords: [248,497,527,565],
                title: "Fibras Pontinas",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  As fibras pontinas estão localizadas, na ponte, lateralmente ao sulco basilar. Elas são formadas por feixes dos núcleos pontinos.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [260,377,539,445],
                title: "Sulco Basilar",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco basilar é uma estrutura localizada na linha mediana anterior da ponte e aloja a artéria basilar.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [65,192,546,272],
                title: "Sulco Pontinomesencefálico",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco pontinomesencefálico delimita superiormente a ponte e inferiormente o mesencéfalo.",
                reference: "Moraes KR, Holanda VM, Cavalheiro S. Relação Anatômica Entre a Arquitetura Interna e as Zonas de Segurança Externas do Tronco Encefálico. J Bras Neurocirur 31(4): 293-304, 2020."
            },
        ],
    },
    {
        name: "tronco-encefalico06",
        areas: [
            {
                shape: "rect",
                coords: [1404,441,1867,512],
                title: "Emergência Trigeminal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A emergência trigeminal delimita, bilateralmente, a transição entre a ponte e o pedúnculo cerebelar médio. Local de onde emerge o nervo trigêmeo (NC V).",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016."
            },
            {
                shape: "rect",
                coords: [1436,557,1899,628],
                title: "Pedúnculo Cerebelar Médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O pedúnculo cerebelar médio se funde bilateralmente à ponte e serve para a passagem de fibras pontinas dos núcleos pontinos para o cerebelo. Além disso, delimita a porção lateral do assoalho do IV ventrículo.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016."
            },
            {
                shape: "rect",
                coords: [1385,641,1848,712],
                title: "Pedúnculo Cerebelar Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O pedúnculo cerebelar inferior delimita inferiormente o assoalho do IV ventrículo e é formado pelas fibras do trato espinocerebelar posterior (ligadas à funções proprioceptivas inconscientes).",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016."
            },
            {
                shape: "rect",
                coords: [1442,787,1765,868],
                title: "Sulco Pré-Olivar",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco pré-olivar é o local de emergência do nervo hipoglosso (NC XII).",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1435,952,1631,1029],
                title: "Oliva",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A oliva está localizada na porção lateral da medula oblonga, entre os sulcos pré e pós-olivar. Ela é constituída pelo núcleo olivar inferior.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            }
        ],
    },
    {
        name: "tronco-encefalico07",
        areas: [
            {
                shape: "rect",
                coords: [382,69,741,137],
                title: "Substância Negra",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A substância negra estende-se da porção superior da ponte inferiormente à região subtalâmica superiormente. É composta por duas partes: uma parte reticular anterior contendo compostos de ferro e outra compacta posterior, produtora de dopamina.",
                reference: "Freitas, L. S. Estudo anatômico do tronco encefálico por imagens de ressonância magnética de 3 Teslas e correlação com cortes histológicos 2016. 124 páginas. Dissertação (Mestrado). Faculdade de Medicina de Ribeirão Preto, Universidade de São Paulo, Ribeirão Preto, 2016. | Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [756,15,1115,83],
                title: "Fossa Interpeduncular",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A fossa interpeduncular está entre os pedúnculos cerebrais, possui forma triangular. Abriga a substância perfurada posterior e é o local de emergência do nervo oculomotor (NC III).",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1032,796,1391,864],
                title: "Teto do Mesencéfalo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O teto do mesencéfalo corresponde ao mesencéfalo dorsal e possui quatro elevações, chamadas conjuntamente de corpos quadrigêmeos, ou seja, os colículos.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [613,839,972,907],
                title: "Aqueduto Cerebral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O aqueduto cerebral comunica o terceiro e o quarto ventrículos cerebrais.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [128,737,696,809],
                title: "Substância Cinzenta Periaquedutal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A substância cinzenta periaquedutal circunda o mesencéfalo, está relacionada à analgesia endógena e aos mecanismos fisiológicos e comportamentais envolvidos nas respostas de defesa.",
                reference: "MORAES, Gean Carlos Alves. Via descendente rostroventromedial bulbar que medeia as respostas cardiovasculares evocadas pela coluna dorsolateral da substância cinzenta periaquedutal. 2020. 102 f. Dissertação (Mestrado em Ciências Biológicas) – Universidade Federal de Goiás, Instituto de Ciências Biológicas, Goiânia, 2020. Disponível em: http://repositorio.bc.ufg.br/tede/handle/tede/10598. | Freitas, L. S. Estudo anatômico do tronco encefálico por imagens de ressonância magnética de 3 Teslas e correlação com cortes histológicos 2016. 124 páginas. Dissertação (Mestrado). Faculdade de Medicina de Ribeirão Preto, Universidade de São Paulo, Ribeirão Preto, 2016."
            }
        ],
    },
    {
        name: "tronco-encefalico08",
        areas: [
            {
                shape: "rect",
                coords: [1394,596,1743,664],
                title: "Sulco Mediano",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco mediano divide o assoalho do IV ventrículo medianamente. Lateral a ele está a eminência medial.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016."
            },
            {
                shape: "rect",
                coords: [1386,680,1735,748],
                title: "Área Postrema",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A área postrema está localizada no assoalho do IV ventrículo entre o tubérculo grácil e o trígono vagal. É um órgão circunventricular com funções de ativar náusea e vômito em função de estímulos viscerais.",
                reference: "Moraes KR, Holanda VM, Cavalheiro S. Relação Anatômica Entre a Arquitetura Interna e as Zonas de Segurança Externas do Tronco Encefálico. J Bras Neurocirur 31(4): 293-304, 2020. | ZHANG, L. et al. Area Postrema Cell Types that Mediate Nausea-Associated Behaviors. Neuron, v. 109, p. 461–472, 2021. Disponível em: https://doi.org/10.1016/j.neuron.2020.11.010."
            },
            {
                shape: "rect",
                coords: [1369,757,1718,825],
                title: "Óbex",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O óbex é um ponto anatômico alinhado ao forame magno na superfície posterior do bulbo.",
                reference: "Moraes KR, Holanda VM, Cavalheiro S. Relação Anatômica Entre a Arquitetura Interna e as Zonas de Segurança Externas do Tronco Encefálico. J Bras Neurocirur 31(4): 293-304, 2020."
            },            
            {
                shape: "rect",
                coords: [1386,961,1881,1032],
                title: "Sulco Mediano Posterior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco mediano posterior é contínuo com o sulco de mesmo nome na medula espinhal. No bulbo, ele existe apenas na porção fechada.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [155,748,650,819],
                title: "Tubérculo Cuneiforme",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O tubérculo cuneiforme está localizado na porção posterior do bulbo e aloja o núcleo cuneiforme, ao qual o fascículo cuneiforme, formado na medula espinhal, termina formando sinapse.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [145,547,640,618],
                title: "Trígono Hipoglossal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O trígono hipoglossal está localizado na porção inferior do assoalho do IV ventrículo e aloja o núcleo do nervo hipoglosso (NC XII).",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1318,845,1813,916],
                title: "Tubérculo Grácil",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O tubérculo grácil está localizado na porção posterior do bulbo, é constituído pelo núcleo grácil, onde o fascículo grácil que ascende desde a medula espinhal termina fazendo sinapse.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016."
            },
            {
                shape: "rect",
                coords: [200,977,695,1048],
                title: "Fascículo Grácil",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O fascículo grácil é composto por neurônios sensitivos de segunda ordem que ascendem através da medula espinhal e fazem sinapse no núcleo grácil no bulbo. Leva informações da parte inferior do corpo.",
                reference: "ROCHA, Daniela Catarina Ferreira da. Abordagem ao Doente com Perturbação do Equilíbrio: Algoritmo de Diagnóstico. 2021. 110 f. Dissertação (Mestrado Integrado em Medicina) – Universidade da Beira Interior, Faculdade de Ciências da Saúde, Covilhã, 2021. Disponível em: http://hdl.handle.net/10400.6/11355."
            },
            {
                shape: "rect",
                coords: [99,893,594,964],
                title: "Sulco Intermédio Posterior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco intermédio posterior está localizado entre os sulcos lateral posterior e o mediano posterior, separa o fascículo grácil do cuneiforme.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016."
            },
            {
                shape: "rect",
                coords: [124,819,619,890],
                title: "Fascículo Cuneiforme",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O fascículo cuneiforme é composto por neurônios sensitivos de segunda ordem que ascendem através da medula espinhal e fazem sinapse no núcleo cuneiforme no bulbo. Leva informações da parte superior do corpo.",
                reference: "ROCHA, Daniela Catarina Ferreira da. Abordagem ao Doente com Perturbação do Equilíbrio: Algoritmo de Diagnóstico. 2021. 110 f. Dissertação (Mestrado Integrado em Medicina) – Universidade da Beira Interior, Faculdade de Ciências da Saúde, Covilhã, 2021. Disponível em: http://hdl.handle.net/10400.6/11355."
            },
            {
                shape: "rect",
                coords: [134,666,629,737],
                title: "Trígono Vagal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O trígono vagal está localizado na porção inferior do assoalho do IV ventrículo, aloja o núcleo dorsal do nervo vago (NC X).",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016."
            }
        ],
    },
    {
        name: "tronco-encefalico09",
        areas: [
            {
                shape: "rect",
                coords: [988,94,1335,159],
                title: "Eminência Medial",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A eminência medial está localizada entre o sulco mediano e o limitante. Está rostralmente ao colículo facial.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016."
            },
            {
                shape: "rect",
                coords: [1319,175,1666,240],
                title: "Sulco Limitante",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco limitante delimita bilateralmente as eminências mediais no assoalho do IV ventrículo.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016."
            },
            {
                shape: "rect",
                coords: [1396,592,1743,657],
                title: "Colículo Facial",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O colículo facial é uma elevação inferior à eminência medial, formada por fibras do nervo facial (NC VII) que contornam posteriormente o núcleo do nervo abducente (NC VI).",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016."
            }
        ],
    },
    {
        name: "tronco-encefalico10",
        areas: [
            {
                shape: "rect",
                coords: [849,12,1190,71],
                title: "Colículo Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O colículo superior é uma estrutura bilateral, em parte coberta pela glândula pineal, associada à via visual. O braço superior associado se comunica com o corpo geniculado lateral ou diretamente com fibras do trato óptico.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1418,196,1759,255],
                title: "Sulco Cruciforme",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O sulco cruciforme separa os corpos quadrigêmeos em colículos superiores e inferiores. Sua porção longitudinal ascende e forma uma depressão que abriga a glândula pineal. De sua porção inferior emergem os nervos trocleares (NC IV).",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1433,333,1774,392],
                title: "Colículo Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O colículo inferior é uma estrutura bilateral, localizada inferiormente à linha horizontal do cruciforme, associada à via auditiva. O braço inferior associado se comunica com o corpo geniculado medial.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1402,617,1899,708],
                title: "Pedúnculo Cerebelar Médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O pedúnculo cerebelar médio se funde bilateralmente à ponte e serve para a passagem de fibras pontinas dos núcleos pontinos para o cerebelo. Além disso, delimita a porção lateral do assoalho do IV ventrículo.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1,494,498,585],
                title: "Pedúnculo Cerebelar Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O pedúnculo cerebelar superior delimita superiormente o assoalho do IV ventrículo e transporta fibras do trato espinocerebelar anterior, além de fibras eferentes do núcleo denteado para o núcleo rubro oposto.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1,394,498,485],
                title: "Véu Medular Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O véu medular superior une superiormente os pedúnculos cerebelares superiores, fechando assim a porção superior do IV ventrículo.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016"
            },
            {
                shape: "rect",
                coords: [1448,469,1819,535],
                title: "Locus Ceruleus",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O locus ceruleus, de cor cinza azulada devido à presença de células nervosas pigmentadas por ferro, é um importante sistema eferente liberador de noradrenalina no sistema nervoso central. Está envolvido nas respostas rápidas ao medo e ao estresse.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016. | Milicic, M.; Gaszner, B.; Berta, G.; Pintér, E.; Kormos, V. The Lack of TRPA1 Ion Channel Does Not Affect the Chronic Stress-Induced Activation of the Locus Ceruleus. Int. J. Mol. Sci. 2024, 25, 1765. https://doi.org/10.3390/ijms25031765."
            }
        ],
    },
];

  export default TE