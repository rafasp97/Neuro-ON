
const MeL = [
    // esse primeiro objeto é para condicional que impede as areas
    // de serem mostradas quando não é a terceira imagem.
    {
        name: "null",
        areas: [

        ],
    },
    {
        name: "meninges-e-liquor01",
        areas: [
            {
                shape: "rect",
                coords: [225,114,507,181],
                title: "Seio Reto",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Seio reto drena do seio sagital inferior e veia de Galeno para confluência dos seios. Seio sigmoide, localizado na fossa craniana posterior, possui formato em S e recebe dos seios transversos para veia jugular interna.",
                reference: "Iampreechakul P, Wangtanaphat K, Chuntaroj S, Khunvutthidee S, Wattanasen Y, Hangsapruek S, Lertbutsayanukul P, Siriwimonmas S. Dural arteriovenous fistula involving superior petrosal sinus with petrosal venous drainage in association with cerebral venous thrombosis: Literature review and illustrative case. World Neurosurg X. 2024 Feb 22;22:100300. doi: 10.1016/j.wnsx.2024.100300. PMID: 38435434; PMCID: PMC10904989. Ekanem UI, Olewnik Ł, Porzionato A, Macchi V, Iwanaga J, Loukas M, Dumont AS, Caro R, Tubbs RS. Morphology of the groove of the inferior petrosal sinus: application to better understanding variations and surgery of the skull base. Anat Cell Biol. 2022 Jun 30;55(2):135-141. doi: 10.5115/acb.22.023. PMID: 35773216; PMCID: PMC9256480. Czarniak N, Kamińska J, Matowicka-Karna J, Koper-Lenkiewicz OM. Cerebrospinal Fluid-Basic Concepts Review. Biomedicines. 2023 May 17;11(5):1461. doi: 10.3390/biomedicines11051461. PMID: 37239132; PMCID: PMC10216641."
            },
            {
                shape: "rect",
                coords: [285,1331,698,1425],
                title: "Foice do Cerebelo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Camada meníngea da dura mater que reflete e compartimenta o cerebelo, tendendo a se ossificar com o envelhecimento.",
                reference: "Bordoni B, Simonelli M, Lagana MM. Tentorium Cerebelli: Muscles, Ligaments, and Dura Mater, Part 1. Cureus. 2019 Sep 9;11(9):e5601. doi: 10.7759/cureus.5601. PMID: 31700714; PMCID: PMC6822548."
            },
            {
                shape: "rect",
                coords: [1044,24,1510,96],
                title: "Seio Sagital Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Originado na intersecção dos ossos frontais e etmoide, o seio sagital superior segue o corte sagital mediano, superiormente à foice do cérebro. É formado pelo plexo sagital, ou plexo venoso anterior, e segue para a confluência dos seios.",
                reference: "Patchana T, Zampella B, Berry JA, Lawandy S, Sweiss RB. Superior Sagittal Sinus: A Review of the History, Surgical Considerations, and Pathology. Cureus. 2019 May 3;11(5):e4597. doi: 10.7759/cureus.4597. PMID: 31309022; PMCID: PMC6609282."
            },
            {
                shape: "rect",
                coords: [743,1371,1078,1462],
                title: "Seio Sigmoide",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Seios bilaterais em forma de S, localizados na fossa craniana posterior. Recebem dos seios transversos para a veia jugular interna.",
                reference: "Iampreechakul P, Wangtanaphat K, Chuntaroj S, Khunvutthidee S, Wattanasen Y, Hangsapruek S, Lertbutsayanukul P, Siriwimonmas S. Dural arteriovenous fistula involving superior petrosal sinus with petrosal venous drainage in association with cerebral venous thrombosis: Literature review and illustrative case. World Neurosurg X. 2024 Feb 22;22:100300. doi: 10.1016/j.wnsx.2024.100300. PMID: 38435434; PMCID: PMC10904989. | Ekanem UI, Olewnik Ł, Porzionato A, Macchi V, Iwanaga J, Loukas M, Dumont AS, Caro R, Tubbs RS. Morphology of the groove of the inferior petrosal sinus: application to better understanding variations and surgery of the skull base. Anat Cell Biol. 2022 Jun 30;55(2):135-141. doi: 10.5115/acb.22.023. PMID: 35773216; PMCID: PMC9256480. | Czarniak N, Kamińska J, Matowicka-Karna J, Koper-Lenkiewicz OM. Cerebrospinal Fluid-Basic Concepts Review. Biomedicines. 2023 May 17;11(5):1461. doi: 10.3390/biomedicines11051461. PMID: 37239132; PMCID: PMC10216641."
            },
            {
                shape: "rect",
                coords: [443,0,845,79],
                title: "Foice do Cérebro",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Camada meníngea da dura mater que reflete e compartimenta o cérebro em dois hemisférios cerebrais.",
                reference: "Bordoni B, Simonelli M, Lagana MM. Tentorium Cerebelli: Muscles, Ligaments, and Dura Mater, Part 1. Cureus. 2019 Sep 9;11(9):e5601. doi: 10.7759/cureus.5601. PMID: 31700714; PMCID: PMC6822548."
            },
            {
                shape: "rect",
                coords: [11,1209,351,1282],
                title: "Seio Transverso",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Localizado bilateralmente na tenda do cerebelo, leva sangue venoso da confluência dos seios para os seios sigmóides direito e esquerdo.",
                reference: "Iampreechakul P, Wangtanaphat K, Chuntaroj S, Khunvutthidee S, Wattanasen Y, Hangsapruek S, Lertbutsayanukul P, Siriwimonmas S. Dural arteriovenous fistula involving superior petrosal sinus with petrosal venous drainage in association with cerebral venous thrombosis: Literature review and illustrative case. World Neurosurg X. 2024 Feb 22;22:100300. doi: 10.1016/j.wnsx.2024.100300. PMID: 38435434; PMCID: PMC10904989. | Ekanem UI, Olewnik Ł, Porzionato A, Macchi V, Iwanaga J, Loukas M, Dumont AS, Caro R, Tubbs RS. Morphology of the groove of the inferior petrosal sinus: application to better understanding variations and surgery of the skull base. Anat Cell Biol. 2022 Jun 30;55(2):135-141. doi: 10.5115/acb.22.023. PMID: 35773216; PMCID: PMC9256480. | Czarniak N, Kamińska J, Matowicka-Karna J, Koper-Lenkiewicz OM. Cerebrospinal Fluid-Basic Concepts Review. Biomedicines. 2023 May 17;11(5):1461. doi: 10.3390/biomedicines11051461. PMID: 37239132; PMCID: PMC10216641."
            },
            {
                shape: "rect",
                coords: [4,815,254,929],
                title: "Tenda do Cerebelo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Camada meníngea da dura mater que reflete e separa o cerebelo do cérebro, localizada na fossa craniana posterior. Sua margem anterior é côncava e a margem posterior é convexa.",
                reference: "Bordoni B, Simonelli M, Lagana MM. Tentorium Cerebelli: Muscles, Ligaments, and Dura Mater, Part 1. Cureus. 2019 Sep 9;11(9):e5601. doi: 10.7759/cureus.5601. PMID: 31700714; PMCID: PMC6822548."
            }
        ],
    },
    {
        name: "meninges-e-liquor02",
        areas: [
            {
                shape: "rect",
                coords: [1278,25,1694,109],
                title: "Seio Sagital Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Originado na intersecção dos ossos frontais e etmoide, segue o corte sagital mediano superiormente à foice do cérebro. É formado pelo plexo sagital, ou plexo venoso anterior, e segue para a confluência dos seios.",
                reference: "Patchana T, Zampella B, Berry JA, Lawandy S, Sweiss RB. Superior Sagittal Sinus: A Review of the History, Surgical Considerations, and Pathology. Cureus. 2019 May 3;11(5):e4597. doi: 10.7759/cureus.4597. PMID: 31309022; PMCID: PMC6609282."
            },
            {
                shape: "rect",
                coords: [1271,1216,1687,1300],
                title: "Seio Transverso",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Localizado bilateralmente na tenda do cerebelo, leva sangue venoso da confluência dos seios para os seios sigmóides direito e esquerdo.",
                reference: "Iampreechakul P, Wangtanaphat K, Chuntaroj S, Khunvutthidee S, Wattanasen Y, Hangsapruek S, Lertbutsayanukul P, Siriwimonmas S. Dural arteriovenous fistula involving superior petrosal sinus with petrosal venous drainage in association with cerebral venous thrombosis: Literature review and illustrative case. World Neurosurg X. 2024 Feb 22;22:100300. doi: 10.1016/j.wnsx.2024.100300. PMID: 38435434; PMCID: PMC10904989. | Ekanem UI, Olewnik Ł, Porzionato A, Macchi V, Iwanaga J, Loukas M, Dumont AS, Caro R, Tubbs RS. Morphology of the groove of the inferior petrosal sinus: application to better understanding variations and surgery of the skull base. Anat Cell Biol. 2022 Jun 30;55(2):135-141. doi: 10.5115/acb.22.023. PMID: 35773216; PMCID: PMC9256480. | Czarniak N, Kamińska J, Matowicka-Karna J, Koper-Lenkiewicz OM. Cerebrospinal Fluid-Basic Concepts Review. Biomedicines. 2023 May 17;11(5):1461. doi: 10.3390/biomedicines11051461. PMID: 37239132; PMCID: PMC10216641."
            },
            {
                shape: "rect",
                coords: [456,1306,818,1391],
                title: "Seio Occipital",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Localizado posteriormente à tenda do cerebelo, drena da parte occipital para a confluência dos seios.",
                reference: "Iampreechakul P, Wangtanaphat K, Chuntaroj S, Khunvutthidee S, Wattanasen Y, Hangsapruek S, Lertbutsayanukul P, Siriwimonmas S. Dural arteriovenous fistula involving superior petrosal sinus with petrosal venous drainage in association with cerebral venous thrombosis: Literature review and illustrative case. World Neurosurg X. 2024 Feb 22;22:100300. doi: 10.1016/j.wnsx.2024.100300. PMID: 38435434; PMCID: PMC10904989. | Ekanem UI, Olewnik Ł, Porzionato A, Macchi V, Iwanaga J, Loukas M, Dumont AS, Caro R, Tubbs RS. Morphology of the groove of the inferior petrosal sinus: application to better understanding variations and surgery of the skull base. Anat Cell Biol. 2022 Jun 30;55(2):135-141. doi: 10.5115/acb.22.023. PMID: 35773216; PMCID: PMC9256480. | Czarniak N, Kamińska J, Matowicka-Karna J, Koper-Lenkiewicz OM. Cerebrospinal Fluid-Basic Concepts Review. Biomedicines. 2023 May 17;11(5):1461. doi: 10.3390/biomedicines11051461. PMID: 37239132; PMCID: PMC10216641."
            },
            {
                shape: "rect",
                coords: [159,1185,587,1271],
                title: "Confluência dos Seios",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Encontro de 3 seios (seio sagital superior, reto e occipital).",
                reference: "Karakas AB, Govsa F, Ozer MA, Eraslan C. 3D Brain Imaging in Vascular Segmentation of Cerebral Venous Sinuses. J Digit Imaging. 2019 Apr;32(2):314-321. | Proulx ST. Cerebrospinal fluid outflow: a review of the historical and contemporary evidence for arachnoid villi, perineural routes, and dural lymphatics. Cell Mol Life Sci. 2021 Mar;78(6):2429-2457. doi: 10.1007/s00018-020-03706-5. Epub 2021 Jan 11. PMID: 33427948; PMCID: PMC8004496."
            }
        ],
    },
    {
        name: "meninges-e-liquor03",
        areas: [
            {
                shape: "rect",
                coords: [990,1131,1423,1219],
                title: "Artéria Meníngea Média",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Maior artéria dural humana, irrigando mais de ⅔ da dura-máter. Normalmente ramo da artéria maxilar interna, ramo da carótida externa.",
                reference: "Bonasia S, Smajda S, Ciccio G, Robert T. Middle Meningeal Artery: Anatomy and Variations. AJNR Am J Neuroradiol. 2020 Oct;41(10):1777-1785. doi: 10.3174/ajnr.A6739. Epub 2020 Sep 3. PMID: 32883667; PMCID: PMC7661066."
            },
            {
                shape: "rect",
                coords: [344,1235,667,1314],
                title: "Seio Sigmoide",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Seios bilaterais em forma de S, na fossa craniana posterior. Recebem dos seios transversos para veia jugular interna.",
                reference: "Iampreechakul P, Wangtanaphat K, Chuntaroj S, Khunvutthidee S, Wattanasen Y, Hangsapruek S, Lertbutsayanukul P, Siriwimonmas S. Dural arteriovenous fistula involving superior petrosal sinus with petrosal venous drainage in association with cerebral venous thrombosis: Literature review and illustrative case. World Neurosurg X. 2024 Feb 22;22:100300. doi: 10.1016/j.wnsx.2024.100300. PMID: 38435434; PMCID: PMC10904989. | Ekanem UI, Olewnik Ł, Porzionato A, Macchi V, Iwanaga J, Loukas M, Dumont AS, Caro R, Tubbs RS. Morphology of the groove of the inferior petrosal sinus: application to better understanding variations and surgery of the skull base. Anat Cell Biol. 2022 Jun 30;55(2):135-141. doi: 10.5115/acb.22.023. PMID: 35773216; PMCID: PMC9256480. | Czarniak N, Kamińska J, Matowicka-Karna J, Koper-Lenkiewicz OM. Cerebrospinal Fluid-Basic Concepts Review. Biomedicines. 2023 May 17;11(5):1461. doi: 10.3390/biomedicines11051461. PMID: 37239132; PMCID: PMC10216641."
            }
        ],
    },
    {
        name: "meninges-e-liquor04",
        areas: [
            {
                shape: "rect",
                coords: [403,918,746,1000],
                title: "Nervo Óptico",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Células ganglionares da retina formam o nervo óptico ao formarem um fascículo após sair da retina. Na região próxima à base do hipotálamo, axônios da retina nasal se cruzam no quiasma óptico. Já os axônios da retina temporal não se cruzam e junto aos da retina nasal, após o quiasma, são chamados de trato óptico. Esses levam as informações visuais até o córtex cerebral.",
                reference: "Herrera E, Agudo-Barriuso M, Murcia-Belmonte V. Cranial Pair II: The Optic Nerves. Anat Rec (Hoboken). 2019 Mar;302(3):428-445. doi: 10.1002/ar.23922. Epub 2018 Oct 10. PMID: 30306726."
            },
        ],
    },
    {
        name: "meninges-e-liquor05",
        areas: [
            {
                shape: "rect",
                coords: [1169,159,1565,238],
                title: "Seio Sagital Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Originado na intersecção dos ossos frontais e etmoide, segue o corte sagital mediano superiormente à foice do cérebro. É formado pelo plexo sagital, ou plexo venoso anterior e segue para a confluência dos seios.",
                reference: "Patchana T, Zampella B, Berry JA, Lawandy S, Sweiss RB. Superior Sagittal Sinus: A Review of the History, Surgical Considerations, and Pathology. Cureus. 2019 May 3;11(5):e4597. doi: 10.7759/cureus.4597. PMID: 31309022; PMCID: PMC6609282."
            }
        ],
    },
    {
        name: "meninges-e-liquor06",
        areas: [
            {
                shape: "rect",
                coords: [73,153,597,235],
                title: "Seio Intercavernoso Anterior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Região do osso esfenóide anteriormente.",
                reference: "Iampreechakul P, Wangtanaphat K, Chuntaroj S, Khunvutthidee S, Wattanasen Y, Hangsapruek S, Lertbutsayanukul P, Siriwimonmas S. Dural arteriovenous fistula involving superior petrosal sinus with petrosal venous drainage in association with cerebral venous thrombosis: Literature review and illustrative case. World Neurosurg X. 2024 Feb 22;22:100300. doi: 10.1016/j.wnsx.2024.100300. PMID: 38435434; PMCID: PMC10904989. | Ekanem UI, Olewnik Ł, Porzionato A, Macchi V, Iwanaga J, Loukas M, Dumont AS, Caro R, Tubbs RS. Morphology of the groove of the inferior petrosal sinus: application to better understanding variations and surgery of the skull base. Anat Cell Biol. 2022 Jun 30;55(2):135-141. doi: 10.5115/acb.22.023. PMID: 35773216; PMCID: PMC9256480. | Czarniak N, Kamińska J, Matowicka-Karna J, Koper-Lenkiewicz OM. Cerebrospinal Fluid-Basic Concepts Review. Biomedicines. 2023 May 17;11(5):1461. doi: 10.3390/biomedicines11051461. PMID: 37239132; PMCID: PMC10216641."
            },
            {
                shape: "rect",
                coords: [873,5,1240,80],
                title: "Foice do Cérebro",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Camada meníngea da dura mater que reflete e compartimenta o cérebro em dois hemisférios cerebrais.",
                reference: "Bordoni B, Simonelli M, Lagana MM. Tentorium Cerebelli: Muscles, Ligaments, and Dura Mater, Part 1. Cureus. 2019 Sep 9;11(9):e5601. doi: 10.7759/cureus.5601. PMID: 31700714; PMCID: PMC6822548."
            },
            {
                shape: "rect",
                coords: [1454,124,1768,199],
                title: "Nervo Óptico",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Células ganglionares da retina formam o nervo óptico ao formarem um fascículo após sair da retina. Na região próxima à base do hipotálamo, axônios da retina nasal se cruzam no quiasma óptico. Já os axônios da retina temporal não se cruzam e junto aos da retina nasal, após o quiasma, são chamados de trato óptico. Esses levam as informações visuais até o córtex cerebral.",
                reference: "Herrera E, Agudo-Barriuso M, Murcia-Belmonte V. Cranial Pair II: The Optic Nerves. Anat Rec (Hoboken). 2019 Mar;302(3):428-445. doi: 10.1002/ar.23922. Epub 2018 Oct 10. PMID: 30306726."
            },
            {
                shape: "rect",
                coords: [1449,1261,1868,1355],
                title: "Seio Petroso Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Está na margem de fixação da tenda do cerebelo, no sulco petroso superior do osso temporal, une o seio cavernoso ao seio transverso.",
                reference: "Iampreechakul P, Wangtanaphat K, Chuntaroj S, Khunvutthidee S, Wattanasen Y, Hangsapruek S, Lertbutsayanukul P, Siriwimonmas S. Dural arteriovenous fistula involving superior petrosal sinus with petrosal venous drainage in association with cerebral venous thrombosis: Literature review and illustrative case. World Neurosurg X. 2024 Feb 22;22:100300. doi: 10.1016/j.wnsx.2024.100300. PMID: 38435434; PMCID: PMC10904989. | Ekanem UI, Olewnik Ł, Porzionato A, Macchi V, Iwanaga J, Loukas M, Dumont AS, Caro R, Tubbs RS. Morphology of the groove of the inferior petrosal sinus: application to better understanding variations and surgery of the skull base. Anat Cell Biol. 2022 Jun 30;55(2):135-141. doi: 10.5115/acb.22.023. PMID: 35773216; PMCID: PMC9256480. | Czarniak N, Kamińska J, Matowicka-Karna J, Koper-Lenkiewicz OM. Cerebrospinal Fluid-Basic Concepts Review. Biomedicines. 2023 May 17;11(5):1461. doi: 10.3390/biomedicines11051461. PMID: 37239132; PMCID: PMC10216641."
            },
            {
                shape: "rect",
                coords: [1006,1307,1430,1386],
                title: "Nervos Cranianos IX, X, XI",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Nervo Craniano IX: Função sensorial, motora e parassimpática. Tem comunicação com o vago, leva informações do seio carotídeo e do terço posterior da língua. | Nervo Craniano X: Maior nervo craniano no corpo, função motora, sensitiva e parassimpática. | Nervo Craniano XI: Função na musculatura do trapézio, da laringe e do esternocleidomastóideo. Tem função sensitiva e motora.",
                reference: "Sakamoto Y. Morphological Features of the Glossopharyngeal Nerve in the Peripharyngeal Space, the Oropharynx, and the Tongue. Anat Rec (Hoboken). 2019 Apr;302(4):630-638. | Jayaprakash N, Song W, Toth V, Vardhan A, Levy T, Tomaio J, Qanud K, Mughrabi I, Chang YC, Rob M, Daytz A, Abbas A, Nassrallah Z, Volpe BT, Tracey KJ, Al-Abed Y, Datta-Chaudhuri T, Miller L, Barbe MF, Lee SC, Zanos TP, Zanos S. Organ- and function-specific anatomical organization of vagal fibers supports fascicular vagus nerve stimulation. Brain Stimul. 2023 Mar-Apr;16(2):484-506. doi: 10.1016/j.brs.2023.02.003. Epub 2023 Feb 10. PMID: 36773779; PMCID: PMC10228508. | Roberts SO, Cardozo A. A detailed review of the spinal accessory nerve and its anatomical variations with cadaveric illustration. Anat Sci Int. 2024 Jun;99(3):239-253. doi:"
            },
            {
                shape: "rect",
                coords: [275,1303,621,1389],
                title: "Seio Sigmoide",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Seios bilaterais em forma de S, na fossa craniana posterior. Recebem dos seios transversos para veia jugular interna.",
                reference: "Iampreechakul P, Wangtanaphat K, Chuntaroj S, Khunvutthidee S, Wattanasen Y, Hangsapruek S, Lertbutsayanukul P, Siriwimonmas S. Dural arteriovenous fistula involving superior petrosal sinus with petrosal venous drainage in association with cerebral venous thrombosis: Literature review and illustrative case. World Neurosurg X. 2024 Feb 22;22:100300. doi: 10.1016/j.wnsx.2024.100300. PMID: 38435434; PMCID: PMC10904989. | Ekanem UI, Olewnik Ł, Porzionato A, Macchi V, Iwanaga J, Loukas M, Dumont AS, Caro R, Tubbs RS. Morphology of the groove of the inferior petrosal sinus: application to better understanding variations and surgery of the skull base. Anat Cell Biol. 2022 Jun 30;55(2):135-141. doi: 10.5115/acb.22.023. PMID: 35773216; PMCID: PMC9256480. | Czarniak N, Kamińska J, Matowicka-Karna J, Koper-Lenkiewicz OM. Cerebrospinal Fluid-Basic Concepts Review. Biomedicines. 2023 May 17;11(5):1461. doi: 10.3390/biomedicines11051461. PMID: 37239132; PMCID: PMC10216641."
            },
            {
                shape: "rect",
                coords: [1468,246,1857,325],
                title: "Seio Esfenoparietal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O seio esfenoparietal é um pequeno vaso venoso localizado na base do crânio, ao longo da fissura esfenoparietal, que separa o osso esfenoide do osso parietal. Ele é responsável por drenar sangue das veias da cavidade temporal e da fossa infratemporal para os seios venosos maiores, como o seio cavernoso. O seio esfenoparietal desempenha um papel importante na drenagem venosa da região lateral do cérebro e da base do crânio.",
                reference: "Karatsu, K., Kikuchi, R., Kanazawa, T., Nakamura, U., & Miyazaki, H. (2021). Sphenoparietal sinus and superficial middle cerebral vein thrombosis: A case report and literature review. Neurosurgery, 68(4), 432-436. https://doi.org/10.1016/j.neuchi.2021.09.002. Epub September 16, 2021."
            }

        ],
    },
    {
        name: "meninges-e-liquor07",
        areas: [
            {
                shape: "rect",
                coords: [137,397,508,480],
                title: "Seio Esfenoparietal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O seio esfenoparietal é um pequeno vaso venoso localizado na base do crânio, ao longo da fissura esfenoparietal, que separa o osso esfenoide do osso parietal. Ele é responsável por drenar sangue das veias da cavidade temporal e da fossa infratemporal para os seios venosos maiores, como o seio cavernoso. O seio esfenoparietal desempenha um papel importante na drenagem venosa da região lateral do cérebro e da base do crânio.",
                reference: "Karatsu, K., Kikuchi, R., Kanazawa, T., Nakamura, U., & Miyazaki, H. (2021). Sphenoparietal sinus and superficial middle cerebral vein thrombosis: A case report and literature review. Neurosurgery, 68(4), 432-436. https://doi.org/10.1016/j.neuchi.2021.09.002. Epub September 16, 2021."
            },
            {
                shape: "rect",
                coords: [42,573,403,652],
                title: "Plexo Venoso Basilar",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O plexo venoso basilar é uma rede venosa situada na base do crânio, entre a face inferior do tronco encefálico e a parte superior da coluna vertebral. Ele é formado por pequenas veias provenientes de várias estruturas do cérebro e do tronco encefálico. Sua principal função é drenar o sangue venoso das regiões intracranianas e do sistema nervoso central.",
                reference: "Cironi, C., Wang, C., Iwanaga, J., Lockwood, J., Mathkour, M., Bui, C. J., Dumont, A. S., & Tubbs, R. S. (2022). Anatomical study of the internal carotid venous plexus: new findings with application to skull base surgery. Acta Neurochirurgica (Vienna), 164(7), 1923-1928. https://doi.org/10.1007/s00701-021-05081-x"
            },
            {
                shape: "rect",
                coords: [3,737,364,816],
                title: "Seio Petroso Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O seio petroso superior é um vaso venoso localizado na base do crânio, que drena sangue do seio cavernoso para o seio transverso. Ele corre ao longo da parte superior do osso petroso e é responsável pela drenagem venosa de áreas como o cerebelo, tronco encefálico e lóbulos temporais. O seio petroso superior também pode estar envolvido em processos patológicos, como trombose, que pode afetar a drenagem venosa cerebral.",
                reference: "Mortazavi, M. M., Cox, M. A., Saker, E., Krishnamurthy, S., Verma, K., Griessenauer, C. J., Loukas, M., Oskouian, R. J., & Tubbs, R. S. (2016). Superior petrosal sinus: A review of anatomy, embryology, pathology, and neurosurgical relevance. Neurosurgical Review, 41(3), 713-718. https://doi.org/10.1007/s10143-016-0785-9. Epub September 19, 2016."
            },
            {
                shape: "rect",
                coords: [16,1292,357,1373],
                title: "Seio Sigmoide",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O seio sigmoide é uma importante estrutura venosa localizada na base do crânio, que faz parte do sistema de drenagem venosa do cérebro. Ele é formado pela continuidade do seio transverso e se curva em direção à base do crânio, passando para o seio jugular interno, de onde o sangue venoso é finalmente direcionado para a circulação geral. O seio sigmoide recebe sangue de várias áreas do cérebro, incluindo o cerebelo e o tronco encefálico, e desempenha um papel crucial na drenagem venosa.",
                reference: "Orlev, A., Jackson, C. M., Luksik, A., Garzón-Muvdi, T., Yang, W., Wade, C., Harnof, S., & Tamargo, R. J. (2020). Natural history of untreated transverse/sigmoid sinus thrombosis after posterior fossa surgery: A case series and literature review. Neurosurgical Focus, 19(2), 109-116. https://doi.org/10.1093/ons/opz396."
            },
            {
                shape: "rect",
                coords: [1758,1222,2110,1315],
                title: "Seio Petroso Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O seio petroso inferior é um vaso venoso localizado na base do crânio, que drena sangue do seio cavernoso para o seio jugular interno. Ele corre ao longo da parte inferior do osso petroso e está envolvido na drenagem venosa de estruturas próximas, como o tronco encefálico e as glândulas pituitária. O seio petroso inferior tem importância clínica, pois pode estar relacionado a condições como trombose, afetando a drenagem venosa da região.",
                reference: "Perlman, J. E., Johnston, P. C., Hui, F., Mulligan, C., Weil, R. J., Recinos, P. F., Yogi-Morren, D., Salvatori, R., Mukherjee, D., Gália, G., Kennedy, L., & Hamrahian, A. H. (2021). Pitfalls in performing and interpreting inferior petrosal sinus sampling: Personal experience and literature review. The Journal of Clinical Endocrinology & Metabolism, 106(5), e1953-e1967. https://doi.org/10.1210/clinem/dgab012."
            },
            {
                shape: "rect",
                coords: [1765,762,2118,895],
                title: "Seio Intercavernoso Posterior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O seio intercavernoso posterior está localizado na região do osso esfenóide.",
                reference: "Iampreechakul P, Wangtanaphat K, Chuntaroj S, Khunvutthidee S, Wattanasen Y, Hangsapruek S, Lertbutsayanukul P, Siriwimonmas S. Dural arteriovenous fistula involving superior petrosal sinus with petrosal venous drainage in association with cerebral venous thrombosis: Literature review and illustrative case. World Neurosurg X. 2024 Feb 22;22:100300. doi: 10.1016/j.wnsx.2024.100300. PMID: 38435434; PMCID: PMC10904989. Ekanem UI, Olewnik Ł, Porzionato A, Macchi V, Iwanaga J, Loukas M, Dumont AS, Caro R, Tubbs RS. Morphology of the groove of the inferior petrosal sinus: application to better understanding variations and surgery of the skull base. Anat Cell Biol. 2022 Jun 30;55(2):135-141. doi: 10.5115/acb.22.023. PMID: 35773216; PMCID: PMC9256480. Czarniak N, Kamińska J, Matowicka-Karna J, Koper-Lenkiewicz OM. Cerebrospinal Fluid-Basic Concepts Review. Biomedicines. 2023 May 17;11(5):1461. doi: 10.3390/biomedicines11051461. PMID: 37239132; PMCID: PMC10216641."
            },
            {
                shape: "rect",
                coords: [1644,241,2118,333],
                title: "Seio Intercavernoso Anterior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O seio intercavernoso anterior está localizado na região do osso esfenóide anteriormente.",
                reference: "Iampreechakul P, Wangtanaphat K, Chuntaroj S, Khunvutthidee S, Wattanasen Y, Hangsapruek S, Lertbutsayanukul P, Siriwimonmas S. Dural arteriovenous fistula involving superior petrosal sinus with petrosal venous drainage in association with cerebral venous thrombosis: Literature review and illustrative case. World Neurosurg X. 2024 Feb 22;22:100300. doi: 10.1016/j.wnsx.2024.100300. PMID: 38435434; PMCID: PMC10904989. Ekanem UI, Olewnik Ł, Porzionato A, Macchi V, Iwanaga J, Loukas M, Dumont AS, Caro R, Tubbs RS. Morphology of the groove of the inferior petrosal sinus: application to better understanding variations and surgery of the skull base. Anat Cell Biol. 2022 Jun 30;55(2):135-141. doi: 10.5115/acb.22.023. PMID: 35773216; PMCID: PMC9256480. Czarniak N, Kamińska J, Matowicka-Karna J, Koper-Lenkiewicz OM. Cerebrospinal Fluid-Basic Concepts Review. Biomedicines. 2023 May 17;11(5):1461. doi: 10.3390/biomedicines11051461. PMID: 37239132; PMCID: PMC10216641."
            }
        ],
    },
    {
        name: "meninges-e-liquor08",
        areas: [
            {
                shape: "rect",
                coords: [101,60,490,149],
                title: "Seio Petroso Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O seio petroso superior é um vaso venoso localizado na base do crânio, que drena sangue do seio cavernoso para o seio transverso. Ele corre ao longo da parte superior do osso petroso e é responsável pela drenagem venosa de áreas como o cerebelo, tronco encefálico e lóbulos temporais. O seio petroso superior também pode estar envolvido em processos patológicos, como trombose, que pode afetar a drenagem venosa cerebral.",
                reference: "Mortazavi, M. M., Cox, M. A., Saker, E., Krishnamurthy, S., Verma, K., Griessenauer, C. J., Loukas, M., Oskouian, R. J., & Tubbs, R. S. (2016). Superior petrosal sinus: A review of anatomy, embryology, pathology, and neurosurgical relevance. Neurosurgical Review, 41(3), 713-718. https://doi.org/10.1007/s10143-016-0785-9. Epub September 19, 2016."
            },
            {
                shape: "rect",
                coords: [530,0,919,89],
                title: "Seio Esfenoparietal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O seio esfenoparietal é um pequeno vaso venoso localizado na base do crânio, ao longo da fissura esfenoparietal, que separa o osso esfenoide do osso parietal. Ele é responsável por drenar sangue das veias da cavidade temporal e da fossa infratemporal para os seios venosos maiores, como o seio cavernoso. O seio esfenoparietal desempenha um papel importante na drenagem venosa da região lateral do cérebro e da base do crânio.",
                reference: "Karatsu, K., Kikuchi, R., Kanazawa, T., Nakamura, U., & Miyazaki, H. (2021). Sphenoparietal sinus and superficial middle cerebral vein thrombosis: A case report and literature review. Neurosurgery, 68(4), 432-436. https://doi.org/10.1016/j.neuchi.2021.09.002. Epub September 16, 2021."
            },
            {
                shape: "rect",
                coords: [1,433,302,521],
                title: "Seio Transverso",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Localizado bilateralmente na tenda do cerebelo, leva sangue venoso da confluência dos seios para os seios sigmóides direito e esquerdo.",
                reference: "Iampreechakul P, Wangtanaphat K, Chuntaroj S, Khunvutthidee S, Wattanasen Y, Hangsapruek S, Lertbutsayanukul P, Siriwimonmas S. Dural arteriovenous fistula involving superior petrosal sinus with petrosal venous drainage in association with cerebral venous thrombosis: Literature review and illustrative case. World Neurosurg X. 2024 Feb 22;22:100300. doi: 10.1016/j.wnsx.2024.100300. PMID: 38435434; PMCID: PMC10904989. | Ekanem UI, Olewnik Ł, Porzionato A, Macchi V, Iwanaga J, Loukas M, Dumont AS, Caro R, Tubbs RS. Morphology of the groove of the inferior petrosal sinus: application to better understanding variations and surgery of the skull base. Anat Cell Biol. 2022 Jun 30;55(2):135-141. doi: 10.5115/acb.22.023. PMID: 35773216; PMCID: PMC9256480. | Czarniak N, Kamińska J, Matowicka-Karna J, Koper-Lenkiewicz OM. Cerebrospinal Fluid-Basic Concepts Review. Biomedicines. 2023 May 17;11(5):1461. doi: 10.3390/biomedicines11051461. PMID: 37239132; PMCID: PMC10216641."
            },
            {
                shape: "rect",
                coords: [1399,186,1778,275],
                title: "Gânglio Trigeminal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O gânglio trigeminal é a união dos 3 ramos do nervo trigêmeo (oftálmico, maxilar e mandibular) na fossa craniana média. É o maior par de nervos cranianos interior ao crânio, com função sensitiva da face e motora dos músculos mastigadores.",
                reference: "Freddi TAL, Ottaiano AC, Lucio LL, Corrêa DG, Hygino da Cruz LC Jr. The Trigeminal Nerve: Anatomy and Pathology. Semin Ultrasound CT MR. 2022 Oct;43(5):403-413. doi: 10.1053/j.sult.2022.04.002. Epub 2022 Apr 6. PMID: 36116853."
            },
            {
                shape: "rect",
                coords: [1206,1169,1711,1254],
                title: "Nervos Cranianos IX, X, XI",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Nervo Craniano IX: Função sensorial, motora e parassimpática. Tem comunicação com o vago, leva informações do seio carotídeo e do terço posterior da língua. | Nervo Craniano X: Maior nervo craniano no corpo, função motora, sensitiva e parassimpática. | Nervo Craniano XI: Função na musculatura do trapézio, da laringe e do esternocleidomastóideo. Tem função sensitiva e motora.",
                reference: "Sakamoto Y. Morphological Features of the Glossopharyngeal Nerve in the Peripharyngeal Space, the Oropharynx, and the Tongue. Anat Rec (Hoboken). 2019 Apr;302(4):630-638. | Jayaprakash N, Song W, Toth V, Vardhan A, Levy T, Tomaio J, Qanud K, Mughrabi I, Chang YC, Rob M, Daytz A, Abbas A, Nassrallah Z, Volpe BT, Tracey KJ, Al-Abed Y, Datta-Chaudhuri T, Miller L, Barbe MF, Lee SC, Zanos TP, Zanos S. Organ- and function-specific anatomical organization of vagal fibers supports fascicular vagus nerve stimulation. Brain Stimul. 2023 Mar-Apr;16(2):484-506. doi: 10.1016/j.brs.2023.02.003. Epub 2023 Feb 10. PMID: 36773779; PMCID: PMC10228508. | Roberts SO, Cardozo A. A detailed review of the spinal accessory nerve and its anatomical variations with cadaveric illustration. Anat Sci Int. 2024 Jun;99(3):239-253. doi:"
            },
            {
                shape: "rect",
                coords: [1031,1269,1418,1345],
                title: "Nervo Craniano XII",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo craniano XII (hipoglosso) está relacionado à movimentação da língua, surge no bulbo e apresenta função simpática.",
                reference: "Węgiel A, Zielinska N, Głowacka M, Olewnik Ł. Hypoglossal Nerve Neuropathies-Analysis of Causes and Anatomical Background. Biomedicines. 2024 Apr 14;12(4):864. doi: 10.3390/biomedicines12040864. PMID: 38672218; PMCID: PMC11048189."
            },
            {
                shape: "rect",
                coords: [1359,1072,1873,1144],
                title: "Nervos Cranianos VII e VIII",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Nervo Craniano VII: O nervo facial origina-se junto ao nervo vestibulococlear no tronco encefálico e segue posteriormente ao nervo abducente e anteriormente ao nervo vestibulococlear. É motor e sensitivo, responsável pelas expressões faciais e pela sensibilidade de ⅔ anteriores da língua. | Nervo Craniano VIII: O nervo vestibulococlear emerge junto ao nervo facial, é um nervo sensorial com função de equilíbrio (parte vestibular) e de audição (parte coclear).",
                reference: "Ottaiano AC, Gomez GD, Freddi TAL. The Facial Nerve: Anatomy and Pathology. Semin Ultrasound CT MR. 2023 Apr;44(2):71-80. doi: 10.1053/j.sult.2022.11.005. Epub 2022 Nov 28. PMID: 37055142. | Corrêa DG, Hygino da Cruz LC Jr, Freddi TAL. The Vestibulocochlear Nerve: Anatomy and Pathology. Semin Ultrasound CT MR. 2023 Apr;44(2):81-94. doi: 10.1053/j.sult.2023.03.007. Epub 2023 Mar 22. PMID: 37055143."
            }
        ],
    }, 
];

  export default MeL