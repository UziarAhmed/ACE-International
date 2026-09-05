import re

# =============================================================================
# 1. READ EXISTING FILES
# =============================================================================
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

with open('js/app.js', 'r', encoding='utf-8') as f:
    js = f.read()

# =============================================================================
# 2. GENERATE NEW #coverage SECTION HTML
# =============================================================================
machinery_products = [
    {
        'id': 'ace-iv-rotary-tablet-press',
        'name': 'ACE-IV Square cGMP Double Rotary Tablet Press',
        'category': 'machinery',
        'tag': 'Rotary Compression',
        'image': 'assets/images/products/ace-iv-rotary-tablet-press.jpg',
        'sub': 'Double-sided high speed rotary press with outputs up to 2,16,000 tablets/hr. Accommodates 27 Stn D, 27 Stn B, 35 Stn B & 45 Stn BB tooling.',
        'oems': 'Cadmach, Fette, Korsch, GEA Courtoy',
        'modalKey': 'tablet-press'
    },
    {
        'id': 'ace-iii-single-rotary-press',
        'name': 'ACE-III Single Rotary Tablet Press Machine',
        'category': 'machinery',
        'tag': 'Single Rotary Press',
        'image': 'assets/images/products/ace-iii-single-rotary-press.jpg',
        'sub': 'Robust single-sided rotary press (16, 20 & 23 stn) with central lubrication and cGMP overload release.',
        'oems': 'Cadmach, Korsch, PTK GB',
        'modalKey': 'tablet-press'
    },
    {
        'id': 'automatic-capsule-filler',
        'name': 'ACE AF-40 Automatic Capsule Filling Machine',
        'category': 'machinery',
        'tag': 'Encapsulation',
        'image': 'assets/images/products/automatic-capsule-filler.jpg',
        'sub': 'Multi-position tamping pin dosing system for powder & pellets. Size 000 to 5 up to 40,000 caps/hr.',
        'oems': 'ACG, Pam-Pac, Bosch, IMA SpA',
        'modalKey': 'capsule-filling'
    },
    {
        'id': 'automatic-liquid-capsule-filler',
        'name': 'Automatic Liquid Capsule Filling Machine',
        'category': 'machinery',
        'tag': 'Liquid Encapsulation',
        'image': 'assets/images/products/automatic-liquid-capsule-filler.jpg',
        'sub': 'Precision volumetric liquid filling for oils and suspensions into hard gelatin and vegetarian HPMC capsules.',
        'oems': 'Bosch / Syntegon, IMA, ACG',
        'modalKey': 'capsule-filling'
    },
    {
        'id': 'high-shear-rmg-granulator',
        'name': 'High Shear Rapid Mixer Granulator (HSMG / RMG)',
        'category': 'machinery',
        'tag': 'High Shear Granulation',
        'image': 'assets/images/products/rapid-mixer-granulator-rmg.jpg',
        'sub': 'Sanitary wet granulation (10L to 1200L) with dual-speed chopper, 4-arm impeller & air-purged seals.',
        'oems': 'Cadmach, GEA Courtoy',
        'modalKey': 'rmg'
    },
    {
        'id': 'fluid-bed-dryer-fbd',
        'name': 'Fluid Bed Dryer & Processor (FBD)',
        'category': 'machinery',
        'tag': 'Drying & Granulation',
        'image': 'assets/images/products/fluid-bed-dryer-fbd.jpg',
        'sub': 'Uniform batch drying from 30 kg to 500 kg capacity with stainless steel Dutch weave mesh & explosion flaps.',
        'oems': 'GEA Courtoy, Cadmach',
        'modalKey': 'fbd'
    },
    {
        'id': 'rotary-blister-packing-machine',
        'name': 'Rotary Blister Packaging Machine',
        'category': 'machinery',
        'tag': 'Blister Packaging',
        'image': 'assets/images/products/rotary-blister-packing-machine.jpg',
        'sub': 'Continuous rotary form-fill-seal for PVC/PVDC and Alu-Alu cold forming with precision temperature sealing.',
        'oems': 'Elmach, Uhlmann, Romaco',
        'modalKey': 'blister'
    },
    {
        'id': 'ace-50-multi-mill',
        'name': 'ACE-50 High Speed Sanitary Multi Mill',
        'category': 'machinery',
        'tag': 'Size Reduction & Milling',
        'image': 'assets/images/products/ace-50-multi-mill.jpg',
        'sub': 'Precision milling and wet/dry granulation at up to 2800 RPM with 8-piece reversible knife/impact blades.',
        'oems': 'Cadmach, Fitzpatrick',
        'modalKey': 'vibro'
    }
]

spares_products = [
    {
        'id': 'multi-tip-punch-die-tooling',
        'name': 'Multi-Tip Punch & Segment Die Tooling Sets',
        'category': 'spares',
        'tag': 'Compression Tooling',
        'image': 'assets/images/products/multi-tip-punch-die-tooling.jpg',
        'sub': 'Multiplies press output 2x to 5x without increasing press speed. S7 shock-resistant & 440C steels hardened to 58–60 HRC. Euro B & D standards.',
        'oems': 'Cadmach, Fette, Korsch, GEA Courtoy, Romaco',
        'modalKey': 'tooling'
    },
    {
        'id': 'pvd-coated-tablet-tooling',
        'name': 'Special PVD Anti-Stick & Anti-Abrasive Punches',
        'category': 'spares',
        'tag': 'PVD Coated Tooling',
        'image': 'assets/images/products/pvd-coated-tablet-tooling.jpg',
        'sub': 'High-performance TiN (Golden), SPN+ and CRX+ triple-layer coatings engineered to stop tablet sticking, picking and abrasive wear.',
        'oems': 'Cadmach, Fette, Korsch, Killian, Romaco',
        'modalKey': 'tooling'
    },
    {
        'id': 'precision-machine-spares-cams',
        'name': 'Custom CNC Machine Spares, Cams & Turrets',
        'category': 'spares',
        'tag': '5-Axis CNC Spares',
        'image': 'assets/images/products/precision-machine-spares-cams.jpg',
        'sub': 'In-house CNC turned & Wire EDM machine parts: bronze worm gears, cam tracks, pressure rollers, timing pulleys and drive shafts.',
        'oems': 'Cadmach, ACG, Pam-Pac, Bosch, Fette',
        'modalKey': 'spare-parts'
    },
    {
        'id': 'capsule-change-parts',
        'name': 'Capsule Machine Format Change Parts & Tamping Pins',
        'category': 'spares',
        'tag': 'Encapsulation Spares',
        'image': 'assets/images/cat-capsule-filling.jpg',
        'sub': 'Complete change part sets: dosing discs, tamping pins, segment blocks, capsule alignment bushings & sorting heads for Size 000 to 5.',
        'oems': 'ACG, Pam-Pac, Bosch, Harro Höfliger, IMA',
        'modalKey': 'capsule-filling'
    },
    {
        'id': 'blister-sealing-tooling',
        'name': 'Blister Sealing Rollers, Heating Plates & Cutting Tools',
        'category': 'spares',
        'tag': 'Packaging Tooling',
        'image': 'assets/images/cat-blister-packing.jpg',
        'sub': 'Hardened D2/D3 knurled sealing rollers, guide plates, cartridge heaters and punch/die blister cutting tooling for flat & rotary lines.',
        'oems': 'Elmach, Uhlmann, Romaco, Mediseal',
        'modalKey': 'blister'
    },
    {
        'id': 'vibro-sifter-screens',
        'name': 'Lead-Free Sifter Sieves & FDA Silicone Gaskets',
        'category': 'spares',
        'tag': 'Screening & Gaskets',
        'image': 'assets/images/cat-vibro-sifter.jpg',
        'sub': '20" to 48" sanitary bonded screens (8 to 500 mesh) with ultrasonic deblinding rings and FDA certified white silicone gaskets.',
        'oems': 'All standard pharma Vibro Sifters',
        'modalKey': 'vibro'
    }
]

def make_card(p):
    return f'''            <article class="pcard" data-category="{p['category']}" data-search="{p['name'].lower()} {p['tag'].lower()} {p['sub'].lower()} {p.get('oems', '').lower()}">
              <div class="pcard-img-wrap">
                <img src="{p['image']}" alt="{p['name']}" class="pcard-img" loading="lazy">
                <span class="pcard-badge">{p['tag']}</span>
              </div>
              <div class="pcard-body">
                <h3 class="pcard-title">{p['name']}</h3>
                <p class="pcard-desc">{p['sub']}</p>
                {f'<div class="pcard-oem"><span class="pcard-oem-lbl">Compatible OEMs:</span> {p["oems"]}</div>' if p.get('oems') else ''}
                <div class="pcard-actions">
                  <button type="button" class="btn btn-sm btn-primary pcard-spec-btn" data-modal-key="{p['modalKey']}">Quick Specs &rarr;</button>
                  <a href="#rfq-section" class="btn btn-sm btn-outline-primary pcard-rfq-btn" data-rfq-prefill="{p['name']}">Request Quote</a>
                </div>
              </div>
            </article>'''

machinery_cards_html = '\n'.join([make_card(p) for p in machinery_products])
spares_cards_html = '\n'.join([make_card(p) for p in spares_products])

new_coverage_section_html = f'''    <!-- ==========================================================================
         5. OUR PRODUCT COVERAGE / PRODUCTS WE OFFER (Reference Design)
         ========================================================================== -->
    <section class="coverage-section" id="coverage">
      <div class="container">

        <!-- Section Header -->
        <div class="section-header">
          <div class="coverage-breadcrumb">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <span>Products &amp; Solutions</span>
          </div>
          <h2>Products we Offer</h2>
          <p>Browse our gallery of pharmaceutical machinery, precision compression tooling, and OEM replacement spares.</p>
        </div>

        <!-- Interactive Category Switcher Toolbar (Pill tabs, no tick checkboxes) -->
        <div class="coverage-toolbar">
          <div class="pcs-tab-switcher" role="tablist" aria-label="Product category tabs">
            <div class="pcs-tab-track">
              <div class="pcs-tab-slider" id="pcsTabSlider"></div>
              <button class="pcs-tab-btn active" id="pcsTabMachinery" data-tab="machinery" role="tab" aria-selected="true" aria-controls="pcsProductsGrid">
                Machinery
              </button>
              <button class="pcs-tab-btn" id="pcsTabSpares" data-tab="spares" role="tab" aria-selected="false" aria-controls="pcsProductsGrid">
                Spares &amp; Tooling
              </button>
            </div>
          </div>

          <!-- Quick Filter Count & Live Search -->
          <div class="coverage-filter-bar">
            <div class="coverage-count-pill" id="coverageCountIndicator">Showing 8 Products</div>
            <div class="coverage-search-wrap">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" id="coverageSearchInput" class="coverage-search-input" placeholder="Search equipment, tooling, or OEM...">
            </div>
          </div>
        </div>

        <!-- Product Cards Grid (Faithfully matching reference design) -->
        <div class="products-grid" id="pcsProductsGrid" role="region" aria-label="Product catalog gallery">
{machinery_cards_html}
{spares_cards_html}
        </div>

      </div>
    </section>'''

# Replace in index.html
cov_regex = r'(    <!-- ==========================================================================\n         6\. OUR PRODUCT COVERAGE.*?    </section>)'
if not re.search(cov_regex, html, re.DOTALL):
    cov_regex = r'(    <section class="coverage-section" id="coverage">.*?    </section>)'

html = re.sub(cov_regex, new_coverage_section_html, html, count=1, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated index.html successfully!")
