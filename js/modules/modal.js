/**
 * ACE INTERNATIONAL - Accessible Modal System
 * Provides WCAG 2.1 AA compliant modal dialogs with focus trapping,
 * restoration of trigger focus, ARIA attribute management, and Escape key handling.
 */

import { CATEGORY_DETAILS } from '../data/products.js';

let lastActiveElement = null;
let activeModal = null;

function sanitize(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

export function initModalSystem() {
  // Global Escape key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activeModal) {
      closeModal(activeModal);
    }
  });

  // Global backdrop and close button listener
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.closest('[data-close-modal]')) {
        closeModal(modal);
      }
    });

    // Keyboard focus trap inside modal
    modal.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;

      const focusable = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const firstElement = focusable[0];
      const lastElement = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    });
  });

  // Global delegate for quick spec modal triggers
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-modal-key]');
    if (trigger) {
      e.preventDefault();
      const key = trigger.getAttribute('data-modal-key');
      showCategoryModal(key, trigger);
    }
  });
}

export function openModal(modal, triggerElement = null) {
  if (!modal) return;
  lastActiveElement = triggerElement || document.activeElement;
  activeModal = modal;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Focus the first focusable element or close button
  setTimeout(() => {
    const focusable = modal.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable) {
      focusable.focus();
    }
  }, 50);
}

export function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  activeModal = null;

  // Restore focus to triggering element
  if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
    lastActiveElement.focus();
    lastActiveElement = null;
  }
}

export function showCategoryModal(key, triggerElement = null) {
  const modal = document.getElementById('categoryModal');
  if (!modal) return;

  const data = CATEGORY_DETAILS[key];
  if (!data) {
    console.warn(`Category data not found for key: ${key}`);
    return;
  }

  const modalTitle = modal.querySelector('#categoryModalTitle') || modal.querySelector('.modal-title');
  const modalBody = modal.querySelector('.modal-body');

  if (modalTitle) {
    modalTitle.textContent = data.title;
  }

  if (modalBody) {
    let rowsHTML = '';
    data.specs.forEach((item, idx) => {
      const bg = idx % 2 === 0 ? '#f8fafc' : '#ffffff';
      rowsHTML += `
        <tr style="background: ${bg}; border-bottom: 1px solid var(--border-light);">
          <td style="padding: 11px 14px; font-weight: 700; color: var(--navy); width: 34%;">${sanitize(item.label)}</td>
          <td style="padding: 11px 14px; color: var(--text-body);">${sanitize(item.value)}</td>
        </tr>
      `;
    });

    const safeTitle = encodeURIComponent(data.title);
    const whatsappUrl = `https://wa.me/919930051896?text=Hello%20ACE%20INTERNATIONAL,%20I%20would%20like%20to%20inquire%20about%20${safeTitle}.`;

    modalBody.innerHTML = `
      <p style="font-size: 0.9375rem; color: var(--text-muted); margin-bottom: 18px;">${sanitize(data.subtitle)}</p>
      <div style="border: 1px solid var(--border); border-radius: var(--radius-sm); overflow: hidden; margin-bottom: 24px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;" aria-label="Equipment Specifications">
          <tbody>
            ${rowsHTML}
          </tbody>
        </table>
      </div>
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1; min-width: 200px; justify-content: center;" id="modalInquireBtn">
          Inquire for This Equipment &rarr;
        </a>
        <button type="button" class="btn btn-secondary" data-close-modal="true" style="min-width: 100px;">
          Close
        </button>
      </div>
    `;

    // Re-bind close button inside injected content
    const closeBtn = modalBody.querySelector('[data-close-modal]');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeModal(modal));
    }
  }

  openModal(modal, triggerElement);
}
