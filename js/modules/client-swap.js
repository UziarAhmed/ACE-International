/**
 * ACE INTERNATIONAL - Client Portfolio & OEM Logo Cloud (#clients)
 * Interactive partner showcase with smooth batch swapping, category filtering
 * (Pharmaceutical End-Users & Machinery OEMs), dot indicators, and pause-on-hover auto-rotation.
 */

import { CLIENT_LOGOS } from '../data/products.js';

export function initClientSwap() {
  const logoCloudGrid = document.getElementById('logoCloudGrid');
  const logoCloudWrapper = document.getElementById('logoCloudWrapper');
  const logoCloudCounter = document.getElementById('logoCloudCounter');
  const logoCloudDots = document.getElementById('logoCloudDots');
  const logoSwapPrev = document.getElementById('logoSwapPrev');
  const logoSwapNext = document.getElementById('logoSwapNext');
  const logoFilterBtns = document.querySelectorAll('.logo-filter-btn');

  if (!logoCloudGrid) return;

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

  function createLogoCardHTML(logo) {
    const isOEM = logo.category === 'oem';
    const badgeLabel = isOEM ? 'OEM Partner' : 'Pharmaceutical';
    const badgeClass = isOEM ? 'oem-badge' : 'pharma-badge';

    return `
      <div class="logo-swap-card" tabindex="0" role="group" aria-label="${logo.name} - ${logo.desc}">
        <div class="logo-swap-img-wrap">
          <img src="${logo.src}" alt="${logo.name} Logo" class="logo-swap-img" loading="lazy">
        </div>
        <div class="logo-swap-info">
          <span class="logo-swap-badge ${badgeClass}">${badgeLabel}</span>
          <div class="logo-swap-name">${logo.name}</div>
          <div class="logo-swap-desc">${logo.desc}</div>
        </div>
      </div>
    `;
  }

  function buildGrid() {
    const logos = getBatchLogos(currentBatch);
    logoCloudGrid.innerHTML = logos.map(createLogoCardHTML).join('');
    updateControlsUI();
  }

  function updateControlsUI() {
    const totalBatches = getTotalBatches();
    const safeIdx = ((currentBatch % totalBatches) + totalBatches) % totalBatches;

    if (logoCloudCounter) {
      const currentStr = String(safeIdx + 1).padStart(2, '0');
      const totalStr = String(totalBatches).padStart(2, '0');
      logoCloudCounter.textContent = `${currentStr} / ${totalStr}`;
    }

    if (logoCloudDots) {
      let dotsHTML = '';
      for (let i = 0; i < totalBatches; i++) {
        const isActive = i === safeIdx;
        dotsHTML += `<button type="button" class="logo-swap-dot ${isActive ? 'active' : ''}" data-batch="${i}" aria-label="Go to partner page ${i + 1}" aria-selected="${isActive ? 'true' : 'false'}"></button>`;
      }
      logoCloudDots.innerHTML = dotsHTML;

      logoCloudDots.querySelectorAll('.logo-swap-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          const target = parseInt(dot.getAttribute('data-batch') || '0', 10);
          if (target !== safeIdx && !isSwapping) {
            swapToBatch(target, target > safeIdx ? 'next' : 'prev');
          }
        });
      });
    }
  }

  function swapToBatch(targetBatch, direction = 'next') {
    if (isSwapping) return;
    isSwapping = true;

    const cards = logoCloudGrid.querySelectorAll('.logo-swap-card');
    cards.forEach((card, idx) => {
      card.style.transition = `all 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 20}ms`;
      card.style.opacity = '0';
      card.style.transform = direction === 'next' ? 'translateY(-14px) scale(0.96)' : 'translateY(14px) scale(0.96)';
    });

    setTimeout(() => {
      currentBatch = targetBatch;
      const nextLogos = getBatchLogos(currentBatch);
      logoCloudGrid.innerHTML = nextLogos.map(createLogoCardHTML).join('');
      updateControlsUI();

      const newCards = logoCloudGrid.querySelectorAll('.logo-swap-card');
      newCards.forEach((card, idx) => {
        card.style.opacity = '0';
        card.style.transform = direction === 'next' ? 'translateY(14px) scale(0.96)' : 'translateY(-14px) scale(0.96)';
      });

      requestAnimationFrame(() => {
        newCards.forEach((card, idx) => {
          card.style.transition = `all 0.35s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 25}ms`;
          card.style.opacity = '1';
          card.style.transform = 'translateY(0) scale(1)';
        });

        setTimeout(() => {
          isSwapping = false;
        }, 400);
      });
    }, 320);
  }

  function nextBatch() {
    const totalBatches = getTotalBatches();
    swapToBatch((currentBatch + 1) % totalBatches, 'next');
  }

  function prevBatch() {
    const totalBatches = getTotalBatches();
    swapToBatch((currentBatch - 1 + totalBatches) % totalBatches, 'prev');
  }

  if (logoSwapNext) {
    logoSwapNext.addEventListener('click', (e) => {
      e.preventDefault();
      nextBatch();
    });
  }

  if (logoSwapPrev) {
    logoSwapPrev.addEventListener('click', (e) => {
      e.preventDefault();
      prevBatch();
    });
  }

  // Category filtering
  logoFilterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = btn.getAttribute('data-filter') || 'all';
      if (filter === activeFilter) return;

      activeFilter = filter;
      logoFilterBtns.forEach(b => {
        const isCurrent = b === btn;
        b.classList.toggle('active', isCurrent);
        b.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
      });

      if (filter === 'all') {
        filteredLogos = [...CLIENT_LOGOS];
      } else {
        filteredLogos = CLIENT_LOGOS.filter(item => item.category === filter);
      }

      currentBatch = 0;
      buildGrid();
    });
  });

  // Auto-swapping rotation
  function startAutoSwap() {
    stopAutoSwap();
    autoSwapTimer = setInterval(() => {
      if (!isHovered && !isSwapping) {
        nextBatch();
      }
    }, 4500);
  }

  function stopAutoSwap() {
    if (autoSwapTimer) {
      clearInterval(autoSwapTimer);
      autoSwapTimer = null;
    }
  }

  if (logoCloudWrapper) {
    logoCloudWrapper.addEventListener('mouseenter', () => { isHovered = true; });
    logoCloudWrapper.addEventListener('mouseleave', () => { isHovered = false; });
    logoCloudWrapper.addEventListener('focusin', () => { isHovered = true; });
    logoCloudWrapper.addEventListener('focusout', () => { isHovered = false; });
  }

  // Window resize handler
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      buildGrid();
    }, 150);
  });

  // Initialize
  buildGrid();
  startAutoSwap();
}
