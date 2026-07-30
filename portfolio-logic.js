// ── Block right-click globally ──
document.addEventListener('contextmenu', e => e.preventDefault());

// ── Art data ──
const artData = [{
		title: "Achebe",
		featured: true,
		category: "Digital",
		tags: ["portrait", "character"],
		date: "2026",
		desc: "Portrait study inspired by classic literature.",
		img: "./Achebe.webp"
	},
	{
		title: "Addie Fox",
		featured: true,
		category: "Watercolor",
		tags: ["animal", "nature", "fox"],
		date: "2026",
		desc: "A vibrant wildlife piece featuring Addie the Fox.",
		img: "./AddieFox.webp"
	},
	{
		title: "Batman",
		featured: false,
		category: "Digital",
		tags: ["fanart", "comic", "hero"],
		date: "2025",
		desc: "Dark Knight illustration study.",
		img: "./Batman.webp"
	},
	{
		title: "Bird Bath",
		featured: false,
		category: "Media",
		tags: ["nature", "birds", "garden"],
		date: "2026",
		desc: "A peaceful outdoor scene near a garden fountain.",
		img: "./BirdBath.webp"
	},
	{
		title: "Cherry Tree",
		featured: true,
		category: "Watercolor",
		tags: ["landscape", "nature", "blossom"],
		date: "2026",
		desc: "Springtime study of blooming cherry blossoms.",
		img: "./CherryTree.webp"
	},
	{
		title: "Farmhouse",
		featured: false,
		category: "Media",
		tags: ["rustic", "architecture", "landscape"],
		date: "2025",
		desc: "Country farmhouse surrounded by open fields.",
		img: "./Farmhouse.webp"
	},
	{
		title: "Gethsemane",
		featured: false,
		category: "Digital",
		tags: ["dramatic", "landscape", "night"],
		date: "2026",
		desc: "Atmospheric study of night shadows and foliage.",
		img: "./Gethsemane.webp"
	},
	{
		title: "Ghost on Swing",
		featured: true,
		category: "Digital",
		tags: ["whimsical", "spooky", "character"],
		date: "2026",
		desc: "Playful illustration of a ghost swinging under moonlight.",
		img: "./GhostOnSwing.webp"
	},
	{
		title: "Girl Sketch",
		featured: false,
		category: "Media",
		tags: ["sketch", "portrait", "pencil"],
		date: "2025",
		desc: "Quick structural portrait study.",
		img: "./GirlSketch.webp"
	},
	{
		title: "Horse",
		featured: false,
		category: "Watercolor",
		tags: ["animal", "study", "motion"],
		date: "2026",
		desc: "Dynamic study of a horse in motion.",
		img: "./Horse.webp"
	},
	{
		title: "Joker",
		featured: false,
		category: "Digital",
		tags: ["fanart", "comic", "villain"],
		date: "2025",
		desc: "High-contrast villain portrait.",
		img: "./Joker.webp"
	},
	{
		title: "Riddler",
		featured: false,
		category: "Digital",
		tags: ["fanart", "comic", "mystery"],
		date: "2025",
		desc: "Green and emerald color palette study.",
		img: "./Riddler.webp"
	},
	{
		title: "Seashell",
		featured: false,
		category: "Watercolor",
		tags: ["minimal", "ocean", "still life"],
		date: "2026",
		desc: "Detailed wash of coastal findings.",
		img: "./Seashell.webp"
	},
	{
		title: "Starry Night 1",
		featured: true,
		category: "Media",
		tags: ["night", "sky", "abstract"],
		date: "2026",
		desc: "Heavy acrylic texture capturing night energy.",
		img: "./StarryNight1.webp"
	},
	{
		title: "Starry Night 2",
		featured: false,
		category: "Media",
		tags: ["night", "sky", "expressionism"],
		date: "2026",
		desc: "Alternative color pass on cosmic landscapes.",
		img: "./StarryNight2.webp"
	},
	{
		title: "Toothbrush Girl",
		featured: false,
		category: "Digital",
		tags: ["character", "pop art", "daily"],
		date: "2025",
		desc: "Candid slice-of-life digital illustration.",
		img: "./ToothbrushGirl.webp"
	},
	{
		title: "Turtle",
		featured: false,
		category: "Watercolor",
		tags: ["ocean", "animal", "sea"],
		date: "2026",
		desc: "Subtle blue and green washes depicting sea life.",
		img: "./Turtle.webp"
	},
	{
		title: "Two Face",
		featured: false,
		category: "Digital",
		tags: ["fanart", "comic", "duality"],
		date: "2025",
		desc: "Split portrait exploring light and shadow.",
		img: "./TwoFace.webp"
	},
	{
		title: "Venom",
		featured: false,
		category: "Digital",
		tags: ["fanart", "comic", "creature"],
		date: "2025",
		desc: "Dark, expressive character artwork.",
		img: "./Venom.webp"
	},
	{
		title: "Welder",
		featured: false,
		category: "Craft",
		tags: ["metal", "sparks", "industrial"],
		date: "2026",
		desc: "High-contrast capture of industrial work in action.",
		img: "./Welder.webp"
	},
	{
		title: "Youth Art Submission",
		featured: true,
		category: "Craft",
		tags: ["community", "exhibition", "mixed media"],
		date: "2026",
		desc: "Featured piece from the annual youth art submission.",
		img: "./YouthArtSubmission.webp"
	},
	{
		title: "Horse",
		featured: false,
		category: "Watercolor",
		tags: ["animal", "study", "motion"],
		date: "2026",
		desc: "Dynamic study of a horse in motion.",
		img: "./Horse.webp"
	},
	{
		title: "Starry Night 3",
		featured: true,
		category: "Media",
		tags: ["night", "sky", "abstract"],
		date: "2026",
		desc: "Experimental night sky composition with heavy texture.",
		img: "./StarryNight3.webp"
	},
	{
		title: "Waterfall",
		featured: false,
		category: "Watercolor",
		tags: ["nature", "water", "landscape"],
		date: "2026",
		desc: "Cascading water study using fluid washes.",
		img: "./Waterfall.webp"
	},
	{
		title: "City Alley",
		featured: false,
		category: "Digital",
		tags: ["urban", "city", "architecture"],
		date: "2025",
		desc: "Moody urban alleyway lit by atmospheric neon.",
		img: "./CityAlley.webp"
	},
	{
		title: "Boat",
		featured: false,
		category: "Watercolor",
		tags: ["ocean", "nautical", "tranquil"],
		date: "2026",
		desc: "Solitary boat drifting on calm waters.",
		img: "./Boat.webp"
	},
	{
		title: "Mountain",
		featured: true,
		category: "Media",
		tags: ["landscape", "mountains", "nature"],
		date: "2025",
		desc: "Rugged mountain peak rendered in textured layers.",
		img: "./Moutain.webp"
	},
	{
		title: "Moon Over Lake",
		featured: true,
		category: "Digital",
		tags: ["night", "landscape", "water"],
		date: "2026",
		desc: "Serene scene showing full moon reflections over water.",
		img: "./MoonOverLake.webp"
	},
	{
		title: "Bearded Man",
		featured: false,
		category: "Media",
		tags: ["portrait", "charcoal", "study"],
		date: "2025",
		desc: "Expressive portrait study focusing on facial hair textures.",
		img: "./BeardedMan.webp"
	},
	{
		title: "Sunset",
		featured: false,
		category: "Watercolor",
		tags: ["sunset", "sky", "color-theory"],
		date: "2026",
		desc: "Warm gradient study of a dramatic evening sky.",
		img: "./Sunset.webp"
	},
	{
		title: "Witch",
		featured: false,
		category: "Digital",
		tags: ["fantasy", "character", "spooky"],
		date: "2025",
		desc: "Fantasy character illustration with glowing elements.",
		img: "./Witch.webp"
	},
	{
		title: "Halloween Cat",
		featured: true,
		category: "Digital",
		tags: ["spooky", "cat", "seasonal"],
		date: "2025",
		desc: "Playful holiday illustration featuring a black cat.",
		img: "./HalloweenCat.webp"
	},
	{
		title: "Yin Yang",
		featured: false,
		category: "Craft",
		tags: ["abstract", "symbolism", "balance"],
		date: "2026",
		desc: "Modern textural take on classic balance iconography.",
		img: "./YinYang.webp"
	},
	{
		title: "Fox",
		featured: false,
		category: "Watercolor",
		tags: ["animal", "wildlife", "nature"],
		date: "2026",
		desc: "Soft wash wildlife study of a forest fox.",
		img: "./Fox.webp"
	},
	{
		title: "Ewok",
		featured: false,
		category: "Digital",
		tags: ["fanart", "sci-fi", "creature"],
		date: "2025",
		desc: "Textured illustration of an Endor inhabitant.",
		img: "./Ewok.webp"
	},
	{
		title: "Parrot",
		featured: false,
		category: "Watercolor",
		tags: ["birds", "tropical", "vibrant"],
		date: "2026",
		desc: "High-contrast tropical bird study featuring vivid plumage.",
		img: "./Parrot.webp"
	}
];

// ── Synonym map ──
const synonymMap = {
	red: ["crimson", "scarlet", "ruby", "rose", "coral"],
	blue: ["azure", "cobalt", "navy", "sapphire", "indigo", "cyan", "teal", "water"],
	green: ["emerald", "jade", "olive", "mint", "lime", "forest"],
	yellow: ["gold", "amber", "saffron", "lemon", "golden"],
	purple: ["violet", "lavender", "mauve", "plum", "magenta"],
	orange: ["amber", "rust", "copper", "tangerine"],
	black: ["dark", "shadow", "obsidian", "ebony", "midnight"],
	white: ["pale", "light", "ivory", "snow", "bright"],
	digital: ["computer", "pixel", "electronic", "cg", "vector", "glitch"],
	watercolor: ["paint", "wash", "wet", "aquarelle", "fluid"],
	craft: ["handmade", "diy", "textile", "knit", "sewn", "stitched"],
	media: ["mixed", "collage", "experimental", "acrylic", "ink"],
	city: ["urban", "architecture", "building", "street", "concrete", "metropolis", "jungle"],
	nature: ["landscape", "outdoor", "forest", "ocean", "sea", "water", "sky", "sunset"],
	portrait: ["face", "person", "character", "figure", "human"],
	abstract: ["texture", "pattern", "splatter", "form", "shape"],
	scifi: ["sci-fi", "cyberpunk", "futuristic", "tech", "neon", "electronic"],
	"2025": ["last year", "older"],
	"2026": ["this year", "recent", "new", "latest"],
	metal: ["copper", "steel", "wire", "iron", "rust"],
	textile: ["fabric", "cloth", "weave", "fiber", "thread"],
	minimal: ["simple", "clean", "bare", "sparse"],
};
const reverseMap = {};
Object.entries(synonymMap).forEach(([w, syns]) => syns.forEach(s => {
	(reverseMap[s] || (reverseMap[s] = [])).push(w);
}));

function getSynonyms(q) {
	const r = new Set();
	(synonymMap[q] || []).forEach(s => r.add(s));
	(reverseMap[q] || []).forEach(root => {
		r.add(root);
		(synonymMap[root] || []).forEach(s => r.add(s));
	});
	return [...r];
}

function editDist(a, b) {
	const m = a.length,
		n = b.length,
		dp = Array.from({
			length: m + 1
		}, (_, i) => [i, ...Array(n).fill(0)]);
	for (let j = 0; j <= n; j++) dp[0][j] = j;
	for (let i = 1; i <= m; i++)
		for (let j = 1; j <= n; j++) dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
	return dp[m][n];
}

function scoreItem(item, q) {
	if (!q) return item.featured ? 200 : 100;
	q = q.toLowerCase().trim();
	if (!q) return item.featured ? 200 : 100;
	let s = item.featured ? 50 : 0; // featured always gets a boost
	const fields = [item.title.toLowerCase(), item.date, item.category.toLowerCase(), item.desc.toLowerCase(), ...item.tags];
	const terms = [q, ...getSynonyms(q)];
	fields.forEach(f => {
		terms.forEach((t, ti) => {
			if (f.includes(t)) s += ti === 0 ? 100 : 50;
		});
		f.split(/\s+/).forEach(w => {
			if (Math.abs(w.length - q.length) <= 2) {
				const d = editDist(w, q);
				if (d <= 2) s += Math.max(0, 70 - d * 20);
			}
		});
	});
	return s;
}

// ── DOM refs ──
const grid = document.getElementById('galleryGrid');
const searchInput = document.getElementById('artSearch');
const tabBtns = document.querySelectorAll('.tab-btn');
const modal = document.getElementById('artModal');
const modalContent = document.getElementById('modalContent');
const indicator = document.getElementById('tabIndicator');
const contactBtn = document.getElementById('contactBtn');
const aboutBtn = document.getElementById('aboutBtn');
const aboutPanel = document.getElementById('aboutPanel');
const aboutClose = document.getElementById('aboutClose');
const aboutOverlay = document.getElementById('aboutOverlay');
const modalPrev = document.getElementById('modalPrev');
const modalNext = document.getElementById('modalNext');

let currentFilter = 'all';
let filterTimeout;
let currentItems = []; // filtered+sorted list shown in gallery
let currentModalIdx = 0;

// ── Gallery render ──
function renderGallery(filter = 'all', query = '') {
	currentFilter = filter;
	grid.classList.add('fading-out');
	clearTimeout(filterTimeout);

	filterTimeout = setTimeout(() => {
		grid.innerHTML = '';

		currentItems = artData
			.map(item => ({
				...item,
				_score: scoreItem(item, query)
			}))
			.filter(item => {
				const tabOk = filter === 'all' || item.category === filter;
				const searchOk = !query || item._score > 0;
				return tabOk && searchOk;
			})
			.sort((a, b) => b._score - a._score);

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
				if (shimmer) shimmer.style.display = 'none';
				imgEl.style.opacity = '1';
			};

			div.addEventListener('click', () => {
				currentModalIdx = idx;
				openModal(currentItems[idx], div.getBoundingClientRect());
			});

			grid.appendChild(div);

			// Staggered fade-in
			requestAnimationFrame(() => setTimeout(() => {
				div.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
				div.style.opacity = '1';
				div.style.transform = 'translateY(0)';
			}, idx * 50));
		});

		grid.classList.remove('fading-out');
	}, 300);
}

// ── Tab indicator ──
function updateIndicator(btn) {
	if (!btn || window.innerWidth <= 768) return;
	indicator.style.width = `${btn.offsetWidth}px`;
	indicator.style.transform = `translateX(${btn.offsetLeft}px)`;
}

// ── Modal ──
function openModal(item, rect) {
	document.getElementById('modalImg').src = item.img;
	document.getElementById('modalTitle').innerText = item.title;
	document.getElementById('modalDesc').innerText = item.desc;
	document.getElementById('modalDate').innerText = item.date;

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
		imgEl.onload = () => {
			imgEl.style.transition = 'opacity 0.3s';
			imgEl.style.opacity = '1';
		};
		document.getElementById('modalTitle').innerText = item.title;
		document.getElementById('modalDesc').innerText = item.desc;
		document.getElementById('modalDate').innerText = item.date;
		updateModalNav();
	}, 150);
}

function closeModal() {
	modal.classList.remove('active');
	document.body.style.overflow = 'auto';
	setTimeout(() => {
		if (!modal.classList.contains('active')) modal.style.display = 'none';
	}, 400);
}
window.closeModal = closeModal;

modal.addEventListener('click', e => {
	if (e.target === modal) closeModal();
});
modalPrev.addEventListener('click', e => {
	e.stopPropagation();
	navigateModal(-1);
});
modalNext.addEventListener('click', e => {
	e.stopPropagation();
	navigateModal(1);
});

// Keyboard nav
document.addEventListener('keydown', e => {
	if (!modal.classList.contains('active')) return;
	if (e.key === 'ArrowLeft') navigateModal(-1);
	if (e.key === 'ArrowRight') navigateModal(1);
	if (e.key === 'Escape') closeModal();
});

// Swipe to close on mobile
let touchStartY = 0;
modalContent.addEventListener('touchstart', e => {
	touchStartY = e.touches[0].clientY;
}, {
	passive: true
});
modalContent.addEventListener('touchend', e => {
	if (e.changedTouches[0].clientY - touchStartY > 80) closeModal();
}, {
	passive: true
});

// ── About panel ──
function openAbout() {
	aboutPanel.classList.add('active');
	aboutOverlay.classList.add('active');
	document.body.style.overflow = 'hidden';
}

function closeAbout() {
	aboutPanel.classList.remove('active');
	aboutOverlay.classList.remove('active');
	document.body.style.overflow = 'auto';
}
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
		tabBtns.forEach(t => t.classList.remove('active'));
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
