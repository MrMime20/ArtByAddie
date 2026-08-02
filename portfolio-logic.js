// ── Block right-click globally ──
document.addEventListener('contextmenu', e => e.preventDefault());


// ── Art data ──
const artData = [ // ── Art data ──
		const artData = [{
				title: "Achebe",
				featured: true,
				category: "Digital",
				tags: ["portrait", "character"],
				date: "2026",
				desc: "Portrait study inspired by classic literature.",
				img: "https://picsum.photos/600/800?random=1"
			},
			{
				title: "Addie Fox",
				featured: true,
				category: "Watercolor",
				tags: ["animal", "nature", "fox"],
				date: "2026",
				desc: "A vibrant wildlife piece featuring Addie the Fox.",
				img: "https://picsum.photos/800/600?random=2"
			},
			{
				title: "Batman",
				featured: false,
				category: "Digital",
				tags: ["fanart", "comic", "hero"],
				date: "2025",
				desc: "Dark Knight illustration study.",
				img: "https://picsum.photos/700/700?random=3"
			},
			{
				title: "Bird Bath",
				featured: false,
				category: "Media",
				tags: ["nature", "birds", "garden"],
				date: "2026",
				desc: "A peaceful outdoor scene near a garden fountain.",
				img: "https://picsum.photos/600/900?random=4"
			},
			{
				title: "Cherry Tree",
				featured: true,
				category: "Watercolor",
				tags: ["landscape", "nature", "blossom"],
				date: "2026",
				desc: "Springtime study of blooming cherry blossoms.",
				img: "https://picsum.photos/800/500?random=5"
			},
			{
				title: "Farmhouse",
				featured: false,
				category: "Media",
				tags: ["rustic", "architecture", "landscape"],
				date: "2025",
				desc: "Country farmhouse surrounded by open fields.",
				img: "https://picsum.photos/500/750?random=6"
			},
			{
				title: "Gethsemane",
				featured: false,
				category: "Digital",
				tags: ["dramatic", "landscape", "night"],
				date: "2026",
				desc: "Atmospheric study of night shadows and foliage.",
				img: "https://picsum.photos/900/600?random=7"
			},
			{
				title: "Ghost on Swing",
				featured: true,
				category: "Digital",
				tags: ["whimsical", "spooky", "character"],
				date: "2026",
				desc: "Playful illustration of a ghost swinging under moonlight.",
				img: "https://picsum.photos/600/600?random=8"
			},
			{
				title: "Girl Sketch",
				featured: false,
				category: "Media",
				tags: ["sketch", "portrait", "pencil"],
				date: "2025",
				desc: "Quick structural portrait study.",
				img: "https://picsum.photos/600/800?random=9"
			},
			{
				title: "Horse",
				featured: false,
				category: "Watercolor",
				tags: ["animal", "study", "motion"],
				date: "2026",
				desc: "Dynamic study of a horse in motion.",
				img: "https://picsum.photos/800/600?random=10"
			},
			{
				title: "Joker",
				featured: false,
				category: "Digital",
				tags: ["fanart", "comic", "villain"],
				date: "2025",
				desc: "High-contrast villain portrait.",
				img: "https://picsum.photos/500/800?random=11"
			},
			{
				title: "Riddler",
				featured: false,
				category: "Digital",
				tags: ["fanart", "comic", "mystery"],
				date: "2025",
				desc: "Green and emerald color palette study.",
				img: "https://picsum.photos/750/750?random=12"
			},
			{
				title: "Seashell",
				featured: false,
				category: "Watercolor",
				tags: ["minimal", "ocean", "still life"],
				date: "2026",
				desc: "Detailed wash of coastal findings.",
				img: "https://picsum.photos/800/550?random=13"
			},
			{
				title: "Starry Night 1",
				featured: true,
				category: "Media",
				tags: ["night", "sky", "abstract"],
				date: "2026",
				desc: "Heavy acrylic texture capturing night energy.",
				img: "https://picsum.photos/600/850?random=14"
			},
			{
				title: "Starry Night 2",
				featured: false,
				category: "Media",
				tags: ["night", "sky", "expressionism"],
				date: "2026",
				desc: "Alternative color pass on cosmic landscapes.",
				img: "https://picsum.photos/850/600?random=15"
			},
			{
				title: "Toothbrush Girl",
				featured: false,
				category: "Digital",
				tags: ["character", "pop art", "daily"],
				date: "2025",
				desc: "Candid slice-of-life digital illustration.",
				img: "https://picsum.photos/700/900?random=16"
			},
			{
				title: "Turtle",
				featured: false,
				category: "Watercolor",
				tags: ["ocean", "animal", "sea"],
				date: "2026",
				desc: "Subtle blue and green washes depicting sea life.",
				img: "https://picsum.photos/900/700?random=17"
			},
			{
				title: "Two Face",
				featured: false,
				category: "Digital",
				tags: ["fanart", "comic", "duality"],
				date: "2025",
				desc: "Split portrait exploring light and shadow.",
				img: "https://picsum.photos/650/650?random=18"
			},
			{
				title: "Venom",
				featured: false,
				category: "Digital",
				tags: ["fanart", "comic", "creature"],
				date: "2025",
				desc: "Dark, expressive character artwork.",
				img: "https://picsum.photos/600/800?random=19"
			},
			{
				title: "Welder",
				featured: false,
				category: "Craft",
				tags: ["metal", "sparks", "industrial"],
				date: "2026",
				desc: "High-contrast capture of industrial work in action.",
				img: "https://picsum.photos/800/600?random=20"
			},
			{
				title: "Christ Is My Roots",
				featured: true,
				category: "Craft",
				tags: ["community", "exhibition", "mixed media"],
				date: "2026",
				desc: "Featured piece from the annual youth art submission.",
				img: "https://picsum.photos/600/900?random=21"
			},
			{
				title: "Eiffel Tower",
				featured: false,
				category: "Digital",
				tags: ["city", "architecture", "travel"],
				date: "2025",
				desc: "Stylized landmark vector and digital wash artwork.",
				img: "https://picsum.photos/500/800?random=22"
			},
			{
				title: "SISU Spidey",
				featured: true,
				category: "Digital",
				tags: ["fanart", "comic", "mashup"],
				date: "2026",
				desc: "Creative character crossover illustration.",
				img: "https://picsum.photos/800/600?random=23"
			},
			{
				title: "Taylor Swift",
				featured: false,
				category: "Digital",
				tags: ["portrait", "pop-culture", "music"],
				date: "2025",
				desc: "High-contrast digital portrait illustration.",
				img: "https://picsum.photos/600/800?random=24"
			},
			{
				title: "Eyeball Nativity",
				featured: false,
				category: "Media",
				tags: ["surreal", "abstract", "concepts"],
				date: "2025",
				desc: "Surrealist concept piece using mixed media.",
				img: "https://picsum.photos/700/700?random=25"
			},
			{
				title: "Hand Eyeball",
				featured: false,
				category: "Media",
				tags: ["surreal", "sketch", "ink"],
				date: "2026",
				desc: "Surreal ink and charcoal hand study.",
				img: "https://picsum.photos/600/900?random=26"
			},
			{
				title: "Four Seasons",
				featured: true,
				category: "Watercolor",
				tags: ["seasons", "landscape", "quadptych"],
				date: "2026",
				desc: "Color palette transition showing the cycle of seasons.",
				img: "https://picsum.photos/900/450?random=27"
			},
			{
				title: "Apple Mouth Man",
				featured: false,
				category: "Media",
				tags: ["surreal", "abstract", "character"],
				date: "2025",
				desc: "Experimental abstract portrait with surreal motifs.",
				img: "https://picsum.photos/600/800?random=28"
			},
			{
				title: "Drums",
				featured: false,
				category: "Craft",
				tags: ["music", "instrument", "still-life"],
				date: "2026",
				desc: "Textured mixed-media drum kit artwork.",
				img: "https://picsum.photos/800/600?random=29"
			},
			{
				title: "Dinosaur 3",
				featured: false,
				category: "Digital",
				tags: ["prehistoric", "creature", "illustration"],
				date: "2025",
				desc: "Dynamic prehistoric creature portrait.",
				img: "https://picsum.photos/700/700?random=30"
			},
			{
				title: "Brick House",
				featured: false,
				category: "Watercolor",
				tags: ["architecture", "building", "landscape"],
				date: "2026",
				desc: "Charming study of vintage brick masonry.",
				img: "https://picsum.photos/800/550?random=31"
			},
			{
				title: "Dinosaur 2",
				featured: false,
				category: "Digital",
				tags: ["prehistoric", "creature", "study"],
				date: "2025",
				desc: "Detailed scale texture and color study.",
				img: "https://picsum.photos/600/900?random=32"
			},
			{
				title: "Dinosaur 1",
				featured: false,
				category: "Digital",
				tags: ["prehistoric", "creature", "concept"],
				date: "2025",
				desc: "Initial concept sketch and render for dino series.",
				img: "https://picsum.photos/500/750?random=33"
			},
			{
				title: "Dinosaur 4",
				featured: false,
				category: "Digital",
				tags: ["prehistoric", "creature", "action"],
				date: "2025",
				desc: "Action pose illustration completing the dino series.",
				img: "https://picsum.photos/800/600?random=34"
			},
			{
				title: "Spiderman",
				featured: true,
				category: "Digital",
				tags: ["fanart", "comic", "hero"],
				date: "2026",
				desc: "Vibrant web-slinger dynamic action shot.",
				img: "https://picsum.photos/600/800?random=35"
			},
			{
				title: "Doc Ock",
				featured: false,
				category: "Digital",
				tags: ["fanart", "comic", "villain"],
				date: "2025",
				desc: "Mechanical arm and lighting focus character design.",
				img: "https://picsum.photos/700/700?random=36"
			},
			{
				title: "Green Goblin",
				featured: false,
				category: "Digital",
				tags: ["fanart", "comic", "villain"],
				date: "2025",
				desc: "High-contrast green and purple villain study.",
				img: "https://picsum.photos/600/900?random=37"
			},
			{
				title: "Baseball Shoe - Angle 1",
				featured: true,
				category: "Craft",
				tags: ["custom", "cleats", "baseball"],
				date: "2026",
				desc: "Custom hand-painted baseball cleat perspective study.",
				img: "https://picsum.photos/800/600?random=38"
			},
			{
				title: "Baseball Shoe - Angle 2",
				featured: false,
				category: "Craft",
				tags: ["custom", "cleats", "detail"],
				date: "2026",
				desc: "Alternate angle highlighting side detail work.",
				img: "https://picsum.photos/750/750?random=39"
			},
			{
				title: "Seashells",
				featured: false,
				category: "Watercolor",
				tags: ["ocean", "coastal", "still-life"],
				date: "2026",
				desc: "Detailed watercolor study of collected beach shells.",
				img: "https://picsum.photos/800/550?random=40"
			},
			{
				title: "Landscape Cloud",
				featured: false,
				category: "Watercolor",
				tags: ["landscape", "sky", "clouds"],
				date: "2026",
				desc: "Atmospheric cloud study over open field scenery.",
				img: "https://picsum.photos/900/600?random=41"
			},
			{
				title: "Flower Shoe",
				featured: true,
				category: "Craft",
				tags: ["custom", "floral", "wearable-art"],
				date: "2026",
				desc: "Hand-painted custom footwear with vibrant floral patterns.",
				img: "https://picsum.photos/600/800?random=42"
			},
			{
				title: "Dragon Shoe",
				featured: true,
				category: "Craft",
				tags: ["custom", "dragon", "fantasy"],
				date: "2026",
				desc: "Custom shoe artwork featuring intricate dragon scales.",
				img: "https://picsum.photos/750/750?random=43"
			},
			{
				title: "34 Baseball Shoe",
				featured: false,
				category: "Craft",
				tags: ["custom", "sports", "number"],
				date: "2026",
				desc: "Personalized player-edition custom footwear design.",
				img: "https://picsum.photos/800/600?random=44"
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

		// ── Aspect ratio helper & background preloader ──
		const aspectCache = new Map();

		function getAspectRatio(item) {
			if (item.aspectRatio) return item.aspectRatio;
			if (item.width && item.height) return `${item.width} / ${item.height}`;
			if (aspectCache.has(item.img)) return aspectCache.get(item.img);

			try {
				const cached = localStorage.getItem('ar_' + item.img);
				if (cached) {
					aspectCache.set(item.img, cached);
					return cached;
				}
			} catch (e) {}

			return null;
		}

		function preloadAllAspectRatios() {
			artData.forEach(item => {
				if (getAspectRatio(item)) return;

				const img = new Image();
				img.src = item.img;
				img.onload = () => {
					if (img.naturalWidth && img.naturalHeight) {
						const ar = `${img.naturalWidth} / ${img.naturalHeight}`;
						aspectCache.set(item.img, ar);
						try {
							localStorage.setItem('ar_' + item.img, ar);
						} catch (e) {}

						const selector = `.gallery-item[data-img="${CSS.escape(item.img)}"] .img-wrapper`;
						document.querySelectorAll(selector).forEach(wrapper => {
							wrapper.style.aspectRatio = ar;
						});
						updateScrollProgress();
					}
				};
			});
		}

		preloadAllAspectRatios();

		// ── Scroll reveal observer ──
		const revealObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('revealed');
					observer.unobserve(entry.target);
				}
			});
		}, {
			threshold: 0.08,
			rootMargin: '0px 0px -20px 0px'
		});

		function initScrollReveal() {
			document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
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
					div.className = 'gallery-item reveal';
					div.setAttribute('data-img', item.img);
					div.style.setProperty('--reveal-delay', `${(idx % 4) * 65}ms`);
					const aspect = getAspectRatio(item);
					const wrapperStyle = aspect ? `aspect-ratio: ${aspect};` : 'min-height: 140px;';

					div.innerHTML = `
                <div class="img-wrapper" style="${wrapperStyle}">
                    <div class="img-shimmer"></div>
                    <img src="${item.img}" alt="${item.title}" loading="lazy" style="opacity:0; transition: opacity 0.4s ease;" draggable="false">
                    <div class="item-overlay">
                        <div class="item-info">
                            <span class="item-category">${item.category}${item.date ? ` • ${item.date}` : ''}</span>
                            <h3 class="item-title">${item.title}</h3>
                            ${item.desc ? `<p class="item-desc">${item.desc}</p>` : ''}
                            <div class="item-action">
                                <span>View Artwork</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-guard"></div>
                ${item.featured ? `<div class="featured-badge">✦<span class="tooltip">Artist's Choice</span></div>` : ''}
            `;

					const imgEl = div.querySelector('img');
					const wrapperEl = div.querySelector('.img-wrapper');
					const handleLoad = () => {
						const shimmer = div.querySelector('.img-shimmer');
						if (shimmer) shimmer.style.display = 'none';
						if (imgEl.naturalWidth && imgEl.naturalHeight) {
							const ar = `${imgEl.naturalWidth} / ${imgEl.naturalHeight}`;
							aspectCache.set(item.img, ar);
							try {
								localStorage.setItem('ar_' + item.img, ar);
							} catch (e) {}
							wrapperEl.style.aspectRatio = ar;
							updateScrollProgress();
						}
						imgEl.style.opacity = '1';
					};

					if (imgEl.complete) {
						handleLoad();
					} else {
						imgEl.onload = handleLoad;
					}

					div.addEventListener('click', () => {
						currentModalIdx = idx;
						openModal(currentItems[idx], div.getBoundingClientRect());
					});

					grid.appendChild(div);
					revealObserver.observe(div);
				});

				grid.classList.remove('fading-out');
				updateScrollProgress();
			}, 250);
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

		// Touch swipe navigation for mobile modal
		let touchStartX = 0;
		let touchStartY = 0;
		modalContent.addEventListener('touchstart', e => {
			touchStartX = e.touches[0].clientX;
			touchStartY = e.touches[0].clientY;
		}, {
			passive: true
		});
		modalContent.addEventListener('touchend', e => {
			const diffX = e.changedTouches[0].clientX - touchStartX;
			const diffY = e.changedTouches[0].clientY - touchStartY;

			if (Math.abs(diffX) > Math.abs(diffY)) {
				// Horizontal swipe
				if (diffX < -50) navigateModal(1);
				else if (diffX > 50) navigateModal(-1);
			} else if (diffY > 80) {
				// Vertical swipe down
				closeModal();
			}
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

		// ── Page transitions ──
		function setupPageExitTransitions() {
			document.querySelectorAll('a[href]').forEach(link => {
				const href = link.getAttribute('href');
				if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('javascript:')) return;

				link.addEventListener('click', e => {
					if (e.metaKey || e.ctrlKey || e.shiftKey) return;
					const currentPath = window.location.pathname.split('/').pop() || 'portfolio.html';
					if (href === currentPath) return;

					e.preventDefault();
					document.body.classList.add('page-leaving');
					document.body.classList.add('transition-active');

					setTimeout(() => {
						window.location.href = href;
					}, 500);
				});
			});
		}

		// ── Collection Scroll Progress Bar ──
		const progressBar = document.getElementById('scrollProgressBar');

		function updateScrollProgress() {
			if (!progressBar) return;
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
			progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
		}

		window.addEventListener('scroll', updateScrollProgress, {
			passive: true
		});
		window.addEventListener('resize', updateScrollProgress);

		// ── Init ──
		window.addEventListener('DOMContentLoaded', () => {
			document.body.classList.add('page-loaded');
			initScrollReveal();
			setupPageExitTransitions();
			updateScrollProgress();
		});
		document.body.classList.add('page-loaded');
		initScrollReveal();
		setupPageExitTransitions();
		updateScrollProgress();

		setTimeout(() => updateIndicator(document.querySelector('.tab-btn.active')), 100);
		renderGallery();
