

// ── Commission data ──
// Set open: true/false to control badge per commission type
const commissions = [
    {
        title: "Custom AF1 Painting",
        open: true,
        price: "$120–$180",
        turnaround: "2–3 weeks",
        desc: "Hand-painted Air Force 1s using high-quality acrylic leather paint. Sealed for durability and wearability. You supply the shoes (or I source them for an additional fee). Any design — bring a reference or let me run with it.",
    },
    {
        title: "8×10 Watercolor Portrait",
        open: true,
        price: "$85",
        turnaround: "1–2 weeks",
        desc: "A traditional watercolor portrait on 300gsm cold-press paper. People, pets, characters — all welcome. Comes with a digital scan at full resolution and the original shipped to you.",
    },
    {
        title: "Digital Illustration",
        open: false,
        price: "$60–$200",
        turnaround: "1–3 weeks",
        desc: "Fully rendered digital artwork delivered at print resolution (300dpi). Pricing scales with complexity — bust, half-body, or full scene. Multiple revisions included.",
    },
    {
        title: "Textile / Embroidery Piece",
        open: true,
        price: "$50–$150",
        turnaround: "3–5 weeks",
        desc: "Hand-stitched embroidery on fabric of your choice. Great for patches, framed art, or wearables. Design complexity and size determine pricing. Each piece is one of a kind.",
    },
    {
        title: "Mixed Media Canvas",
        open: false,
        price: "$200+",
        turnaround: "4–6 weeks",
        desc: "Large-format mixed media work combining acrylic, ink, collage, and found materials. Prices vary heavily by size and complexity. Contact me with your vision and I'll give a quote.",
    },
    {
        title: "Mini Watercolor (4×6)",
        open: true,
        price: "$35",
        turnaround: "3–5 days",
        desc: "A small, loose watercolor study — perfect for gifts or something affordable to hang. Quick turnaround. Subject can be almost anything: object, landscape, character, pet.",
    },
];

// ── Render cards ──
const grid = document.getElementById('commissionsGrid');

commissions.forEach((c, i) => {
    const card = document.createElement('div');
    card.className = `commission-card${c.open ? '' : ' closed-card'}`;
    card.style.animationDelay = `${i * 80}ms`;

    card.innerHTML = `
        <span class="status-badge ${c.open ? 'open' : 'closed'}">
            <span class="status-dot"></span>
            ${c.open ? 'Open' : 'Closed'}
        </span>
        <h2 class="card-title">${c.title}</h2>
        <p class="card-desc">${c.desc}</p>
        <div class="card-meta">
            <div class="meta-item">
                <span class="meta-label">Starting at</span>
                <span class="meta-value">${c.price}</span>
            </div>
            <div class="meta-item">
                <span class="meta-label">Turnaround</span>
                <span class="meta-value">${c.turnaround}</span>
            </div>
        </div>
    `;

    grid.appendChild(card);
});

// ── Contact button ──
document.getElementById('contactBtn').addEventListener('click', function() {
    if (this.classList.contains('copied')) return;
    navigator.clipboard.writeText('sample@email.com').then(() => {
        this.classList.add('copied');
        setTimeout(() => this.classList.remove('copied'), 2800);
    });
});
