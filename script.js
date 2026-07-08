/* ============================================
   ARTBYDEVA — Script
   Gallery, modal, parallax, i18n, scroll effects
   ============================================ */

// --- Current language ---
let currentLang = localStorage.getItem('artbydeva-lang') || 'nl';

// --- UI Translations ---
const i18n = {
  nl: {
    'nav.gallery': 'Galerie',
    'nav.about': 'Over Deva',
    'hero.subtitle': 'Het heilige vrouwelijke · magisch realisme',
    'hero.description': 'Schilderijen in acryl, bladgoud en gemengde techniek — godinnen, gesluierde gezichten en het goddelijk vrouwelijke over alle culturen heen.',
    'hero.cta': 'Bekijk de galerie ↓',
    'gallery.label': 'Collectie',
    'gallery.title': 'De Galerie',
    'gallery.intro': 'Acryl, bladgoud en gemengde techniek op doek. Klik een werk voor details en een schermvullende weergave.',
    'about.label': 'Over de kunstenaar',
    'about.title': 'Kleur als devotie',
    'about.p1': 'Deva Saal is een Duits-Nederlandse schilder die het heilige vrouwelijke viert over culturen heen — van hindoeïstische godinnen tot boeddhistische sereniteit, van Europese volkse madonna\'s tot Afrikaanse en oosterse kracht. Haar werk straalt warmte, tederheid en innerlijke kracht uit.',
    'about.p2': 'Ze werkt in acryl op doek, vaak met gemengde techniek: opgebrachte reliëfs, bladgoud en soms echte stof en pailletten die de doeken een tastbare, driedimensionale kwaliteit geven en het licht vangen.',
    'about.medium': 'Acryl, bladgoud & gemengde techniek',
    'about.exhibition': 'Solo-expositie',
    'about.commissions': 'Opdrachten welkom',
    'contact.label': 'Aanvragen & opdrachten',
    'contact.title': 'Breng het <em>licht</em> in huis.',
    'contact.intro': 'Voor prijzen, beschikbaarheid, een atelierbezoek of een portret in opdracht — schrijf Deva rechtstreeks. Ze beantwoordt elk bericht persoonlijk.',
    'contact.cta': 'Schrijf naar het atelier →',
    'modal.dimensions.tbd': 'Wordt aangevuld',
    'modal.year.tbd': 'Wordt aangevuld',
    'modal.inquire': 'Informeer over dit werk',
    'modal.technique': 'Techniek',
    'modal.dimensions': 'Afmetingen',
    'modal.year': 'Jaar',
    'scroll': 'Scroll',
    'form.name': 'Naam',
    'form.name.placeholder': 'Uw naam',
    'form.email': 'E-mail',
    'form.email.placeholder': 'uw@email.nl',
    'form.message': 'Bericht',
    'form.message.placeholder': 'Schrijf iets over wat u zoekt — een schilderij, een opdracht, een bezoek...',
    'form.send': 'Verstuur →',
    'form.success': 'Dank voor uw bericht — Deva neemt snel contact op.',
  },
  en: {
    'nav.gallery': 'Gallery',
    'nav.about': 'About Deva',
    'hero.subtitle': 'The sacred feminine · magical realism',
    'hero.description': 'Paintings in acrylic, gold leaf and mixed media — goddesses, veiled faces and the divine feminine across all cultures.',
    'hero.cta': 'View the gallery ↓',
    'gallery.label': 'Collection',
    'gallery.title': 'The Gallery',
    'gallery.intro': 'Acrylic, gold leaf and mixed media on canvas. Click a work for details and a full-screen view.',
    'about.label': 'About the artist',
    'about.title': 'Colour as devotion',
    'about.p1': 'Deva Saal is a German-Dutch painter who celebrates the sacred feminine across cultures — from Hindu goddesses to Buddhist serenity, from European folk madonnas to African and Eastern strength. Her work radiates warmth, tenderness and inner power.',
    'about.p2': 'She works in acrylic on canvas, often with mixed media: applied reliefs, gold leaf and sometimes real fabric and sequins that give the canvases a tactile, three-dimensional quality.',
    'about.medium': 'Acrylic, gold leaf & mixed media',
    'about.exhibition': 'Solo exhibition',
    'about.commissions': 'Commissions welcome',
    'contact.label': 'Enquiries & commissions',
    'contact.title': 'Bring the <em>light</em> home.',
    'contact.intro': 'For prices, availability, a studio visit or a commissioned portrait — write to Deva directly. She answers every message personally.',
    'contact.cta': 'Write to the studio →',
    'modal.dimensions.tbd': 'To be added',
    'modal.year.tbd': 'To be added',
    'modal.inquire': 'Enquire about this work',
    'modal.technique': 'Technique',
    'modal.dimensions': 'Dimensions',
    'modal.year': 'Year',
    'scroll': 'Scroll',
    'form.name': 'Name',
    'form.name.placeholder': 'Your name',
    'form.email': 'Email',
    'form.email.placeholder': 'your@email.com',
    'form.message': 'Message',
    'form.message.placeholder': 'Tell Deva what you\'re looking for — a painting, a commission, a studio visit...',
    'form.send': 'Send →',
    'form.success': 'Thank you for your message — Deva will be in touch soon.',
  }
};

// --- Painting Data ---
const paintings = [
  // Group I: Het heilige vrouwelijke / The sacred feminine
  {
    id: 1, file: 'IMG_0279.webp',
    title: { nl: 'De Drie Zusters', en: 'The Three Sisters' },
    medium: { nl: 'Acryl, bladgoud & gemengde techniek', en: 'Acrylic, gold leaf & mixed media' },
    category: { nl: 'Het heilige vrouwelijke', en: 'The sacred feminine' },
    description: {
      nl: 'De drievoudige godin — schepper, bewaarder, vernietiger — samengebracht in één doek. Bladgoud en dik opgebracht reliëf geven de figuren een bijna sculpturaal karakter. Een van de meest ambitieuze werken in de collectie.',
      en: 'The triple goddess — creator, preserver, destroyer — united on one canvas. Gold leaf and thickly applied relief give the figures an almost sculptural quality. One of the most ambitious works in the collection.'
    },
    year: '', dimensions: '', fix: ''
  },
  {
    id: 2, file: 'IMG_0255.webp',
    title: { nl: 'Madonna van het Licht', en: 'Madonna of Light' },
    medium: { nl: 'Acryl, bladgoud & reliëf', en: 'Acrylic, gold leaf & relief' },
    category: { nl: 'Het heilige vrouwelijke', en: 'The sacred feminine' },
    description: {
      nl: 'Het bladgoud vangt het licht op een manier die verandert met het tijdstip van de dag. De roze elementen rondom zweven als zegeningen — abstract en decoratief, niet figuratief. Een icoon voor aan de muur.',
      en: 'The gold leaf catches light in ways that shift throughout the day. The pink elements float around her like blessings — abstract and decorative, not figurative. An icon for the wall.'
    },
    year: '', dimensions: '', fix: 'warm'
  },
  {
    id: 3, file: 'IMG_0265.webp',
    title: { nl: 'Zelfportret met Bindi', en: 'Self-Portrait with Bindi' },
    medium: { nl: 'Acryl, bladgoud & reliëf', en: 'Acrylic, gold leaf & relief' },
    category: { nl: 'Het heilige vrouwelijke', en: 'The sacred feminine' },
    description: {
      nl: 'De verf is hier zo dik opgebracht dat je de streken kunt voelen — het doek wordt tastbaar. De bindi als stille focus, de blik als uitnodiging. Dit portret vraagt om stilte.',
      en: 'The paint is applied so thickly here that you can feel the strokes — the canvas becomes tangible. The bindi as quiet focus, the gaze as invitation. This portrait asks for silence.'
    },
    year: '', dimensions: '', fix: ''
  },
  {
    id: 4, file: 'IMG_0277.webp',
    title: { nl: 'Geborgenheid', en: 'Safe Haven' },
    medium: { nl: 'Acryl & reliëf op doek', en: 'Acrylic & relief on canvas' },
    category: { nl: 'Het heilige vrouwelijke', en: 'The sacred feminine' },
    description: {
      nl: 'Het wit reliëf op de achtergrond werkt als een cocon — het isoleert moeder en kind van de wereld. Het universele gebaar van bescherming, geschilderd zonder sentimentaliteit.',
      en: 'The white relief in the background works as a cocoon — isolating mother and child from the world. The universal gesture of protection, painted without sentimentality.'
    },
    year: '', dimensions: '', fix: ''
  },
  {
    id: 5, file: 'IMG_0286.webp',
    title: { nl: 'Vrouw met Anthurium', en: 'Woman with Anthurium' },
    medium: { nl: 'Acryl & reliëf op doek', en: 'Acrylic & relief on canvas' },
    category: { nl: 'Het heilige vrouwelijke', en: 'The sacred feminine' },
    description: {
      nl: 'De anthurium als vlamvormig hart — gehouden op borsthoogte, als een offer of een verklaring. Het paars en groen botsen bewust; de spanning tussen de kleuren geeft het werk zijn energie.',
      en: 'The anthurium as a flame-shaped heart — held at chest height, like an offering or a declaration. The purple and green clash deliberately; the tension between colours gives the work its energy.'
    },
    year: '', dimensions: '', fix: ''
  },

  // Group II: Het gelaat / The face
  {
    id: 6, file: 'IMG_0253.webp',
    title: { nl: 'Gesluierde in Oranje', en: 'Veiled in Orange' },
    medium: { nl: 'Acryl & textiel · gemengde techniek', en: 'Acrylic & textile · mixed media' },
    category: { nl: 'Het gelaat', en: 'The face' },
    description: {
      nl: 'Echte stof en gouden munten zijn in het doek verwerkt — dit schilderij vraagt om van dichtbij bekeken te worden. De grens tussen schilderkunst en sculptuur vervaagt. Raak het bijna aan.',
      en: 'Real fabric and golden coins are woven into the canvas — this painting demands to be seen up close. The line between painting and sculpture dissolves. Almost touch it.'
    },
    year: '', dimensions: '', fix: 'warm'
  },
  {
    id: 7, file: 'IMG_0252.webp',
    title: { nl: 'Achter de Sluier', en: 'Behind the Veil' },
    medium: { nl: 'Acryl, textiel & pailletten', en: 'Acrylic, textile & sequins' },
    category: { nl: 'Het gelaat', en: 'The face' },
    description: {
      nl: 'Textiel en pailletten zijn opgebracht op het doek — het oppervlak glinstert bij wisselend licht. De frontale, symmetrische compositie geeft het werk de kracht van een religieus icoon.',
      en: 'Textile and sequins are applied to the canvas — the surface glimmers in changing light. The frontal, symmetrical composition gives the work the power of a religious icon.'
    },
    year: '', dimensions: '', fix: 'warm'
  },
  {
    id: 9, file: 'IMG_0263.webp',
    title: { nl: 'Stille Kracht', en: 'Quiet Strength' },
    medium: { nl: 'Acryl & reliëf op doek', en: 'Acrylic & relief on canvas' },
    category: { nl: 'Het gelaat', en: 'The face' },
    description: {
      nl: 'Geschilderd in dikke, pasteuze lagen die je met je vingers zou willen volgen. De verfopbouw geeft het portret een fysieke aanwezigheid — het kijkt je aan vanuit het doek alsof het leeft.',
      en: 'Painted in thick, impasto layers that your fingers want to follow. The paint build-up gives the portrait a physical presence — it looks at you from the canvas as if alive.'
    },
    year: '', dimensions: '', fix: ''
  },
  {
    id: 10, file: 'IMG_0275.webp',
    title: { nl: 'Droomster in Groen', en: 'Dreamer in Green' },
    medium: { nl: 'Acryl & reliëf op doek', en: 'Acrylic & relief on canvas' },
    category: { nl: 'Het gelaat', en: 'The face' },
    description: {
      nl: 'De gesloten ogen maken dit het meest contemplatieve werk in de collectie. Het groen werkt kalmerend — dit is een schilderij dat rust brengt in de ruimte waar het hangt.',
      en: 'The closed eyes make this the most contemplative work in the collection. The green has a calming effect — this is a painting that brings stillness to the room where it hangs.'
    },
    year: '', dimensions: '', fix: ''
  },
  {
    id: 11, file: 'IMG_0269.webp',
    title: { nl: 'Drie Profielen in Groen', en: 'Three Profiles in Green' },
    medium: { nl: 'Acryl & reliëf op doek', en: 'Acrylic & relief on canvas' },
    category: { nl: 'Het gelaat', en: 'The face' },
    description: {
      nl: 'De reliëfrand is met de hand opgebouwd en vormt een venster naar de drie profielen. Bijna monochroom — het rood van de lippen is het enige dat doorbreekt. Grafisch en beheerst.',
      en: 'The relief border is hand-built, forming a window onto the three profiles. Almost monochrome — the red of the lips is the only thing that breaks through. Graphic and restrained.'
    },
    year: '', dimensions: '', fix: ''
  },
  {
    id: 12, file: 'IMG_0249.webp',
    title: { nl: 'Tweezaamheid', en: 'Togetherness' },
    medium: { nl: 'Acryl op doek', en: 'Acrylic on canvas' },
    category: { nl: 'Het gelaat', en: 'The face' },
    description: {
      nl: 'De ruimte tussen de twee gezichten is het eigenlijke onderwerp — dat halve centimeter dat een kus scheidt van een belofte. De expressieve lijnen zijn hier bewust ruw gelaten.',
      en: 'The space between the two faces is the real subject — that half centimetre separating a kiss from a promise. The expressive lines are deliberately left raw here.'
    },
    year: '', dimensions: '', fix: 'warm'
  },
  {
    id: 13, file: 'IMG_0297.webp',
    title: { nl: 'Kracht', en: 'Strength' },
    medium: { nl: 'Acryl op doek', en: 'Acrylic on canvas' },
    category: { nl: 'Het gelaat', en: 'The face' },
    description: {
      nl: 'Alsof gezien door water of door een herinnering die langzaam vervaagt. De kleuren lopen in elkaar over zonder scherpe grenzen — dit is schilderen als dromen.',
      en: 'As if seen through water or through a memory slowly fading. The colours bleed into each other without sharp edges — this is painting as dreaming.'
    },
    year: '', dimensions: '', fix: 'contrast'
  },
  {
    id: 14, file: 'IMG_0262.webp',
    title: { nl: 'Dagdroom', en: 'Daydream' },
    medium: { nl: 'Acryl op doek', en: 'Acrylic on canvas' },
    category: { nl: 'Het gelaat', en: 'The face' },
    description: {
      nl: 'Kwetsbaar en direct — geen sluier, geen sieraad, geen afstand. De expressieve lijnen en het bewust versimpelde gezicht doen denken aan Modigliani, maar de warmte is eigen.',
      en: 'Vulnerable and direct — no veil, no ornament, no distance. The expressive lines and deliberately simplified face are reminiscent of Modigliani, but the warmth is entirely her own.'
    },
    year: '2006', dimensions: '', fix: 'depink'
  },

  // Group III: Verhalen & natuur / Stories & nature
  {
    id: 15, file: 'IMG_0284.webp',
    title: { nl: 'Stilte in Saffraan', en: 'Silence in Saffron' },
    medium: { nl: 'Acryl & reliëf op doek', en: 'Acrylic & relief on canvas' },
    category: { nl: 'Verhalen & natuur', en: 'Stories & nature' },
    description: {
      nl: 'Het enige mannelijke portret in de collectie — en misschien het stilste. Het reliëf van het saffraan gewaad contrasteert met de gladde kalmte van het gezicht. Een schilderij als meditatie.',
      en: 'The only male portrait in the collection — and perhaps the quietest. The relief of the saffron robe contrasts with the smooth calm of the face. A painting as meditation.'
    },
    year: '', dimensions: '', fix: ''
  },
  {
    id: 16, file: 'IMG_0282.webp',
    title: { nl: 'Rode Bloesem', en: 'Red Blossom' },
    medium: { nl: 'Acryl & reliëf op doek', en: 'Acrylic & relief on canvas' },
    category: { nl: 'Verhalen & natuur', en: 'Stories & nature' },
    description: {
      nl: 'Een van de kleurrijkste en meest gedetailleerde werken — elke bloem op het gewaad is individueel geschilderd. De gouden haarsierade zijn in reliëf opgebracht. Een viering van ambacht en overdaad.',
      en: 'One of the most colourful and detailed works — every flower on the robe is individually painted. The golden hair ornaments are applied in relief. A celebration of craft and abundance.'
    },
    year: '', dimensions: '', fix: ''
  },
  {
    id: 17, file: 'IMG_0299.webp',
    title: { nl: 'Droomster met Vlinder', en: 'Dreamer with Butterfly' },
    medium: { nl: 'Acryl, textiel & kwasten · gemengde techniek', en: 'Acrylic, textile & tassels · mixed media' },
    category: { nl: 'Verhalen & natuur', en: 'Stories & nature' },
    description: {
      nl: 'Echte kwasten hangen aan het doek en bewegen mee met de lucht in de kamer. Ingelijst met bladgoud, speels en dromerig — dit werk weigert stilte zijn en beweegt met je mee.',
      en: 'Real tassels hang from the canvas and sway with the air in the room. Framed in gold leaf, playful and dreamy — this work refuses to be still and moves with you.'
    },
    year: '', dimensions: '', fix: ''
  },
  {
    id: 18, file: 'IMG_0272.webp',
    title: { nl: 'Bataclan', en: 'Bataclan' },
    medium: { nl: 'Acryl op doek', en: 'Acrylic on canvas' },
    category: { nl: 'Verhalen & natuur', en: 'Stories & nature' },
    description: {
      nl: 'Geïnspireerd door een jonge overlevende van de aanslag op de Bataclan (Parijs, 2015). De levensboom op de rug — wortels, takken en een gezicht in de stam — staat voor veerkracht en verder groeien na trauma.',
      en: 'Inspired by a young survivor of the Bataclan attack (Paris, 2015). The tree of life on the back — roots, branches and a face in the trunk — symbolises resilience and growth beyond trauma.'
    },
    year: '', dimensions: '', fix: ''
  },
  {
    id: 19, file: 'IMG_0288.webp',
    title: { nl: 'Lente van het Hart', en: 'Spring of the Heart' },
    medium: { nl: 'Acryl op doek', en: 'Acrylic on canvas' },
    category: { nl: 'Verhalen & natuur', en: 'Stories & nature' },
    description: {
      nl: 'Folkloristisch en ongegeneerd vrolijk — een breuk met de meer devotionele werken in de collectie. De warme kleuren en het speelse hartje maken dit een ideaal cadeau-schilderij.',
      en: 'Folksy and unabashedly cheerful — a break from the more devotional works in the collection. The warm colours and playful heart make this an ideal gift painting.'
    },
    year: '2008', dimensions: '', fix: ''
  },
  {
    id: 20, file: 'IMG_0290.webp',
    title: { nl: 'Vogel & Bloem', en: 'Bird & Flower' },
    medium: { nl: 'Acryl op doek', en: 'Acrylic on canvas' },
    category: { nl: 'Verhalen & natuur', en: 'Stories & nature' },
    description: {
      nl: 'Decoratief en levendig — geschilderd met het plezier van iemand die geniet van kleur. De tropische sfeer maakt het een stuk dat een kamer opvrolijkt zonder iets te eisen.',
      en: 'Decorative and lively — painted with the pleasure of someone who delights in colour. The tropical feel makes it a piece that brightens a room without demanding anything.'
    },
    year: '2008', dimensions: '', fix: ''
  },
  {
    id: 21, file: 'IMG_0291.webp',
    title: { nl: 'Meisje met Vogel', en: 'Girl with Bird' },
    medium: { nl: 'Acryl op doek', en: 'Acrylic on canvas' },
    category: { nl: 'Verhalen & natuur', en: 'Stories & nature' },
    description: {
      nl: 'Het zachtste werk in de collectie. De vogel op haar schouder voelt als een bezoeker uit een andere wereld — even neergestreken, zo weer weg.',
      en: 'The softest work in the collection. The bird on her shoulder feels like a visitor from another world — alighted for a moment, soon to fly away.'
    },
    year: '2008', dimensions: '', fix: ''
  }
];

// --- Helper: get localized value ---
function t(key) {
  return i18n[currentLang]?.[key] || i18n['nl'][key] || key;
}
function loc(obj) {
  if (typeof obj === 'string') return obj;
  return obj?.[currentLang] || obj?.['nl'] || '';
}

// --- Language Switching ---
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('artbydeva-lang', lang);

  // Update toggle button
  const toggle = document.getElementById('lang-toggle');
  if (toggle) toggle.textContent = lang === 'nl' ? 'EN' : 'NL';

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.getAttribute('data-i18n-html') === 'true') {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  // Update scroll hint
  const scrollHint = document.querySelector('.hero__scroll-hint span');
  if (scrollHint) scrollHint.textContent = t('scroll');

  // Re-render gallery with new language
  const grid = document.getElementById('gallery-grid');
  if (grid) {
    grid.innerHTML = '';
    renderGallery();
    requestAnimationFrame(initReveal);
  }

  // Update form placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });

  // Update modal if open
  if (currentPaintingId !== null) {
    openModal(currentPaintingId);
  }
}

function initLangToggle() {
  const toggle = document.getElementById('lang-toggle');
  if (!toggle) return;
  toggle.textContent = currentLang === 'nl' ? 'EN' : 'NL';
  toggle.addEventListener('click', () => {
    setLanguage(currentLang === 'nl' ? 'en' : 'nl');
  });
}

// --- Gallery Rendering ---
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  // Group by category
  const categories = [...new Set(paintings.map(p => loc(p.category)))];

  categories.forEach(cat => {
    const items = paintings.filter(p => loc(p.category) === cat);

    // Category header
    const header = document.createElement('div');
    header.className = 'gallery__category reveal';
    header.innerHTML = `<span class="section-label">${cat}</span>`;
    header.style.cssText = 'column-span: all; margin-bottom: 24px; margin-top: 48px;';
    grid.appendChild(header);

    // Painting cards
    items.forEach(p => {
      const item = document.createElement('figure');
      item.className = 'gallery__item reveal';
      if (p.fix) item.dataset.fix = p.fix;
      item.dataset.id = p.id;
      item.innerHTML = `
        <img src="paintings-new/${p.file}" alt="${loc(p.title)} — Deva Saal" loading="lazy">
        <div class="gallery__item-info">
          <span class="gallery__item-title">${loc(p.title)}</span>
          <span class="gallery__item-meta">${loc(p.medium)}</span>
        </div>
      `;
      item.addEventListener('click', () => openModal(p.id));
      grid.appendChild(item);
    });
  });
}

// --- Modal ---
let currentPaintingId = null;

function openModal(id) {
  const painting = paintings.find(p => p.id === id);
  if (!painting) return;
  currentPaintingId = id;

  const modal = document.getElementById('modal');
  document.getElementById('modal-image').src = `paintings-new/${painting.file}`;
  document.getElementById('modal-image').alt = loc(painting.title);
  document.getElementById('modal-title').textContent = loc(painting.title);
  document.getElementById('modal-description').textContent = loc(painting.description);
  document.getElementById('modal-medium').textContent = loc(painting.medium);
  document.getElementById('modal-dimensions').textContent = painting.dimensions || t('modal.dimensions.tbd');
  document.getElementById('modal-year').textContent = painting.year || t('modal.year.tbd');

  // Update modal labels
  const metaLabels = modal.querySelectorAll('.modal__meta-label');
  if (metaLabels[0]) metaLabels[0].textContent = t('modal.technique');
  if (metaLabels[1]) metaLabels[1].textContent = t('modal.dimensions');
  if (metaLabels[2]) metaLabels[2].textContent = t('modal.year');

  document.getElementById('modal-inquire').textContent = t('modal.inquire');

  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  currentPaintingId = null;
}

function navigateModal(direction) {
  if (currentPaintingId === null) return;
  const currentIndex = paintings.findIndex(p => p.id === currentPaintingId);
  let nextIndex = currentIndex + direction;

  // Wrap around
  if (nextIndex < 0) nextIndex = paintings.length - 1;
  if (nextIndex >= paintings.length) nextIndex = 0;

  openModal(paintings[nextIndex].id);
}

function initModal() {
  const modal = document.getElementById('modal');
  const closeBtn = modal.querySelector('.modal__close');
  const prevBtn = modal.querySelector('.modal__nav--prev');
  const nextBtn = modal.querySelector('.modal__nav--next');
  const inquireBtn = document.getElementById('modal-inquire');

  closeBtn.addEventListener('click', closeModal);
  prevBtn.addEventListener('click', () => navigateModal(-1));
  nextBtn.addEventListener('click', () => navigateModal(1));

  // Click backdrop to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Close modal before navigating to contact
  inquireBtn.addEventListener('click', () => closeModal());

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (modal.getAttribute('aria-hidden') === 'true') return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') navigateModal(-1);
    if (e.key === 'ArrowRight') navigateModal(1);
  });
}

// --- Parallax ---
function initParallax() {
  const heroWrap = document.querySelector('.hero__image-wrap');
  const heroSection = document.querySelector('.hero');
  if (!heroWrap || !heroSection) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const heroH = heroSection.offsetHeight;

        // Only apply parallax while hero is in view
        if (scrollY < heroH * 1.2) {
          heroWrap.style.transform = `translateY(${scrollY * 0.35}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

// --- Nav scroll effect ---
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 60);
  });
}

// --- Scroll reveal ---
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// --- Contact form (Netlify AJAX) ---
function initContactForm() {
  const form = document.getElementById('contact-form');
  const success = document.getElementById('contact-success');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      });
      form.hidden = true;
      success.hidden = false;
    } catch (err) {
      btn.disabled = false;
    }
  });
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  renderGallery();
  initModal();
  initParallax();
  initNav();
  initLangToggle();
  initContactForm();
  // Apply initial language (always run to sync JS translations with HTML)
  setLanguage(currentLang);
  // Delay reveal init so gallery items are rendered
  requestAnimationFrame(initReveal);
});
