# Helper to generate the product cards HTML
def make_card(p):
    return f'''            <article class="pcard" data-category="{p['category']}" data-search="{p['name'].lower()} {p['tag'].lower()} {p['sub'].lower()} {p.get('oems', '').lower()}">
              <div class="pcard-img-wrap">
                <img src="{p['image']}" alt="{p['name']}" class="pcard-img" loading="lazy">
                <span class="pcard-badge">{p['tag']}</span>
              </div>
              <div class="pcard-body">
                <h3 class="pcard-title">{p['name']}</h3>
                <p class="pcard-desc">{p['sub']}</p>
                {f'<div class="pcard-oem"><span class="pcard-oem-lbl">Fits:</span> {p["oems"]}</div>' if p.get('oems') else ''}
                <div class="pcard-actions">
                  <button type="button" class="btn btn-sm btn-primary pcard-spec-btn" data-modal-key="{p['modalKey']}">Quick Specs &rarr;</button>
                  <a href="#rfq-section" class="btn btn-sm btn-outline-primary pcard-rfq-btn" data-rfq-prefill="{p['name']}">Request Quote</a>
                </div>
              </div>
            </article>'''

machinery_products = [
    {
        'id': 'ace-iv-rotary-tablet-press',
        'name': 'ACE-IV Square cGMP Double Rotary Tablet Press',
        'category': 'machinery',
        'tag': 'Rotary Compression',
        'image': 'assets/images/products/ace-iv-rotary-tablet-press.jpg',
        'sub': 'Double-sided high speed rotary press with outputs up to 2,16,000 tablets/hr. 27 to 45 stations.',
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
        'tag': 'Granulation',
        'image': 'assets/images/products/rapid-mixer-granulator-rmg.jpg',
        'sub': 'Sanitary wet granulation (10L to 1200L) with dual-speed chopper, 4-arm impeller & air-purged seals.',
        'oems': 'Cadmach, GEA Courtoy',
        'modalKey': 'rmg'
    },
    {
        'id': 'fluid-bed-dryer-fbd',
        'name': 'Fluid Bed Dryer & Processor (FBD)',
        'category': 'machinery',
        'tag': 'Drying Tower',
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
        'tag': 'Size Reduction',
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
        'sub': 'Multiplies press output 2x to 5x. S7 shock-resistant & 440C steels hardened to 58–60 HRC. Euro B & D.',
        'oems': 'Cadmach, Fette, Korsch, GEA Courtoy, Romaco',
        'modalKey': 'tooling'
    },
    {
        'id': 'pvd-coated-tablet-tooling',
        'name': 'Special PVD Anti-Stick & Anti-Abrasive Punches',
        'category': 'spares',
        'tag': 'PVD Coated Tooling',
        'image': 'assets/images/products/pvd-coated-tablet-tooling.jpg',
        'sub': 'High-performance TiN, SPN+ and CRX+ triple-layer coatings engineered to stop tablet sticking and picking.',
        'oems': 'Cadmach, Fette, Korsch, Killian, Romaco',
        'modalKey': 'tooling'
    },
    {
        'id': 'precision-machine-spares-cams',
        'name': 'Custom CNC Machine Spares, Cams & Turrets',
        'category': 'spares',
        'tag': '5-Axis CNC Spares',
        'image': 'assets/images/products/precision-machine-spares-cams.jpg',
        'sub': 'In-house CNC turned & Wire EDM machine parts: bronze worm gears, cam tracks, pressure rollers & drive shafts.',
        'oems': 'Cadmach, ACG, Pam-Pac, Bosch, Fette',
        'modalKey': 'spare-parts'
    },
    {
        'id': 'capsule-change-parts',
        'name': 'Capsule Machine Format Change Parts & Tamping Pins',
        'category': 'spares',
        'tag': 'Encapsulation Spares',
        'image': 'assets/images/cat-capsule-filling.jpg',
        'sub': 'Complete change part sets: dosing discs, tamping pins, segment blocks & sorting heads for Size 000 to 5.',
        'oems': 'ACG, Pam-Pac, Bosch, Harro Höfliger, IMA',
        'modalKey': 'capsule-filling'
    },
    {
        'id': 'blister-sealing-tooling',
        'name': 'Blister Sealing Rollers, Heating Plates & Cutting Tools',
        'category': 'spares',
        'tag': 'Packaging Tooling',
        'image': 'assets/images/cat-blister-packing.jpg',
        'sub': 'Hardened D2/D3 knurled sealing rollers, guide plates, cartridge heaters and punch/die blister cutting tooling.',
        'oems': 'Elmach, Uhlmann, Romaco, Mediseal',
        'modalKey': 'blister'
    },
    {
        'id': 'vibro-sifter-screens',
        'name': 'Lead-Free Sifter Sieves & FDA Silicone Gaskets',
        'category': 'spares',
        'tag': 'Screening & Gaskets',
        'image': 'assets/images/cat-vibro-sifter.jpg',
        'sub': '20" to 48" sanitary bonded screens (8 to 500 mesh) with ultrasonic deblinding and FDA white silicone gaskets.',
        'oems': 'All standard pharma Vibro Sifters',
        'modalKey': 'vibro'
    }
]

print("Machinery cards count:", len(machinery_products))
print("Spares cards count:", len(spares_products))
