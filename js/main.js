// ─── NAVBAR SCROLL ───
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 60);
});

// ─── HAMBURGER MENU ───
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

function closeMobileMenu() {
  mobileMenu?.classList.remove('open');
  const spans = hamburger?.querySelectorAll('span');
  if (spans) {
    if (spans[0]) spans[0].style.transform = '';
    if (spans[1]) spans[1].style.opacity = '1';
    if (spans[2]) spans[2].style.transform = '';
  }
  // Also close all accordion groups
  document.querySelectorAll('.mobile-nav-group.open').forEach(g => g.classList.remove('open'));
}

hamburger?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  const isOpen = mobileMenu?.classList.contains('open');
  if (spans[0]) spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
  if (spans[1]) spans[1].style.opacity = isOpen ? '0' : '1';
  if (spans[2]) spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
});

// Close mobile menu when a link is tapped
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// Close mobile menu when tapping outside
document.addEventListener('click', (e) => {
  if (mobileMenu?.classList.contains('open') &&
      !mobileMenu.contains(e.target) &&
      !hamburger?.contains(e.target)) {
    closeMobileMenu();
  }
});

// Mobile accordion submenus
document.querySelectorAll('.mobile-nav-group-title').forEach(title => {
  title.addEventListener('click', (e) => {
    e.stopPropagation();
    const group = title.closest('.mobile-nav-group');
    const isOpen = group.classList.contains('open');
    // Close all other groups
    document.querySelectorAll('.mobile-nav-group.open').forEach(g => {
      if (g !== group) g.classList.remove('open');
    });
    // Toggle this one
    group.classList.toggle('open', !isOpen);
  });
});

// ─── FADE UP ANIMATIONS ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ─── STAT COUNTERS ───
function animateCounter(el) {
  const target = parseInt(el.dataset.target || el.textContent);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 1800;
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = prefix + Math.floor(ease * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.stat-number').forEach(animateCounter);
      statObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stats-bar, .stats-grid').forEach(el => statObserver.observe(el));

// ─── FAQ ACCORDION ───
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-answer')?.classList.remove('open');
    });
    if (!isOpen) { item.classList.add('open'); answer?.classList.add('open'); }
  });
});

// ─── POPUP ───
let popupShown = sessionStorage.getItem('popup_shown');
const popup = document.querySelector('.popup-overlay');
const popupClose = document.querySelector('.popup-close');

function showPopup() {
  if (!popupShown && popup && !window.location.pathname.includes('admin')) {
    popup.classList.add('show');
    sessionStorage.setItem('popup_shown', 'true');
    popupShown = true;
  }
}

setTimeout(showPopup, 30000);

document.addEventListener('mouseleave', (e) => {
  if (e.clientY <= 0) showPopup();
});

popupClose?.addEventListener('click', () => popup?.classList.remove('show'));
popup?.addEventListener('click', (e) => { if (e.target === popup) popup.classList.remove('show'); });

// ─── POPUP FORM ───
document.querySelector('#popup-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const box = document.querySelector('.popup-box');
  if (box) box.innerHTML = `
    <div style="text-align:center;padding:20px 0">
      <div style="font-size:3rem;margin-bottom:16px">✅</div>
      <h3 style="color:var(--navy);margin-bottom:8px">You're all set!</h3>
      <p>Your compliance checklist is ready. We'll also be in touch shortly.</p>
      <a href="javascript:void(0)" onclick="document.querySelector('.popup-overlay').classList.remove('show')" class="btn btn-primary mt-24">Close</a>
    </div>`;
});

// ─── CONTACT FORM ───
document.querySelector('#contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  const original = btn.textContent;
  btn.textContent = 'Sending...'; btn.disabled = true;
  setTimeout(() => {
    e.target.innerHTML = `<div class="text-center" style="padding:40px 0">
      <div style="font-size:3rem;margin-bottom:16px">✅</div>
      <h3 style="color:var(--navy);margin-bottom:8px">Message Received!</h3>
      <p>Thank you for reaching out. We'll respond within 24 hours.</p>
    </div>`;
  }, 1200);
});

// ─── QUOTE FORM ───
document.querySelector('#quote-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  btn.textContent = 'Submitting...'; btn.disabled = true;
  setTimeout(() => {
    e.target.innerHTML = `<div class="text-center" style="padding:40px 0">
      <div style="font-size:3rem;margin-bottom:16px">✅</div>
      <h3 style="color:var(--navy);margin-bottom:8px">Quote Request Received!</h3>
      <p>One of our consultants will contact you within 24 hours to discuss your specific needs.</p>
    </div>`;
  }, 1200);
});

// ─── MULTI-STEP AUDIT FORM ───
let currentStep = 1;
const totalSteps = 10;
const auditAnswers = {};

function updateProgress() {
  const fill = document.querySelector('.progress-fill');
  const counter = document.querySelector('.step-counter');
  if (fill) fill.style.width = ((currentStep - 1) / totalSteps * 100) + '%';
  if (counter) counter.textContent = `Step ${currentStep} of ${totalSteps}`;
}

function goToStep(n) {
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  const target = document.querySelector(`.step[data-step="${n}"]`);
  if (target) target.classList.add('active');
  currentStep = n;
  updateProgress();
}

document.querySelectorAll('.option-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const step = btn.closest('.step');
    step.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    const stepNum = parseInt(step.dataset.step);
    auditAnswers[stepNum] = btn.textContent.trim();
    if (stepNum < totalSteps) {
      setTimeout(() => goToStep(stepNum + 1), 320);
    }
  });
});

document.querySelectorAll('.next-step').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep < totalSteps) goToStep(currentStep + 1);
  });
});

document.querySelectorAll('.prev-step').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep > 1) goToStep(currentStep - 1);
  });
});

document.querySelector('#audit-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const noAnswers = Object.values(auditAnswers).filter(a =>
    a.includes('No') || a.includes('Only some') || a.includes('Not sure')
  ).length;
  let risk = 'Low'; let riskClass = 'risk-low'; let riskEmoji = '🟢';
  if (noAnswers >= 3 && noAnswers < 6) { risk = 'Medium'; riskClass = 'risk-medium'; riskEmoji = '🟡'; }
  if (noAnswers >= 6) { risk = 'High'; riskClass = 'risk-high'; riskEmoji = '🔴'; }

  document.querySelector('.multistep-form').style.display = 'none';
  const result = document.querySelector('.risk-result');
  if (result) {
    result.innerHTML = `
      <div style="font-size:3rem;margin-bottom:20px">${riskEmoji}</div>
      <div class="risk-meter ${riskClass}">${risk} Exposure</div>
      <h2 style="color:var(--navy);margin-bottom:12px">Your Compliance Report Is Ready</h2>
      <p style="max-width:520px;margin:0 auto 32px">Based on your answers, your business shows <strong>${noAnswers} area${noAnswers !== 1 ? 's' : ''}</strong> of potential legal exposure. One of our consultants will contact you within 24 hours with your full personalised report and recommendations.</p>
      <a href="contact.html" class="btn btn-primary btn-lg">Speak to a Consultant</a>
    `;
    result.classList.add('show');
  }
});

// ─── ADMIN ───
document.querySelector('#admin-login-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const u = document.querySelector('#admin-user')?.value;
  const p = document.querySelector('#admin-pass')?.value;
  if (u === 'admin' && p === 'ngws2025') {
    sessionStorage.setItem('admin_auth', 'true');
    window.location.href = 'admin-dashboard.html';
  } else {
    const err = document.querySelector('.login-error');
    if (err) { err.textContent = 'Incorrect username or password.'; err.style.display = 'block'; }
  }
});

function checkAuth() {
  if (window.location.pathname.includes('admin-dashboard') ||
      window.location.pathname.includes('admin-new-post')) {
    if (!sessionStorage.getItem('admin_auth')) {
      window.location.href = 'admin.html';
    }
  }
}
checkAuth();

document.querySelector('#logout-btn')?.addEventListener('click', () => {
  sessionStorage.removeItem('admin_auth');
  window.location.href = 'admin.html';
});

// ─── BLOG ADMIN - localStorage posts ───
function getPosts() {
  return JSON.parse(localStorage.getItem('ngws_posts') || '[]');
}
function savePosts(posts) {
  localStorage.setItem('ngws_posts', JSON.stringify(posts));
}

function renderAdminTable() {
  const tbody = document.querySelector('#posts-tbody');
  if (!tbody) return;
  const posts = getPosts();
  if (posts.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--text-light);padding:32px">No articles yet. Create your first one.</td></tr>';
    return;
  }
  tbody.innerHTML = posts.map((p, i) => `
    <tr>
      <td><strong>${p.title}</strong></td>
      <td><span style="font-family:'DM Mono',monospace;font-size:0.8rem;color:var(--text-light)">${p.category}</span></td>
      <td>${p.date}</td>
      <td><span class="status-badge status-${p.status}">${p.status}</span></td>
      <td>
        <button onclick="editPost(${i})" style="background:var(--bg-blue-light);color:var(--blue);border:none;padding:6px 12px;border-radius:6px;cursor:pointer;font-size:0.8rem;margin-right:6px">Edit</button>
        <button onclick="deletePost(${i})" style="background:#FEE2E2;color:#B91C1C;border:none;padding:6px 12px;border-radius:6px;cursor:pointer;font-size:0.8rem">Delete</button>
      </td>
    </tr>`).join('');
}

window.deletePost = function(i) {
  if (confirm('Delete this article?')) {
    const posts = getPosts(); posts.splice(i, 1); savePosts(posts); renderAdminTable();
  }
};
window.editPost = function(i) {
  sessionStorage.setItem('edit_post_index', i);
  window.location.href = 'admin-new-post.html';
};

renderAdminTable();

// ─── NEW POST FORM ───
const postForm = document.querySelector('#new-post-form');
if (postForm) {
  const editIndex = sessionStorage.getItem('edit_post_index');
  if (editIndex !== null) {
    const posts = getPosts();
    const post = posts[parseInt(editIndex)];
    if (post) {
      document.querySelector('#post-title').value = post.title || '';
      document.querySelector('#post-slug').value = post.slug || '';
      document.querySelector('#post-category').value = post.category || '';
      document.querySelector('#post-excerpt').value = post.excerpt || '';
      document.querySelector('#post-content').value = post.content || '';
      document.querySelector('#post-meta-title').value = post.metaTitle || '';
      document.querySelector('#post-meta-desc').value = post.metaDesc || '';
      document.querySelector('#post-keyword').value = post.keyword || '';
      document.querySelector('#post-canonical').value = post.canonical || '';
    }
  }

  document.querySelector('#post-title')?.addEventListener('input', (e) => {
    const slugField = document.querySelector('#post-slug');
    if (slugField && !slugField.dataset.manual) {
      slugField.value = e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    }
  });
  document.querySelector('#post-slug')?.addEventListener('input', function() { this.dataset.manual = 'true'; });

  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = e.submitter?.dataset.status || 'draft';
    const post = {
      title: document.querySelector('#post-title').value,
      slug: document.querySelector('#post-slug').value,
      category: document.querySelector('#post-category').value,
      excerpt: document.querySelector('#post-excerpt').value,
      content: document.querySelector('#post-content').value,
      metaTitle: document.querySelector('#post-meta-title').value,
      metaDesc: document.querySelector('#post-meta-desc').value,
      keyword: document.querySelector('#post-keyword').value,
      canonical: document.querySelector('#post-canonical').value,
      status,
      date: new Date().toLocaleDateString('en-ZA', { day:'numeric', month:'short', year:'numeric' })
    };
    const posts = getPosts();
    const editIdx = sessionStorage.getItem('edit_post_index');
    if (editIdx !== null) { posts[parseInt(editIdx)] = post; sessionStorage.removeItem('edit_post_index'); }
    else { posts.unshift(post); }
    savePosts(posts);
    window.location.href = 'admin-dashboard.html';
  });
}

// ─── RESOURCES PAGE - render posts ───
function renderResources() {
  const grid = document.querySelector('#resources-grid');
  if (!grid) return;
  const posts = getPosts().filter(p => p.status === 'published');
  const staticArticles = [
    { title: 'Can an Employee Refuse a Polygraph Test in South Africa?', slug: 'can-employee-refuse-polygraph-test-south-africa', category: 'Polygraph', excerpt: 'Find out whether employees can legally refuse polygraph testing in South Africa and what it means for your disciplinary process.', date: '15 Jan 2025' },
    { title: 'The CCMA Process Explained: A Guide for South African Employers', slug: 'ccma-process-explained-employer-guide', category: 'CCMA', excerpt: 'A plain-language guide to the CCMA process for South African employers — from referral to arbitration award.', date: '22 Feb 2025' },
    { title: 'How to Run a Legally Compliant Disciplinary Hearing', slug: 'disciplinary-hearing-procedure-south-africa', category: 'Labour Law', excerpt: 'Learn the correct legal procedure for running a disciplinary hearing in South Africa and avoid costly CCMA claims.', date: '8 Mar 2025' },
    { title: 'South African Labour Law Compliance Checklist for Business Owners', slug: 'labour-law-compliance-checklist-south-africa', category: 'Compliance', excerpt: 'A practical checklist for South African business owners to identify legal gaps and reduce risk.', date: '1 Apr 2025' },
    { title: 'What Is Employment Equity and Does Your Business Need to Comply?', slug: 'employment-equity-south-africa-guide', category: 'Employment Equity', excerpt: 'Find out whether your business must comply with the Employment Equity Act and what the penalties are for non-compliance.', date: '20 Apr 2025' },
  ];
  const all = [...posts, ...staticArticles];
  if (all.length === 0) {
    grid.innerHTML = '<p style="text-align:center;color:var(--text-light)">No articles published yet.</p>';
    return;
  }
  const imgs = [
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80',
  ];
  grid.innerHTML = all.map((p, i) => `
    <div class="resource-card fade-up">
      <div class="resource-card-img">
        <img src="${p.img || imgs[i % imgs.length]}" alt="${p.title}" loading="lazy">
        <span class="resource-category">${p.category}</span>
      </div>
      <div class="resource-card-body">
        <p class="resource-date">${p.date}</p>
        <h3>${p.title}</h3>
        <p class="resource-excerpt">${p.excerpt}</p>
        <a href="article.html?slug=${p.slug}" class="service-link">Read Article →</a>
      </div>
    </div>`).join('');

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}
renderResources();

// ─── RESOURCE FILTER ───
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    document.querySelectorAll('.resource-card').forEach(card => {
      const cardCat = card.querySelector('.resource-category')?.textContent || '';
      card.style.display = (cat === 'All' || cardCat === cat) ? '' : 'none';
    });
  });
});

// ─── LOAD MARKDOWN POSTS FROM /posts/ ───
async function loadMarkdownPosts() {
  const grid = document.querySelector('#resources-grid');
  if (!grid) return;

  // Try to fetch the posts index (generated by Netlify CMS)
  try {
    const res = await fetch('/posts/index.json');
    if (res.ok) {
      const posts = await res.json();
      renderMarkdownPosts(posts, grid);
      return;
    }
  } catch(e) {}

  // Fallback: render static articles only (already done in renderResources())
}

function renderMarkdownPosts(posts, grid) {
  if (!posts || posts.length === 0) return;
  const imgs = [
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80',
  ];
  const newCards = posts.map((p, i) => `
    <div class="resource-card fade-up">
      <div class="resource-card-img">
        <img src="${p.thumbnail || imgs[i % imgs.length]}" alt="${p.title}" loading="lazy">
        <span class="resource-category">${p.category}</span>
      </div>
      <div class="resource-card-body">
        <p class="resource-date">${new Date(p.date).toLocaleDateString('en-ZA', {day:'numeric',month:'short',year:'numeric'})}</p>
        <h3>${p.title}</h3>
        <p class="resource-excerpt">${p.excerpt}</p>
        <a href="/posts/${p.slug}.html" class="service-link">Read Article →</a>
      </div>
    </div>`).join('');
  grid.innerHTML = newCards + grid.innerHTML;
}
