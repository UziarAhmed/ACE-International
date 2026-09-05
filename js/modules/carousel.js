/**
 * ACE INTERNATIONAL - Product Categories Expanding Carousel
 * Implements an expanding background-image card carousel with smooth dynamic centering,
 * slide counter (e.g. 01 / 08), interactive dot indicators, keyboard arrow navigation,
 * and mouse drag & touch swipe gestures.
 */

export function initCategoryCarousel() {
  const carouselTrack = document.getElementById('categoryCarouselTrack');
  const carouselWrapper = document.querySelector('.category-carousel-wrapper');
  const categoryCards = document.querySelectorAll('#categoryCarouselTrack .category-card');
  const carouselDots = document.querySelectorAll('#catCarouselDots .carousel-dot');
  const carouselCounter = document.getElementById('catCarouselCounter');
  const prevBtn = document.getElementById('catCarouselPrev');
  const nextBtn = document.getElementById('catCarouselNext');

  if (!carouselTrack || categoryCards.length === 0) return;

  let activeIndex = 0;
  const totalCards = categoryCards.length;

  function isMobileView() {
    return window.innerWidth < 768;
  }

  function getCardDimensions() {
    const width = window.innerWidth;
    let activeW, collapsedW, gap;

    if (width >= 1200) {
      activeW = 520;
      collapsedW = 170;
      gap = 16;
    } else if (width >= 992) {
      activeW = 460;
      collapsedW = 140;
      gap = 16;
    } else if (width >= 768) {
      activeW = 380;
      collapsedW = 120;
      gap = 14;
    } else {
      activeW = width < 400 ? 275 : 295;
      collapsedW = 95;
      gap = 12;
    }

    return { activeW, collapsedW, gap };
  }

  function updateCarouselPosition() {
    if (!carouselWrapper || !carouselTrack) return;

    const wrapperWidth = carouselWrapper.offsetWidth;
    const { activeW, collapsedW, gap } = getCardDimensions();

    let targetCardOffset = 0;
    for (let i = 0; i < activeIndex; i++) {
      targetCardOffset += collapsedW + gap;
    }

    const cardCenter = targetCardOffset + (activeW / 2);
    let targetX = (wrapperWidth / 2) - cardCenter;

    const totalTrackWidth = activeW + ((totalCards - 1) * collapsedW) + ((totalCards - 1) * gap);
    const minX = wrapperWidth - totalTrackWidth - 24;
    const maxX = 16;

    if (totalTrackWidth <= wrapperWidth) {
      targetX = (wrapperWidth - totalTrackWidth) / 2;
    } else {
      targetX = Math.min(maxX, Math.max(minX, targetX));
    }

    carouselTrack.style.transform = `translateX(${Math.round(targetX)}px)`;
  }

  function setActiveCategory(index, userInitiated = true) {
    if (index < 0) index = 0;
    if (index >= totalCards) index = totalCards - 1;
    activeIndex = index;

    categoryCards.forEach((card, idx) => {
      const isActive = idx === activeIndex;
      card.classList.toggle('active', isActive);
      card.setAttribute('aria-expanded', isActive ? 'true' : 'false');
      card.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    if (carouselCounter) {
      const currentStr = String(activeIndex + 1).padStart(2, '0');
      const totalStr = String(totalCards).padStart(2, '0');
      carouselCounter.textContent = `${currentStr} / ${totalStr}`;
    }

    carouselDots.forEach((dot, idx) => {
      const isActive = idx === activeIndex;
      dot.classList.toggle('active', isActive);
      dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    updateCarouselPosition();
  }

  // Card click navigation
  categoryCards.forEach((card, index) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('button') || e.target.closest('a')) return;
      setActiveCategory(index);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setActiveCategory(index);
      }
    });
  });

  // Previous & Next navigation buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const newIdx = activeIndex === 0 ? totalCards - 1 : activeIndex - 1;
      setActiveCategory(newIdx);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const newIdx = activeIndex === totalCards - 1 ? 0 : activeIndex + 1;
      setActiveCategory(newIdx);
    });
  }

  // Dots navigation
  carouselDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const targetIndex = parseInt(dot.getAttribute('data-slide') || '0', 10);
      setActiveCategory(targetIndex);
    });
  });

  // Global arrow navigation when carousel area is focused
  if (carouselWrapper) {
    carouselWrapper.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const next = Math.min(activeIndex + 1, totalCards - 1);
        setActiveCategory(next);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = Math.max(activeIndex - 1, 0);
        setActiveCategory(prev);
      }
    });
  }

  // Touch Swipe & Mouse Drag Gestures
  let startX = 0;
  let isDragging = false;
  let startTime = 0;

  if (carouselTrack) {
    carouselTrack.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startTime = Date.now();
      isDragging = true;
    }, { passive: true });

    carouselTrack.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      isDragging = false;
      const endX = e.changedTouches[0].clientX;
      const diffX = endX - startX;
      const diffTime = Date.now() - startTime;

      if (Math.abs(diffX) > 40 && diffTime < 450) {
        if (diffX < 0) {
          const newIdx = Math.min(activeIndex + 1, totalCards - 1);
          setActiveCategory(newIdx);
        } else {
          const newIdx = Math.max(activeIndex - 1, 0);
          setActiveCategory(newIdx);
        }
      }
    }, { passive: true });

    carouselTrack.addEventListener('mousedown', (e) => {
      startX = e.clientX;
      startTime = Date.now();
      isDragging = true;
    });

    carouselTrack.addEventListener('mouseup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      const diffX = e.clientX - startX;
      const diffTime = Date.now() - startTime;

      if (Math.abs(diffX) > 50 && diffTime < 450) {
        if (diffX < 0) {
          const newIdx = Math.min(activeIndex + 1, totalCards - 1);
          setActiveCategory(newIdx);
        } else {
          const newIdx = Math.max(activeIndex - 1, 0);
          setActiveCategory(newIdx);
        }
      }
    });
  }

  // Debounced resize handler
  let resizeTimeout = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      requestAnimationFrame(() => updateCarouselPosition());
    }, 100);
  });

  // Initial layout calculation
  setTimeout(() => {
    setActiveCategory(0, false);
  }, 50);
}
