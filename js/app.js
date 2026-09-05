/**
 * ACE INTERNATIONAL - Main Application Entrypoint
 * Production architecture coordinating modular ES components:
 * - Navigation & Header elevation
 * - Expanding Product Category Carousel
 * - Product Coverage & Live Search Gallery
 * - Client Portfolio & OEM Logo Cloud
 * - Accessible Modal Dialogs & Specs
 * - Technical Brochure Generation
 */

import { initNavigation } from './modules/navigation.js';
import { initCategoryCarousel } from './modules/carousel.js';
import { initCoverageSection } from './modules/coverage.js';
import { initClientSwap } from './modules/client-swap.js';
import { initModalSystem } from './modules/modal.js';
import { initBrochureDownload } from './modules/brochure.js';

export function initApp() {
  try {
    initNavigation();
    initModalSystem();
    initCategoryCarousel();
    initCoverageSection();
    initClientSwap();
    initBrochureDownload();
  } catch (error) {
    console.error('Error during ACE International application initialization:', error);
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
