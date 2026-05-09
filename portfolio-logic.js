

// ── Block right-click globally ──
document.addEventListener('contextmenu', e => e.preventDefault());

// ── Art data ──
// ── Art data ──
// Updated with your 26 .webp images from the /images folder
const artData = [
    { title: "SISU Welder", featured: true, category: "Digital", tags: ["welder", "character"], date: "2024", desc: "Digital illustration featuring industrial themes.", img: "https://picsum.photos/seed/art1/800/600" },
    { title: "Toothbrush Girl", featured: false, category: "Digital", tags: ["portrait", "person"], date: "2024", desc: "Stylized digital portrait study.", img: "https://picsum.photos/seed/art2/800/600" },
    { title: "Mountain Painting", featured: true, category: "Watercolor", tags: ["nature", "landscape", "mountains"], date: "2024", desc: "Atmospheric mountain landscape study.", img: "https://picsum.photos/seed/art3/800/600" },
    { title: "Flowering Study I", featured: false, category: "Watercolor", tags: ["botanical", "nature"], date: "2024", desc: "Exploration of organic floral forms.", img: "https://picsum.photos/seed/art4/800/600" },
    { title: "Flowering Study II", featured: false, category: "Watercolor", tags: ["botanical", "nature"], date: "2024", desc: "Secondary study in the flowering series.", img: "https://picsum.photos/seed/art5/800/600" },
    { title: "Abstract Flow III", featured: false, category: "Media", tags: ["abstract", "texture"], date: "2024", desc: "Experimental mixed media textures.", img: "https://picsum.photos/seed/art6/800/600" },
    { title: "Composition IV", featured: false, category: "Media", tags: ["abstract", "form"], date: "2024", desc: "Study in balance and hard-edged geometry.", img: "https://picsum.photos/seed/art7/800/600" },
    { title: "Vibrant Sketch V", featured: false, category: "Watercolor", tags: ["color", "sketch"], date: "2024", desc: "A play on vibrant washes and light.", img: "https://picsum.photos/seed/art8/800/600" },
    { title: "Caricature of Addie", featured: false, category: "Digital", tags: ["portrait", "caricature"], date: "2024", desc: "A playful, exaggerated self-portrait caricature.", img: "https://picsum.photos/seed/art9/800/600" },
    { title: "Farmhouse Watercolor", featured: true, category: "Watercolor", tags: ["architecture", "landscape", "house"], date: "2024", desc: "Traditional watercolor study of rural architecture.", img: "https://picsum.photos/seed/art10/800/600" },
    { title: "Swift in Glass", featured: false, category: "Media", tags: ["glass", "portrait", "pop"], date: "2024", desc: "Experimental glass painting featuring Taylor Swift.", img: "https://picsum.photos/seed/art11/800/600" },
    { title: "Waterfall Acrylic", featured: true, category: "Media", tags: ["nature", "waterfall", "acrylic"], date: "2024", desc: "Heavily textured acrylic waterfall landscape.", img: "https://picsum.photos/seed/art12/800/600" },
    { title: "City Alley", featured: false, category: "Digital", tags: ["urban", "city", "architecture"], date: "2024", desc: "Urban perspective and lighting study.", img: "https://picsum.photos/seed/art13/800/600" },
    { title: "Hebdon's House", featured: false, category: "Watercolor", tags: ["architecture", "home"], date: "2024", desc: "Commissioned architectural watercolor of a private residence.", img: "https://picsum.photos/seed/art14/800/600" },
    { title: "Girl Sketch", featured: false, category: "Media", tags: ["sketch", "person", "pencil"], date: "2024", desc: "Raw pencil and charcoal sketch.", img: "https://picsum.photos/seed/art15/800/600" },
    { title: "Abbey's Birthday", featured: false, category: "Media", tags: ["card", "illustration"], date: "2024", desc: "Custom birthday card illustration.", img: "https://picsum.photos/seed/art16/800/600" },
    { title: "Quinceanera Card I", featured: false, category: "Media", tags: ["card", "floral"], date: "2024", desc: "Celebratory card design for Rihanna's Quinceanera.", img: "https://picsum.photos/seed/art17/800/600" },
    { title: "Quinceanera Card II", featured: false, category: "Media", tags: ["card", "floral"], date: "2024", desc: "Alternate celebratory card design concept.", img: "https://picsum.photos/seed/art18/800/600" },
    { title: "Boat Painting", featured: true, category: "Watercolor", tags: ["sea", "boat", "nature"], date: "2024", desc: "Nautical watercolor study focusing on reflections.", img: "https://picsum.photos/seed/art19/800/600" },
    { title: "Native American Study", featured: false, category: "Watercolor", tags: ["portrait", "culture", "unfinished"], date: "2024", desc: "Partly finished watercolor portrait study.", img: "https://picsum.photos/seed/art20/800/600" },
    { title: "Lightswitch Cover", featured: false, category: "Craft", tags: ["3d-printing", "functional"], date: "2024", desc: "Custom 3D printed functional art for the home.", img: "https://picsum.photos/seed/art21/800/600" },
    { title: "Creepy Series I", featured: false, category: "Digital", tags: ["horror", "surreal"], date: "2025", desc: "Dark surrealist digital exploration.", img: "https://picsum.photos/seed/art22/800/600" },
    { title: "Creepy Series II", featured: false, category: "Digital", tags: ["horror", "surreal"], date: "2025", desc: "Second installment in the dark surrealist series.", img: "https://picsum.photos/seed/art23/800/600" },
    { title: "Creepy Series III", featured: true, category: "Digital", tags: ["horror", "surreal"], date: "2025", desc: "Atmospheric horror-themed digital character.", img: "https://picsum.photos/seed/art24/800/600" },
    { title: "Creepy Series IV", featured: false, category: "Digital", tags: ["horror", "surreal"], date: "2025", desc: "Gothic-influenced digital illustration.", img: "https://picsum.photos/seed/art25/800/600" },
    { title: "Creepy Series V", featured: false, category: "Digital", tags: ["horror", "surreal"], date: "2025", desc: "Culmination of the 2025 creepy series.", img: "https://picsum.photos/seed/art26/800/600" }
];

// ── Synonym map ──
const synonymMap = {
    red:["crimson","scarlet","ruby","rose","coral"],
    blue:["azure","cobalt","navy","sapphire","indigo","cyan","teal","water"],
    green:["emerald","jade","olive","mint","lime","forest"],
    yellow:["gold","amber","saffron","lemon","golden"],
    purple:["violet","lavender","mauve","plum","magenta"],
    orange:["amber","rust","copper","tangerine"],
    black:["dark","shadow","obsidian","ebony","midnight"],
    white:["pale","light","ivory","snow","bright"],
    digital:["computer","pixel","electronic","cg","vector","glitch"],
    watercolor:["paint","wash","wet","aquarelle","fluid"],
    craft:["handmade","diy","textile","knit","sewn","stitched"],
    media:["mixed","collage","experimental","acrylic","ink"],
    city:["urban","architecture","building","street","concrete","metropolis","jungle"],
    nature:["landscape","outdoor","forest","ocean","sea","water","sky","sunset"],
    portrait:["face","person","character","figure","human"],
    abstract:["texture","pattern","splatter","form","shape"],
    scifi:["sci-fi","cyberpunk","futuristic","tech","neon","electronic"],
    "2025":["last year","older"],
    "2026":["this year","recent","new","latest"],
    metal:["copper","steel","wire","iron","rust"],
    textile:["fabric","cloth","weave","fiber","thread"],
    minimal:["simple","clean","bare","sparse"],
};
const reverseMap = {};
Object.entries(synonymMap).forEach(([w,syns]) => syns.forEach(s => { (reverseMap[s]||(reverseMap[s]=[])).push(w); }));
function getSynonyms(q) {
    const r = new Set();
    (synonymMap[q]||[]).forEach(s=>r.add(s));
    (reverseMap[q]||[]).forEach(root=>{ r.add(root); (synonymMap[root]||[]).forEach(s=>r.add(s)); });
    return [...r];
}

function editDist(a,b) {
    const m=a.length,n=b.length,dp=Array.from({length:m+1},(_,i)=>[i,...Array(n).fill(0)]);
    for(let j=0;j<=n;j++)dp[0][j]=j;
    for(let i=1;i<=m;i++) for(let j=1;j<=n;j++) dp[i][j]=a[i-1]===b[j-1]?dp[i-1][j-1]:1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
    return dp[m][n];
}

function scoreItem(item, q) {
    if (!q) return item.featured ? 200 : 100;
    q = q.toLowerCase().trim();
    if (!q) return item.featured ? 200 : 100;
    let s = item.featured ? 50 : 0; // featured always gets a boost
    const fields = [item.title.toLowerCase(), item.date, item.category.toLowerCase(), item.desc.toLowerCase(), ...item.tags];
    const terms  = [q, ...getSynonyms(q)];
    fields.forEach(f => {
        terms.forEach((t,ti) => { if(f.includes(t)) s += ti===0?100:50; });
        f.split(/\s+/).forEach(w => { if(Math.abs(w.length-q.length)<=2){ const d=editDist(w,q); if(d<=2) s+=Math.max(0,70-d*20); } });
    });
    return s;
}

// ── DOM refs ──
const grid        = document.getElementById('galleryGrid');
const searchInput = document.getElementById('artSearch');
const tabBtns     = document.querySelectorAll('.tab-btn');
const modal       = document.getElementById('artModal');
const modalContent= document.getElementById('modalContent');
const indicator   = document.getElementById('tabIndicator');
const contactBtn  = document.getElementById('contactBtn');
const aboutBtn    = document.getElementById('aboutBtn');
const aboutPanel  = document.getElementById('aboutPanel');
const aboutClose  = document.getElementById('aboutClose');
const aboutOverlay= document.getElementById('aboutOverlay');
const modalPrev   = document.getElementById('modalPrev');
const modalNext   = document.getElementById('modalNext');

let currentFilter  = 'all';
let filterTimeout;
let currentItems   = []; // filtered+sorted list shown in gallery
let currentModalIdx= 0;

// ── Gallery render ──
function renderGallery(filter='all', query='') {
    currentFilter = filter;
    grid.classList.add('fading-out');
    clearTimeout(filterTimeout);

    filterTimeout = setTimeout(() => {
        grid.innerHTML = '';

        currentItems = artData
            .map(item => ({...item, _score: scoreItem(item, query)}))
            .filter(item => {
                const tabOk    = filter==='all' || item.category===filter;
                const searchOk = !query || item._score > 0;
                return tabOk && searchOk;
            })
            .sort((a,b) => b._score - a._score);

        currentItems.forEach((item, idx) => {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            div.style.cssText = 'opacity:0;transform:translateY(16px);';

            div.innerHTML = `
                <div class="img-shimmer"></div>
                <img src="${item.img}" alt="${item.title}" loading="lazy" style="opacity:0;transition:opacity 0.4s;" draggable="false">
                <div class="img-guard"></div>
                ${item.featured ? `<div class="featured-badge">✦<span class="tooltip">Artist's Choice</span></div>` : ''}
            `;

            const imgEl = div.querySelector('img');
            imgEl.onload = () => {
                const shimmer = div.querySelector('.img-shimmer');
                if (shimmer) shimmer.style.display='none';
                imgEl.style.opacity='1';
            };

            div.addEventListener('click', () => {
                currentModalIdx = idx;
                openModal(currentItems[idx], div.getBoundingClientRect());
            });

            grid.appendChild(div);

            // Staggered fade-in
            requestAnimationFrame(() => setTimeout(() => {
                div.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
                div.style.opacity    = '1';
                div.style.transform  = 'translateY(0)';
            }, idx * 50));
        });

        grid.classList.remove('fading-out');
    }, 300);
}

// ── Tab indicator ──
function updateIndicator(btn) {
    if (!btn || window.innerWidth<=768) return;
    indicator.style.width     = `${btn.offsetWidth}px`;
    indicator.style.transform = `translateX(${btn.offsetLeft}px)`;
}

// ── Modal ──
function openModal(item, rect) {
    document.getElementById('modalImg').src         = item.img;
    document.getElementById('modalTitle').innerText = item.title;
    document.getElementById('modalDesc').innerText  = item.desc;
    document.getElementById('modalDate').innerText  = item.date;

    updateModalNav();

    modal.style.display = 'flex';
    const mRect = modalContent.getBoundingClientRect();
    modalContent.style.transformOrigin = `${rect.left+rect.width/2-mRect.left}px ${rect.top+rect.height/2-mRect.top}px`;
    void modal.offsetWidth;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateModalNav() {
    modalPrev.classList.toggle('hidden', currentModalIdx <= 0);
    modalNext.classList.toggle('hidden', currentModalIdx >= currentItems.length - 1);
}

function navigateModal(dir) {
    const next = currentModalIdx + dir;
    if (next < 0 || next >= currentItems.length) return;
    currentModalIdx = next;
    const item = currentItems[currentModalIdx];
    const imgEl = document.getElementById('modalImg');
    imgEl.style.opacity = '0';
    setTimeout(() => {
        imgEl.src = item.img;
        imgEl.onload = () => { imgEl.style.transition='opacity 0.3s'; imgEl.style.opacity='1'; };
        document.getElementById('modalTitle').innerText = item.title;
        document.getElementById('modalDesc').innerText  = item.desc;
        document.getElementById('modalDate').innerText  = item.date;
        updateModalNav();
    }, 150);
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    setTimeout(() => { if (!modal.classList.contains('active')) modal.style.display='none'; }, 400);
}
window.closeModal = closeModal;

modal.addEventListener('click', e => { if (e.target===modal) closeModal(); });
modalPrev.addEventListener('click', e => { e.stopPropagation(); navigateModal(-1); });
modalNext.addEventListener('click', e => { e.stopPropagation(); navigateModal(1); });

// Keyboard nav
document.addEventListener('keydown', e => {
    if (!modal.classList.contains('active')) return;
    if (e.key==='ArrowLeft')  navigateModal(-1);
    if (e.key==='ArrowRight') navigateModal(1);
    if (e.key==='Escape')     closeModal();
});

// Swipe to close on mobile
let touchStartY = 0;
modalContent.addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; }, {passive:true});
modalContent.addEventListener('touchend',   e => { if (e.changedTouches[0].clientY - touchStartY > 80) closeModal(); }, {passive:true});

// ── About panel ──
function openAbout()  { aboutPanel.classList.add('active'); aboutOverlay.classList.add('active'); document.body.style.overflow='hidden'; }
function closeAbout() { aboutPanel.classList.remove('active'); aboutOverlay.classList.remove('active'); document.body.style.overflow='auto'; }
aboutBtn.addEventListener('click', openAbout);
aboutClose.addEventListener('click', closeAbout);
aboutOverlay.addEventListener('click', closeAbout);

// ── Contact / copy email ──
contactBtn.addEventListener('click', function() {
    if (this.classList.contains('copied')) return;
    navigator.clipboard.writeText('sample@email.com').then(() => {
        this.classList.add('copied');
        setTimeout(() => this.classList.remove('copied'), 2800);
    });
});

// ── Tab controls ──
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(t=>t.classList.remove('active'));
        btn.classList.add('active');
        updateIndicator(btn);
        renderGallery(btn.dataset.filter, searchInput.value);
    });
});

searchInput.addEventListener('input', e => renderGallery(currentFilter, e.target.value));
window.addEventListener('resize', () => updateIndicator(document.querySelector('.tab-btn.active')));

// ── Init ──
setTimeout(() => updateIndicator(document.querySelector('.tab-btn.active')), 100);
renderGallery();
