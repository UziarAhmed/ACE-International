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

import { initNavigation } from './modules/navigation.js?v=prod_v3';
import { initCategoryCarousel } from './modules/carousel.js?v=prod_v3';
import { initCoverageSection } from './modules/coverage.js?v=prod_v3';
import { initClientSwap } from './modules/client-swap.js?v=prod_v3';
import { initModalSystem } from './modules/modal.js?v=prod_v3';
import { initBrochureDownload } from './modules/brochure.js?v=prod_v3';

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
