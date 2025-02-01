const Vas = [
    {
        name: "vascularizacao01",
        areas: [
            {
                shape: "rect",
                coords: [71,132,710,232],
                title: "Artéria Frontobasilar Medial",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria frontobasilar medial é uma ramificação da artéria cerebral anterior, responsável por fornecer irrigação sanguínea para áreas do córtex orbitofrontal e outras regiões próximas à base do cérebro. Ela desempenha um papel essencial no fornecimento de oxigênio e nutrientes para estruturas envolvidas com funções cognitivas, emocionais e comportamentais.",
                reference: "Mavridis, I. N., Kalamatianos, T., Koutsarnakis, C., & Estrangalis, G. (2016). Microsurgical anatomy of the orbitofrontal arteries. World Neurosurgery, 89, 309-319. https://doi.org/10.1016/j.wneu.2016.02.024. Epub February 11, 2016. | Outra Referência, A. B., & Segundo Autor, C. D. (2020). Título do Artigo. Nome do Periódico, volume(número), páginas. https://doi.org/xxxx"
            },
            {
                shape: "rect",
                coords: [42,414,681,514],
                title: "Artéria Frontobasilar Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria frontobasilar lateral é uma ramificação da artéria cerebral anterior ou da artéria comunicante anterior, que fornece irrigação sanguínea para áreas do córtex orbitofrontal lateral. Esta artéria é responsável por nutrir as regiões do cérebro associadas a funções cognitivas complexas, como tomada de decisão, controle emocional e comportamento social.",
                reference: "Mavridis, I. N., Kalamatianos, T., Koutsarnakis, C., & Estrangalis, G. (2016). Microsurgical anatomy of the orbitofrontal arteries. World Neurosurgery, 89, 309-319. https://doi.org/10.1016/j.wneu.2016.02.024. Epub February 11, 2016."
            },
            {
                shape: "rect",
                coords: [25,762,664,862],
                title: "Artéria Comunicante Posterior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria comunicante posterior é um vaso sanguíneo que conecta a artéria cerebral posterior à artéria cerebral média, formando parte do círculo arterial de Willis. Sua principal função é fornecer um caminho alternativo para o fluxo sanguíneo entre as artérias cerebrais, ajudando a garantir a irrigação do cérebro caso algum dos principais vasos seja obstruído.",
                reference: "Tsuruta, W. (2024). [Posterior communicating artery / Posterior cerebral artery]. No Shinkei Geka, 52(3), 522-530. https://doi.org/10.11477/mf.1436204945. (Article in Japanese)"
            },
            {
                shape: "rect",
                coords: [45,1238,881,1333],
                title: "Artéria Cerebral Posterior Pré-Comunicante",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria cerebral posterior pré-comunicante fornece sangue para o diencefalo, tálamo e áreas visuais do cérebro, localizando-se antes da conexão com a artéria comunicante posterior.",
                reference: "Hong, C.-E., Oh, HS, Bae, JW, Kim, KM, Yoo, DH, Kang, H.-S., & Cho, YD (2024). Tratamento endovascular em aneurismas de segmento pré-comunicante da artéria cerebral posterior. World Neurosurgery, 182, e602–e610. https://doi.org/10.1016/j.wneu.2023.11.156"
            },
            {
                shape: "rect",
                coords: [28,1114,864,1209],
                title: "Artéria Cerebral Posterior Pós-Comunicante",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria cerebral posterior pós-comunicante (ou PCA pós-comunicante) é uma parte da artéria cerebral posterior que se origina após a conexão com a artéria comunicante posterior. Funcionalmente, ela fornece sangue para a parte posterior do cérebro, incluindo áreas do tálamo, mesencéfalo, e regiões associadas à visão e outras funções sensoriais.",
                reference: "Kikuta, Y., Yamaguchi, K., Ishikawa, T., Funatsu, T., Okada, Y., & Kawamata, T. (2021). Seleção de abordagem e bypass para aneurisma da artéria cerebral posterior do tipo fetal: casos ilustrativos. Journal of Neurosurgery: Case Lessons, 1(25). https://doi.org/10.3171/case21240"
            },
            {
                shape: "rect",
                coords: [814,1552,1321,1665],
                title: "Artéria Espinhal Anterior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria espinhal anterior é um grande vaso sanguíneo que supre a porção anterior da medula espinhal. Ela surge das artérias vertebrais, que são ramos das artérias subclávias. A artéria corre ao longo da superfície anterior da medula espinhal, fornecendo oxigênio e nutrientes essenciais para as estruturas envolvidas no controle motor, processamento sensorial e funções autonômicas.",
                reference: "Mizutani, K., Akiyama, T., Tomita, H., & Toda, M. (2023). Role of endovascular treatment for ruptured aneurysms involving the anterior spinal artery at the craniocervical junction. Journal of Neuroradiology, 50(1), 44-49. https://doi.org/10.1016/j.neurad.2022.04.003. Epub April 29, 2022."
            },
            {
                shape: "rect",
                coords: [1921,1527,2428,1640],
                title: "Artéria Vertebral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria vertebral é um vaso sanguíneo que transporta sangue oxigenado para a parte posterior do cérebro, medula espinhal e cerebelo, desempenhando um papel crucial na irrigação dessas regiões.",
                reference: "Ndongo Sonfack, DJ, Bojanowski, MW, Tarabay, B., Gennari, A., Shédid, D., & Yuh, S.-J. (2024). Estenose da artéria vertebral por osteófito: revisão sistemática e série de casos. Neurocirurgia, 70(3), 101525. https://doi.org/10.1016/j.neuchi.2023.101525"
            },
            {
                shape: "rect",
                coords: [2023,1428,2711,1516],
                title: "Artéria Cerebelar Inferior Posterior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria cerebelar inferior posterior (ACIP) é um vaso sanguíneo que se origina da artéria vertebral e é responsável por fornecer sangue à parte inferior do cerebelo. A ACIP desempenha um papel crucial na irrigação das regiões cerebelares responsáveis pelo equilíbrio, coordenação motora e processamento de informações sensoriais.",
                reference: "Hou, K., Nível, X., Guo, Y., & Yu, J. (2022). Endovascular treatment of posterior inferior cerebellar artery trunk aneurysm. Acta Neurologica Belgica, 122(6), 1405-1417. https://doi.org/10.1007/s13760-021-01826-8. Epub October 22, 2021."
            },
            {
                shape: "rect",
                coords: [2023,1324,2711,1412],
                title: "Artéria Cerebelar Inferior Anterior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria cerebelar inferior anterior (ACIA) é uma artéria importante que se origina da artéria basilar, geralmente na junção da ponte e da medula. Ela é responsável por fornecer sangue à parte anterior e inferior do cerebelo, bem como a estruturas do tronco encefálico, como a ponte, a medula oblonga e a meato acústico interno (onde passam os nervos facial e vestibulococlear).",
                reference: "Hou K, Xu K, Yu J. Endovascular treatment of aneurysms of the trunk of the anterior inferior cerebellar artery. Interv Neuroradiol. 2022 Oct;28(5):604-612. doi: 10.1177/15910199211049054. Epub 2021 Nov 13."
            },
            {
                shape: "rect",
                coords: [2143,1166,2677,1256],
                title: "Artéria Basilar",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria basilar é um vaso sanguíneo fundamental que se forma pela união das artérias vertebrais e tem a função principal de fornecer sangue oxigenado para o tronco encefálico, cerebelo, parte posterior do cérebro e algumas regiões da medula espinhal. Ela é responsável pela irrigação de áreas vitais do sistema nervoso central, influenciando funções como a respiração, o controle motor e o equilíbrio.",
                reference: "Tao, C., Nogueira, R. G., Zhu, Y., Sun, J., Han, H., Yuan, G., Wen, C., Zhou, P., Chen, W., Zeng, G., Li, Y., Ma, Z., Yu, C., Su, J., Zhou, Z., Chen, Z., Liao, G., Sun, Y., Ren, Y., … Hu, W. (2022). Trial of Endovascular Treatment of Acute Basilar-Artery Occlusion. New England Journal of Medicine, 387(15), 1361–1372. https://doi.org/10.1056/nejmoa2206317"
            },
            {
                shape: "rect",
                coords: [2155,955,2711,1050],
                title: "Artéria Cerebelar Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria cerebelar superior é um vaso sanguíneo que se origina da artéria basilar e tem a função de fornecer sangue oxigenado para a parte superior do cerebelo, o tronco encefálico e outras áreas adjacentes do cérebro. Ela é responsável pela irrigação de estruturas importantes para funções como coordenação motora, equilíbrio e processamento sensorial.",
                reference: "Matsubara, S. (2024). Basilar artery, anterior inferior cerebellar artery, superior cerebellar artery. Review No Shinkei Geka, 52(3), 514-521. https://doi.org/10.11477/mf.1436204944."
            },
            {
                shape: "rect",
                coords: [2234,786,2699,937],
                title: "Artéria Carótida Interna (Parte Terminal)",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A parte terminal da artéria carótida interna (ACI) refere-se ao segmento da ACI localizado no final de seu trajeto, logo antes de se bifurcar em duas grandes ramificações: a artéria cerebral média (ACM) e a artéria cerebral anterior (ACA). Funcionalmente, a parte terminal da ACI abastece áreas críticas do cérebro, incluindo o cérebro, hipotálamo e os nervos ópticos, desempenhando um papel essencial na perfusão cerebral.",
                reference: "Gohal, S. O., Ally, A. U., Alhonaizil, A. I., Alabdulwahab, A. A., Alzahrany, K. S., Alomari, M. A., Alshunaibir, F. A., Alsalman, M. A., Alhamyani, N. M., Alamri, H. M., Alharbi, A. A., Alabood, A. J., Alshahrani, F. S., Al Amer, A. M., & Al-Hawaj, F. (2021). Aneurisma gigante não rompido da artéria carótida interna. Cureus, 13(12), e20423. https://doi.org/10.7759/cureus.20423"
            },
            {
                shape: "rect",
                coords: [2227,233,2634,335],
                title: "Trato Olfatório",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O trato olfativo é uma estrutura do sistema nervoso central responsável por conduzir os sinais do olfato do bulbo olfativo para áreas cerebrais, principalmente para o córtex olfativo. Ele é composto por fibras nervosas que se estendem do bulbo olfativo, atravessando a base do cérebro, até o lobo temporal, onde a percepção do cheiro é processada.",
                reference: "Han, S. A., Kim, J. K., Cho, D.-Y., Patel, Z. M., & Rhee, C.-S. (2023). O Sistema Olfativo: Anatomia e Fisiologia Básica para Otorrinolaringologistas Gerais. Clin Exp Otorrinolaringologia, 16(4), 308-316. https://doi.org/10.21053/ceo.2023.00185"
            }
        ],
    },
    {
        name: "vascularizacao02",
        areas: [
            {
                shape: "rect",
                coords: [2248,800,2706,936],
                title: "Artéria Frontobasilar Medial",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria frontobasilar medial é uma ramificação da artéria cerebral anterior, responsável por fornecer irrigação sanguínea para áreas do córtex orbitofrontal e outras regiões próximas à base do cérebro. Ela desempenha um papel essencial no fornecimento de oxigênio e nutrientes para estruturas envolvidas com funções cognitivas, emocionais e comportamentais.",
                reference: "Mavridis, I. N., Kalamatianos, T., Koutsarnakis, C., & Estrangalis, G. (2016). Microsurgical anatomy of the orbitofrontal arteries. World Neurosurgery, 89, 309-319. https://doi.org/10.1016/j.wneu.2016.02.024. Epub February 11, 2016. | Outra Referência, A. B., & Segundo Autor, C. D. (2020). Título do Artigo. Nome do Periódico, volume(número), páginas. https://doi.org/xxxx"
            },
            {
                shape: "rect",
                coords: [2090,1194,2699,1345],
                title: "Artéria Cerebral Posterior Pré-Comunicante",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria cerebral posterior pré-comunicante fornece sangue para o diencefalo, tálamo e áreas visuais do cérebro, localizando-se antes da conexão com a artéria comunicante posterior.",
                reference: "Hong, C.-E., Oh, HS, Bae, JW, Kim, KM, Yoo, DH, Kang, H.-S., & Cho, YD (2024). Tratamento endovascular em aneurismas de segmento pré-comunicante da artéria cerebral posterior. World Neurosurgery, 182, e602–e610. https://doi.org/10.1016/j.wneu.2023.11.156"
            },
            {
                shape: "rect",
                coords: [2229,965,2709,1124],
                title: "Artéria Cerebral Posterior Pós-Comunicante",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria cerebral posterior pós-comunicante (ou PCA pós-comunicante) é uma parte da artéria cerebral posterior que se origina após a conexão com a artéria comunicante posterior. Funcionalmente, ela fornece sangue para a parte posterior do cérebro, incluindo áreas do tálamo, mesencéfalo, e regiões associadas à visão e outras funções sensoriais.",
                reference: "Kikuta, Y., Yamaguchi, K., Ishikawa, T., Funatsu, T., Okada, Y., & Kawamata, T. (2021). Seleção de abordagem e bypass para aneurisma da artéria cerebral posterior do tipo fetal: casos ilustrativos. Journal of Neurosurgery: Case Lessons, 1(25). https://doi.org/10.3171/case21240"
            },
            {
                shape: "rect",
                coords: [667,1521,1190,1617],
                title: "Artéria Occipital Medial",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria occipital medial é uma pequena ramificação da artéria carótida externa que se dirige em direção à parte posterior do crânio, irrigando estruturas da região occipital, incluindo músculos e a pele do couro cabeludo.",
                reference: "Tudose, R. C., Toader, C., & Rusu, M. C. (2024). A case of occipital artery originating from the vertebral artery. Anatomy and Cell Biology, 24, Article 257. https://doi.org/10.5115/acb.24.257"
            },
            {
                shape: "rect",
                coords: [1604,1408,2316,1508],
                title: "Artéria Recorrente de Heubner",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria recorrente de Heubner é um ramo importante da artéria cerebral anterior, que se origina normalmente da porção proximal desta artéria. Ela é considerada crucial para a irrigação de várias estruturas do cérebro, incluindo partes do núcleo caudado, do putâmen, do tálamo e da parte anterior do cérebro.",
                reference: "Matsuda, W., Sonomura, T., Honma, S., Ohno, S., Goto, T., Hirai, S., Itoh, M., Honda, Y., Fujieda, H., Udagawa, J., & Ueda, S. (2017). Anatomical variations of the recurrent artery of Heubner: number, origin, and course. Anatomical Science International, 93(3), 317–322. https://doi.org/10.1007/s12565-017-0415-9"
            },
            {
                shape: "rect",
                coords: [2,1066,497,1187],
                title: "Artéria Calcarina",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria calcarina é uma ramificação da artéria cerebral posterior. Ela percorre o sulco calcarino, uma estrutura no cérebro associada à região visual primária (V1), localizada no lobo occipital. Sua função principal é fornecer suprimento sanguíneo para as áreas envolvidas no processamento visual, especialmente a área primária visual.",
                reference: "Ishimoto, K., Matsuzaki, J., Iwata, R., Yamamoto, N., Yamagata, T., Ikuno, H., Nishikawa, M., & Goto, T. (2024). Occlusion of the parent artery for a dissecting posterior cerebral artery aneurysm in the P4 segment presenting with ischemic stroke and rapid growth: A case report. NeuroMedico Case Journal, 11, 103-108. https://doi.org/10.2176/jns-nmc.2023-0267"
            },
            {
                shape: "rect",
                coords: [2,739,562,848],
                title: "Artéria Parietoccipital",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria parieto-occipital (POA) é um ramo da artéria cerebral posterior (PCA), geralmente originando-se da PCA ou da artéria calcarina. Ela irriga áreas do lobo parietal e occipital, fornecendo sangue a regiões importantes para funções visuais e espaciais. A POA é crucial para o suprimento sanguíneo das áreas relacionadas à percepção visual, movimento e integração sensorial.",
                reference: "Kalamatianos T, Mavridis IN, Karakosta E, Drosos E, Skandalakis GP, Kalivas A, Piagkou M, Koutsarnakis C, Estrangalis G. The Parieto-Occipital Artery Revisited: A Microanatomical Study. World Neurosurgery. 2019 Jun;126:e1130-e1139. doi: 10.1016/j.wneu.2019.02.215. Epub 2019 Mar 14."
            },
            {
                shape: "rect",
                coords: [2,495,662,594],
                title: "Artéria Dorsal do Corpo Caloso",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria dorsal do corpo caloso é um ramo da artéria cerebral posterior. Ela se origina da artéria cerebelar posterior, embora, em alguns casos, possa ser considerada uma ramificação da artéria calosomarginal ou da artéria cerebral anterior. Sua principal função é fornecer suprimento sanguíneo à parte posterior do corpo caloso.",
                reference: "Mincă DI, Rusu MC, Rădoi PM, Hostiuc S, Toader C. Transcallosal and pericallosal courses of the anterior cerebral artery. Medicine (Kaunas). 2022;58(10):1365. doi:"
            },
            {
                shape: "rect",
                coords: [356,320,876,425],
                title: "Artéria Paracentral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria do giro paracentral é uma pequena artéria que irriga a área do cérebro situada na região do giro paracentral. Esta área está localizada na parte medial do hemisfério cerebral, próxima à linha média, e é envolvida principalmente no controle motor e sensorial dos membros inferiores.",
                reference: "Georgountzos, G., Triantafyllou, G., Mavrovounis, G., Piagkou, M., Estrangalis, G., & Kalamatianos, T. (2024). Microsurgical anatomy of the paracentral lobe artery: a cadaver series. Anat Radiological Surgery, 47(1), 29. https://doi.org/10.1007/s00276-024-03532-5."
            },
            {
                shape: "rect",
                coords: [495,155,1101,304],
                title: "Ramo Frontal Posteromedial da Artéria Calosomarginal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  É um ramo da artéria calosomarginal, que por sua vez é uma ramificação da artéria cerebral anterior. Este ramo fornece suprimento sanguíneo para as regiões medial e posterior do lobo frontal, especialmente em áreas associadas à motricidade e funções cognitivas superiores.",
                reference: "Acerbi, F., Vetrano, I. G., Falco, J., Gioppo, A., Ciuffi, A., Ziliani, V., Schiariti, M., Broggi, M., Faragò, G., & Ferroli, P. (2020). Bypass de artéria pericalosa-pericalosa e artéria calosomarginal-calosomarginal lado a lado in situ para aneurismas complexos da artéria cerebral anterior distal: uma nota técnica. Cirurgia Neurocirúrgica (Hagerstown), 19(5), E487-E495. https://doi.org/10.1093/ons/opaa236"
            },
            {
                shape: "rect",
                coords: [1118,95,1724,244],
                title: "Ramo Frontal Anteromedial da Artéria Calosomarginal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O ramo frontal anteromedial da artéria calosomarginal, que é uma ramificação da artéria cerebral anterior, tem a função de irrigar áreas específicas do lobo frontal medial, desempenhando um papel crucial na vascularização do cérebro.",
                reference: "Acerbi, F., Vetrano, I. G., Falco, J., Gioppo, A., Ciuffi, A., Ziliani, V., Schiariti, M., Broggi, M., Faragò, G., & Ferroli, P. (2020). Bypass de artéria pericalosa-pericalosa e artéria calosomarginal-calosomarginal lado a lado in situ para aneurismas complexos da artéria cerebral anterior distal: uma nota técnica. Cirurgia Neurocirúrgica (Hagerstown), 19(5), E487-E495. https://doi.org/10.1093/ons/opaa236"
            },
            {
                shape: "rect",
                coords: [1940,226,2469,334],
                title: "Artéria Pericalosa",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria pericallosa é um ramo da artéria cerebral anterior, desempenha um papel importante no fornecimento de oxigênio e nutrientes para as regiões cerebrais relacionadas a funções motoras, sensoriais e cognitivas.",
                reference: "Vasciaveo, L., Rizzo, G., Khalil, A., Alameddine, S., Di Girolamo, R., Candia, M., De Lucia, G., Mappa, I., Liberati, M., Nappi, L., & D'Antonio, F. (2022). Assessment of the pericallosal artery between 11 and 14 weeks of gestation: A cohort study and meta-analysis. Journal of Clinical Ultrasound, 50(7), 984-988. https://doi.org/10.1002/jcu.23191. Epub March 22, 2022"
            },
            {
                shape: "rect",
                coords: [2241,656,2711,769],
                title: "Artéria Polar Frontal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria frontopolar é um ramo da artéria cerebral anterior, que se origina na porção A1 desta artéria. Ela irriga a região frontal do cérebro, especialmente a parte mais anterior do lobo frontal, que está associada a funções cognitivas superiores como tomada de decisões e comportamento social.",
                reference: "Ishikuro, K., Hattori, N., Imanishi, R., Furuya, K., Nakata, T., Dougu, N., Yamamoto, M., Konishi, H., Nukui, T., Hayashi, T., Anada, R., Matsuda, N., Hirosawa, H., Tanaka, R., Shibata, T., Mori, K., Noguchi, K., Kuroda, S., Nakatsuji, Y., & Nishijo, H. (2021). A Parkinson's disease patient showed increased neuromelanin-sensitive areas in the substantia nigra after rehabilitation with tDCS: A case report. Neurocaso, 27(5), 407-414. https://doi.org/10.1080/13554794.2021.1975768"
            }
        ],
    },
    {
        name: "vascularizacao03",
        areas: [
            {
                shape: "rect",
                coords: [2234,989,2711,1173],
                title: "Artéria Cerebral Posterior Pré-Comunicante",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria cerebral posterior pré-comunicante fornece sangue para o diencefalo, tálamo e áreas visuais do cérebro, localizando-se antes da conexão com a artéria comunicante posterior.",
                reference: "Hong, C.-E., Oh, HS, Bae, JW, Kim, KM, Yoo, DH, Kang, H.-S., & Cho, YD (2024). Tratamento endovascular em aneurismas de segmento pré-comunicante da artéria cerebral posterior. World Neurosurgery, 182, e602–e610. https://doi.org/10.1016/j.wneu.2023.11.156"
            },
            {
                shape: "rect",
                coords: [114,314,655,445],
                title: "Artéria Occipital Medial",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria occipital medial é uma pequena ramificação da artéria carótida externa que se dirige em direção à parte posterior do crânio, irrigando estruturas da região occipital, incluindo músculos e a pele do couro cabeludo.",
                reference: "Tudose, R. C., Toader, C., & Rusu, M. C. (2024). A case of occipital artery originating from the vertebral artery. Anatomy and Cell Biology, 24, Article 257. https://doi.org/10.5115/acb.24.257"
            },
            {
                shape: "rect",
                coords: [2033,1196,2689,1300],
                title: "Artéria Recorrente de Heubner",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria recorrente de Heubner é um ramo importante da artéria cerebral anterior, que se origina normalmente da porção proximal desta artéria. Ela é considerada crucial para a irrigação de várias estruturas do cérebro, incluindo partes do núcleo caudado, do putâmen, do tálamo e da parte anterior do cérebro.",
                reference: "Matsuda, W., Sonomura, T., Honma, S., Ohno, S., Goto, T., Hirai, S., Itoh, M., Honda, Y., Fujieda, H., Udagawa, J., & Ueda, S. (2017). Anatomical variations of the recurrent artery of Heubner: number, origin, and course. Anatomical Science International, 93(3), 317–322. https://doi.org/10.1007/s12565-017-0415-9"
            },
            {
                shape: "rect",
                coords: [586,1314,1293,1439],
                title: "Artéria Comunicante Posterior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria comunicante posterior é um vaso sanguíneo que conecta a artéria cerebral posterior à artéria cerebral média, formando parte do círculo arterial de Willis. Sua principal função é fornecer um caminho alternativo para o fluxo sanguíneo entre as artérias cerebrais, ajudando a garantir a irrigação do cérebro caso algum dos principais vasos seja obstruído.",
                reference: "Tsuruta, W. (2024). [Posterior communicating artery / Posterior cerebral artery]. No Shinkei Geka, 52(3), 522-530. https://doi.org/10.11477/mf.1436204945. (Article in Japanese)"
            },
            {
                shape: "rect",
                coords: [0,672,389,862],
                title: "Artéria Temporal Posterior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria temporal posterior é uma ramificação da artéria maxilar, que é um dos principais ramos da artéria carótida externa. Ela é responsável por fornecer suprimento sanguíneo à região posterior da cabeça e à parte inferior do lobo temporal do cérebro, incluindo áreas importantes como a região temporal inferior e o lóbulo occipital.",
                reference: "Baghaki S, Yalcin PE, Celik U, Cinar F. Posterior branch of the superficial temporal artery flap for reconstruction of compound oral/perioral defects. Ann Plast Surg. 2024 Mar 1;92(3):294-299. doi: 10.1097/SAP.00000000000003749. Epub 2024 Jan 6."
            },
            {
                shape: "rect",
                coords: [1595,1427,2126,1542],
                title: "Artéria Cerebral Média",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria cerebral média é uma das principais ramificações da artéria carótida interna e é responsável por fornecer sangue para grandes áreas do cérebro, incluindo partes dos lobos frontal, parietal e temporal. Ela irriga áreas associadas ao controle motor, sensibilidade e funções cognitivas. A artéria cerebral média tem grande importância clínica, pois sua obstrução pode levar a acidentes vasculares cerebrais (AVCs).",
                reference: "Nounaka, Y., Murai, Y., Shirokane, K., Matano, F., Koketsu, K., Nakae, R., Watanabe, A., Mizunari, T., & Morita, A. (2023). Dissecção espontânea da artéria cerebral média: uma série de seis casos e revisão da literatura. Neurosurgical Review, 46(1). https://doi.org/10.1007/s10143-023-02139-5"
            }
        ],
    },
    {
        name: "vascularizacao04",
        areas: [
            {
                shape: "rect",
                coords: [406,287,880,390],
                title: "Artéria Vertebral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria vertebral é um vaso sanguíneo que transporta sangue oxigenado para a parte posterior do cérebro, medula espinhal e cerebelo, desempenhando um papel crucial na irrigação dessas regiões.",
                reference: "Ndongo Sonfack, DJ, Bojanowski, MW, Tarabay, B., Gennari, A., Shédid, D., & Yuh, S.-J. (2024). Estenose da artéria vertebral por osteófito: revisão sistemática e série de casos. Neurocirurgia, 70(3), 101525. https://doi.org/10.1016/j.neuchi.2023.101525"
            }
        ],
    },
    {
        name: "vascularizacao05",
        areas: [
            {
                shape: "rect",
                coords: [313,409,801,515],
                title: "Artérias Vertebrais",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  As artérias vertebrais são vasos sanguíneos que transportam sangue oxigenado para a parte posterior do cérebro, medula espinhal e cerebelo, desempenhando um papel crucial na irrigação dessas regiões.",
                reference: "Ndongo Sonfack, DJ, Bojanowski, MW, Tarabay, B., Gennari, A., Shédid, D., & Yuh, S.-J. (2024). Estenose da artéria vertebral por osteófito: revisão sistemática e série de casos. Neurocirurgia, 70(3), 101525. https://doi.org/10.1016/j.neuchi.2023.101525"
            }
        ],
    },
    {
        name: "vascularizacao06",
        areas: [
            {
                shape: "rect",
                coords: [2045,1045,2474,1161],
                title: "Artéria Basilar",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria basilar é um vaso sanguíneo fundamental que se forma pela união das artérias vertebrais e tem a função principal de fornecer sangue oxigenado para o tronco encefálico, cerebelo, parte posterior do cérebro e algumas regiões da medula espinhal. Ela é responsável pela irrigação de áreas vitais do sistema nervoso central, influenciando funções como a respiração, o controle motor e o equilíbrio.",
                reference: "Tao, C., Nogueira, R. G., Zhu, Y., Sun, J., Han, H., Yuan, G., Wen, C., Zhou, P., Chen, W., Zeng, G., Li, Y., Ma, Z., Yu, C., Su, J., Zhou, Z., Chen, Z., Liao, G., Sun, Y., Ren, Y., … Hu, W. (2022). Trial of Endovascular Treatment of Acute Basilar-Artery Occlusion. New England Journal of Medicine, 387(15), 1361–1372. https://doi.org/10.1056/nejmoa2206317"
            },
            {
                shape: "rect",
                coords: [2009,901,2553,1001],
                title: "Artéria Cerebelar Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria cerebelar superior é um vaso sanguíneo que se origina da artéria basilar e tem a função de fornecer sangue oxigenado para a parte superior do cerebelo, o tronco encefálico e outras áreas adjacentes do cérebro. Ela é responsável pela irrigação de estruturas importantes para funções como coordenação motora, equilíbrio e processamento sensorial.",
                reference: "Matsubara, S. (2024). Basilar artery, anterior inferior cerebellar artery, superior cerebellar artery. Review No Shinkei Geka, 52(3), 514-521. https://doi.org/10.11477/mf.1436204944."
            },
            {
                shape: "rect",
                coords: [1882,778,2289,871],
                title: "Artéria Pontina",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria pontina é responsável por fornecer sangue ao pons, uma parte do tronco encefálico, crucial para funções vitais como respiração e coordenação motora.",
                reference: "Kwiatkowska, M., Rzepliński, R., & Ciszek, B. (2023). Anatomia das artérias pontinas e perfurantes da artéria basilar em humanos. Journal of Anatomy, 243(6), 997–1006. Portico. https://doi.org/10.1111/joa.13927"
            }
        ],
    },
    {
        name: "vascularizacao07",
        areas: [
            {
                shape: "rect",
                coords: [205,973,725,1091],
                title: "Seio Sagital Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O seio sagital inferior é uma veia situada na base do cérebro, na face inferior do dente de véu do cérebro, funcionalmente, o seio sagital inferior drena o sangue venoso do cérebro para o seio reto.",
                reference: "Tsutsumi, S., Ono, H., & Ishii, H. (2021). Seio sagital inferior: estudo de ressonância magnética. Anatomia Cirúrgica e Radiológica, 43(8), 1353–1357. https://doi.org/10.1007/s00276-021-02701-0"
            },
            {
                shape: "rect",
                coords: [212,1211,732,1329],
                title: "Seio Sagital Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O seio sagital superior é um grande vaso venoso localizado ao longo da fissura longitudinal, na parte superior do cérebro, sua função principal é drenar o sangue venoso das áreas superficiais do cérebro e da meninge para os seios transversos.",
                reference: "Johansen, PM, Ciavarra, B., McCormack, R., Kole, M., Spiegel, G., & Fletcher, SA (2024). Trombectomia do seio sagital superior em traumatismo craniano pediátrico. Neurocirurgia pediátrica, 59(2–3), 94–101. Portico. https://doi.org/10.1159/000538184"
            },
            {
                shape: "rect",
                coords: [2074,594,2711,751],
                title: "Artérias Cerebrais Posteriores Pré-Comunicantes",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  As artérias cerebrais posteriores pré-comunicantes fornecem sangue para o diencefalo, tálamo e áreas visuais do cérebro, localizando-se antes da conexão com a artéria comunicante posterior.",
                reference: "Hong, C.-E., Oh, HS, Bae, JW, Kim, KM, Yoo, DH, Kang, H.-S., & Cho, YD (2024). Tratamento endovascular em aneurismas de segmento pré-comunicante da artéria cerebral posterior. World Neurosurgery, 182, e602–e610. https://doi.org/10.1016/j.wneu.2023.11.156"
            },
        ],
    },
    {
        name: "vascularizacao08",
        areas: [
            {
                shape: "rect",
                coords: [205,970,741,1106],
                title: "Seio Sagital Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O seio sagital inferior é uma veia situada na base do cérebro, na face inferior do dente de véu do cérebro, funcionalmente, o seio sagital inferior drena o sangue venoso do cérebro para o seio reto.",
                reference: "Tsutsumi, S., Ono, H., & Ishii, H. (2021). Seio sagital inferior: estudo de ressonância magnética. Anatomia Cirúrgica e Radiológica, 43(8), 1353–1357. https://doi.org/10.1007/s00276-021-02701-0"
            },
            {
                shape: "rect",
                coords: [253,1241,789,1377],
                title: "Seio Sagital Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O seio sagital superior é um grande vaso venoso localizado ao longo da fissura longitudinal, na parte superior do cérebro, sua função principal é drenar o sangue venoso das áreas superficiais do cérebro e da meninge para os seios transversos.",
                reference: "Johansen, PM, Ciavarra, B., McCormack, R., Kole, M., Spiegel, G., & Fletcher, SA (2024). Trombectomia do seio sagital superior em traumatismo craniano pediátrico. Neurocirurgia pediátrica, 59(2–3), 94–101. Portico. https://doi.org/10.1159/000538184"
            },
            {
                shape: "rect",
                coords: [1733,26,2269,162],
                title: "Artérias Pericalosas",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  As artérias pericallosas são um ramo da artéria cerebral anterior, desempenha um papel importante no fornecimento de oxigênio e nutrientes para as regiões cerebrais relacionadas a funções motoras, sensoriais e cognitivas.",
                reference: "Vasciaveo, L., Rizzo, G., Khalil, A., Alameddine, S., Di Girolamo, R., Candia, M., De Lucia, G., Mappa, I., Liberati, M., Nappi, L., & D'Antonio, F. (2022). Assessment of the pericallosal artery between 11 and 14 weeks of gestation: A cohort study and meta-analysis. Journal of Clinical Ultrasound, 50(7), 984-988. https://doi.org/10.1002/jcu.23191. Epub March 22, 2022"
            },
        ],
    },
    {
        name: "vascularizacao09",
        areas: [
            {
                shape: "rect",
                coords: [2040,342,2555,450],
                title: "Seio Sagital Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O seio sagital inferior é uma veia situada na base do cérebro, na face inferior do dente de véu do cérebro, funcionalmente, o seio sagital inferior drena o sangue venoso do cérebro para o seio reto.",
                reference: "Tsutsumi, S., Ono, H., & Ishii, H. (2021). Seio sagital inferior: estudo de ressonância magnética. Anatomia Cirúrgica e Radiológica, 43(8), 1353–1357. https://doi.org/10.1007/s00276-021-02701-0"
            },
            {
                shape: "rect",
                coords: [2059,521,2574,629],
                title: "Artérias Pericalosas",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  As artérias pericallosas são um ramo da artéria cerebral anterior, desempenha um papel importante no fornecimento de oxigênio e nutrientes para as regiões cerebrais relacionadas a funções motoras, sensoriais e cognitivas.",
                reference: "Vasciaveo, L., Rizzo, G., Khalil, A., Alameddine, S., Di Girolamo, R., Candia, M., De Lucia, G., Mappa, I., Liberati, M., Nappi, L., & D'Antonio, F. (2022). Assessment of the pericallosal artery between 11 and 14 weeks of gestation: A cohort study and meta-analysis. Journal of Clinical Ultrasound, 50(7), 984-988. https://doi.org/10.1002/jcu.23191. Epub March 22, 2022"
            },
            {
                shape: "rect",
                coords: [2073,1082,2588,1190],
                title: "Artéria Cerebral Média",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria cerebral média é uma das principais ramificações da artéria carótida interna e é responsável por fornecer sangue para grandes áreas do cérebro, incluindo partes dos lobos frontal, parietal e temporal. Ela irriga áreas associadas ao controle motor, sensibilidade e funções cognitivas. A artéria cerebral média tem grande importância clínica, pois sua obstrução pode levar a acidentes vasculares cerebrais (AVCs).",
                reference: "Nounaka, Y., Murai, Y., Shirokane, K., Matano, F., Koketsu, K., Nakae, R., Watanabe, A., Mizunari, T., & Morita, A. (2023). Dissecção espontânea da artéria cerebral média: uma série de seis casos e revisão da literatura. Neurosurgical Review, 46(1). https://doi.org/10.1007/s10143-023-02139-5"
            },
            {
                shape: "rect",
                coords: [2054,758,2579,986],
                title: "Artérias Cerebrais Anteriores Pós-Comunicantes",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  As artérias cerebrais anteriores pós-comunicantes são uma porção da artéria cerebral anterior que fica após a artéria comunicante anterior. Ela irriga o lobo frontal e parte do lobo parietal, áreas relacionadas ao controle motor e funções sensoriais.",
                reference: "De Silva, KRD, Silva, TRN, Gunasekera, WSL, & Jayesekera, R. (2009). Variação na origem da artéria cerebral posterior em adultos do Sri Lanka. Neurology India, 57(1), 46. https://doi.org/10.4103/0028-3886.48821"
            },
        ],
    },
    {
        name: "vascularizacao10",
        areas: [
            {
                shape: "rect",
                coords: [2097,199,2607,330],
                title: "Seio Sagital Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O seio sagital superior é um grande vaso venoso localizado ao longo da fissura longitudinal, na parte superior do cérebro, sua função principal é drenar o sangue venoso das áreas superficiais do cérebro e da meninge para os seios transversos.",
                reference: "Johansen, PM, Ciavarra, B., McCormack, R., Kole, M., Spiegel, G., & Fletcher, SA (2024). Trombectomia do seio sagital superior em traumatismo craniano pediátrico. Neurocirurgia pediátrica, 59(2–3), 94–101. Portico. https://doi.org/10.1159/000538184"
            },
            {
                shape: "rect",
                coords: [2200,470,2711,630],
                title: "Cisterna Superior (ou Quadrigeminal)",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A cisterna superior é uma área do espaço subaracnóideo localizada entre o mesencéfalo e o cerebelo, ao redor da região dos colículos quadrigêmeos. Sua principal função é permitir o fluxo e a circulação do líquido cefalorraquidiano (LCR), facilitando a comunicação entre outras cisternas cerebrais e contribuindo para a drenagem do LCR para o sistema venoso.",
                reference: "López López, LB, Moles Herbera, J., Avedillo Ruidiaz, A., Fustero de Miguel, D., Vázquez Sufuentes, S., & Casado Pellejero, J. (2021). Cisto Epidermóide da Cisterna Quadrigeminal: Neuroendoscopia e Abordagem Infratentorial Supracerebelar Assistida por Endoscópio. Neurocirurgia Mundial, 152, 113. https://doi.org/10.1016/j.wneu.2021.06.048"
            },
            {
                shape: "rect",
                coords: [2171,934,2682,1094],
                title: "Confluência dos Seios",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Encontro de 3 seios (seio sagital superior, reto e occipital).",
                reference: "Proulx, ST (2021). Fluxo de saída do líquido cefalorraquidiano: uma revisão das evidências históricas e contemporâneas para vilosidades aracnoides, rotas perineurais e linfáticos durais. Cellular and Molecular Life Sciences, 78(6), 2429–2457. https://doi.org/10.1007/s00018-020-03706-5"
            },
            {
                shape: "rect",
                coords: [2011,1176,2522,1336],
                title: "Tenda do Cerebelo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Camada meníngea da dura mater que reflete e separa o cerebelo do cérebro, localizada na fossa craniana posterior. Sua margem anterior é côncava e a margem posterior é convexa.",
                reference: "Bordoni, B., Simonelli, M., & Lagana, MM (2019). Tentorium Cerebelli: Músculos, Ligamentos e Dura Mater, Parte 1. Cureus. https://doi.org/10.7759/cureus.5601"
            },
            {
                shape: "rect",
                coords: [1764,1414,2275,1574],
                title: "Cisterna Magna",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A cisterna magna é a maior das cisternas da fossa posterior e a mais visível das cisternas encefálicas. Tem forma romboidal com uma face posterior representada pela membrana aracnóide esticada como uma ponte entre ambos os hemisférios cerebelosos e ambas as amígdalas. A face anterior é constituída pelo verme cerebeloso e entre ambas as amígdalas, a face dorsal da medula oblongada.",
                reference: "Schropp, V., Chunder, R., Dietel, B., Tacke, S., & Kuerten, S. (2023). A presença de agregados de células B cerebelares está associada a um perfil específico de quimiocina no fluido cerebrospinal em um modelo murino de esclerose múltipla. Journal of Neuroinflammation, 20(1). https://doi.org/10.1186/s12974-023-02695-z"
            },
            {
                shape: "rect",
                coords: [760,1466,1271,1626],
                title: "Cisterna Pontinha",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A cisterna quiasmática mantém uma relação estreita com o complexo opto-quiasmático. Geralmente está escondido da vista pelos nervos ópticos e quiasma, e a porta que nos leva a ela será o espaço interóptico, cujo tamanho depende da presença de um quiasma pré ou pós-fixado.",
                reference: "Gladi, M., Di Rienzo, A., Fasinella, M. R., Aiudi, D., Balercia, P., Dobran, M., & Iacoangeli, M. (2023). Ruptured proximal pontine artery aneurysm and association with cerebellopontine angle cistern arterial venous malformation fed by the same artery: A surgical challenge. Surgical Neurology International, 14, 352. https://doi.org/10.25259/sni_246_2023"
            },
            {
                shape: "rect",
                coords: [76,1265,587,1425],
                title: "Cisterna Basilar",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  As cisternas basais são compartimentos do espaço subaracnóideo preenchidos com líquido cefalorraquidiano (LCR) que contêm estruturas vasculares e neurais. Elas constituem um grande reservatório de LCR, se comunicando com o sistema ventricular.",
                reference: "Atsumi, H., Sorimachi, T., Nonaka, Y., & Matsumae, M. (2019). Apagamento da cisterna basal e hemorragia pseudo-subaracnóidea em imagens de tomografia computadorizada de hematoma subdural crônico. World Neurosurgery, 132, e109–e115. https://doi.org/10.1016/j.wneu.2019.08.249"
            }
        ],
    },
    {
        name: "vascularizacao11",
        areas: [
            {
                shape: "rect",
                coords: [1,1050,473,1186],
                title: "Seio Transverso",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O seio transverso é localizado bilateralmente na tenda do cerebelo e é responsável por levar o sangue venoso da confluência dos seios para os seios sigmóides direito e esquerdo.",
                reference: "Czarniak, N., Kamińska, J., Matowicka-Karna, J., & Koper-Lenkiewicz, O. (2023). Revisão dos conceitos básicos do líquido cefalorraquidiano. Biomedicinas, 11(5), 1461. https://doi.org/10.3390/biomedicines11051461"
            },
            {
                shape: "rect",
                coords: [2167,540,2708,680],
                title: "Artéria Cerebral Média",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria cerebral média é uma das principais ramificações da artéria carótida interna e é responsável por fornecer sangue para grandes áreas do cérebro, incluindo partes dos lobos frontal, parietal e temporal. Ela irriga áreas associadas ao controle motor, sensibilidade e funções cognitivas. A artéria cerebral média tem grande importância clínica, pois sua obstrução pode levar a acidentes vasculares cerebrais (AVCs).",
                reference: "Nounaka, Y., Murai, Y., Shirokane, K., Matano, F., Koketsu, K., Nakae, R., Watanabe, A., Mizunari, T., & Morita, A. (2023). Dissecção espontânea da artéria cerebral média: uma série de seis casos e revisão da literatura. Neurosurgical Review, 46(1). https://doi.org/10.1007/s10143-023-02139-5"
            }

        ],
    },
    {
        name: "vascularizacao12",
        areas: [
            {
                shape: "rect",
                coords: [64,224,446,312],
                title: "Artéria Vertebral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A artéria vertebral é um vaso sanguíneo que transporta sangue oxigenado para a parte posterior do cérebro, medula espinhal e cerebelo, desempenhando um papel crucial na irrigação dessas regiões.",
                reference: "Ndongo Sonfack, DJ, Bojanowski, MW, Tarabay, B., Gennari, A., Shédid, D., & Yuh, S.-J. (2024). Estenose da artéria vertebral por osteófito: revisão sistemática e série de casos. Neurocirurgia, 70(3), 101525. https://doi.org/10.1016/j.neuchi.2023.101525"
            },
        ],
    },
    // {
    //     name: "vascularizacao",
    //     areas: [
    //         {
    //             shape: "rect",
    //             coords: [71,132,710,232],
    //             title: "Artéria Frontobasilar Medial",
    //             fillColor: "rgba(0, 0, 0, 0)",
    //             strokeColor: "rgba(0, 0, 0, 0)",
    //             description: "  A artéria frontobasilar medial é uma ramificação da artéria cerebral anterior, responsável por fornecer irrigação sanguínea para áreas do córtex orbitofrontal e outras regiões próximas à base do cérebro. Ela desempenha um papel essencial no fornecimento de oxigênio e nutrientes para estruturas envolvidas com funções cognitivas, emocionais e comportamentais.",
    //             reference: "Mavridis, I. N., Kalamatianos, T., Koutsarnakis, C., & Estrangalis, G. (2016). Microsurgical anatomy of the orbitofrontal arteries. World Neurosurgery, 89, 309-319. https://doi.org/10.1016/j.wneu.2016.02.024. Epub February 11, 2016. | Outra Referência, A. B., & Segundo Autor, C. D. (2020). Título do Artigo. Nome do Periódico, volume(número), páginas. https://doi.org/xxxx"
    //         }
    //     ],
    // },
];

    export default Vas

