
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
                shape: "rect",
                coords: [113,85,368,123],
                title: "Véu Medular Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Parte da arquitetura branca do cerebelo, envolvido em conexões neuronais, facilitando a comunicação entre diferentes regiões cerebelares e outras partes do cérebro.",
                reference: "Pérez‐Miralles, F. C., Prefasi, D., García‐Merino, A., Ara, J. R., Izquierdo, G., Meca‐Lallana, V., Gascón‐Giménez, F., Martínez‐Ginés, M. L., Ramió‐Torrentà, L., Costa‐Frossard, L., Fernández, Ó., Moreno‐García, S., Maurino, J., Carreres‐Polo, J., & Casanova, B. (2021). Brain region volumes and their relationship with disability progression and cognitive function in primary progressive multiple sclerosis. Brain and Behavior, 11(4). Portico. https://doi.org/10.1002/brb3.2044"
            },
            {
                shape: "rect",
                coords: [137,186,247,231],
                title: "Cúlmen",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Modula o automatismo de caminhada, facilitando significativamente a frequência e amplitude dos movimentos.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
            },
            {
                shape: "rect",
                coords: [737,277,939,325],
                title: "Fissura Prima",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Separa o lobo anterior do lobo posterior do cerebelo, essencial para a organização e função motora das regiões cerebelares.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
            },
            {
                shape: "rect",
                coords: [219,653,463,699],
                title: "Fissura Pós-Piramidal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Define divisões dentro do cerebelo e contribui para a organização funcional das áreas cerebelares.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
            },
            {
                shape: "rect",
                coords: [379,706,623,752],
                title: "Fissura Pós-Clival",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Contribui para a separação das regiões cerebelares, auxiliando na organização estrutural e funcional do cerebelo.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
            },
            {
                shape: "rect",
                coords: [649,693,893,739],
                title: "Semilunar Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Participa no planejamento e ajustes finos dos movimentos motores, ajudando a coordenar a execução motora voluntária e contribuindo para a precisão dos movimentos.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
            }
        ],
    },
    {
        name: "cerebelo02",
        areas: [
            {
                shape: "rect",
                coords: [627,47,805,97],
                title: "Semilunar Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Atua no controle do equilíbrio e da postura, processando informações sensoriais provenientes do corpo e ajudando a manter a estabilidade corporal durante atividades motoras.",
                reference: "Lehman, VT, Black, DF, DeLone, DR, Blezek, DJ, Kaufmann, TJ, Brinjikji, W., & Welker, KM (2020). Conceitos atuais de anatomia transversal e funcional do cerebelo: uma revisão pictórica e atlas. The British Journal of Radiology, 93(1106). https://doi.org/10.1259/bjr.20190467"
            },
            {
                shape: "rect",
                coords: [170,63,348,113],
                title: "Tonsila",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Regula o equilíbrio e a coordenação, localizada na parte inferior do cerebelo, essencial para a integração sensório-motora.",
                reference: "Pérez‐Miralles, F. C., Prefasi, D., García‐Merino, A., Ara, J. R., Izquierdo, G., Meca‐Lallana, V., Gascón‐Giménez, F., Martínez‐Ginés, M. L., Ramió‐Torrentà, L., Costa‐Frossard, L., Fernández, Ó., Moreno‐García, S., Maurino, J., Carreres‐Polo, J., & Casanova, B. (2021). Brain region volumes and their relationship with disability progression and cognitive function in primary progressive multiple sclerosis. Brain and Behavior, 11(4). Portico. https://doi.org/10.1002/brb3.2044"
            },
            {
                shape: "rect",
                coords: [633,581,914,635],
                title: "Pedúnculo Cerebelar Médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Conecta o cerebelo à ponte, fundamental para a integração de informações motoras e comunicação com outras regiões do cérebro.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
            },
            {
                shape: "rect",
                coords: [101,603,382,657],
                title: "Pedúnculo Cerebelar Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Conecta o cerebelo ao bulbo e medula espinhal, desempenhando um papel crucial na coordenação e equilíbrio.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
            }
        ],
        
    },
    {
        name: "cerebelo03",
        areas: [
            {
                shape: "rect",
                coords: [185,645,326,683],
                title: "Tonsila",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Regula o equilíbrio e a coordenação, localizada na parte inferior do cerebelo, essencial para a integração sensório-motora.",
                reference: "Pérez‐Miralles, F. C., Prefasi, D., García‐Merino, A., Ara, J. R., Izquierdo, G., Meca‐Lallana, V., Gascón‐Giménez, F., Martínez‐Ginés, M. L., Ramió‐Torrentà, L., Costa‐Frossard, L., Fernández, Ó., Moreno‐García, S., Maurino, J., Carreres‐Polo, J., & Casanova, B. (2021). Brain region volumes and their relationship with disability progression and cognitive function in primary progressive multiple sclerosis. Brain and Behavior, 11(4). Portico. https://doi.org/10.1002/brb3.2044"
            },
            {
                shape: "rect",
                coords: [645,21,833,66],
                title: "Semilunar Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Atua no controle do equilíbrio e da postura, processando informações sensoriais provenientes do corpo e ajudando a manter a estabilidade corporal durante atividades motoras.",
                reference: "Lehman, VT, Black, DF, DeLone, DR, Blezek, DJ, Kaufmann, TJ, Brinjikji, W., & Welker, KM (2020). Conceitos atuais de anatomia transversal e funcional do cerebelo: uma revisão pictórica e atlas. The British Journal of Radiology, 93(1106). https://doi.org/10.1259/bjr.20190467"
            },
            {
                shape: "rect",
                coords: [384,63,517,106],
                title: "Tuber",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Exerce uma função limitada na modulação da frequência do automatismo de caminhada, mas é importante nessa modulação.",
                reference: "Lehman, VT, Black, DF, DeLone, DR, Blezek, DJ, Kaufmann, TJ, Brinjikji, W., & Welker, KM (2020). Conceitos atuais de anatomia transversal e funcional do cerebelo: uma revisão pictórica e atlas. The British Journal of Radiology, 93(1106). https://doi.org/10.1259/bjr.20190467"
            },
            {
                shape: "rect",
                coords: [100,53,233,96],
                title: "Pirâmide",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Essencial para a manutenção da posição ocular, atuando no controle da estabilidade do olhar; lesões podem causar nistagmo evocado por gaze, indicando comprometimento na função de integração neural.",
                reference: "Sival, DA, Noort, SAM van, Tijssen, MAJ, de Koning, TJ e Verbeek, DS (2022). Neurobiologia do desenvolvimento das conexões cerebelares e dos gânglios da base. Jornal Europeu de Neurologia Pediátrica, 36, 123–129. https://doi.org/10.1016/j.ejpn.2021.12.001"
            }
        ],
    },
    {
        name: "cerebelo04",
        areas: [
            {
                shape: "rect",
                coords: [507,633,608,672],
                title: "Tonsila",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Regula o equilíbrio e a coordenação, localizada na parte inferior do cerebelo, essencial para a integração sensório-motora.",
                reference: "Pérez‐Miralles, F. C., Prefasi, D., García‐Merino, A., Ara, J. R., Izquierdo, G., Meca‐Lallana, V., Gascón‐Giménez, F., Martínez‐Ginés, M. L., Ramió‐Torrentà, L., Costa‐Frossard, L., Fernández, Ó., Moreno‐García, S., Maurino, J., Carreres‐Polo, J., & Casanova, B. (2021). Brain region volumes and their relationship with disability progression and cognitive function in primary progressive multiple sclerosis. Brain and Behavior, 11(4). Portico. https://doi.org/10.1002/brb3.2044"
            },
            {
                shape: "rect",
                coords: [652,38,886,76],
                title: "Semilunar Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Atua no controle do equilíbrio e da postura, processando informações sensoriais provenientes do corpo e ajudando a manter a estabilidade corporal durante atividades motoras.",
                reference: "Lehman, VT, Black, DF, DeLone, DR, Blezek, DJ, Kaufmann, TJ, Brinjikji, W., & Welker, KM (2020). Conceitos atuais de anatomia transversal e funcional do cerebelo: uma revisão pictórica e atlas. The British Journal of Radiology, 93(1106). https://doi.org/10.1259/bjr.20190467"
            },
            {
                shape: "rect",
                coords: [446,66,537,99],
                title: "Vermis",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Coordena movimentos e equilíbrio, integrando as regiões cerebelares para a função motora geral.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
            }
        ],
    },
    {
        name: "cerebelo05",
        areas: [
            {
                shape: "rect",
                coords: [725,665,929,710],
                title: "Semilunar Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Atua no controle do equilíbrio e da postura, processando informações sensoriais provenientes do corpo e ajudando a manter a estabilidade corporal durante atividades motoras.",
                reference: "Lehman, VT, Black, DF, DeLone, DR, Blezek, DJ, Kaufmann, TJ, Brinjikji, W., & Welker, KM (2020). Conceitos atuais de anatomia transversal e funcional do cerebelo: uma revisão pictórica e atlas. The British Journal of Radiology, 93(1106). https://doi.org/10.1259/bjr.20190467"
            },
            {
                shape: "rect",
                coords: [196,661,320,706],
                title: "Pirâmide",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Essencial para a manutenção da posição ocular, atuando no controle da estabilidade do olhar; lesões podem causar nistagmo evocado por gaze, indicando comprometimento na função de integração neural.",
                reference: "Sival, DA, Noort, SAM van, Tijssen, MAJ, de Koning, TJ e Verbeek, DS (2022). Neurobiologia do desenvolvimento das conexões cerebelares e dos gânglios da base. Jornal Europeu de Neurologia Pediátrica, 36, 123–129. https://doi.org/10.1016/j.ejpn.2021.12.001"
            },
            {
                shape: "rect",
                coords: [789,266,971,305],
                title: "Semilunar Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Participa no planejamento e ajustes finos dos movimentos motores, ajudando a coordenar a execução motora voluntária e contribuindo para a precisão dos movimentos.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
            },
            {
                shape: "rect",
                coords: [321,25,418,69],
                title: "Cúlmen",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Modula o automatismo de caminhada, facilitando significativamente a frequência e amplitude dos movimentos.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
            },
            {
                shape: "rect",
                coords: [168,106,265,150],
                title: "Tuber",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Exerce uma função limitada na modulação da frequência do automatismo de caminhada, mas é importante nessa modulação.",
                reference: "Lehman, VT, Black, DF, DeLone, DR, Blezek, DJ, Kaufmann, TJ, Brinjikji, W., & Welker, KM (2020). Conceitos atuais de anatomia transversal e funcional do cerebelo: uma revisão pictórica e atlas. The British Journal of Radiology, 93(1106). https://doi.org/10.1259/bjr.20190467"
            },
            {
                shape: "rect",
                coords: [678,38,795,82],
                title: "Declive",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Parte do lobo posterior do cerebelo, envolvido na coordenação e regulação de movimentos complexos e integração motora.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
            },
            {
                shape: "rect",
                coords: [772,177,889,221],
                title: "Folium",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Apresenta efeitos discretos na facilitação dos movimentos.",
                reference: "Lehman, VT, Black, DF, DeLone, DR, Blezek, DJ, Kaufmann, TJ, Brinjikji, W., & Welker, KM (2020). Conceitos atuais de anatomia transversal e funcional do cerebelo: uma revisão pictórica e atlas. The British Journal of Radiology, 93(1106). https://doi.org/10.1259/bjr.20190467"
            }        
        ],
    },
    {
        name: "cerebelo06",
        areas: [
            {
                shape: "rect",
                coords: [382,10,616,58],
                title: "Semilunar Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Participa no planejamento e ajustes finos dos movimentos motores, ajudando a coordenar a execução motora voluntária e contribuindo para a precisão dos movimentos.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
            },
            {
                shape: "rect",
                coords: [667,593,901,641],
                title: "Semilunar Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Atua no controle do equilíbrio e da postura, processando informações sensoriais provenientes do corpo e ajudando a manter a estabilidade corporal durante atividades motoras.",
                reference: "Lehman, VT, Black, DF, DeLone, DR, Blezek, DJ, Kaufmann, TJ, Brinjikji, W., & Welker, KM (2020). Conceitos atuais de anatomia transversal e funcional do cerebelo: uma revisão pictórica e atlas. The British Journal of Radiology, 93(1106). https://doi.org/10.1259/bjr.20190467"
            },
            {
                shape: "rect",
                coords: [460,508,703,562],
                title: "Fissura Pré-Piramidal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Desempenha um papel na organização funcional do cerebelo, contribuindo para a coordenação motora.",
                reference: "Dovjak, GO, Brugger, PC, Gruber, GM, Song, JW, Weber, M., Langs, G., Bettelheim, D., Prayer, D., & Kasprian, G. (2018). Avaliação pré-natal da lobulação vermiana cerebelar: ressonância magnética fetal com validação post-mortem de 3 Tesla. Ultrasound in Obstetrics & Gynecology, 52(5), 623–630. Portico. https://doi.org/10.1002/uog.18826"
            }
        ],
    },
    {
        name: "cerebelo07",
        areas: [
            {
                shape: "rect",
                coords: [225,693,381,742],
                title: "Cúlmen",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Modula o automatismo de caminhada, facilitando significativamente a frequência e amplitude dos movimentos.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
            },
            {
                shape: "rect",
                coords: [594,75,932,128],
                title: "Pedúnculo Cerebelar Médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Conecta o cerebelo à ponte, fundamental para a integração de informações motoras e comunicação com outras regiões do cérebro.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
            },
            {
                shape: "rect",
                coords: [350,5,688,58],
                title: "Pedúnculo Cerebelar Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Conecta o cerebelo ao bulbo e medula espinhal, desempenhando um papel crucial na coordenação e equilíbrio.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
            },
            {
                shape: "rect",
                coords: [609,664,947,717],
                title: "Pedúnculo Cerebelar Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Conecta o cerebelo ao mesencéfalo, essencial para a comunicação entre o cerebelo e outras áreas cerebrais e para o processamento motor.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
            },
            {
                shape: "rect",
                coords: [234,76,361,124],
                title: "Úvula",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Envolvida na coordenação e regulação dos movimentos, essencial para o equilíbrio e integração motora no cerebelo.",
                reference: "Pérez‐Miralles, F. C., Prefasi, D., García‐Merino, A., Ara, J. R., Izquierdo, G., Meca‐Lallana, V., Gascón‐Giménez, F., Martínez‐Ginés, M. L., Ramió‐Torrentà, L., Costa‐Frossard, L., Fernández, Ó., Moreno‐García, S., Maurino, J., Carreres‐Polo, J., & Casanova, B. (2021). Brain region volumes and their relationship with disability progression and cognitive function in primary progressive multiple sclerosis. Brain and Behavior, 11(4). Portico. https://doi.org/10.1002/brb3.2044"
            },
            {
                shape: "rect",
                coords: [62,113,189,161],
                title: "Nódulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Relacionado ao equilíbrio e coordenação motora, com função importante na integração e regulação motora.",
                reference: "Pérez‐Miralles, F. C., Prefasi, D., García‐Merino, A., Ara, J. R., Izquierdo, G., Meca‐Lallana, V., Gascón‐Giménez, F., Martínez‐Ginés, M. L., Ramió‐Torrentà, L., Costa‐Frossard, L., Fernández, Ó., Moreno‐García, S., Maurino, J., Carreres‐Polo, J., & Casanova, B. (2021). Brain region volumes and their relationship with disability progression and cognitive function in primary progressive multiple sclerosis. Brain and Behavior, 11(4). Portico. https://doi.org/10.1002/brb3.2044"
            },
            {
                shape: "rect",
                coords: [67,603,223,652],
                title: "Língula",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Regula o equilíbrio e a coordenação motora, influenciando o controle de movimentos finos.",
                reference: "Dovjak, GO, Brugger, PC, Gruber, GM, Song, JW, Weber, M., Langs, G., Bettelheim, D., Prayer, D., & Kasprian, G. (2018). Avaliação pré-natal da lobulação vermiana cerebelar: ressonância magnética fetal com validação post-mortem de 3 Tesla. Ultrasound in Obstetrics & Gynecology, 52(5), 623–630. Portico. https://doi.org/10.1002/uog.18826"
            },
            {
                shape: "rect",
                coords: [542,730,698,779],
                title: "Lóbulo Central",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Importante para a coordenação e processamento motor no cerebelo.",
                reference: "Pérez‐Miralles, F. C., Prefasi, D., García‐Merino, A., Ara, J. R., Izquierdo, G., Meca‐Lallana, V., Gascón‐Giménez, F., Martínez‐Ginés, M. L., Ramió‐Torrentà, L., Costa‐Frossard, L., Fernández, Ó., Moreno‐García, S., Maurino, J., Carreres‐Polo, J., & Casanova, B. (2021). Brain region volumes and their relationship with disability progression and cognitive function in primary progressive multiple sclerosis. Brain and Behavior, 11(4). Portico. https://doi.org/10.1002/brb3.2044"
            }
        ],
    },
    {
        name: "cerebelo08",
        areas: [
            {
                shape: "rect",
                coords: [403,16,576,63],
                title: "Língula",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Regula o equilíbrio e a coordenação motora, influenciando o controle de movimentos finos.",
                reference: "Dovjak, GO, Brugger, PC, Gruber, GM, Song, JW, Weber, M., Langs, G., Bettelheim, D., Prayer, D., & Kasprian, G. (2018). Avaliação pré-natal da lobulação vermiana cerebelar: ressonância magnética fetal com validação post-mortem de 3 Tesla. Ultrasound in Obstetrics & Gynecology, 52(5), 623–630. Portico. https://doi.org/10.1002/uog.18826"
            },
            {
                shape: "rect",
                coords: [602,719,775,766],
                title: "Tonsila",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Regula o equilíbrio e a coordenação, localizada na parte inferior do cerebelo, essencial para a integração sensório-motora.",
                reference: "Pérez‐Miralles, F. C., Prefasi, D., García‐Merino, A., Ara, J. R., Izquierdo, G., Meca‐Lallana, V., Gascón‐Giménez, F., Martínez‐Ginés, M. L., Ramió‐Torrentà, L., Costa‐Frossard, L., Fernández, Ó., Moreno‐García, S., Maurino, J., Carreres‐Polo, J., & Casanova, B. (2021). Brain region volumes and their relationship with disability progression and cognitive function in primary progressive multiple sclerosis. Brain and Behavior, 11(4). Portico. https://doi.org/10.1002/brb3.2044"
            },
            {
                shape: "rect",
                coords: [444,623,617,670],
                title: "Úvula",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Envolvida na coordenação e regulação dos movimentos, essencial para o equilíbrio e integração motora no cerebelo.",
                reference: "Pérez‐Miralles, F. C., Prefasi, D., García‐Merino, A., Ara, J. R., Izquierdo, G., Meca‐Lallana, V., Gascón‐Giménez, F., Martínez‐Ginés, M. L., Ramió‐Torrentà, L., Costa‐Frossard, L., Fernández, Ó., Moreno‐García, S., Maurino, J., Carreres‐Polo, J., & Casanova, B. (2021). Brain region volumes and their relationship with disability progression and cognitive function in primary progressive multiple sclerosis. Brain and Behavior, 11(4). Portico. https://doi.org/10.1002/brb3.2044"
            },
            {
                shape: "rect",
                coords: [337,700,510,747],
                title: "Nódulo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Relacionado ao equilíbrio e coordenação motora, com função importante na integração e regulação motora.",
                reference: "Pérez‐Miralles, F. C., Prefasi, D., García‐Merino, A., Ara, J. R., Izquierdo, G., Meca‐Lallana, V., Gascón‐Giménez, F., Martínez‐Ginés, M. L., Ramió‐Torrentà, L., Costa‐Frossard, L., Fernández, Ó., Moreno‐García, S., Maurino, J., Carreres‐Polo, J., & Casanova, B. (2021). Brain region volumes and their relationship with disability progression and cognitive function in primary progressive multiple sclerosis. Brain and Behavior, 11(4). Portico. https://doi.org/10.1002/brb3.2044"
            },
            {
                shape: "rect",
                coords: [39,552,212,599],
                title: "Flóculo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Essencial para o controle do equilíbrio e movimentos, facilitando a coordenação motora fina.",
                reference: "Pérez‐Miralles, F. C., Prefasi, D., García‐Merino, A., Ara, J. R., Izquierdo, G., Meca‐Lallana, V., Gascón‐Giménez, F., Martínez‐Ginés, M. L., Ramió‐Torrentà, L., Costa‐Frossard, L., Fernández, Ó., Moreno‐García, S., Maurino, J., Carreres‐Polo, J., & Casanova, B. (2021). Brain region volumes and their relationship with disability progression and cognitive function in primary progressive multiple sclerosis. Brain and Behavior, 11(4). Portico. https://doi.org/10.1002/brb3.2044"
            },
            {
                shape: "rect",
                coords: [101,640,349,696],
                title: "Pedúnculos Cerebelares",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Pedúnculo Cerebelar Superior: Conecta o cerebelo ao mesencéfalo, essencial para a comunicação entre o cerebelo e outras áreas cerebrais e para o processamento motor. Pedúnculo Cerebelar Médio: Conecta o cerebelo à ponte, fundamental para a integração de informações motoras e comunicação com outras regiões do cérebro. Pedúnculo Cerebelar Inferior: Conecta o cerebelo ao bulbo e medula espinhal, desempenhando um papel crucial na coordenação e equilíbrio.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013 | Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013 | Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
              }
        ],
    },
    {
        name: "cerebelo09",
        areas: [
            {
                shape: "rect",
                coords: [61,200,329,256],
                title: "Véu Medular Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Parte da arquitetura branca do cerebelo, envolvido em conexões neuronais, facilitando a comunicação entre diferentes regiões cerebelares e outras partes do cérebro.",
                reference: "Pérez‐Miralles, F. C., Prefasi, D., García‐Merino, A., Ara, J. R., Izquierdo, G., Meca‐Lallana, V., Gascón‐Giménez, F., Martínez‐Ginés, M. L., Ramió‐Torrentà, L., Costa‐Frossard, L., Fernández, Ó., Moreno‐García, S., Maurino, J., Carreres‐Polo, J., & Casanova, B. (2021). Brain region volumes and their relationship with disability progression and cognitive function in primary progressive multiple sclerosis. Brain and Behavior, 11(4). Portico. https://doi.org/10.1002/brb3.2044"
            },
            {
                shape: "rect",
                coords: [786,368,951,421],
                title: "Cúlmen",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Modula o automatismo de caminhada, facilitando significativamente a frequência e amplitude dos movimentos.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
            },
            {
                shape: "rect",
                coords: [955,572,1120,625],
                title: "Fissura Prima",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Separa o lobo anterior do lobo posterior do cerebelo, essencial para a organização e função motora das regiões cerebelares.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
            },
            {
                shape: "rect",
                coords: [835,773,1109,829],
                title: "Fissura Pós-Piramidal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Define divisões dentro do cerebelo e contribui para a organização funcional das áreas cerebelares.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
            },
            {
                shape: "rect",
                coords: [605,840,879,896],
                title: "Semilunar Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Participa no planejamento e ajustes finos dos movimentos motores, ajudando a coordenar a execução motora voluntária e contribuindo para a precisão dos movimentos.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
            },
            {
                shape: "rect",
                coords: [28,676,175,732],
                title: "Declive",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Parte do lobo posterior do cerebelo, envolvido na coordenação e regulação de movimentos complexos e integração motora.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
            },
            {
                shape: "rect",
                coords: [137,808,284,864],
                title: "Folium",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Apresenta efeitos discretos na facilitação dos movimentos.",
                reference: "Lehman, VT, Black, DF, DeLone, DR, Blezek, DJ, Kaufmann, TJ, Brinjikji, W., & Welker, KM (2020). Conceitos atuais de anatomia transversal e funcional do cerebelo: uma revisão pictórica e atlas. The British Journal of Radiology, 93(1106). https://doi.org/10.1259/bjr.20190467"
            },
            {
                shape: "rect",
                coords: [72,398,306,450],
                title: "Lóbulo Central",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Importante para a coordenação e processamento motor no cerebelo.",
                reference: "Pérez‐Miralles, F. C., Prefasi, D., García‐Merino, A., Ara, J. R., Izquierdo, G., Meca‐Lallana, V., Gascón‐Giménez, F., Martínez‐Ginés, M. L., Ramió‐Torrentà, L., Costa‐Frossard, L., Fernández, Ó., Moreno‐García, S., Maurino, J., Carreres‐Polo, J., & Casanova, B. (2021). Brain region volumes and their relationship with disability progression and cognitive function in primary progressive multiple sclerosis. Brain and Behavior, 11(4). Portico. https://doi.org/10.1002/brb3.2044"
            },
            {
                shape: "rect",
                coords: [9,322,321,377],
                title: "Pedúnculo Cerebelar Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Conecta o cerebelo ao mesencéfalo, essencial para a comunicação entre o cerebelo e outras áreas cerebrais e para o processamento motor.",
                reference: "Beckinghausen, J., & Sillitoe, RV (2019). Insights sobre o desenvolvimento cerebelar e a conectividade. Neuroscience Letters, 688, 2–13. https://doi.org/10.1016/j.neulet.2018.05.013"
            },
            {
                shape: "rect",
                coords: [718,132,1003,182],
                title: "Colículo Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Estrutura localizada no mesencéfalo envolvida na integração de informações visuais e no controle de movimentos oculares. Desempenha um papel crucial na coordenação dos reflexos visuais e na orientação dos movimentos da cabeça e dos olhos em resposta a estímulos visuais.",
                reference: "Basso, MA, & May, PJ (2017). Circuitos para ação e cognição: uma visão do colículo superior. Annual Review of Vision Science, 3(1), 197–226. DOI: doi.org/10.1146/annurev-vision-102016-06123"
            },
            {
                shape: "rect",
                coords: [760,260,1004,314],
                title: "Colículo Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Estrutura no mesencéfalo que integra informações auditivas e processa sinais sonoros. É essencial para a localização e percepção de sons, contribuindo para a coordenação dos reflexos auditivos e a orientação da cabeça em resposta a estímulos sonoros.",
                reference: "Calvo, F., Almada, R. C., da Silva, J. A., Medeiros, P., da Silva Soares Jr., R., de Paiva, Y. B., Roncon, C. M., & Coimbra, N. C. (2019). The Blockade of µ1- and κ-Opioid Receptors in the Inferior Colliculus Decreases the Expression of Panic Attack-Like Behaviours Induced by Chemical Stimulation of the Dorsal Mid"
            },
            {
                shape: "rect",
                coords: [446,57,779,116],
                title: "Aqueduto Mesencefálico",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  Também chamado de Aqueduto Cerebral, é um canal estreito no tronco encefálico que conecta o terceiro e o quarto ventrículo, facilitando a circulação do líquido cerebrospinal entre essas cavidades. É crucial para a manutenção da pressão do líquido cerebrospinal e a homeostase do sistema nervoso central.",
                reference: "Lo, YT, Kirollos, RW, Chen, MW, Cheong, TM, & Keong, NCH (2020). Compressão aquedutal por espaços de Virchow-Robin dilatados na região mesencefálica-pontina apresentando sintomas que imitam hidrocefalia de pressão normal: um relato de caso e revisão da literatura. World Neurosurgery, 138, 390–397. https://doi.org/10.1016/j.wneu.2020.03.047"
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