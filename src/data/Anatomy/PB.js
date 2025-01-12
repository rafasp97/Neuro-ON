
const PB = [
    // esse primeiro objeto é para condicional que impede as areas
    // de serem mostradas quando não é a terceira imagem.
    {
        name: "null",
        areas: [

        ],
    },
    {
        name: "plexo-braquial01",
        areas: [
            {
                shape: "rect", 
                coords: [85,249,492,316], 
                title: "Tronco Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O tronco superior do plexo braquial é formado pelas raízes de C5 e C6, e é responsável por inervar os músculos e a pele do ombro e parte superior do braço.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [399,54,758,156], 
                title: "Divisão Anterior do Tronco Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A divisão anterior do tronco superior do plexo braquial contribui para a formação do fascículo lateral e inerva músculos flexores do braço e antebraço.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [752,23,1074,122], 
                title: "Divisão Posterior do Tronco Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A divisão posterior do tronco superior do plexo braquial contribui para a formação do fascículo posterior e inerva músculos extensores do braço e antebraço.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [1085,12,1374,130], 
                title: "Divisão Anterior do Tronco Médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A divisão anterior do tronco médio do plexo braquial se une à divisão anterior do tronco superior para formar parte do fascículo lateral.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [1399,13,1688,131], 
                title: "Divisão Posterior do Tronco Médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A divisão posterior do tronco médio do plexo braquial se junta às divisões posteriores dos troncos superior e inferior para formar o fascículo posterior.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [2118,158,2452,238], 
                title: "Fascículo Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O fascículo lateral é formado pelas divisões anteriores dos troncos superior e médio, e dá origem ao nervo musculocutâneo e parte do nervo mediano.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [1890,57,2224,137], 
                title: "Fascículo Posterior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O fascículo posterior é formado pelas divisões posteriores dos troncos superior, médio e inferior, e dá origem aos nervos axilar e radial.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [2331,1291,2699,1388], 
                title: "Nervo Musculocutâneo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo musculocutâneo é derivado do fascículo lateral e inerva os músculos do compartimento anterior do braço.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [1910,1592,2225,1666], 
                title: "Nervo Mediano",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo mediano é formado por contribuições dos fascículos lateral e medial e inerva os músculos do compartimento anterior do antebraço e alguns músculos da mão.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [1610,1573,1839,1639], 
                title: "Nervo Ulnar",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo ulnar é derivado do fascículo medial e inerva músculos e pele do antebraço e mão, especialmente os músculos intrínsecos da mão.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [958,1572,1278,1666], 
                title: "Fascículo Medial",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O fascículo medial é formado pela divisão anterior do tronco inferior, e dá origem aos nervos ulnar e parte do nervo mediano.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [328,1337,653,1470], 
                title: "Divisão Anterior do Tronco Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A divisão anterior do tronco inferior do plexo braquial contribui para a formação do fascículo medial e inerva músculos e pele do antebraço e mão.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [620,1537,945,1670], 
                title: "Divisão Posterior do Tronco Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A divisão posterior do tronco inferior do plexo braquial contribui para a formação do fascículo posterior, fornecendo inervação a músculos extensores.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [109,1229,447,1317], 
                title: "Tronco Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O tronco inferior do plexo braquial é formado pelas raízes de C8 e T1, fornecendo inervação aos músculos e à pele do antebraço e mão.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [95,959,214,1034], 
                title: "Raiz de T1",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A raiz de T1 é uma raiz nervosa do plexo braquial, originando-se do primeiro nervo espinhal torácico e formando parte do tronco inferior.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [119,831,238,906], 
                title: "Raiz de C8",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A raiz de C8 é uma raiz nervosa do plexo braquial, que se origina do oitavo nervo espinhal cervical e contribui para a formação dos troncos inferior e médio.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [315,402,434,477], 
                title: "Raiz de C5",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A raiz de C5 é uma das raízes nervosas que compõem o plexo braquial, originando-se do quinto nervo espinhal cervical e contribuindo para a formação dos troncos superior e médio.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [248,491,367,566], 
                title: "Raiz de C6",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A raiz de C6 é uma raiz nervosa do plexo braquial, que se origina do sexto nervo espinhal cervical e participa da formação dos troncos superior e médio.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [131,719,250,794], 
                title: "Raiz de C7",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A raiz de C7 é uma das raízes nervosas que contribuem para o plexo braquial, originando-se do sétimo nervo espinhal cervical e formando parte do tronco médio.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [1,584,349,654], 
                title: "Tronco Médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O tronco médio do plexo braquial é formado pela raiz de C7 e contribui para a inervação dos músculos e da pele do braço e antebraço.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            }
        ],
    },
    {
        name: "plexo-braquial02",
        areas: [
            {
                shape: "rect", 
                coords: [2070,494,2171,559], 
                title: "Raiz de T1",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A raiz de T1 é uma raiz nervosa do plexo braquial, originando-se do primeiro nervo espinhal torácico e formando parte do tronco inferior.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [2072,370,2173,435], 
                title: "Raiz de C8",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A raiz de C8 é uma raiz nervosa do plexo braquial, que se origina do oitavo nervo espinhal cervical e contribui para a formação dos troncos inferior e médio.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [2073,9,2179,73], 
                title: "Raiz de C5",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A raiz de C5 é uma das raízes nervosas que compõem o plexo braquial, originando-se do quinto nervo espinhal cervical e contribuindo para a formação dos troncos superior e médio.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [2071,83,2177,147], 
                title: "Raiz de C6",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A raiz de C6 é uma raiz nervosa do plexo braquial, que se origina do sexto nervo espinhal cervical e participa da formação dos troncos superior e médio.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [2072,187,2178,251], 
                title: "Raiz de C7",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A raiz de C7 é uma das raízes nervosas que contribuem para o plexo braquial, originando-se do sétimo nervo espinhal cervical e formando parte do tronco médio.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [2065,272,2375,331], 
                title: "Tronco Médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O tronco médio do plexo braquial é formado pela raiz de C7 e contribui para a inervação dos músculos e da pele do braço e antebraço.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [2045,766,2377,849], 
                title: "Tronco Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O tronco inferior do plexo braquial é formado pelas raízes de C8 e T1, fornecendo inervação aos músculos e à pele do antebraço e mão.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [1934,648,2503,732], 
                title: "Divisão Anterior do Tronco Médio",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A divisão anterior do tronco médio do plexo braquial se une à divisão anterior do tronco superior para formar parte do fascículo lateral.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [1938,891,2507,975], 
                title: "Divisão Anterior do Tronco Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A divisão anterior do tronco inferior do plexo braquial contribui para a formação do fascículo medial e inerva músculos e pele do antebraço e mão.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [1938,1007,2507,1091], 
                title: "Divisão Posterior do Tronco Inferior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A divisão posterior do tronco inferior do plexo braquial contribui para a formação do fascículo posterior, fornecendo inervação a músculos extensores.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [2022,1144,2358,1223], 
                title: "Fascículo Medial",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O fascículo medial é formado pela divisão anterior do tronco inferior, e dá origem aos nervos ulnar e parte do nervo mediano.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [2002,1490,2246,1567], 
                title: "Nervo Ulnar",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo ulnar é derivado do fascículo medial e inerva músculos e pele do antebraço e mão, especialmente os músculos intrínsecos da mão.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [2015,1592,2319,1664], 
                title: "Nervo Mediano",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo mediano é formado por contribuições dos fascículos lateral e medial e inerva os músculos do compartimento anterior do antebraço e alguns músculos da mão.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [0,1364,426,1458], 
                title: "Nervo Musculocutâneo",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo musculocutâneo é derivado do fascículo lateral e inerva os músculos do compartimento anterior do braço.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [18,879,419,962], 
                title: "Fascículo Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O fascículo lateral é formado pelas divisões anteriores dos troncos superior e médio, e dá origem ao nervo musculocutâneo e parte do nervo mediano.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [23,790,424,873], 
                title: "Fascículo Posterior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O fascículo posterior é formado pelas divisões posteriores dos troncos superior, médio e inferior, e dá origem aos nervos axilar e radial.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [112,544,718,609], 
                title: "Divisão Anterior do Tronco Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A divisão anterior do tronco superior do plexo braquial contribui para a formação do fascículo lateral e inerva músculos flexores do braço e antebraço.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [114,626,720,691], 
                title: "Divisão Posterior do Tronco Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  A divisão posterior do tronco superior do plexo braquial contribui para a formação do fascículo posterior e inerva músculos extensores do braço e antebraço.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            },
            {
                shape: "rect", 
                coords: [20,178,385,260], 
                title: "Tronco Superior",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O tronco superior do plexo braquial é formado pelas raízes de C5 e C6, e é responsável por inervar os músculos e a pele do ombro e parte superior do braço.",
                reference: "Polcaro L, Charlick M, Daly DT. Anatomy, Head and Neck: Brachial Plexus. [Updated 2023 Aug 14]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK531473/"
            }
        ],
    },
    {
        name: "plexo-braquial03",
        areas: [
            {
                shape: "rect", 
                coords: [135,522,523,606], 
                title: "Nervo Subcostal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo subcostal contribui para o plexo lombar ao se unir ao ramo de L1, formando nervos iliohipogástrico e ilioinguinal, e é importante para a inervação da parte inferior do abdômen e da parte superior da coxa.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [2248,184,2636,268], 
                title: "Nervo Subcostal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo subcostal contribui para o plexo lombar ao se unir ao ramo de L1, formando nervos iliohipogástrico e ilioinguinal, e é importante para a inervação da parte inferior do abdômen e da parte superior da coxa.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [180,1146,799,1238], 
                title: "Nervo Cutâneo Femoral Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo cutâneo femoral lateral origina-se de L2 e L3, passa lateralmente ao músculo psoas maior e sobre o músculo ilíaco, cruza o ligamento inguinal próximo à espinha ilíaca ântero-superior e entra na coxa. Ele se divide em ramos anterior e posterior. O ramo anterior inerva a pele da parte anterior e lateral da coxa até o joelho, enquanto o ramo posterior inerva a pele sobre o trocanter maior e a região glútea.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [120,1313,567,1408], 
                title: "Nervo Femoral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo femoral é formado pelas divisões dorsais de L2, L3 e L4, emerge do psoas maior e passa pelo ligamento inguinal para entrar na coxa. Ele se divide em ramos anterior e posterior, inervando os músculos do compartimento anterior da coxa e a pele da superfície anterior da coxa, além da parte medial da perna e do pé.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [0,1416,713,1513], 
                title: "Nervo Genitofemoral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo genitofemoral, formado por L1 e L2, emerge do psoas maior e se divide em dois ramos: o ramo genital, que inerva o músculo cremaster e a pele dos genitais externos, e o ramo femoral, que inerva a pele sobre o trígono femoral.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [0,1545,713,1642], 
                title: "Nervo Genitofemoral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo genitofemoral, formado por L1 e L2, emerge do psoas maior e se divide em dois ramos: o ramo genital, que inerva o músculo cremaster e a pele dos genitais externos, e o ramo femoral, que inerva a pele sobre o trígono femoral.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [2120,1103,2500,1189], 
                title: "Nervo Genitofemoral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo genitofemoral, formado por L1 e L2, emerge do psoas maior e se divide em dois ramos: o ramo genital, que inerva o músculo cremaster e a pele dos genitais externos, e o ramo femoral, que inerva a pele sobre o trígono femoral.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [2041,1202,2711,1291], 
                title: "Nervo Genitofemoral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo genitofemoral, formado por L1 e L2, emerge do psoas maior e se divide em dois ramos: o ramo genital, que inerva o músculo cremaster e a pele dos genitais externos, e o ramo femoral, que inerva a pele sobre o trígono femoral.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [2041,1359,2711,1448], 
                title: "Nervo Genitofemoral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo genitofemoral, formado por L1 e L2, emerge do psoas maior e se divide em dois ramos: o ramo genital, que inerva o músculo cremaster e a pele dos genitais externos, e o ramo femoral, que inerva a pele sobre o trígono femoral.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [2254,288,2629,481], 
                title: "Tronco Comum Iliohipogástrico e Ilioinguinal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O tronco comum iliohipogástrico e ilioinguinal é formado pelo ramo ventral de L1, com possível contribuição do nervo subcostal (T12). Ele se divide em dois nervos que inervam a pele e músculos da região abdominal inferior e parte da coxa.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [2223,504,2703,601], 
                title: "Nervo Iliohipogástrico",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo iliohipogástrico origina-se de L1, passando sobre o músculo quadrado lombar e próximo ao rim. Ele inerva o transverso do abdome e o oblíquo interno, além de fornecer um ramo cutâneo lateral para a região glútea posterolateral e a pele da região suprapúbica.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [2120,898,2600,995], 
                title: "Nervo Ilioinguinal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo ilioinguinal, originado do ramo ventral de L1 (com possíveis contribuições de T12 ou L2), emerge abaixo do nervo iliohipogástrico e inerva a região inguinal, fornecendo sensibilidade à raiz do pênis e ao escroto nos homens, e ao monte púbico e aos lábios maiores nas mulheres, além de parte da coxa.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [2084,1006,2694,1085], 
                title: "Nervo Cutâneo Femoral Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo cutâneo femoral lateral origina-se de L2 e L3, passa lateralmente ao músculo psoas maior e sobre o músculo ilíaco, cruza o ligamento inguinal próximo à espinha ilíaca ântero-superior e entra na coxa. Ele se divide em ramos anterior e posterior. O ramo anterior inerva a pele da parte anterior e lateral da coxa até o joelho, enquanto o ramo posterior inerva a pele sobre o trocanter maior e a região glútea.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [2143,1503,2523,1599], 
                title: "Nervo Obturatório",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo obturador, originado de L2, L3 e L4, emerge medialmente ao músculo psoas maior, passa atrás dos vasos ilíacos comuns e lateralmente aos vasos ilíacos internos. Ele atravessa o forame obturador e entra no compartimento medial da coxa, onde se divide em ramos anterior e posterior. Inerva os músculos adutores da coxa e as articulações do quadril e joelho.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [2313,1613,2693,1709], 
                title: "Tronco Lombossacral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O tronco lombossacral é formado pela união das raízes ventrais de L4 e L5, localizando-se medialmente ao psoas maior. Ele se conecta ao plexo sacral, contribuindo para a inervação da parte inferior do corpo, incluindo a região glútea, coxa e perna.",
                reference: ""
            }
        ],
    },
    {
        name: "plexo-braquial04",
        areas: [
            {
                shape: "rect", 
                coords: [109,31,440,108], 
                title: "Nervo Subcostal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo subcostal contribui para o plexo lombar ao se unir ao ramo de L1, formando nervos iliohipogástrico e ilioinguinal, e é importante para a inervação da parte inferior do abdômen e da parte superior da coxa.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [2263,227,2594,304], 
                title: "Nervo Subcostal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo subcostal contribui para o plexo lombar ao se unir ao ramo de L1, formando nervos iliohipogástrico e ilioinguinal, e é importante para a inervação da parte inferior do abdômen e da parte superior da coxa.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [107,189,459,350], 
                title: "Tronco Comum Iliohipogástrico e Ilioinguinal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O tronco comum iliohipogástrico e ilioinguinal é formado pelo ramo ventral de L1, com possível contribuição do nervo subcostal (T12). Ele se divide em dois nervos que inervam a pele e músculos da região abdominal inferior e parte da coxa.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [2263,338,2615,499], 
                title: "Tronco Comum Iliohipogástrico e Ilioinguinal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O tronco comum iliohipogástrico e ilioinguinal é formado pelo ramo ventral de L1, com possível contribuição do nervo subcostal (T12). Ele se divide em dois nervos que inervam a pele e músculos da região abdominal inferior e parte da coxa.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [32,475,444,552], 
                title: "Nervo Genitofemoral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo genitofemoral, formado por L1 e L2, emerge do psoas maior e se divide em dois ramos: o ramo genital, que inerva o músculo cremaster e a pele dos genitais externos, e o ramo femoral, que inerva a pele sobre o trígono femoral.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [1,709,650,810], 
                title: "Nervo Cutâneo Femoral Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo cutâneo femoral lateral origina-se de L2 e L3, passa lateralmente ao músculo psoas maior e sobre o músculo ilíaco, cruza o ligamento inguinal próximo à espinha ilíaca ântero-superior e entra na coxa. Ele se divide em ramos anterior e posterior. O ramo anterior inerva a pele da parte anterior e lateral da coxa até o joelho, enquanto o ramo posterior inerva a pele sobre o trocanter maior e a região glútea.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [2086,1067,2710,1160], 
                title: "Nervo Cutâneo Femoral Lateral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo cutâneo femoral lateral origina-se de L2 e L3, passa lateralmente ao músculo psoas maior e sobre o músculo ilíaco, cruza o ligamento inguinal próximo à espinha ilíaca ântero-superior e entra na coxa. Ele se divide em ramos anterior e posterior. O ramo anterior inerva a pele da parte anterior e lateral da coxa até o joelho, enquanto o ramo posterior inerva a pele sobre o trocanter maior e a região glútea.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [59,855,471,951], 
                title: "Nervo Femoral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo femoral é formado pelas divisões dorsais de L2, L3 e L4, emerge do psoas maior e passa pelo ligamento inguinal para entrar na coxa. Ele se divide em ramos anterior e posterior, inervando os músculos do compartimento anterior da coxa e a pele da superfície anterior da coxa, além da parte medial da perna e do pé.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [83,976,495,1072], 
                title: "Nervo Obturatório",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo obturador, originado de L2, L3 e L4, emerge medialmente ao músculo psoas maior, passa atrás dos vasos ilíacos comuns e lateralmente aos vasos ilíacos internos. Ele atravessa o forame obturador e entra no compartimento medial da coxa, onde se divide em ramos anterior e posterior. Inerva os músculos adutores da coxa e as articulações do quadril e joelho.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [83,976,495,1072], 
                title: "Nervo Obturatório",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo obturador, originado de L2, L3 e L4, emerge medialmente ao músculo psoas maior, passa atrás dos vasos ilíacos comuns e lateralmente aos vasos ilíacos internos. Ele atravessa o forame obturador e entra no compartimento medial da coxa, onde se divide em ramos anterior e posterior. Inerva os músculos adutores da coxa e as articulações do quadril e joelho.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [26,1496,438,1592], 
                title: "Tronco Lombossacral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O tronco lombossacral é formado pela união das raízes ventrais de L4 e L5, localizando-se medialmente ao psoas maior. Ele se conecta ao plexo sacral, contribuindo para a inervação da parte inferior do corpo, incluindo a região glútea, coxa e perna.",
                reference: ""
            },
            {
                shape: "rect", 
                coords: [0,1105,691,1194], 
                title: "Nervo Genitofemoral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo genitofemoral, formado por L1 e L2, emerge do psoas maior e se divide em dois ramos: o ramo genital, que inerva o músculo cremaster e a pele dos genitais externos, e o ramo femoral, que inerva a pele sobre o trígono femoral.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [7,1348,698,1437], 
                title: "Nervo Genitofemoral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo genitofemoral, formado por L1 e L2, emerge do psoas maior e se divide em dois ramos: o ramo genital, que inerva o músculo cremaster e a pele dos genitais externos, e o ramo femoral, que inerva a pele sobre o trígono femoral.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [2019,1194,2710,1283], 
                title: "Nervo Genitofemoral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo genitofemoral, formado por L1 e L2, emerge do psoas maior e se divide em dois ramos: o ramo genital, que inerva o músculo cremaster e a pele dos genitais externos, e o ramo femoral, que inerva a pele sobre o trígono femoral.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [2019,834,2710,923], 
                title: "Nervo Genitofemoral",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo genitofemoral, formado por L1 e L2, emerge do psoas maior e se divide em dois ramos: o ramo genital, que inerva o músculo cremaster e a pele dos genitais externos, e o ramo femoral, que inerva a pele sobre o trígono femoral.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [2260,559,2710,655], 
                title: "Nervo Iliohipogástrico",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo iliohipogástrico origina-se de L1, passando sobre o músculo quadrado lombar e próximo ao rim. Ele inerva o transverso do abdome e o oblíquo interno, além de fornecer um ramo cutâneo lateral para a região glútea posterolateral e a pele da região suprapúbica.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
            {
                shape: "rect", 
                coords: [2246,670,2696,766], 
                title: "Nervo Ilioinguinal",
                fillColor: "rgba(0, 0, 0, 0)",
                strokeColor: "rgba(0, 0, 0, 0)",
                description: "  O nervo ilioinguinal, originado do ramo ventral de L1 (com possíveis contribuições de T12 ou L2), emerge abaixo do nervo iliohipogástrico e inerva a região inguinal, fornecendo sensibilidade à raiz do pênis e ao escroto nos homens, e ao monte púbico e aos lábios maiores nas mulheres, além de parte da coxa.",
                reference: "Amudha, G., & Diwan, S. (2021). Anatomy of Lumbar Plexus and Implications to Regional Anaesthesiologist. International Journal of Regional Anaesthesia, 2(2). https://doi.org/10.13107/ijra.2021.v02i02.036"
            },
        ],
    },
];

  export default PB