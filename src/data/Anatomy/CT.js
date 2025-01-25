
const Cer = [
    // esse primeiro objeto é para condicional que impede as areas
    // de serem mostradas quando não é a terceira imagem.
    {
        name: "null",
        areas: [

        ],
    },
    {
        name: "cortes-transversais01",
        areas: [
            {
                shape: "rect", 
                coords: [3035,1224,3479,1368], 
                title: "Oliva", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Localizada na porção lateral da medula oblonga entre os sulcos pré e pós olivar. É constituída pelo núcleo olivar inferior.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016. |"
            },
            {
                shape: "rect", 
                coords: [2915,762,3359,906], 
                title: "Pirâmide", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Localiza-se entre a fissura mediana anterior e o sulco pré-olivar. É formada por fibras corticoespinhais (função motora voluntária).",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016. |"
            },
            {
                shape: "rect", 
                coords: [3135,1737,3579,1881], 
                title: "Tonsila", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A Tonsila regula o equilíbrio e a coordenação, localizada na parte inferior do cerebelo, essencial para a integração sensório-motora.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247. |"
            },
            {
                shape: "rect", 
                coords: [2906,2332,3350,2476], 
                title: "Úvula", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A Úvula está envolvida na coordenação e regulação dos movimentos, essencial para o equilíbrio e integração motora no cerebelo.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247. |"
            },
            {
                shape: "rect", 
                coords: [66,1486,834,1641], 
                title: "Artérias Vertebrais", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria vertebral é um vaso sanguíneo que se origina da artéria subclávia e ascende pelo pescoço, fornecendo sangue à medula espinhal e ao cérebro.",
                reference: "Bonasia S, Di Caterino F, Robert T. Embryology of the vertebral artery and variants of the adult. Neurochirurgie. 2024 May;70(3):101517. doi: 10.1016/j.neuchi.2023.101517. Epub 2024 Jan 29. PMID: 38277860 |"
            }
        ],
    },
    {
        name: "cortes-transversais02",
        areas: [
            {
                shape: "rect", 
                coords: [1441,416,1897,492], 
                title: "Artéria Carótida Interna", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O segmento cervical da artéria carótida interna inicia ao nível da bifurcação da artéria carótida comum e termina ao nível do forame carotídeo. Essa bifurcação normalmente ocorre ao nível de C3/C4, posteriormente ao bordo superior da cartilagem tireoide. Após a bifurcação da ACC, a ACI tem curso ascendente dentro da bainha carotídea, posteromedial à veia jugular interna e ao nervo vago, até o canal carotídeo no osso temporal.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247. |"
            },
            {
                shape: "rect", 
                coords: [1488,587,1850,656], 
                title: "Artéria Basilar", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria basilar é um importante vaso sanguíneo formado pela união das duas artérias vertebrais, localizada na face anterior do tronco encefálico. Ela percorre a superfície ventral da ponte e é responsável pela irrigação de estruturas críticas, como o tronco encefálico, cerebelo e parte do cérebro. Divide-se em suas terminações principais, as artérias cerebrais posteriores, que irrigam o lobo occipital e parte do temporal. Compõe um elo essencial no polígono de Willis.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247. |"
            },
            {
                shape: "rect", 
                coords: [1465,784,1899,861], 
                title: "Artéria Cerebelar Superior", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria cerebelar superior é um ramo da artéria basilar que emerge próximo à sua bifurcação terminal. Ela irriga a porção superior do cerebelo, parte do mesencéfalo, o véu medular superior e o núcleo dentado. Essa artéria também participa da vascularização do quarto ventrículo. Lesões ou obstruções nesse vaso podem causar ataxia, vertigem e alterações visuais, devido à sua importância no suprimento sanguíneo dessas regiões.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247. |"
            },
            {
                shape: "rect", 
                coords: [1332,1091,1897,1174], 
                title: "Substância Cinzenta Periaquedutal", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A substância cinzenta periaquedutal circunda o mesencéfalo, está relacionada à analgesia endógena e aos mecanismos fisiológicos e comportamentais relacionados às respostas de defesa.",
                reference: "MORAES, Gean Carlos Alves. Via descendente rostroventromedial bulbar que medeia as respostas cardiovasculares evocadas pela coluna dorsolateral da substância cinzenta periaquedutal. 2020. 102 f. Dissertação (Mestrado em Ciências Biológicas) – Universidade Federal de Goiás, Instituto de Ciências Biológicas, Goiânia, 2020. Disponível em: http://repositorio.bc.ufg.br/tede/handle/tede/10598. | Freitas, L. S. Estudo anatômico do tronco encefálico por imagens de ressonância magnética de 3 Teslas e correlação com cortes histológicos 2016. 124 páginas. Dissertação (Mestrado). Faculdade de Medicina de Ribeirão Preto, Universidade de São Paulo, Ribeirão Preto, 2016. |"
            },
            {
                shape: "rect", 
                coords: [1186,1342,1523,1415], 
                title: "Aqueduto Cerebral", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Aqueduto Cerebral é um canal que comunica o terceiro e o quarto ventrículo cerebral.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https://doi.org/10.1016/j.wneu.2019.11.016. |"
            },
            {
                shape: "rect", 
                coords: [771,1377,1108,1450], 
                title: "Seio Sagital Inferior", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Seio Sagital Inferior segue inferiormente a foice do cérebro, conecta com a veia de galeno e forma o seio reto.",
                reference: "Czarniak N, Kamińska J, Matowicka-Karna J, Koper-Lenkiewicz OM. Cerebrospinal Fluid-Basic Concepts Review. Biomedicines. 2023 May 17;11(5):1461. doi: 10.3390/biomedicines11051461. PMID: 37239132; PMCID: PMC10216641. |"
            },
            {
                shape: "rect", 
                coords: [0,926,489,1005], 
                title: "Fascículo Longitudinal Superior", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Sendo caracterizado como uma fibra de associação, o fascículo longitudinal superior é um trato de fibras de associação bidirecional, conectando as partes anterior (frontal, opercular) às posteriores (temporal, parietal, occipital) de cada hemisfério, ligando também as áreas expressivas às receptivas da linguagem.",
                reference: "GENEVIÈVE NOLZE-CHARRON et al. Tractography of the external capsule and cognition: A diffusion MRI study of cholinergic fibers. Experimental gerontology, v. 130, p. 110792–110792, 1 fev. 2020. |"
            },
            {
                shape: "rect", 
                coords: [86,696,380,780], 
                title: "Hipocampo", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O hipocampo é dividido em três partes: cabeça, corpo e cauda. A cabeça do hipocampo, a parte anterior e maior, está direcionada anterior e medialmente, e forma a parte superior do segmento posterior uncal. O corpo do hipocampo se estende para trás ao longo da parte medial do assoalho do corno temporal, estreitando-se na cauda, que desaparece como uma estrutura ventricular. Sua função é dividida, apresentando participações no controle cognitivo do estresse, emoção e afeto, mas também se relaciona com o processamento de informações e na formação e recuperação de memória.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | FANSELOW, M. S.; DONG, H.-W. Are the Dorsal and Ventral Hippocampus Functionally Distinct Structures? Neuron, v. 65, n. 1, p. 7–19, jan. 2010. | SHI, H.-J. et al. Hippocampus: Molecular, Cellular, and Circuit Features in Anxiety. Neuroscience Bulletin, 21 jan. 2023. |"
            },
            {
                shape: "rect", 
                coords: [66,488,405,576], 
                title: "Corpo Amigdalóide", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A amígdala é formada por vários núcleos e campos corticais localizados bilateralmente na parte anteromedial dos lobos temporais do cérebro se conectando de maneira extensas e recíprocas com uma variedade de regiões corticais e subcorticais, sendo envolvida em uma ampla diversidade de processos comportamentais, como aprendizagem associativa, como o condicionamento do medo. Superiormente, a amígdala se funde com o claustro e o globo pálido sem nenhuma demarcação clara. A porção superior posterior da amígdala inclina-se para trás acima da cabeça do hipocampo e do recesso uncal para formar a porção anterior do teto do corno temporal. Medialmente, está relacionada aos segmentos anterior e posterior do uncus. A amígdala dá origem à estria terminal, que percorre entre o tálamo e o núcleo caudado, profundamente à veia talamoestriada.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | ŠIMIĆ, G. et al. Understanding Emotions: Origins and Roles of the Amygdala. Biomolecules, v. 11, n. 6, p. 823, 2021. |"
            },
            {
                shape: "rect", 
                coords: [378,265,562,339], 
                title: "Uncus", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Uncus é a parte anterior do giro parahipocampal que projeta medialmente. Quando visto de cima ou de baixo, tem uma forma angular com segmentos anterior e posterior que se encontram em um ápice direcionado medialmente. Imediatamente inferior ao Uncus encontra-se o complexo amigdalóide.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | GUSTAVO RASSIER ISOLAN et al. Vascularization of the uncus – Anatomical study and clinical implications. Surgical Neurology International, v. 12, p. 393–393, 9 ago. 2021. |"
            }
        ],
    },
    {
        name: "cortes-transversais03",
        areas: [
            {
                shape: "rect", 
                coords: [996,116,1391,178], 
                title: "Artéria Pericalosa", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria pericalosa é um ramo da artéria cerebral anterior, desempenha um papel importante no fornecimento de oxigênio e nutrientes para as regiões cerebrais relacionadas a funções motoras, sensoriais e cognitivas.",
                reference: "Vasciaveo, L., Rizzo, G., Khalil, A., Alameddine, S., Di Girolamo, R., Candia, M., De Lucia, G., Mappa, I., Liberati, M., Nappi, L., & D'Antonio, F. (2022). Assessment of the pericallosal artery between 11 and 14 weeks of gestation: A cohort study and meta-analysis. Journal of Clinical Ultrasound, 50(7), 984-988. https://doi.org/10.1002/jcu.23191. Epub March 22, 2022. |"
            },
            {
                shape: "rect", 
                coords: [1162,193,1642,262], 
                title: "Cabeça do Núcleo Caudado", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O núcleo caudado é uma estrutura subcortical em forma de 'C' localizada nos hemisférios cerebrais e faz parte dos gânglios da base. Ele desempenha um papel crucial no controle motor, aprendizado, memória e regulação emocional. Suas principais divisões são a cabeça, o corpo e a cauda, cada uma conectada a diferentes áreas cerebrais para integrar informações motoras e cognitivas. Alterações no núcleo caudado estão associadas a doenças como Parkinson, Huntington e transtornos psiquiátricos.",
                reference: "Driscoll ME, Bollu PC, Tadi P. Neuroanatomy, Nucleus Caudate. [Updated 2023 Jul 24]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2025 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK557407/. |"
            },
            {
                shape: "rect", 
                coords: [1335,285,1730,352], 
                title: "Núcleo Accumbens", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nucleus accumbens é um sítio primário que orquestra os processos de recompensa e aversão, pois possui neurônios GABAérgicos que participam do circuito dopaminérgico mesolímbico.",
                reference: "TSAI, S.-F. et al. High-fat diet induces depression-like phenotype via astrocyte-mediated hyperactivation of ventral hippocampal glutamatergic afferents to the nucleus accumbens. Molecular Psychiatry, 30 set. 2022. | ZHU, Y. et al. Opioid-induced fragile-like regulatory T cells contribute to withdrawal. Cell, v. 186, n. 3, p. 591-606.e23, fev. 2023. |"
            },
            {
                shape: "rect", 
                coords: [1404,395,1799,462], 
                title: "Núcleo Lentiforme", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O núcleo lentiforme é formado pelo Globo Pálido e Putâmen, sendo uma importante estrutura subcortical do cérebro, situada nos hemisférios cerebrais, dentro dos gânglios da base. Ele desempenha um papel crucial no controle motor, aprendizado de hábitos, regulação do movimento, e em processos emocionais e cognitivos.",
                reference: "ARBER, S.; COSTA, R. M. Networking brainstem and basal ganglia circuits for movement. Nature Reviews Neuroscience, 14 abr. 2022. | HJORTH, J. J. J. et al. The microcircuits of striatum in silico. Proceedings of the National Academy of Sciences, v. 117, n. 17, p. 9554–9565, 22 abr. 2020. |"
            },
            {
                shape: "rect", 
                coords: [1446,483,1841,550], 
                title: "Cápsula Externa", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Localizada medialmente ao claustro e lateralmente ao putâmen, é uma estrutura formada por feixes de fibras brancas oriundas do fascículo uncinado, fascículo fronto-occipital inferior e claustro corticais.",
                reference: "RIBAS, E. C. et al. Microsurgical anatomy of the central core of the brain. Journal of Neurosurgery, v. 129, n. 3, p. 752–769, set. 2018. |"
            },
            {
                shape: "rect", 
                coords: [1454,595,1849,662], 
                title: "Claustrum", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  É uma fina camada de substância cinzenta localizada no cérebro anterior, que se estende de anterior para posterior ao longo do estriado e situado medialmente ao córtex insular e lateralmente ao putâmen. Está entre as cápsulas externa e extrema, causando um certo destaque por ser substância cinzenta entre duas substâncias brancas. Estudos recentes sugerem que o Claustro atua nas informações límbicas e sensoriais para determinar a saliência de diferentes estímulos e guiar a atenção.",
                reference: "SMITH, J. B.; LEE, A. K.; JACKSON, J. The claustrum. Current Biology, v. 30, n. 23, p. R1401–R1406, dez. 2020. |"
            },
            {
                shape: "rect", 
                coords: [1486,674,1881,741], 
                title: "Cápsula extrema", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A cápsula extrema está diretamente abaixo da superfície insular e é composta de fibras de associação curtas que se estendem em direção a todos os opérculos. A cápsula extrema é a cápsula mais externa e superficial, situada entre a superfície insular e o claustro. Ela é formada principalmente por fibras de associação curtas localizadas logo abaixo do córtex insular, conectando os giros insulares. Essas fibras se estendem sob os sulcos limitantes da ínsula até os opérculos, conectando os córtices insular e opercular.",
                reference: "RIBAS, E. C. et al. Microsurgical anatomy of the central core of the brain. Journal of Neurosurgery, v. 129, n. 3, p. 752–769, set. 2018. |"
            },
            {
                shape: "rect", 
                coords: [1439,799,1834,866], 
                title: "Tálamo", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O tálamo é uma estrutura pareada localizada no diencéfalo, constituindo uma importante estação de retransmissão de informações sensoriais e motoras. Ele filtra e direciona estímulos do corpo ao córtex cerebral, além de desempenhar funções em processos como consciência, sono e regulação emocional. Dividido em núcleos específicos e inespecíficos, conecta-se com diversas áreas cerebrais para integrar informações. É suprido principalmente pelas artérias da circulação posterior, como a artéria cerebral posterior.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247. |"
            },
            {
                shape: "rect", 
                coords: [1407,1046,1899,1121], 
                title: "Fascículo Longitudinal Inferior", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Sendo caracterizado como uma fibra de associação, o fascículo longitudinal inferior passa adjacente ao fascículo uncinado e interconecta os lobos frontal, occipital e temporal. É responsável por conectar o lobo temporal ao lobo occipital de forma bidirecional.",
                reference: "PALACIOS, E.; CLAVIJO-PRADO, C. Fascículo longitudinal inferior: una nueva mirada del lenguaje. Repertorio de Medicina y Cirugía, v. 25, n. 4, p. 232–234, 1 out. 2016. | ZEMMOURA, Ilyess, et al. “The Inferior Longitudinal Fasciculus: Anatomy, Function and Surgical Considerations.” Journal of Neurosurgical Sciences, vol. 65, no. 6, Feb. 2022, https://doi.org/10.23736/s0390-5616.21.05391-1. |"
            },
            {
                shape: "rect", 
                coords: [1286,1225,1725,1302], 
                title: "Seio Sagital Inferior", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Seio Sagital Inferior segue inferiormente a foice do cérebro, conecta com a veia de galeno e forma o seio reto.",
                reference: "Czarniak N, Kamińska J, Matowicka-Karna J, Koper-Lenkiewicz OM. Cerebrospinal Fluid-Basic Concepts Review. Biomedicines. 2023 May 17;11(5):1461. doi: 10.3390/biomedicines11051461. PMID: 37239132; PMCID: PMC10216641. |"
            },
            {
                shape: "rect", 
                coords: [737,1300,1176,1377], 
                title: "Seio Sagital Superior", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Seio Sagital Superior origina-se na intersecção dos ossos frontal e etmóide, segue o corte sagital mediano superiormente a foice do cérebro. É formado pelo plexo sagital, ou plexo venoso anterior e segue para a confluência dos seios.",
                reference: "Patchana T, Zampella B, Berry JA, Lawandy S, Sweiss RB. Superior Sagittal Sinus: A Review of the History, Surgical Considerations, and Pathology. Cureus. 2019 May 3;11(5):e4597. doi: 10.7759/cureus.4597. PMID: 31309022; PMCID: PMC6609282. |"
            },
            {
                shape: "rect", 
                coords: [328,1252,695,1333], 
                title: "Foice do Cérebro", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A Foice do Cérebro é uma camada meníngea da dura-máter que reflete e compartimenta o cérebro em dois hemisférios cerebrais.",
                reference: "Bordoni B, Simonelli M, Lagana MM. Tentorium Cerebelli: Muscles, Ligaments, and Dura Mater, Part 1. Cureus. 2019 Sep 9;11(9):e5601. doi: 10.7759/cureus.5601. PMID: 31700714; PMCID: PMC6822548. |"
            },
            {
                shape: "rect", 
                coords: [36,763,403,844], 
                title: "Lobo Temporal", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O lobo temporal é uma das principais regiões do cérebro, localizado nas laterais dos hemisférios cerebrais, abaixo do sulco lateral (ou fissura de Sylvius). Ele é parte do córtex cerebral e desempenha um papel essencial em várias funções neurológicas e cognitivas, especialmente aquelas relacionadas à percepção sensorial, memória e linguagem.",
                reference: "Almeida LCA, Lobato VA, Santos MCV, Moraes AC, Costa BS. Surgical treatment of temporal lobe epilepsy: comparative results of selective amygdalohippocampectomy versus anterior temporal lobectomy from a referral center in Brazil. Arq Neuropsiquiatr. 2023;81(7):647–655. DOI: https://doi.org/10.1055/s-0043-1771172. |"
            },
            {
                shape: "rect", 
                coords: [22,974,436,1055], 
                title: "Esplênio do Corpo Caloso", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  É a parte posterior do corpo caloso e está situada profundamente ao giro supramarginal e ao terço inferior dos giros pré-central e pós-central, sua extremidade posterior grossa e arredondada, está situada dorsalmente ao corpo pineal e à parte superior da parede medial do átrio. É suprido por ramos da artéria cerebral posterior.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | MORADI, B. et al. Fetal corpus callosum abnormalities: Ultrasound and magnetic resonance imaging role. Journal of Clinical Ultrasound, v. 50, n. 7, p. 989–1003, 30 abr. 2022. |"
            },
            {
                shape: "rect", 
                coords: [37,404,467,498], 
                title: "Joelho do Corpo Caloso", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O joelho do corpo caloso é a parte anterior do corpo caloso e se funde abaixo com o rosto, formando uma porção fina e afilada, em formato de bico de pássaro, que forma o assoalho do corno frontal. Ele é contínuo para baixo, em frente à comissura anterior, com a lâmina terminal. O joelho dá origem a um grande feixe de fibras, o fórceps menor, que forma a parede anterior do corno frontal e interconecta os lobos frontais. É suprido por ramos da artéria cerebral anterior.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | MORADI, B. et al. Fetal corpus callosum abnormalities: Ultrasound and magnetic resonance imaging role. Journal of Clinical Ultrasound, v. 50, n. 7, p. 989–1003, 30 abr. 2022."
            },
            {
                shape: "rect", 
                coords: [25,641,392,721], 
                title: "Cápsula Interna", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A cápsula interna é uma faixa espessa de substância branca localizada entre o núcleo caudado, o tálamo e o núcleo lentiforme. Ela contém importantes fibras ascendentes e descendentes, conectando o córtex cerebral ao tronco encefálico e à medula espinhal. Divide-se em três partes: braço anterior, joelho e braço posterior, cada uma transmitindo sinais motores, sensitivos e associativos. Sua integridade é crucial para funções como movimento e percepção, e lesões nessa região podem causar déficits motores e sensoriais significativos.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247. |"
            }
        ],
    },
    {
        name: "cortes-transversais04",
        areas: [
            {
                shape: "rect", 
                coords: [1119,161,1565,235], 
                title: "Artéria Carótida Interna", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O segmento cervical da artéria carótida interna inicia ao nível da bifurcação da artéria carótida comum e termina ao nível do forame carotídeo. Essa bifurcação normalmente ocorre ao nível de C3/C4, posteriormente ao bordo superior da cartilagem tireoide. Após a bifurcação da ACC, a ACI tem curso ascendente dentro da bainha carotídea, posteromedial à veia jugular interna e ao nervo vago, até o canal carotídeo no osso temporal.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247. |"
            },
            {
                shape: "rect", 
                coords: [1343,270,1789,344], 
                title: "Artéria Basilar", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria basilar é um importante vaso sanguíneo formado pela união das duas artérias vertebrais, localizada na face anterior do tronco encefálico. Ela percorre a superfície ventral da ponte e é responsável pela irrigação de estruturas críticas, como o tronco encefálico, cerebelo e parte do cérebro. Divide-se em suas terminações principais, as artérias cerebrais posteriores, que irrigam o lobo occipital e parte do temporal. Compõe um elo essencial no polígono de Willis.",
                reference: "Snell, R. (2010). Clinical Neuroanatomy. 7th ed. Philadelphia: Wolters Kluwer Health/Lippincott Williams & Wilkins, pp.372-375, 377-378. | Machado, A. (2006). Neuroanatomia funcional. 2a ed. São Paulo: Editora Atheneu, pp.243-247. |"
            },
            {
                shape: "rect", 
                coords: [1390,417,1836,491], 
                title: "Nervo Oculomotor", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo oculomotor controla a maioria dos movimentos do olho, incluindo a constrição da pupila e a elevação da pálpebra superior. Ele emerge do mesencéfalo e entra na órbita através da fissura orbital superior.",
                reference: "Corrêa, D. G., Hygino da Cruz, L. C., Jr, & Freddi, T. A. L. (2022). The Oculomotor Nerve: Anatomy and Pathology. Seminars in ultrasound, CT, and MR, 43(5), 389–399. https://doi.org/10.1053/j.sult.2022.04.009."
            },
            {
                shape: "rect", 
                coords: [1444,716,1890,790], 
                title: "Substância Negra Compacta", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A Substância Negra compacta estende-se da porção superior da ponte inferiormente à região subtalâmica superiormente. É composta por duas partes, uma parte reticular anterior contendo compostos de ferro e outra compacta posterior produtora de dopamina.",
                reference: "Freitas, L. S. Estudo anatômico do tronco encefálico por imagens de ressonância magnética de 3 Teslas e correlação com cortes histológicos 2016. 124 páginas. Dissertação (Mestrado). Faculdade de Medicina de Ribeirão Preto, Universidade de São Paulo, Ribeirão Preto, 2016. | Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https:// doi.org/10.1016/j.wneu.2019.11.016."
            },
            {
                shape: "rect", 
                coords: [1440,585,1886,659], 
                title: "Base do Pedúnculo Cerebral", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A Base do Pedúnculo Cerebral é uma estrutura bilateral à linha média na sustentação da base central do cérebro. Os pedúnculos convergem à junção pontomesencefálica, são posteriores ao quiasma óptico e são contornados pelo nervo troclear (NV IV). Além disso, auxilia na formação do assoalho do terceiro ventrículo e são formados por fibras corticoespinhais, corticonucleares e corticopontinas.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https:// doi.org/10.1016/j.wneu.2019.11.016."
            },
            {
                shape: "rect", 
                coords: [1453,879,1899,953], 
                title: "Núcleo Rubro", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Núcleo Rubro é uma estação sináptica de sistemas neurais relacionados aos movimentos, interconectando córtex cerebral, cerebelo e medula espinhal. Origina o trato rubroespinhal, que em humanos possui função motora reduzida, uma vez que o principal é o corticoespinhal.",
                reference: "Freitas, L. S. Estudo anatômico do tronco encefálico por imagens de ressonância magnética de 3 Teslas e correlação com cortes histológicos 2016. 124 páginas. Dissertação (Mestrado). Faculdade de Medicina de Ribeirão Preto, Universidade de São Paulo, Ribeirão Preto, 2016. | DYONÍSIO, Gabriela. Investigação dos impactos da lesão medular traumática na estrutura neuroanatômica de áreas corticais sensoriomotoras. 2019. 94 f. Dissertação (Mestrado em Engenharia Biomédica) - Universidade Federal de Uberlândia, Uberlândia, 2019. DOI http://doi.org/10.14393/ufu.di.2019.2563."
            },
            {
                shape: "rect", 
                coords: [1431,1056,1802,1126], 
                title: "Aqueduto Cerebral", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Aqueduto Cerebral é um canal que comunica o terceiro e o quarto ventrículo cerebral.",
                reference: "Shah A, Jhawar SS, Nunez M, Foundation AG, Goel A, Brainstem Anatomy: A study on the basis of pattern of Fiber organization, World Neurosurgery (2019), doi: https:// doi.org/10.1016/j.wneu.2019.11.016."
            },
            {
                shape: "rect", 
                coords: [1282,1188,1891,1258], 
                title: "Substância Cinzenta Periaquedutal", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A Substância Cinzenta Periaquedutal circunda o mesencéfalo, está relacionada à analgesia endógena e à mecanismos fisiológicos e comportamentais relacionados às respostas de defesa.",
                reference: "MORAES, Gean Carlos Alves. Via descendente rostroventromedial bulbar que medeia as respostas cardiovasculares evocadas pela coluna dorsolateral da substância cinzenta periaquedutal. 2020. 102 f. Dissertação (Mestrado em Ciências Biológicas) – Universidade Federal de Goiás, Instituto de Ciências Biológicas, Goiânia, 2020. Disponível em: http://repositorio.bc.ufg.br/tede/handle/tede/10598. | Freitas, L. S. Estudo anatômico do tronco encefálico por imagens de ressonância magnética de 3 Teslas e correlação com cortes histológicos 2016. 124 páginas. Dissertação (Mestrado). Faculdade de Medicina de Ribeirão Preto, Universidade de São Paulo, Ribeirão Preto, 2016."
            },
            {
                shape: "rect", 
                coords: [721,1322,1112,1396], 
                title: "Seio Sagital Superior", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Seio Sagital Superior origina-se na intersecção dos ossos frontal e etmóide, segue o corte sagital mediano superiormente a foice do cérebro. É formado pelo plexo sagital, ou plexo venoso anterior e segue para a confluência dos seios.",
                reference: "Patchana T, Zampella B, Berry JA, Lawandy S, Sweiss RB. Superior Sagittal Sinus: A Review of the History, Surgical Considerations, and Pathology. Cureus. 2019 May 3;11(5):e4597. doi: 10.7759/cureus.4597. PMID: 31309022; PMCID: PMC6609282. |"
            },
            {
                shape: "rect", 
                coords: [185,1237,576,1311], 
                title: "Foice do Cérebro", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A Foice do Cérebro é uma camada meníngea da dura-máter que reflete e compartimenta o cérebro em dois hemisférios cerebrais.",
                reference: "Bordoni B, Simonelli M, Lagana MM. Tentorium Cerebelli: Muscles, Ligaments, and Dura Mater, Part 1. Cureus. 2019 Sep 9;11(9):e5601. doi: 10.7759/cureus.5601. PMID: 31700714; PMCID: PMC6822548. |"
            },
            {
                shape: "rect", 
                coords: [89,1105,480,1179], 
                title: "Seio Sagital Inferior", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Seio Sagital Inferior segue inferiormente a foice do cérebro, conecta com a veia de galeno e forma o seio reto.",
                reference: "Czarniak N, Kamińska J, Matowicka-Karna J, Koper-Lenkiewicz OM. Cerebrospinal Fluid-Basic Concepts Review. Biomedicines. 2023 May 17;11(5):1461. doi: 10.3390/biomedicines11051461. PMID: 37239132; PMCID: PMC10216641. |"
            },
            {
                shape: "rect", 
                coords: [47,970,438,1044], 
                title: "Incisura Cerebelar", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A Incisura Cerebelar é uma abertura em formato de C na parte anterior do tentório do cerebelo, localizada na base do crânio.",
                reference: "Bordoni B, Simonelli M, Lagana MM. Tentorium Cerebelli: Muscles, Ligaments, and Dura Mater, Part 1. Cureus. 2019 Sep 9;11(9):e5601. doi: 10.7759/cureus.5601. PMID: 31700714; PMCID: PMC6822548."
            },
            {
                shape: "rect", 
                coords: [0,850,486,930], 
                title: "Fascículo Longitudinal Inferior", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Sendo caracterizado como uma fibra de associação, o fascículo longitudinal inferior passa adjacente ao fascículo uncinado e interconecta os lobos frontal, occipital e temporal. É responsável por conectar o lobo temporal ao lobo occipital de forma bidirecional.",
                reference: "PALACIOS, E.; CLAVIJO-PRADO, C. Fascículo longitudinal inferior: una nueva mirada del lenguaje. Repertorio de Medicina y Cirugía, v. 25, n. 4, p. 232–234, 1 out. 2016. | ZEMMOURA, Ilyess, et al. “The Inferior Longitudinal Fasciculus: Anatomy, Function and Surgical Considerations.” Journal of Neurosurgical Sciences, vol. 65, no. 6, Feb. 2022, https://doi.org/10.23736/s0390-5616.21.05391-1. |"
            },
            {
                shape: "rect", 
                coords: [107,699,414,781], 
                title: "Hipocampo", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O hipocampo é dividido em três partes: cabeça, corpo e cauda. A cabeça do hipocampo, a parte anterior e maior, está direcionada anterior e medialmente, e forma a parte superior do segmento posterior uncal. O corpo do hipocampo se estende para trás ao longo da parte medial do assoalho do corno temporal, estreitando-se na cauda, que desaparece como uma estrutura ventricular. Sua função é dividida, apresentando participações no controle cognitivo do estresse, emoção e afeto, mas também se relaciona com o processamento de informações e na formação e recuperação de memória.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | FANSELOW, M. S.; DONG, H.-W. Are the Dorsal and Ventral Hippocampus Functionally Distinct Structures? Neuron, v. 65, n. 1, p. 7–19, jan. 2010. | SHI, H.-J. et al. Hippocampus: Molecular, Cellular, and Circuit Features in Anxiety. Neuroscience Bulletin, 21 jan. 2023. |"
            },
            {
                shape: "rect", 
                coords: [62,419,447,507], 
                title: "Corpo Amigdalóide", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A amígdala é formada por vários núcleos e campos corticais localizados bilateralmente na parte anteromedial dos lobos temporais do cérebro se conectando de maneira extensas e recíprocas com uma variedade de regiões corticais e subcorticais, sendo envolvida em uma ampla diversidade de processos comportamentais, como aprendizagem associativa, como o condicionamento do medo. Superiormente, a amígdala se funde com o claustro e o globo pálido sem nenhuma demarcação clara. A porção superior posterior da amígdala inclina-se para trás acima da cabeça do hipocampo e do recesso uncal para formar a porção anterior do teto do corno temporal. Medialmente, está relacionada aos segmentos anterior e posterior do uncus. A amígdala dá origem à estria terminal, que percorre entre o tálamo e o núcleo caudado, profundamente à veia talamoestriada.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | ŠIMIĆ, G. et al. Understanding Emotions: Origins and Roles of the Amygdala. Biomolecules, v. 11, n. 6, p. 823, 2021. |"
            },
            {
                shape: "rect", 
                coords: [436,219,637,300], 
                title: "Uncus", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O Uncus é a parte anterior do giro parahipocampal que projeta medialmente. Quando visto de cima ou de baixo, tem uma forma angular com segmentos anterior e posterior que se encontram em um ápice direcionado medialmente. Imediatamente inferior ao Uncus encontra-se o complexo amigdalóide.",
                reference: "RHOTON, A. L. THE CEREBRUM. Neurosurgery, v. 61, n. suppl_1, p. SHC-37-SHC-119, 1 jul. 2007. | GUSTAVO RASSIER ISOLAN et al. Vascularization of the uncus – Anatomical study and clinical implications. Surgical Neurology International, v. 12, p. 393–393, 9 ago. 2021. |"
            }
        ],
    },
    {
        name: "teste",
        areas: [
            {
                shape: "rect", 
                coords: [406,186,696,121], 
                title: "", 
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  ",
                reference: ""
            }, 
        ],
    },
];

  export default Cer