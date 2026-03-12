/*  CURSOR  */
    const cur = document.getElementById('cursor');
    const trail = document.getElementById('cursor-trail');
    let mx = 0, my = 0, tx = 0, ty = 0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cur.style.left = mx + 'px'; cur.style.top = my + 'px';
    });
    function animCursor() {
      tx += (mx - tx) * 0.12; ty += (my - ty) * 0.12;
      trail.style.left = tx + 'px'; trail.style.top = ty + 'px';
      requestAnimationFrame(animCursor);
    }
    animCursor();
    document.querySelectorAll('button,a,.service-card,.portfolio-card').forEach(el => {
      el.addEventListener('mouseenter', () => { cur.style.transform = 'translate(-50%,-50%) scale(2)'; trail.style.width = '50px'; trail.style.height = '50px'; trail.style.borderColor = 'rgba(0,255,255,0.6)' });
      el.addEventListener('mouseleave', () => { cur.style.transform = 'translate(-50%,-50%) scale(1)'; trail.style.width = '32px'; trail.style.height = '32px'; trail.style.borderColor = 'rgba(0,255,255,0.4)' });
    });

    /*  NAV SCROLL  */
    window.addEventListener('scroll', () => {
      document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 60);
    });

    /*  STRIP  */
    const stripItems = ['Custom Website Development', 'Mobile App Development', 'UI/UX Design', 'E-commerce Solutions', 'Web Applications', 'API Integration', 'CMS Development', 'Responsive Design', 'Website Redesign', 'Maintenance & Support'];
    const track = document.getElementById('stripTrack');
    [...stripItems, ...stripItems].forEach(t => {
      const s = document.createElement('div');
      s.className = 'strip-item';
      s.innerHTML = `<span class="dot"></span>${t}`;
      track.appendChild(s);
    });

    /*  SERVICES DATA  */
    const services = [
      { num: '01', icon: '&#127760;', title: 'Custom Website Development', desc: 'Tailor-made websites engineered for performance, accessibility, and a lasting digital impression unique to your brand.' },
      { num: '02', icon: '&#128208;', title: 'Responsive Web Design', desc: 'Pixel-perfect layouts that adapt flawlessly across every device - from widescreen monitors to the smallest phone screen.' },
      { num: '03', icon: '&#128722;', title: 'E-commerce Development', desc: 'High-converting online stores built to scale, with seamless checkout flows, secure payments, and inventory tools.' },
      { num: '04', icon: '&#9881;', title: 'Web Application Development', desc: 'Complex, data-driven web apps architected for speed, scalability, and maintainability using modern frameworks.' },
      { num: '05', icon: '&#10022;', title: 'UI/UX Design', desc: 'Research-backed interfaces that balance stunning aesthetics with deep usability - turning complexity into clarity.' },
      { num: '06', icon: '&#128221;', title: 'CMS Development', desc: 'Headless or traditional CMS setups giving your team full content control without developer bottlenecks.' },
      { num: '07', icon: '&#128260;', title: 'Website Redesign', desc: 'Transform outdated digital experiences into modern, high-performance platforms that reflect where your brand is headed.' },
      { num: '08', icon: '&#128737;', title: 'Maintenance & Support', desc: 'Proactive monitoring, security patching, and feature updates keeping your product fast, secure, and competitive.' },
      { num: '09', icon: '&#128279;', title: 'API Integration', desc: 'Connect your product to any service - payment gateways, CRMs, AI APIs, analytics platforms, and beyond.' },
      { num: '10', icon: '&#128241;', title: 'Mobile App Development', desc: 'Cross-platform iOS and Android applications with native performance, built to extend your digital reach.' },
    ];
    const sGrid = document.getElementById('servicesGrid');
    services.forEach((s, i) => {
      const d = document.createElement('div');
      d.className = 'svc-item';
      d.style.transitionDelay = `${i * 0.04}s`;
      d.innerHTML = `
    <div class="svc-num">${s.num}</div>
    <div class="svc-body">
      <div class="svc-name">${s.title}</div>
      <div class="svc-desc">${s.desc}</div>
    </div>
    <div class="svc-icon">${s.icon}</div>
    <div class="svc-arrow-wrap">&#8594;</div>
  `;
      sGrid.appendChild(d);
    });

    /*  WHY US  CUSTOM SVG ICONS  */
    const whyIcons = {
      stack: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wg1" x1="0" y1="0" x2="60" y2="60"><stop stop-color="#00ffff"/><stop offset="1" stop-color="#7c3aed"/></linearGradient>
    </defs>
    <!-- Stack of layered rectangles (tech stack) -->
    <rect x="10" y="38" width="40" height="8" rx="2" fill="url(#wg1)" opacity="0.35"/>
    <rect x="10" y="38" width="40" height="8" rx="2" stroke="url(#wg1)" stroke-width="1.2"/>
    <rect x="13" y="28" width="34" height="8" rx="2" fill="url(#wg1)" opacity="0.55"/>
    <rect x="13" y="28" width="34" height="8" rx="2" stroke="url(#wg1)" stroke-width="1.2"/>
    <rect x="16" y="18" width="28" height="8" rx="2" fill="url(#wg1)" opacity="0.8"/>
    <rect x="16" y="18" width="28" height="8" rx="2" stroke="url(#wg1)" stroke-width="1.2"/>
    <!-- glow dot on top layer -->
    <circle cx="30" cy="22" r="2.5" fill="#00ffff"/>
    <circle cx="30" cy="22" r="5" fill="rgba(0,255,255,0.15)"/>
  </svg>`,

      scale: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wg2" x1="0" y1="0" x2="60" y2="60"><stop stop-color="#06b6d4"/><stop offset="1" stop-color="#a855f7"/></linearGradient>
    </defs>
    <!-- Expanding arrows / growth -->
    <circle cx="30" cy="30" r="10" stroke="url(#wg2)" stroke-width="1.5" stroke-dasharray="4 3"/>
    <circle cx="30" cy="30" r="18" stroke="url(#wg2)" stroke-width="1" opacity="0.4" stroke-dasharray="3 4"/>
    <!-- Up-right arrow -->
    <path d="M22 36 L36 22" stroke="url(#wg2)" stroke-width="2" stroke-linecap="round"/>
    <path d="M28 22 H36 V30" stroke="url(#wg2)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="36" cy="22" r="3" fill="url(#wg2)"/>
  </svg>`,

      design: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wg3" x1="0" y1="0" x2="60" y2="60"><stop stop-color="#e879f9"/><stop offset="0.5" stop-color="#7c3aed"/><stop offset="1" stop-color="#06b6d4"/></linearGradient>
    </defs>
    <!-- Pen nib / design tool -->
    <path d="M30 10 L46 26 L30 50 L14 26 Z" stroke="url(#wg3)" stroke-width="1.5" fill="rgba(232,121,249,0.08)"/>
    <path d="M14 26 L30 32 L46 26" stroke="url(#wg3)" stroke-width="1.2" opacity="0.6"/>
    <path d="M30 32 L30 50" stroke="url(#wg3)" stroke-width="1.5" opacity="0.7"/>
    <!-- sparkle -->
    <circle cx="30" cy="22" r="4" fill="url(#wg3)" opacity="0.9"/>
    <path d="M30 16 V14 M30 30 V28 M24 22 H22 M38 22 H36" stroke="url(#wg3)" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
  </svg>`,

      fast: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wg4" x1="0" y1="0" x2="60" y2="60"><stop stop-color="#fbbf24"/><stop offset="1" stop-color="#f97316"/></linearGradient>
    </defs>
    <!-- Lightning bolt -->
    <path d="M34 10 L18 32 H28 L24 50 L44 26 H33 Z" fill="url(#wg4)" opacity="0.85"/>
    <path d="M34 10 L18 32 H28 L24 50 L44 26 H33 Z" stroke="url(#wg4)" stroke-width="1" stroke-linejoin="round"/>
    <!-- speed lines -->
    <line x1="8" y1="22" x2="15" y2="22" stroke="url(#wg4)" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
    <line x1="6" y1="30" x2="14" y2="30" stroke="url(#wg4)" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/>
    <line x1="9" y1="38" x2="16" y2="38" stroke="url(#wg4)" stroke-width="1.5" stroke-linecap="round" opacity="0.2"/>
  </svg>`,

      secure: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wg5" x1="0" y1="0" x2="60" y2="60"><stop stop-color="#10b981"/><stop offset="1" stop-color="#06b6d4"/></linearGradient>
    </defs>
    <!-- Shield -->
    <path d="M30 8 L46 14 V28 C46 38 38 46 30 50 C22 46 14 38 14 28 V14 Z" fill="rgba(16,185,129,0.1)" stroke="url(#wg5)" stroke-width="1.5" stroke-linejoin="round"/>
    <!-- Check mark -->
    <path d="M22 30 L27 36 L38 24" stroke="url(#wg5)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- inner glow ring -->
    <path d="M30 14 L40 18 V27 C40 33.5 35.5 39 30 42 C24.5 39 20 33.5 20 27 V18 Z" stroke="url(#wg5)" stroke-width="0.8" opacity="0.3"/>
  </svg>`,

      support: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wg6" x1="0" y1="0" x2="60" y2="60"><stop stop-color="#818cf8"/><stop offset="1" stop-color="#e879f9"/></linearGradient>
    </defs>
    <!-- Circular arrows / refresh / long-term -->
    <path d="M30 12 A18 18 0 1 1 12 30" stroke="url(#wg6)" stroke-width="2" stroke-linecap="round" fill="none"/>
    <path d="M12 30 A18 18 0 0 1 30 12" stroke="url(#wg6)" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.35"/>
    <!-- arrow head -->
    <path d="M8 26 L12 30 L17 27" stroke="url(#wg6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- center heart-like dot = care -->
    <circle cx="30" cy="30" r="5" fill="url(#wg6)" opacity="0.9"/>
    <circle cx="30" cy="30" r="9" stroke="url(#wg6)" stroke-width="1" opacity="0.2"/>
  </svg>`,
    };

    const whys = [
      { icon: 'stack', title: 'Modern Technology Stack', desc: 'We build exclusively with battle-tested, future-proof technologies - no legacy frameworks, no technical debt surprises.' },
      { icon: 'scale', title: 'Scalable Architecture', desc: 'Every system we build is designed to grow with your business, from MVP to enterprise scale without costly rewrites.' },
      { icon: 'design', title: 'Creative Design Thinking', desc: 'We treat design as a strategic asset - every visual and interaction decision is informed by real user research and business goals.' },
      { icon: 'fast', title: 'Fast Development Process', desc: 'Agile sprints and clear communication mean rapid iteration, predictable timelines, and zero surprises at launch.' },
      { icon: 'secure', title: 'Secure & Reliable Systems', desc: 'Security-first architecture with regular audits, encrypted data handling, and uptime monitoring built into every delivery.' },
      { icon: 'support', title: 'Long-term Technical Support', desc: "We don't disappear after launch. Ongoing partnerships ensure your product evolves with your users and market needs." },
    ];

    const wGrid = document.getElementById('whyGrid');
    whys.forEach((w, i) => {
      const d = document.createElement('div');
      d.className = 'why-card';
      d.style.transitionDelay = `${i * 0.08}s`;
      d.innerHTML = `
    <div class="why-icon-wrap">${whyIcons[w.icon]}</div>
    <h3>${w.title}</h3>
    <p>${w.desc}</p>
  `;
      wGrid.appendChild(d);
    });

    /*  TECH STACK  3D GRADIENT ICONS  */
    const techs = [
      { name: 'React', grad: ['#00d2ff', '#3a7bd5'], shape: 'atom' },
      { name: 'Next.js', grad: ['#ffffff', '#888888'], shape: 'triangle' },
      { name: 'Node.js', grad: ['#3ecf8e', '#1a9e6a'], shape: 'hexagon' },
      { name: 'Python', grad: ['#3776ab', '#ffd43b'], shape: 'snake' },
      { name: 'TypeScript', grad: ['#3178c6', '#4fc3f7'], shape: 'ts' },
      { name: 'MongoDB', grad: ['#10b981', '#065f46'], shape: 'leaf' },
      { name: 'AWS', grad: ['#ff9900', '#ffcc02'], shape: 'cloud' },
      { name: 'Docker', grad: ['#2496ed', '#0db7ed'], shape: 'whale' },
      { name: 'GraphQL', grad: ['#e535ab', '#ff6fd8'], shape: 'diamond' },
      { name: 'AI APIs', grad: ['#a855f7', '#06b6d4'], shape: 'brain' },
      { name: 'React Native', grad: ['#61dafb', '#282c34'], shape: 'mobile' },
      { name: 'Flutter', grad: ['#54c5f8', '#01579b'], shape: 'flutter' },
    ];

    function drawTechIcon(canvas, grad, shape) {
      const ctx = canvas.getContext('2d');
      const S = 56, cx = 28, cy = 28;
      ctx.clearRect(0, 0, S, S);

      // Gradient helper
      function mkGrad(x1 = 0, y1 = 0, x2 = S, y2 = S) {
        const g = ctx.createLinearGradient(x1, y1, x2, y2);
        g.addColorStop(0, grad[0]); g.addColorStop(1, grad[1]); return g;
      }
      function mkRadial(r = 22) {
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0, grad[0]); g.addColorStop(1, grad[1]); return g;
      }

      ctx.shadowColor = grad[0]; ctx.shadowBlur = 12;

      if (shape === 'atom') {
        // React atom: nucleus + 3 ellipses
        ctx.strokeStyle = mkGrad(); ctx.lineWidth = 2; ctx.fillStyle = 'rgba(0,0,0,0)';
        for (let i = 0; i < 3; i++) {
          ctx.save(); ctx.translate(cx, cy); ctx.rotate(i * Math.PI / 3);
          ctx.beginPath(); ctx.ellipse(0, 0, 20, 7, 0, 0, Math.PI * 2);
          ctx.strokeStyle = mkGrad(); ctx.stroke(); ctx.restore();
        }
        ctx.beginPath(); ctx.arc(cx, cy, 4, 0, Math.PI * 2);
        ctx.fillStyle = grad[0]; ctx.fill();
      }
      else if (shape === 'triangle') {
        // Next.js: sharp triangle
        ctx.beginPath(); ctx.moveTo(cx, 8); ctx.lineTo(44, 42); ctx.lineTo(12, 42); ctx.closePath();
        ctx.fillStyle = mkGrad(cx, 8, cx, 42); ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.lineWidth = 1; ctx.stroke();
      }
      else if (shape === 'hexagon') {
        // Node: hexagon
        ctx.beginPath();
        for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3 - Math.PI / 6; ctx.lineTo(cx + 20 * Math.cos(a), cy + 20 * Math.sin(a)) }
        ctx.closePath(); ctx.fillStyle = mkRadial(20); ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.2)'; ctx.lineWidth = 1.5; ctx.stroke();
        // inner N
        ctx.shadowBlur = 0; ctx.fillStyle = 'rgba(0,0,0,0.6)'; ctx.font = 'bold 16px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('N', cx, cy + 1);
      }
      else if (shape === 'snake') {
        // Python: two intertwined curves
        ctx.lineWidth = 3; ctx.lineCap = 'round';
        ctx.strokeStyle = grad[0]; ctx.beginPath(); ctx.moveTo(18, 12); ctx.bezierCurveTo(8, 22, 38, 32, 28, 44); ctx.stroke();
        ctx.strokeStyle = grad[1]; ctx.beginPath(); ctx.moveTo(38, 12); ctx.bezierCurveTo(48, 22, 18, 32, 28, 44); ctx.stroke();
        ctx.beginPath(); ctx.arc(18, 12, 4, 0, Math.PI * 2); ctx.fillStyle = grad[0]; ctx.fill();
        ctx.beginPath(); ctx.arc(38, 12, 4, 0, Math.PI * 2); ctx.fillStyle = grad[1]; ctx.fill();
      }
      else if (shape === 'ts') {
        // TypeScript: rounded rect + TS
        ctx.beginPath(); ctx.roundRect(8, 8, 40, 40, 6); ctx.fillStyle = mkRadial(24); ctx.fill();
        ctx.shadowBlur = 0; ctx.fillStyle = '#fff'; ctx.font = 'bold 15px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('TS', cx, cy + 1);
      }
      else if (shape === 'leaf') {
        // MongoDB: stacked discs
        for (let i = 0; i < 3; i++) {
          ctx.beginPath(); ctx.ellipse(cx, 16 + i * 12, 14, 5, 0, 0, Math.PI * 2);
          const a = i / 2; ctx.fillStyle = `rgba(16,185,129,${0.4 + a * 0.5})`; ctx.fill();
        }
        ctx.strokeStyle = grad[0]; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.ellipse(cx, 16, 14, 5, 0, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.ellipse(cx, 28, 14, 5, 0, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.ellipse(cx, 40, 14, 5, 0, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx - 14, 16); ctx.lineTo(cx - 14, 40); ctx.moveTo(cx + 14, 16); ctx.lineTo(cx + 14, 40);
        ctx.strokeStyle = grad[0]; ctx.lineWidth = 1.5; ctx.stroke();
      }
      else if (shape === 'cloud') {
        // AWS: cloud shape
        ctx.fillStyle = mkGrad(8, 20, 48, 36);
        ctx.beginPath(); ctx.arc(20, 30, 10, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(30, 26, 13, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(40, 30, 9, 0, Math.PI * 2); ctx.fill();
        ctx.fillRect(12, 30, 32, 8);
        ctx.shadowBlur = 0; ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.font = 'bold 8px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('AWS', cx, 34);
      }
      else if (shape === 'whale') {
        // Docker: simple whale silhouette via path
        ctx.fillStyle = mkGrad();
        ctx.beginPath(); ctx.ellipse(cx, 32, 18, 10, 0, 0, Math.PI * 2); ctx.fill();
        // containers on back
        for (let i = 0; i < 3; i++) {
          ctx.fillStyle = `rgba(255,255,255,${0.5 + i * 0.15})`;
          ctx.fillRect(14 + i * 10, 20, 8, 10);
        }
        ctx.fillStyle = mkGrad();
        ctx.beginPath(); ctx.moveTo(36, 28); ctx.quadraticCurveTo(48, 18, 44, 14); ctx.quadraticCurveTo(52, 12, 50, 22); ctx.quadraticCurveTo(46, 28, 38, 26); ctx.fill();
      }
      else if (shape === 'diamond') {
        // GraphQL: diamond with glow
        ctx.beginPath(); ctx.moveTo(cx, 8); ctx.lineTo(44, cx); ctx.lineTo(cx, 48); ctx.lineTo(12, cx); ctx.closePath();
        ctx.fillStyle = mkGrad(cx, 8, cx, 48); ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.lineWidth = 1.5; ctx.stroke();
        ctx.shadowBlur = 0; ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('GQL', cx, cy + 1);
      }
      else if (shape === 'brain') {
        // AI: stylized brain with nodes
        ctx.strokeStyle = mkGrad(); ctx.lineWidth = 2; ctx.lineCap = 'round';
        // Brain outline with beziers
        ctx.beginPath();
        ctx.moveTo(cx, 12); ctx.bezierCurveTo(40, 12, 46, 22, 44, 30);
        ctx.bezierCurveTo(48, 36, 44, 44, 36, 44);
        ctx.bezierCurveTo(32, 48, 24, 48, 20, 44);
        ctx.bezierCurveTo(12, 44, 8, 36, 12, 30);
        ctx.bezierCurveTo(10, 22, 16, 12, cx, 12);
        ctx.stroke();
        // Center line
        ctx.beginPath(); ctx.moveTo(cx, 14); ctx.lineTo(cx, 44); ctx.strokeStyle = 'rgba(255,255,255,0.2)'; ctx.lineWidth = 1; ctx.stroke();
        // Neural dots
        const pts = [[cx, cy - 6], [cx - 9, cy - 2], [cx + 9, cy - 2], [cx - 6, cy + 7], [cx + 6, cy + 7]];
        pts.forEach((p, i) => {
          ctx.beginPath(); ctx.arc(p[0], p[1], 3, 0, Math.PI * 2);
          ctx.fillStyle = i % 2 === 0 ? grad[0] : grad[1]; ctx.fill();
        });
        for (let i = 0; i < pts.length; i++) {
          for (let j = i + 1; j < pts.length; j++) {
            ctx.beginPath(); ctx.moveTo(pts[i][0], pts[i][1]); ctx.lineTo(pts[j][0], pts[j][1]);
            ctx.strokeStyle = 'rgba(168,85,247,0.35)'; ctx.lineWidth = 0.8; ctx.stroke();
          }
        }
      }
      else if (shape === 'mobile') {
        // React Native: phone + atom
        ctx.strokeStyle = mkGrad(); ctx.lineWidth = 2;
        ctx.beginPath(); ctx.roundRect(18, 8, 20, 38, 4); ctx.stroke();
        ctx.beginPath(); ctx.arc(cx, 27, 8, 0, Math.PI * 2); ctx.strokeStyle = grad[0]; ctx.lineWidth = 1.5; ctx.stroke();
        ctx.beginPath(); ctx.ellipse(cx, 27, 8, 3, 0, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.ellipse(cx, 27, 8, 3, Math.PI / 3, Math.PI / 3 + Math.PI * 2, false);
        ctx.save(); ctx.translate(cx, 27); ctx.rotate(Math.PI / 3); ctx.beginPath(); ctx.ellipse(0, 0, 8, 3, 0, 0, Math.PI * 2); ctx.strokeStyle = grad[1]; ctx.stroke(); ctx.restore();
      }
      else if (shape === 'flutter') {
        // Flutter: two overlapping diamonds
        function diamond(x, y, s, col) {
          ctx.beginPath(); ctx.moveTo(x, y - s); ctx.lineTo(x + s, y); ctx.lineTo(x, y + s); ctx.lineTo(x - s, y); ctx.closePath();
          ctx.fillStyle = col; ctx.fill();
        }
        diamond(cx, cy - 6, 14, grad[0]);
        diamond(cx, cy + 6, 14, grad[1]);
        ctx.globalAlpha = 0.6; diamond(cx, cy, 14, 'rgba(255,255,255,0.3)'); ctx.globalAlpha = 1;
      }
    }

    const tGrid = document.getElementById('techGrid');
    techs.forEach((t, i) => {
      const d = document.createElement('div');
      d.className = 'tech-item';
      d.style.setProperty('--tech-grad', `linear-gradient(135deg,${t.grad[0]}22,${t.grad[1]}22)`);
      d.style.transitionDelay = `${i * 0.05}s`;

      const wrap = document.createElement('div'); wrap.className = 'tech-icon-3d';
      const c = document.createElement('canvas'); c.width = 56; c.height = 56;
      wrap.appendChild(c);

      const nm = document.createElement('div'); nm.className = 'tech-name'; nm.textContent = t.name;
      d.appendChild(wrap); d.appendChild(nm);
      tGrid.appendChild(d);

      // Draw after appended
      requestAnimationFrame(() => drawTechIcon(c, t.grad, t.shape));

      // Hover animate
      d.addEventListener('mouseenter', () => {
        let angle = 0;
        d._hover = setInterval(() => {
          angle += 0.06;
          const ctx2 = c.getContext('2d');
          ctx2.clearRect(0, 0, 56, 56);
          ctx2.save(); ctx2.translate(28, 28); ctx2.rotate(angle * 0.3); ctx2.translate(-28, -28);
          drawTechIcon(c, t.grad, t.shape);
          ctx2.restore();
        }, 30);
      });
      d.addEventListener('mouseleave', () => {
        clearInterval(d._hover);
        drawTechIcon(c, t.grad, t.shape);
      });
    });

    /*  MORPHING GEOMETRIC CANVAS  */
    (function () {
      const canvas = document.getElementById('neuralCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const W = 560, H = 560;
      const cx = W / 2, cy = H / 2;
      let frame = 0;

      // Define 3D vertex sets for different shapes (normalized -1 to 1)
      function makeCube() {
        const v = [];
        for (let x = -1; x <= 1; x += 2)for (let y = -1; y <= 1; y += 2)for (let z = -1; z <= 1; z += 2)v.push([x, y, z]);
        const edges = [[0, 1], [0, 2], [0, 4], [1, 3], [1, 5], [2, 3], [2, 6], [3, 7], [4, 5], [4, 6], [5, 7], [6, 7]];
        return { verts: v, edges };
      }
      function makeOctahedron() {
        const v = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
        const edges = [[0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [1, 3], [1, 4], [1, 5], [2, 4], [2, 5], [3, 4], [3, 5]];
        return { verts: v, edges };
      }
      function makeIcosahedron() {
        const t = (1 + Math.sqrt(5)) / 2;
        const v = [
          [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
          [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
          [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]
        ].map(p => { const l = Math.sqrt(p[0] ** 2 + p[1] ** 2 + p[2] ** 2); return p.map(x => x / l) });
        const edges = [[0, 1], [0, 5], [0, 7], [0, 10], [0, 11], [1, 5], [1, 7], [1, 8], [1, 9], [2, 3], [2, 4], [2, 6], [2, 10], [2, 11], [3, 4], [3, 6], [3, 8], [3, 9], [4, 5], [4, 9], [4, 11], [5, 9], [5, 11], [6, 7], [6, 8], [6, 10], [7, 8], [7, 10], [8, 9], [10, 11]];
        return { verts: v, edges };
      }
      function makeDodecahedron() {
        const phi = (1 + Math.sqrt(5)) / 2;
        const a = 1 / phi, b = phi;
        const raw = [
          [1, 1, 1], [1, 1, -1], [1, -1, 1], [1, -1, -1],
          [-1, 1, 1], [-1, 1, -1], [-1, -1, 1], [-1, -1, -1],
          [0, a, b], [0, a, -b], [0, -a, b], [0, -a, -b],
          [a, b, 0], [a, -b, 0], [-a, b, 0], [-a, -b, 0],
          [b, 0, a], [b, 0, -a], [-b, 0, a], [-b, 0, -a]
        ];
        const v = raw.map(p => { const l = Math.sqrt(p[0] ** 2 + p[1] ** 2 + p[2] ** 2); return p.map(x => x / l) });
        // simplified edges
        const edges = [[0, 8], [0, 12], [0, 16], [1, 9], [1, 12], [1, 17], [2, 10], [2, 13], [2, 16], [3, 11], [3, 13], [3, 17], [4, 8], [4, 14], [4, 18], [5, 9], [5, 14], [5, 19], [6, 10], [6, 15], [6, 18], [7, 11], [7, 15], [7, 19], [8, 10], [9, 11], [12, 14], [13, 15], [16, 17], [18, 19], [0, 2], [1, 3], [4, 6], [5, 7]];
        return { verts: v, edges };
      }

      const shapes = [makeCube(), makeOctahedron(), makeIcosahedron(), makeDodecahedron()];
      let shapeIdx = 0;
      let nextIdx = 1;
      let morphT = 0; // 01 morphing progress
      let morphing = false;
      let holdTimer = 0;
      const HOLD_FRAMES = 160; // frames to hold each shape
      const MORPH_FRAMES = 80; // frames to morph

      // Pad vertex arrays to same length by duplicating
      function padVerts(a, b) {
        const longer = Math.max(a.length, b.length);
        const pa = [...a], pb = [...b];
        while (pa.length < longer) pa.push([...pa[pa.length - 1]]);
        while (pb.length < longer) pb.push([...pb[pb.length - 1]]);
        return [pa, pb];
      }
      function padEdges(a, b) {
        const longer = Math.max(a.length, b.length);
        const pa = [...a], pb = [...b];
        while (pa.length < longer) pa.push([...pa[pa.length - 1]]);
        while (pb.length < longer) pb.push([...pb[pb.length - 1]]);
        return [pa, pb];
      }

      // Rotation
      let rotX = 0, rotY = 0, rotZ = 0;
      const ROT_SPEED_X = 0.003, ROT_SPEED_Y = 0.005, ROT_SPEED_Z = 0.001;

      function rotatePoint(p, rx, ry, rz) {
        let [x, y, z] = p;
        // X axis
        let y2 = y * Math.cos(rx) - z * Math.sin(rx), z2 = y * Math.sin(rx) + z * Math.cos(rx);
        y = y2; z = z2;
        // Y axis
        let x2 = x * Math.cos(ry) + z * Math.sin(ry), z3 = -x * Math.sin(ry) + z * Math.cos(ry);
        x = x2; z = z3;
        // Z axis
        let x3 = x * Math.cos(rz) - y * Math.sin(rz), y3 = x * Math.sin(rz) + y * Math.cos(rz);
        return [x3, y3, z];
      }

      function project(p, scale = 130) {
        const fov = 4;
        const z = p[2] + fov;
        return [cx + p[0] * scale * fov / z, cy + p[1] * scale * fov / z, p[2]];
      }

      // Floating ambient particles
      const floaters = Array.from({ length: 35 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.25 + 0.05,
        col: Math.random() > 0.5 ? '0,255,255' : '124,58,237',
      }));

      // Data pulses on edges
      let pulses = [];
      setInterval(() => {
        const s = shapes[shapeIdx];
        if (s.edges.length > 0) {
          const e = s.edges[Math.floor(Math.random() * s.edges.length)];
          pulses.push({ a: e[0], b: e[1], t: 0, speed: 0.018 + Math.random() * 0.012, col: Math.random() > 0.5 ? '0,255,255' : '124,58,237' });
        }
      }, 350);

      function lerp(a, b, t) { return a + (b - a) * t }
      function easeInOut(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2 }

      function draw() {
        ctx.clearRect(0, 0, W, H);
        frame++;
        rotX += ROT_SPEED_X;
        rotY += ROT_SPEED_Y;
        rotZ += ROT_SPEED_Z;

        // Advance morph state
        if (!morphing) {
          holdTimer++;
          if (holdTimer > HOLD_FRAMES) { holdTimer = 0; morphing = true; morphT = 0; nextIdx = (shapeIdx + 1) % shapes.length }
        } else {
          morphT += 1 / MORPH_FRAMES;
          if (morphT >= 1) { morphT = 1; morphing = false; shapeIdx = nextIdx }
        }

        const et = easeInOut(Math.min(morphT, 1));
        const sA = shapes[shapeIdx];
        const sB = shapes[nextIdx];
        const [pA, pB] = padVerts(sA.verts, sB.verts);
        const [eA, eB] = padEdges(sA.edges, sB.edges);

        // Interpolated verts
        const verts = pA.map((v, i) => [
          lerp(v[0], pB[i][0], et),
          lerp(v[1], pB[i][1], et),
          lerp(v[2], pB[i][2], et),
        ]);
        // Rotate
        const rotVerts = verts.map(v => rotatePoint(v, rotX, rotY, rotZ));
        // Project
        const projVerts = rotVerts.map(v => project(v));

        // Sort edges by avg z for depth
        const edges = eA.map((e, i) => {
          const bEdge = eB[i];
          return [Math.round(lerp(e[0], bEdge[0], et)), Math.round(lerp(e[1], bEdge[1], et))];
        });

        // Background glow
        const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 260);
        bg.addColorStop(0, 'rgba(0,30,40,0.18)');
        bg.addColorStop(1, 'rgba(4,8,18,0)');
        ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

        // Floaters
        floaters.forEach(f => {
          f.x += f.vx; f.y += f.vy;
          if (f.x < 0 || f.x > W) f.vx *= -1;
          if (f.y < 0 || f.y > H) f.vy *= -1;
          ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${f.col},${f.alpha})`; ctx.fill();
        });

        // Edges
        edges.forEach((e, i) => {
          const a = projVerts[e[0]]; const b = projVerts[e[1]];
          if (!a || !b) return;
          // Depth-based alpha
          const avgZ = (a[2] + b[2]) / 2;
          const depthA = Math.max(0, Math.min(1, (avgZ + 1.2) / 2.4));
          const alpha = 0.15 + depthA * 0.45;
          const g = ctx.createLinearGradient(a[0], a[1], b[0], b[1]);
          const col = i % 3 === 0 ? '0,255,255' : i % 3 === 1 ? '124,58,237' : '14,165,233';
          g.addColorStop(0, `rgba(${col},0)`);
          g.addColorStop(0.5, `rgba(${col},${alpha})`);
          g.addColorStop(1, `rgba(${col},0)`);
          ctx.strokeStyle = g; ctx.lineWidth = 0.9;
          ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
        });

        // Data pulses
        pulses = pulses.filter(p => {
          p.t += p.speed; if (p.t > 1) return false;
          const aV = projVerts[p.a], bV = projVerts[p.b];
          if (!aV || !bV) return false;
          const px = lerp(aV[0], bV[0], p.t), py = lerp(aV[1], bV[1], p.t);
          ctx.beginPath(); ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.col},0.95)`; ctx.fill();
          ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.col},0.18)`; ctx.fill();
          return true;
        });

        // Vertices / nodes
        projVerts.forEach((v, i) => {
          if (i >= verts.length) return;
          const depth = (v[2] + 1.2) / 2.4;
          const alpha = 0.3 + depth * 0.7;
          const pulse = 0.65 + 0.35 * Math.sin(frame * 0.04 + i * 0.7);
          const r = (1.5 + depth * 2) * pulse;
          const col = i % 3 === 0 ? '0,255,255' : i % 3 === 1 ? '124,58,237' : '14,165,233';

          ctx.beginPath(); ctx.arc(v[0], v[1], r * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${col},${alpha * 0.12})`; ctx.fill();
          ctx.beginPath(); ctx.arc(v[0], v[1], r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${col},${alpha})`; ctx.fill();
        });

        // Central orb
        const orbPulse = 0.8 + 0.2 * Math.sin(frame * 0.03);
        const og = ctx.createRadialGradient(cx, cy, 0, cx, cy, 18 * orbPulse);
        og.addColorStop(0, 'rgba(0,255,255,0.9)');
        og.addColorStop(0.4, 'rgba(0,255,255,0.3)');
        og.addColorStop(1, 'rgba(0,255,255,0)');
        ctx.fillStyle = og; ctx.beginPath(); ctx.arc(cx, cy, 18 * orbPulse, 0, Math.PI * 2); ctx.fill();

        requestAnimationFrame(draw);
      }
      draw();
    })();

    /*  SCROLL REVEAL  */
    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in-view'); revealObs.unobserve(e.target) }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal,.service-card,.why-card,.process-item,.tech-item,.portfolio-card,.svc-item').forEach(el => revealObs.observe(el));

    /*  MOBILE NAV  */
    function toggleMobileNav() {
      const nav = document.querySelector('.nav-links');
      if (nav.style.display === 'flex') {
        nav.style.display = 'none';
        nav.style.cssText = '';
      } else {
        nav.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:100%;left:0;right:0;background:rgba(4,8,18,0.97);padding:1.5rem 2rem;border-bottom:1px solid rgba(0,255,255,0.1);gap:1.2rem;z-index:499;backdrop-filter:blur(20px)';
      }
    }

const CONTACT_API_URL = window.CONTACT_API_URL || 'https://contact.algofutrix.com/api/contact';
    const CAPTCHA_SITE_KEY = window.CAPTCHA_SITE_KEY || '';
    const captchaConfigured = Boolean(CAPTCHA_SITE_KEY && !CAPTCHA_SITE_KEY.startsWith('YOUR_'));
    const submitBtn = document.getElementById('contactSubmit');
    let captchaWidgetId = null;

    function renderCaptchaWidget() {
      const captchaHost = document.getElementById('contactCaptcha');
      if (!captchaHost || !captchaConfigured || !window.turnstile || captchaWidgetId !== null) return;
      captchaWidgetId = window.turnstile.render('#contactCaptcha', {
        sitekey: CAPTCHA_SITE_KEY,
        theme: 'dark'
      });
    }

    function getCaptchaToken() {
      if (!window.turnstile || captchaWidgetId === null) return '';
      return window.turnstile.getResponse(captchaWidgetId) || '';
    }

    (function bootCaptcha() {
      if (!captchaConfigured) return;
      const maxAttempts = 50;
      let attempts = 0;
      const tick = () => {
        renderCaptchaWidget();
        attempts += 1;
        if (captchaWidgetId === null && attempts < maxAttempts) {
          setTimeout(tick, 200);
        }
      };
      tick();
    })();

    async function handleContactSubmit() {
      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('emailAddress').value.trim();
      const service = document.getElementById('serviceInterested').value;
      const details = document.getElementById('projectDetails').value.trim();
      const captchaToken = getCaptchaToken();

      if (!email) {
        alert('Please enter your email address.');
        return;
      }
      if (!captchaConfigured) {
        alert('Captcha is not configured yet. Please set window.CAPTCHA_SITE_KEY in index.html.');
        return;
      }
      if (!captchaToken) {
        alert('Please complete the CAPTCHA verification.');
        return;
      }

      submitBtn.disabled = true;
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';

      try {
        const response = await fetch(CONTACT_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            firstName,
            lastName,
            service,
            details,
            captchaToken
          })
        });
        const result = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(result.error || 'Failed to submit form.');
        }

        alert('Thanks! Your message was submitted.');
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('emailAddress').value = '';
        document.getElementById('serviceInterested').value = '';
        document.getElementById('projectDetails').value = '';
        if (window.turnstile && captchaWidgetId !== null) {
          window.turnstile.reset(captchaWidgetId);
        }
      } catch (error) {
        console.error('Error saving contact submission:', error);
        alert('Submission failed. Please try again.');
        if (window.turnstile && captchaWidgetId !== null) {
          window.turnstile.reset(captchaWidgetId);
        }
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    }

    submitBtn.addEventListener('click', handleContactSubmit);
