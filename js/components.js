function injectNavbar(activePage, base) {
  base = (base !== undefined) ? base : '../';
  var nav = `
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="${base}index.html" class="nav-logo" style="gap:0">
        <img src="${base}images/NGWS-Logo.png" alt="NextGen Workforce Solutions" style="height:72px;width:auto;display:block;max-width:220px;object-fit:contain;">
      </a>
      <div class="nav-links">
        <a href="${base}index.html" ${activePage==='home'?'class="active"':''}>Home</a>
        <div class="nav-dropdown">
          <a href="${base}pages/workforce-solutions.html" ${activePage==='workforce'?'class="active"':''}>Workforce ▾</a>
          <div class="nav-dropdown-menu">
            <a href="${base}pages/workforce-solutions.html">Workforce Solutions</a>
            <a href="${base}pages/disciplinary-hearings.html">Disciplinary Hearings</a>
            <a href="${base}pages/ccma-representation.html">CCMA Representation</a>
          </div>
        </div>
        <div class="nav-dropdown">
          <a href="${base}pages/hr-services.html" ${activePage==='hr'?'class="active"':''}>HR Services ▾</a>
          <div class="nav-dropdown-menu">
            <a href="${base}pages/hr-services.html">HR Services</a>
            <a href="${base}pages/payroll.html">Payroll</a>
            <a href="${base}pages/employment-equity.html">Employment Equity</a>
            <a href="${base}pages/background-checks.html">Background Checks</a>
            <a href="${base}pages/digital-hr-system.html">Digital HR System</a>
            <a href="${base}pages/compliance-risk.html">Compliance &amp; Risk</a>
            <a href="${base}pages/business-support.html">Business Support</a>
          </div>
        </div>
        <div class="nav-dropdown">
          <a href="${base}pages/labour-law.html" ${activePage==='labour'?'class="active"':''}>Labour Law ▾</a>
          <div class="nav-dropdown-menu">
            <a href="${base}pages/labour-law.html">Labour Law Overview</a>
            <a href="${base}pages/disciplinary-hearings.html">Disciplinary Hearings</a>
            <a href="${base}pages/ccma-representation.html">CCMA Representation</a>
          </div>
        </div>
        <a href="${base}pages/polygraph-testing.html" ${activePage==='poly'?'class="active"':''}>Polygraph</a>
        <a href="${base}pages/resources.html" ${activePage==='resources'?'class="active"':''}>Resources</a>
        <a href="${base}pages/about.html" ${activePage==='about'?'class="active"':''}>About</a>
      </div>
      <div class="nav-actions">
        <a href="tel:0834064003" class="nav-phone">📞 083 406 4003</a>
        <a href="${base}pages/contact.html" class="btn btn-primary btn-sm">Get Protected</a>
      </div>
      <button class="hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="mobile-menu">
    <a href="${base}index.html" class="mobile-direct">🏠 Home</a>

    <div class="mobile-nav-group">
      <div class="mobile-nav-group-title">⚖️ Workforce <span class="mobile-nav-arrow">▾</span></div>
      <div class="mobile-nav-submenu">
        <a href="${base}pages/workforce-solutions.html">Workforce Solutions</a>
        <a href="${base}pages/disciplinary-hearings.html">Disciplinary Hearings</a>
        <a href="${base}pages/ccma-representation.html">CCMA Representation</a>
      </div>
    </div>

    <div class="mobile-nav-group">
      <div class="mobile-nav-group-title">👥 HR Services <span class="mobile-nav-arrow">▾</span></div>
      <div class="mobile-nav-submenu">
        <a href="${base}pages/hr-services.html">HR Services</a>
        <a href="${base}pages/payroll.html">Payroll</a>
        <a href="${base}pages/employment-equity.html">Employment Equity</a>
        <a href="${base}pages/background-checks.html">Background Checks</a>
        <a href="${base}pages/digital-hr-system.html">Digital HR System</a>
        <a href="${base}pages/compliance-risk.html">Compliance &amp; Risk</a>
        <a href="${base}pages/business-support.html">Business Support</a>
      </div>
    </div>

    <div class="mobile-nav-group">
      <div class="mobile-nav-group-title">📋 Labour Law <span class="mobile-nav-arrow">▾</span></div>
      <div class="mobile-nav-submenu">
        <a href="${base}pages/labour-law.html">Labour Law Overview</a>
        <a href="${base}pages/disciplinary-hearings.html">Disciplinary Hearings</a>
        <a href="${base}pages/ccma-representation.html">CCMA Representation</a>
      </div>
    </div>

    <a href="${base}pages/polygraph-testing.html" class="mobile-direct">🔍 Polygraph Testing</a>
    <a href="${base}pages/resources.html" class="mobile-direct">📰 Resources</a>
    <a href="${base}pages/about.html" class="mobile-direct">ℹ️ About Us</a>
    <a href="${base}pages/contact.html" class="btn btn-primary" style="margin-top:8px;justify-content:center">Get Protected Today</a>
  </div>`;
  document.body.insertAdjacentHTML('afterbegin', nav);
}

function injectFooter(base) {
  base = (base !== undefined) ? base : '../';
  var footer = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="${base}index.html" style="display:inline-block;margin-bottom:16px;">
            <img src="${base}images/NGWS-Logo.png" alt="NextGen Workforce Solutions" style="height:64px;width:auto;display:block;filter:brightness(0) invert(1);">
          </a>
          <p>Expert HR consulting, labour law compliance, and polygraph testing for South African businesses. We protect your business so you can focus on growth.</p>
          <div class="footer-social">
            <a href="https://www.youtube.com/@NextGenWF" target="_blank" rel="noopener" title="YouTube">▶</a>
            <a href="https://www.facebook.com/NextGenWorkforceSolutions/" target="_blank" rel="noopener" title="Facebook">f</a>
            <a href="https://www.instagram.com/nextgenworkforcesolutions/" target="_blank" rel="noopener" title="Instagram">📷</a>
            <a href="https://www.linkedin.com/company/nextgenworkforcesolutions/" target="_blank" rel="noopener" title="LinkedIn">in</a>
          </div>
          <div class="footer-affiliations">
            <div class="affiliation-badge"><strong>AHI</strong><span>Proud Member</span></div>
            <div class="affiliation-badge"><strong>PEAI</strong><span>Proud Member</span></div>
          </div>
        </div>
        <div>
          <h4>Services</h4>
          <div class="footer-links">
            <a href="${base}pages/workforce-solutions.html">Workforce Solutions</a>
            <a href="${base}pages/hr-services.html">HR Services</a>
            <a href="${base}pages/labour-law.html">Labour Law</a>
            <a href="${base}pages/disciplinary-hearings.html">Disciplinary Hearings</a>
            <a href="${base}pages/ccma-representation.html">CCMA Representation</a>
            <a href="${base}pages/polygraph-testing.html">Polygraph Testing</a>
            <a href="${base}pages/employment-equity.html">Employment Equity</a>
            <a href="${base}pages/compliance-risk.html">Compliance & Risk</a>
          </div>
        </div>
        <div>
          <h4>More</h4>
          <div class="footer-links">
            <a href="${base}pages/background-checks.html">Background Checks</a>
            <a href="${base}pages/digital-hr-system.html">Digital HR System</a>
            <a href="${base}pages/payroll.html">Payroll</a>
            <a href="${base}pages/business-support.html">Business Support</a>
            <a href="${base}pages/resources.html">Resources</a>
            <a href="${base}pages/about.html">About Us</a>
            <a href="${base}pages/contact.html">Contact</a>
            <a href="${base}pages/free-hr-audit.html">Free HR Audit</a>
          </div>
        </div>
        <div>
          <h4>Contact Us</h4>
          <div class="footer-contact">
            <div class="footer-contact-item"><span>📍</span><span>Hesketh Dr, Moreleta Park<br>Pretoria, 0001</span></div>
            <div class="footer-contact-item"><span>📞</span><span><a href="tel:0834064003">083 406 4003</a></span></div>
            <div class="footer-contact-item"><span>✉️</span><span><a href="mailto:info@ngws.co.za">info@ngws.co.za</a><br><a href="mailto:admin@ngws.co.za">admin@ngws.co.za</a></span></div>
            <div class="footer-contact-item"><span>🕐</span><span>Mon–Thu: 08:00 – 17:00<br>Fri: 08:00 – 14:00<br>24hr response</span></div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 NextGen Workforce Solutions. All rights reserved. Registered in South Africa.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="${base}pages/admin.html">Admin</a>
        </div>
      </div>
    </div>
  </footer>
  <a href="https://wa.me/27834064003?text=Hi%20NGWS%2C%20I%27d%20like%20to%20find%20out%20more%20about%20your%20services." class="whatsapp-btn" target="_blank" rel="noopener" title="Chat on WhatsApp">💬</a>
  <div class="popup-overlay">
    <div class="popup-box">
      <button class="popup-close" aria-label="Close">✕</button>
      <div class="popup-icon">📋</div>
      <h3>Free Download: Labour Law Compliance Checklist</h3>
      <p>Know exactly where your business stands. Used by hundreds of South African business owners.</p>
      <form id="popup-form">
        <div class="form-group"><label>First Name</label><input type="text" placeholder="Your name" required></div>
        <div class="form-group"><label>Email Address</label><input type="email" placeholder="your@email.com" required></div>
        <button type="submit" class="btn btn-primary" style="width:100%;margin-top:4px">Download Free Checklist</button>
      </form>
    </div>
  </div>`;
  document.body.insertAdjacentHTML('beforeend', footer);
}

function initPage(activePage, base) {
  injectNavbar(activePage, base);
  injectFooter(base);
}
