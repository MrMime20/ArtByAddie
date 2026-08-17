// ── Block right-click globally ──
document.addEventListener('contextmenu', e => e.preventDefault());

// ── Art data ──
const artData = [
    {
        "title": "Fox",
        "featured": true,
        "category": "Watercolor",
        "tags": [
            "animal",
            "nature",
            "fox"
        ],
        "date": "2025",
        "desc": "A vibrant wildlife piece featuring Addie the Fox.",
        "img": "./AddieFox.webp"
    },
    {
        "title": "Bird Bath",
        "featured": false,
        "category": "Watercolor",
        "tags": [
            "nature",
            "birds",
            "garden"
        ],
        "date": "2025",
        "desc": "A peaceful outdoor scene near a garden fountain.",
        "img": "./BirdBath.webp"
    },
    {
        "title": "Farmhouse",
        "featured": false,
        "category": "Watercolor",
        "tags": [
            "rustic",
            "architecture",
            "landscape"
        ],
        "date": "2024",
        "desc": "Country farmhouse surrounded by open fields.",
        "img": "./Farmhouse.webp"
    },
    {
        "title": "Gethsemane",
        "featured": false,
        "category": "Acrylic",
        "tags": [
            "dramatic",
            "landscape",
            "night"
        ],
        "date": "2025",
        "desc": "Atmospheric study of night shadows and foliage.",
        "img": "./Gethsemane.webp"
    },
    {
        "title": "Ghost on Swing",
        "featured": true,
        "category": "Acrylic",
        "tags": [
            "whimsical",
            "spooky",
            "character"
        ],
        "date": "2024",
        "desc": "Playful illustration of a ghost swinging under moonlight on homemade canvas.",
        "img": "./GhostOnSwing.webp"
    },
    {
        "title": "Girl Sketch",
        "featured": false,
        "category": "Sketch",
        "tags": [
            "sketch",
            "portrait",
            "pencil"
        ],
        "date": "2023",
        "desc": "Quick structural portrait study.",
        "img": "./GirlSketch.webp"
    },
    {
        "title": "Horse",
        "featured": false,
        "category": "Watercolor",
        "tags": [
            "animal",
            "study",
            "motion"
        ],
        "date": "2023",
        "desc": "Dynamic study of a horse in motion.",
        "img": "./Horse.webp"
    },
    {
        "title": "Joker",
        "featured": false,
        "category": "Mixed Media",
        "tags": [
            "fanart",
            "comic",
            "villain"
        ],
        "date": "2023",
        "desc": "High-contrast villain portrait.",
        "img": "./Joker.webp"
    },
    {
        "title": "Riddler",
        "featured": false,
        "category": "Mixed Media",
        "tags": [
            "fanart",
            "comic",
            "mystery"
        ],
        "date": "2023",
        "desc": "Green and emerald color palette study.",
        "img": "./Riddler.webp"
    },
    {
        "title": "Seashell",
        "featured": false,
        "category": "Watercolor",
        "tags": [
            "minimal",
            "ocean",
            "still life"
        ],
        "date": "2024",
        "desc": "Detailed wash of coastal findings.",
        "img": "./Seashell.webp"
    },
    {
        "title": "Starry Night 1",
        "featured": true,
        "category": "Watercolor",
        "tags": [
            "night",
            "sky",
            "abstract"
        ],
        "date": "2022",
        "desc": "Heavy acrylic texture capturing night energy.",
        "img": "./StarryNight1.webp"
    },
    {
        "title": "Starry Night 2",
        "featured": false,
        "category": "Acrylic",
        "tags": [
            "night",
            "sky",
            "expressionism"
        ],
        "date": "2022",
        "desc": "Alternative color pass on cosmic landscapes.",
        "img": "./StarryNight2.webp"
    },
    {
        "title": "Toothbrush Girl",
        "featured": false,
        "category": "Digital",
        "tags": [
            "character",
            "pop art",
            "daily"
        ],
        "date": "2023",
        "desc": "Candid slice-of-life digital illustration.",
        "img": "./ToothbrushGirl.webp"
    },
    {
        "title": "Turtle",
        "featured": false,
        "category": "Watercolor",
        "tags": [
            "ocean",
            "animal",
            "sea"
        ],
        "date": "2022",
        "desc": "Subtle blue and green washes depicting sea life.",
        "img": "./Turtle.webp"
    },
    {
        "title": "Two Face",
        "featured": false,
        "category": "Mixed Media",
        "tags": [
            "fanart",
            "comic",
            "duality"
        ],
        "date": "2023",
        "desc": "Split portrait exploring light and shadow.",
        "img": "./TwoFace.webp"
    },
    {
        "title": "Venom",
        "featured": false,
        "category": "Mixed Media",
        "tags": [
            "fanart",
            "comic",
            "creature"
        ],
        "date": "2023",
        "desc": "Dark, expressive character artwork.",
        "img": "./Venom.webp"
    },
    {
        "title": "Welder",
        "featured": false,
        "category": "Digital",
        "tags": [
            "metal",
            "sparks",
            "industrial"
        ],
        "date": "2024",
        "desc": "High-contrast capture of industrial work in action.",
        "img": "./Welder.webp"
    },
    {
        "title": "Christ Is My Roots",
        "featured": true,
        "category": "Digital",
        "tags": [
            "community",
            "exhibition",
            "mixed media"
        ],
        "date": "2022",
        "desc": "Featured piece from the annual youth art submission.",
        "img": "./YouthArtSubmission.webp"
    },
    {
        "title": "Waterfall",
        "featured": false,
        "category": "Acrylic",
        "tags": [
            "nature",
            "water",
            "landscape"
        ],
        "date": "2022",
        "desc": "Cascading water study using fluid washes.",
        "img": "./Waterfall.webp"
    },
    {
        "title": "City Alley",
        "featured": false,
        "category": "Acrylic",
        "tags": [
            "urban",
            "city",
            "architecture"
        ],
        "date": "2021",
        "desc": "Moody urban alleyway lit by atmospheric neon.",
        "img": "./CityAlley.webp"
    },
    {
        "title": "Boat",
        "featured": false,
        "category": "Watercolor",
        "tags": [
            "ocean",
            "nautical",
            "tranquil"
        ],
        "date": "2022",
        "desc": "Solitary boat drifting on calm waters.",
        "img": "./Boat.webp"
    },
    {
        "title": "Mountain",
        "featured": true,
        "category": "Acrylic",
        "tags": [
            "landscape",
            "mountains",
            "nature"
        ],
        "date": "2024",
        "desc": "Rugged mountain peak rendered in textured layers.",
        "img": "./Moutain.webp"
    },
    {
        "title": "Moon Over Lake",
        "featured": true,
        "category": "Acrylic",
        "tags": [
            "night",
            "landscape",
            "water"
        ],
        "date": "2024",
        "desc": "Serene scene showing full moon reflections over water.",
        "img": "./MoonOverLake.webp"
    },
    {
        "title": "Witch",
        "featured": false,
        "category": "Acrylic",
        "tags": [
            "fantasy",
            "character",
            "spooky"
        ],
        "date": "2023",
        "desc": "Fantasy character illustration with glowing elements.",
        "img": "./Witch.webp"
    },
    {
        "title": "Halloween Cat",
        "featured": true,
        "category": "Watercolor",
        "tags": [
            "spooky",
            "cat",
            "seasonal"
        ],
        "date": "2023",
        "desc": "Playful holiday illustration featuring a black cat.",
        "img": "./HalloweenCat.webp"
    },
    {
        "title": "Fox",
        "featured": false,
        "category": "Watercolor",
        "tags": [
            "animal",
            "wildlife",
            "nature"
        ],
        "date": "2021",
        "desc": "Soft wash wildlife study of a forest fox.",
        "img": "./Fox.webp"
    },
    {
        "title": "Ewok",
        "featured": false,
        "category": "Watercolor",
        "tags": [
            "fanart",
            "sci-fi",
            "creature"
        ],
        "date": "2021",
        "desc": "Textured illustration of an Endor inhabitant.",
        "img": "./Ewok.webp"
    },
    {
        "title": "Parrot",
        "featured": false,
        "category": "Watercolor",
        "tags": [
            "birds",
            "tropical",
            "vibrant"
        ],
        "date": "2021",
        "desc": "High-contrast tropical bird study featuring vivid plumage.",
        "img": "./Parrot.webp"
    },
    {
        "title": "Forever Beautiful",
        "featured": false,
        "category": "Sketch",
        "tags": [
            "typography",
            "textile",
            "heart"
        ],
        "date": "2024",
        "desc": "French typography and decorative art piece.",
        "img": "./ToujourBelle-AimerMaman.webp"
    },
    {
        "title": "Taylor Swift",
        "featured": false,
        "category": "Acrylic",
        "tags": [
            "portrait",
            "pop-culture",
            "music"
        ],
        "date": "2024",
        "desc": "Taylor Swift acrylic painting on glass using the reverse-painting technique.",
        "img": "./TaylorSwift.webp"
    },
    {
        "title": "Eyeball Nativity",
        "featured": false,
        "category": "Sketch",
        "tags": [
            "surreal",
            "abstract",
            "concepts"
        ],
        "date": "2024",
        "desc": "Surrealist concept piece using mixed media.",
        "img": "./EyeballNativity.webp"
    },
    {
        "title": "Hand Eyeball",
        "featured": false,
        "category": "Sketch",
        "tags": [
            "surreal",
            "sketch",
            "ink"
        ],
        "date": "2024",
        "desc": "Surreal ink and charcoal hand study.",
        "img": "./HandEyeball.webp"
    },
    {
        "title": "Apple Mouth Man",
        "featured": false,
        "category": "Sketch",
        "tags": [
            "surreal",
            "abstract",
            "character"
        ],
        "date": "2024",
        "desc": "Experimental abstract portrait with surreal motifs.",
        "img": "./AppleMouthMan.webp"
    },
    {
        "title": "Dinosaur 3",
        "featured": false,
        "category": "Watercolor",
        "tags": [
            "prehistoric",
            "creature",
            "illustration"
        ],
        "date": "2023",
        "desc": "Dynamic prehistoric creature portrait.",
        "img": "./Dinosaur3.webp"
    },
    {
        "title": "Brick House",
        "featured": false,
        "category": "Watercolor",
        "tags": [
            "architecture",
            "building",
            "landscape"
        ],
        "date": "2022",
        "desc": "Charming study of vintage brick masonry.",
        "img": "./BrickHouse.webp"
    },
    {
        "title": "Dinosaur 2",
        "featured": false,
        "category": "Watercolor",
        "tags": [
            "prehistoric",
            "creature",
            "study"
        ],
        "date": "2023",
        "desc": "Detailed scale texture and color study.",
        "img": "./Dinosaur2.webp"
    },
    {
        "title": "Dinosaur 1",
        "featured": false,
        "category": "Watercolor",
        "tags": [
            "prehistoric",
            "creature",
            "concept"
        ],
        "date": "2023",
        "desc": "Initial concept sketch and render for dino series.",
        "img": "./Dinosaur1.webp"
    },
    {
        "title": "Dinosaur 4",
        "featured": false,
        "category": "Watercolor",
        "tags": [
            "prehistoric",
            "creature",
            "action"
        ],
        "date": "2023",
        "desc": "Action pose illustration completing the dino series.",
        "img": "./Dinosaur4.webp"
    },
    {
        "title": "Spiderman",
        "featured": true,
        "category": "Mixed Media",
        "tags": [
            "fanart",
            "comic",
            "hero"
        ],
        "date": "2023",
        "desc": "Vibrant web-slinger dynamic action shot.",
        "img": "./Spiderman.webp"
    },
    {
        "title": "Doc Ock",
        "featured": false,
        "category": "Mixed Media",
        "tags": [
            "fanart",
            "comic",
            "villain"
        ],
        "date": "2023",
        "desc": "Mechanical arm and lighting focus character design.",
        "img": "./DocOck.webp"
    },
    {
        "title": "Green Goblin",
        "featured": false,
        "category": "Mixed Media",
        "tags": [
            "fanart",
            "comic",
            "villain"
        ],
        "date": "2023",
        "desc": "High-contrast green and purple villain study.",
        "img": "./GreenGoblin.webp"
    },
    {
        "title": "Baseball Shoe - Angle 1",
        "featured": true,
        "category": "Shoes",
        "tags": [
            "custom",
            "cleats",
            "baseball"
        ],
        "date": "2024",
        "desc": "Custom hand-painted baseball cleat perspective study.",
        "img": "./BaseballShoeAngle1.webp"
    },
    {
        "title": "Baseball Shoe - Angle 2",
        "featured": false,
        "category": "Shoes",
        "tags": [
            "custom",
            "cleats",
            "detail"
        ],
        "date": "2024",
        "desc": "Alternate angle highlighting side detail work.",
        "img": "./BaseballShoeAngle2.webp"
    },
    {
        "title": "Seashells",
        "featured": false,
        "category": "Watercolor",
        "tags": [
            "ocean",
            "coastal",
            "still-life"
        ],
        "date": "2023",
        "desc": "Detailed watercolor study of collected beach shells.",
        "img": "./Seashells.webp"
    },
    {
        "title": "Landscape Cloud",
        "featured": false,
        "category": "Acrylic",
        "tags": [
            "landscape",
            "sky",
            "clouds"
        ],
        "date": "2025",
        "desc": "Atmospheric cloud study over open field scenery.",
        "img": "./LandscapeCloud.webp"
    },
    {
        "title": "Flower Shoe",
        "featured": false,
        "category": "Shoes",
        "tags": [
            "custom",
            "floral",
            "wearable-art"
        ],
        "date": "2026",
        "desc": "Hand-painted custom footwear with vibrant floral patterns.",
        "img": "./FlowerShoe.webp"
    },
    {
        "title": "Dragon Shoe",
        "featured": false,
        "category": "Shoes",
        "tags": [
            "custom",
            "dragon",
            "fantasy"
        ],
        "date": "2026",
        "desc": "Custom shoe artwork featuring intricate dragon scales.",
        "img": "./DragonShoe.webp"
    },
    {
        "title": "34 Baseball Shoe",
        "featured": false,
        "category": "Shoes",
        "tags": [
            "custom",
            "sports",
            "number"
        ],
        "date": "2026",
        "desc": "Personalized player-edition custom footwear design.",
        "img": "./34BaseballShoe.webp"
    },
    {
        "title": "Canyon",
        "featured": false,
        "category": "Watercolor",
        "tags": [
            "landscape",
            "canyon",
            "desert"
        ],
        "date": "2023",
        "desc": "Layered wash study of desert canyon rock formations.",
        "img": "./Canyon.webp"
    },
    {
        "title": "Farmhouse Cloudy",
        "featured": false,
        "category": "Watercolor",
        "tags": [
            "rustic",
            "architecture",
            "clouds"
        ],
        "date": "2023",
        "desc": "Atmospheric rural farmhouse scene under overcast skies.",
        "img": "./FarmhouseCloudy.webp"
    },
    {
        "title": "Farmhouse Plains",
        "featured": false,
        "category": "Watercolor",
        "tags": [
            "landscape",
            "plains",
            "countryside"
        ],
        "date": "2023",
        "desc": "Wide-open plains surrounding a distant farmhouse.",
        "img": "./FarmhousePlains.webp"
    },
    {
        "title": "Flower Stalk",
        "featured": false,
        "category": "Watercolor",
        "tags": [
            "botanical",
            "floral",
            "nature"
        ],
        "date": "2022",
        "desc": "Delicate botanical study of a flowering stalk.",
        "img": "./FlowerStalk.webp"
    },
    {
        "title": "Misty Mountain",
        "featured": true,
        "category": "Watercolor",
        "tags": [
            "mountains",
            "fog",
            "landscape"
        ],
        "date": "2026",
        "desc": "Moody mountain peaks emerging through morning mist.",
        "img": "./MistyMountain.webp"
    },
    {
        "title": "Origami Boat",
        "featured": false,
        "category": "Mixed Media",
        "tags": [
            "minimal",
            "origami",
            "concept"
        ],
        "date": "2026",
        "desc": "Minimalist illustration of a folded paper boat floating.",
        "img": "./OrigamiBoat.webp"
    },
    {
        "title": "Rough Ocean",
        "featured": true,
        "category": "Watercolor",
        "tags": [
            "ocean",
            "waves",
            "dramatic"
        ],
        "date": "2026",
        "desc": "Textured acrylic study of stormy sea swells.",
        "img": "./RoughOcean.webp"
    },
    {
    title: "Guy With Glasses",
    featured: false,
    category: "Digital",
    tags: ["portrait", "character", "modern"],
    date: "2026",
    desc: "Candid portrait study focusing on lighting and lens reflection.",
    img: "./GuyWithGlasses.webp"
  },
  {
    title: "Koi Fish Pond",
    featured: true,
    category: "Watercolor",
    tags: ["japan", "fish", "water", "tranquil"],
    date: "2026",
    desc: "Vibrant wet-on-wet watercolor study of koi gliding through pond waters.",
    img: "./KoiFishPond.webp"
  },
  {
    title: "Red Dragon",
    featured: true,
    category: "Digital",
    tags: ["fantasy", "dragon", "creature"],
    date: "2026",
    desc: "High-concept fantasy illustration of a crimson dragon.",
    img: "./RedDragon.webp"
  },
  {
    title: "Rockie Balboa",
    featured: false,
    category: "Media",
    tags: ["portrait", "movie", "charcoal"],
    date: "2025",
    desc: "Expressive charcoal sketch paying homage to the classic cinematic icon.",
    img: "./RockieBalboa.webp"
  },
  {
    title: "Kelpie",
    featured: false,
    category: "Digital",
    tags: ["mythology", "folklore", "water"],
    date: "2026",
    desc: "Atmospheric illustration based on traditional Scottish aquatic folklore.",
    img: "./Kelpie.webp"
  },
  {
    title: "Icarus",
    featured: true,
    category: "Digital",
    tags: ["mythology", "sun", "dramatic"],
    date: "2026",
    desc: "Dramatic composition depicting the flight and fall of Icarus.",
    img: "./Icarus.webp"
  },
  {
    title: "Lumberjack",
    featured: false,
    category: "Media",
    tags: ["character", "rustic", "illustration"],
    date: "2025",
    desc: "Textured ink and watercolor study of a rugged woodsman.",
    img: "./Lumberjack.webp"
  },
  {
    title: "Knight",
    featured: false,
    category: "Digital",
    tags: ["medieval", "armor", "fantasy"],
    date: "2025",
    desc: "Metallic armor highlight and shadow study.",
    img: "./Knight.webp"
  },
  {
    title: "Shallan Noir",
    featured: false,
    category: "Digital",
    tags: ["fanart", "noir", "cosmere"],
    date: "2026",
    desc: "Noir-style portrait reinterpretation of Shallan Davar.",
    img: "./ShallanNoir.webp"
  },
  {
    title: "Chasm Fiend",
    featured: true,
    category: "Digital",
    tags: ["fantasy", "creature", "cosmere"],
    date: "2026",
    desc: "Monolithic creature illustration depicting a great chasm fiend.",
    img: "./ChasmFiend.webp"
  },
  {
    title: "Chani",
    featured: false,
    category: "Digital",
    tags: ["sci-fi", "portrait", "dune"],
    date: "2025",
    desc: "Cinematic digital portrait study with desert lighting.",
    img: "./Chani.webp"
  }
];

// ── Search & Synonyms ──
const synonymMap = {
    watercolor: ["paint", "wash", "aquarelle", "fluid", "paper"],
    digital: ["vector", "render", "character", "illustration", "concept"],
    craft: ["handmade", "wearable", "textile", "custom", "embroidery"],
    media: ["mixed", "acrylic", "ink", "charcoal", "sketch", "pencil"],
    spooky: ["halloween", "ghost", "witch", "cat", "dark", "creepy"],
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
    q = String(q).toLowerCase().trim();
    if (!q) return item.featured ? 200 : 100;

    let s = item.featured ? 50 : 0;
    const title = (item.title || '').toLowerCase();
    const date = item.date || '';
    const category = (item.category || '').toLowerCase();
    const desc = (item.desc || '').toLowerCase();
    const tags = (item.tags || []).map(t => String(t).toLowerCase());

    const fields = [title, date, category, desc, ...tags];
    const terms = [q, ...getSynonyms(q)];

    fields.forEach(f => {
        terms.forEach((t, ti) => {
            if (f.includes(t)) s += ti === 0 ? 100 : 50;
        });
        f.split(/\s+/).forEach(w => {
            if (w && Math.abs(w.length - q.length) <= 2) {
                const d = editDist(w, q);
                if (d <= 2) s += Math.max(0, 70 - d * 20);
            }
        });
    });
    return s;
}

// ── Aspect ratio helper & background preloader ──
// ── Aspect ratio helper & loader preloader ──
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

function escapeCssSelector(str) {
    if (window.CSS && typeof CSS.escape === 'function') {
        return CSS.escape(str);
    }
    return (str || '').replace(/([\\"'#.:;?%&,*+~='^$\[\]()={}|<>\/])/g, '\\$1');
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

const galleryLoader = document.getElementById('galleryLoader');
const loaderStatus = document.getElementById('loaderStatus');
const loaderProgressFill = document.getElementById('loaderProgressFill');
const loaderPercent = document.getElementById('loaderPercent');

// ── Preload all aspect ratios with loader overlay ──
function prepareGalleryLayout() {
    return new Promise((resolve) => {
        const total = artData.length;
        if (total === 0) {
            if (loaderStatus) loaderStatus.innerText = 'Enjoy!';
            if (loaderProgressFill) loaderProgressFill.style.width = '100%';
            if (loaderPercent) loaderPercent.innerText = '100%';
            resolve();
            return;
        }

        let completed = 0;
        if (loaderStatus) loaderStatus.innerText = 'Preparing your experience...';
        if (loaderProgressFill) loaderProgressFill.style.width = '0%';
        if (loaderPercent) loaderPercent.innerText = '0%';

        function updateProgress() {
            const percent = Math.min(100, Math.round((completed / total) * 100));
            if (loaderProgressFill) loaderProgressFill.style.width = `${percent}%`;
            if (loaderPercent) loaderPercent.innerText = `${percent}%`;
        }

        function checkAllDone() {
            if (completed >= total) {
                if (loaderProgressFill) loaderProgressFill.style.width = '100%';
                if (loaderPercent) loaderPercent.innerText = '100%';
                if (loaderStatus) loaderStatus.innerText = 'Enjoy!';
                resolve();
            }
        }

        artData.forEach(item => {
            let handled = false;
            const markDone = (ar) => {
                if (handled) return;
                handled = true;
                if (ar) {
                    aspectCache.set(item.img, ar);
                    try {
                        localStorage.setItem('ar_' + item.img, ar);
                    } catch (e) {}
                } else if (!aspectCache.has(item.img)) {
                    aspectCache.set(item.img, '4 / 5');
                }
                completed++;
                updateProgress();
                checkAllDone();
            };

            const img = new Image();
            img.onload = () => {
                if (img.naturalWidth && img.naturalHeight) {
                    markDone(`${img.naturalWidth} / ${img.naturalHeight}`);
                } else {
                    markDone(null);
                }
            };
            img.onerror = () => markDone(null);
            img.src = item.img;

            if (img.complete && img.naturalWidth && img.naturalHeight) {
                markDone(`${img.naturalWidth} / ${img.naturalHeight}`);
            }
        });
    });
}

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

let currentFilter = 'all';
let filterTimeout;
let currentItems = []; // filtered+sorted list shown in gallery
let currentModalIdx = 0;

// ── Gallery render ──
function renderGallery(filter = 'all', query = '', immediate = false) {
    currentFilter = filter;
    if (!grid) return;

    const doRender = () => {
        grid.innerHTML = '';

        currentItems = artData
            .map(item => ({
                ...item,
                _score: scoreItem(item, query || '')
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
                    <img src="${item.img}" alt="${item.title}" style="opacity:0; transition: opacity 0.4s ease;" draggable="false">
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
                ${item.featured ? `<div class="featured-badge"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><span class="tooltip">Artist's Choice</span></div>` : ''}
            `;

            const imgEl = div.querySelector('img');
            const wrapperEl = div.querySelector('.img-wrapper');
            let loaded = false;
            const handleLoad = () => {
                if (loaded) return;
                loaded = true;
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

            imgEl.addEventListener('load', handleLoad, {
                once: true
            });
            imgEl.addEventListener('error', handleLoad, {
                once: true
            });

            if (imgEl.complete) {
                handleLoad();
            } else if (imgEl.decode) {
                imgEl.decode().then(handleLoad).catch(() => {});
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
    };

    if (immediate || grid.children.length === 0) {
        grid.classList.remove('fading-out');
        doRender();
    } else {
        grid.classList.add('fading-out');
        clearTimeout(filterTimeout);
        filterTimeout = setTimeout(doRender, 250);
    }
}

// ── Tab indicator ──
function updateIndicator(btn) {
    if (!btn || !indicator || window.innerWidth <= 768) return;
    indicator.style.width = `${btn.offsetWidth}px`;
    indicator.style.transform = `translateX(${btn.offsetLeft}px)`;
}

// ── Modal ──
function openModal(item, rect) {
    if (!modal || !item) return;
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalDate = document.getElementById('modalDate');

    if (modalImg) modalImg.src = item.img;
    if (modalTitle) modalTitle.innerText = item.title;
    if (modalDesc) modalDesc.innerText = item.desc;
    if (modalDate) modalDate.innerText = item.date;

    updateModalNav();

    modal.style.display = 'flex';
    if (rect && modalContent) {
        const mRect = modalContent.getBoundingClientRect();
        modalContent.style.transformOrigin = `${rect.left + rect.width / 2 - mRect.left}px ${rect.top + rect.height / 2 - mRect.top}px`;
    }
    void modal.offsetWidth;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateModalNav() {
    if (modalPrev) modalPrev.classList.toggle('hidden', currentModalIdx <= 0);
    if (modalNext) modalNext.classList.toggle('hidden', currentModalIdx >= currentItems.length - 1);
}

function navigateModal(dir) {
    const next = currentModalIdx + dir;
    if (next < 0 || next >= currentItems.length) return;
    currentModalIdx = next;
    const item = currentItems[currentModalIdx];
    const imgEl = document.getElementById('modalImg');
    if (!imgEl) return;
    imgEl.style.opacity = '0';
    setTimeout(() => {
        imgEl.src = item.img;
        imgEl.onload = () => {
            imgEl.style.transition = 'opacity 0.3s';
            imgEl.style.opacity = '1';
        };
        const modalTitle = document.getElementById('modalTitle');
        const modalDesc = document.getElementById('modalDesc');
        const modalDate = document.getElementById('modalDate');

        if (modalTitle) modalTitle.innerText = item.title;
        if (modalDesc) modalDesc.innerText = item.desc;
        if (modalDate) modalDate.innerText = item.date;
        updateModalNav();
    }, 150);
}

function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    setTimeout(() => {
        if (!modal.classList.contains('active')) modal.style.display = 'none';
    }, 400);
}
window.closeModal = closeModal;

if (modal) {
    modal.addEventListener('click', e => {
        if (e.target === modal) closeModal();
    });
}
if (modalPrev) {
    modalPrev.addEventListener('click', e => {
        e.stopPropagation();
        navigateModal(-1);
    });
}
if (modalNext) {
    modalNext.addEventListener('click', e => {
        e.stopPropagation();
        navigateModal(1);
    });
}

// Keyboard nav
document.addEventListener('keydown', e => {
    if (!modal || !modal.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') navigateModal(-1);
    if (e.key === 'ArrowRight') navigateModal(1);
    if (e.key === 'Escape') closeModal();
});

// Touch swipe navigation for mobile modal
let touchStartX = 0;
let touchStartY = 0;
if (modalContent) {
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
            if (diffX < -50) navigateModal(1);
            else if (diffX > 50) navigateModal(-1);
        } else if (diffY > 80) {
            closeModal();
        }
    }, {
        passive: true
    });
}

// ── About panel ──
function openAbout() {
    if (aboutPanel) aboutPanel.classList.add('active');
    if (aboutOverlay) aboutOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAbout() {
    if (aboutPanel) aboutPanel.classList.remove('active');
    if (aboutOverlay) aboutOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}
if (aboutBtn) aboutBtn.addEventListener('click', openAbout);
if (aboutClose) aboutClose.addEventListener('click', closeAbout);
if (aboutOverlay) aboutOverlay.addEventListener('click', closeAbout);

// ── Contact / copy email ──
if (contactBtn) {
    contactBtn.addEventListener('click', function() {
        if (this.classList.contains('copied')) return;
        navigator.clipboard.writeText('sample@email.com').then(() => {
            this.classList.add('copied');
            setTimeout(() => this.classList.remove('copied'), 2800);
        });
    });
}

// ── Tab controls ──
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        updateIndicator(btn);
        renderGallery(btn.dataset.filter, searchInput ? searchInput.value : '');
    });
});

if (searchInput) {
    searchInput.addEventListener('input', e => renderGallery(currentFilter, e.target.value));
}
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
async function initPortfolioPage() {
    document.body.classList.add('page-loaded');
    setupPageExitTransitions();
    updateScrollProgress();

    // 1. Wait until EVERY image in artData has loaded and calculated its exact aspect ratio
    await prepareGalleryLayout();

    // 2. Render gallery with pre-calculated aspect ratios applied to wrappers
    renderGallery('all', '', true);

    // 3. Wait for DOM images to finish decoding/loading
    const domImages = Array.from(document.querySelectorAll('#galleryGrid img'));
    await Promise.all(domImages.map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(res => {
            img.addEventListener('load', res, {
                once: true
            });
            img.addEventListener('error', res, {
                once: true
            });
        });
    }));

    // 4. Force browser layout & paint calculation frames so gallery positions are locked
    await new Promise(res => requestAnimationFrame(() => requestAnimationFrame(res)));

    // 5. Keep 'Enjoy!' visible briefly (~600ms) so the user sees completion
    await new Promise(res => setTimeout(res, 600));

    // 6. Smoothly hide loading screen
    if (galleryLoader) {
        galleryLoader.classList.add('hidden');
    }

    initScrollReveal();
    updateScrollProgress();
    setTimeout(() => updateIndicator(document.querySelector('.tab-btn.active')), 100);
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initPortfolioPage);
} else {
    initPortfolioPage();
}
