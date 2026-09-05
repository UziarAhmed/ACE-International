/**
 * ACE INTERNATIONAL - Product Coverage & Solutions Gallery Module (#coverage)
 * Handles interactive category pill tabs, animated tab slider,
 * live search filtering with debouncing, and dynamic equipment showcase preview.
 */

import { showCategoryModal } from './modal.js';

export function initCoverageSection() {
  const pcsTabBtns = document.querySelectorAll('.pcs-tab-btn');
  const pcsTabSlider = document.getElementById('pcsTabSlider');
  const productCards = document.querySelectorAll('.products-grid .pcard');
  const countIndicator = document.getElementById('coverageCountIndicator');
  const searchInput = document.getElementById('coverageSearchInput');

  if (pcsTabBtns.length === 0 && productCards.length === 0) return;

  let activeProductTab = 'machinery';
  let activeSearchQuery = '';

  function positionPcsTabSlider(activeBtn) {
    if (!pcsTabSlider || !activeBtn) return;
    pcsTabSlider.style.width = activeBtn.offsetWidth + 'px';
    pcsTabSlider.style.transform = `translateX(${activeBtn.offsetLeft - 5}px)`;
  }

  function filterProductCards() {
    let visibleCount = 0;

    productCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardSearchText = (card.getAttribute('data-search') || card.textContent).toLowerCase();

      const matchesTab = (activeProductTab === 'all') || (cardCategory === activeProductTab);
      const matchesSearch = !activeSearchQuery || cardSearchText.includes(activeSearchQuery);

      if (matchesTab && matchesSearch) {
        card.style.display = '';
        card.style.animation = 'fadeInCard 0.35s ease forwards';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (countIndicator) {
      countIndicator.textContent = `Showing ${visibleCount} Product${visibleCount === 1 ? '' : 's'}`;
    }
  }

  function switchProductTab(targetTab) {
    activeProductTab = targetTab;

    pcsTabBtns.forEach(btn => {
      const isCurrent = btn.getAttribute('data-tab') === targetTab;
      btn.classList.toggle('active', isCurrent);
      btn.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
      if (isCurrent) {
        positionPcsTabSlider(btn);
      }
    });

    filterProductCards();
  }

  pcsTabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = btn.getAttribute('data-tab');
      switchProductTab(targetTab);
    });
  });

  // Debounced search input
  let searchDebounce = null;
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchDebounce);
      searchDebounce = setTimeout(() => {
        activeSearchQuery = e.target.value.trim().toLowerCase();
        filterProductCards();
      }, 150);
    });
  }

  // Quick specs button delegation within coverage section
  document.querySelectorAll('.pcard-spec-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalKey = btn.getAttribute('data-modal-key');
      if (modalKey) {
        showCategoryModal(modalKey, btn);
      }
    });
  });

  // Initial slider setup
  const defaultActiveBtn = document.querySelector('.pcs-tab-btn.active') || pcsTabBtns[0];
  if (defaultActiveBtn) {
    setTimeout(() => {
      positionPcsTabSlider(defaultActiveBtn);
      filterProductCards();
    }, 100);
  }

  window.addEventListener('resize', () => {
    const currentActiveBtn = document.querySelector('.pcs-tab-btn.active');
    if (currentActiveBtn) {
      positionPcsTabSlider(currentActiveBtn);
    }
  });
}
