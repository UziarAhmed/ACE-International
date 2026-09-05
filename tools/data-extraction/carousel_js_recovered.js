  // ==========================================================================
  // CATEGORY CAROUSEL & QUICK-SPEC MODAL SYSTEM
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
      if (e.target.closest('.category-quickspec-btn')) {
        e.stopPropagation();
        const key = card.getAttribute('data-category-key');
        const data = CATEGORY_DETAILS[key];
        if (data) showCategoryModal(data, key);
        return;
      }

      // If user clicked the RFQ link inside card
      if (e.target.closest('.category-rfq-btn')) {
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
        // Desktop click: directly open modal
        e.preventDefault();
        const key = card.getAttribute('data-category-key');
        const data = CATEGORY_DETAILS[key];
        if (data) showCategoryModal(data, key);
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

        // Ensure it's a predominantly horizontal swipe
        if (Math.abs(deltaX) > 36 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2 && deltaTime < 500) {
          if (deltaX < 0) {
            // Swipe left -> Next equipment
            const newIdx = Math.min(activeIndex + 1, totalCards - 1);
            setActiveCategory(newIdx);
          } else {
            // Swipe right -> Previous equipment
            const newIdx = Math.max(activeIndex - 1, 0);
            setActiveCategory(newIdx);
          }
        }
      }
    }, { passive: true });
  }

  // Window Resize handling
  let resizeDebounce;
  window.addEventListener('resize', () => {
    clearTimeout(resizeDebounce);
    resizeDebounce = setTimeout(() => {
      if (isMobileView()) {
        updateCarouselPosition();
      } else if (carouselTrack) {
        carouselTrack.style.transform = '';
      }
    }, 120);
  });

  // Initial layout calculation
  setTimeout(() => {
    setActiveCategory(0, false);
  }, 100);

  // Modal display logic
  function showCategoryModal(data, key) {
    if (!categoryModal) return;

    const modalBody = categoryModal.querySelector('.modal-body');
    const modalTitle = categoryModal.querySelector('.modal-title');

    modalTitle.textContent = data.title;

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
          Inquire for This Equipment →
        </button>
        <button class="btn btn-secondary" data-close-modal="true">
          Close
        </button>
      </div>
    `;

    modalBody.innerHTML = specsHTML;
    categoryModal.classList.add('active');

    // Attach Inquire button action
    const inquireBtn = modalBody.querySelector('#inquireThisMachineBtn');
    if (inquireBtn) {
      inquireBtn.addEventListener('click', () => {
        categoryModal.classList.remove('active');
        populateAndScrollToRFQ(data.title);
      });
    }
  }