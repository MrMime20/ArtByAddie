// ── Ripple ──
const canvas = document.getElementById('rippleCanvas');
const ctx    = canvas.getContext('2d', { alpha: false });

let width, height, size;
let buf1, buf2, texture;

let resScale       = 1.0;
const RES_BASE     = 1000;
const DAMP_BASE    = 0.975;
const FPS_SAMPLES  = 90;
const FPS_TARGET   = 30;
const FPS_STEP_DOWN= 0.85;
const FPS_STEP_UP  = 1.08;
const CHECK_EVERY  = 45;
let   fpsBuf       = [];
let   lastT        = performance.now();
let   framesSince  = 0;
let   isOff        = false;

// Back-buffer canvas for smooth cross-fade on res change
const canvasB = document.createElement('canvas');
canvasB.style.cssText = 'position:absolute;top:0;left:0;width:100vw;height:100vh;filter:contrast(1.2) brightness(0.8);opacity:0;transition:opacity 0.8s ease;pointer-events:none;';
canvas.parentNode.insertBefore(canvasB, canvas);
const ctxB = canvasB.getContext('2d', { alpha: false });

// ── Loading screen ──
const loader = document.getElementById('loader');

const img = new Image();
img.crossOrigin = 'Anonymous';
// Cover image for the interactive ripple background on the home page
img.src = './Icarus.webp';

img.onload = () => {
    rebuild();
    // Brief pause so the logo is visible, then fade out loader and start ripple
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.add('page-loaded');
        setTimeout(() => {
            loader.style.display = 'none';
            run();
        }, 800);
    }, 600);
};

img.onerror = () => {
    // Image missing — still dismiss loader gracefully
    loader.classList.add('hidden');
    document.body.classList.add('page-loaded');
    setTimeout(() => { loader.style.display = 'none'; }, 800);
};

function rebuild() {
    const mob     = window.innerWidth < 600;
    const base    = mob ? 500 : RES_BASE;
    const winH    = (window.innerHeight && window.innerHeight > 0) ? window.innerHeight : 1;
    const winW    = (window.innerWidth && window.innerWidth > 0) ? window.innerWidth : 1;
    const ratio   = winW / winH;
    const clamped = Math.max(0.2, Math.min(1.0, resScale));

    width  = Math.max(1, Math.floor(base * clamped));
    height = Math.max(1, Math.floor(width / (ratio || 1)));
    if (!Number.isFinite(height) || height < 1) height = 1;
    size   = width * height;

    canvas.width  = canvasB.width  = width;
    canvas.height = canvasB.height = height;

    buf1 = new Float32Array(size);
    buf2 = new Float32Array(size);

    const tmp = document.createElement('canvas');
    tmp.width = width; tmp.height = height;
    const tc  = tmp.getContext('2d');
    const ir  = (img.width && img.height) ? (img.width / img.height) : 1;
    let dw, dh, ox, oy;
    if (ir > ratio) { dh=height; dw=height*ir; ox=(width-dw)/2; oy=0; }
    else            { dw=width;  dh=width/ir;  ox=0; oy=(height-dh)/2; }
    tc.fillStyle = '#000'; tc.fillRect(0, 0, width, height);
    tc.drawImage(img, ox, oy, dw, dh);
    try {
        texture = tc.getImageData(0, 0, Math.floor(width), Math.floor(height)).data;
    } catch(e) {
        texture = new Uint8ClampedArray(size * 4);
    }
}

function adaptFPS(fps) {
    if (isOff) return;
    if (fps < FPS_TARGET - 4) {
        const next = resScale * FPS_STEP_DOWN;
        if (next < 0.22) {
            isOff = true;
            const toast = document.getElementById('lagNotification');
            if (toast) { toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),4000); }
            return;
        }
        crossFadeTo(next);
    } else if (fps > FPS_TARGET + 8 && resScale < 1.0) {
        crossFadeTo(Math.min(1.0, resScale * FPS_STEP_UP));
    }
}

function crossFadeTo(nextScale) {
    if (Math.abs(nextScale - resScale) < 0.01) return;
    ctxB.drawImage(canvas, 0, 0);
    canvasB.style.opacity = '1';
    resScale = nextScale;
    rebuild();
    canvas.style.transition = 'opacity 0.8s ease';
    canvas.style.opacity    = '0';
    requestAnimationFrame(() => requestAnimationFrame(() => {
        canvas.style.opacity = '1';
        setTimeout(() => { canvasB.style.opacity = '0'; }, 820);
    }));
}

function stamp(x, y, r, strength) {
    if (isOff) return;
    const mob = window.innerWidth < 600 ? 2.2 : 1;
    const sr  = Math.floor(r * mob);
    const mx  = Math.floor((x / window.innerWidth)  * width);
    const my  = Math.floor((y / window.innerHeight) * height);
    const r2  = sr * sr;
    for (let j=-sr; j<=sr; j++) for (let i=-sr; i<=sr; i++) {
        if (i*i+j*j > r2) continue;
        const idx = (my+j)*width+(mx+i);
        if (idx>0 && idx<size) buf1[idx] += strength;
    }
}

window.addEventListener('mousemove', e => stamp(e.clientX, e.clientY, 4, 14));
window.addEventListener('mousedown', e => stamp(e.clientX, e.clientY, 7, 900));
window.addEventListener('touchmove',  e=>{const t=e.touches[0];stamp(t.clientX,t.clientY,5,18);},{passive:true});
window.addEventListener('touchstart', e=>{const t=e.touches[0];stamp(t.clientX,t.clientY,8,700);},{passive:true});

function run() {
    if (isOff) return;

    const now=performance.now(), delta=now-lastT; lastT=now;
    fpsBuf.push(1000/delta);
    if (fpsBuf.length>FPS_SAMPLES) fpsBuf.shift();
    if (++framesSince>=CHECK_EVERY) {
        framesSince=0;
        adaptFPS(fpsBuf.reduce((a,b)=>a+b,0)/fpsBuf.length);
    }

    for (let i=width; i<size-width; i++) {
        buf2[i] = ((buf1[i-1]+buf1[i+1]+buf1[i-width]+buf1[i+width])*0.5) - buf2[i];
        buf2[i] *= DAMP_BASE;
    }

    if (!width || !height || width < 1 || height < 1 || !texture) return;
    const w = Math.floor(width);
    const h = Math.floor(height);
    let frame;
    try {
        frame = ctx.getImageData(0, 0, w, h);
    } catch(e) {
        return;
    }
    const px = frame.data, tlen = texture.length - 4;
    for (let i=0; i<size; i++) {
        const xo=~~((buf2[i-1]-buf2[i+1])*1.5), yo=~~((buf2[i-width]-buf2[i+width])*1.5);
        let ti=((i+xo+yo*width)*4);
        if (ti<0) ti=0; else if (ti>tlen) ti=tlen;
        const pi=i*4;
        px[pi]=texture[ti]; px[pi+1]=texture[ti+1]; px[pi+2]=texture[ti+2]; px[pi+3]=255;
    }
    [buf1,buf2]=[buf2,buf1];
    ctx.putImageData(frame,0,0);
    requestAnimationFrame(run);
}

document.getElementById('exploreBtn').addEventListener('click', () => {
    document.body.classList.add('transition-active');
    setTimeout(() => { window.location.href = 'portfolio.html'; }, 800);
});

document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('javascript:')) return;
    
    link.addEventListener('click', e => {
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        if (href === currentPath) return;

        e.preventDefault();
        document.body.classList.add('transition-active');
        
        setTimeout(() => {
            window.location.href = href;
        }, 600);
    });
});

window.addEventListener('resize', () => { if (!isOff) rebuild(); });
