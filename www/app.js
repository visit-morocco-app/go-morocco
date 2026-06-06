
// ======== TRANSLATIONS ========
var T = {
  fr: {
    search_ville: 'Rechercher une ville...', search_gastro: 'Rechercher un plat...',
    search_lieux: 'Filtrer par ville',
    open_maps: '📍 Ouvrir dans Google Maps',
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
    search_ville: 'Search a city...', search_gastro: 'Search a dish...',
    search_lieux: 'Filter by city',
    open_maps: '📍 Open in Google Maps',
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

};
function t(key) { return (T[lang]||T.fr)[key] || (T.fr)[key] || key; }


// Lieu categories translation
var lieuCats = {
  fr:{Place:'Place',Jardin:'Jardin',Marché:'Marché',Patrimoine:'Patrimoine',Monument:'Monument',Culture:'Culture',Médina:'Médina',Promenade:'Promenade',Plage:'Plage',Port:'Port',Nature:'Nature',Artisanat:'Artisanat',Architecture:'Architecture',Loisirs:'Loisirs',Surf:'Surf','Bien-être':'Bien-être',Kasbah:'Kasbah',Aventure:'Aventure','Ville historique':'Ville historique',Sport:'Sport'},
  en:{Place:'Square',Jardin:'Garden',Marché:'Market',Patrimoine:'Heritage',Monument:'Monument',Culture:'Culture',Médina:'Medina',Promenade:'Promenade',Plage:'Beach',Port:'Port',Nature:'Nature',Artisanat:'Crafts',Architecture:'Architecture',Loisirs:'Leisure',Surf:'Surf','Bien-être':'Wellness',Kasbah:'Kasbah',Aventure:'Adventure','Ville historique':'Historic city',Sport:'Sport'},

};
function translateLieuCat(cat) { return (lieuCats[lang]||lieuCats.fr)[cat] || cat; }

// Gastro types translation
var gastroTypes = {
  fr: {'Plat principal':'Plat principal','Entrée':'Entrée','Soupe':'Soupe','Dessert':'Dessert','Boisson':'Boisson','Petit-déjeuner':'Petit-déjeuner','Grillades':'Grillades','Salade':'Salade','Accompagnement':'Accompagnement','Street food':'Street food','Sauce':'Sauce','Pâtisserie':'Pâtisserie'},
  en: {'Plat principal':'Main course','Entrée':'Starter','Soupe':'Soup','Dessert':'Dessert','Boisson':'Drink','Petit-déjeuner':'Breakfast','Grillades':'Grilled','Salade':'Salad','Accompagnement':'Side dish','Street food':'Street food','Sauce':'Sauce','Pâtisserie':'Pastry'},

};
function translateType(type) { return (gastroTypes[lang]||gastroTypes.fr)[type] || type; }

// Event months translation
var monthsT = {
  fr:{Juin:'Juin',Juillet:'Juil',Août:'Août',Avril:'Avr',Mai:'Mai',Décembre:'Déc',Janvier:'Jan',Variable:'Var'},
  en:{Juin:'June',Juillet:'July',Août:'Aug',Avril:'Apr',Mai:'May',Décembre:'Dec',Janvier:'Jan',Variable:'Var'},

};
function translateMonth(m) { return (monthsT[lang]||monthsT.fr)[m] || (m||'').substring(0,3); }

// Darija categories translation
var darijaCategories = {
  fr:{Salutations:'Salutations',Politesse:'Politesse',Basique:'Basique',Shopping:'Shopping',Navigation:'Navigation',Restaurant:'Restaurant',Transport:'Transport',Urgence:'Urgence'},
  en:{Salutations:'Greetings',Politesse:'Politeness',Basique:'Basic',Shopping:'Shopping',Navigation:'Navigation',Restaurant:'Restaurant',Transport:'Transport',Urgence:'Emergency'},

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
  if(lang==='en') return i.nom_en || i.nom;
  return i.nom;
}
function getDesc(i) {
  if(lang==='en') return i.desc_en || i.desc_fr;
  return i.desc_fr;
}
function getTitre(i) {
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
  if(!el) return;
  if(currentTab === 'gastro') el.placeholder = t('search_gastro');
  else if(currentTab === 'lieux') el.placeholder = t('search_lieux');
  else el.placeholder = t('search_ville');
}

function updateNavLabels() {
  var navLabels = {
    fr:{villes:'Villes',lieux:'Lieux',gastro:'Gastro',events:'Événements',urgences:'Urgences',transport:'Transport',lexique:'Darija'},
    en:{villes:'Cities',lieux:'Places',gastro:'Gastro',events:'Events',urgences:'Emergency',transport:'Transport',lexique:'Darija'},
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
  var flags = {fr:'🇫🇷', en:'🇬🇧'};
  var flagEl = document.getElementById('current-flag');
  if(flagEl) flagEl.textContent = flags[l] || '🌐';

  document.body.classList.remove('ar');
  document.documentElement.setAttribute('lang',l);
  document.documentElement.setAttribute('dir','ltr');
  currentVilleFilter = 'Tous';
  fcCatFilter = 'Tous'; // Reset darija filter on lang change

  // Update header title
  var titles = {
    fr: {villes:'Villes', lieux:'Lieux', gastro:'Gastronomie', events:'Événements', urgences:'Urgences', transport:'Transport', lexique:'Darija'},
    en: {villes:'Cities', lieux:'Places', gastro:'Gastronomy', events:'Events', urgences:'Emergencies', transport:'Transport', lexique:'Darija'},
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
};
var currentTab = 'villes';
function switchTab(tab, title) {
  currentTab = tab;
  document.querySelectorAll('.tab-content').forEach(function(tc){ tc.classList.remove('active'); });
  document.querySelectorAll('.nav-item').forEach(function(n){ n.classList.remove('active'); });
  document.getElementById('tab-'+tab).classList.add('active');
  if(document.getElementById('nav-'+tab)) document.getElementById('nav-'+tab).classList.add('active');
  document.getElementById('header-title').textContent = (tabTitles[lang]||tabTitles.fr)[tab] || title;
  // Show search bar only for villes, lieux, gastro
  var searchBar = document.querySelector('.search-bar');
  if(searchBar) {
    var showSearch = ['villes','lieux','gastro'].indexOf(tab) !== -1;
    searchBar.style.display = showSearch ? 'flex' : 'none';
    if(showSearch) {
      var input = document.getElementById('search-input');
      if(input) input.value = '';
      updateSearchPlaceholder();
    }
  }
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
      +'<div class="ville-card-region">'+(lang==='en'?v.region_en:v.region)+'</div>'
      +'</div></div>';
  }).join('');
}

// ======== LIEUX ========
function renderVilleFilter() {
  var el = document.getElementById('ville-filter');
  if(!el) return;
  var villes = ['Tous'].concat(DATA.villes.map(function(v){ return v.nom; }));
  el.innerHTML = villes.map(function(v) {
    var label = v==='Tous'?(lang==='en'?'All':'Tous'):v;
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
    var cat = e.type === 'religieux'
      ? (lang==='en' ? 'Religious' : 'Religieux')
      : (e.categorie || 'Culture');
    var bgc = catColors[cat] || '#F5F5F5';
    var tc = catText[cat] || '#333';
    var desc = getDesc(e);
    var shortDesc = desc.length > 140 ? desc.substring(0,140)+'...' : desc;
    var moisText = translateMonth(e.mois||e.periode||'');

    var villeText = (e.ville==='Tout le Maroc'||e.ville==='All Morocco') ? t('tout_maroc') : e.ville;
    return '<div class="event-card"'+'>'
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
    fr:{hopital:'Hôpital', tel:'Téléphone', appeler:'Appeler'},
    en:{hopital:'Hospital', tel:'Phone', appeler:'Call'},

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
      +'<div class="urgence-card-top"><div class="urgence-card-ville">'+u.ville+'</div></div>'
      +'<div class="urgence-card-body">'
      +'<div class="urgence-row">'
      +'<div class="urgence-row-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e91e63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>'
      +'<div class="urgence-row-info"><div class="urgence-row-label">'+l.hopital+'</div>'
      +'<div class="urgence-row-val">'+u.hopital+'</div></div>'
      +'<a href="'+u.hopital_maps+'" target="_blank" class="urgence-maps-btn">📍</a></div>'
      +'<div class="urgence-row">'
      +'<div class="urgence-row-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e91e63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.47 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/></svg></div>'
      +'<div class="urgence-row-info"><div class="urgence-row-label">'+l.tel+'</div>'
      +'<div class="urgence-row-val">'+u.hopital_tel+'</div></div>'
      +'<a href="tel:'+u.hopital_tel+'" class="urgence-call-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.47 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/></svg> '+l.appeler+'</a></div>'
      +'</div></div>';
  }).join('');
}

// ======== TRANSPORT ========
function renderTransport() {
  var el = document.getElementById('transport-list');
  if(!el) return;
  var routeLabel = lang==='en'?'Route':'Route';
  var dureeLabel = lang==='en'?'Duration':'Durée';
  var infoLabel = lang==='en'?'Info':'Infos';
  var siteLabel = lang==='en'?'Website':'Site';
  el.innerHTML = DATA.transport.map(function(t) {
    var nom = lang==='en'?(t.nom_en||t.nom):t.nom;
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
  fcFiltered = (cat==='Tous'||cat==='All') ? DATA.lexique.slice() : DATA.lexique.filter(function(l){ return l.categorie===cat; });
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
  var frontWord = lang==='en'?l.mot_en:l.mot_fr;
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
  var scene = document.getElementById('fc-scene');
  if(!scene) return;
  fcFlipped = !fcFlipped;
  scene.classList.toggle('flipped', fcFlipped);
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
  document.getElementById('dv-region').textContent = '📍 '+(lang==='en'?v.region_en:v.region);
  document.getElementById('dv-region2').textContent = lang==='en'?v.region_en:v.region;
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
    {fr:'📖 Info', en:'📖 Info'},
    {fr:'📍 Lieux', en:'📍 Places'},
    {fr:'🗓️ Plan 2j', en:'🗓️ 2-Day Plan'}
  ];
  tabLabels.forEach(function(tab, i){
    if(tabs[i]) tab.textContent = (tabs[i][lang] || tabs[i].fr);
  });

  // Update budget label
  var budgetLabel = document.querySelector('.plan-budget-label');
  var budgetNote = document.querySelector('.plan-budget-note');
  if(budgetLabel) budgetLabel.textContent = lang==='en'?'Estimated budget / person':'Budget estimé / personne';
  if(budgetNote) budgetNote.textContent = lang==='en'?'Accommodation not included':'Hébergement non inclus';

  // Update plan day buttons
  var dayBtns = document.querySelectorAll('.plan-day-btn');
  if(dayBtns[0]) dayBtns[0].textContent = lang==='en'?'☀️ Day 1':'☀️ Jour 1';
  if(dayBtns[1]) dayBtns[1].textContent = lang==='en'?'🌙 Day 2':'🌙 Jour 2';

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
  };
  var tagL = tagLabels[lang] || tagLabels.fr;
  el.innerHTML = items.map(function(item) {
    var activ = lang==='en'?(item.activity_en||item.activity):item.activity;
    var place = lang==='en'?(item.place_en||item.place):item.place;
    var tip   = lang==='en'?(item.tip_en||item.tip):item.tip;
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

// ======== FAVORIS PAGE ========
function showFavs() {
  renderFavs();
  document.getElementById('favs-page').classList.add('open');
}
function hideFavs() {
  document.getElementById('favs-page').classList.remove('open');
}
function renderFavs() {
  var titleEl = document.getElementById('favs-page-title');
  if(titleEl) titleEl.textContent = lang==='en' ? 'My Favourites' : 'Mes Favoris';

  var favs = getFavs();
  var isEmpty = favs.villes.length === 0 && favs.lieux.length === 0;
  var villesSection = document.getElementById('favs-villes-section');
  var lieuxSection  = document.getElementById('favs-lieux-section');
  var emptyEl       = document.getElementById('favs-empty');
  var villesGrid    = document.getElementById('favs-villes-grid');
  var lieuxGrid     = document.getElementById('favs-lieux-grid');

  if(isEmpty) {
    if(villesSection) villesSection.style.display = 'none';
    if(lieuxSection)  lieuxSection.style.display  = 'none';
    if(emptyEl)       emptyEl.style.display = 'block';
    return;
  }
  if(emptyEl) emptyEl.style.display = 'none';

  // VILLES
  var favVilles = DATA.villes.filter(function(v){ return favs.villes.indexOf(v.id) !== -1; });
  if(villesSection) villesSection.style.display = favVilles.length ? 'block' : 'none';
  if(villesGrid && favVilles.length) {
    villesGrid.style.cssText = 'display:grid;grid-template-columns:repeat(2,1fr);gap:12px;padding:8px 0 20px';
    villesGrid.innerHTML = favVilles.map(function(v){
      var name = getName(v);
      var region = lang==='en' ? v.region_en : v.region;
      return '<div style="cursor:pointer;border-radius:14px;overflow:hidden;background:#fff;box-shadow:0 2px 10px rgba(0,0,0,0.12);position:relative">'
        + '<div onclick="showVille('+v.id+')">'
        + '<img src="'+v.img+'" style="width:100%;height:120px;object-fit:cover;display:block">'
        + '<div style="padding:10px 12px">'
        + '<div style="font-weight:700;font-size:14px;color:#1a1a1a">'+name+'</div>'
        + '<div style="font-size:12px;color:#888;margin-top:2px">'+region+'</div>'
        + '</div></div>'
        + '<div onclick="unfavVille('+v.id+')" style="position:absolute;top:8px;right:8px;width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.95);display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;box-shadow:0 2px 6px rgba(0,0,0,0.2)">❤️</div>'
        + '</div>';
    }).join('');
  }

  // LIEUX
  var favLieux = DATA.lieux.filter(function(l){ return favs.lieux.indexOf(l.id) !== -1; });
  if(lieuxSection) lieuxSection.style.display = favLieux.length ? 'block' : 'none';
  if(lieuxGrid && favLieux.length) {
    lieuxGrid.style.cssText = 'display:flex;flex-direction:column;gap:10px;padding:8px 0 60px';
    lieuxGrid.innerHTML = favLieux.map(function(l){
      var name = getName(l);
      var cat = translateLieuCat(l.cat);
      return '<div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">'
        + '<div onclick="showLieu('+l.id+')" style="display:flex;align-items:center;gap:12px;flex:1;cursor:pointer;min-width:0">'
        + '<img src="'+l.img+'" style="width:50px;height:50px;border-radius:10px;object-fit:cover;flex-shrink:0">'
        + '<div style="flex:1;min-width:0">'
        + '<div style="font-weight:600;font-size:14px;color:#1a1a1a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+name+'</div>'
        + '<div style="font-size:12px;color:#888;margin-top:2px">'+l.ville+' · '+cat+'</div>'
        + '</div></div>'
        + '<div onclick="unfavLieu('+l.id+')" style="color:#e91e63;font-size:22px;cursor:pointer;padding:0 4px;flex-shrink:0">❤️</div>'
        + '</div>';
    }).join('');
  }
}

function unfavVille(id) {
  var favs = getFavs();
  favs.villes = favs.villes.filter(function(x){ return x !== id; });
  saveFavs(favs);
  var btn = document.getElementById('dv-fav');
  if(btn) btn.textContent = '🤍';
  renderFavs();
}

function unfavLieu(id) {
  var favs = getFavs();
  favs.lieux = favs.lieux.filter(function(x){ return x !== id; });
  saveFavs(favs);
  var btn = document.getElementById('dl-fav-btn');
  if(btn) btn.textContent = '🤍';
  renderFavs();
}

// ======== AUTRES ========
function closeDetail(id) { document.getElementById(id).classList.remove('open'); }
function showAbout() {
  var stats = document.querySelectorAll('.about-stat-num');
  if(stats[0]) stats[0].textContent = DATA.villes.length;
  if(stats[1]) stats[1].textContent = DATA.lieux.length;
  var labels = document.querySelectorAll('.about-stat-label');
  if(lang==='en') {
    if(labels[0]) labels[0].textContent = 'Cities';
    if(labels[1]) labels[1].textContent = 'Places';
  } else {
    if(labels[0]) labels[0].textContent = 'Villes';
    if(labels[1]) labels[1].textContent = 'Lieux';
  }
  // POINT 7&8 — Translate About static content
  var featEN = ['2-day plan for each city','2 languages — Français / English','94 places with Google Maps','35 Darija words','Emergencies for 18 cities','My Favourites'];
  var featFR = ['Plan 2 jours pour chaque ville','2 langues — Français / English','94 lieux avec Google Maps','35 mots de Darija','Urgences pour 18 villes','Mes Favoris'];
  var feat = lang==='en' ? featEN : featFR;
  var featureEls = document.querySelectorAll('.about-feature .about-feature-text');
  featureEls.forEach(function(el,i){ if(feat[i]) el.textContent = feat[i]; });
  // Translate mission section
  var missionTitle = document.getElementById('about-mission-title');
  var missionText = document.getElementById('about-mission-text');
  var contactTitle = document.getElementById('about-contact-title');
  var versionTitle = document.getElementById('about-version-title');
  var versionText = document.getElementById('about-version-text');

  if(lang==='en') {
    if(missionTitle) missionTitle.textContent = 'Our Mission';
    if(missionText) missionText.textContent = 'Go Morocco is your authentic travel guide to discover the Kingdom of Morocco. From labyrinthine medinas to Atlantic beaches, from the Atlas peaks to the Sahara dunes — explore Morocco like never before.';
    if(contactTitle) contactTitle.textContent = 'Contact';
    if(versionTitle) versionTitle.textContent = 'Version';
    if(versionText) versionText.innerHTML = 'Go Morocco v2.0 — 2025 🇲🇦<br><span style="font-size:12px;color:var(--text3)">Made with ❤️ for travellers worldwide</span>';
  } else {
    if(missionTitle) missionTitle.textContent = 'Notre mission';
    if(missionText) missionText.textContent = "Go Morocco est votre guide de voyage authentique pour découvrir le Royaume du Maroc. Des médinas labyrinthiques aux plages atlantiques, des sommets de l'Atlas aux dunes du Sahara — explorez le Maroc comme jamais auparavant.";
    if(contactTitle) contactTitle.textContent = 'Contact';
    if(versionTitle) versionTitle.textContent = 'Version';
    if(versionText) versionText.innerHTML = 'Go Morocco v2.0 — 2025 🇲🇦<br><span style="font-size:12px;color:var(--text3)">Développé avec ❤️ pour les voyageurs du monde</span>';
  }
  document.getElementById('about-page').classList.add('open');
}
function hideAbout() { document.getElementById('about-page').classList.remove('open'); }
// ======== FAVORIS (localStorage) ========
window.getFavs = function() {
  try { return JSON.parse(localStorage.getItem('gm_favs') || '{"villes":[],"lieux":[]}'); }
  catch(e) { return {villes:[], lieux:[]}; }
};
window.saveFavs = function(favs) {
  try { localStorage.setItem('gm_favs', JSON.stringify(favs)); } catch(e) {}
};
window.isFavVille = function(id) { return window.getFavs().villes.indexOf(id) !== -1; };
window.isFavLieu  = function(id) { return window.getFavs().lieux.indexOf(id)  !== -1; };

window.toggleFavVille = function(id) {
  var favs = window.getFavs();
  var idx = favs.villes.indexOf(id);
  if(idx === -1) { favs.villes.push(id); } else { favs.villes.splice(idx,1); }
  window.saveFavs(favs);
  var btn = document.getElementById('dv-fav');
  if(btn) btn.textContent = window.isFavVille(id) ? '❤️' : '🤍';
};
window.toggleFavLieu = function(id) {
  var favs = window.getFavs();
  var idx = favs.lieux.indexOf(id);
  if(idx === -1) { favs.lieux.push(id); } else { favs.lieux.splice(idx,1); }
  window.saveFavs(favs);
  var btn = document.getElementById('dl-fav-btn');
  if(btn) btn.textContent = window.isFavLieu(id) ? '❤️' : '🤍';
};
window.toggleFav = function(el) { el.textContent = el.textContent==='🤍'?'❤️':'🤍'; };

// Aliases locaux pour usage interne
function getFavs() { return window.getFavs(); }
function saveFavs(f) { window.saveFavs(f); }
function isFavVille(id) { return window.isFavVille(id); }
function isFavLieu(id)  { return window.isFavLieu(id); }



function handleSearch() {
  var q = document.getElementById('search-input').value.toLowerCase().trim();

  if(currentTab === 'villes') {
    if(!q) { renderVilles(); return; }
    var res = DATA.villes.filter(function(v){
      return getName(v).toLowerCase().startsWith(q);
    });
    var el = document.getElementById('villes-grid');
    if(el) el.innerHTML = res.length ? res.map(function(v){
      return '<div class="ville-card" onclick="showVille('+v.id+')">'
        +'<img src="'+v.img+'" alt="'+getName(v)+'" loading="lazy">'
        +'<div class="ville-card-info">'
        +'<div class="ville-card-name">'+getName(v)+'</div>'
        +'<div class="ville-card-region">'+(lang==='en'?v.region_en:v.region)+'</div>'
        +'</div></div>';
    }).join('') : '<p style="padding:20px;color:#999;font-size:14px;grid-column:span 2;">'+(lang==='en'?'No results':'Aucun résultat')+'</p>';
    return;
  }

  if(currentTab === 'lieux') {
    if(!q) { renderLieux(); return; }
    var res = DATA.lieux.filter(function(l){
      return getName(l).toLowerCase().startsWith(q);
    });
    var el = document.getElementById('lieux-grid');
    if(el) el.innerHTML = res.length ? res.map(function(l){
      return '<div class="lieu-card" onclick="showLieu('+l.id+')">'
        +'<img src="'+l.img+'" alt="'+getName(l)+'" loading="lazy">'
        +'<div class="lieu-card-info">'
        +'<div class="lieu-card-name">'+getName(l)+'</div>'
        +'<div class="lieu-card-cat">'+l.cat+'</div>'
        +'</div></div>';
    }).join('') : '<p style="padding:20px;color:#999;font-size:14px;">'+(lang==='en'?'No results':'Aucun résultat')+'</p>';
    return;
  }

  if(currentTab === 'gastro') {
    if(!q) { renderGastro(); return; }
    var res = DATA.gastronomie.filter(function(g){
      return getName(g).toLowerCase().startsWith(q);
    });
    var el = document.getElementById('gastro-grid');
    if(el) el.innerHTML = res.length ? res.map(function(g){
      return '<div class="gastro-card">'
        +'<img src="'+g.img+'" alt="'+getName(g)+'" loading="lazy">'
        +'<div class="gastro-card-info">'
        +'<div class="gastro-card-name">'+getName(g)+'</div>'
        +'<div class="gastro-card-type">'+translateType(g.type)+'</div>'
        +'<div class="gastro-card-prix">💰 '+g.prix+'</div>'
        +'</div></div>';
    }).join('') : '<p style="padding:20px;color:#999;font-size:14px;">'+(lang==='en'?'No results':'Aucun résultat')+'</p>';
    return;
  }

  if(currentTab === 'urgences') {
    if(!q) { renderUrgences(); return; }
    var res = DATA.urgences.filter(function(u){
      return u.ville.toLowerCase().includes(q) || u.hopital.toLowerCase().includes(q);
    });
    var el = document.getElementById('urgence-list');
    if(el && res.length) {
      var labels = {fr:{hopital:'Hôpital',tel:'Téléphone',appeler:'📱 Appeler'},en:{hopital:'Hospital',tel:'Phone',appeler:'📱 Call'}};
      var l = labels[lang]||labels.fr;
      el.innerHTML = res.map(function(u){
        return '<div class="urgence-card">'
          +'<div class="urgence-card-top"><div class="urgence-card-ville">'+u.ville+'</div></div>'
          +'<div class="urgence-card-body">'
          +'<div class="urgence-row"><div class="urgence-row-icon">🏥</div>'
          +'<div class="urgence-row-info"><div class="urgence-row-label">'+l.hopital+'</div>'
          +'<div class="urgence-row-val">'+u.hopital+'</div></div>'
          +'<a href="'+u.hopital_maps+'" target="_blank" class="urgence-maps-btn">📍</a></div>'
          +'<div class="urgence-row"><div class="urgence-row-icon">📞</div>'
          +'<div class="urgence-row-info"><div class="urgence-row-label">'+l.tel+'</div>'
          +'<div class="urgence-row-val">'+u.hopital_tel+'</div></div>'
          +'<a href="tel:'+u.hopital_tel+'" class="urgence-call-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.47 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/></svg> '+l.appeler+'</a></div>'
          +'</div></div>';
      }).join('');
    }
    return;
  }
}
