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
    },
    { id:13, nom:"Dakhla", nom_en:"Dakhla", nom_ar:"الداخلة", region:"Dakhla-Oued Ed-Dahab", region_en:"Dakhla-Oued Ed-Dahab", region_ar:"الداخلة-وادي الذهب", img:"images/Dakhla.jpg", maps_url:"https://maps.google.com/?q=Dakhla+Morocco", saison:"Oct — Avr", budget:"40 — 70€",
      desc_fr:"Dakhla est une péninsule magnifique dans le Sahara atlantique, mondialement connue comme le paradis du kitesurf et du windsurf. Ses lagons turquoise, ses dunes de sable et son ambiance unique entre désert et océan en font une destination de rêve.",
      desc_en:"Dakhla is a magnificent peninsula in the Atlantic Sahara, world-renowned as a paradise for kitesurfing and windsurfing. Its turquoise lagoons, sand dunes and unique atmosphere between desert and ocean make it a dream destination.",
      desc_ar:"الداخلة شبه جزيرة رائعة في الصحراء الأطلسية، مشهورة عالمياً كجنة لرياضة الكايت سيرف والشراع. بحيراتها الفيروزية وكثبانها الرملية وأجواؤها الفريدة.",
      plan: {
        jour1: [
          {time:"09:00",emoji:"🏄",activity:"Session kitesurf ou windsurf",place:"Lagon de Dakhla",tip:"Le lagon est parfait pour tous niveaux — eau plate et vent régulier",tags:["nature"]},
          {time:"12:00",emoji:"🐟",activity:"Déjeuner fruits de mer",place:"Restaurant bord de lagon",tip:"Les fruits de mer de Dakhla sont exceptionnels et très frais",tags:["food"]},
          {time:"14:00",emoji:"🏜️",activity:"Excursion dunes de sable",place:"Dunes du Sahara atlantique",tip:"Contraste unique entre les dunes et l'océan",tags:["nature"]},
          {time:"16:30",emoji:"🦜",activity:"Observation des oiseaux",place:"Réserve naturelle",tip:"Dakhla est un paradis pour le birdwatching — flamants et pélicans",tags:["nature"]},
          {time:"18:30",emoji:"🌅",activity:"Coucher de soleil sur le lagon",place:"Lagon de Dakhla",tip:"Les couleurs du coucher de soleil sur le lagon sont magiques",tags:["nature"]},
          {time:"20:30",emoji:"🌙",activity:"Dîner poissons grillés",place:"Restaurant Dakhla",tip:"La dorade et le loup de mer sont les spécialités locales",tags:["food","nuit"]}
        ],
        jour2: [
          {time:"08:00",emoji:"🚤",activity:"Excursion en bateau",place:"Lagon de Dakhla",tip:"Tour en bateau pour découvrir les îlots et la faune marine",tags:["nature"]},
          {time:"11:00",emoji:"🏄",activity:"Surf ou paddle",place:"Plage océanique",tip:"La côte atlantique offre de belles vagues pour le surf",tags:["nature"]},
          {time:"13:00",emoji:"🥗",activity:"Déjeuner camp nomade",place:"Camp du désert",tip:"Certains camps proposent des déjeuners typiques sahraouis",tags:["food","culture"]},
          {time:"15:00",emoji:"🐪",activity:"Balade à dos de chameau",place:"Dunes atlantiques",tip:"Expérience unique entre désert et océan",tags:["nature"]},
          {time:"17:30",emoji:"🎣",activity:"Pêche traditionnelle",place:"Port de Dakhla",tip:"Accompagnez les pêcheurs locaux pour une expérience authentique",tags:["culture"]},
          {time:"20:00",emoji:"🌙",activity:"Soirée sahraouie",place:"Camp traditionnel",tip:"Musique hassanie et thé à la menthe autour du feu",tags:["culture","nuit"]}
        ]
      }
    },
    { id:14, nom:"Saïdia", nom_en:"Saidia", nom_ar:"السعيدية", region:"Oriental", region_en:"Oriental", region_ar:"الشرق", img:"images/Saidia.jpg", maps_url:"https://maps.google.com/?q=Saidia+Morocco", saison:"Juin — Sept", budget:"30 — 55€",
      desc_fr:"Saïdia est surnommée la perle bleue de la Méditerranée. Avec ses 14 km de plage de sable fin, son eau cristalline et sa marina moderne, c'est la station balnéaire la plus prisée du nord-est du Maroc.",
      desc_en:"Saidia is nicknamed the Blue Pearl of the Mediterranean. With its 14 km of fine sand beach, crystal-clear water and modern marina, it is the most popular seaside resort in north-east Morocco.",
      desc_ar:"تُلقَّب السعيدية باللؤلؤة الزرقاء للبحر الأبيض المتوسط. بشاطئها الرملي الممتد 14 كم ومياهها الصافية ومارينا حديثة.",
      plan: {
        jour1: [
          {time:"09:00",emoji:"🏖️",activity:"Plage de Saïdia",place:"Plage de Saïdia",tip:"14 km de plage — installez-vous loin de la marina pour plus de calme",tags:["nature"]},
          {time:"12:00",emoji:"🐟",activity:"Déjeuner restaurant marina",place:"Marina de Saïdia",tip:"Les restaurants de la marina servent d'excellents poissons",tags:["food"]},
          {time:"14:00",emoji:"🛍️",activity:"Shopping marina et souks",place:"Marina de Saïdia",tip:"La marina propose boutiques et artisanat local",tags:["shopping"]},
          {time:"16:00",emoji:"🌊",activity:"Baignade en Méditerranée",place:"Plage de Saïdia",tip:"Eau calme et chaude — idéale pour les familles",tags:["nature"]},
          {time:"18:30",emoji:"🌅",activity:"Coucher de soleil Méditerranée",place:"Front de mer",tip:"Vue magnifique sur la Méditerranée et les côtes espagnoles",tags:["nature"]},
          {time:"20:30",emoji:"🌙",activity:"Soirée animée marina",place:"Marina de Saïdia",tip:"La marina est très animée en été",tags:["nuit"]}
        ],
        jour2: [
          {time:"09:00",emoji:"🚴",activity:"Vélo le long de la plage",place:"Piste cyclable Saïdia",tip:"Plusieurs loueurs de vélos disponibles sur le front de mer",tags:["nature"]},
          {time:"11:00",emoji:"🏊",activity:"Sports nautiques",place:"Centre nautique",tip:"Jet ski, banane, paddle — nombreuses activités disponibles",tags:["nature"]},
          {time:"13:00",emoji:"🍽️",activity:"Déjeuner typique oriental",place:"Restaurant Saïdia",tip:"La cuisine orientale est différente du reste du Maroc",tags:["food"]},
          {time:"15:00",emoji:"🌿",activity:"Forêt de la Moulouya",place:"Embouchure de la Moulouya",tip:"Réserve naturelle avec des oiseaux rares à 10 km",tags:["nature"]},
          {time:"17:30",emoji:"☕",activity:"Café vue mer",place:"Terrasse front de mer",tip:"Profitez d'un café en regardant la Méditerranée",tags:["relax"]},
          {time:"20:00",emoji:"🌙",activity:"Dîner de fruits de mer",place:"Restaurant bord de mer",tip:"Les crevettes et langoustes de Saïdia sont excellentes",tags:["food","nuit"]}
        ]
      }
    },
    { id:15, nom:"Al Hoceïma", nom_en:"Al Hoceima", nom_ar:"الحسيمة", region:"Tanger-Tétouan-Al Hoceïma", region_en:"Tangier-Tetouan-Al Hoceima", region_ar:"طنجة-تطوان-الحسيمة", img:"images/Al_Hoceima.jpg", maps_url:"https://maps.google.com/?q=Al+Hoceima+Morocco", saison:"Juin — Sept", budget:"25 — 50€",
      desc_fr:"Al Hoceïma est un joyau caché du Rif méditerranéen. Ses plages aux eaux turquoise parmi les plus belles du Maroc, son parc national et ses criques sauvages en font une destination authentique et préservée.",
      desc_en:"Al Hoceima is a hidden gem of the Mediterranean Rif. Its beaches with turquoise waters among the most beautiful in Morocco, its national park and wild coves make it an authentic preserved destination.",
      desc_ar:"الحسيمة جوهرة مخفية في الريف المتوسطي. شواطئها ذات المياه الفيروزية من أجمل شواطئ المغرب.",
      plan: {
        jour1: [
          {time:"09:00",emoji:"🏖️",activity:"Plage Quemado",place:"Plage Quemado",tip:"La plage principale d'Al Hoceïma avec eau cristalline",tags:["nature"]},
          {time:"11:00",emoji:"🚤",activity:"Excursion en bateau",place:"Port d'Al Hoceïma",tip:"Tour des criques et grottes marines inaccessibles à pied",tags:["nature"]},
          {time:"13:00",emoji:"🐟",activity:"Déjeuner poissons frais",place:"Restaurant port",tip:"Le poisson pêché le matin est servi directement au restaurant",tags:["food"]},
          {time:"15:00",emoji:"🌊",activity:"Plage Asfiha",place:"Plage Asfiha",tip:"Moins fréquentée — eau turquoise exceptionnelle",tags:["nature"]},
          {time:"17:30",emoji:"🌅",activity:"Coucher de soleil sur la Méditerranée",place:"Corniche Al Hoceïma",tip:"Vue magnifique sur l'îlot d'Al Hoceïma",tags:["nature"]},
          {time:"20:00",emoji:"🌙",activity:"Dîner méditerranéen",place:"Restaurant Al Hoceïma",tip:"Cuisine rifaine avec influence méditerranéenne unique",tags:["food","nuit"]}
        ],
        jour2: [
          {time:"09:00",emoji:"🌿",activity:"Parc National d'Al Hoceïma",place:"Parc National",tip:"Randonnée dans le parc avec vue sur la Méditerranée",tags:["nature"]},
          {time:"12:00",emoji:"🥗",activity:"Pique-nique dans le parc",place:"Parc National",tip:"Emportez des provisions depuis la ville",tags:["food","nature"]},
          {time:"14:00",emoji:"🏖️",activity:"Plage Torres",place:"Plage Torres",tip:"Plage sauvage accessible en bateau — paradisiaque",tags:["nature"]},
          {time:"16:30",emoji:"🛍️",activity:"Médina d'Al Hoceïma",place:"Médina",tip:"Petite médina authentique avec artisanat du Rif",tags:["shopping","culture"]},
          {time:"18:30",emoji:"☕",activity:"Café terrasse vue mer",place:"Place du Rif",tip:"La place principale avec vue sur la baie",tags:["relax"]},
          {time:"20:30",emoji:"🌙",activity:"Soirée en bord de mer",place:"Front de mer",tip:"Al Hoceïma est animée en été — ambiance détendue",tags:["nuit"]}
        ]
      }
    },
    { id:16, nom:"Asilah", nom_en:"Asilah", nom_ar:"أصيلة", region:"Tanger-Tétouan-Al Hoceïma", region_en:"Tangier-Tetouan", region_ar:"طنجة-تطوان-الحسيمة", img:"images/Asilah.jpg", maps_url:"https://maps.google.com/?q=Asilah+Morocco", saison:"Avr — Oct", budget:"25 — 50€",
      desc_fr:"Asilah est une charmante ville côtière aux murailles blanches et bleues à 46 km de Tanger. Connue pour son festival culturel international et ses frises murales, c'est un joyau artistique face à l'Atlantique.",
      desc_en:"Asilah is a charming coastal town with white and blue walls 46 km from Tangier. Known for its international cultural festival and wall murals, it is an artistic gem facing the Atlantic.",
      desc_ar:"أصيلة مدينة ساحلية ساحرة بأسوارها البيضاء والزرقاء على بعد 46 كم من طنجة. مشهورة بمهرجانها الثقافي الدولي ولوحاتها الجدارية.",
      plan: {
        jour1: [
          {time:"09:00",emoji:"🎨",activity:"Murales et art de rue",place:"Médina d'Asilah",tip:"Les fresques murales changent chaque année pendant le festival",tags:["culture"]},
          {time:"11:00",emoji:"🏰",activity:"Remparts portugais",place:"Remparts d'Asilah",tip:"Vue magnifique sur l'Atlantique depuis les remparts",tags:["culture","nature"]},
          {time:"13:00",emoji:"🐟",activity:"Déjeuner fruits de mer",place:"Restaurant médina",tip:"Asilah est réputée pour ses excellents restaurants de poissons",tags:["food"]},
          {time:"15:00",emoji:"🏖️",activity:"Plage d'Asilah",place:"Plage d'Asilah",tip:"Belle plage atlantique face aux remparts — très photogénique",tags:["nature"]},
          {time:"17:30",emoji:"🌅",activity:"Coucher de soleil remparts",place:"Remparts face à l'Atlantique",tip:"Un des plus beaux couchers de soleil du Maroc",tags:["nature"]},
          {time:"20:00",emoji:"🌙",activity:"Dîner sur terrasse",place:"Restaurant vue mer",tip:"Plusieurs restaurants offrent vue sur l'Atlantique",tags:["food","nuit"]}
        ],
        jour2: [
          {time:"09:00",emoji:"🛍️",activity:"Galeries d'art",place:"Médina d'Asilah",tip:"Asilah a de nombreuses galeries d'artistes locaux et internationaux",tags:["culture"]},
          {time:"11:00",emoji:"🏺",activity:"Palais de la Culture",place:"Palais Raissouni",tip:"Magnifique palais du 19e siècle avec vue sur l'Atlantique",tags:["culture"]},
          {time:"13:00",emoji:"🍽️",activity:"Déjeuner traditionnel",place:"Restaurant médina",tip:"Tajine de poisson — spécialité d'Asilah",tags:["food"]},
          {time:"15:00",emoji:"🚴",activity:"Vélo autour des remparts",place:"Tour des remparts",tip:"Le tour des remparts en vélo est une expérience unique",tags:["nature"]},
          {time:"17:00",emoji:"🌊",activity:"Plage du nord",place:"Plage nord d'Asilah",tip:"Moins fréquentée que la plage principale",tags:["nature"]},
          {time:"20:00",emoji:"🌙",activity:"Soirée culturelle",place:"Centre Hassan II",tip:"En juillet le festival international attire artistes du monde entier",tags:["culture","nuit"]}
        ]
      }
    },
    { id:17, nom:"Mirleft", nom_en:"Mirleft", nom_ar:"ميرلفت", region:"Souss-Massa", region_en:"Souss-Massa", region_ar:"سوس-ماسة", img:"images/Mirleft.jpg", maps_url:"https://maps.google.com/?q=Mirleft+Morocco", saison:"Toute l'année", budget:"20 — 45€",
      desc_fr:"Mirleft est un petit village côtier sauvage entre Agadir et Sidi Ifni. Ses criques préservées, ses falaises spectaculaires et son ambiance hippie et authentique en font un paradis pour les voyageurs en quête d'authenticité.",
      desc_en:"Mirleft is a small wild coastal village between Agadir and Sidi Ifni. Its preserved coves, spectacular cliffs and hippie authentic atmosphere make it a paradise for travellers seeking authenticity.",
      desc_ar:"ميرلفت قرية ساحلية صغيرة برية بين أكادير وسيدي إفني. خلجانها المحفوظة وجرفها الرائع وأجواؤها الأصيلة.",
      plan: {
        jour1: [
          {time:"09:00",emoji:"🏖️",activity:"Exploration des criques",place:"Criques de Mirleft",tip:"Chaque crique est différente — explorez à pied le long des falaises",tags:["nature"]},
          {time:"12:00",emoji:"🥗",activity:"Déjeuner café du village",place:"Village de Mirleft",tip:"Ambiance très détendue — petits cafés locaux authentiques",tags:["food"]},
          {time:"14:00",emoji:"🏄",activity:"Surf ou bodyboard",place:"Plage principale Mirleft",tip:"Vagues excellentes pour le surf — spots peu fréquentés",tags:["nature"]},
          {time:"16:30",emoji:"🌅",activity:"Falaises au coucher du soleil",place:"Falaises de Mirleft",tip:"Vue spectaculaire sur l'Atlantique depuis les falaises",tags:["nature"]},
          {time:"19:00",emoji:"⭐",activity:"Observation des étoiles",place:"Collines de Mirleft",tip:"Pas de pollution lumineuse — ciel étoilé exceptionnel",tags:["nature","nuit"]},
          {time:"20:30",emoji:"🌙",activity:"Dîner auberge locale",place:"Auberge de Mirleft",tip:"Les auberges servent une cuisine marocaine simple et délicieuse",tags:["food","nuit"]}
        ],
        jour2: [
          {time:"08:00",emoji:"🥾",activity:"Randonnée côtière",place:"Sentier côtier Mirleft",tip:"Randonnée de 2h le long des falaises avec vues époustouflantes",tags:["nature"]},
          {time:"11:00",emoji:"🌊",activity:"Baignade crique secrète",place:"Crique cachée",tip:"Demandez aux locaux l'accès aux criques secrètes",tags:["nature"]},
          {time:"13:00",emoji:"🐟",activity:"Déjeuner poissons grillés",place:"Restaurant local",tip:"Poissons pêchés localement — ultra frais",tags:["food"]},
          {time:"15:00",emoji:"🧘",activity:"Yoga face à l'Atlantique",place:"Falaises de Mirleft",tip:"Plusieurs retraites de yoga dans la région",tags:["relax"]},
          {time:"17:30",emoji:"🌅",activity:"Sunset depuis les rochers",place:"Rochers de Mirleft",tip:"Un des plus beaux couchers de soleil du Maroc",tags:["nature"]},
          {time:"20:00",emoji:"🌙",activity:"Soirée étoilée",place:"Mirleft",tip:"Ambiance très calme et ressourçante",tags:["relax","nuit"]}
        ]
      }
    },
    { id:18, nom:"Sidi Ifni", nom_en:"Sidi Ifni", nom_ar:"سيدي إفني", region:"Guelmim-Oued Noun", region_en:"Guelmim-Oued Noun", region_ar:"كلميم-واد نون", img:"images/Sidi_Ifni.jpg", maps_url:"https://maps.google.com/?q=Sidi+Ifni+Morocco", saison:"Toute l'année", budget:"20 — 40€",
      desc_fr:"Sidi Ifni est une ville côtière unique avec son architecture Art Déco espagnole exceptionnelle. Ancienne enclave espagnole jusqu'en 1969, elle offre un mélange fascinant de cultures berbère, africaine et espagnole face à l'Atlantique.",
      desc_en:"Sidi Ifni is a unique coastal town with exceptional Spanish Art Deco architecture. A former Spanish enclave until 1969, it offers a fascinating mix of Berber, African and Spanish cultures.",
      desc_ar:"سيدي إفني مدينة ساحلية فريدة بطرازها المعماري الإسباني الاستثنائي. كانت مستعمرة إسبانية حتى 1969.",
      plan: {
        jour1: [
          {time:"09:00",emoji:"🏛️",activity:"Architecture Art Déco espagnole",place:"Centre-ville Sidi Ifni",tip:"Les bâtiments Art Déco des années 1930 sont uniques en Afrique",tags:["culture"]},
          {time:"11:00",emoji:"🏖️",activity:"Plage de Sidi Ifni",place:"Plage de Sidi Ifni",tip:"Longue plage sauvage face à l'Atlantique",tags:["nature"]},
          {time:"13:00",emoji:"🍽️",activity:"Déjeuner spécialités locales",place:"Restaurant Sidi Ifni",tip:"Cuisine berbère avec influence espagnole — unique au Maroc",tags:["food"]},
          {time:"15:00",emoji:"🎨",activity:"Ancienne église espagnole",place:"Église convertie",tip:"L'ancienne église espagnole est maintenant un tribunal — architecture remarquable",tags:["culture"]},
          {time:"17:00",emoji:"🌅",activity:"Coucher de soleil Atlantique",place:"Front de mer",tip:"Le coucher de soleil sur l'Atlantique depuis Sidi Ifni est spectaculaire",tags:["nature"]},
          {time:"20:00",emoji:"🌙",activity:"Dîner poissons grillés",place:"Restaurant bord de mer",tip:"Poissons frais pêchés localement",tags:["food","nuit"]}
        ],
        jour2: [
          {time:"09:00",emoji:"🛍️",activity:"Marché hebdomadaire",place:"Souk de Sidi Ifni",tip:"Le marché du dimanche rassemble les tribus berbères locales",tags:["culture","shopping"]},
          {time:"11:00",emoji:"🏄",activity:"Surf atlantique",place:"Plage de Sidi Ifni",tip:"Spots de surf excellents peu fréquentés",tags:["nature"]},
          {time:"13:00",emoji:"🥗",activity:"Déjeuner café local",place:"Café du centre",tip:"Ambiance très authentique loin du tourisme de masse",tags:["food"]},
          {time:"15:00",emoji:"🚗",activity:"Route des criques vers Mirleft",place:"Côte entre Sidi Ifni et Mirleft",tip:"Route côtière avec des paysages époustouflants",tags:["nature"]},
          {time:"17:30",emoji:"🌅",activity:"Falaises du sud",place:"Côte sud de Sidi Ifni",tip:"Falaises dramatiques face à l'Atlantique",tags:["nature"]},
          {time:"20:00",emoji:"🌙",activity:"Soirée tranquille",place:"Sidi Ifni",tip:"Ville très calme et authentique — parfaite pour se ressourcer",tags:["relax","nuit"]}
        ]
      }
    }
  ],

  lieux: [
    { id:1, nom:"Jemaa el-Fna", nom_en:"Jemaa el-Fna", nom_ar:"جامع الفنا", ville:"Marrakech", cat:"Place", img:"images/PLACE_JEMAA_EL_FNA.jpg", maps_url:"https://maps.google.com/?q=Jemaa+el+Fna+Marrakech", desc_fr:"La place mythique de Marrakech classée au patrimoine UNESCO. Le jour des vendeurs de jus d'orange, la nuit des conteurs et musiciens.", desc_en:"Marrakech's mythical square UNESCO-listed.", desc_ar:"الميدان الأسطوري لمراكش." },
    { id:2, nom:"Jardin Majorelle", nom_en:"Majorelle Garden", nom_ar:"حديقة ماجوريل", ville:"Marrakech", cat:"Jardin", img:"images/le-jardin-majorelle.jpg", maps_url:"https://maps.google.com/?q=Jardin+Majorelle+Marrakech", desc_fr:"Oasis de verdure créée par Jacques Majorelle et sauvée par Yves Saint Laurent. Ses bâtiments bleu cobalt sont mondialement célèbres.", desc_en:"Green oasis created by Jacques Majorelle and saved by Yves Saint Laurent.", desc_ar:"واحة خضراء أنشأها جاك ماجوريل." },
    { id:3, nom:"Souk de Marrakech", nom_en:"Marrakech Souk", nom_ar:"سوق مراكش", ville:"Marrakech", cat:"Marché", img:"images/Souk de Marrakech.jpg", maps_url:"https://maps.google.com/?q=Souk+Marrakech", desc_fr:"Le plus grand souk du Maroc, un labyrinthe de ruelles thématiques : épices, cuir, tapis, bijoux, poterie.", desc_en:"Morocco's largest souk, a maze of themed alleys.", desc_ar:"أكبر سوق في المغرب." },
    { id:4, nom:"Palais Bahia", nom_en:"Bahia Palace", nom_ar:"قصر الباهية", ville:"Marrakech", cat:"Patrimoine", img:"images/Palais_Bahia.jpg", maps_url:"https://maps.google.com/?q=Palais+Bahia+Marrakech", desc_fr:"Chef-d'œuvre de l'architecture marocaine du 19e siècle avec ses jardins luxuriants et ses riches décorations.", desc_en:"19th century masterpiece of Moroccan architecture.", desc_ar:"تحفة معمارية مغربية من القرن التاسع عشر." },
    { id:5, nom:"Tombeaux Saadiens", nom_en:"Saadian Tombs", nom_ar:"مقابر السعديين", ville:"Marrakech", cat:"Patrimoine", img:"images/Tombeaux_Saadiens.jpg", maps_url:"https://maps.google.com/?q=Tombeaux+Saadiens+Marrakech", desc_fr:"Nécropole royale du 16e siècle redécouverte en 1917. Ses mausolées ornés de zelliges et stucs sont parmi les plus beaux du Maroc.", desc_en:"16th century royal necropolis rediscovered in 1917.", desc_ar:"مقبرة ملكية من القرن السادس عشر." },
    { id:6, nom:"Koutoubia", nom_en:"Koutoubia Mosque", nom_ar:"مسجد الكتبية", ville:"Marrakech", cat:"Monument", img:"images/Koutoubia.jpg", maps_url:"https://maps.google.com/?q=Koutoubia+Marrakech", desc_fr:"Le minaret emblématique de Marrakech visible à des kilomètres. Construit au 12e siècle.", desc_en:"Marrakech's iconic 12th century minaret.", desc_ar:"مئذنة مراكش الأيقونية من القرن الثاني عشر." },
    { id:7, nom:"Madrasa Ben Youssef", nom_en:"Ben Youssef Madrasa", nom_ar:"مدرسة ابن يوسف", ville:"Marrakech", cat:"Patrimoine", img:"images/Madrasa_Ben_Youssef.jpg", maps_url:"https://maps.google.com/?q=Madrasa+Ben+Youssef+Marrakech", desc_fr:"L'ancienne école coranique du 14e siècle, l'une des plus grandes du Maghreb. Ses zelliges sont époustouflants.", desc_en:"14th century Koranic school, one of the largest in the Maghreb.", desc_ar:"المدرسة القرآنية القديمة من القرن الرابع عشر." },
    { id:8, nom:"Palais El Badi", nom_en:"El Badi Palace", nom_ar:"قصر البديع", ville:"Marrakech", cat:"Patrimoine", img:"images/Palais_El_Badi.jpg", maps_url:"https://maps.google.com/?q=Palais+El+Badi+Marrakech", desc_fr:"Ruines grandioses du palais du sultan Saadien du 16e siècle. Jadis l'un des plus beaux palais du monde islamique.", desc_en:"Grandiose ruins of the 16th century Saadian sultan's palace.", desc_ar:"أطلال فخمة لقصر السلطان السعدي من القرن السادس عشر." },
    { id:9, nom:"Tanneries de Marrakech", nom_en:"Marrakech Tanneries", nom_ar:"مدابغ مراكش", ville:"Marrakech", cat:"Artisanat", img:"images/Tanneries_Marrakech.jpg", maps_url:"https://maps.google.com/?q=Tanneries+Marrakech", desc_fr:"Les tanneries traditionnelles où les artisans travaillent le cuir selon des méthodes ancestrales.", desc_en:"Traditional tanneries where craftsmen work leather using ancestral methods.", desc_ar:"المدابغ التقليدية حيث يعمل الحرفيون الجلد بطرق قديمة." },
    { id:10, nom:"Mellah de Marrakech", nom_en:"Marrakech Mellah", nom_ar:"ملاح مراكش", ville:"Marrakech", cat:"Médina", img:"images/Mellah_Marrakech.jpg", maps_url:"https://maps.google.com/?q=Mellah+Marrakech", desc_fr:"L'ancien quartier juif de Marrakech avec ses maisons à balcons en bois sculpté.", desc_en:"Marrakech's old Jewish quarter with carved wooden balcony houses.", desc_ar:"الحي اليهودي القديم بمراكش." },
    { id:11, nom:"Jardin Agdal", nom_en:"Agdal Garden", nom_ar:"حديقة أكدال", ville:"Marrakech", cat:"Jardin", img:"images/Jardin_Agdal.jpg", maps_url:"https://maps.google.com/?q=Jardin+Agdal+Marrakech", desc_fr:"Immense jardin royal du 12e siècle s'étendant sur 400 hectares. Classé au patrimoine UNESCO.", desc_en:"Immense 12th century royal garden over 400 hectares. UNESCO-listed.", desc_ar:"حديقة ملكية ضخمة من القرن الثاني عشر." },
    { id:12, nom:"Hammam El Bacha", nom_en:"El Bacha Hammam", nom_ar:"حمام الباشا", ville:"Marrakech", cat:"Culture", img:"images/Hammam_Bacha.jpg", maps_url:"https://maps.google.com/?q=Hammam+El+Bacha+Marrakech", desc_fr:"L'un des plus anciens et plus beaux hammams de Marrakech datant du début du 20e siècle.", desc_en:"One of Marrakech's oldest and most beautiful hammams.", desc_ar:"أحد أقدم وأجمل الحمامات في مراكش." },
    { id:13, nom:"Quartier Guéliz", nom_en:"Guéliz District", nom_ar:"حي كيليز", ville:"Marrakech", cat:"Promenade", img:"images/Gueliz_Marrakech.jpg", maps_url:"https://maps.google.com/?q=Guéliz+Marrakech", desc_fr:"La nouvelle ville de Marrakech avec ses galeries d'art, ses restaurants branchés et ses boutiques de designers.", desc_en:"Marrakech's new city with art galleries and trendy restaurants.", desc_ar:"مدينة مراكش الجديدة بغالريهاتها الفنية." },
    { id:14, nom:"Musée de Marrakech", nom_en:"Marrakech Museum", nom_ar:"متحف مراكش", ville:"Marrakech", cat:"Culture", img:"images/Musee_Marrakech.jpg", maps_url:"https://maps.google.com/?q=Musée+Marrakech", desc_fr:"Installé dans le magnifique palais Mnebhi, ce musée présente des collections d'art marocain.", desc_en:"Housed in the magnificent Mnebhi palace, showcasing Moroccan art.", desc_ar:"يقع في قصر المنبهي الرائع ويعرض الفن المغربي." },
    { id:15, nom:"Dar Si Said", nom_en:"Dar Si Said Museum", nom_ar:"دار سي سعيد", ville:"Marrakech", cat:"Culture", img:"images/Dar_Si_Said.jpg", maps_url:"https://maps.google.com/?q=Dar+Si+Said+Marrakech", desc_fr:"Musée des arts et métiers marocains dans une magnifique demeure du 19e siècle.", desc_en:"Museum of Moroccan arts and crafts in a magnificent 19th century residence.", desc_ar:"متحف الفنون والحرف المغربية." },
    { id:16, nom:"Mosquée Hassan II", nom_en:"Hassan II Mosque", nom_ar:"مسجد الحسن الثاني", ville:"Casablanca", cat:"Monument", img:"images/Mosquée Hassan II.png", maps_url:"https://maps.google.com/?q=Hassan+II+Mosque+Casablanca", desc_fr:"La 3e plus grande mosquée du monde, chef-d'œuvre de l'architecture marocaine moderne construit sur l'Atlantique.", desc_en:"The 3rd largest mosque in the world, built over the Atlantic Ocean.", desc_ar:"ثالث أكبر مسجد في العالم مبني فوق المحيط الأطلسي." },
    { id:17, nom:"Corniche de Casablanca", nom_en:"Casablanca Corniche", nom_ar:"كورنيش الدار البيضاء", ville:"Casablanca", cat:"Promenade", img:"images/Corniche de Casablanca.jpeg", maps_url:"https://maps.google.com/?q=Corniche+Casablanca", desc_fr:"Boulevard longeant l'Atlantique bordé de cafés, restaurants et clubs.", desc_en:"Boulevard along the Atlantic lined with cafes and restaurants.", desc_ar:"شارع على طول الأطلسي مع المقاهي والمطاعم." },
    { id:18, nom:"Quartier Art Déco", nom_en:"Art Deco District", nom_ar:"حي الفن الديكو", ville:"Casablanca", cat:"Architecture", img:"images/Art_Deco_Casa.jpg", maps_url:"https://maps.google.com/?q=Art+Deco+Casablanca", desc_fr:"Le centre-ville de Casablanca abrite l'une des plus belles concentrations d'architecture Art Déco au monde.", desc_en:"Casablanca's city center has one of the world's finest Art Deco concentrations.", desc_ar:"يضم مركز الدار البيضاء أجمل تركيزات فن الديكو في العالم." },
    { id:19, nom:"Quartier Habous", nom_en:"Habous Quarter", nom_ar:"حي الحبوس", ville:"Casablanca", cat:"Architecture", img:"images/Quartier_Habous.jpg", maps_url:"https://maps.google.com/?q=Quartier+Habous+Casablanca", desc_fr:"Quartier néo-mauresque construit par les Français dans les années 1930.", desc_en:"Neo-Moorish district built by the French in the 1930s.", desc_ar:"حي نيو موريسكي بني من قبل الفرنسيين في الثلاثينيات." },
    { id:20, nom:"Médina de Casablanca", nom_en:"Casablanca Old Medina", nom_ar:"مدينة الدار البيضاء القديمة", ville:"Casablanca", cat:"Médina", img:"images/Medina_Casa.jpg", maps_url:"https://maps.google.com/?q=Old+Medina+Casablanca", desc_fr:"La médina historique de Casablanca contraste avec la modernité de la ville.", desc_en:"Casablanca's historic medina contrasts with the city's modernity.", desc_ar:"المدينة القديمة التاريخية للدار البيضاء." },
    { id:21, nom:"Ain Diab", nom_en:"Ain Diab Beach", nom_ar:"شاطئ عين الذياب", ville:"Casablanca", cat:"Plage", img:"images/Ain_Diab.jpg", maps_url:"https://maps.google.com/?q=Ain+Diab+Casablanca", desc_fr:"La plage urbaine la plus populaire de Casablanca avec ses clubs de plage et restaurants.", desc_en:"Casablanca's most popular urban beach with beach clubs.", desc_ar:"الشاطئ الحضري الأكثر شعبية في الدار البيضاء." },
    { id:22, nom:"Parc de la Ligue Arabe", nom_en:"Arab League Park", nom_ar:"حديقة رابطة العرب", ville:"Casablanca", cat:"Jardin", img:"images/Parc_Ligue_Arabe.jpg", maps_url:"https://maps.google.com/?q=Parc+Ligue+Arabe+Casablanca", desc_fr:"Le plus grand parc de Casablanca avec ses fontaines et ses palmiers.", desc_en:"Casablanca's largest park with fountains and palm trees.", desc_ar:"أكبر حدائق الدار البيضاء بنوافيرها ونخيلها." },
    { id:23, nom:"Tour Hassan", nom_en:"Hassan Tower", nom_ar:"صومعة حسان", ville:"Rabat", cat:"Monument", img:"images/Tour Hassan.jpg", maps_url:"https://maps.google.com/?q=Hassan+Tower+Rabat", desc_fr:"Minaret inachevé du 12e siècle symbole de Rabat, face au Mausolée Mohammed V.", desc_en:"Unfinished 12th-century minaret, symbol of Rabat.", desc_ar:"صومعة غير مكتملة من القرن الثاني عشر رمز الرباط." },
    { id:24, nom:"Kasbah des Oudayas", nom_en:"Kasbah of the Udayas", nom_ar:"قصبة الوداية", ville:"Rabat", cat:"Patrimoine", img:"images/Kasbah_Oudayas.jpg", maps_url:"https://maps.google.com/?q=Kasbah+Oudayas+Rabat", desc_fr:"Forteresse du 12e siècle aux ruelles bleues et blanches dominant l'embouchure du Bou Regreg.", desc_en:"12th century fortress with blue and white alleys.", desc_ar:"قلعة من القرن الثاني عشر بأزقة زرقاء وبيضاء." },
    { id:25, nom:"Chellah", nom_en:"Chellah", nom_ar:"شالة", ville:"Rabat", cat:"Patrimoine", img:"images/Chellah.jpeg", maps_url:"https://maps.google.com/?q=Chellah+Rabat", desc_fr:"Nécropole romaine et mérinide à Rabat, envahie par la végétation et peuplée de cigognes.", desc_en:"Roman and Merinid necropolis populated by storks.", desc_ar:"مقبرة رومانية ومرينية تسكنها اللقالق." },
    { id:26, nom:"Musée Mohammed VI", nom_en:"Mohammed VI Museum", nom_ar:"متحف محمد السادس", ville:"Rabat", cat:"Culture", img:"images/Musee_Mohammed_VI.jpg", maps_url:"https://maps.google.com/?q=Musée+Mohammed+VI+Rabat", desc_fr:"Le plus grand musée d'art contemporain d'Afrique inauguré en 2014.", desc_en:"The largest contemporary art museum in Africa opened in 2014.", desc_ar:"أكبر متحف للفن المعاصر في أفريقيا." },
    { id:27, nom:"Médina de Rabat", nom_en:"Rabat Medina", nom_ar:"مدينة الرباط القديمة", ville:"Rabat", cat:"Médina", img:"images/Medina_Rabat.jpg", maps_url:"https://maps.google.com/?q=Medina+Rabat", desc_fr:"La médina de Rabat offre une expérience authentique avec ses souks et ses artisans locaux.", desc_en:"Rabat's medina offers an authentic experience with its souks.", desc_ar:"مدينة الرباط القديمة تقدم تجربة أصيلة." },

    { id:28, nom:"Volubilis", nom_en:"Volubilis", nom_ar:"وليلي", ville:"Rabat", cat:"Patrimoine", img:"images/Volubilis.jpg", maps_url:"https://maps.google.com/?q=Volubilis+Morocco", desc_fr:"Site archéologique romain classé au patrimoine UNESCO à 30 km de Rabat. Ses mosaïques sont remarquables.", desc_en:"Roman archaeological site UNESCO-listed, 30 km from Rabat.", desc_ar:"موقع أثري روماني مدرج في التراث العالمي." },
    { id:29, nom:"Plage de Rabat", nom_en:"Rabat Beach", nom_ar:"شاطئ الرباط", ville:"Rabat", cat:"Plage", img:"images/Plage_Rabat.jpg", maps_url:"https://maps.google.com/?q=Plage+Rabat", desc_fr:"La plage de Rabat s'étend sur plusieurs kilomètres face à l'Atlantique.", desc_en:"Rabat's beach stretches several kilometres facing the Atlantic.", desc_ar:"يمتد شاطئ الرباط لعدة كيلومترات على الأطلسي." },
    { id:30, nom:"Remparts d'Essaouira", nom_en:"Essaouira Ramparts", nom_ar:"أسوار الصويرة", ville:"Essaouira", cat:"Patrimoine", img:"images/remparts-essaouira.jpg", maps_url:"https://maps.google.com/?q=Essaouira+Ramparts", desc_fr:"Les célèbres remparts portugais du 18e siècle qui surplombent l'Atlantique.", desc_en:"The famous 18th-century Portuguese ramparts overlooking the Atlantic.", desc_ar:"الأسوار البرتغالية الشهيرة من القرن الثامن عشر." },
    { id:31, nom:"Port d'Essaouira", nom_en:"Essaouira Port", nom_ar:"ميناء الصويرة", ville:"Essaouira", cat:"Port", img:"images/Port de essaouira.jpg", maps_url:"https://maps.google.com/?q=Essaouira+Port", desc_fr:"Port de pêche authentique où les barques bleues rentrent chaque matin.", desc_en:"Authentic fishing port where blue boats return each morning.", desc_ar:"ميناء صيد أصيل حيث تعود القوارب الزرقاء كل صباح." },
    { id:32, nom:"Médina d'Essaouira", nom_en:"Essaouira Medina", nom_ar:"مدينة الصويرة القديمة", ville:"Essaouira", cat:"Médina", img:"images/Medina_Essaouira.jpg", maps_url:"https://maps.google.com/?q=Medina+Essaouira", desc_fr:"Médina classée au patrimoine UNESCO avec ses ruelles blanches et bleues et ses galeries d'art.", desc_en:"UNESCO-listed medina with white and blue alleys and art galleries.", desc_ar:"مدينة قديمة مدرجة في التراث العالمي بأزقتها البيضاء والزرقاء." },
    { id:33, nom:"Plage d'Essaouira", nom_en:"Essaouira Beach", nom_ar:"شاطئ الصويرة", ville:"Essaouira", cat:"Plage", img:"images/Plage_Essaouira.jpg", maps_url:"https://maps.google.com/?q=Essaouira+Beach", desc_fr:"Immense plage de sable fin venteuse, réputée pour le kitesurf et le surf.", desc_en:"Immense windy fine sand beach famous for kitesurfing and surfing.", desc_ar:"شاطئ رملي ريحي ضخم مشهور بالكايت سيرف." },
    { id:34, nom:"Skala du Port", nom_en:"Port Skala", nom_ar:"سقالة الميناء", ville:"Essaouira", cat:"Patrimoine", img:"images/Skala_Port.jpg", maps_url:"https://maps.google.com/?q=Skala+Port+Essaouira", desc_fr:"Plateforme d'artillerie du 18e siècle avec ses canons pointés vers l'Atlantique. Lieu de tournage de Game of Thrones.", desc_en:"18th century artillery platform. Game of Thrones filming location.", desc_ar:"منصة مدفعية من القرن الثامن عشر. موقع تصوير Game of Thrones." },
    { id:35, nom:"Galeries d'art Essaouira", nom_en:"Essaouira Art Galleries", nom_ar:"معارض الصويرة الفنية", ville:"Essaouira", cat:"Culture", img:"images/Galeries_Essaouira.jpg", maps_url:"https://maps.google.com/?q=Art+Galleries+Essaouira", desc_fr:"Essaouira abrite plus de 30 galeries d'art présentant des œuvres d'artistes marocains et internationaux.", desc_en:"Essaouira has over 30 art galleries showcasing Moroccan and international artists.", desc_ar:"تضم الصويرة أكثر من 30 معرضاً فنياً." },
    { id:36, nom:"Marina d'Agadir", nom_en:"Agadir Marina", nom_ar:"مارينا أكادير", ville:"Agadir", cat:"Loisirs", img:"images/Marina Agadir.jpg", maps_url:"https://maps.google.com/?q=Agadir+Marina", desc_fr:"Le cœur moderne d'Agadir avec ses restaurants, boutiques et bateaux de plaisance.", desc_en:"The modern heart of Agadir with restaurants and pleasure boats.", desc_ar:"قلب أكادير الحديث بمطاعمه ومحلاته." },
    { id:37, nom:"Plage d'Agadir", nom_en:"Agadir Beach", nom_ar:"شاطئ أكادير", ville:"Agadir", cat:"Plage", img:"images/Plage Agadir.jpeg", maps_url:"https://maps.google.com/?q=Agadir+Beach", desc_fr:"10 km de sable fin protégé du vent par une baie naturelle.", desc_en:"10 km of fine sand sheltered from the wind by a natural bay.", desc_ar:"10 كم من الرمال الناعمة محمية من الريح." },
    { id:38, nom:"Kasbah d'Agadir Oufella", nom_en:"Agadir Oufella Kasbah", nom_ar:"قصبة أكادير أوفلا", ville:"Agadir", cat:"Patrimoine", img:"images/Kasbah_Agadir.jpg", maps_url:"https://maps.google.com/?q=Kasbah+Agadir+Oufella", desc_fr:"Ruines de l'ancienne kasbah sur la colline offrant une vue panoramique sur la ville et l'océan.", desc_en:"Ruins of the old kasbah offering panoramic views over the city and ocean.", desc_ar:"أطلال قصبة أكادير القديمة على التل." },
    { id:39, nom:"Souk El Had", nom_en:"Souk El Had", nom_ar:"سوق الحد", ville:"Agadir", cat:"Marché", img:"images/Souk_El_Had.jpg", maps_url:"https://maps.google.com/?q=Souk+El+Had+Agadir", desc_fr:"Le plus grand souk couvert d'Agadir avec plus de 6000 stands.", desc_en:"Agadir's largest covered souk with over 6000 stalls.", desc_ar:"أكبر سوق مسقوف في أكادير." },
    { id:40, nom:"Musée Amazigh Agadir", nom_en:"Amazigh Heritage Museum", nom_ar:"متحف التراث الأمازيغي", ville:"Agadir", cat:"Culture", img:"images/Musee_Amazigh_Agadir.jpg", maps_url:"https://maps.google.com/?q=Musée+Amazigh+Agadir", desc_fr:"Musée dédié au patrimoine berbère amazigh avec des collections de bijoux et tapis.", desc_en:"Museum dedicated to Amazigh Berber heritage.", desc_ar:"متحف مخصص للتراث الأمازيغي البربري." },

    { id:41, nom:"Médina de Tanger", nom_en:"Tangier Medina", nom_ar:"مدينة طنجة القديمة", ville:"Tanger", cat:"Médina", img:"images/Mdina de tanger.jpg", maps_url:"https://maps.google.com/?q=Medina+Tangier", desc_fr:"Un dédale de ruelles authentiques perché sur une colline avec vue sur le détroit de Gibraltar.", desc_en:"A maze of authentic alleys with views over the Strait of Gibraltar.", desc_ar:"متاهة من الأزقة الأصيلة مع إطلالة على مضيق جبل طارق." },
    { id:42, nom:"Grotte d'Hercule", nom_en:"Cave of Hercules", nom_ar:"كهف هرقل", ville:"Tanger", cat:"Nature", img:"images/Grotte_Hercule_Tanger.jpg", maps_url:"https://maps.google.com/?q=Cave+of+Hercules+Tangier", desc_fr:"Grotte naturelle spectaculaire à 14 km de Tanger dont l'ouverture en forme d'Afrique donne sur l'Atlantique.", desc_en:"Spectacular natural cave 14 km from Tangier.", desc_ar:"كهف طبيعي رائع على بعد 14 كم من طنجة." },
    { id:43, nom:"Cap Spartel", nom_en:"Cap Spartel", nom_ar:"رأس سبارطيل", ville:"Tanger", cat:"Nature", img:"images/Cap Spartal.jpg", maps_url:"https://maps.google.com/?q=Cap+Spartel+Tangier", desc_fr:"Le point de rencontre de l'Atlantique et de la Méditerranée à 14 km de Tanger.", desc_en:"The meeting point of the Atlantic and Mediterranean.", desc_ar:"نقطة التقاء الأطلسي والبحر الأبيض المتوسط." },
    { id:44, nom:"Kasbah de Tanger", nom_en:"Tangier Kasbah", nom_ar:"قصبة طنجة", ville:"Tanger", cat:"Patrimoine", img:"images/Kasbah_Tanger.jpg", maps_url:"https://maps.google.com/?q=Kasbah+Tangier", desc_fr:"Ancienne forteresse dominant la baie de Tanger avec le palais du sultan transformé en musée.", desc_en:"Ancient fortress overlooking Tangier bay with the sultan's palace museum.", desc_ar:"قلعة قديمة تشرف على خليج طنجة." },
    { id:45, nom:"Place du Grand Socco", nom_en:"Grand Socco Square", nom_ar:"ساحة السوق الكبير", ville:"Tanger", cat:"Place", img:"images/Grand_Socco_Tanger.jpg", maps_url:"https://maps.google.com/?q=Grand+Socco+Tangier", desc_fr:"La place principale de Tanger au carrefour entre la médina et la ville moderne.", desc_en:"Tangier's main square at the crossroads of medina and modern city.", desc_ar:"الميدان الرئيسي لطنجة." },
    { id:46, nom:"Plage Malabata", nom_en:"Malabata Beach", nom_ar:"شاطئ مالاباتا", ville:"Tanger", cat:"Plage", img:"images/Plage_Malabata.jpg", maps_url:"https://maps.google.com/?q=Malabata+Beach+Tangier", desc_fr:"Belle plage à l'est de Tanger avec vue sur le détroit de Gibraltar et les côtes espagnoles.", desc_en:"Beautiful beach east of Tangier with views over the Strait of Gibraltar.", desc_ar:"شاطئ جميل شرق طنجة مع إطلالة على مضيق جبل طارق." },
    { id:47, nom:"Médina de Fès", nom_en:"Fes Medina", nom_ar:"مدينة فاس القديمة", ville:"Fès", cat:"Médina", img:"images/Medina_Fes.jpg", maps_url:"https://maps.google.com/?q=Medina+Fes", desc_fr:"La plus grande médina médiévale du monde arabe classée au patrimoine UNESCO. Plus de 9000 ruelles sans voitures.", desc_en:"The largest medieval medina in the Arab world UNESCO-listed.", desc_ar:"أكبر مدينة قديمة في العالم العربي مدرجة في التراث العالمي." },
    { id:48, nom:"Tanneries de Fès", nom_en:"Fes Tanneries", nom_ar:"مدابغ فاس", ville:"Fès", cat:"Artisanat", img:"images/Tanneries_Fes.jpg", maps_url:"https://maps.google.com/?q=Tanneries+Fes", desc_fr:"Les célèbres tanneries Chouara où les artisans teintent le cuir dans des cuves colorées depuis le Moyen Âge.", desc_en:"The famous Chouara tanneries where craftsmen dye leather.", desc_ar:"مدابغ الشوارة الشهيرة." },
    { id:49, nom:"Madrasa Bou Inania", nom_en:"Bou Inania Madrasa", nom_ar:"مدرسة بو عنانية", ville:"Fès", cat:"Patrimoine", img:"images/Madrasa_Bou_Inania.jpg", maps_url:"https://maps.google.com/?q=Madrasa+Bou+Inania+Fes", desc_fr:"La plus belle madrasa de Fès construite au 14e siècle avec ses ornements en bois de cèdre exceptionnels.", desc_en:"Fes' most beautiful 14th century madrasa.", desc_ar:"أجمل مدرسة في فاس من القرن الرابع عشر." },
    { id:50, nom:"Université Al-Quaraouiyine", nom_en:"Al-Quaraouiyine University", nom_ar:"جامعة القرويين", ville:"Fès", cat:"Culture", img:"images/Al_Quaraouiyine.jpg", maps_url:"https://maps.google.com/?q=Al+Quaraouiyine+Fes", desc_fr:"Fondée en 859, c'est la plus ancienne université du monde encore en activité.", desc_en:"Founded in 859, the world's oldest university still in operation.", desc_ar:"تأسست عام 859 وهي أقدم جامعة في العالم لا تزال تعمل." },

    { id:51, nom:"Bab Bou Jeloud", nom_en:"Bab Bou Jeloud Gate", nom_ar:"باب بوجلود", ville:"Fès", cat:"Patrimoine", img:"images/Bab_Bou_Jeloud.jpg", maps_url:"https://maps.google.com/?q=Bab+Bou+Jeloud+Fes", desc_fr:"La porte bleue emblématique de Fès construite en 1913 avec ses mosaïques de zelliges.", desc_en:"The iconic blue gate of Fes built in 1913.", desc_ar:"البوابة الزرقاء الأيقونية لفاس بنيت عام 1913." },
    { id:52, nom:"Borj Nord de Fès", nom_en:"Borj Nord Fes", nom_ar:"برج الشمال فاس", ville:"Fès", cat:"Patrimoine", img:"images/Borj_Nord_Fes.jpg", maps_url:"https://maps.google.com/?q=Borj+Nord+Fes", desc_fr:"Forteresse du 16e siècle offrant une vue panoramique sur toute la médina de Fès.", desc_en:"16th century fortress offering panoramic views over Fes medina.", desc_ar:"قلعة من القرن السادس عشر بإطلالة بانورامية على مدينة فاس." },
    { id:53, nom:"Jardin Jnan Sbil", nom_en:"Jnan Sbil Garden", nom_ar:"حديقة جنان السبيل", ville:"Fès", cat:"Jardin", img:"images/Jnan_Sbil_Fes.jpg", maps_url:"https://maps.google.com/?q=Jnan+Sbil+Fes", desc_fr:"Magnifique jardin royal du 19e siècle récemment restauré à l'entrée de la médina.", desc_en:"Magnificent 19th century royal garden at the medina entrance.", desc_ar:"حديقة ملكية رائعة من القرن التاسع عشر." },
    { id:54, nom:"Musée Dar Batha", nom_en:"Dar Batha Museum", nom_ar:"متحف دار الباثا", ville:"Fès", cat:"Culture", img:"images/Dar_Batha_Fes.jpg", maps_url:"https://maps.google.com/?q=Dar+Batha+Fes", desc_fr:"Musée des arts et traditions de Fès dans un splendide palais hispano-mauresque.", desc_en:"Museum of arts and traditions of Fes in a Hispano-Moorish palace.", desc_ar:"متحف الفنون والتقاليد في قصر إسباني موريسكي." },
    { id:55, nom:"Quartier Bleu Chefchaouen", nom_en:"Chefchaouen Blue Quarter", nom_ar:"الحي الأزرق شفشاون", ville:"Chefchaouen", cat:"Médina", img:"images/Chefchaouen.jpg", maps_url:"https://maps.google.com/?q=Blue+Quarter+Chefchaouen", desc_fr:"Le cœur de Chefchaouen avec ses ruelles entièrement peintes en bleu et blanc.", desc_en:"The heart of Chefchaouen with its alleys painted entirely in blue and white.", desc_ar:"قلب شفشاون بأزقتها المطلية باللون الأزرق والأبيض." },
    { id:56, nom:"Place Uta el-Hammam", nom_en:"Uta el-Hammam Square", nom_ar:"ساحة عطا الحمام", ville:"Chefchaouen", cat:"Place", img:"images/Place_Chefchaouen.jpg", maps_url:"https://maps.google.com/?q=Uta+el+Hammam+Chefchaouen", desc_fr:"La place centrale animée de Chefchaouen avec ses cafés et la grande mosquée.", desc_en:"Chefchaouen's lively central square.", desc_ar:"الميدان المركزي النابض بالحياة في شفشاون." },
    { id:57, nom:"Cascades d'Akchour", nom_en:"Akchour Waterfalls", nom_ar:"شلالات أقشور", ville:"Chefchaouen", cat:"Nature", img:"images/Cascades_Akchour.jpg", maps_url:"https://maps.google.com/?q=Akchour+Waterfalls+Chefchaouen", desc_fr:"Magnifiques cascades situées à 25 km de Chefchaouen accessibles après une randonnée de 2h.", desc_en:"Magnificent waterfalls 25 km from Chefchaouen.", desc_ar:"شلالات رائعة تبعد 25 كم عن شفشاون." },
    { id:58, nom:"Kasbah de Chefchaouen", nom_en:"Chefchaouen Kasbah", nom_ar:"قصبة شفشاون", ville:"Chefchaouen", cat:"Patrimoine", img:"images/Kasbah_Chefchaouen.jpg", maps_url:"https://maps.google.com/?q=Kasbah+Chefchaouen", desc_fr:"Forteresse du 15e siècle au cœur de la médina avec un beau jardin andalou.", desc_en:"15th century fortress in the heart of the medina with an Andalusian garden.", desc_ar:"قلعة من القرن الخامس عشر في قلب المدينة القديمة." },
    { id:59, nom:"Jbel El Kelaa", nom_en:"Jbel El Kelaa", nom_ar:"جبل القلعة", ville:"Chefchaouen", cat:"Nature", img:"images/Jbel_Kelaa.jpg", maps_url:"https://maps.google.com/?q=Jbel+El+Kelaa+Chefchaouen", desc_fr:"Le pic dominant Chefchaouen offrant une vue panoramique sur la ville bleue.", desc_en:"The peak dominating Chefchaouen with panoramic views.", desc_ar:"القمة المهيمنة على شفشاون بإطلالة بانورامية." },
    { id:60, nom:"Kasbah Taourirt", nom_en:"Kasbah Taourirt", nom_ar:"قصبة تاوريرت", ville:"Ouarzazate", cat:"Kasbah", img:"images/Kasbah_Taourirt.jpg", maps_url:"https://maps.google.com/?q=Kasbah+Taourirt+Ouarzazate", desc_fr:"La plus grande kasbah d'Ouarzazate et l'une des mieux préservées du Maroc.", desc_en:"The largest and best-preserved kasbah in Ouarzazate.", desc_ar:"أكبر قصبة في ورزازات وأكثرها حفاظاً." },
    { id:61, nom:"Studios de cinéma", nom_en:"Film Studios", nom_ar:"استوديوهات السينما", ville:"Ouarzazate", cat:"Culture", img:"images/Studios_Ouarzazate.jpg", maps_url:"https://maps.google.com/?q=Film+Studios+Ouarzazate", desc_fr:"Les célèbres studios Atlas Corporation où ont été tournés Lawrence d'Arabie, Gladiator et Game of Thrones.", desc_en:"Famous studios where Lawrence of Arabia, Gladiator and GOT were filmed.", desc_ar:"استوديوهات أطلس الشهيرة حيث صُوِّرت أفلام عالمية." },
    { id:62, nom:"Aït Ben Haddou", nom_en:"Aït Ben Haddou", nom_ar:"آيت بنحدو", ville:"Ouarzazate", cat:"Patrimoine", img:"images/Ait_Ben_Haddou.jpg", maps_url:"https://maps.google.com/?q=Ait+Ben+Haddou+Ouarzazate", desc_fr:"Ksar fortifié classé au patrimoine UNESCO à 30 km d'Ouarzazate.", desc_en:"UNESCO-listed fortified ksar 30 km from Ouarzazate.", desc_ar:"قصر محصن مدرج في التراث العالمي على بعد 30 كم." },
    { id:63, nom:"Vallée du Drâa", nom_en:"Draa Valley", nom_ar:"وادي درعة", ville:"Ouarzazate", cat:"Nature", img:"images/Vallee_Draa.jpg", maps_url:"https://maps.google.com/?q=Vallée+du+Drâa+Ouarzazate", desc_fr:"La plus longue vallée du Maroc avec ses palmeraies et ses ksour berbères.", desc_en:"Morocco's longest valley with palm groves and Berber ksour.", desc_ar:"أطول وادٍ في المغرب بنخيله وقصوره الأمازيغية." },
    { id:64, nom:"Musée du Cinéma Ouarzazate", nom_en:"Ouarzazate Cinema Museum", nom_ar:"متحف سينما ورزازات", ville:"Ouarzazate", cat:"Culture", img:"images/Musee_Cinema_Ouarzazate.jpg", maps_url:"https://maps.google.com/?q=Cinema+Museum+Ouarzazate", desc_fr:"Musée retraçant l'histoire cinématographique d'Ouarzazate avec costumes et accessoires.", desc_en:"Museum tracing Ouarzazate's film history with costumes and props.", desc_ar:"متحف يتتبع التاريخ السينمائي لورزازات." },
    { id:65, nom:"Dunes de l'Erg Chebbi", nom_en:"Erg Chebbi Dunes", nom_ar:"كثبان إرق الشبي", ville:"Merzouga", cat:"Nature", img:"images/Merzouga.jpg", maps_url:"https://maps.google.com/?q=Erg+Chebbi+Merzouga", desc_fr:"Les plus grandes dunes de sable du Maroc atteignant 150 mètres de hauteur.", desc_en:"Morocco's largest sand dunes reaching 150 metres high.", desc_ar:"أكبر كثبان رملية في المغرب تصل إلى 150 متراً." },
    { id:66, nom:"Lac Dayet Srji", nom_en:"Dayet Srji Lake", nom_ar:"بحيرة دايت سرجي", ville:"Merzouga", cat:"Nature", img:"images/Lac_Merzouga.jpg", maps_url:"https://maps.google.com/?q=Dayet+Srji+Merzouga", desc_fr:"Lac saisonnier attirant des flamants roses et de nombreuses espèces d'oiseaux migrateurs.", desc_en:"Seasonal lake attracting flamingos and migratory birds.", desc_ar:"بحيرة موسمية تجذب طيور الفلامنغو والطيور المهاجرة." },
    { id:67, nom:"Bivouac désert Merzouga", nom_en:"Merzouga Desert Bivouac", nom_ar:"مخيم صحراء مرزوكة", ville:"Merzouga", cat:"Aventure", img:"images/Bivouac_Merzouga.jpg", maps_url:"https://maps.google.com/?q=Desert+Bivouac+Merzouga", desc_fr:"Passer une nuit sous les étoiles du Sahara dans un campement de tentes berbères.", desc_en:"Spend a night under Sahara stars in a Berber tent camp.", desc_ar:"قضاء ليلة تحت نجوم الصحراء في مخيم خيام أمازيغية." },
    { id:68, nom:"Village de Hassilabied", nom_en:"Hassilabied Village", nom_ar:"قرية حسي لبيض", ville:"Merzouga", cat:"Culture", img:"images/Hassilabied.jpg", maps_url:"https://maps.google.com/?q=Hassilabied+Merzouga", desc_fr:"Village traditionnel berbère aux pieds des dunes de l'Erg Chebbi.", desc_en:"Traditional Berber village at the foot of the Erg Chebbi dunes.", desc_ar:"قرية أمازيغية تقليدية عند أقدام كثبان إرق الشبي." },
    { id:69, nom:"Forêt de cèdres Ifrane", nom_en:"Ifrane Cedar Forest", nom_ar:"غابة أرز إفران", ville:"Ifrane", cat:"Nature", img:"images/Foret_Cedres_Ifrane.jpg", maps_url:"https://maps.google.com/?q=Cedar+Forest+Ifrane", desc_fr:"La plus grande cédraie du Maroc avec des arbres millénaires et des singes magots en liberté.", desc_en:"Morocco's largest cedar forest with millennium-old trees and Barbary macaques.", desc_ar:"أكبر غابة أرز في المغرب بأشجار عمرها آلاف السنين." },
    { id:70, nom:"Lac Dayet Aoua", nom_en:"Dayet Aoua Lake", nom_ar:"بحيرة دايت عوا", ville:"Ifrane", cat:"Nature", img:"images/Lac_Dayet_Aoua.jpg", maps_url:"https://maps.google.com/?q=Dayet+Aoua+Ifrane", desc_fr:"Magnifique lac de montagne entouré de forêts de chênes et de pins.", desc_en:"Magnificent mountain lake surrounded by oak and pine forests.", desc_ar:"بحيرة جبلية رائعة محاطة بغابات البلوط والصنوبر." },
    { id:71, nom:"Station ski Michlifen", nom_en:"Michlifen Ski Resort", nom_ar:"منتجع تزلج ميشليفن", ville:"Ifrane", cat:"Sport", img:"images/Michlifen_Ski.jpg", maps_url:"https://maps.google.com/?q=Michlifen+Ski+Ifrane", desc_fr:"La seule station de ski fonctionnelle du Maroc à 10 km d'Ifrane.", desc_en:"Morocco's only functional ski resort 10 km from Ifrane.", desc_ar:"المنتجع الوحيد للتزلج في المغرب." },
    { id:72, nom:"Parc National Ifrane", nom_en:"Ifrane National Park", nom_ar:"الحديقة الوطنية إفران", ville:"Ifrane", cat:"Nature", img:"images/Parc_Ifrane.jpg", maps_url:"https://maps.google.com/?q=Ifrane+National+Park", desc_fr:"Parc naturel de 125 000 hectares avec des forêts de cèdres et cerfs de Barbarie.", desc_en:"Natural park of 125,000 hectares with cedar forests and Barbary deer.", desc_ar:"حديقة وطنية تبلغ مساحتها 125000 هكتار بغابات الأرز." },
    { id:73, nom:"Plage de Taghazout", nom_en:"Taghazout Beach", nom_ar:"شاطئ تغاوت", ville:"Taghazout", cat:"Plage", img:"images/Plage_Taghazout.jpg", maps_url:"https://maps.google.com/?q=Taghazout+Beach", desc_fr:"La plage principale de Taghazout avec ses vagues parfaites pour le surf.", desc_en:"Taghazout's main beach with perfect waves for surfing.", desc_ar:"الشاطئ الرئيسي لتغاوت بأمواجه المثالية للتزلج." },
    { id:74, nom:"Anchor Point Taghazout", nom_en:"Anchor Point", nom_ar:"نقطة الارتكاز", ville:"Taghazout", cat:"Surf", img:"images/Anchor_Point.jpg", maps_url:"https://maps.google.com/?q=Anchor+Point+Taghazout", desc_fr:"L'un des meilleurs spots de surf d'Afrique avec des vagues de droite pouvant atteindre 4 mètres.", desc_en:"One of Africa's best surf spots with right-hand waves up to 4 metres.", desc_ar:"أحد أفضل مواقع ركوب الأمواج في أفريقيا." },
    { id:75, nom:"Village d'Aourir", nom_en:"Aourir Village", nom_ar:"قرية أورير", ville:"Taghazout", cat:"Culture", img:"images/Aourir_Village.jpg", maps_url:"https://maps.google.com/?q=Aourir+Beach+Taghazout", desc_fr:"Village côtier adjacent à Taghazout avec son marché aux bananes et sa plage tranquille.", desc_en:"Coastal village adjacent to Taghazout with its banana market.", desc_ar:"قرية ساحلية مجاورة لتغاوت بسوق الموز." },

    { id:76, nom:"Dunes atlantiques Dakhla", nom_en:"Dakhla Atlantic Dunes", nom_ar:"كثبان الداخلة الأطلسية", ville:"Dakhla", cat:"Nature", img:"images/Dakhla_Dunes.jpg", maps_url:"https://maps.google.com/?q=Dakhla+Dunes", desc_fr:"Dunes de sable dorées qui rencontrent l'océan Atlantique — un paysage unique au monde.", desc_en:"Golden sand dunes meeting the Atlantic Ocean — a unique landscape worldwide.", desc_ar:"كثبان رملية ذهبية تلتقي بالمحيط الأطلسي — منظر فريد في العالم." },

    { id:77, nom:"Plage de Saïdia", nom_en:"Saidia Beach", nom_ar:"شاطئ السعيدية", ville:"Saïdia", cat:"Plage", img:"images/Saidia.jpg", maps_url:"https://maps.google.com/?q=Saidia+Beach", desc_fr:"14 km de sable fin sur la Méditerranée, la plus longue plage du Maroc méditerranéen.", desc_en:"14 km of fine sand on the Mediterranean, the longest beach on Morocco's Mediterranean coast.", desc_ar:"14 كم من الرمال الناعمة على البحر المتوسط، أطول شاطئ على الساحل المتوسطي للمغرب." },
    { id:78, nom:"Marina de Saïdia", nom_en:"Saidia Marina", nom_ar:"مارينا السعيدية", ville:"Saïdia", cat:"Loisirs", img:"images/Saidia_Marina.jpg", maps_url:"https://maps.google.com/?q=Saidia+Marina", desc_fr:"Marina moderne avec restaurants, boutiques et activités nautiques au bord de la Méditerranée.", desc_en:"Modern marina with restaurants, shops and water sports on the Mediterranean.", desc_ar:"مارينا حديثة مع مطاعم ومحلات وأنشطة مائية على شاطئ البحر المتوسط." },
    { id:79, nom:"Réserve de la Moulouya", nom_en:"Moulouya Reserve", nom_ar:"محمية ملوية", ville:"Saïdia", cat:"Nature", img:"images/Saidia_Moulouya.jpg", maps_url:"https://maps.google.com/?q=Moulouya+Reserve+Saidia", desc_fr:"Réserve naturelle à l'embouchure de la Moulouya, paradis pour les oiseaux migrateurs.", desc_en:"Natural reserve at the Moulouya estuary, paradise for migratory birds.", desc_ar:"محمية طبيعية عند مصب ملوية، جنة للطيور المهاجرة." },
    { id:80, nom:"Plage Quemado Al Hoceïma", nom_en:"Quemado Beach Al Hoceima", nom_ar:"شاطئ الكيمادو الحسيمة", ville:"Al Hoceïma", cat:"Plage", img:"images/Al_Hoceima.jpg", maps_url:"https://maps.google.com/?q=Quemado+Beach+Al+Hoceima", desc_fr:"La plage principale d'Al Hoceïma avec ses eaux turquoise cristallines, parmi les plus belles du Maroc.", desc_en:"Al Hoceima's main beach with crystal turquoise waters, among Morocco's most beautiful.", desc_ar:"الشاطئ الرئيسي للحسيمة بمياه فيروزية صافية من أجمل شواطئ المغرب." },
    { id:81, nom:"Parc National Al Hoceïma", nom_en:"Al Hoceima National Park", nom_ar:"الحديقة الوطنية الحسيمة", ville:"Al Hoceïma", cat:"Nature", img:"images/Al_Hoceima_Parc.jpg", maps_url:"https://maps.google.com/?q=Al+Hoceima+National+Park", desc_fr:"Parc national marin avec des falaises spectaculaires, des grottes marines et une biodiversité exceptionnelle.", desc_en:"Marine national park with spectacular cliffs, sea caves and exceptional biodiversity.", desc_ar:"حديقة وطنية بحرية بجروف رائعة وكهوف بحرية وتنوع بيولوجي استثنائي." },
    { id:82, nom:"Remparts d'Asilah", nom_en:"Asilah Ramparts", nom_ar:"أسوار أصيلة", ville:"Asilah", cat:"Patrimoine", img:"images/Asilah_Remparts.jpg", maps_url:"https://maps.google.com/?q=Asilah+Ramparts", desc_fr:"Remparts portugais du 15e siècle dominant l'Atlantique, entourés de fresques murales contemporaines.", desc_en:"15th century Portuguese ramparts overlooking the Atlantic, surrounded by contemporary murals.", desc_ar:"أسوار برتغالية من القرن الخامس عشر تطل على الأطلسي محاطة بجداريات معاصرة." },
    { id:83, nom:"Fresques murales Asilah", nom_en:"Asilah Wall Murals", nom_ar:"جداريات أصيلة", ville:"Asilah", cat:"Culture", img:"images/Asilah_Murales.jpg", maps_url:"https://maps.google.com/?q=Asilah+Murals", desc_fr:"Des fresques murales d'artistes du monde entier ornent les murs de la médina depuis le festival annuel.", desc_en:"Wall murals by artists from around the world adorn the medina walls since the annual festival.", desc_ar:"جداريات فنية لفنانين من العالم أجمع تزيّن جدران المدينة منذ المهرجان السنوي." },
    { id:84, nom:"Plage d'Asilah", nom_en:"Asilah Beach", nom_ar:"شاطئ أصيلة", ville:"Asilah", cat:"Plage", img:"images/Asilah_Plage.jpg", maps_url:"https://maps.google.com/?q=Asilah+Beach", desc_fr:"Belle plage atlantique face aux remparts historiques d'Asilah — très photogénique.", desc_en:"Beautiful Atlantic beach facing Asilah's historic ramparts — very photogenic.", desc_ar:"شاطئ أطلسي جميل مقابل الأسوار التاريخية لأصيلة." },
    { id:85, nom:"Criques de Mirleft", nom_en:"Mirleft Coves", nom_ar:"خلجان ميرلفت", ville:"Mirleft", cat:"Nature", img:"images/Mirleft.jpg", maps_url:"https://maps.google.com/?q=Mirleft+Coves", desc_fr:"Des criques sauvages et préservées accessibles à pied depuis Mirleft — parmi les plus belles du Maroc.", desc_en:"Wild and preserved coves accessible on foot from Mirleft — among Morocco's most beautiful.", desc_ar:"خلجان برية محفوظة يمكن الوصول إليها سيراً من ميرلفت." },
    { id:86, nom:"Falaises de Mirleft", nom_en:"Mirleft Cliffs", nom_ar:"جروف ميرلفت", ville:"Mirleft", cat:"Nature", img:"images/Mirleft_Falaises.jpg", maps_url:"https://maps.google.com/?q=Mirleft+Cliffs", desc_fr:"Falaises spectaculaires plongeant dans l'Atlantique — couchers de soleil inoubliables.", desc_en:"Spectacular cliffs plunging into the Atlantic — unforgettable sunsets.", desc_ar:"جروف رائعة تنغمس في الأطلسي وغروب شمس لا يُنسى." },
    { id:87, nom:"Architecture Art Déco Sidi Ifni", nom_en:"Sidi Ifni Art Deco", nom_ar:"طراز فن الديكو سيدي إفني", ville:"Sidi Ifni", cat:"Architecture", img:"images/Sidi_Ifni.jpg", maps_url:"https://maps.google.com/?q=Sidi+Ifni+Architecture", desc_fr:"Ensemble architectural Art Déco espagnol des années 1930 unique en Afrique — classé monument historique.", desc_en:"Spanish Art Deco architectural ensemble from the 1930s unique in Africa.", desc_ar:"مجموعة معمارية إسبانية من الثلاثينيات فريدة في أفريقيا." },
    { id:88, nom:"Plage de Sidi Ifni", nom_en:"Sidi Ifni Beach", nom_ar:"شاطئ سيدي إفني", ville:"Sidi Ifni", cat:"Plage", img:"images/Sidi_Ifni_Plage.jpg", maps_url:"https://maps.google.com/?q=Sidi+Ifni+Beach", desc_fr:"Longue plage sauvage face à l'Atlantique avec de bonnes vagues pour le surf.", desc_en:"Long wild beach facing the Atlantic with good waves for surfing.", desc_ar:"شاطئ طويل برية على الأطلسي بأمواج جيدة للتزلج." }  ],

  gastronomie: [
    { id:89, nom:"Tajine", nom_en:"Tajine", nom_ar:"الطاجين", type:"Plat principal", prix:"5-12€", img:"images/Tajine.jpg", desc_fr:"Le plat emblématique du Maroc cuit lentement dans un plat en terre cuite conique.", desc_en:"Morocco's emblematic dish slow-cooked in a conical earthenware pot.", desc_ar:"الطبق الرمزي للمغرب." },
    { id:90, nom:"Couscous", nom_en:"Couscous", nom_ar:"الكسكس", type:"Plat principal", prix:"6-15€", img:"images/Couscous.jpg", desc_fr:"Le plat du vendredi par excellence servi en famille.", desc_en:"The quintessential Friday dish served with family.", desc_ar:"طبق الجمعة بامتياز." },
    { id:91, nom:"Pastilla", nom_en:"Pastilla", nom_ar:"البسطيلة", type:"Entrée", prix:"4-10€", img:"images/Pastilla.jpg", desc_fr:"Feuilleté sucré-salé farci de poulet amandes et cannelle.", desc_en:"Sweet-savoury pastry stuffed with chicken almonds and cinnamon.", desc_ar:"فطيرة حلوة ومالحة بالدجاج واللوز." },
    { id:92, nom:"Harira", nom_en:"Harira", nom_ar:"الحريرة", type:"Soupe", prix:"1-3€", img:"images/Harira.jpg", desc_fr:"Soupe épaisse de tomates lentilles et pois chiches.", desc_en:"Thick soup of tomatoes lentils and chickpeas.", desc_ar:"حساء كثيف بالطماطم والعدس." },
    { id:93, nom:"Msemen", nom_en:"Msemen", nom_ar:"المسمن", type:"Petit-déjeuner", prix:"0.5-2€", img:"images/Msemen.jpg", desc_fr:"Crêpe feuilletée marocaine servie avec du miel et du beurre.", desc_en:"Moroccan layered flatbread with honey and butter.", desc_ar:"خبز مغربي طبقي مع العسل والزبدة." },
    { id:94, nom:"Thé à la menthe", nom_en:"Mint Tea", nom_ar:"أتاي", type:"Boisson", prix:"0.5-2€", img:"images/The_menthe.jpg", desc_fr:"Rituel d'hospitalité marocain versé de haut pour créer de la mousse.", desc_en:"Moroccan hospitality ritual.", desc_ar:"طقس الضيافة المغربي." },
    { id:95, nom:"Mechoui", nom_en:"Mechoui", nom_ar:"المشوي", type:"Plat principal", prix:"8-20€", img:"images/Mechoui.jpg", desc_fr:"Agneau entier rôti lentement dans un four traditionnel.", desc_en:"Whole lamb slowly roasted in a traditional oven.", desc_ar:"خروف كامل يُشوى في فرن تقليدي." },
    { id:96, nom:"Briouates", nom_en:"Briouates", nom_ar:"البريوات", type:"Entrée", prix:"2-5€", img:"images/Briouates.jpg", desc_fr:"Triangles de pâte filo farcis de viande épicée ou amandes au miel.", desc_en:"Filo pastry triangles filled with spiced meat or honey almonds.", desc_ar:"مثلثات من عجينة الفيلو محشوة." },
    { id:97, nom:"Sardines grillées", nom_en:"Grilled Sardines", nom_ar:"السردين المشوي", type:"Plat principal", prix:"3-8€", img:"images/Sardines.jpg", desc_fr:"Spécialité des villes côtières pêchées le matin grillées le midi.", desc_en:"Speciality of coastal cities.", desc_ar:"تخصص المدن الساحلية." },
    { id:98, nom:"Chebakia", nom_en:"Chebakia", nom_ar:"الشباكية", type:"Dessert", prix:"1-3€", img:"images/Chebakia.jpg", desc_fr:"Pâtisserie en forme de fleur trempée dans du miel.", desc_en:"Flower-shaped pastry dipped in honey.", desc_ar:"حلوى على شكل زهرة مغموسة في العسل." },
    { id:99, nom:"Rfissa", nom_en:"Rfissa", nom_ar:"الرفيسة", type:"Plat principal", prix:"5-12€", img:"images/Rfissa.jpg", desc_fr:"Msemen émietté avec poulet lentilles et fenugrec.", desc_en:"Crumbled msemen with chicken lentils and fenugreek.", desc_ar:"مسمن مفتت مع الدجاج والعدس." },
    { id:100, nom:"Tanjia", nom_en:"Tanjia", nom_ar:"التنجية", type:"Plat principal", prix:"6-14€", img:"images/Tanjia.jpg", desc_fr:"Spécialité de Marrakech viande cuite dans une amphore dans les braises.", desc_en:"Marrakech speciality meat cooked in a clay amphora.", desc_ar:"تخصص مراكش لحم يُطهى في جرة طينية." },
    { id:101, nom:"Bastilla au lait", nom_en:"Milk Bastilla", nom_ar:"بسطيلة بالحليب", type:"Dessert", prix:"3-7€", img:"images/Bastilla_lait.jpg", desc_fr:"Brick croustillant garni de crème amandes et cannelle.", desc_en:"Crispy brick pastry with cream almonds and cinnamon.", desc_ar:"بريك مقرمش بكريمة واللوز." },
    { id:102, nom:"Khobz", nom_en:"Moroccan Bread", nom_ar:"الخبز", type:"Accompagnement", prix:"0.2-0.5€", img:"images/Khobz.jpg", desc_fr:"Pain rond marocain cuit au four traditionnel.", desc_en:"Round Moroccan bread baked in a traditional oven.", desc_ar:"خبز مغربي مستدير في فرن تقليدي." },
    { id:103, nom:"Zaalouk", nom_en:"Zaalouk", nom_ar:"الزعلوك", type:"Entrée", prix:"2-4€", img:"images/Zaalouk.jpg", desc_fr:"Salade d'aubergines et tomates grillées assaisonnée d'ail et cumin.", desc_en:"Warm salad of grilled eggplant and tomatoes.", desc_ar:"سلطة الباذنجان والطماطم المشوية." },
    { id:16, nom:"Bissara", nom_en:"Bissara", nom_ar:"البصارة", type:"Soupe", prix:"1-2€", img:"images/Bissara.jpg", desc_fr:"Soupe épaisse de fèves ou pois cassés, assaisonnée d'huile d'olive, cumin et paprika. Petit-déjeuner populaire dans le nord du Maroc.", desc_en:"Thick soup of broad beans or split peas, seasoned with olive oil, cumin and paprika.", desc_ar:"حساء كثيف من الفول أو البازلاء المقشرة مع زيت الزيتون والكمون." },
    { id:17, nom:"Makouda", nom_en:"Makouda", nom_ar:"المقودة", type:"Street food", prix:"0.5-2€", img:"images/Makouda.jpg", desc_fr:"Boulettes de pommes de terre frites croustillantes, servies dans du pain avec harissa. Street food populaire dans tout le Maroc.", desc_en:"Crispy fried potato balls served in bread with harissa. Popular street food throughout Morocco.", desc_ar:"كرات البطاطس المقلية المقرمشة تُقدَّم في الخبز مع الهريسة." },
    { id:18, nom:"Seffa", nom_en:"Seffa", nom_ar:"السفة", type:"Plat principal", prix:"4-10€", img:"images/Seffa.jpg", desc_fr:"Vermicelles sucrés à la cannelle, au sucre glace et aux amandes grillées. Plat festif servi lors des grandes occasions.", desc_en:"Sweet vermicelli with cinnamon, icing sugar and roasted almonds. Festive dish for special occasions.", desc_ar:"شعيرية حلوة بالقرفة والسكر البودرة واللوز المحمص." },
    { id:19, nom:"Tangia Marrakchia", nom_en:"Tangia Marrakchia", nom_ar:"التنجية المراكشية", type:"Plat principal", prix:"6-14€", img:"images/Tanjia.jpg", desc_fr:"Spécialité unique de Marrakech : viande d'agneau marinée cuite dans une amphore en terre cuite dans les braises du hammam.", desc_en:"Unique Marrakech specialty: marinated lamb cooked in a clay amphora in hammam embers.", desc_ar:"تخصص مراكش الفريد: لحم الخروف المتبل يُطهى في جرة طينية على جمر الحمام." },
    { id:20, nom:"Kefta", nom_en:"Kefta", nom_ar:"الكفتة", type:"Grillades", prix:"3-8€", img:"images/Kefta.jpg", desc_fr:"Boulettes de viande hachée épicées grillées sur charbon, servies avec du pain et des salades.", desc_en:"Spiced minced meat balls grilled on charcoal, served with bread and salads.", desc_ar:"كرات اللحم المفروم المتبل المشوية على الفحم مع الخبز والسلطات." },
    { id:21, nom:"Merguez", nom_en:"Merguez", nom_ar:"المرقاز", type:"Grillades", prix:"3-7€", img:"images/Merguez.jpg", desc_fr:"Saucisses épicées à base de viande de bœuf ou d'agneau, grillées sur charbon. Incontournable des grillades marocaines.", desc_en:"Spiced beef or lamb sausages grilled on charcoal. A must at Moroccan barbecues.", desc_ar:"نقانق متبلة من لحم البقر أو الخروف مشوية على الفحم." },
    { id:22, nom:"Shlada Jdida", nom_en:"Shlada Jdida", nom_ar:"شلادة جديدة", type:"Salade", prix:"2-4€", img:"images/Shlada.jpg", desc_fr:"Salade de carottes cuites épicées à la coriandre, cumin et citron. Accompagnement traditionnel de tout repas marocain.", desc_en:"Spiced cooked carrot salad with coriander, cumin and lemon.", desc_ar:"سلطة الجزر المطبوخة المتبلة بالكزبرة والكمون والليمون." },
    { id:23, nom:"Taktouka", nom_en:"Taktouka", nom_ar:"التقطوقة", type:"Entrée", prix:"2-4€", img:"images/Taktouka.jpg", desc_fr:"Salade chaude de tomates et poivrons grillés à l'huile d'olive et à l'ail. Entrée emblématique des repas marocains.", desc_en:"Warm salad of grilled tomatoes and peppers with olive oil and garlic.", desc_ar:"سلطة دافئة من الطماطم والفلفل المشوي بزيت الزيتون والثوم." },
    { id:24, nom:"Mrouzia", nom_en:"Mrouzia", nom_ar:"المروزية", type:"Plat principal", prix:"8-18€", img:"images/Mrouzia.jpg", desc_fr:"Tajine sucré-salé d'agneau aux raisins secs, miel et amandes. Plat traditionnel préparé lors de l'Aïd al-Adha.", desc_en:"Sweet-savoury lamb tajine with raisins, honey and almonds. Traditional Eid al-Adha dish.", desc_ar:"طاجين خروف حلو ومالح بالزبيب والعسل واللوز. طبق تقليدي لعيد الأضحى." },
    { id:25, nom:"Bastilla au Poisson", nom_en:"Fish Bastilla", nom_ar:"بسطيلة بالسمك", type:"Entrée", prix:"5-12€", img:"images/Bastilla_Poisson.jpg", desc_fr:"Version côtière de la pastilla avec du poisson et des fruits de mer. Spécialité d'Essaouira et des villes côtières.", desc_en:"Coastal version of pastilla with fish and seafood. Speciality of Essaouira and coastal cities.", desc_ar:"نسخة ساحلية من البسطيلة بالسمك وثمار البحر. تخصص الصويرة والمدن الساحلية." },
    { id:26, nom:"Amlou", nom_en:"Amlou", nom_ar:"أملو", type:"Accompagnement", prix:"2-5€", img:"images/Amlou.jpg", desc_fr:"Pâte à tartiner berbère à base d'huile d'argan, amandes et miel. Spécialité du Souss servie au petit-déjeuner.", desc_en:"Berber spread made of argan oil, almonds and honey. Souss speciality served at breakfast.", desc_ar:"مربى أمازيغية من زيت الأركان واللوز والعسل. تخصص سوس يُقدَّم في الإفطار." },
    { id:27, nom:"Chermoula", nom_en:"Chermoula", nom_ar:"الشرمولة", type:"Sauce", prix:"1-3€", img:"images/Chermoula.jpg", desc_fr:"Marinade et sauce à base de coriandre, cumin, citron et ail. Utilisée pour mariner le poisson et les grillades.", desc_en:"Marinade and sauce made of coriander, cumin, lemon and garlic. Used to marinate fish and grills.", desc_ar:"تتبيلة وصلصة من الكزبرة والكمون والليمون والثوم." },
    { id:28, nom:"Sellou", nom_en:"Sellou", nom_ar:"السلو", type:"Dessert", prix:"2-5€", img:"images/Sellou.jpg", desc_fr:"Friandise sucrée à base de farine grillée, sésame, amandes et miel. Servie pendant le Ramadan et les fêtes.", desc_en:"Sweet treat made of roasted flour, sesame, almonds and honey. Served during Ramadan and celebrations.", desc_ar:"حلوى من الدقيق المحمص والسمسم واللوز والعسل. تُقدَّم في رمضان والأعياد." },
    { id:29, nom:"Atay b'Naanaa", nom_en:"Moroccan Mint Tea", nom_ar:"أتاي بالنعناع", type:"Boisson", prix:"0.5-2€", img:"images/The_menthe.jpg", desc_fr:"L'art du thé marocain : thé vert, menthe fraîche et sucre, versé de haut en trois fois pour créer de la mousse.", desc_en:"The art of Moroccan tea: green tea, fresh mint and sugar, poured from high three times to create foam.", desc_ar:"فن الشاي المغربي: شاي أخضر ونعناع طازج وسكر، يُسكب من علٍ ثلاث مرات." },
    { id:30, nom:"Kaab el Ghzal", nom_en:"Gazelle Horns", nom_ar:"كعب الغزال", type:"Pâtisserie", prix:"1-3€", img:"images/Kaab_Ghzal.jpg", desc_fr:"Pâtisserie en forme de corne de gazelle fourrée à la pâte d'amandes parfumée à l'eau de fleur d'oranger.", desc_en:"Gazelle horn shaped pastry filled with almond paste flavoured with orange blossom water.", desc_ar:"حلوى على شكل قرن الغزال محشوة بعجينة اللوز المعطرة بماء زهر البرتقال." },
    { id:31, nom:"Viande be Lbar9ou9", nom_en:"Lamb with Prunes", nom_ar:"اللحم بالبرقوق", type:"Plat principal", prix:"8-18€", img:"images/Viande_Barquoq.jpg", desc_fr:"Tajine sucré-salé d'agneau mijoté avec des pruneaux, du miel, de la cannelle et des amandes grillées. Un mariage parfait entre le salé et le sucré typiquement marocain.", desc_en:"Sweet and savoury lamb tajine slow-cooked with prunes, honey, cinnamon and toasted almonds.", desc_ar:"طاجين خروف حلو ومالح مطهو ببطء مع البرقوق والعسل والقرفة واللوز المحمص." },
    { id:32, nom:"Djaj Mhamer", nom_en:"Djaj Mhamer", nom_ar:"الدجاج المحمر", type:"Plat principal", prix:"6-14€", img:"images/Djaj_Mhamer.jpg", desc_fr:"Poulet doré et croustillant mijoté dans un mélange de beurre, safran, gingembre et oignons caramélisés. L'un des plats les plus savoureux de la cuisine marocaine.", desc_en:"Golden crispy chicken slow-cooked in butter, saffron, ginger and caramelised onions.", desc_ar:"دجاج ذهبي مقرمش مطهو ببطء بالزبدة والزعفران والزنجبيل والبصل المكرمل." }
  ],

  evenements: [
    { id:104, nom:"Festival Gnaoua", nom_en:"Gnaoua Festival", nom_ar:"مهرجان كناوة", ville:"Essaouira", periode:"Juin", jour:"15", emoji:"🎵", desc_fr:"Festival mondial de musique Gnaoua à Essaouira. Des dizaines de scènes gratuites pendant 4 jours.", desc_en:"World festival of Gnaoua music in Essaouira.", desc_ar:"مهرجان موسيقى كناوة العالمي." },
    { id:105, nom:"Ramadan au Maroc", nom_en:"Ramadan in Morocco", nom_ar:"رمضان في المغرب", ville:"Tout le Maroc", periode:"Variable", jour:"01", emoji:"🌙", desc_fr:"Le mois sacré transforme le Maroc : journées calmes nuits festives.", desc_en:"The holy month transforms Morocco.", desc_ar:"الشهر المقدس يحوّل المغرب." },
    { id:106, nom:"Festival Film Marrakech", nom_en:"Marrakech Film Festival", nom_ar:"مهرجان مراكش للفيلم", ville:"Marrakech", periode:"Décembre", jour:"01", emoji:"🎬", desc_fr:"L'un des plus grands festivals de cinéma d'Afrique.", desc_en:"One of Africa's largest film festivals.", desc_ar:"أحد أكبر مهرجانات السينما في أفريقيا." },
    { id:107, nom:"Fête du Trône", nom_en:"Throne Day", nom_ar:"عيد العرش", ville:"Tout le Maroc", periode:"Juillet", jour:"30", emoji:"👑", desc_fr:"Célébration nationale du 30 juillet.", desc_en:"National celebration on July 30th.", desc_ar:"احتفال وطني في 30 يوليو." },
    { id:108, nom:"Marathon des Sables", nom_en:"Marathon des Sables", nom_ar:"ماراثون الرمال", ville:"Sahara Sud", periode:"Avril", jour:"10", emoji:"🏃", desc_fr:"250 km en 6 jours dans le Sahara marocain.", desc_en:"250 km in 6 days through the Sahara.", desc_ar:"250 كم في 6 أيام عبر الصحراء." },
    { id:109, nom:"Moussem de Tan-Tan", nom_en:"Tan-Tan Moussem", nom_ar:"موسم طانطان", ville:"Tan-Tan", periode:"Avril", jour:"20", emoji:"🐪", desc_fr:"Grand rassemblement de tribus nomades sahariennes UNESCO.", desc_en:"Grand gathering of Saharan nomadic tribes UNESCO-listed.", desc_ar:"تجمع القبائل الصحراوية الرحالة." },
    { id:110, nom:"Festival des Roses", nom_en:"Rose Festival", nom_ar:"مهرجان الورود", ville:"Kelaat M'Gouna", periode:"Mai", jour:"10", emoji:"🌹", desc_fr:"Festival célébrant la récolte des roses dans la vallée du Dadès.", desc_en:"Festival celebrating the rose harvest.", desc_ar:"مهرجان حصاد الورود." },
    { id:111, nom:"Festival Timitar", nom_en:"Timitar Festival", nom_ar:"مهرجان تيميتار", ville:"Agadir", periode:"Juillet", jour:"05", emoji:"🎶", desc_fr:"Grand festival de musiques amazighes et du monde à Agadir.", desc_en:"Major Amazigh and world music festival.", desc_ar:"مهرجان الموسيقى الأمازيغية والعالمية." },
    { id:112, nom:"Moussem Moulay Idriss", nom_en:"Moulay Idriss Moussem", nom_ar:"موسم مولاي إدريس", ville:"Moulay Idriss Zerhoun", periode:"Août", jour:"15", emoji:"🕌", desc_fr:"Pèlerinage religieux annuel à la ville sainte de Moulay Idriss.", desc_en:"Annual religious pilgrimage to the holy city.", desc_ar:"حج ديني سنوي إلى مدينة مولاي إدريس المقدسة." },
    { id:113, nom:"Eid al-Adha", nom_en:"Eid al-Adha", nom_ar:"عيد الأضحى", ville:"Tout le Maroc", periode:"Variable", jour:"01", emoji:"🐑", desc_fr:"Fête du sacrifice l'une des plus importantes du calendrier islamique.", desc_en:"Feast of Sacrifice.", desc_ar:"عيد الأضحى." }
  ],

  conseils: [
    { id:114, icon:"💰", titre:"Monnaie", titre_en:"Currency", titre_ar:"العملة", cat:"Argent", importance:"Essentiel", desc_fr:"La monnaie est le Dirham (MAD). 1€ = 10.8 MAD. Négocier dans les souks est normal.", desc_en:"The currency is the Dirham (MAD). €1 = 10.8 MAD.", desc_ar:"العملة هي الدرهم المغربي." },
    { id:115, icon:"🌤️", titre:"Meilleure période", titre_en:"Best Season", titre_ar:"أفضل موسم", cat:"Météo", importance:"Essentiel", desc_fr:"Mars-Mai et Sept-Nov sont les meilleures périodes. Évitez Juillet-Août.", desc_en:"March-May and Sept-Nov are the best periods.", desc_ar:"مارس-مايو وسبتمبر-نوفمبر هي أفضل الفترات." },
    { id:116, icon:"🚌", titre:"Transport", titre_en:"Transport", titre_ar:"النقل", cat:"Mobilité", importance:"Essentiel", desc_fr:"Le train CTM relie Tanger Rabat Casablanca et Marrakech.", desc_en:"CTM train links Tangier Rabat Casablanca and Marrakech.", desc_ar:"قطار CTM يربط المدن الرئيسية." },
    { id:117, icon:"👗", titre:"Tenue vestimentaire", titre_en:"Dress Code", titre_ar:"اللباس", cat:"Culture", importance:"Important", desc_fr:"Épaules et genoux couverts dans les médinas. Tenues occidentales sur les plages.", desc_en:"Shoulders and knees covered in medinas.", desc_ar:"تغطية الكتفين والركبتين في المدن." },
    { id:118, icon:"🔒", titre:"Sécurité", titre_en:"Safety", titre_ar:"الأمان", cat:"Sécurité", importance:"Important", desc_fr:"Le Maroc est très sûr. Méfiez-vous des faux guides. Utilisez des taxis officiels.", desc_en:"Morocco is very safe. Beware of fake guides.", desc_ar:"المغرب آمن جداً." },
    { id:119, icon:"🗣️", titre:"Langue", titre_en:"Language", titre_ar:"اللغة", cat:"Communication", importance:"Utile", desc_fr:"Darija et français sont les langues du quotidien.", desc_en:"Darija and French are everyday languages.", desc_ar:"الدارجة والفرنسية لغات يومية." },
    { id:120, icon:"🍽️", titre:"Nourriture et Eau", titre_en:"Food and Water", titre_ar:"الطعام والماء", cat:"Santé", importance:"Important", desc_fr:"Buvez de l'eau en bouteille. La nourriture de rue est délicieuse.", desc_en:"Drink bottled water. Street food is delicious.", desc_ar:"اشرب الماء المعبأ." },
    { id:121, icon:"📶", titre:"Wifi et SIM", titre_en:"Wifi and SIM", titre_ar:"الواي فاي", cat:"Connectivité", importance:"Utile", desc_fr:"SIM locales Maroc Telecom Orange ou Inwi à moins de 5€.", desc_en:"Local SIMs for under €5 with data.", desc_ar:"شرائح محلية بأقل من 5 يورو." }
  ],

  urgences: [
    { id:122, ville:"Marrakech", hopital:"Hôpital Ibn Tofail", hopital_tel:"+212 524 448 811", hopital_maps:"https://maps.google.com/?q=Hopital+Ibn+Tofail+Marrakech" },
    { id:123, ville:"Casablanca", hopital:"CHU Ibn Rochd", hopital_tel:"+212 522 225 325", hopital_maps:"https://maps.google.com/?q=CHU+Ibn+Rochd+Casablanca" },
    { id:124, ville:"Rabat", hopital:"Hôpital Ibn Sina", hopital_tel:"+212 537 672 871", hopital_maps:"https://maps.google.com/?q=Hopital+Ibn+Sina+Rabat" },
    { id:125, ville:"Agadir", hopital:"Hôpital Hassan II", hopital_tel:"+212 528 211 477", hopital_maps:"https://maps.google.com/?q=Hopital+Hassan+II+Agadir" },
    { id:126, ville:"Tanger", hopital:"Hôpital Mohammed V", hopital_tel:"+212 539 932 444", hopital_maps:"https://maps.google.com/?q=Hopital+Mohammed+V+Tanger" },
    { id:127, ville:"Essaouira", hopital:"Hôpital Sidi Mohammed Ben Abdallah", hopital_tel:"+212 524 475 716", hopital_maps:"https://maps.google.com/?q=Hopital+Essaouira" },
    { id:128, ville:"Fès", hopital:"CHU Hassan II de Fès", hopital_tel:"+212 535 612 222", hopital_maps:"https://maps.google.com/?q=CHU+Hassan+II+Fes" },
    { id:129, ville:"Chefchaouen", hopital:"Hôpital Mohammed V Chefchaouen", hopital_tel:"+212 539 986 228", hopital_maps:"https://maps.google.com/?q=Hopital+Chefchaouen" },
    { id:130, ville:"Ouarzazate", hopital:"Hôpital Boulmane Dadès", hopital_tel:"+212 524 882 444", hopital_maps:"https://maps.google.com/?q=Hopital+Ouarzazate" },
    { id:131, ville:"Merzouga", hopital:"Centre de Santé (urgences à Errachidia)", hopital_tel:"+212 535 572 444", hopital_maps:"https://maps.google.com/?q=Hopital+Errachidia" },
    { id:132, ville:"Ifrane", hopital:"Hôpital My Abdallah Ifrane", hopital_tel:"+212 535 566 604", hopital_maps:"https://maps.google.com/?q=Hopital+Ifrane" },
    { id:133, ville:"Taghazout", hopital:"Clinique Agadir (15 km)", hopital_tel:"+212 528 211 477", hopital_maps:"https://maps.google.com/?q=Hopital+Hassan+II+Agadir" }
  ],

  transport: [
    { id:134, icon:"🚂", type:"Train", nom:"ONCF Train national", nom_en:"ONCF National Train", nom_ar:"القطار الوطني", route:"Tanger → Rabat → Casa → Marrakech", prix:"5-15€", duree:"2h30 Casa-Marrakech", site:"https://oncf.ma", desc_fr:"Réseau ferroviaire national confortable ponctuel et abordable.", desc_en:"National rail network comfortable and affordable.", desc_ar:"شبكة السكك الحديدية الوطنية." },
    { id:135, icon:"🚌", type:"Bus", nom:"CTM Bus longue distance", nom_en:"CTM Long distance bus", nom_ar:"حافلة CTM", route:"Toutes villes + Essaouira + Agadir", prix:"3-12€", duree:"Variable", site:"https://ctm.ma", desc_fr:"Opérateur de bus le plus fiable du Maroc. Climatisé et ponctuel.", desc_en:"Morocco's most reliable bus operator.", desc_ar:"أكثر شركة حافلات موثوقية في المغرب." },
    { id:136, icon:"🚕", type:"Taxi", nom:"Petit taxi Ville", nom_en:"Small taxi City", nom_ar:"طاكسي صغير", route:"À l'intérieur de chaque ville", prix:"1-5€", duree:"Selon trajet", site:"", desc_fr:"Trajets urbains uniquement. Activez toujours le compteur.", desc_en:"City trips only. Always turn on the meter.", desc_ar:"رحلات داخل المدينة. شغّل العداد دائماً." },
    { id:137, icon:"🚙", type:"Taxi", nom:"Grand taxi Inter-villes", nom_en:"Grand taxi Inter-city", nom_ar:"طاكسي كبير", route:"Entre villes proches", prix:"3-10€", duree:"Variable", site:"", desc_fr:"Prix fixe partent quand pleins (6 passagers).", desc_en:"Fixed prices leave when full (6 passengers).", desc_ar:"أسعار ثابتة تنطلق عند الامتلاء." },
    { id:138, icon:"✈️", type:"Navette", nom:"Navette aéroport Marrakech", nom_en:"Marrakech airport shuttle", nom_ar:"حافلة مطار مراكش", route:"Aéroport Menara → Jemaa el-Fna", prix:"1€ bus / 10€ taxi", duree:"30-45 min", site:"", desc_fr:"Bus n°19 pour 1 MAD. Taxi officiel 100 MAD.", desc_en:"Bus n°19 for 1 MAD. Official taxi 100 MAD.", desc_ar:"الحافلة 19 بدرهم. تاكسي رسمي 100 درهم." },
    { id:139, icon:"✈️", type:"Navette", nom:"Navette aéroport Casablanca", nom_en:"Casablanca airport shuttle", nom_ar:"حافلة مطار الدار البيضاء", route:"Aéroport Mohammed V → Casa Voyageurs", prix:"4€ train", duree:"35 min", site:"https://oncf.ma", desc_fr:"Train aéroport rapide toutes les 30 minutes.", desc_en:"Airport train fast every 30 minutes.", desc_ar:"قطار المطار سريع كل 30 دقيقة." }
  ],

  lexique: [
    { id:140, mot_fr:"Bonjour (matin)", translitteration:"Sbah lkhir", mot_darija:"صباح الخير", mot_en:"Good morning", categorie:"Salutations" },
    { id:141, mot_fr:"Bonjour", translitteration:"Marhaba", mot_darija:"مرحبا", mot_en:"Hello", categorie:"Salutations" },
    { id:142, mot_fr:"Bonsoir", translitteration:"Msa lkhir", mot_darija:"مساء الخير", mot_en:"Good evening", categorie:"Salutations" },
    { id:143, mot_fr:"Au revoir", translitteration:"Bslama", mot_darija:"بسلامة", mot_en:"Goodbye", categorie:"Salutations" },
    { id:144, mot_fr:"Comment allez-vous ?", translitteration:"Labas ?", mot_darija:"لاباس؟", mot_en:"How are you?", categorie:"Salutations" },
    { id:145, mot_fr:"Bonne nuit", translitteration:"Tsbah l'kheir", mot_darija:"تصبح على خير", mot_en:"Good night", categorie:"Salutations" },
    { id:146, mot_fr:"Merci beaucoup", translitteration:"Chokran bzzaf", mot_darija:"شكرا بزاف", mot_en:"Thank you very much", categorie:"Politesse" },
    { id:147, mot_fr:"S'il vous plaît", translitteration:"Afak", mot_darija:"عافاك", mot_en:"Please", categorie:"Politesse" },
    { id:148, mot_fr:"Excusez-moi", translitteration:"Smah liya", mot_darija:"سماح ليا", mot_en:"Excuse me", categorie:"Politesse" },
    { id:149, mot_fr:"De rien", translitteration:"La shokr ala wajib", mot_darija:"لا شكر على واجب", mot_en:"You're welcome", categorie:"Politesse" },
    { id:150, mot_fr:"Oui", translitteration:"Iyeh", mot_darija:"إيه", mot_en:"Yes", categorie:"Basique" },
    { id:151, mot_fr:"Non", translitteration:"La", mot_darija:"لا", mot_en:"No", categorie:"Basique" },
    { id:152, mot_fr:"Je ne comprends pas", translitteration:"Ma fhamtch", mot_darija:"ما فهمتش", mot_en:"I don't understand", categorie:"Basique" },
    { id:153, mot_fr:"Je ne sais pas", translitteration:"Ma areftch", mot_darija:"ما عرفتش", mot_en:"I don't know", categorie:"Basique" },
    { id:154, mot_fr:"Parlez-vous français ?", translitteration:"Kat tkellem blfransawi?", mot_darija:"كتتكلم بالفرنساوي؟", mot_en:"Do you speak French?", categorie:"Basique" },
    { id:155, mot_fr:"Combien ça coûte ?", translitteration:"Bchhal had chi?", mot_darija:"بشحال هاد الشي؟", mot_en:"How much is this?", categorie:"Shopping" },
    { id:156, mot_fr:"C'est trop cher", translitteration:"Ghali bzzaf", mot_darija:"غالي بزاف", mot_en:"Too expensive", categorie:"Shopping" },
    { id:157, mot_fr:"Moins cher", translitteration:"Arkhas", mot_darija:"أرخص", mot_en:"Cheaper", categorie:"Shopping" },
    { id:158, mot_fr:"Je regarde seulement", translitteration:"Ana ghir kanshuf", mot_darija:"أنا غير كانشوف", mot_en:"I'm just looking", categorie:"Shopping" },
    { id:159, mot_fr:"Où est... ?", translitteration:"Fin kayn...?", mot_darija:"فين كاين؟", mot_en:"Where is...?", categorie:"Navigation" },
    { id:160, mot_fr:"Tout droit", translitteration:"Niyshan", mot_darija:"نيشان", mot_en:"Straight ahead", categorie:"Navigation" },
    { id:161, mot_fr:"À gauche", translitteration:"Lisar", mot_darija:"ليسار", mot_en:"To the left", categorie:"Navigation" },
    { id:162, mot_fr:"À droite", translitteration:"Limin", mot_darija:"ليمين", mot_en:"To the right", categorie:"Navigation" },
    { id:163, mot_fr:"Restaurant", translitteration:"Mataam", mot_darija:"مطعم", mot_en:"Restaurant", categorie:"Navigation" },
    { id:164, mot_fr:"Hôtel", translitteration:"Otil", mot_darija:"أوطيل", mot_en:"Hotel", categorie:"Navigation" },
    { id:165, mot_fr:"L'addition s'il vous plaît", translitteration:"Lhsab afak", mot_darija:"الحساب عافاك", mot_en:"The bill please", categorie:"Restaurant" },
    { id:166, mot_fr:"Délicieux !", translitteration:"Bnin bzzaf!", mot_darija:"بنين بزاف", mot_en:"Delicious!", categorie:"Restaurant" },
    { id:167, mot_fr:"De l'eau s'il vous plaît", translitteration:"Lma afak", mot_darija:"الما عافاك", mot_en:"Water please", categorie:"Restaurant" },
    { id:168, mot_fr:"Sans piment", translitteration:"Bla harr", mot_darija:"بلا حار", mot_en:"Without spice", categorie:"Restaurant" },
    { id:169, mot_fr:"Arrêtez ici", translitteration:"Wqef hna", mot_darija:"وقف هنا", mot_en:"Stop here", categorie:"Transport" },
    { id:170, mot_fr:"Combien jusqu'à... ?", translitteration:"Bchhal hta...?", mot_darija:"بشحال حتى...؟", mot_en:"How much to...?", categorie:"Transport" },
    { id:171, mot_fr:"Appelez la police !", translitteration:"Ayyet l'police!", mot_darija:"عيط للبوليس", mot_en:"Call the police!", categorie:"Urgence" },
    { id:172, mot_fr:"J'ai besoin d'un médecin", translitteration:"Khassni tabib", mot_darija:"خاصني طبيب", mot_en:"I need a doctor", categorie:"Urgence" },
    { id:173, mot_fr:"Au secours !", translitteration:"Awenni!", mot_darija:"عاونّي!", mot_en:"Help!", categorie:"Urgence" },
    { id:174, mot_fr:"Je suis perdu(e)", translitteration:"Ana dayae", mot_darija:"أنا ضايع", mot_en:"I'm lost", categorie:"Urgence" }
  ]
};
