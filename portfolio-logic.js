

// ── Block right-click globally ──
document.addEventListener('contextmenu', e => e.preventDefault());

// ── Art data ──
const artData = [
    { title: "Neon Grin",         featured: true,  category: "Digital",    tags: ["cyberpunk","face"],         date: "2026", desc: "A study of artificial light hitting organic surfaces.",   img: "https://picsum.photos/600/800?random=1"  },
    { title: "Paper Weight",      featured: false, category: "Watercolor", tags: ["minimal","paper"],          date: "2025", desc: "Minimalist watercolor on 300gsm paper.",                 img: "https://picsum.photos/800/600?random=2"  },
    { title: "Ghost in the Wire", featured: true,  category: "Digital",    tags: ["sci-fi","character"],       date: "2026", desc: "Conceptual character design for a sci-fi narrative.",     img: "https://picsum.photos/600/600?random=3"  },
    { title: "Rust & Bone",       featured: false, category: "Media",      tags: ["abstract","texture"],       date: "2025", desc: "Mixed media using charcoal and found metal pieces.",      img: "https://picsum.photos/500/700?random=4"  },
    { title: "Blue Monday",       featured: false, category: "Watercolor", tags: ["blue","water","abstract"],  date: "2026", desc: "Heavy wash experiments.",                                 img: "https://picsum.photos/700/500?random=5"  },
    { title: "The Weaver",        featured: true,  category: "Craft",      tags: ["textile","handmade"],       date: "2026", desc: "Hand-stitched textile work.",                             img: "https://picsum.photos/400/600?random=6"  },
    { title: "Concrete Jungle",   featured: false, category: "Digital",    tags: ["city","landscape"],         date: "2025", desc: "Urban architecture study.",                               img: "https://picsum.photos/800/800?random=7"  },
    { title: "Drip Point",        featured: false, category: "Media",      tags: ["ink","splatter"],           date: "2026", desc: "Ink splatter abstraction.",                               img: "https://picsum.photos/600/900?random=8"  },
    { title: "Copper Heart",      featured: false, category: "Craft",      tags: ["sculpture","metal"],        date: "2025", desc: "Sculpted wire and copper mesh.",                          img: "https://picsum.photos/500/500?random=9"  },
    { title: "Static",            featured: true,  category: "Digital",    tags: ["glitch","portrait"],        date: "2026", desc: "Pixel-glitch portraiture.",                               img: "https://picsum.photos/700/1000?random=10"},
    { title: "Golden Hour",       featured: false, category: "Watercolor", tags: ["sunset","landscape"],       date: "2026", desc: "Sunset color theory.",                                    img: "https://picsum.photos/900/600?random=11" },
    { title: "Ocean Fragments",   featured: false, category: "Media",      tags: ["sea","acrylic"],            date: "2025", desc: "Collage of digital prints and acrylic.",                  img: "https://picsum.photos/600/400?random=12" },
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
