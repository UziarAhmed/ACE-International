/**
 * ACE INTERNATIONAL - Main Application Script
 * Orchestrates category quick-spec modals, navigation interactions,
 * scroll styling, and component hooks.
 */

import { initRFQForm } from './rfq-form.js';
import { initBrochureDownload } from './brochure-generator.js';

// Category Data for Interactive Quick-Spec Modal - Populated from Official ACE Catalogues
const CATEGORY_DETAILS = {
  'tablet-press': {
    title: 'Rotary Tablet Press & Spares (ACE-II, ACE-III, ACE-IV)',
    subtitle: 'Single and double-sided square cGMP rotary presses up to 2,16,000 tablets/hr.',
    specs: [
      { label: 'ACE Models', value: 'ACE-II (Bolus 5, 8, 10 Stn), ACE-III (16, 20, 23 Stn), ACE-IV (Double Sided 27, 35, 45 Stn)' },
      { label: 'Compatible OEMs', value: 'Cadmach, Fette Compacting, Korsch, GEA Courtoy, Romaco, Sejong, Kilian, Bosch' },
      { label: 'Tooling Types', value: 'Euro "B", "D", "BB", "DB", TSM Standards & Fette Segment Dies' },
      { label: 'Key Spare Parts', value: 'Turret Segments, Upper/Lower Cams, Feed Frames, Scraper Blades, Pressure Rollers, Worm Gears' },
      { label: 'Material Grade', value: 'SS 316L Contact Parts, High-Hardness Tool Steel, Hard Chrome / TiN Plated' },
      { label: 'Output Capacity', value: '13,200 up to 2,16,000 Tablets / Hour depending on station count and tooling' }
    ]
  },
  'capsule-filling': {
    title: 'Capsule Filling Machines & Change Parts',
    subtitle: 'Automatic, semi-automatic, and 300-hole manual encapsulation systems.',
    specs: [
      { label: 'Machine Scope', value: 'Manual 300-Hole Fillers, Auto Capsule Loaders, Auto Liquid Capsule Fillers & Band Sealers' },
      { label: 'Change Parts OEM', value: 'ACG, Pam Pac, Bosch, Harro Höfliger, IMA, Capsugel, Sejong' },
      { label: 'Capsule Sizes', value: 'Size 000, 00, 0, 1, 2, 3, 4, 5 and DB (Double Blind)' },
      { label: 'Key Spare Parts', value: 'Tamping Pins, Dosing Discs, Segment Blocks, Capsule Alignment Bushings, Vacuum Sorting Heads' },
      { label: 'Line Accessories', value: 'De-Blistering Machines, Tablet/Capsule Dedusters, Inline Metal Detectors, Capsule Polishers' },
      { label: 'Material Grade', value: 'SS 316L Contact Parts, Medical Grade PEEK / Delrin, Hard Anodized Alloy' }
    ]
  },
  'rmg': {
    title: 'Rapid Mixer Granulator (HSMG / RMG)',
    subtitle: 'High-shear wet granulation from lab models to 1200L production scale.',
    specs: [
      { label: 'Vessel Capacities', value: 'Lab Models (5L, 10L) to Production Models (50L up to 1200 Liters)' },
      { label: 'Impeller Design', value: 'Unique 4-arm mixing impeller with blade angle pushing product radially outward' },
      { label: 'Chopper System', value: 'Dual-speed chopper blades engineered to break lumps and create uniform granules' },
      { label: 'Shaft Sealing', value: 'Air-purged dual mechanical seals for main impeller and chopper shafts' },
      { label: 'Discharge System', value: 'Electro-pneumatically operated flush fitting discharge plug with limit switches' },
      { label: 'Material Grade', value: 'All contact parts AISI 316 / 316L, non-contact AISI 304, cGMP compliant' }
    ]
  },
  'fbd': {
    title: 'Fluid Bed Dryer (FBD) & Fluidized Bed Coaters',
    subtitle: 'Batch drying and Wurster coating systems with pneumatic inflatable sealing.',
    specs: [
      { label: 'Batch Sizes', value: '30 kg to 500 kg batch capacity' },
      { label: 'Key Spare Parts', value: 'Dutch Weave Sieve Mesh, Inflatable Silicon Rubber Gaskets, Perforated Distribution Plates' },
      { label: 'Filtration & Bags', value: 'Washable FDA approved filter media, auto pneumatic shaking, anti-static carbon yarn' },
      { label: 'Air Handling', value: 'Micro & HEPA filtration, dynamic balanced blower, steam/electric heat exchangers' },
      { label: 'Safety Systems', value: 'Built-in explosion relief flaps, product bowl interlocking, auto temperature control' },
      { label: 'Material Grade', value: 'Contact parts AISI 316, Non-contact AISI 304' }
    ]
  },
  'blister': {
    title: 'Blister Packaging Machine Tooling & Spares',
    subtitle: 'Rotary & flat-bed blister form-fill-seal spare parts and recovery systems.',
    specs: [
      { label: 'Compatible OEMs', value: 'Elmach, Uhlmann, Romaco, Mediseal, IMA Blister Lines' },
      { label: 'Tooling Scope', value: 'Forming Dies, Sealing Rollers, Guide Plates, Cartridge Heaters, Cutting & Punching Tools' },
      { label: 'Packaging Types', value: 'PVC/PVDC/Alu, Alu-Alu Cold Forming, Tropical Blister packs' },
      { label: 'Recovery Units', value: 'Semi-Automatic De-blistering machines for non-destructive product reclamation' },
      { label: 'Tooling Steel', value: 'High Carbon High Chrome D2 / D3 with Non-Stick Teflon Coatings' }
    ]
  },
  'vibro': {
    title: 'Vibro Sifter & Size Reduction Screening',
    subtitle: 'Sanitary compact sieving and grading systems with lead-free bonded sieves.',
    specs: [
      { label: 'Available Sizes', value: '20", 30", 36", 48" Single Deck and Double Decker arrangements' },
      { label: 'Filter Mesh Range', value: '8 Mesh to 500 Mesh with ultrasonic deblinding options' },
      { label: 'Key Spare Parts', value: 'Silicon-moulded screens, quick-release clamp rings, vibro motor eccentric weights' },
      { label: 'Sanitary Design', value: 'Lead-free and silicone seal sieves, noiseless gyratory vibration, cGMP' },
      { label: 'Output Capacity', value: '200 to 500 kg/hr depending on product density and mesh specification' }
    ]
  },
  'tooling': {
    title: 'Die & Punch Compression Tooling (Since 1987)',
    subtitle: 'Three decades of tooling technology with advanced tool steels and PVD coatings.',
    specs: [
      { label: 'Tooling Types', value: 'EURO "B", "D", "BB", "DB", TSM Standards, Multi-Tip (Cup & Monoblock), Micro-Tip, 3D Tip' },
      { label: 'Tool Steels', value: 'O1, S7 (Shock-Resistant), D2, D3 (High Wear), 440C, S1 Tungsten, K340, PK5, N690 Cobalt' },
      { label: 'PVD / CVD Coatings', value: 'HCP+ (Hard Chrome), TiN (Golden), CrN+, CRX+ (Triple Layer), SPN+ (Anti-Stick), DLC' },
      { label: 'Anti-Stick Solutions', value: 'SPN+ and CRX+ coatings engineered specifically to eliminate formulation sticking & picking' },
      { label: 'Compatible Presses', value: 'Cadmach, Fette, Korsch, GEA Courtoy, Romaco, Sejong, PTK, CCS, IMA, Bosch' },
      { label: 'Inspection', value: 'Optical profilometry and CMM dimensional inspection certificate with each set' }
    ]
  },
  'spare-parts': {
    title: 'Custom Pharmaceutical Machine Components & Spares',
    subtitle: 'In-house CNC turned and milled replacement spares for all pharma processing lines.',
    specs: [
      { label: 'Component Scope', value: 'Drive Shafts, Bronze Worm Gears, Timing Pulleys, Bushings, Sanitary Clamps, Cam Tracks' },
      { label: 'Milling Spares', value: 'ACE-50 Multi Mill 8-piece knife/impact beaters and scraper blades (up to 2800 RPM)' },
      { label: 'Sanitary Elastomers', value: 'FDA Approved White Silicone, EPDM, Viton gaskets and inflatable seals' },
      { label: 'Manufacturing', value: 'Precision 5-axis CNC machining, Wire EDM, cylindrical grinding, reverse engineering from sample' },
      { label: 'Client Approvals', value: 'Essential Drugs Company Ltd, Kumudini Pharma, Biogen, One Pharma, Zenith Pharma' }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Sub-Modules
  initRFQForm();
  initBrochureDownload();

  // Sticky Header Scroll Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
    });

    // Close mobile drawer when link is clicked
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
      });
    });
  }

  // ==========================================================================
  // RFQ PRE-FILL & SMOOTH SCROLL HELPER
  // ==========================================================================
  function populateAndScrollToRFQ(partName) {
    const rfqSection = document.getElementById('rfq-section');
    const partInput = document.getElementById('requiredPart');
    if (partInput && partName) {
      partInput.value = partName;
      partInput.classList.add('highlight-pulse');
      setTimeout(() => partInput.classList.remove('highlight-pulse'), 1500);
    }
    if (rfqSection) {
      rfqSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (partInput) {
      setTimeout(() => partInput.focus(), 600);
    }
  }

  // ==========================================================================
  // 3. CATEGORIES CAROUSEL & QUICK-SPEC MODAL SYSTEM (#categories)
  // ==========================================================================
  const categoryModal = document.getElementById('categoryModal');
  const carouselTrack = document.getElementById('categoryCarouselTrack');
  const carouselWrapper = document.querySelector('.category-carousel-wrapper');
  const categoryCards = document.querySelectorAll('#categoryCarouselTrack .category-card');
  const carouselDots = document.querySelectorAll('#catCarouselDots .carousel-dot');
  const carouselCounter = document.getElementById('catCarouselCounter');
  const prevBtn = document.getElementById('catCarouselPrev');
  const nextBtn = document.getElementById('catCarouselNext');

  let activeIndex = 0;
  const totalCards = categoryCards.length;

  function isMobileView() {
    return window.innerWidth <= 868;
  }

  function updateCarouselPosition() {
    if (!carouselTrack || !isMobileView()) {
      if (carouselTrack) carouselTrack.style.transform = '';
      return;
    }

    const wrapperWidth = carouselWrapper ? carouselWrapper.clientWidth : window.innerWidth;
    const isSmallMobile = window.innerWidth <= 480;
    const cardActiveWidth = isSmallMobile ? Math.min(wrapperWidth - 110, 275) : 275;
    const cardCollapsedWidth = isSmallMobile ? 44 : 48;
    const gap = 8;

    // Calculate left offset to center the active card smoothly
    const activeCenter = (activeIndex * (cardCollapsedWidth + gap)) + (cardActiveWidth / 2);
    let targetOffset = (wrapperWidth / 2) - activeCenter;

    // Clamp offset so track doesn't slide past boundaries awkwardly
    const maxLeftOffset = 8;
    const totalTrackWidth = cardActiveWidth + ((totalCards - 1) * cardCollapsedWidth) + ((totalCards - 1) * gap);
    const minLeftOffset = wrapperWidth - totalTrackWidth - 8;

    if (targetOffset > maxLeftOffset) targetOffset = maxLeftOffset;
    if (totalTrackWidth > wrapperWidth && targetOffset < minLeftOffset) {
      targetOffset = minLeftOffset;
    }

    carouselTrack.style.transform = `translateX(${Math.round(targetOffset)}px)`;
  }

  function setActiveCategory(index, userInitiated = true) {
    if (index < 0) index = 0;
    if (index >= totalCards) index = totalCards - 1;

    activeIndex = index;

    // Update active class on cards
    categoryCards.forEach((card, idx) => {
      if (idx === activeIndex) {
        card.classList.add('active');
        card.setAttribute('aria-selected', 'true');
      } else {
        card.classList.remove('active');
        card.setAttribute('aria-selected', 'false');
      }
    });

    // Update dots
    carouselDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIndex);
    });

    // Update counter text (e.g. 01 / 08)
    if (carouselCounter) {
      carouselCounter.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(totalCards).padStart(2, '0')}`;
    }

    updateCarouselPosition();
  }

  // Card click & interaction routing
  categoryCards.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
      // If user clicked the Quick Specs button inside card
      if (e.target.closest('.category-quickspec-btn') || e.target.closest('.bg-card-quickspec-btn')) {
        e.stopPropagation();
        const key = card.getAttribute('data-category-key');
        const data = CATEGORY_DETAILS[key];
        if (data) showCategoryModal(data, key);
        return;
      }

      // If user clicked the RFQ link inside card
      if (e.target.closest('.category-rfq-btn') || e.target.closest('.bg-card-rfq-btn')) {
        const prefill = e.target.getAttribute('data-prefill') || card.getAttribute('data-category-key');
        populateAndScrollToRFQ(prefill);
        return;
      }

      if (isMobileView()) {
        if (activeIndex !== idx) {
          e.preventDefault();
          setActiveCategory(idx);
        } else {
          // If already active on mobile, clicking card opens the modal
          e.preventDefault();
          const key = card.getAttribute('data-category-key');
          const data = CATEGORY_DETAILS[key];
          if (data) showCategoryModal(data, key);
        }
      } else {
        // Desktop click: set as active card
        setActiveCategory(idx);
      }
    });

    // Keyboard navigation (Enter or Space)
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // Navigation Arrows
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const newIdx = (activeIndex - 1 + totalCards) % totalCards;
      setActiveCategory(newIdx);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const newIdx = (activeIndex + 1) % totalCards;
      setActiveCategory(newIdx);
    });
  }

  // Dot clicks
  carouselDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const targetIdx = parseInt(dot.getAttribute('data-index'), 10);
      if (!isNaN(targetIdx)) {
        setActiveCategory(targetIdx);
      }
    });
  });

  // Touch Swipe Gestures (Fluid touch support on mobile)
  if (carouselWrapper) {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;

    carouselWrapper.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
      }
    }, { passive: true });

    carouselWrapper.addEventListener('touchend', (e) => {
      if (e.changedTouches.length === 1) {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        const deltaTime = Date.now() - touchStartTime;

        if (Math.abs(deltaX) > 36 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2 && deltaTime < 500) {
          if (deltaX < 0) {
            const newIdx = Math.min(activeIndex + 1, totalCards - 1);
            setActiveCategory(newIdx);
          } else {
            const newIdx = Math.max(activeIndex - 1, 0);
            setActiveCategory(newIdx);
          }
        }
      }
    }, { passive: true });
  }

  // Modal display logic
  function showCategoryModal(data, key) {
    if (!categoryModal) return;

    const modalBody = categoryModal.querySelector('.modal-body');
    const modalTitle = categoryModal.querySelector('.modal-title');

    if (modalTitle) modalTitle.textContent = data.title;

    let specsHTML = `
      <p style="font-size: 0.9375rem; color: var(--text-muted); margin-bottom: 20px;">${data.subtitle}</p>
      <div style="border: 1px solid var(--border); border-radius: var(--radius-sm); overflow: hidden; margin-bottom: 24px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.845rem;">
          <tbody>
    `;

    data.specs.forEach((item, idx) => {
      const bg = idx % 2 === 0 ? '#f8fafc' : '#ffffff';
      specsHTML += `
        <tr style="background: ${bg}; border-bottom: 1px solid var(--border-light);">
          <td style="padding: 10px 14px; font-weight: 700; color: var(--navy); width: 34%;">${item.label}</td>
          <td style="padding: 10px 14px; color: var(--text-body);">${item.value}</td>
        </tr>
      `;
    });

    specsHTML += `
          </tbody>
        </table>
      </div>

      <div style="display: flex; gap: 12px; align-items: center;">
        <button class="btn btn-primary btn-block" id="inquireThisMachineBtn">
          Inquire for This Equipment &rarr;
        </button>
        <button class="btn btn-secondary" data-close-modal="true">
          Close
        </button>
      </div>
    `;

    if (modalBody) {
      modalBody.innerHTML = specsHTML;
      categoryModal.classList.add('active');

      const inquireBtn = modalBody.querySelector('#inquireThisMachineBtn');
      if (inquireBtn) {
        inquireBtn.addEventListener('click', () => {
          categoryModal.classList.remove('active');
          populateAndScrollToRFQ(data.title);
        });
      }

      modalBody.querySelectorAll('[data-close-modal]').forEach(b => {
        b.addEventListener('click', () => {
          categoryModal.classList.remove('active');
        });
      });
    }
  }

  // Close modals on overlay backdrop click or close button
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.closest('[data-close-modal]')) {
        modal.classList.remove('active');
      }
    });
  });

  // Carousel initial layout calculation
  setTimeout(() => {
    setActiveCategory(0, false);
  }, 100);

  // ==========================================================================
  // 5. PRODUCTS WE OFFER — GALLERY & PILL TAB FILTER (#coverage)
  // ==========================================================================
  const pcsTabBtns = document.querySelectorAll('.pcs-tab-btn');
  const pcsTabSlider = document.getElementById('pcsTabSlider');
  const productCards = document.querySelectorAll('.products-grid .pcard');
  const countIndicator = document.getElementById('coverageCountIndicator');
  const searchInput = document.getElementById('coverageSearchInput');

  let activeProductTab = 'machinery';
  let activeSearchQuery = '';

  function positionPcsTabSlider(activeBtn) {
    if (!pcsTabSlider || !activeBtn) return;
    pcsTabSlider.style.width = activeBtn.offsetWidth + 'px';
    pcsTabSlider.style.transform = `translateX(${activeBtn.offsetLeft - 5}px)`;
  }

  function filterProductCards() {
    let visibleCount = 0;
    const q = activeSearchQuery.toLowerCase().trim();

    productCards.forEach(card => {
      const cat = card.getAttribute('data-category');
      const searchData = card.getAttribute('data-search') || '';

      const matchesTab = (cat === activeProductTab);
      const matchesSearch = !q || searchData.includes(q);

      if (matchesTab && matchesSearch) {
        card.removeAttribute('hidden');
        visibleCount++;
      } else {
        card.setAttribute('hidden', '');
      }
    });

    if (countIndicator) {
      countIndicator.textContent = `Showing ${visibleCount} Product${visibleCount === 1 ? '' : 's'}`;
    }
  }

  function switchProductTab(targetTab) {
    activeProductTab = targetTab;
    pcsTabBtns.forEach(btn => {
      const isActive = btn.getAttribute('data-tab') === targetTab;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
      if (isActive) positionPcsTabSlider(btn);
    });
    filterProductCards();
  }

  pcsTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchProductTab(btn.getAttribute('data-tab'));
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeSearchQuery = e.target.value;
      filterProductCards();
    });
  }

  // Attach Quick Specs & RFQ buttons inside product cards
  productCards.forEach(card => {
    const specBtn = card.querySelector('.pcard-spec-btn');
    const rfqBtn = card.querySelector('.pcard-rfq-btn');

    if (specBtn) {
      specBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = specBtn.getAttribute('data-modal-key');
        const data = CATEGORY_DETAILS[key];
        if (data) showCategoryModal(data, key);
      });
    }

    if (rfqBtn) {
      rfqBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const prefill = rfqBtn.getAttribute('data-rfq-prefill');
        if (prefill) populateAndScrollToRFQ(prefill);
      });
    }
  });

  // Initialize gallery state and slider on load
  setTimeout(() => {
    const activeBtn = document.querySelector('.pcs-tab-btn.active');
    positionPcsTabSlider(activeBtn);
    filterProductCards();
  }, 100);

  // Resize listener for carousel & tab slider
  window.addEventListener('resize', () => {
    if (isMobileView()) {
      updateCarouselPosition();
    } else if (carouselTrack) {
      carouselTrack.style.transform = '';
    }
    const activeBtn = document.querySelector('.pcs-tab-btn.active');
    positionPcsTabSlider(activeBtn);
  });

    // ==========================================================================
  // ACETERNITY UI: LOGO CLOUD WITH SWAP ANIMATION (48 PARTNERS & OEMS)
  // ==========================================================================
  const CLIENT_LOGOS = [
  {
    "name": "Aarti Drugs Ltd",
    "category": "pharma",
    "desc": "Active Pharmaceutical Ingredients (API)",
    "src": "assets/images/clients/client-aarti-drugs.png"
  },
  {
    "name": "Aarti Industries Limited",
    "category": "pharma",
    "desc": "Global Specialty Chemical & Pharma",
    "src": "assets/images/clients/client-aarti-industries.png"
  },
  {
    "name": "Aastrid Life Sciences",
    "category": "pharma",
    "desc": "Custom Synthesis & Fine Chemicals",
    "src": "assets/images/clients/client-aastrid.png"
  },
  {
    "name": "Adani Wilmar Ltd",
    "category": "pharma",
    "desc": "Industrial Processing & Formulations",
    "src": "assets/images/clients/client-adani-wilmar.png"
  },
  {
    "name": "Aditya Birla Hindalco",
    "category": "pharma",
    "desc": "Diversified Multinational Conglomerate",
    "src": "assets/images/clients/client-aditya-birla.png"
  },
  {
    "name": "Alkem Laboratories",
    "category": "pharma",
    "desc": "Leading Indian Formulations & Generics",
    "src": "assets/images/clients/client-alkem.png"
  },
  {
    "name": "Aplab Limited",
    "category": "pharma",
    "desc": "Precision Testing & Power Control",
    "src": "assets/images/clients/client-aplab.png"
  },
  {
    "name": "Apple Field International",
    "category": "pharma",
    "desc": "International Healthcare & Export",
    "src": "assets/images/clients/client-apple-field.png"
  },
  {
    "name": "Calyx Pharma",
    "category": "pharma",
    "desc": "Bulk Active Ingredients & Formulations",
    "src": "assets/images/clients/client-calyx-pharma.png"
  },
  {
    "name": "CCIPL Pharma",
    "category": "pharma",
    "desc": "Coastal Chemicals & Active Ingredients",
    "src": "assets/images/clients/client-ccipl.png"
  },
  {
    "name": "Doshion Water & Resource",
    "category": "pharma",
    "desc": "Pharmaceutical Water & Process Systems",
    "src": "assets/images/clients/client-doshion.png"
  },
  {
    "name": "Eurotek Environmental",
    "category": "pharma",
    "desc": "Water Treatment & Sanitary Systems",
    "src": "assets/images/clients/client-eurotek.png"
  },
  {
    "name": "Fresenius Kabi",
    "category": "pharma",
    "desc": "Global Healthcare & Infusion Therapy",
    "src": "assets/images/clients/client-fresenius-kabi.png"
  },
  {
    "name": "Helios Pharmaceuticals",
    "category": "pharma",
    "desc": "Manufacturing Excellence Since 1985",
    "src": "assets/images/clients/client-helios.png"
  },
  {
    "name": "Jaysynth Group",
    "category": "pharma",
    "desc": "Specialty Pigments & Chemical Formulations",
    "src": "assets/images/clients/client-jaysynth.png"
  },
  {
    "name": "June Enterprises",
    "category": "pharma",
    "desc": "Pharmaceutical Cleanroom & Tooling",
    "src": "assets/images/clients/client-june.png"
  },
  {
    "name": "Kitten Enterprises",
    "category": "pharma",
    "desc": "ISO 9001 Certified Cleanroom Solutions",
    "src": "assets/images/clients/client-kitten.png"
  },
  {
    "name": "Laboratoires Griffon",
    "category": "pharma",
    "desc": "Formulations & Specialty Liquids",
    "src": "assets/images/clients/client-laboratoires-griffon.png"
  },
  {
    "name": "Lupin Limited",
    "category": "pharma",
    "desc": "Global Pharmaceutical Major (US FDA/cGMP)",
    "src": "assets/images/clients/client-lupin.png"
  },
  {
    "name": "Macleods Pharmaceuticals",
    "category": "pharma",
    "desc": "Global Top-Tier Formulations Leader",
    "src": "assets/images/clients/client-macleods.png"
  },
  {
    "name": "Manan Health Care Pvt Ltd",
    "category": "pharma",
    "desc": "Healthcare & Pharmaceutical Dosage",
    "src": "assets/images/clients/client-manan-healthcare.png"
  },
  {
    "name": "Mangalam Drugs & Organics",
    "category": "pharma",
    "desc": "Anti-Malarial & API Manufacturing",
    "src": "assets/images/clients/client-mangalam-drugs.png"
  },
  {
    "name": "National Technology Services",
    "category": "pharma",
    "desc": "Gland Packing & Sealing Solutions",
    "src": "assets/images/clients/client-national-tech-services.png"
  },
  {
    "name": "Naturex Natural Extracts",
    "category": "pharma",
    "desc": "Plant Extracts & Botanical Ingredients",
    "src": "assets/images/clients/client-naturex.png"
  },
  {
    "name": "Nitin Lifesciences Ltd",
    "category": "pharma",
    "desc": "Injectables & Sterile Manufacturing",
    "src": "assets/images/clients/client-nitin-lifesciences.png"
  },
  {
    "name": "NPCIL (Govt of India)",
    "category": "pharma",
    "desc": "Nuclear Power & High Reliability Components",
    "src": "assets/images/clients/client-npcil.png"
  },
  {
    "name": "Pall Corporation",
    "category": "pharma",
    "desc": "Filtration, Separation & Purification",
    "src": "assets/images/clients/client-pall.png"
  },
  {
    "name": "Parenteral Drugs India",
    "category": "pharma",
    "desc": "IV Fluids & Large Volume Parenterals",
    "src": "assets/images/clients/client-parenteral-drugs.png"
  },
  {
    "name": "Pioneer Asia Group",
    "category": "pharma",
    "desc": "Industrial Manufacturing & Formulations",
    "src": "assets/images/clients/client-pioneer-asia.png"
  },
  {
    "name": "Piramal Pharma Solutions",
    "category": "pharma",
    "desc": "Global CDMO & Pharmaceutical Leader",
    "src": "assets/images/clients/client-piramal.png"
  },
  {
    "name": "Pratiksha Filters Pvt Ltd",
    "category": "pharma",
    "desc": "Industrial & Pharma Filtration Systems",
    "src": "assets/images/clients/client-pratiksha-filters.png"
  },
  {
    "name": "Sarvani Food & Health",
    "category": "pharma",
    "desc": "Confectionery & Compression Formulations",
    "src": "assets/images/clients/client-sarvani-sweets.png"
  },
  {
    "name": "Sterling Biotech Limited",
    "category": "pharma",
    "desc": "Gelatin Capsules & Fermentation APIs",
    "src": "assets/images/clients/client-sterling-biotech.png"
  },
  {
    "name": "Trichem Laboratories",
    "category": "pharma",
    "desc": "Specialty Chemical & Drug Synthesis",
    "src": "assets/images/clients/client-trichem.png"
  },
  {
    "name": "Vedant Dyestuffs & Intermediates",
    "category": "pharma",
    "desc": "Intermediates & Chemical Synthesis",
    "src": "assets/images/clients/client-vedant-dyestuffs.png"
  },
  {
    "name": "Vidit Healthcare",
    "category": "pharma",
    "desc": "Healthcare & Formulations Manufacturing",
    "src": "assets/images/clients/client-vidit-healthcare.png"
  },
  {
    "name": "Vineengineer (Khandelwals)",
    "category": "pharma",
    "desc": "Precision Machining & Quality Spares",
    "src": "assets/images/clients/client-vineengineer.png"
  },
  {
    "name": "Bosch Packaging & Tooling",
    "category": "oem",
    "desc": "Invented for Life \u2022 Solid & Liquid Packaging",
    "src": "assets/images/clients/logo-bosch.png"
  },
  {
    "name": "Cadmach Machinery",
    "category": "oem",
    "desc": "Rotary Tablet Compression Machines",
    "src": "assets/images/clients/logo-cadmach.png"
  },
  {
    "name": "CCS Compression Systems",
    "category": "oem",
    "desc": "High Speed Compression Tooling",
    "src": "assets/images/clients/logo-ccs.png"
  },
  {
    "name": "Fette Compacting",
    "category": "oem",
    "desc": "Global Leader in Industrial Tablet Presses",
    "src": "assets/images/clients/logo-fette-compacting.png"
  },
  {
    "name": "GEA Courtoy",
    "category": "oem",
    "desc": "Courtoy Advanced Rotary Tablet Presses",
    "src": "assets/images/clients/logo-gea-courtoy.png"
  },
  {
    "name": "IMA Sustain Ability",
    "category": "oem",
    "desc": "Automated Processing & Packaging Machinery",
    "src": "assets/images/clients/logo-ima.png"
  },
  {
    "name": "Kilbeg (KBIS)",
    "category": "oem",
    "desc": "Pharmaceutical Processing & Tooling",
    "src": "assets/images/clients/logo-kbis-kilbeg.png"
  },
  {
    "name": "Korsch AG",
    "category": "oem",
    "desc": "Specialist in Tablet Press Technology",
    "src": "assets/images/clients/logo-korsch.png"
  },
  {
    "name": "PTK-GB Ltd",
    "category": "oem",
    "desc": "Encapsulation & Tablet Compression Systems",
    "src": "assets/images/clients/logo-ptk-gb.png"
  },
  {
    "name": "Romaco Group",
    "category": "oem",
    "desc": "Beyond Technology \u2022 Blister & Tablet Presses",
    "src": "assets/images/clients/logo-romaco.png"
  },
  {
    "name": "Sejong Pharmatech",
    "category": "oem",
    "desc": "Automatic Capsule Fillers & Presses",
    "src": "assets/images/clients/logo-sejong.png"
  }
];

  const logoCloudGrid = document.getElementById('logoCloudGrid');
  const logoCloudWrapper = document.getElementById('logoCloudWrapper');
  const logoCloudCounter = document.getElementById('logoCloudCounter');
  const logoCloudDots = document.getElementById('logoCloudDots');
  const logoSwapPrev = document.getElementById('logoSwapPrev');
  const logoSwapNext = document.getElementById('logoSwapNext');
  const logoFilterBtns = document.querySelectorAll('.logo-filter-btn');

  let activeFilter = 'all';
  let filteredLogos = [...CLIENT_LOGOS];
  let currentBatch = 0;
  let autoSwapTimer = null;
  let isSwapping = false;
  let isHovered = false;

  function getVisibleCount() {
    if (window.innerWidth >= 1024) return 10;
    if (window.innerWidth >= 768) return 8;
    return 6;
  }

  function getTotalBatches() {
    const visibleCount = getVisibleCount();
    return Math.ceil(filteredLogos.length / visibleCount) || 1;
  }

  function getBatchLogos(batchIdx) {
    const visibleCount = getVisibleCount();
    const totalBatches = getTotalBatches();
    const safeIdx = ((batchIdx % totalBatches) + totalBatches) % totalBatches;
    const start = safeIdx * visibleCount;
    const batch = [];
    for (let i = 0; i < visibleCount; i++) {
      const item = filteredLogos[(start + i) % filteredLogos.length];
      batch.push(item);
    }
    return batch;
  }

  function buildGrid() {
    if (!logoCloudGrid) return;
    const visibleCount = getVisibleCount();
    logoCloudGrid.innerHTML = '';
    const currentItems = getBatchLogos(currentBatch);

    for (let i = 0; i < visibleCount; i++) {
      const item = currentItems[i];
      if (!item) continue;
      const cell = document.createElement('div');
      cell.className = 'logo-swap-cell';
      cell.setAttribute('data-cell-index', i);
      cell.title = item.name + ' - ' + item.desc;

      const inner = document.createElement('div');
      inner.className = 'logo-swap-item active';

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.name + ' logo';
      img.className = 'logo-swap-img';
      img.loading = 'lazy';

      const tooltip = document.createElement('span');
      tooltip.className = 'logo-swap-tooltip';
      tooltip.textContent = item.name;

      inner.appendChild(img);
      inner.appendChild(tooltip);
      cell.appendChild(inner);

      // On click, prefill RFQ with company/OEM context
      cell.addEventListener('click', () => {
        populateAndScrollToRFQ('Parts & Tooling compatible with ' + item.name);
      });

      logoCloudGrid.appendChild(cell);
    }

    updateControlsUI();
  }

  function updateControlsUI() {
    const totalBatches = getTotalBatches();
    const visibleCount = getVisibleCount();

    // Update Counter
    if (logoCloudCounter) {
      const batchNumEl = logoCloudCounter.querySelector('.batch-num');
      const batchTotalEl = logoCloudCounter.querySelector('.batch-total');
      const batchDetailEl = logoCloudCounter.querySelector('.batch-detail');

      if (batchNumEl) batchNumEl.textContent = String(currentBatch + 1).padStart(2, '0');
      if (batchTotalEl) batchTotalEl.textContent = String(totalBatches).padStart(2, '0');
      if (batchDetailEl) {
        batchDetailEl.textContent = 'Showing ' + Math.min(visibleCount, filteredLogos.length) + ' of ' + filteredLogos.length + ' Partners';
      }
    }

    // Update Dots
    if (logoCloudDots) {
      logoCloudDots.innerHTML = '';
      for (let b = 0; b < totalBatches; b++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'logo-cloud-dot ' + (b === currentBatch ? 'active' : '');
        dot.setAttribute('aria-label', 'Go to batch ' + (b + 1));
        dot.addEventListener('click', () => {
          if (b !== currentBatch && !isSwapping) {
            swapToBatch(b, b > currentBatch ? 'next' : 'prev');
          }
        });
        logoCloudDots.appendChild(dot);
      }
    }
  }

  function swapToBatch(targetBatch, direction = 'next') {
    if (isSwapping || !logoCloudGrid) return;
    isSwapping = true;

    const totalBatches = getTotalBatches();
    currentBatch = ((targetBatch % totalBatches) + totalBatches) % totalBatches;
    const nextItems = getBatchLogos(currentBatch);
    const cells = logoCloudGrid.querySelectorAll('.logo-swap-cell');

    const exitClass = direction === 'next' ? 'exit-left' : 'exit-right';
    const enterClass = direction === 'next' ? 'enter-right' : 'enter-left';

    // Staggered wave animation across cells (Aceternity UI signature stagger)
    cells.forEach((cell, idx) => {
      const inner = cell.querySelector('.logo-swap-item');
      if (!inner) return;

      const staggerDelay = idx * 45; // 45ms per cell wave

      setTimeout(() => {
        inner.classList.remove('active', 'enter-right', 'enter-left');
        inner.classList.add(exitClass);

        // Once exited, replace content and slide in from opposite side
        setTimeout(() => {
          const newItem = nextItems[idx];
          if (newItem) {
            const img = inner.querySelector('.logo-swap-img');
            const tooltip = inner.querySelector('.logo-swap-tooltip');
            if (img) {
              img.src = newItem.src;
              img.alt = newItem.name + ' logo';
            }
            if (tooltip) {
              tooltip.textContent = newItem.name;
            }
            cell.title = newItem.name + ' - ' + newItem.desc;
          }

          inner.classList.remove(exitClass);
          inner.classList.add(enterClass);

          // Force reflow
          void inner.offsetWidth;

          // Transition to active
          inner.classList.remove(enterClass);
          inner.classList.add('active');

          if (idx === cells.length - 1) {
            setTimeout(() => {
              isSwapping = false;
            }, 300);
          }
        }, 220);
      }, staggerDelay);
    });

    updateControlsUI();
  }

  function startAutoSwap() {
    stopAutoSwap();
    autoSwapTimer = setInterval(() => {
      if (!isHovered && !isSwapping) {
        swapToBatch(currentBatch + 1, 'next');
      }
    }, 3600);
  }

  function stopAutoSwap() {
    if (autoSwapTimer) {
      clearInterval(autoSwapTimer);
      autoSwapTimer = null;
    }
  }

  if (logoCloudWrapper) {
    logoCloudWrapper.addEventListener('mouseenter', () => {
      isHovered = true;
    });
    logoCloudWrapper.addEventListener('mouseleave', () => {
      isHovered = false;
    });
  }

  if (logoSwapPrev) {
    logoSwapPrev.addEventListener('click', () => {
      if (!isSwapping) swapToBatch(currentBatch - 1, 'prev');
    });
  }

  if (logoSwapNext) {
    logoSwapNext.addEventListener('click', () => {
      if (!isSwapping) swapToBatch(currentBatch + 1, 'next');
    });
  }

  // Filter Buttons
  logoFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      logoFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');

      if (activeFilter === 'pharma') {
        filteredLogos = CLIENT_LOGOS.filter(l => l.category === 'pharma');
      } else if (activeFilter === 'oem') {
        filteredLogos = CLIENT_LOGOS.filter(l => l.category === 'oem');
      } else {
        filteredLogos = [...CLIENT_LOGOS];
      }

      currentBatch = 0;
      buildGrid();
    });
  });

  // Responsive re-grid on resize
  let logoResizeDebounce;
  window.addEventListener('resize', () => {
    clearTimeout(logoResizeDebounce);
    logoResizeDebounce = setTimeout(() => {
      buildGrid();
    }, 150);
  });

  // Initialize
  if (logoCloudGrid) {
    buildGrid();
    startAutoSwap();
  }


  // Global Keybindings (ESC to close modals)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal-overlay.active');
      if (activeModal) activeModal.classList.remove('active');
    }
  });
});
