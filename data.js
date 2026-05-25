// =============================================
// GO MOROCCO — DATA.JS
// Toutes les données de l'application
// =============================================

var DATA = {
  villes: [
    { id:1, nom:"Marrakech", nom_en:"Marrakech", nom_ar:"مراكش", region:"Sud", region_en:"South", region_ar:"الجنوب", img:"images/Marrakech.jpg", maps_url:"https://maps.google.com/?q=Marrakech+Morocco", saison:"Avr — Juin", budget:"50 — 80€",
      desc_fr:"La ville ocre, capitale culturelle du Maroc. Ses souks labyrinthiques, la place Jemaa el-Fna et ses riads cachés en font une destination envoûtante entre tradition et modernité.",
      desc_en:"The Red City, Morocco's cultural capital. Its labyrinthine souks, the Jemaa el-Fna square and hidden riads make it a mesmerizing destination.",
      desc_ar:"المدينة الحمراء، العاصمة الثقافية للمغرب. أسواقها المتاهة وساحة جامع الفنا والرياضات المخفية تجعلها وجهة رائعة.",
      plan: {
        jour1: [
          {time:"08:00",emoji:"☕",activity:"Petit-déjeuner au riad",place:"Médina",tip:"Essayez le msemen avec du miel",tags:["food"]},
          {time:"09:30",emoji:"🕌",activity:"Visite de la Koutoubia",place:"Mosquée Koutoubia",tip:"Magnifique le matin avec la lumière dorée",tags:["culture"]},
          {time:"11:00",emoji:"🛍️",activity:"Exploration des souks",place:"Souk de Marrakech",tip:"Négociez à 40% du prix affiché",tags:["shopping"]},
          {time:"13:00",emoji:"🍽️",activity:"Déjeuner tajine",place:"Restaurant médina",tip:"Évitez les restaurants sur Jemaa el-Fna",tags:["food"]},
          {time:"15:00",emoji:"🌿",activity:"Jardin Majorelle",place:"Jardin Majorelle",tip:"Achetez les billets en ligne",tags:["nature"]},
          {time:"18:00",emoji:"🌅",activity:"Coucher de soleil",place:"Place Jemaa el-Fna",tip:"Montez sur une terrasse pour la vue",tags:["culture"]},
          {time:"20:00",emoji:"🌙",activity:"Dîner sous les étoiles",place:"Jemaa el-Fna",tip:"Les stands nocturnes sont uniques",tags:["food","nuit"]}
        ],
        jour2: [
          {time:"09:00",emoji:"🏛️",activity:"Palais Bahia",place:"Palais Bahia",tip:"Arrivez tôt avant les groupes",tags:["culture"]},
          {time:"10:30",emoji:"🪦",activity:"Tombeaux Saadiens",place:"Tombeaux Saadiens",tip:"Incontournable — réservez en ligne",tags:["culture"]},
          {time:"12:00",emoji:"🥗",activity:"Déjeuner au Mellah",place:"Mellah",tip:"Saveurs uniques du quartier",tags:["food"]},
          {time:"14:00",emoji:"🎨",activity:"Madrasa Ben Youssef",place:"Madrasa Ben Youssef",tip:"Architecture époustouflante",tags:["culture"]},
          {time:"16:00",emoji:"🛁",activity:"Hammam traditionnel",place:"Hammam El Bacha",tip:"Expérience authentique",tags:["relax"]},
          {time:"18:30",emoji:"🍷",activity:"Apéritif en rooftop",place:"Guéliz",tip:"Vue magnifique sur la ville",tags:["relax"]},
          {time:"20:30",emoji:"🌙",activity:"Dîner gastronomique",place:"Restaurant médina",tip:"La tanjia est une spécialité locale",tags:["food","nuit"]}
        ]
      }
    },
    { id:2, nom:"Casablanca", nom_en:"Casablanca", nom_ar:"الدار البيضاء", region:"Centre-Ouest", region_en:"West-Center", region_ar:"وسط الغرب", img:"images/Casablanca.jpg", maps_url:"https://maps.google.com/?q=Casablanca+Morocco", saison:"Mars — Nov", budget:"40 — 70€",
      desc_fr:"La métropole économique du Maroc. Moderne et cosmopolite, elle abrite la majestueuse mosquée Hassan II et une scène gastronomique vibrante.",
      desc_en:"Morocco's economic metropolis. Modern and cosmopolitan, home to the majestic Hassan II Mosque.",
      desc_ar:"المدينة الاقتصادية للمغرب. حديثة وكوزموبوليتانية، تضم المسجد الرائع الحسن الثاني.",
      plan: {
        jour1: [
          {time:"09:00",emoji:"🕌",activity:"Mosquée Hassan II",place:"Mosquée Hassan II",tip:"Réservez la visite guidée à l'avance",tags:["culture"]},
          {time:"11:30",emoji:"☕",activity:"Café sur la corniche",place:"Corniche",tip:"Vue magnifique sur l'Atlantique",tags:["relax"]},
          {time:"13:00",emoji:"🐟",activity:"Déjeuner fruits de mer",place:"Restaurant corniche",tip:"Poissons ultra-frais",tags:["food"]},
          {time:"15:00",emoji:"🏛️",activity:"Architecture Art Déco",place:"Centre-ville",tip:"Levez la tête — les façades sont remarquables",tags:["culture"]},
          {time:"17:00",emoji:"🛍️",activity:"Shopping Habous",place:"Quartier Habous",tip:"Meilleure adresse pour l'artisanat authentique",tags:["shopping"]},
          {time:"20:00",emoji:"🌙",activity:"Dîner gastronomique",place:"Restaurant moderne",tip:"Casa a une scène culinaire internationale",tags:["food","nuit"]}
        ],
        jour2: [
          {time:"09:00",emoji:"🎨",activity:"Villa des Arts",place:"Villa des Arts",tip:"Superbe villa Art Déco avec expositions",tags:["culture"]},
          {time:"11:00",emoji:"🏺",activity:"Médina historique",place:"Médina de Casablanca",tip:"Moins touristique — plus authentique",tags:["culture"]},
          {time:"13:00",emoji:"🍽️",activity:"Déjeuner Habous",place:"Quartier Habous",tip:"Cuisine marocaine traditionnelle",tags:["food"]},
          {time:"15:00",emoji:"🌊",activity:"Plage Ain Diab",place:"Ain Diab",tip:"Agréable en semaine — évitez le weekend",tags:["nature"]},
          {time:"18:00",emoji:"🌅",activity:"Coucher de soleil Atlantique",place:"Corniche",tip:"Magnifique depuis la corniche",tags:["nature"]},
          {time:"20:30",emoji:"🌙",activity:"Soirée Ain Diab",place:"Clubs Ain Diab",tip:"Ain Diab s'anime le soir",tags:["nuit"]}
        ]
      }
    },
    { id:3, nom:"Rabat", nom_en:"Rabat", nom_ar:"الرباط", region:"Nord-Ouest", region_en:"North-West", region_ar:"شمال الغرب", img:"images/Rabat.jpg", maps_url:"https://maps.google.com/?q=Rabat+Morocco", saison:"Avr — Oct", budget:"35 — 60€",
      desc_fr:"La capitale royale, ville d'histoire et de culture. Entre la Tour Hassan, la Kasbah des Oudayas et ses musées.",
      desc_en:"The royal capital, a city of history and culture. Between the Hassan Tower and the Kasbah of the Udayas.",
      desc_ar:"العاصمة الملكية، مدينة التاريخ والثقافة. بين صومعة حسان وقصبة الوداية.",
      plan: {
        jour1: [
          {time:"09:00",emoji:"🏛️",activity:"Tour Hassan et Mausolée",place:"Tour Hassan",tip:"Le Mausolée Mohammed V est libre d'accès",tags:["culture"]},
          {time:"11:00",emoji:"🔵",activity:"Kasbah des Oudayas",place:"Kasbah des Oudayas",tip:"Ruelles bleues parfaites pour les photos",tags:["culture"]},
          {time:"13:00",emoji:"🍽️",activity:"Déjeuner en médina",place:"Médina de Rabat",tip:"Moins chère et plus authentique",tags:["food"]},
          {time:"15:00",emoji:"🌿",activity:"Jardin botanique",place:"Jardin d'Essais",tip:"Magnifique jardin colonial",tags:["nature"]},
          {time:"17:00",emoji:"🏺",activity:"Chellah",place:"Chellah",tip:"Les cigognes dans les ruines sont fascinantes",tags:["culture","nature"]},
          {time:"20:00",emoji:"🌙",activity:"Dîner Agdal",place:"Quartier Agdal",tip:"Centre de la vie nocturne de Rabat",tags:["food","nuit"]}
        ],
        jour2: [
          {time:"09:00",emoji:"🎨",activity:"Musée Mohammed VI",place:"Musée Mohammed VI",tip:"Plus grand musée d'art contemporain d'Afrique",tags:["culture"]},
          {time:"11:30",emoji:"🏺",activity:"Musée archéologique",place:"Musée Archéologique",tip:"Les bronzes de Volubilis sont exceptionnels",tags:["culture"]},
          {time:"13:30",emoji:"🐟",activity:"Déjeuner port de Salé",place:"Port de Salé",tip:"Poisson ultra-frais de l'autre rive",tags:["food"]},
          {time:"15:30",emoji:"🌊",activity:"Plage de Rabat",place:"Plage de Rabat",tip:"Belle plage atlantique méconnue",tags:["nature"]},
          {time:"18:00",emoji:"🛍️",activity:"Médina de Salé",place:"Médina de Salé",tip:"Très authentique et peu touristique",tags:["culture","shopping"]},
          {time:"20:30",emoji:"🌙",activity:"Dîner avenue Mohammed V",place:"Avenue Mohammed V",tip:"L'avenue principale animée le soir",tags:["food","nuit"]}
        ]
      }
    },
    { id:4, nom:"Essaouira", nom_en:"Essaouira", nom_ar:"الصويرة", region:"Côte Atlantique", region_en:"Atlantic Coast", region_ar:"الساحل الأطلسي", img:"images/Essaouira.jpg", maps_url:"https://maps.google.com/?q=Essaouira+Morocco", saison:"Avr — Oct", budget:"30 — 55€",
      desc_fr:"La cité des vents, ville côtière enchanteresse aux remparts bleus et blancs. Connue pour son ambiance bohème et ses plages de surf.",
      desc_en:"The City of Winds, an enchanting coastal town with blue and white ramparts.",
      desc_ar:"مدينة الرياح، مدينة ساحلية ساحرة بأسوارها الزرقاء والبيضاء.",
      plan: {
        jour1: [
          {time:"09:00",emoji:"🌊",activity:"Promenade remparts",place:"Remparts d'Essaouira",tip:"Le matin les remparts sont quasi-déserts",tags:["nature"]},
          {time:"10:30",emoji:"🐟",activity:"Visite du port",place:"Port d'Essaouira",tip:"Les barques bleues rentrent tôt le matin",tags:["culture"]},
          {time:"12:00",emoji:"🍽️",activity:"Déjeuner poisson grillé",place:"Restaurants du port",tip:"Poisson grillé directement au port",tags:["food"]},
          {time:"14:00",emoji:"🎨",activity:"Galeries d'art médina",place:"Médina d'Essaouira",tip:"Plus de 30 galeries — ambiance bohème",tags:["culture"]},
          {time:"16:00",emoji:"🪵",activity:"Artisans thuya",place:"Souks d'Essaouira",tip:"Le bois de thuya est unique à Essaouira",tags:["shopping"]},
          {time:"18:00",emoji:"🌅",activity:"Coucher de soleil remparts",place:"Skala du Port",tip:"Le coucher de soleil depuis la skala est magique",tags:["nature"]},
          {time:"20:00",emoji:"🌙",activity:"Dîner avec musique gnaoua",place:"Restaurant médina",tip:"Certains restaurants proposent de la musique live",tags:["food","nuit"]}
        ],
        jour2: [
          {time:"09:00",emoji:"🏄",activity:"Cours de surf ou kitesurf",place:"Plage d'Essaouira",tip:"Spot de kitesurf de renommée mondiale",tags:["nature"]},
          {time:"12:00",emoji:"🥗",activity:"Déjeuner café de plage",place:"Café de la plage",tip:"Cuisine simple et fraîche en bord de plage",tags:["food"]},
          {time:"14:00",emoji:"🏝️",activity:"Vue île de Mogador",place:"Remparts face à l'île",tip:"Vue spectaculaire sur l'île",tags:["nature"]},
          {time:"15:30",emoji:"🛍️",activity:"Shopping médina",place:"Souks d'Essaouira",tip:"Bijoux argentés — meilleurs achats",tags:["shopping"]},
          {time:"17:00",emoji:"☕",activity:"Thé à la menthe",place:"Café de la médina",tip:"Prenez le temps d'observer les habitants",tags:["relax"]},
          {time:"19:30",emoji:"🌙",activity:"Dîner langouste grillée",place:"Restaurant bord de mer",tip:"La langouste est la spécialité d'Essaouira",tags:["food","nuit"]}
        ]
      }
    },
    { id:5, nom:"Agadir", nom_en:"Agadir", nom_ar:"أكادير", region:"Sud", region_en:"South", region_ar:"الجنوب", img:"images/Agadir.jpg", maps_url:"https://maps.google.com/?q=Agadir+Morocco", saison:"Toute l'année", budget:"40 — 70€",
      desc_fr:"La station balnéaire par excellence du Maroc. Avec ses 300 jours de soleil par an, sa longue plage et sa marina moderne.",
      desc_en:"Morocco's premier beach resort. With 300 days of sunshine a year.",
      desc_ar:"المنتجع الشاطئي الرائد في المغرب. مع 300 يوم مشمس في السنة.",
      plan: {
        jour1: [
          {time:"09:00",emoji:"🏖️",activity:"Plage d'Agadir",place:"Plage d'Agadir",tip:"10 km de plage — installez-vous loin du centre",tags:["nature"]},
          {time:"12:00",emoji:"🐟",activity:"Déjeuner marina",place:"Marina d'Agadir",tip:"Restaurants avec vue sur les bateaux",tags:["food"]},
          {time:"14:00",emoji:"🛍️",activity:"Souk El Had",place:"Souk El Had",tip:"Plus grand souk couvert du Maroc",tags:["shopping"]},
          {time:"16:30",emoji:"🏺",activity:"Musée amazigh",place:"Musée du Patrimoine Amazigh",tip:"Collection fascinante de bijoux berbères",tags:["culture"]},
          {time:"18:30",emoji:"🌅",activity:"Coucher de soleil marina",place:"Marina d'Agadir",tip:"Parfait pour l'apéritif",tags:["relax"]},
          {time:"20:30",emoji:"🌙",activity:"Dîner en bord de mer",place:"Restaurants marina",tip:"Poissons et grillades face à l'océan",tags:["food","nuit"]}
        ],
        jour2: [
          {time:"08:00",emoji:"🏄",activity:"Surf à Taghazout",place:"Taghazout",tip:"20 min d'Agadir — village de surf le plus cool",tags:["nature"]},
          {time:"12:00",emoji:"🍽️",activity:"Déjeuner Taghazout",place:"Café de Taghazout",tip:"Cuisine fraîche face à la mer",tags:["food"]},
          {time:"14:00",emoji:"🦜",activity:"Réserve Oued Souss",place:"Oued Souss",tip:"Flamants roses — apportez vos jumelles",tags:["nature"]},
          {time:"16:00",emoji:"🏰",activity:"Kasbah Oufella",place:"Kasbah d'Agadir Oufella",tip:"Vue panoramique sur toute la baie",tags:["culture"]},
          {time:"18:00",emoji:"🛁",activity:"Spa et hammam",place:"Spa marina",tip:"Plusieurs spas de luxe à la marina",tags:["relax"]},
          {time:"21:00",emoji:"🌙",activity:"Soirée animée",place:"Marina et front de mer",tip:"La marina est très animée le soir",tags:["nuit"]}
        ]
      }
    },
    { id:6, nom:"Tanger", nom_en:"Tangier", nom_ar:"طنجة", region:"Nord", region_en:"North", region_ar:"الشمال", img:"images/Tanger.jpg", maps_url:"https://maps.google.com/?q=Tangier+Morocco", saison:"Avr — Oct", budget:"35 — 60€",
      desc_fr:"La porte de l'Afrique, ville mythique au carrefour de l'Europe et du Maroc.",
      desc_en:"The Gateway to Africa, a mythical city at the crossroads of Europe and Morocco.",
      desc_ar:"بوابة أفريقيا، مدينة أسطورية عند تقاطع أوروبا والمغرب.",
      plan: {
        jour1: [
          {time:"09:00",emoji:"🏰",activity:"Kasbah de Tanger",place:"Kasbah de Tanger",tip:"Vue sur le détroit et l'Espagne par temps clair",tags:["culture"]},
          {time:"11:00",emoji:"🗺️",activity:"Musée de la Kasbah",place:"Musée de la Kasbah",tip:"Magnifique jardin andalou à l'intérieur",tags:["culture"]},
          {time:"13:00",emoji:"🍽️",activity:"Déjeuner médina",place:"Médina de Tanger",tip:"Restaurants authentiques et pas chers",tags:["food"]},
          {time:"15:00",emoji:"🌊",activity:"Grotte d'Hercule",place:"Grotte d'Hercule",tip:"À 14 km — ouverture en forme d'Afrique unique",tags:["nature"]},
          {time:"17:00",emoji:"🌅",activity:"Cap Spartel",place:"Cap Spartel",tip:"Rencontre Atlantique et Méditerranée — spectaculaire",tags:["nature"]},
          {time:"20:00",emoji:"🌙",activity:"Dîner Tanger moderne",place:"Boulevard Pasteur",tip:"Cœur de la vie nocturne",tags:["food","nuit"]}
        ],
        jour2: [
          {time:"09:00",emoji:"☕",activity:"Café au Grand Socco",place:"Place du Grand Socco",tip:"La place s'anime le matin avec les marchands",tags:["culture"]},
          {time:"10:30",emoji:"🛍️",activity:"Marché Petit Socco",place:"Petit Socco",tip:"Ambiance unique hors du temps",tags:["shopping"]},
          {time:"13:00",emoji:"🥗",activity:"Déjeuner vue détroit",place:"Restaurant face au détroit",tip:"Certains offrent vue sur l'Espagne",tags:["food"]},
          {time:"15:00",emoji:"🏖️",activity:"Plage Malabata",place:"Plage Malabata",tip:"Belle plage avec vue sur le détroit",tags:["nature"]},
          {time:"17:30",emoji:"🎨",activity:"Galeries artistiques",place:"Médina de Tanger",tip:"Tanger a une scène artistique très active",tags:["culture"]},
          {time:"20:00",emoji:"🌙",activity:"Dîner coucher de soleil",place:"Terrasse vue Atlantique",tip:"Coucher de soleil sur l'Atlantique inoubliable",tags:["food","nuit"]}
        ]
      }
    },
    { id:7, nom:"Fès", nom_en:"Fes", nom_ar:"فاس", region:"Fès-Meknès", region_en:"Fes-Meknes", region_ar:"فاس-مكناس", img:"images/Fes.jpg", maps_url:"https://maps.google.com/?q=Fès+Maroc", saison:"Mars — Mai", budget:"35 — 65€",
      desc_fr:"Fès est considérée comme la capitale spirituelle du Maroc. Sa médina classée au patrimoine UNESCO est l'une des plus anciennes du monde arabe.",
      desc_en:"Fes is considered Morocco's spiritual capital. Its UNESCO-listed medina is one of the oldest in the Arab world.",
      desc_ar:"تُعدّ فاس العاصمة الروحية للمغرب. مدينتها القديمة مدرجة في قائمة اليونسكو.",
      plan: {
        jour1: [
          {time:"09:00",emoji:"🚶",activity:"Médina de Fès el-Bali",place:"Bab Bou Jeloud",tip:"Engagez un guide officiel — vrai labyrinthe",tags:["culture"]},
          {time:"11:30",emoji:"🎨",activity:"Madrasa Bou Inania",place:"Madrasa Bou Inania",tip:"Zelliges parmi les plus beaux du Maroc",tags:["culture"]},
          {time:"13:00",emoji:"🍽️",activity:"Déjeuner dans un riad",place:"Restaurant riad médina",tip:"Cherchez des restaurants dans d'anciens riads",tags:["food"]},
          {time:"15:00",emoji:"🎨",activity:"Tanneries Chouara",place:"Tanneries de Fès",tip:"Montez sur une terrasse — apportez de la menthe",tags:["culture"]},
          {time:"17:00",emoji:"🏺",activity:"Musée Dar Batha",place:"Musée Dar Batha",tip:"Belle collection de céramiques fassis",tags:["culture"]},
          {time:"20:00",emoji:"🌙",activity:"Dîner palais fassi",place:"Restaurant Fès",tip:"La cuisine fassi est la plus raffinée du Maroc",tags:["food","nuit"]}
        ],
        jour2: [
          {time:"09:00",emoji:"🏰",activity:"Borj Nord panorama",place:"Borj Nord",tip:"Vue panoramique sur toute la médina",tags:["culture","nature"]},
          {time:"10:30",emoji:"🌿",activity:"Jardin Jnan Sbil",place:"Jardin Jnan Sbil",tip:"Oasis de fraîcheur à l'entrée de la médina",tags:["nature"]},
          {time:"12:00",emoji:"🥗",activity:"Déjeuner Fès el-Jdid",place:"Fès el-Jdid",tip:"Restaurants moins touristiques",tags:["food"]},
          {time:"14:00",emoji:"👑",activity:"Palais Royal",place:"Palais Royal de Fès",tip:"Les portes en bronze doré sont magnifiques",tags:["culture"]},
          {time:"16:00",emoji:"🚗",activity:"Excursion Volubilis",place:"Volubilis",tip:"Site romain exceptionnel à 60 km",tags:["culture"]},
          {time:"21:00",emoji:"🌙",activity:"Retour et dîner",place:"Médina de Fès",tip:"La médina la nuit a une atmosphère mystérieuse",tags:["food","nuit"]}
        ]
      }
    },
    { id:8, nom:"Chefchaouen", nom_en:"Chefchaouen", nom_ar:"شفشاون", region:"Tanger-Tétouan-Al Hoceïma", region_en:"Tangier-Tetouan", region_ar:"طنجة-تطوان-الحسيمة", img:"images/Chefchaouen.jpg", maps_url:"https://maps.google.com/?q=Chefchaouen+Maroc", saison:"Avr — Oct", budget:"25 — 45€",
      desc_fr:"Chefchaouen est célèbre pour ses ruelles et maisons peintes en bleu. Située dans les montagnes du Rif, elle attire pour son ambiance paisible et photogénique.",
      desc_en:"Chefchaouen is famous for its blue-painted streets and houses. Nestled in the Rif mountains.",
      desc_ar:"شفشاون مشهورة بأزقتها ومنازلها المطلية باللون الأزرق في جبال الريف.",
      plan: {
        jour1: [
          {time:"08:00",emoji:"🔵",activity:"Promenade médina bleue",place:"Quartier Bleu",tip:"Avant 9h les ruelles sont quasi-désertes",tags:["culture","nature"]},
          {time:"10:00",emoji:"🏰",activity:"Kasbah et musée",place:"Kasbah de Chefchaouen",tip:"Jardin andalou à l'intérieur",tags:["culture"]},
          {time:"13:00",emoji:"🍽️",activity:"Déjeuner Place Uta",place:"Place Uta el-Hammam",tip:"Parfaite pour observer la vie locale",tags:["food"]},
          {time:"15:00",emoji:"🥾",activity:"Randonnée Jbel El Kelaa",place:"Jbel El Kelaa",tip:"2h de marche — vue imprenable sur la ville bleue",tags:["nature"]},
          {time:"19:00",emoji:"🌅",activity:"Coucher de soleil panoramique",place:"Colline espagnole",tip:"Meilleur panorama de la ville",tags:["nature"]},
          {time:"20:30",emoji:"🌙",activity:"Dîner spécialités rifaines",place:"Restaurant médina",tip:"Goûtez le maakouda — spécialité locale",tags:["food","nuit"]}
        ],
        jour2: [
          {time:"09:00",emoji:"💦",activity:"Cascades d'Akchour",place:"Cascades d'Akchour",tip:"25 km — taxi puis 2h de randonnée",tags:["nature"]},
          {time:"13:00",emoji:"🥗",activity:"Pique-nique aux cascades",place:"Cascades d'Akchour",tip:"Emportez de la nourriture depuis Chefchaouen",tags:["food","nature"]},
          {time:"17:00",emoji:"🛍️",activity:"Shopping artisanat local",place:"Souks de Chefchaouen",tip:"Couvertures berbères — meilleurs achats",tags:["shopping"]},
          {time:"18:30",emoji:"☕",activity:"Thé et vue panoramique",place:"Café vue médina",tip:"Terrasses avec vue sur la ville bleue",tags:["relax"]},
          {time:"20:00",emoji:"🌙",activity:"Dîner d'adieu",place:"Restaurant médina",tip:"Profitez de votre dernière soirée",tags:["food","nuit"]}
        ]
      }
    },
    { id:9, nom:"Ouarzazate", nom_en:"Ouarzazate", nom_ar:"ورزازات", region:"Drâa-Tafilalet", region_en:"Draa-Tafilalet", region_ar:"درعة-تافيلالت", img:"images/Ouarzazate.jpg", maps_url:"https://maps.google.com/?q=Ouarzazate+Maroc", saison:"Mars — Mai / Sept — Nov", budget:"40 — 70€",
      desc_fr:"Ouarzazate est connue comme la porte du Sahara et un important centre cinématographique. Elle abrite de célèbres studios où plusieurs films internationaux ont été tournés.",
      desc_en:"Ouarzazate is known as the gateway to the Sahara and an important film hub.",
      desc_ar:"تُعرف ورزازات بوابة الصحراء ومركزاً سينمائياً مهماً.",
      plan: {
        jour1: [
          {time:"09:00",emoji:"🎬",activity:"Studios Atlas Corporation",place:"Studios de cinéma",tip:"Gladiator et GOT y ont été tournés",tags:["culture"]},
          {time:"11:00",emoji:"🏰",activity:"Kasbah Taourirt",place:"Kasbah Taourirt",tip:"Plus grande kasbah de la région",tags:["culture"]},
          {time:"13:00",emoji:"🍽️",activity:"Déjeuner local",place:"Restaurant Ouarzazate",tip:"Tajine d'agneau aux figues — spécialité locale",tags:["food"]},
          {time:"15:00",emoji:"🏛️",activity:"Musée du Cinéma",place:"Musée du Cinéma",tip:"Costumes de grands films — passionnant",tags:["culture"]},
          {time:"17:00",emoji:"🌅",activity:"Coucher de soleil Drâa",place:"Vallée du Drâa",tip:"Vue à couper le souffle",tags:["nature"]},
          {time:"20:00",emoji:"🌙",activity:"Dîner sous les étoiles",place:"Restaurant Ouarzazate",tip:"Ciel étoilé exceptionnel",tags:["food","nuit"]}
        ],
        jour2: [
          {time:"08:00",emoji:"🏰",activity:"Aït Ben Haddou",place:"Aït Ben Haddou",tip:"Site UNESCO à 30 km — arrivez tôt",tags:["culture"]},
          {time:"11:00",emoji:"🌴",activity:"Vallée du Drâa",place:"Vallée du Drâa",tip:"Palmeraies et ksour berbères saisissants",tags:["nature"]},
          {time:"13:30",emoji:"🍽️",activity:"Déjeuner berbère",place:"Restaurant vallée",tip:"Spécialités locales authentiques",tags:["food"]},
          {time:"15:30",emoji:"🐪",activity:"Balade en dromadaire",place:"Environs Ouarzazate",tip:"Balades d'1h aux environs",tags:["nature"]},
          {time:"20:30",emoji:"🌙",activity:"Nuit en kasbah",place:"Kasbah-hôtel",tip:"Dormez dans une vraie kasbah",tags:["nuit"]}
        ]
      }
    },
    { id:10, nom:"Merzouga", nom_en:"Merzouga", nom_ar:"مرزوكة", region:"Drâa-Tafilalet", region_en:"Draa-Tafilalet", region_ar:"درعة-تافيلالت", img:"images/Merzouga.jpg", maps_url:"https://maps.google.com/?q=Merzouga+Maroc", saison:"Oct — Avr", budget:"45 — 80€",
      desc_fr:"Merzouga est un petit village réputé pour les impressionnantes dunes de l'Erg Chebbi. Les visiteurs viennent y vivre des expériences dans le désert.",
      desc_en:"Merzouga is famous for the impressive Erg Chebbi dunes. Visitors come to experience the desert.",
      desc_ar:"مرزوكة مشهورة بكثبان إرق الشبي الرائعة.",
      plan: {
        jour1: [
          {time:"16:00",emoji:"🐪",activity:"Balade chameau coucher de soleil",place:"Erg Chebbi",tip:"Partez à 16h pour le coucher de soleil",tags:["nature"]},
          {time:"18:30",emoji:"🌅",activity:"Coucher de soleil sur les dunes",place:"Dunes de l'Erg Chebbi",tip:"Un des plus spectaculaires au monde",tags:["nature"]},
          {time:"20:00",emoji:"🔥",activity:"Soirée musicale au bivouac",place:"Bivouac dans le désert",tip:"Musique gnaoua autour du feu",tags:["culture","nuit"]},
          {time:"22:00",emoji:"⭐",activity:"Observation des étoiles",place:"Désert du Sahara",tip:"Ciel étoilé exceptionnel sans pollution",tags:["nature","nuit"]}
        ],
        jour2: [
          {time:"06:00",emoji:"🌅",activity:"Lever de soleil sur les dunes",place:"Dunes de l'Erg Chebbi",tip:"Réveillez-vous avant le soleil",tags:["nature"]},
          {time:"08:00",emoji:"🍳",activity:"Petit-déjeuner berbère",place:"Bivouac",tip:"Simple et délicieux",tags:["food"]},
          {time:"10:00",emoji:"🏜️",activity:"Balade dans les dunes",place:"Erg Chebbi",tip:"Montez au sommet pour la vue panoramique",tags:["nature"]},
          {time:"12:30",emoji:"🍽️",activity:"Déjeuner au village",place:"Village de Merzouga",tip:"Spécialités sahariennes authentiques",tags:["food"]},
          {time:"14:30",emoji:"🦜",activity:"Lac Dayet Srji",place:"Lac Dayet Srji",tip:"Flamants roses — apportez des jumelles",tags:["nature"]},
          {time:"19:00",emoji:"🌙",activity:"Retour et dîner",place:"Merzouga",tip:"La nuit dans le désert est froide",tags:["food","nuit"]}
        ]
      }
    },
    { id:11, nom:"Ifrane", nom_en:"Ifrane", nom_ar:"إفران", region:"Fès-Meknès", region_en:"Fes-Meknes", region_ar:"فاس-مكناس", img:"images/Ifrane.jpg", maps_url:"https://maps.google.com/?q=Ifrane+Maroc", saison:"Juin — Sept / Déc — Fév", budget:"30 — 55€",
      desc_fr:"Ifrane est surnommée la petite Suisse du Maroc grâce à son architecture européenne et son climat frais. Connue pour sa propreté et ses paysages montagneux.",
      desc_en:"Ifrane is nicknamed Morocco's little Switzerland for its European architecture and cool climate.",
      desc_ar:"تُلقَّب إفران بسويسرا المغرب الصغيرة بفضل طرازها المعماري الأوروبي.",
      plan: {
        jour1: [
          {time:"09:00",emoji:"🌲",activity:"Forêt de cèdres",place:"Forêt de cèdres d'Ifrane",tip:"Singes magots en liberté — ne pas les nourrir",tags:["nature"]},
          {time:"11:00",emoji:"🦁",activity:"Lion d'Ifrane",place:"Centre-ville Ifrane",tip:"Symbole de la ville",tags:["culture"]},
          {time:"13:00",emoji:"🍽️",activity:"Déjeuner atypique",place:"Restaurant Ifrane",tip:"Cuisine européenne — unique au Maroc",tags:["food"]},
          {time:"15:00",emoji:"🏔️",activity:"Lac Dayet Aoua",place:"Lac Dayet Aoua",tip:"Magnifique lac de montagne",tags:["nature"]},
          {time:"17:30",emoji:"🌿",activity:"Parc national",place:"Parc National d'Ifrane",tip:"Cerfs de Barbarie rarissimes",tags:["nature"]},
          {time:"20:00",emoji:"🌙",activity:"Soirée montagnarde",place:"Ifrane",tip:"En hiver ambiance magique sous la neige",tags:["nuit"]}
        ],
        jour2: [
          {time:"09:00",emoji:"⛷️",activity:"Ski Michlifen (hiver) / Randonnée (été)",place:"Michlifen ou sentiers",tip:"Unique station de ski fonctionnelle du Maroc",tags:["nature"]},
          {time:"13:00",emoji:"🍽️",activity:"Déjeuner à Azrou",place:"Azrou",tip:"Marché berbère animé dans la ville voisine",tags:["food","culture"]},
          {time:"15:00",emoji:"🌳",activity:"Cèdre Gouraud",place:"Forêt d'Azrou",tip:"Plus vieux cèdre du Maroc — 800 ans",tags:["nature"]},
          {time:"17:00",emoji:"🌄",activity:"Panorama montagneux",place:"Route des lacs",tip:"Paysages splendides entre Ifrane et Azrou",tags:["nature"]},
          {time:"19:30",emoji:"🌙",activity:"Dîner et repos",place:"Ifrane",tip:"L'air frais de montagne favorise un bon sommeil",tags:["food","nuit"]}
        ]
      }
    },
    { id:12, nom:"Taghazout", nom_en:"Taghazout", nom_ar:"تغاوت", region:"Souss-Massa", region_en:"Souss-Massa", region_ar:"سوس-ماسة", img:"images/Taghazout.jpg", maps_url:"https://maps.google.com/?q=Taghazout+Maroc", saison:"Oct — Avr (surf) / Toute l'année", budget:"25 — 50€",
      desc_fr:"Taghazout est un village côtier réputé pour ses spots de surf et son ambiance détendue. Situé au nord d'Agadir, il attire des voyageurs du monde entier.",
      desc_en:"Taghazout is a coastal village famous for its surf spots and laid-back vibe.",
      desc_ar:"تغاوت قرية ساحلية مشهورة بمواقع ركوب الأمواج وأجوائها المريحة.",
      plan: {
        jour1: [
          {time:"07:00",emoji:"🏄",activity:"Session surf matinale",place:"Anchor Point",tip:"Les meilleures vagues sont tôt le matin",tags:["nature"]},
          {time:"10:00",emoji:"☕",activity:"Petit-déjeuner café surf",place:"Café de Taghazout",tip:"Petits-déjeuners sains et énergisants",tags:["food"]},
          {time:"13:30",emoji:"🥗",activity:"Déjeuner healthy",place:"Restaurant Taghazout",tip:"Nombreux restaurants healthy pour surfeurs",tags:["food"]},
          {time:"15:00",emoji:"🏄",activity:"Session surf après-midi",place:"Spot Panoramas",tip:"Excellent pour les intermédiaires",tags:["nature"]},
          {time:"18:00",emoji:"🌅",activity:"Coucher de soleil atlantique",place:"Falaises de Taghazout",tip:"Spectaculaire depuis les falaises",tags:["nature"]},
          {time:"20:00",emoji:"🌙",activity:"Soirée détendue",place:"Village de Taghazout",tip:"Ambiance très relax et bohème",tags:["relax","nuit"]}
        ],
        jour2: [
          {time:"08:00",emoji:"🧘",activity:"Yoga au lever du soleil",place:"Plage de Taghazout",tip:"Sessions matinales face à la mer",tags:["relax"]},
          {time:"10:00",emoji:"🚶",activity:"Village d'Aourir",place:"Village d'Aourir",tip:"Marché aux bananes unique et authentique",tags:["culture"]},
          {time:"12:00",emoji:"🐟",activity:"Déjeuner poisson frais",place:"Restaurant Aourir",tip:"Poisson pêché le matin même",tags:["food"]},
          {time:"14:00",emoji:"🏄",activity:"Cours de surf",place:"École de surf Taghazout",tip:"Tous niveaux — à partir de 30€",tags:["nature"]},
          {time:"17:00",emoji:"🧖",activity:"Massage et spa",place:"Centre bien-être",tip:"Excellents centres de bien-être après le surf",tags:["relax"]},
          {time:"19:30",emoji:"🌙",activity:"Feu de camp sur la plage",place:"Plage de Taghazout",tip:"Certains cafés organisent des soirées",tags:["nuit"]}
        ]
      }
    }
  ],

  lieux: [
    { id:1, nom:"Jemaa el-Fna", nom_en:"Jemaa el-Fna", nom_ar:"جامع الفنا", ville:"Marrakech", cat:"Place", img:"images/PLACE_JEMAA_EL_FNA.jpg", maps_url:"https://maps.google.com/?q=Jemaa+el+Fna+Marrakech", desc_fr:"La place mythique de Marrakech classée au patrimoine UNESCO. Le jour des vendeurs de jus d'orange la nuit des conteurs et musiciens.", desc_en:"Marrakech's mythical square UNESCO-listed.", desc_ar:"الميدان الأسطوري لمراكش." },
    { id:2, nom:"Jardin Majorelle", nom_en:"Majorelle Garden", nom_ar:"حديقة ماجوريل", ville:"Marrakech", cat:"Jardin", img:"images/le-jardin-majorelle.jpg", maps_url:"https://maps.google.com/?q=Jardin+Majorelle+Marrakech", desc_fr:"Oasis de verdure créée par Jacques Majorelle et sauvée par Yves Saint Laurent.", desc_en:"Green oasis created by Jacques Majorelle and saved by Yves Saint Laurent.", desc_ar:"واحة خضراء أنشأها جاك ماجوريل." },
    { id:3, nom:"Mosquée Hassan II", nom_en:"Hassan II Mosque", nom_ar:"مسجد الحسن الثاني", ville:"Casablanca", cat:"Monument", img:"images/Mosquée Hassan II.png", maps_url:"https://maps.google.com/?q=Hassan+II+Mosque+Casablanca", desc_fr:"La 3e plus grande mosquée du monde chef-d'œuvre de l'architecture marocaine moderne.", desc_en:"The 3rd largest mosque in the world.", desc_ar:"ثالث أكبر مسجد في العالم." },
    { id:4, nom:"Kasbah des Oudayas", nom_en:"Kasbah of the Udayas", nom_ar:"قصبة الوداية", ville:"Rabat", cat:"Patrimoine", img:"images/Kasbah_Oudayas.jpg", maps_url:"https://maps.google.com/?q=Kasbah+Oudayas+Rabat", desc_fr:"Forteresse du 12e siècle aux ruelles bleues et blanches.", desc_en:"12th-century fortress with blue and white alleys.", desc_ar:"قلعة من القرن الثاني عشر." },
    { id:5, nom:"Remparts d'Essaouira", nom_en:"Essaouira Ramparts", nom_ar:"أسوار الصويرة", ville:"Essaouira", cat:"Patrimoine", img:"images/remparts-essaouira.jpg", maps_url:"https://maps.google.com/?q=Essaouira+Ramparts", desc_fr:"Les célèbres remparts portugais du 18e siècle qui surplombent l'Atlantique.", desc_en:"The famous 18th-century Portuguese ramparts.", desc_ar:"الأسوار البرتغالية الشهيرة." },
    { id:6, nom:"Marina d'Agadir", nom_en:"Agadir Marina", nom_ar:"مارينا أكادير", ville:"Agadir", cat:"Loisirs", img:"images/Marina Agadir.jpg", maps_url:"https://maps.google.com/?q=Agadir+Marina", desc_fr:"Le cœur moderne d'Agadir avec ses restaurants boutiques et bateaux.", desc_en:"The modern heart of Agadir.", desc_ar:"قلب أكادير الحديث." },
    { id:7, nom:"Grotte d'Hercule", nom_en:"Cave of Hercules", nom_ar:"كهف هرقل", ville:"Tanger", cat:"Nature", img:"images/Grotte_Hercule_Tanger.jpg", maps_url:"https://maps.google.com/?q=Cave+of+Hercules+Tangier", desc_fr:"Grotte naturelle spectaculaire à 14 km de Tanger.", desc_en:"Spectacular natural cave 14 km from Tangier.", desc_ar:"كهف طبيعي رائع على بعد 14 كم من طنجة." },
    { id:8, nom:"Médina de Fès", nom_en:"Fes Medina", nom_ar:"مدينة فاس القديمة", ville:"Fès", cat:"Médina", img:"images/Medina_Fes.jpg", maps_url:"https://maps.google.com/?q=Medina+Fes", desc_fr:"La plus grande médina médiévale du monde arabe classée au patrimoine UNESCO.", desc_en:"The largest medieval medina in the Arab world UNESCO-listed.", desc_ar:"أكبر مدينة قديمة في العالم العربي." },
    { id:9, nom:"Quartier Bleu Chefchaouen", nom_en:"Blue Quarter", nom_ar:"الحي الأزرق", ville:"Chefchaouen", cat:"Médina", img:"images/Chefchaouen.jpg", maps_url:"https://maps.google.com/?q=Blue+Quarter+Chefchaouen", desc_fr:"Le cœur de Chefchaouen avec ses ruelles peintes en bleu et blanc.", desc_en:"The heart of Chefchaouen with its blue and white alleys.", desc_ar:"قلب شفشاون بأزقتها الزرقاء والبيضاء." },
    { id:10, nom:"Aït Ben Haddou", nom_en:"Aït Ben Haddou", nom_ar:"آيت بنحدو", ville:"Ouarzazate", cat:"Patrimoine", img:"images/Ait_Ben_Haddou.jpg", maps_url:"https://maps.google.com/?q=Ait+Ben+Haddou+Ouarzazate", desc_fr:"Ksar fortifié classé au patrimoine UNESCO à 30 km d'Ouarzazate.", desc_en:"UNESCO-listed fortified ksar 30 km from Ouarzazate.", desc_ar:"قصر محصن مدرج في التراث العالمي." },
    { id:11, nom:"Dunes de l'Erg Chebbi", nom_en:"Erg Chebbi Dunes", nom_ar:"كثبان إرق الشبي", ville:"Merzouga", cat:"Nature", img:"images/Merzouga.jpg", maps_url:"https://maps.google.com/?q=Erg+Chebbi+Merzouga", desc_fr:"Les plus grandes dunes de sable du Maroc atteignant 150 mètres.", desc_en:"Morocco's largest sand dunes reaching 150 metres.", desc_ar:"أكبر كثبان رملية في المغرب تصل إلى 150 متراً." },
    { id:12, nom:"Forêt de cèdres", nom_en:"Cedar Forest", nom_ar:"غابة الأرز", ville:"Ifrane", cat:"Nature", img:"images/Ifrane.jpg", maps_url:"https://maps.google.com/?q=Cedar+Forest+Ifrane", desc_fr:"La plus grande cédraie du Maroc avec des arbres millénaires et des singes magots.", desc_en:"Morocco's largest cedar forest with millennium-old trees.", desc_ar:"أكبر غابة أرز في المغرب." },
    { id:13, nom:"Anchor Point", nom_en:"Anchor Point", nom_ar:"نقطة الارتكاز", ville:"Taghazout", cat:"Surf", img:"images/Taghazout.jpg", maps_url:"https://maps.google.com/?q=Anchor+Point+Taghazout", desc_fr:"L'un des meilleurs spots de surf d'Afrique avec des vagues de droite parfaites.", desc_en:"One of Africa's best surf spots.", desc_ar:"أحد أفضل مواقع ركوب الأمواج في أفريقيا." },
    { id:14, nom:"Tour Hassan", nom_en:"Hassan Tower", nom_ar:"صومعة حسان", ville:"Rabat", cat:"Monument", img:"images/Tour Hassan.jpg", maps_url:"https://maps.google.com/?q=Hassan+Tower+Rabat", desc_fr:"Minaret inachevé du 12e siècle symbole de Rabat.", desc_en:"Unfinished 12th-century minaret symbol of Rabat.", desc_ar:"صومعة غير مكتملة رمز الرباط." },
    { id:15, nom:"Chellah", nom_en:"Chellah", nom_ar:"شالة", ville:"Rabat", cat:"Patrimoine", img:"images/Chellah.jpeg", maps_url:"https://maps.google.com/?q=Chellah+Rabat", desc_fr:"Nécropole romaine et mérinide peuplée de cigognes.", desc_en:"Roman and Merinid necropolis populated by storks.", desc_ar:"مقبرة رومانية ومرينية تسكنها اللقالق." },
    { id:16, nom:"Souk de Marrakech", nom_en:"Marrakech Souk", nom_ar:"سوق مراكش", ville:"Marrakech", cat:"Marché", img:"images/Souk de Marrakech.jpg", maps_url:"https://maps.google.com/?q=Souk+Marrakech", desc_fr:"Le plus grand souk du Maroc épices cuir tapis bijoux poterie.", desc_en:"Morocco's largest souk.", desc_ar:"أكبر سوق في المغرب." },
    { id:17, nom:"Plage d'Agadir", nom_en:"Agadir Beach", nom_ar:"شاطئ أكادير", ville:"Agadir", cat:"Plage", img:"images/Plage Agadir.jpeg", maps_url:"https://maps.google.com/?q=Agadir+Beach", desc_fr:"10 km de sable fin protégé du vent par une baie naturelle.", desc_en:"10 km of fine sand sheltered by a natural bay.", desc_ar:"10 كم من الرمال الناعمة." },
    { id:18, nom:"Tanneries de Fès", nom_en:"Fes Tanneries", nom_ar:"مدابغ فاس", ville:"Fès", cat:"Artisanat", img:"images/Tanneries_Fes.jpg", maps_url:"https://maps.google.com/?q=Tanneries+Fes", desc_fr:"Les célèbres tanneries Chouara où les artisans teintent le cuir depuis le Moyen Âge.", desc_en:"The famous Chouara tanneries where craftsmen dye leather.", desc_ar:"مدابغ الشوارة الشهيرة." },
    { id:19, nom:"Kasbah Taourirt", nom_en:"Kasbah Taourirt", nom_ar:"قصبة تاوريرت", ville:"Ouarzazate", cat:"Kasbah", img:"images/Ouarzazate.jpg", maps_url:"https://maps.google.com/?q=Kasbah+Taourirt+Ouarzazate", desc_fr:"La plus grande kasbah d'Ouarzazate et l'une des mieux préservées du Maroc.", desc_en:"The largest kasbah in Ouarzazate.", desc_ar:"أكبر قصبة في ورزازات." },
    { id:20, nom:"Cascades d'Akchour", nom_en:"Akchour Waterfalls", nom_ar:"شلالات أقشور", ville:"Chefchaouen", cat:"Nature", img:"images/Chefchaouen.jpg", maps_url:"https://maps.google.com/?q=Akchour+Waterfalls+Chefchaouen", desc_fr:"Magnifiques cascades à 25 km de Chefchaouen accessibles après une randonnée.", desc_en:"Magnificent waterfalls 25 km from Chefchaouen.", desc_ar:"شلالات رائعة تبعد 25 كم عن شفشاون." }
  ],

  gastronomie: [
    { id:1, nom:"Tajine", nom_en:"Tajine", nom_ar:"الطاجين", type:"Plat principal", prix:"5-12€", img:"https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80", desc_fr:"Le plat emblématique du Maroc cuit lentement dans un plat en terre cuite conique.", desc_en:"Morocco's emblematic dish slow-cooked in a conical earthenware pot.", desc_ar:"الطبق الرمزي للمغرب." },
    { id:2, nom:"Couscous", nom_en:"Couscous", nom_ar:"الكسكس", type:"Plat principal", prix:"6-15€", img:"https://images.unsplash.com/photo-1563379091339-03246963d29f?w=400&q=80", desc_fr:"Le plat du vendredi par excellence servi en famille.", desc_en:"The quintessential Friday dish served with family.", desc_ar:"طبق الجمعة بامتياز." },
    { id:3, nom:"Pastilla", nom_en:"Pastilla", nom_ar:"البسطيلة", type:"Entrée", prix:"4-10€", img:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80", desc_fr:"Feuilleté sucré-salé farci de poulet amandes et cannelle.", desc_en:"Sweet-savoury pastry stuffed with chicken almonds and cinnamon.", desc_ar:"فطيرة حلوة ومالحة بالدجاج واللوز." },
    { id:4, nom:"Harira", nom_en:"Harira", nom_ar:"الحريرة", type:"Soupe", prix:"1-3€", img:"https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80", desc_fr:"Soupe épaisse de tomates lentilles et pois chiches.", desc_en:"Thick soup of tomatoes lentils and chickpeas.", desc_ar:"حساء كثيف بالطماطم والعدس." },
    { id:5, nom:"Msemen", nom_en:"Msemen", nom_ar:"المسمن", type:"Petit-déjeuner", prix:"0.5-2€", img:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80", desc_fr:"Crêpe feuilletée marocaine servie avec du miel et du beurre.", desc_en:"Moroccan layered flatbread with honey and butter.", desc_ar:"خبز مغربي طبقي مع العسل والزبدة." },
    { id:6, nom:"Thé à la menthe", nom_en:"Mint Tea", nom_ar:"أتاي", type:"Boisson", prix:"0.5-2€", img:"https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80", desc_fr:"Rituel d'hospitalité marocain versé de haut pour créer de la mousse.", desc_en:"Moroccan hospitality ritual.", desc_ar:"طقس الضيافة المغربي." },
    { id:7, nom:"Mechoui", nom_en:"Mechoui", nom_ar:"المشوي", type:"Plat principal", prix:"8-20€", img:"https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80", desc_fr:"Agneau entier rôti lentement dans un four traditionnel.", desc_en:"Whole lamb slowly roasted in a traditional oven.", desc_ar:"خروف كامل يُشوى في فرن تقليدي." },
    { id:8, nom:"Briouates", nom_en:"Briouates", nom_ar:"البريوات", type:"Entrée", prix:"2-5€", img:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80", desc_fr:"Triangles de pâte filo farcis de viande épicée ou amandes au miel.", desc_en:"Filo pastry triangles filled with spiced meat or honey almonds.", desc_ar:"مثلثات من عجينة الفيلو محشوة." },
    { id:9, nom:"Sardines grillées", nom_en:"Grilled Sardines", nom_ar:"السردين المشوي", type:"Plat principal", prix:"3-8€", img:"https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80", desc_fr:"Spécialité des villes côtières pêchées le matin grillées le midi.", desc_en:"Speciality of coastal cities.", desc_ar:"تخصص المدن الساحلية." },
    { id:10, nom:"Chebakia", nom_en:"Chebakia", nom_ar:"الشباكية", type:"Dessert", prix:"1-3€", img:"https://images.unsplash.com/photo-1563379091339-03246963d29f?w=400&q=80", desc_fr:"Pâtisserie en forme de fleur trempée dans du miel.", desc_en:"Flower-shaped pastry dipped in honey.", desc_ar:"حلوى على شكل زهرة مغموسة في العسل." },
    { id:11, nom:"Rfissa", nom_en:"Rfissa", nom_ar:"الرفيسة", type:"Plat principal", prix:"5-12€", img:"https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80", desc_fr:"Msemen émietté avec poulet lentilles et fenugrec.", desc_en:"Crumbled msemen with chicken lentils and fenugreek.", desc_ar:"مسمن مفتت مع الدجاج والعدس." },
    { id:12, nom:"Tanjia", nom_en:"Tanjia", nom_ar:"التنجية", type:"Plat principal", prix:"6-14€", img:"https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80", desc_fr:"Spécialité de Marrakech viande cuite dans une amphore dans les braises.", desc_en:"Marrakech speciality meat cooked in a clay amphora.", desc_ar:"تخصص مراكش لحم يُطهى في جرة طينية." },
    { id:13, nom:"Bastilla au lait", nom_en:"Milk Bastilla", nom_ar:"بسطيلة بالحليب", type:"Dessert", prix:"3-7€", img:"https://images.unsplash.com/photo-1563379091339-03246963d29f?w=400&q=80", desc_fr:"Brick croustillant garni de crème amandes et cannelle.", desc_en:"Crispy brick pastry with cream almonds and cinnamon.", desc_ar:"بريك مقرمش بكريمة واللوز." },
    { id:14, nom:"Khobz", nom_en:"Moroccan Bread", nom_ar:"الخبز", type:"Accompagnement", prix:"0.2-0.5€", img:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80", desc_fr:"Pain rond marocain cuit au four traditionnel.", desc_en:"Round Moroccan bread baked in a traditional oven.", desc_ar:"خبز مغربي مستدير في فرن تقليدي." },
    { id:15, nom:"Zaalouk", nom_en:"Zaalouk", nom_ar:"الزعلوك", type:"Entrée", prix:"2-4€", img:"https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80", desc_fr:"Salade d'aubergines et tomates grillées assaisonnée d'ail et cumin.", desc_en:"Warm salad of grilled eggplant and tomatoes.", desc_ar:"سلطة الباذنجان والطماطم المشوية." }
  ],

  evenements: [
    { id:1, nom:"Festival Gnaoua", nom_en:"Gnaoua Festival", nom_ar:"مهرجان كناوة", ville:"Essaouira", periode:"Juin", jour:"15", emoji:"🎵", desc_fr:"Festival mondial de musique Gnaoua à Essaouira. Des dizaines de scènes gratuites pendant 4 jours.", desc_en:"World festival of Gnaoua music in Essaouira.", desc_ar:"مهرجان موسيقى كناوة العالمي." },
    { id:2, nom:"Ramadan au Maroc", nom_en:"Ramadan in Morocco", nom_ar:"رمضان في المغرب", ville:"Tout le Maroc", periode:"Variable", jour:"01", emoji:"🌙", desc_fr:"Le mois sacré transforme le Maroc : journées calmes nuits festives.", desc_en:"The holy month transforms Morocco.", desc_ar:"الشهر المقدس يحوّل المغرب." },
    { id:3, nom:"Festival Film Marrakech", nom_en:"Marrakech Film Festival", nom_ar:"مهرجان مراكش للفيلم", ville:"Marrakech", periode:"Décembre", jour:"01", emoji:"🎬", desc_fr:"L'un des plus grands festivals de cinéma d'Afrique.", desc_en:"One of Africa's largest film festivals.", desc_ar:"أحد أكبر مهرجانات السينما في أفريقيا." },
    { id:4, nom:"Fête du Trône", nom_en:"Throne Day", nom_ar:"عيد العرش", ville:"Tout le Maroc", periode:"Juillet", jour:"30", emoji:"👑", desc_fr:"Célébration nationale du 30 juillet.", desc_en:"National celebration on July 30th.", desc_ar:"احتفال وطني في 30 يوليو." },
    { id:5, nom:"Marathon des Sables", nom_en:"Marathon des Sables", nom_ar:"ماراثون الرمال", ville:"Sahara Sud", periode:"Avril", jour:"10", emoji:"🏃", desc_fr:"250 km en 6 jours dans le Sahara marocain.", desc_en:"250 km in 6 days through the Sahara.", desc_ar:"250 كم في 6 أيام عبر الصحراء." },
    { id:6, nom:"Moussem de Tan-Tan", nom_en:"Tan-Tan Moussem", nom_ar:"موسم طانطان", ville:"Tan-Tan", periode:"Avril", jour:"20", emoji:"🐪", desc_fr:"Grand rassemblement de tribus nomades sahariennes UNESCO.", desc_en:"Grand gathering of Saharan nomadic tribes UNESCO-listed.", desc_ar:"تجمع القبائل الصحراوية الرحالة." },
    { id:7, nom:"Festival des Roses", nom_en:"Rose Festival", nom_ar:"مهرجان الورود", ville:"Kelaat M'Gouna", periode:"Mai", jour:"10", emoji:"🌹", desc_fr:"Festival célébrant la récolte des roses dans la vallée du Dadès.", desc_en:"Festival celebrating the rose harvest.", desc_ar:"مهرجان حصاد الورود." },
    { id:8, nom:"Festival Timitar", nom_en:"Timitar Festival", nom_ar:"مهرجان تيميتار", ville:"Agadir", periode:"Juillet", jour:"05", emoji:"🎶", desc_fr:"Grand festival de musiques amazighes et du monde à Agadir.", desc_en:"Major Amazigh and world music festival.", desc_ar:"مهرجان الموسيقى الأمازيغية والعالمية." },
    { id:9, nom:"Moussem Moulay Idriss", nom_en:"Moulay Idriss Moussem", nom_ar:"موسم مولاي إدريس", ville:"Moulay Idriss Zerhoun", periode:"Août", jour:"15", emoji:"🕌", desc_fr:"Pèlerinage religieux annuel à la ville sainte de Moulay Idriss.", desc_en:"Annual religious pilgrimage to the holy city.", desc_ar:"حج ديني سنوي إلى مدينة مولاي إدريس المقدسة." },
    { id:10, nom:"Eid al-Adha", nom_en:"Eid al-Adha", nom_ar:"عيد الأضحى", ville:"Tout le Maroc", periode:"Variable", jour:"01", emoji:"🐑", desc_fr:"Fête du sacrifice l'une des plus importantes du calendrier islamique.", desc_en:"Feast of Sacrifice.", desc_ar:"عيد الأضحى." }
  ],

  conseils: [
    { id:1, icon:"💰", titre:"Monnaie", titre_en:"Currency", titre_ar:"العملة", cat:"Argent", importance:"Essentiel", desc_fr:"La monnaie est le Dirham (MAD). 1€ = 10.8 MAD. Négocier dans les souks est normal.", desc_en:"The currency is the Dirham (MAD). €1 = 10.8 MAD.", desc_ar:"العملة هي الدرهم المغربي." },
    { id:2, icon:"🌤️", titre:"Meilleure période", titre_en:"Best Season", titre_ar:"أفضل موسم", cat:"Météo", importance:"Essentiel", desc_fr:"Mars-Mai et Sept-Nov sont les meilleures périodes. Évitez Juillet-Août.", desc_en:"March-May and Sept-Nov are the best periods.", desc_ar:"مارس-مايو وسبتمبر-نوفمبر هي أفضل الفترات." },
    { id:3, icon:"🚌", titre:"Transport", titre_en:"Transport", titre_ar:"النقل", cat:"Mobilité", importance:"Essentiel", desc_fr:"Le train CTM relie Tanger Rabat Casablanca et Marrakech.", desc_en:"CTM train links Tangier Rabat Casablanca and Marrakech.", desc_ar:"قطار CTM يربط المدن الرئيسية." },
    { id:4, icon:"👗", titre:"Tenue vestimentaire", titre_en:"Dress Code", titre_ar:"اللباس", cat:"Culture", importance:"Important", desc_fr:"Épaules et genoux couverts dans les médinas. Tenues occidentales sur les plages.", desc_en:"Shoulders and knees covered in medinas.", desc_ar:"تغطية الكتفين والركبتين في المدن." },
    { id:5, icon:"🔒", titre:"Sécurité", titre_en:"Safety", titre_ar:"الأمان", cat:"Sécurité", importance:"Important", desc_fr:"Le Maroc est très sûr. Méfiez-vous des faux guides. Utilisez des taxis officiels.", desc_en:"Morocco is very safe. Beware of fake guides.", desc_ar:"المغرب آمن جداً." },
    { id:6, icon:"🗣️", titre:"Langue", titre_en:"Language", titre_ar:"اللغة", cat:"Communication", importance:"Utile", desc_fr:"Darija et français sont les langues du quotidien.", desc_en:"Darija and French are everyday languages.", desc_ar:"الدارجة والفرنسية لغات يومية." },
    { id:7, icon:"🍽️", titre:"Nourriture et Eau", titre_en:"Food and Water", titre_ar:"الطعام والماء", cat:"Santé", importance:"Important", desc_fr:"Buvez de l'eau en bouteille. La nourriture de rue est délicieuse.", desc_en:"Drink bottled water. Street food is delicious.", desc_ar:"اشرب الماء المعبأ." },
    { id:8, icon:"📶", titre:"Wifi et SIM", titre_en:"Wifi and SIM", titre_ar:"الواي فاي", cat:"Connectivité", importance:"Utile", desc_fr:"SIM locales Maroc Telecom Orange ou Inwi à moins de 5€.", desc_en:"Local SIMs for under €5 with data.", desc_ar:"شرائح محلية بأقل من 5 يورو." }
  ],

  urgences: [
    { id:1, ville:"Marrakech", hopital:"Hôpital Ibn Tofail", hopital_tel:"+212 524 448 811", hopital_maps:"https://maps.google.com/?q=Hopital+Ibn+Tofail+Marrakech" },
    { id:2, ville:"Casablanca", hopital:"CHU Ibn Rochd", hopital_tel:"+212 522 225 325", hopital_maps:"https://maps.google.com/?q=CHU+Ibn+Rochd+Casablanca" },
    { id:3, ville:"Rabat", hopital:"Hôpital Ibn Sina", hopital_tel:"+212 537 672 871", hopital_maps:"https://maps.google.com/?q=Hopital+Ibn+Sina+Rabat" },
    { id:4, ville:"Agadir", hopital:"Hôpital Hassan II", hopital_tel:"+212 528 211 477", hopital_maps:"https://maps.google.com/?q=Hopital+Hassan+II+Agadir" },
    { id:5, ville:"Tanger", hopital:"Hôpital Mohammed V", hopital_tel:"+212 539 932 444", hopital_maps:"https://maps.google.com/?q=Hopital+Mohammed+V+Tanger" },
    { id:6, ville:"Essaouira", hopital:"Hôpital Sidi Mohammed Ben Abdallah", hopital_tel:"+212 524 475 716", hopital_maps:"https://maps.google.com/?q=Hopital+Essaouira" },
    { id:7, ville:"Fès", hopital:"CHU Hassan II de Fès", hopital_tel:"+212 535 612 222", hopital_maps:"https://maps.google.com/?q=CHU+Hassan+II+Fes" },
    { id:8, ville:"Chefchaouen", hopital:"Hôpital Mohammed V Chefchaouen", hopital_tel:"+212 539 986 228", hopital_maps:"https://maps.google.com/?q=Hopital+Chefchaouen" },
    { id:9, ville:"Ouarzazate", hopital:"Hôpital Boulmane Dadès", hopital_tel:"+212 524 882 444", hopital_maps:"https://maps.google.com/?q=Hopital+Ouarzazate" },
    { id:10, ville:"Merzouga", hopital:"Centre de Santé (urgences à Errachidia)", hopital_tel:"+212 535 572 444", hopital_maps:"https://maps.google.com/?q=Hopital+Errachidia" },
    { id:11, ville:"Ifrane", hopital:"Hôpital My Abdallah Ifrane", hopital_tel:"+212 535 566 604", hopital_maps:"https://maps.google.com/?q=Hopital+Ifrane" },
    { id:12, ville:"Taghazout", hopital:"Clinique Agadir (15 km)", hopital_tel:"+212 528 211 477", hopital_maps:"https://maps.google.com/?q=Hopital+Hassan+II+Agadir" }
  ],

  transport: [
    { id:1, icon:"🚂", type:"Train", nom:"ONCF Train national", nom_en:"ONCF National Train", nom_ar:"القطار الوطني", route:"Tanger → Rabat → Casa → Marrakech", prix:"5-15€", duree:"2h30 Casa-Marrakech", site:"https://oncf.ma", desc_fr:"Réseau ferroviaire national confortable ponctuel et abordable.", desc_en:"National rail network comfortable and affordable.", desc_ar:"شبكة السكك الحديدية الوطنية." },
    { id:2, icon:"🚌", type:"Bus", nom:"CTM Bus longue distance", nom_en:"CTM Long distance bus", nom_ar:"حافلة CTM", route:"Toutes villes + Essaouira + Agadir", prix:"3-12€", duree:"Variable", site:"https://ctm.ma", desc_fr:"Opérateur de bus le plus fiable du Maroc. Climatisé et ponctuel.", desc_en:"Morocco's most reliable bus operator.", desc_ar:"أكثر شركة حافلات موثوقية في المغرب." },
    { id:3, icon:"🚕", type:"Taxi", nom:"Petit taxi Ville", nom_en:"Small taxi City", nom_ar:"طاكسي صغير", route:"À l'intérieur de chaque ville", prix:"1-5€", duree:"Selon trajet", site:"", desc_fr:"Trajets urbains uniquement. Activez toujours le compteur.", desc_en:"City trips only. Always turn on the meter.", desc_ar:"رحلات داخل المدينة. شغّل العداد دائماً." },
    { id:4, icon:"🚙", type:"Taxi", nom:"Grand taxi Inter-villes", nom_en:"Grand taxi Inter-city", nom_ar:"طاكسي كبير", route:"Entre villes proches", prix:"3-10€", duree:"Variable", site:"", desc_fr:"Prix fixe partent quand pleins (6 passagers).", desc_en:"Fixed prices leave when full (6 passengers).", desc_ar:"أسعار ثابتة تنطلق عند الامتلاء." },
    { id:5, icon:"✈️", type:"Navette", nom:"Navette aéroport Marrakech", nom_en:"Marrakech airport shuttle", nom_ar:"حافلة مطار مراكش", route:"Aéroport Menara → Jemaa el-Fna", prix:"1€ bus / 10€ taxi", duree:"30-45 min", site:"", desc_fr:"Bus n°19 pour 1 MAD. Taxi officiel 100 MAD.", desc_en:"Bus n°19 for 1 MAD. Official taxi 100 MAD.", desc_ar:"الحافلة 19 بدرهم. تاكسي رسمي 100 درهم." },
    { id:6, icon:"✈️", type:"Navette", nom:"Navette aéroport Casablanca", nom_en:"Casablanca airport shuttle", nom_ar:"حافلة مطار الدار البيضاء", route:"Aéroport Mohammed V → Casa Voyageurs", prix:"4€ train", duree:"35 min", site:"https://oncf.ma", desc_fr:"Train aéroport rapide toutes les 30 minutes.", desc_en:"Airport train fast every 30 minutes.", desc_ar:"قطار المطار سريع كل 30 دقيقة." }
  ],

  lexique: [
    { id:1, mot_fr:"Bonjour (matin)", translitteration:"Sbah lkhir", mot_darija:"صباح الخير", mot_en:"Good morning", categorie:"Salutations" },
    { id:2, mot_fr:"Bonjour", translitteration:"Marhaba", mot_darija:"مرحبا", mot_en:"Hello", categorie:"Salutations" },
    { id:3, mot_fr:"Bonsoir", translitteration:"Msa lkhir", mot_darija:"مساء الخير", mot_en:"Good evening", categorie:"Salutations" },
    { id:4, mot_fr:"Au revoir", translitteration:"Bslama", mot_darija:"بسلامة", mot_en:"Goodbye", categorie:"Salutations" },
    { id:5, mot_fr:"Comment allez-vous ?", translitteration:"Labas ?", mot_darija:"لاباس؟", mot_en:"How are you?", categorie:"Salutations" },
    { id:6, mot_fr:"Bonne nuit", translitteration:"Tsbah l'kheir", mot_darija:"تصبح على خير", mot_en:"Good night", categorie:"Salutations" },
    { id:7, mot_fr:"Merci beaucoup", translitteration:"Chokran bzzaf", mot_darija:"شكرا بزاف", mot_en:"Thank you very much", categorie:"Politesse" },
    { id:8, mot_fr:"S'il vous plaît", translitteration:"Afak", mot_darija:"عافاك", mot_en:"Please", categorie:"Politesse" },
    { id:9, mot_fr:"Excusez-moi", translitteration:"Smah liya", mot_darija:"سماح ليا", mot_en:"Excuse me", categorie:"Politesse" },
    { id:10, mot_fr:"De rien", translitteration:"La shokr ala wajib", mot_darija:"لا شكر على واجب", mot_en:"You're welcome", categorie:"Politesse" },
    { id:11, mot_fr:"Oui", translitteration:"Iyeh", mot_darija:"إيه", mot_en:"Yes", categorie:"Basique" },
    { id:12, mot_fr:"Non", translitteration:"La", mot_darija:"لا", mot_en:"No", categorie:"Basique" },
    { id:13, mot_fr:"Je ne comprends pas", translitteration:"Ma fhamtch", mot_darija:"ما فهمتش", mot_en:"I don't understand", categorie:"Basique" },
    { id:14, mot_fr:"Je ne sais pas", translitteration:"Ma areftch", mot_darija:"ما عرفتش", mot_en:"I don't know", categorie:"Basique" },
    { id:15, mot_fr:"Parlez-vous français ?", translitteration:"Kat tkellem blfransawi?", mot_darija:"كتتكلم بالفرنساوي؟", mot_en:"Do you speak French?", categorie:"Basique" },
    { id:16, mot_fr:"Combien ça coûte ?", translitteration:"Bchhal had chi?", mot_darija:"بشحال هاد الشي؟", mot_en:"How much is this?", categorie:"Shopping" },
    { id:17, mot_fr:"C'est trop cher", translitteration:"Ghali bzzaf", mot_darija:"غالي بزاف", mot_en:"Too expensive", categorie:"Shopping" },
    { id:18, mot_fr:"Moins cher", translitteration:"Arkhas", mot_darija:"أرخص", mot_en:"Cheaper", categorie:"Shopping" },
    { id:19, mot_fr:"Je regarde seulement", translitteration:"Ana ghir kanshuf", mot_darija:"أنا غير كانشوف", mot_en:"I'm just looking", categorie:"Shopping" },
    { id:20, mot_fr:"Où est... ?", translitteration:"Fin kayn...?", mot_darija:"فين كاين؟", mot_en:"Where is...?", categorie:"Navigation" },
    { id:21, mot_fr:"Tout droit", translitteration:"Niyshan", mot_darija:"نيشان", mot_en:"Straight ahead", categorie:"Navigation" },
    { id:22, mot_fr:"À gauche", translitteration:"Lisar", mot_darija:"ليسار", mot_en:"To the left", categorie:"Navigation" },
    { id:23, mot_fr:"À droite", translitteration:"Limin", mot_darija:"ليمين", mot_en:"To the right", categorie:"Navigation" },
    { id:24, mot_fr:"Restaurant", translitteration:"Mataam", mot_darija:"مطعم", mot_en:"Restaurant", categorie:"Navigation" },
    { id:25, mot_fr:"Hôtel", translitteration:"Otil", mot_darija:"أوطيل", mot_en:"Hotel", categorie:"Navigation" },
    { id:26, mot_fr:"L'addition s'il vous plaît", translitteration:"Lhsab afak", mot_darija:"الحساب عافاك", mot_en:"The bill please", categorie:"Restaurant" },
    { id:27, mot_fr:"Délicieux !", translitteration:"Bnin bzzaf!", mot_darija:"بنين بزاف", mot_en:"Delicious!", categorie:"Restaurant" },
    { id:28, mot_fr:"De l'eau s'il vous plaît", translitteration:"Lma afak", mot_darija:"الما عافاك", mot_en:"Water please", categorie:"Restaurant" },
    { id:29, mot_fr:"Sans piment", translitteration:"Bla harr", mot_darija:"بلا حار", mot_en:"Without spice", categorie:"Restaurant" },
    { id:30, mot_fr:"Arrêtez ici", translitteration:"Wqef hna", mot_darija:"وقف هنا", mot_en:"Stop here", categorie:"Transport" },
    { id:31, mot_fr:"Combien jusqu'à... ?", translitteration:"Bchhal hta...?", mot_darija:"بشحال حتى...؟", mot_en:"How much to...?", categorie:"Transport" },
    { id:32, mot_fr:"Appelez la police !", translitteration:"Ayyet l'police!", mot_darija:"عيط للبوليس", mot_en:"Call the police!", categorie:"Urgence" },
    { id:33, mot_fr:"J'ai besoin d'un médecin", translitteration:"Khassni tabib", mot_darija:"خاصني طبيب", mot_en:"I need a doctor", categorie:"Urgence" },
    { id:34, mot_fr:"Au secours !", translitteration:"Awenni!", mot_darija:"عاونّي!", mot_en:"Help!", categorie:"Urgence" },
    { id:35, mot_fr:"Je suis perdu(e)", translitteration:"Ana dayae", mot_darija:"أنا ضايع", mot_en:"I'm lost", categorie:"Urgence" }
  ]
};
