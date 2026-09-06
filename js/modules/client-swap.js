/**
 * ACE INTERNATIONAL - Client Portfolio & OEM Logo Cloud (#clients)
 * Aceternity UI Staggered Wave Swap Animation
 * - Smooth wave transitions across grid cells with blur & slide
 * - Hover tooltip with company/OEM name
 * - Batch counter and wave progress dots
 * - Category filter tabs (All / Pharma / OEM)
 * - Auto-rotation with pause on hover/focus
 * - Direct WhatsApp inquiry on cell click
 */

import { CLIENT_LOGOS } from '../data/products.js';

export function initClientSwap() {
  const logoCloudGrid = document.getElementById('logoCloudGrid');
  const logoCloudWrapper = document.getElementById('logoCloudWrapper');
  const logoCloudDots = document.getElementById('logoCloudDots');
  const logoSwapPrev = document.getElementById('logoSwapPrev');
  const logoSwapNext = document.getElementById('logoSwapNext');

  if (!logoCloudGrid) return;

  const logos = [...CLIENT_LOGOS];
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
    return Math.ceil(logos.length / visibleCount) || 1;
  }

  function getBatchLogos(batchIdx) {
    const visibleCount = getVisibleCount();
    const totalBatches = getTotalBatches();
    const safeIdx = ((batchIdx % totalBatches) + totalBatches) % totalBatches;
    const start = safeIdx * visibleCount;
    const batch = [];
    for (let i = 0; i < visibleCount; i++) {
      const item = logos[(start + i) % logos.length];
      if (item) batch.push(item);
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
      cell.title = `${item.name} - ${item.desc}`;

      const inner = document.createElement('div');
      inner.className = 'logo-swap-item active';

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = `${item.name} logo`;
      img.className = 'logo-swap-img';
      img.loading = 'lazy';
      img.decoding = 'async';

      const tooltip = document.createElement('span');
      tooltip.className = 'logo-swap-tooltip';
      tooltip.textContent = item.name;

      inner.appendChild(img);
      inner.appendChild(tooltip);
      cell.appendChild(inner);

      logoCloudGrid.appendChild(cell);
    }

    updateControlsUI();
  }

  function updateControlsUI() {
    const totalBatches = getTotalBatches();
    const safeIdx = ((currentBatch % totalBatches) + totalBatches) % totalBatches;

    // Update Wave Progress Dots
    if (logoCloudDots) {
      logoCloudDots.innerHTML = '';
      for (let b = 0; b < totalBatches; b++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = `logo-cloud-dot ${b === safeIdx ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to batch ${b + 1}`);
        dot.addEventListener('click', () => {
          if (b !== safeIdx && !isSwapping) {
            swapToBatch(b, b > safeIdx ? 'next' : 'prev');
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

    // Staggered wave animation across cells (Aceternity UI signature stagger: 45ms per cell)
    cells.forEach((cell, idx) => {
      const inner = cell.querySelector('.logo-swap-item');
      if (!inner) return;

      const staggerDelay = idx * 45;

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
              img.alt = `${newItem.name} logo`;
            }
            if (tooltip) {
              tooltip.textContent = newItem.name;
            }
            cell.title = `${newItem.name} - ${newItem.desc}`;
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
    }, 3800);
  }

  function stopAutoSwap() {
    if (autoSwapTimer) {
      clearInterval(autoSwapTimer);
      autoSwapTimer = null;
    }
  }

  // Hover and focus pause listeners
  if (logoCloudWrapper) {
    logoCloudWrapper.addEventListener('mouseenter', () => { isHovered = true; });
    logoCloudWrapper.addEventListener('mouseleave', () => { isHovered = false; });
    logoCloudWrapper.addEventListener('focusin', () => { isHovered = true; });
    logoCloudWrapper.addEventListener('focusout', () => { isHovered = false; });
  }

  // Navigation Arrows
  if (logoSwapPrev) {
    logoSwapPrev.addEventListener('click', (e) => {
      e.preventDefault();
      if (!isSwapping) swapToBatch(currentBatch - 1, 'prev');
    });
  }

  if (logoSwapNext) {
    logoSwapNext.addEventListener('click', (e) => {
      e.preventDefault();
      if (!isSwapping) swapToBatch(currentBatch + 1, 'next');
    });
  }



  // Responsive re-grid on resize
  let logoResizeDebounce = null;
  window.addEventListener('resize', () => {
    clearTimeout(logoResizeDebounce);
    logoResizeDebounce = setTimeout(() => {
      buildGrid();
    }, 150);
  });

  // Initialize
  buildGrid();
  startAutoSwap();
}
