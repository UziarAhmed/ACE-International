with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# ============================================================
# 1. RESTORE the #categories section (carousel back)
# ============================================================
old_pcs_section = '''    <!-- ==========================================================================
         3. OUR PRODUCT COVERAGE SECTION
         ========================================================================== -->
    <section class="product-coverage-section" id="categories">
      <div class="container">

        <!-- Section Header -->
        <div class="section-header">
          <h2>Our Product Coverage</h2>
          <p>Pharmaceutical machinery, machine spare parts and tooling for your manufacturing needs.</p>
        </div>

        <!-- Animated Pill Tab Switcher -->
        <div class="pcs-tab-switcher" role="tablist" aria-label="Product category tabs">
          <div class="pcs-tab-track">
            <div class="pcs-tab-slider" id="pcsTabSlider"></div>
            <button class="pcs-tab-btn active" id="pcsTabMachinery" data-tab="machinery" role="tab" aria-selected="true" aria-controls="pcsPanelMachinery">Machinery</button>
            <button class="pcs-tab-btn" id="pcsTabSpares" data-tab="spares" role="tab" aria-selected="false" aria-controls="pcsPanelSpares">Spares &amp; Tooling</button>
          </div>
        </div>

        <!-- Three-Column Layout -->
        <div class="pcs-grid">

          <!-- LEFT PANEL: Machinery list (tab-controlled) -->
          <div class="pcs-list-card" id="pcsPanelMachinery" role="tabpanel" aria-labelledby="pcsTabMachinery">'''

carousel_section = '''    <!-- ==========================================================================
         3. PHARMACEUTICAL MACHINERY & SPARE PART CATEGORIES
         ========================================================================== -->
    <section class="categories-section" id="categories">
      <div class="container">
        <div class="section-header">
          <h2>Major Pharmaceutical Machinery &amp; Spare Part Requirements</h2>
          <p>We provide machine parts, tooling and solutions for a wide range of pharmaceutical equipment.</p>
        </div>

        <div class="category-carousel-wrapper">
          <div class="category-grid" id="categoryCarouselTrack" role="region" aria-label="Pharmaceutical equipment carousel">
            <!-- 1. Tablet Press -->
            <div class="category-card active" data-category-key="tablet-press" data-index="0" tabindex="0" role="button" aria-label="Tablet Press: View details and specifications">
              <div class="bg-card-media">
                <img src="assets/images/cat-tablet-press.jpg" alt="Pharmaceutical Rotary Tablet Compression Press" class="bg-card-photo" loading="lazy">
              </div>
              <div class="bg-card-scrim"></div>
              <div class="bg-card-header">
                <span class="bg-card-pill" style="--pill-color: #0066cc;">ROTARY PRESS</span>
                <span class="bg-card-index">01</span>
              </div>
              <div class="bg-card-collapsed-bottom">
                <span class="bg-card-collapsed-title">Tablet Press</span>
                <span class="bg-card-circle-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </span>
              </div>
              <div class="bg-card-expanded-bottom">
                <h3 class="bg-card-title">Tablet Press Machines</h3>
                <p class="bg-card-subtitle">ACE-II, ACE-III &amp; ACE-IV &bull; Up to 2,16,000 tabs/hr</p>
                <div class="bg-card-actions">
                  <button type="button" class="btn btn-sm btn-primary bg-card-quickspec-btn" data-modal-key="tablet-press">Quick Specs &rarr;</button>
                  <a href="#rfq-section" class="btn btn-sm btn-outline-light bg-card-rfq-btn" data-prefill="Tablet Press">Request Quote</a>
                </div>
              </div>
              <span class="category-name">Tablet Press</span>
            </div>

            <!-- 2. Capsule Filling -->
            <div class="category-card" data-category-key="capsule-filling" data-index="1" tabindex="0" role="button" aria-label="Capsule Filling: View details and specifications">
              <div class="bg-card-media">
                <img src="assets/images/cat-capsule-filling.jpg" alt="Automatic Capsule Filling Machine" class="bg-card-photo" loading="lazy">
              </div>
              <div class="bg-card-scrim"></div>
              <div class="bg-card-header">
                <span class="bg-card-pill" style="--pill-color: #0284c7;">ENCAPSULATION</span>
                <span class="bg-card-index">02</span>
              </div>
              <div class="bg-card-collapsed-bottom">
                <span class="bg-card-collapsed-title">Capsule Filling</span>
                <span class="bg-card-circle-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </span>
              </div>
              <div class="bg-card-expanded-bottom">
                <h3 class="bg-card-title">Capsule Filling Machines</h3>
                <p class="bg-card-subtitle">Auto &amp; Semi-Auto &bull; Size 000&ndash;5 &bull; ACG Spares</p>
                <div class="bg-card-actions">
                  <button type="button" class="btn btn-sm btn-primary bg-card-quickspec-btn" data-modal-key="capsule-filling">Quick Specs &rarr;</button>
                  <a href="#rfq-section" class="btn btn-sm btn-outline-light bg-card-rfq-btn" data-prefill="Capsule Filling">Request Quote</a>
                </div>
              </div>
              <span class="category-name">Capsule Filling</span>
            </div>

            <!-- 3. Rapid Mixer Granulator -->
            <div class="category-card" data-category-key="rmg" data-index="2" tabindex="0" role="button" aria-label="Rapid Mixer Granulator: View details and specifications">
              <div class="bg-card-media">
                <img src="assets/images/cat-rmg-granulator.jpg" alt="High Shear Rapid Mixer Granulator (RMG)" class="bg-card-photo" loading="lazy">
              </div>
              <div class="bg-card-scrim"></div>
              <div class="bg-card-header">
                <span class="bg-card-pill" style="--pill-color: #0d9488;">HIGH SHEAR RMG</span>
                <span class="bg-card-index">03</span>
              </div>
              <div class="bg-card-collapsed-bottom">
                <span class="bg-card-collapsed-title">Mixer Granulator</span>
                <span class="bg-card-circle-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </span>
              </div>
              <div class="bg-card-expanded-bottom">
                <h3 class="bg-card-title">Rapid Mixer Granulator</h3>
                <p class="bg-card-subtitle">10L to 1200L &bull; Dual-Speed Chopper &bull; cGMP</p>
                <div class="bg-card-actions">
                  <button type="button" class="btn btn-sm btn-primary bg-card-quickspec-btn" data-modal-key="rmg">Quick Specs &rarr;</button>
                  <a href="#rfq-section" class="btn btn-sm btn-outline-light bg-card-rfq-btn" data-prefill="Rapid Mixer Granulator">Request Quote</a>
                </div>
              </div>
              <span class="category-name">Rapid Mixer Granulator</span>
            </div>

            <!-- 4. Fluid Bed Dryer -->
            <div class="category-card" data-category-key="fbd" data-index="3" tabindex="0" role="button" aria-label="Fluid Bed Dryer: View details and specifications">
              <div class="bg-card-media">
                <img src="assets/images/cat-fluid-bed-dryer.jpg" alt="Fluid Bed Dryer and Processor Machine" class="bg-card-photo" loading="lazy">
              </div>
              <div class="bg-card-scrim"></div>
              <div class="bg-card-header">
                <span class="bg-card-pill" style="--pill-color: #2563eb;">DRYING TOWER</span>
                <span class="bg-card-index">04</span>
              </div>
              <div class="bg-card-collapsed-bottom">
                <span class="bg-card-collapsed-title">Fluid Bed Dryer</span>
                <span class="bg-card-circle-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </span>
              </div>
              <div class="bg-card-expanded-bottom">
                <h3 class="bg-card-title">Fluid Bed Dryer (FBD)</h3>
                <p class="bg-card-subtitle">30 kg to 500 kg &bull; Dutch Weave SS 316</p>
                <div class="bg-card-actions">
                  <button type="button" class="btn btn-sm btn-primary bg-card-quickspec-btn" data-modal-key="fbd">Quick Specs &rarr;</button>
                  <a href="#rfq-section" class="btn btn-sm btn-outline-light bg-card-rfq-btn" data-prefill="Fluid Bed Dryer">Request Quote</a>
                </div>
              </div>
              <span class="category-name">Fluid Bed Dryer</span>
            </div>

            <!-- 5. Blister Packing -->
            <div class="category-card" data-category-key="blister" data-index="4" tabindex="0" role="button" aria-label="Blister Packing: View details and specifications">
              <div class="bg-card-media">
                <img src="assets/images/cat-blister-packing.jpg" alt="Blister Packaging Form Fill Seal Machine" class="bg-card-photo" loading="lazy">
              </div>
              <div class="bg-card-scrim"></div>
              <div class="bg-card-header">
                <span class="bg-card-pill" style="--pill-color: #7c3aed;">PACKAGING</span>
                <span class="bg-card-index">05</span>
              </div>
              <div class="bg-card-collapsed-bottom">
                <span class="bg-card-collapsed-title">Blister Packing</span>
                <span class="bg-card-circle-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </span>
              </div>
              <div class="bg-card-expanded-bottom">
                <h3 class="bg-card-title">Blister Packing &amp; Spares</h3>
                <p class="bg-card-subtitle">Alu-Alu &amp; PVC &bull; Elmach &amp; Uhlmann Form-Fill</p>
                <div class="bg-card-actions">
                  <button type="button" class="btn btn-sm btn-primary bg-card-quickspec-btn" data-modal-key="blister">Quick Specs &rarr;</button>
                  <a href="#rfq-section" class="btn btn-sm btn-outline-light bg-card-rfq-btn" data-prefill="Blister Packing">Request Quote</a>
                </div>
              </div>
              <span class="category-name">Blister Packing</span>
            </div>

            <!-- 6. Vibro Sifter -->
            <div class="category-card" data-category-key="vibro" data-index="5" tabindex="0" role="button" aria-label="Vibro Sifter: View details and specifications">
              <div class="bg-card-media">
                <img src="assets/images/cat-vibro-sifter.jpg" alt="Stainless Steel Sanitary Vibro Sifter Machine" class="bg-card-photo" loading="lazy">
              </div>
              <div class="bg-card-scrim"></div>
              <div class="bg-card-header">
                <span class="bg-card-pill" style="--pill-color: #0891b2;">SIEVING</span>
                <span class="bg-card-index">06</span>
              </div>
              <div class="bg-card-collapsed-bottom">
                <span class="bg-card-collapsed-title">Vibro Sifter</span>
                <span class="bg-card-circle-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </span>
              </div>
              <div class="bg-card-expanded-bottom">
                <h3 class="bg-card-title">Sanitary Vibro Sifter</h3>
                <p class="bg-card-subtitle">20&quot; to 48&quot; &bull; Lead-Free Bonded Sieves</p>
                <div class="bg-card-actions">
                  <button type="button" class="btn btn-sm btn-primary bg-card-quickspec-btn" data-modal-key="vibro">Quick Specs &rarr;</button>
                  <a href="#rfq-section" class="btn btn-sm btn-outline-light bg-card-rfq-btn" data-prefill="Vibro Sifter">Request Quote</a>
                </div>
              </div>
              <span class="category-name">Vibro Sifter</span>
            </div>

            <!-- 7. Pharmaceutical Tooling -->
            <div class="category-card" data-category-key="tooling" data-index="6" tabindex="0" role="button" aria-label="Pharmaceutical Tooling: View details and specifications">
              <div class="bg-card-media">
                <img src="assets/images/cat-pharma-tooling.jpg" alt="Tablet Compression Punches, Dies and Coated Tooling" class="bg-card-photo" loading="lazy">
              </div>
              <div class="bg-card-scrim"></div>
              <div class="bg-card-header">
                <span class="bg-card-pill" style="--pill-color: #d97706;">TOOLING &bull; 1987</span>
                <span class="bg-card-index">07</span>
              </div>
              <div class="bg-card-collapsed-bottom">
                <span class="bg-card-collapsed-title">Pharma Tooling</span>
                <span class="bg-card-circle-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </span>
              </div>
              <div class="bg-card-expanded-bottom">
                <h3 class="bg-card-title">Pharma Dies &amp; Punches</h3>
                <p class="bg-card-subtitle">Euro B, D, BB &bull; TiN &amp; SPN+ Anti-Stick Steel</p>
                <div class="bg-card-actions">
                  <button type="button" class="btn btn-sm btn-primary bg-card-quickspec-btn" data-modal-key="tooling">Quick Specs &rarr;</button>
                  <a href="#rfq-section" class="btn btn-sm btn-outline-light bg-card-rfq-btn" data-prefill="Pharmaceutical Tooling">Request Quote</a>
                </div>
              </div>
              <span class="category-name">Pharmaceutical Tooling</span>
            </div>

            <!-- 8. Machine Spare Parts -->
            <div class="category-card" data-category-key="spare-parts" data-index="7" tabindex="0" role="button" aria-label="Machine Spare Parts: View details and specifications">
              <div class="bg-card-media">
                <img src="assets/images/cat-machine-spare-parts.jpg" alt="Precision Pharmaceutical Machine Spare Parts and Cams" class="bg-card-photo" loading="lazy">
              </div>
              <div class="bg-card-scrim"></div>
              <div class="bg-card-header">
                <span class="bg-card-pill" style="--pill-color: #475569;">OEM COMPONENTS</span>
                <span class="bg-card-index">08</span>
              </div>
              <div class="bg-card-collapsed-bottom">
                <span class="bg-card-collapsed-title">Machine Spares</span>
                <span class="bg-card-circle-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </span>
              </div>
              <div class="bg-card-expanded-bottom">
                <h3 class="bg-card-title">Precision Machine Spares</h3>
                <p class="bg-card-subtitle">Cams, Worm Gears, Shafts &bull; 5-Axis CNC</p>
                <div class="bg-card-actions">
                  <button type="button" class="btn btn-sm btn-primary bg-card-quickspec-btn" data-modal-key="spare-parts">Quick Specs &rarr;</button>
                  <a href="#rfq-section" class="btn btn-sm btn-outline-light bg-card-rfq-btn" data-prefill="Machine Spare Parts">Request Quote</a>
                </div>
              </div>
              <span class="category-name">Machine Spare Parts</span>
            </div>
          </div>

          <!-- Mobile Carousel Navigation Bar -->
          <div class="category-carousel-controls" aria-label="Equipment carousel controls">
            <div class="carousel-control-left">
              <button type="button" class="carousel-nav-arrow" id="catCarouselPrev" aria-label="Previous equipment">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <div class="carousel-dots-wrap" id="catCarouselDots" role="tablist">
                <button type="button" class="carousel-dot active" data-index="0" aria-label="Slide 1: Tablet Press"></button>
                <button type="button" class="carousel-dot" data-index="1" aria-label="Slide 2: Capsule Filling"></button>
                <button type="button" class="carousel-dot" data-index="2" aria-label="Slide 3: Rapid Mixer Granulator"></button>
                <button type="button" class="carousel-dot" data-index="3" aria-label="Slide 4: Fluid Bed Dryer"></button>
                <button type="button" class="carousel-dot" data-index="4" aria-label="Slide 5: Blister Packing"></button>
                <button type="button" class="carousel-dot" data-index="5" aria-label="Slide 6: Vibro Sifter"></button>
                <button type="button" class="carousel-dot" data-index="6" aria-label="Slide 7: Pharmaceutical Tooling"></button>
                <button type="button" class="carousel-dot" data-index="7" aria-label="Slide 8: Machine Spare Parts"></button>
              </div>
              <button type="button" class="carousel-nav-arrow" id="catCarouselNext" aria-label="Next equipment">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
            <div class="carousel-counter-badge" id="catCarouselCounter">01 / 08</div>
          </div>

          <div class="carousel-swipe-hint">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8L22 12L18 16"/><path d="M6 8L2 12L6 16"/></svg>
            <span>Click or drag to explore all 8 machinery categories</span>
          </div>
        </div>
      </div>
    </section>'''

# Find and replace the old pcs section (starts with the product-coverage-section tag)
import re
# Replace from the section opening comment until the first </section>
pattern = r'(    <!-- ==========================================================================\n         3\. OUR PRODUCT COVERAGE SECTION.*?    </section>)'
content = re.sub(pattern, carousel_section, content, count=1, flags=re.DOTALL)

# ============================================================
# 2. REPLACE the broken #coverage section with clean new version
# ============================================================
new_coverage_section = '''    <!-- ==========================================================================
         6. OUR PRODUCT COVERAGE
         ========================================================================== -->
    <section class="coverage-section" id="coverage">
      <div class="container">
        <div class="section-header">
          <h2>Our Product Coverage</h2>
          <p>Pharmaceutical machinery, machine spare parts and tooling for your manufacturing needs.</p>
        </div>

        <!-- Animated Pill Tab Switcher -->
        <div class="pcs-tab-switcher" role="tablist" aria-label="Product category tabs">
          <div class="pcs-tab-track">
            <div class="pcs-tab-slider" id="pcsTabSlider"></div>
            <button class="pcs-tab-btn active" id="pcsTabMachinery" data-tab="machinery" role="tab" aria-selected="true" aria-controls="pcsPanelMachinery">Machinery</button>
            <button class="pcs-tab-btn" id="pcsTabSpares" data-tab="spares" role="tab" aria-selected="false" aria-controls="pcsPanelSpares">Spares &amp; Tooling</button>
          </div>
        </div>

        <!-- Three-Column Layout -->
        <div class="pcs-grid">

          <!-- LEFT PANEL: Machinery (default visible) -->
          <div class="pcs-list-card" id="pcsPanelMachinery" role="tabpanel" aria-labelledby="pcsTabMachinery">
            <div class="pcs-list-header">MACHINERY</div>
            <ul class="pcs-list">
              <li class="pcs-list-item">
                <a href="#rfq-section" class="pcs-list-link" data-rfq-prefill="Rotary Tablet Press (ACE-II / ACE-III / ACE-IV)">
                  <span>Tablet Press (ACE-II, III, IV)</span>
                  <svg class="pcs-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
              </li>
              <li class="pcs-list-item">
                <a href="#rfq-section" class="pcs-list-link" data-rfq-prefill="Capsule Filling Machine &amp; Auto Loaders">
                  <span>Capsule Filling Machines</span>
                  <svg class="pcs-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
              </li>
              <li class="pcs-list-item">
                <a href="#rfq-section" class="pcs-list-link" data-rfq-prefill="Rapid Mixer Granulator (HSMG / RMG 10L-1200L)">
                  <span>Rapid Mixer Granulator (RMG)</span>
                  <svg class="pcs-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
              </li>
              <li class="pcs-list-item">
                <a href="#rfq-section" class="pcs-list-link" data-rfq-prefill="Fluid Bed Dryer (FBD 30kg-500kg)">
                  <span>Fluid Bed Dryer (FBD)</span>
                  <svg class="pcs-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
              </li>
              <li class="pcs-list-item">
                <a href="#rfq-section" class="pcs-list-link" data-rfq-prefill="Blister Packing Machines &amp; Tooling">
                  <span>Blister Packing Machinery</span>
                  <svg class="pcs-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
              </li>
              <li class="pcs-list-item">
                <a href="#rfq-section" class="pcs-list-link" data-rfq-prefill="Vibro Sifter (20 to 48 Inch)">
                  <span>Vibro Sifter (20&quot; to 48&quot;)</span>
                  <svg class="pcs-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
              </li>
            </ul>
          </div>

          <!-- MIDDLE PANEL: Spares &amp; Tooling (toggled) -->
          <div class="pcs-list-card" id="pcsPanelSpares" role="tabpanel" aria-labelledby="pcsTabSpares" hidden>
            <div class="pcs-list-header">SPARES &amp; TOOLING</div>
            <ul class="pcs-list">
              <li class="pcs-list-item">
                <a href="#rfq-section" class="pcs-list-link" data-rfq-prefill="Tablet Compression Punches &amp; Dies (B/D/BB Tooling)">
                  <span>Tablet Press Tooling (B/D/BB)</span>
                  <svg class="pcs-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
              </li>
              <li class="pcs-list-item">
                <a href="#rfq-section" class="pcs-list-link" data-rfq-prefill="Capsule Machine Replacement Parts (ACG/Pam-Pac/Bosch)">
                  <span>Capsule Machine Change Parts</span>
                  <svg class="pcs-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
              </li>
              <li class="pcs-list-item">
                <a href="#rfq-section" class="pcs-list-link" data-rfq-prefill="Multi-Tip &amp; Micro-Tip Punches with SPN+ / TiN Coating">
                  <span>Multi-Tip &amp; Coated Tooling</span>
                  <svg class="pcs-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
              </li>
              <li class="pcs-list-item">
                <a href="#rfq-section" class="pcs-list-link" data-rfq-prefill="Custom Machined Shafts, Pulleys &amp; Bronze Gears">
                  <span>Custom Machined Components</span>
                  <svg class="pcs-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
              </li>
              <li class="pcs-list-item pcs-list-item--accent">
                <a href="#categories" class="pcs-list-link pcs-list-link-accent">
                  <span>View All Products &rarr;</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- RIGHT PANEL: Highlight card (always visible) -->
          <div class="pcs-highlight-card">
            <div class="pcs-highlight-body">
              <h3 class="pcs-highlight-title">A Reliable Source for Your Pharma Machine Requirements.</h3>
              <p class="pcs-highlight-desc">From high-output double-sided rotary presses (2,16,000 tabs/hr) to specialized anti-sticking compression tooling and emergency replacement spares.</p>
            </div>
            <div class="pcs-highlight-img-wrap">
              <img src="assets/images/cat-pharma-tooling.jpg" alt="ACE INTERNATIONAL pharmaceutical tooling and tablet press components" class="pcs-highlight-img" loading="lazy">
            </div>
            <div class="pcs-highlight-tags">
              <span class="pcs-tag">MACHINERY</span>
              <span class="pcs-tag-dot">&bull;</span>
              <span class="pcs-tag">SPARE PARTS</span>
              <span class="pcs-tag-dot">&bull;</span>
              <span class="pcs-tag">TOOLING</span>
              <span class="pcs-tag-dot">&bull;</span>
              <span class="pcs-tag">SOLUTIONS</span>
            </div>
          </div>

        </div>
      </div>
    </section>'''

# Replace the broken coverage section
cov_pattern = r'(    <!-- ==========================================================================\n         6\. OUR PRODUCT COVERAGE.*?    </section>)'
content = re.sub(cov_pattern, new_coverage_section, content, count=1, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done! Total chars:', len(content))
# Verify both sections are now present
print('categories-section present:', 'class="categories-section"' in content)
print('coverage-section present:', 'class="coverage-section"' in content)
print('pcs-tab-switcher present:', content.count('pcs-tab-switcher'))
