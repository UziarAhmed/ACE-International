app_js_replacement = '''  // ==========================================================================
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
'''

with open('js/app.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

import re
old_section_regex = r'(  // ==========================================================================\n  // 3\. PRODUCT COVERAGE.*?)(  // ==========================================================================\n  // ACETERNITY UI: LOGO CLOUD)'

if re.search(old_section_regex, js_content, re.DOTALL):
    js_content = re.sub(old_section_regex, app_js_replacement + '\n  \\2', js_content, count=1, flags=re.DOTALL)
    with open('js/app.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    print("Updated js/app.js successfully!")
else:
    print("Regex did not match in js/app.js")
