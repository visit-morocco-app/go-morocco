
// ======== TRANSLATIONS ========
var T = {
  fr: {
    search_ville: 'Rechercher une ville...',
    search_lieux: 'Filtrer par ville',
    open_maps: '🗺️ Ouvrir dans Google Maps',
    region: 'Région', saison: 'Meilleure saison',
    ville_label: 'Ville', cat_label: 'Catégorie',
    urgence_title: "🚨 Numéros d'urgence — Tout le Maroc",
    samu: 'SAMU', police: 'Police', pompiers: 'Pompiers',
    tout_maroc: 'Tout le Maroc',
    apprendre: '🗣️ Apprenez le Darija',
    tous: 'Tous', carte: 'Carte', sur: 'sur',
    tap_hint: '👆 Appuie pour voir en Darija',
    plan_budget_label: 'Budget estimé / personne',
    plan_budget_note: 'Hébergement non inclus',
    jour1: '☀️ Jour 1', jour2: '🌙 Jour 2',
    info_tab: '📖 Info', lieux_tab: '📍 Lieux', plan_tab: '🗓️ Plan 2j',
    lieux_incontournables: '📍 Lieux incontournables',
    tip_label: "💡 ", place_label: "📍 ",
    food:'🍽️ Repas', culture:'🏛️ Culture', nature:'🌿 Nature',
    shopping:'🛍️ Shopping', relax:'😌 Détente', nuit:'🌙 Soirée',
    prev: '← Précédent', next: 'Suivant →',
  },
  en: {
    search_ville: 'Search a city...',
    search_lieux: 'Filter by city',
    open_maps: '🗺️ Open in Google Maps',
    region: 'Region', saison: 'Best season',
    ville_label: 'City', cat_label: 'Category',
    urgence_title: '🚨 Emergency Numbers — All Morocco',
    samu: 'SAMU', police: 'Police', pompiers: 'Fire dept.',
    tout_maroc: 'All Morocco',
    apprendre: '🗣️ Learn Darija',
    tous: 'All', carte: 'Card', sur: 'of',
    tap_hint: '👆 Tap to see in Darija',
    plan_budget_label: 'Estimated budget / person',
    plan_budget_note: 'Accommodation not included',
    jour1: '☀️ Day 1', jour2: '🌙 Day 2',
    info_tab: '📖 Info', lieux_tab: '📍 Places', plan_tab: '🗓️ 2-Day Plan',
    lieux_incontournables: '📍 Must-see Places',
    tip_label: "💡 ", place_label: "📍 ",
    food:'🍽️ Food', culture:'🏛️ Culture', nature:'🌿 Nature',
    shopping:'🛍️ Shopping', relax:'😌 Relax', nuit:'🌙 Night',
    prev: '← Previous', next: 'Next →',
  },
  ar: {
    search_ville: 'ابحث عن مدينة...',
    search_lieux: 'تصفية حسب المدينة',
    open_maps: '🗺️ فتح في خرائط جوجل',
    region: 'المنطقة', saison: 'أفضل موسم',
    ville_label: 'المدينة', cat_label: 'الفئة',
    urgence_title: '🚨 أرقام الطوارئ — المغرب كله',
    samu: 'الإسعاف', police: 'الشرطة', pompiers: 'الإطفاء',
    tout_maroc: 'المغرب كله',
    apprendre: '🗣️ تعلم الدارجة',
    tous: 'الكل', carte: 'بطاقة', sur: 'من',
    tap_hint: 'اضغط لرؤية الدارجة',
    plan_budget_label: 'الميزانية التقديرية / شخص',
    plan_budget_note: 'الإقامة غير مشمولة',
    jour1: '☀️ اليوم 1', jour2: '🌙 اليوم 2',
    info_tab: '📖 معلومات', lieux_tab: '📍 الأماكن', plan_tab: '🗓️ خطة يومين',
    lieux_incontournables: '📍 الأماكن الرئيسية',
    tip_label: "💡 ", place_label: "📍 ",
    food:'🍽️ طعام', culture:'🏛️ ثقافة', nature:'🌿 طبيعة',
    shopping:'🛍️ تسوق', relax:'😌 راحة', nuit:'🌙 مساء',
    prev: 'السابق →', next: '← التالي',
  }
};
function t(key) { return (T[lang]||T.fr)[key] || (T.fr)[key] || key; }


// Lieu categories translation
var lieuCats = {
  fr:{Place:'Place',Jardin:'Jardin',Marché:'Marché',Patrimoine:'Patrimoine',Monument:'Monument',Culture:'Culture',Médina:'Médina',Promenade:'Promenade',Plage:'Plage',Port:'Port',Nature:'Nature',Artisanat:'Artisanat',Architecture:'Architecture',Loisirs:'Loisirs',Surf:'Surf','Bien-être':'Bien-être',Kasbah:'Kasbah',Aventure:'Aventure','Ville historique':'Ville historique',Sport:'Sport'},
  en:{Place:'Square',Jardin:'Garden',Marché:'Market',Patrimoine:'Heritage',Monument:'Monument',Culture:'Culture',Médina:'Medina',Promenade:'Promenade',Plage:'Beach',Port:'Port',Nature:'Nature',Artisanat:'Crafts',Architecture:'Architecture',Loisirs:'Leisure',Surf:'Surf','Bien-être':'Wellness',Kasbah:'Kasbah',Aventure:'Adventure','Ville historique':'Historic city',Sport:'Sport'},
  ar:{Place:'ساحة',Jardin:'حديقة',Marché:'سوق',Patrimoine:'تراث',Monument:'معلم',Culture:'ثقافة',Médina:'مدينة قديمة',Promenade:'كورنيش',Plage:'شاطئ',Port:'ميناء',Nature:'طبيعة',Artisanat:'حرف يدوية',Architecture:'معمار',Loisirs:'ترفيه',Surf:'ركوب أمواج','Bien-être':'عافية',Kasbah:'قصبة',Aventure:'مغامرة','Ville historique':'مدينة تاريخية',Sport:'رياضة'}
};
function translateLieuCat(cat) { return (lieuCats[lang]||lieuCats.fr)[cat] || cat; }

// Gastro types translation
var gastroTypes = {
  fr: {'Plat principal':'Plat principal','Entrée':'Entrée','Soupe':'Soupe','Dessert':'Dessert','Boisson':'Boisson','Petit-déjeuner':'Petit-déjeuner','Grillades':'Grillades','Salade':'Salade','Accompagnement':'Accompagnement','Street food':'Street food','Sauce':'Sauce','Pâtisserie':'Pâtisserie'},
  en: {'Plat principal':'Main course','Entrée':'Starter','Soupe':'Soup','Dessert':'Dessert','Boisson':'Drink','Petit-déjeuner':'Breakfast','Grillades':'Grilled','Salade':'Salad','Accompagnement':'Side dish','Street food':'Street food','Sauce':'Sauce','Pâtisserie':'Pastry'},
  ar: {'Plat principal':'طبق رئيسي','Entrée':'مقبلات','Soupe':'شوربة','Dessert':'حلوى','Boisson':'مشروب','Petit-déjeuner':'فطور','Grillades':'مشوي','Salade':'سلطة','Accompagnement':'طبق مرافق','Street food':'طعام شارع','Sauce':'صلصة','Pâtisserie':'معجنات'}
};
function translateType(type) { return (gastroTypes[lang]||gastroTypes.fr)[type] || type; }

// Event months translation
var monthsT = {
  fr:{Juin:'Juin',Juillet:'Juil',Août:'Août',Avril:'Avr',Mai:'Mai',Décembre:'Déc',Janvier:'Jan',Variable:'Var'},
  en:{Juin:'June',Juillet:'July',Août:'Aug',Avril:'Apr',Mai:'May',Décembre:'Dec',Janvier:'Jan',Variable:'Var'},
  ar:{Juin:'يونيو',Juillet:'يوليو',Août:'أغسطس',Avril:'أبريل',Mai:'مايو',Décembre:'ديسمبر',Janvier:'يناير',Variable:'متغير'}
};
function translateMonth(m) { return (monthsT[lang]||monthsT.fr)[m] || (m||'').substring(0,3); }

// Darija categories translation
var darijaCategories = {
  fr:{Salutations:'Salutations',Politesse:'Politesse',Basique:'Basique',Shopping:'Shopping',Navigation:'Navigation',Restaurant:'Restaurant',Transport:'Transport',Urgence:'Urgence'},
  en:{Salutations:'Greetings',Politesse:'Politeness',Basique:'Basic',Shopping:'Shopping',Navigation:'Navigation',Restaurant:'Restaurant',Transport:'Transport',Urgence:'Emergency'},
  ar:{Salutations:'تحيات',Politesse:'أدب',Basique:'أساسي',Shopping:'تسوق',Navigation:'تنقل',Restaurant:'مطعم',Transport:'نقل',Urgence:'طوارئ'}
};
function translateCat(cat) { return (darijaCategories[lang]||darijaCategories.fr)[cat] || cat; }

// =============================================
// GO MOROCCO — APP.JS
// Toute la logique JavaScript
// =============================================

var lang = 'en'; // Default language
var currentVilleFilter = 'Tous';
var initialLangSet = false;
var fcIndex = 0;
var fcCatFilter = 'Tous';
var fcFiltered = [];
var fcFlipped = false;
var currentDetailVille = null;

// ======== INIT ========
window.onload = function() {
  fcFiltered = DATA.lexique.slice();
  setTimeout(function() {
    document.getElementById('splash').classList.add('hide');
    setTimeout(function() {
      document.getElementById('splash').style.display = 'none';
      document.getElementById('auth-screen').classList.add('show');
    }, 600);
  }, 2000);
};

function login() {
  document.getElementById('auth-screen').classList.remove('show');
  document.getElementById('app').classList.add('show');
  renderAll();
}

// ======== HELPERS ========
function getName(i) {
  if(lang==='ar') return i.nom_ar || i.nom;
  if(lang==='en') return i.nom_en || i.nom;
  return i.nom;
}
function getDesc(i) {
  if(lang==='ar') return i.desc_ar || i.desc_fr;
  if(lang==='en') return i.desc_en || i.desc_fr;
  return i.desc_fr;
}
function getTitre(i) {
  if(lang==='ar') return i.titre_ar || i.titre;
  if(lang==='en') return i.titre_en || i.titre;
  return i.titre;
}

// ======== RENDER ALL ========
function renderAll() {
  renderVilles();
  renderLieux();
  renderGastro();
  renderEvents();
  renderConseils();
  renderUrgences();
  renderTransport();
  initFlashcards();
  updateNavLabels();
  updateSearchPlaceholder();
  // Always sync header title with current lang and current tab
  var headerTitleEl = document.getElementById('header-title');
  if(headerTitleEl && currentTab) {
    headerTitleEl.textContent = (tabTitles[lang]||tabTitles.fr)[currentTab] || '';
  }
}

function updateSearchPlaceholder() {
  var el = document.getElementById('search-input');
  if(el) el.placeholder = t('search_ville');
}

function updateNavLabels() {
  var navLabels = {
    fr:{villes:'Villes',lieux:'Lieux',gastro:'Gastro',events:'Événements',urgences:'Urgences',transport:'Transport',lexique:'Darija'},
    en:{villes:'Cities',lieux:'Places',gastro:'Gastro',events:'Events',urgences:'Emergency',transport:'Transport',lexique:'Darija'},
    ar:{villes:'المدن',lieux:'الأماكن',gastro:'المطبخ',events:'فعاليات',urgences:'طوارئ',transport:'نقل',lexique:'دارجة'}
  };
  var labels = navLabels[lang] || navLabels.fr;
  ['villes','lieux','gastro','events','urgences','transport','lexique'].forEach(function(key) {
    var navEl = document.querySelector('#nav-'+key+' .nav-label');
    if(navEl && labels[key]) navEl.textContent = labels[key];
  });
}

// ======== LANGUE ========
function setLang(l) {
  lang = l;
  document.querySelectorAll('.lang-option').forEach(function(o){ o.classList.remove('active'); });
  document.getElementById('opt-'+l).classList.add('active');
  closeLangDropdown();

  // Update flag display
  var flags = {fr:'🇫🇷', en:'🇬🇧', ar:'🇲🇦'};
  var flagEl = document.getElementById('current-flag');
  if(flagEl) flagEl.textContent = flags[l] || '🌐';

  if(l==='ar') {
    document.body.classList.add('ar');
    document.documentElement.setAttribute('lang','ar');
    document.documentElement.setAttribute('dir','rtl');
  } else {
    document.body.classList.remove('ar');
    document.documentElement.setAttribute('lang',l);
    document.documentElement.setAttribute('dir','ltr');
  }
  currentVilleFilter = 'Tous';
  fcCatFilter = 'Tous'; // Reset darija filter on lang change

  // Update header title
  var titles = {
    fr: {villes:'Villes', lieux:'Lieux', gastro:'Gastronomie', events:'Événements', urgences:'Urgences', transport:'Transport', lexique:'Darija'},
    en: {villes:'Cities', lieux:'Places', gastro:'Gastronomy', events:'Events', urgences:'Emergencies', transport:'Transport', lexique:'Darija'},
    ar: {villes:'المدن', lieux:'الأماكن', gastro:'المطبخ', events:'الفعاليات', urgences:'الطوارئ', transport:'النقل', lexique:'الدارجة'}
  };

  renderAll();
}
function toggleLangDropdown(e) {
  e.stopPropagation();
  document.getElementById('lang-dropdown').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show');
}
function closeLangDropdown() {
  document.getElementById('lang-dropdown').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
}

// ======== NAVIGATION ========
var tabTitles = {
  fr:{villes:'Villes',lieux:'Lieux',gastro:'Gastronomie',events:'Événements',urgences:'Urgences',transport:'Transport',lexique:'Darija'},
  en:{villes:'Cities',lieux:'Places',gastro:'Gastronomy',events:'Events',urgences:'Emergencies',transport:'Transport',lexique:'Darija'},
  ar:{villes:'المدن',lieux:'الأماكن',gastro:'المطبخ',events:'الفعاليات',urgences:'الطوارئ',transport:'النقل',lexique:'الدارجة'}
};
var currentTab = 'villes';
function switchTab(tab, title) {
  currentTab = tab;
  document.querySelectorAll('.tab-content').forEach(function(tc){ tc.classList.remove('active'); });
  document.querySelectorAll('.nav-item').forEach(function(n){ n.classList.remove('active'); });
  document.getElementById('tab-'+tab).classList.add('active');
  document.getElementById('nav-'+tab).classList.add('active');
  document.getElementById('header-title').textContent = (tabTitles[lang]||tabTitles.fr)[tab] || title;
  window.scrollTo(0,0);
}

// ======== VILLES ========
function renderVilles() {
  var el = document.getElementById('villes-grid');
  if(!el) return;
  el.innerHTML = DATA.villes.map(function(v) {
    return '<div class="ville-card" onclick="showVille('+v.id+')">'
      +'<img src="'+v.img+'" alt="'+v.nom+'" loading="lazy" onerror="this.src=\'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=400\'">'
      +'<div class="ville-card-info">'
      +'<div class="ville-card-name">'+getName(v)+'</div>'
      +'<div class="ville-card-region">'+(lang==='ar'?v.region_ar:lang==='en'?v.region_en:v.region)+'</div>'
      +'</div></div>';
  }).join('');
}

// ======== LIEUX ========
function renderVilleFilter() {
  var el = document.getElementById('ville-filter');
  if(!el) return;
  var villes = ['Tous'].concat(DATA.villes.map(function(v){ return v.nom; }));
  el.innerHTML = villes.map(function(v) {
    var label = v==='Tous'?(lang==='ar'?'الكل':lang==='en'?'All':'Tous'):v;
    return '<button class="filter-btn '+(v===currentVilleFilter?'active':'')+'" onclick="filterLieux(\''+v+'\')">'+label+'</button>';
  }).join('');
}
function filterLieux(ville) {
  currentVilleFilter = ville;
  renderVilleFilter();
  var lieux = ville==='Tous' ? DATA.lieux : DATA.lieux.filter(function(l){ return l.ville===ville; });
  var el = document.getElementById('lieux-grid');
  if(!el) return;
  el.innerHTML = lieux.map(function(l) {
    return '<div class="lieu-card" onclick="showLieu('+l.id+')">'
      +'<img src="'+l.img+'" alt="'+l.nom+'" loading="lazy" onerror="this.src=\'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=400\'">'
      +'<div class="lieu-card-info">'
      +'<div class="lieu-card-badge">'+translateLieuCat(l.cat)+'</div>'
      +'<div class="lieu-card-name">'+getName(l)+'</div>'
      +'<div class="lieu-card-ville">📍 '+l.ville+'</div>'
      +'</div></div>';
  }).join('');
}
function renderLieux() {
  renderVilleFilter();
  filterLieux(currentVilleFilter);
}

// ======== GASTRO ========
function renderGastro() {
  var el = document.getElementById('gastro-grid');
  if(!el) return;
  el.innerHTML = DATA.gastronomie.map(function(g) {
    return '<div class="gastro-card">'
      +'<img src="'+g.img+'" alt="'+g.nom+'" loading="lazy">'
      +'<div class="gastro-card-info">'
      +'<div class="gastro-card-name">'+getName(g)+'</div>'
      +'<div class="gastro-card-type">'+translateType(g.type)+'</div>'
      +'<div class="gastro-card-prix">💰 '+g.prix+'</div>'
      +'</div></div>';
  }).join('');
}

// ======== EVENTS ========
function renderEvents() {
  var el = document.getElementById('events-list');
  if(!el) return;
  var catColors = {
    'Musique':'#E8EAF6', 'Cinéma':'#FCE4EC', 'Sport':'#E8F5E9',
    'Culture':'#FFF3E0', 'National':'#F3E5F5', 'Religieux':'#E0F2F1',
    'Art':'#FFF8E1'
  };
  var catText = {
    'Musique':'#283593', 'Cinéma':'#880E4F', 'Sport':'#1B5E20',
    'Culture':'#E65100', 'National':'#4A148C', 'Religieux':'#004D40',
    'Art':'#F57F17'
  };
  el.innerHTML = DATA.evenements.map(function(e) {
    var cat = e.categorie || 'Culture';
    var bgc = catColors[cat] || '#F5F5F5';
    var tc = catText[cat] || '#333';
    var desc = getDesc(e);
    var shortDesc = desc.length > 140 ? desc.substring(0,140)+'...' : desc;
    var moisText = translateMonth(e.mois||e.periode||'');
    var villeText = (e.ville==='Tout le Maroc'||e.ville==='All Morocco') ? t('tout_maroc') : e.ville;
    return '<div class="event-card">'
      +'<div class="event-date">'
      +'<div class="event-month">'+moisText+'</div>'
      +'<div class="event-day">'+e.jour+'</div>'
      +'<div class="event-emoji">'+e.emoji+'</div>'
      +'</div>'
      +'<div class="event-info">'
      +'<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">'
      +'<div class="event-name">'+getName(e)+'</div>'
      +'<span style="font-size:10px;padding:2px 8px;border-radius:20px;background:'+bgc+';color:'+tc+';font-weight:500;white-space:nowrap;margin-left:8px">'+cat+'</span>'
      +'</div>'
      +'<div class="event-ville">📍 '+villeText+'</div>'
      +'<div class="event-desc">'+shortDesc+'</div>'
      +'</div></div>';
  }).join('');
}

// ======== CONSEILS ========
function renderConseils() {
  var el = document.getElementById('conseils-list');
  if(!el) return;
  var importanceLabel = {
    fr:{Essentiel:'Essentiel', Important:'Important', Utile:'Utile'},
    en:{Essentiel:'Essential', Important:'Important', Utile:'Useful'},
    ar:{Essentiel:'ضروري', Important:'مهم', Utile:'مفيد'}
  };
  el.innerHTML = DATA.conseils.map(function(c) {
    var imp = (importanceLabel[lang]||importanceLabel.fr)[c.importance] || c.importance;
    return '<div class="conseil-card">'
      +'<div class="conseil-header">'
      +'<div class="conseil-icon">'+c.icon+'</div>'
      +'<div><div class="conseil-title">'+getTitre(c)+'</div>'
      +'<div class="conseil-cat">'+c.cat+'</div></div>'
      +'</div>'
      +'<div class="conseil-text">'+getDesc(c)+'</div>'
      +'<span class="conseil-badge badge-'+c.importance.toLowerCase()+'">'+imp+'</span>'
      +'</div>';
  }).join('');
}

// ======== URGENCES ========
function renderUrgences() {
  var el = document.getElementById('urgence-list');
  if(!el) return;
  var labels = {
    fr:{hopital:'Hôpital', tel:'Téléphone', appeler:'📱 Appeler'},
    en:{hopital:'Hospital', tel:'Phone', appeler:'📱 Call'},
    ar:{hopital:'المستشفى', tel:'الهاتف', appeler:'📱 اتصل'}
  };
  var l = labels[lang] || labels.fr;
  // Update urgence global section
  var urgenceTitleEl = document.querySelector('.urgence-global-title');
  if(urgenceTitleEl) urgenceTitleEl.textContent = t('urgence_title');
  var urgenceNums = document.querySelectorAll('.urgence-num-label');
  var numLabels = [t('samu'), t('police'), t('pompiers')];
  urgenceNums.forEach(function(el, i){ if(numLabels[i]) el.textContent = numLabels[i]; });

  el.innerHTML = DATA.urgences.map(function(u) {
    return '<div class="urgence-card">'
      +'<div class="urgence-card-top"><div class="urgence-card-ville">🏙️ '+u.ville+'</div></div>'
      +'<div class="urgence-card-body">'
      +'<div class="urgence-row">'
      +'<div class="urgence-row-icon">🏥</div>'
      +'<div class="urgence-row-info"><div class="urgence-row-label">'+l.hopital+'</div>'
      +'<div class="urgence-row-val">'+u.hopital+'</div></div>'
      +'<a href="'+u.hopital_maps+'" target="_blank" class="urgence-maps-btn">🗺️</a></div>'
      +'<div class="urgence-row">'
      +'<div class="urgence-row-icon">📞</div>'
      +'<div class="urgence-row-info"><div class="urgence-row-label">'+l.tel+'</div>'
      +'<div class="urgence-row-val">'+u.hopital_tel+'</div></div>'
      +'<a href="tel:'+u.hopital_tel+'" class="urgence-call-btn">'+l.appeler+'</a></div>'
      +'</div></div>';
  }).join('');
}

// ======== TRANSPORT ========
function renderTransport() {
  var el = document.getElementById('transport-list');
  if(!el) return;
  var routeLabel = lang==='ar'?'المسار':lang==='en'?'Route':'Route';
  var dureeLabel = lang==='ar'?'المدة':lang==='en'?'Duration':'Durée';
  var infoLabel = lang==='ar'?'معلومات':lang==='en'?'Info':'Infos';
  var siteLabel = lang==='ar'?'الموقع':lang==='en'?'Website':'Site';
  el.innerHTML = DATA.transport.map(function(t) {
    var nom = lang==='ar'?(t.nom_ar||t.nom):lang==='en'?(t.nom_en||t.nom):t.nom;
    return '<div class="transport-accord" id="ta-'+t.id+'">'
      +'<div class="transport-accord-header" onclick="toggleTransport('+t.id+')">'
      +'<div class="transport-accord-icon">'+t.icon+'</div>'
      +'<div class="transport-accord-info">'
      +'<div class="transport-accord-type">'+t.type+'</div>'
      +'<div class="transport-accord-name">'+nom+'</div>'
      +'</div>'
      +'<div class="transport-accord-arrow">▼</div>'
      +'</div>'
      +'<div class="transport-accord-body">'
      +'<div class="transport-detail-row"><div class="transport-detail-label">🗺️ '+routeLabel+'</div><div class="transport-detail-val">'+t.route+'</div></div>'
      +'<div class="transport-detail-row"><div class="transport-detail-label">⏱️ '+dureeLabel+'</div><div class="transport-detail-val">'+t.duree+'</div></div>'
      +'<div class="transport-detail-row"><div class="transport-detail-label">ℹ️ '+infoLabel+'</div><div class="transport-detail-val">'+getDesc(t)+'</div></div>'
      +(t.site?'<div class="transport-detail-row"><div class="transport-detail-label">🌐 '+siteLabel+'</div><div class="transport-detail-val"><a href="'+t.site+'" target="_blank">'+t.site+'</a></div></div>':'')
      +'<div class="transport-prix-badge">💰 '+t.prix+'</div>'
      +'</div></div>';
  }).join('');
}
function toggleTransport(id) {
  var el = document.getElementById('ta-'+id);
  var isOpen = el.classList.contains('open');
  document.querySelectorAll('.transport-accord').forEach(function(a){ a.classList.remove('open'); });
  if(!isOpen) el.classList.add('open');
}

// ======== FLASHCARDS DARIJA ========
function initFlashcards() {
  fcFiltered = DATA.lexique.slice();
  fcIndex = 0;
  fcFlipped = false;
  renderFcFilter();
  renderFcCard();
}
function renderFcFilter() {
  var el = document.getElementById('fc-filter');
  if(!el) return;
  var cats = ['Tous'].concat(Array.from(new Set(DATA.lexique.map(function(l){ return l.categorie; }))));
  el.innerHTML = cats.map(function(c) {
    var label = c==='Tous' ? t('tous') : translateCat(c);
    return '<button class="flashcard-filter-btn '+(c===fcCatFilter?'active':'')+'" onclick="filterFc(\''+c+'\')">'+label+'</button>';
  }).join('');
}
function filterFc(cat) {
  fcCatFilter = cat; // Keep original French category key for filtering
  fcFiltered = (cat==='Tous'||cat==='All'||cat==='الكل') ? DATA.lexique.slice() : DATA.lexique.filter(function(l){ return l.categorie===cat; });
  fcIndex = 0;
  fcFlipped = false;
  renderFcFilter();
  renderFcCard();
}
function renderFcCard() {
  if(!fcFiltered.length) return;
  var l = fcFiltered[fcIndex];
  document.getElementById('fc-scene').classList.remove('flipped');
  fcFlipped = false;

  // Front word in current language
  var frontWord = lang==='ar'?(l.mot_ar||l.mot_fr):lang==='en'?l.mot_en:l.mot_fr;
  document.getElementById('fc-fr').textContent = frontWord || l.mot_fr;
  document.getElementById('fc-cat').textContent = translateCat(l.categorie);
  document.getElementById('fc-darija').textContent = l.mot_darija;
  document.getElementById('fc-trans').textContent = l.translitteration;
  document.getElementById('fc-en').textContent = l.mot_en;
  document.getElementById('fc-counter').textContent = (fcIndex+1)+' / '+fcFiltered.length;
  document.getElementById('fc-idx').textContent = fcIndex+1;
  document.getElementById('fc-total').textContent = fcFiltered.length;
  document.getElementById('fc-progress').style.width = Math.round(((fcIndex+1)/fcFiltered.length)*100)+'%';

  // Translate UI
  var hintEl = document.querySelector('.flashcard-hint');
  if(hintEl) hintEl.textContent = t('tap_hint');
  var prevBtn = document.querySelector('.flashcard-prev');
  var nextBtn = document.querySelector('.flashcard-next');
  if(prevBtn) prevBtn.textContent = t('prev');
  if(nextBtn) nextBtn.textContent = t('next');

  // Update title and stats
  var titleEl = document.querySelector('.flashcard-title');
  if(titleEl) titleEl.textContent = t('apprendre');
  var statsEl = document.querySelector('.flashcard-stats');
  if(statsEl) statsEl.innerHTML = t('carte')+' <span id="fc-idx">'+( fcIndex+1)+'</span> '+t('sur')+' <span id="fc-total">'+fcFiltered.length+'</span>';
}
function flipFlashcard() {
  fcFlipped = !fcFlipped;
  document.getElementById('fc-scene').classList.toggle('flipped', fcFlipped);
}
function fcNext() { fcIndex = fcIndex < fcFiltered.length-1 ? fcIndex+1 : 0; fcFlipped=false; renderFcCard(); }
function fcPrev() { fcIndex = fcIndex > 0 ? fcIndex-1 : fcFiltered.length-1; fcFlipped=false; renderFcCard(); }

// ======== DETAIL VILLE ========
function showVille(id) {
  var v = DATA.villes.find(function(x){ return x.id===id; });
  if(!v) return;
  currentDetailVille = v;

  document.getElementById('dv-img').src = v.img;
  document.getElementById('dv-img').onerror = function(){ this.src='https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600'; };
  document.getElementById('dv-name').textContent = getName(v);
  document.getElementById('dv-region').textContent = '📍 '+(lang==='ar'?v.region_ar:lang==='en'?v.region_en:v.region);
  document.getElementById('dv-region2').textContent = lang==='ar'?v.region_ar:lang==='en'?v.region_en:v.region;
  // Translate saison content
  var saisonVal = v.saison || 'Avr — Juin';
  if(lang === 'en') {
    saisonVal = saisonVal
      .replace('Avr','Apr').replace('Juin','June').replace('Oct','Oct')
      .replace('Mars','Mar').replace('Mai','May').replace('Nov','Nov')
      .replace('Janv','Jan').replace('Fév','Feb').replace('Août','Aug')
      .replace('Sept','Sep').replace('Déc','Dec').replace('Juil','Jul')
      .replace("Toute l'année","All year").replace('Variable','Variable');
  } else if(lang === 'ar') {
    saisonVal = saisonVal
      .replace('Avr','أبر').replace('Juin','يون').replace('Oct','أكت')
      .replace('Mars','مار').replace('Mai','ماي').replace('Nov','نوف')
      .replace("Toute l'année","طوال السنة").replace('Variable','متغير');
  }
  document.getElementById('dv-saison').textContent = saisonVal;
  document.getElementById('dv-desc').textContent = getDesc(v);
  document.getElementById('dv-maps').href = v.maps_url||'#';
  if(document.getElementById('dv-budget')) document.getElementById('dv-budget').textContent = v.budget || '50 — 80€';

  // Lieux de la ville
  var lieux = DATA.lieux.filter(function(l){ return l.ville===v.nom; });
  // Update lieux section title
  var lieuxTitle = document.querySelector('#dtab-lieux .detail-section-title');
  if(lieuxTitle) lieuxTitle.textContent = t('lieux_incontournables');

  document.getElementById('dv-lieux').innerHTML = lieux.length ? lieux.map(function(l){
    return '<div class="detail-lieu-item" onclick="showLieu('+l.id+')">'
      +'<img class="detail-lieu-img" src="'+l.img+'" alt="'+l.nom+'" onerror="this.src=\'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=200\'">'
      +'<div><div class="detail-lieu-name">'+getName(l)+'</div>'
      +'<div class="detail-lieu-cat">'+l.cat+'</div></div>'
      +'</div>';
  }).join('') : '<p style="color:var(--text3);font-size:13px;padding:10px 0;">Lieux à venir...</p>';

  // Timeline Plan 2 jours
  renderTimeline(v, 1);
  renderTimeline(v, 2);

  // Update static labels
  var regionLabel = document.getElementById('label-region');
  var saisonLabel = document.getElementById('label-saison');
  if(regionLabel) regionLabel.textContent = t('region');
  if(saisonLabel) saisonLabel.textContent = t('saison');

  // Update Maps button
  var mapsBtn = document.getElementById('dv-maps');
  if(mapsBtn) mapsBtn.textContent = t('open_maps');

  // Update tab labels based on language
  var tabLabels = document.querySelectorAll('.detail-tab');
  var tabs = [
    {fr:'📖 Info', en:'📖 Info', ar:'📖 معلومات'},
    {fr:'📍 Lieux', en:'📍 Places', ar:'📍 الأماكن'},
    {fr:'🗓️ Plan 2j', en:'🗓️ 2-Day Plan', ar:'🗓️ خطة يومين'}
  ];
  tabLabels.forEach(function(tab, i){
    if(tabs[i]) tab.textContent = (tabs[i][lang] || tabs[i].fr);
  });

  // Update budget label
  var budgetLabel = document.querySelector('.plan-budget-label');
  var budgetNote = document.querySelector('.plan-budget-note');
  if(budgetLabel) budgetLabel.textContent = lang==='ar'?'الميزانية التقديرية / شخص':lang==='en'?'Estimated budget / person':'Budget estimé / personne';
  if(budgetNote) budgetNote.textContent = lang==='ar'?'الإقامة غير مشمولة':lang==='en'?'Accommodation not included':'Hébergement non inclus';

  // Update plan day buttons
  var dayBtns = document.querySelectorAll('.plan-day-btn');
  if(dayBtns[0]) dayBtns[0].textContent = lang==='ar'?'☀️ اليوم 1':lang==='en'?'☀️ Day 1':'☀️ Jour 1';
  if(dayBtns[1]) dayBtns[1].textContent = lang==='ar'?'🌙 اليوم 2':lang==='en'?'🌙 Day 2':'🌙 Jour 2';

  // Reset tabs
  switchDetailTab('info');
  switchPlanDay(1);

  document.getElementById('detail-ville').classList.add('open');
  // Update header when detail opens
  document.getElementById('header-title').textContent = getName(v);
  // Update fav button
  var dvFav = document.getElementById('dv-fav');
  if(dvFav) { dvFav.textContent = isFavVille(v.id) ? '❤️' : '🤍'; dvFav.onclick = function(){ toggleFavVille(v.id); }; }
}

// ======== TIMELINE ========
function renderTimeline(v, day) {
  var el = document.getElementById('timeline-day'+day);
  if(!el) return;
  if(!v.plan) {
    el.innerHTML = '<p style="color:var(--text3);font-size:13px;padding:10px 0;">Plan à venir...</p>';
    return;
  }
  var items = day===1 ? v.plan.jour1 : v.plan.jour2;
  if(!items || !items.length) {
    el.innerHTML = '<p style="color:var(--text3);font-size:13px;padding:10px 0;">Plan à venir...</p>';
    return;
  }
  var tagLabels = {
    fr:{food:'🍽️ Repas', culture:'🏛️ Culture', nature:'🌿 Nature', shopping:'🛍️ Shopping', relax:'😌 Détente', nuit:'🌙 Soirée'},
    en:{food:'🍽️ Food', culture:'🏛️ Culture', nature:'🌿 Nature', shopping:'🛍️ Shopping', relax:'😌 Relax', nuit:'🌙 Night'},
    ar:{food:'🍽️ طعام', culture:'🏛️ ثقافة', nature:'🌿 طبيعة', shopping:'🛍️ تسوق', relax:'😌 راحة', nuit:'🌙 مساء'}
  };
  var tagL = tagLabels[lang] || tagLabels.fr;
  el.innerHTML = items.map(function(item) {
    var activ = lang==='en'?(item.activity_en||item.activity):lang==='ar'?(item.activity_ar||item.activity):item.activity;
    var place = lang==='en'?(item.place_en||item.place):lang==='ar'?(item.place_ar||item.place):item.place;
    var tip   = lang==='en'?(item.tip_en||item.tip):lang==='ar'?(item.tip_ar||item.tip):item.tip;
    var tags = (item.tags||[]).map(function(t){
      return '<span class="timeline-tag tag-'+t+'">'+(tagL[t]||t)+'</span>';
    }).join('');
    return '<div class="timeline-item">'
      +'<div class="timeline-left">'
      +'<div class="timeline-time">'+item.time+'</div>'
      +'<div class="timeline-line"></div>'
      +'</div>'
      +'<div class="timeline-content" style="text-align:left">'
      +'<span class="timeline-emoji">'+item.emoji+'</span>'
      +'<div class="timeline-activity">'+activ+'</div>'
      +'<div class="timeline-place">📍 '+place+'</div>'
      +'<div class="timeline-tip">💡 '+tip+'</div>'
      +'<div class="timeline-tags">'+tags+'</div>'
      +'</div>'
      +'</div>';
  }).join('');
}

// ======== TABS DETAIL VILLE ========
function switchDetailTab(tab) {
  var tabs = ['info','lieux','plan'];
  document.querySelectorAll('.detail-tab').forEach(function(t,i){
    t.classList.toggle('active', tabs[i]===tab);
  });
  document.querySelectorAll('.detail-tab-content').forEach(function(c){ c.classList.remove('active'); });
  var el = document.getElementById('dtab-'+tab);
  if(el) el.classList.add('active');
}

function switchPlanDay(day) {
  document.querySelectorAll('.plan-day-btn').forEach(function(b,i){ b.classList.toggle('active', i+1===day); });
  document.querySelectorAll('.plan-day').forEach(function(d,i){ d.classList.toggle('active', i+1===day); });
}

// ======== DETAIL LIEU ========
function showLieu(id) {
  var l = DATA.lieux.find(function(x){ return x.id===id; });
  if(!l) return;
  document.getElementById('dl-img').src = l.img;
  document.getElementById('dl-img').onerror = function(){ this.src='https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600'; };
  document.getElementById('dl-name').textContent = getName(l);
  document.getElementById('dl-cat').textContent = l.cat;
  document.getElementById('dl-cat2').textContent = l.cat;
  document.getElementById('dl-ville').textContent = '📍 '+l.ville;
  document.getElementById('dl-ville2').textContent = l.ville;
  document.getElementById('dl-desc').textContent = getDesc(l);
  document.getElementById('dl-maps').href = l.maps_url||'#';
  document.getElementById('dl-maps').textContent = t('open_maps');
  var villeLabelEl = document.querySelector('#detail-lieu .detail-info-label:first-child');
  var catLabelEl = document.querySelector('#detail-lieu .detail-info-label:last-child');
  // Update lieu detail labels
  var lieuLabels = document.querySelectorAll('#detail-lieu .detail-info-label');
  if(lieuLabels[0]) lieuLabels[0].textContent = t('ville_label');
  if(lieuLabels[1]) lieuLabels[1].textContent = t('cat_label');
  document.getElementById('detail-lieu').classList.add('open');
  // Update fav button
  var dlFav = document.getElementById('dl-fav-btn');
  if(dlFav) { dlFav.textContent = isFavLieu(l.id) ? '❤️' : '🤍'; dlFav.onclick = function(){ toggleFavLieu(l.id); }; }
}
function closeLieu() { document.getElementById('detail-lieu').classList.remove('open'); }

// ======== AUTRES ========
function closeDetail(id) { document.getElementById(id).classList.remove('open'); }
function showAbout() { document.getElementById('about-page').classList.add('open'); }
function hideAbout() { document.getElementById('about-page').classList.remove('open'); }
// ======== FAVORIS (localStorage) ========
function getFavs() {
  try { return JSON.parse(localStorage.getItem('gm_favs') || '{"villes":[],"lieux":[]}'); }
  catch(e) { return {villes:[], lieux:[]}; }
}
function saveFavs(favs) {
  try { localStorage.setItem('gm_favs', JSON.stringify(favs)); } catch(e) {}
}
function isFavVille(id) { return getFavs().villes.indexOf(id) !== -1; }
function isFavLieu(id)  { return getFavs().lieux.indexOf(id)  !== -1; }

function toggleFavVille(id) {
  var favs = getFavs();
  var idx = favs.villes.indexOf(id);
  if(idx === -1) { favs.villes.push(id); } else { favs.villes.splice(idx,1); }
  saveFavs(favs);
  var btn = document.getElementById('dv-fav');
  if(btn) btn.textContent = isFavVille(id) ? '❤️' : '🤍';
}
function toggleFavLieu(id) {
  var favs = getFavs();
  var idx = favs.lieux.indexOf(id);
  if(idx === -1) { favs.lieux.push(id); } else { favs.lieux.splice(idx,1); }
  saveFavs(favs);
  var btn = document.getElementById('dl-fav-btn');
  if(btn) btn.textContent = isFavLieu(id) ? '❤️' : '🤍';
}
function toggleFav(el) { el.textContent = el.textContent==='🤍'?'❤️':'🤍'; }

function updateSearchPlaceholder() {
  var el = document.getElementById('search-input');
  if(el) el.placeholder = t('search_ville');
}

function handleSearch() {
  var q = document.getElementById('search-input').value.toLowerCase();
  if(!q) { renderVilles(); return; }
  var res = DATA.villes.filter(function(v){
    return v.nom.toLowerCase().includes(q) || v.region.toLowerCase().includes(q) || (v.nom_ar&&v.nom_ar.includes(q));
  });
  document.getElementById('villes-grid').innerHTML = res.length ? res.map(function(v){
    return '<div class="ville-card" onclick="showVille('+v.id+')">'
      +'<img src="'+v.img+'" alt="'+v.nom+'" loading="lazy">'
      +'<div class="ville-card-info">'
      +'<div class="ville-card-name">'+v.nom+'</div>'
      +'<div class="ville-card-region">'+v.region+'</div>'
      +'</div></div>';
  }).join('') : '<p style="padding:20px;color:#999;font-size:14px;grid-column:span 2;">Aucun résultat</p>';
}
