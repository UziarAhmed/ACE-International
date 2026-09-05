/**
 * ACE INTERNATIONAL - Brochure Generator & Downloader
 * Generates an authentic, high-fidelity corporate catalog document for download/print
 * populated with official ACE INTERNATIONAL data, registered addresses, plant details,
 * and machine specifications extracted from corporate catalogues.
 */

export function initBrochureDownload() {
  const brochureButtons = document.querySelectorAll('[data-action="download-brochure"]');

  brochureButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      downloadBrochurePDF();
    });
  });
}

export function downloadBrochurePDF() {
  const brochureWindow = window.open('', '_blank');
  if (!brochureWindow) {
    alert('Please allow popups to view and download the ACE INTERNATIONAL Technical Brochure.');
    return;
  }

  const brochureHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ACE INTERNATIONAL - Corporate & Technical Catalogue 2026</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
    
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Inter', sans-serif;
      color: #1e293b;
      background: #f8fafc;
      padding: 30px 15px;
      line-height: 1.5;
    }
    .catalogue-page {
      max-width: 880px;
      margin: 0 auto;
      background: #ffffff;
      padding: 44px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      border: 1px solid #e2e8f0;
      border-radius: 6px;
    }
    .print-actions {
      max-width: 880px;
      margin: 0 auto 16px auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .btn-print {
      background: #0066cc;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    .header-bar {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 2px solid #0066cc;
      padding-bottom: 18px;
      margin-bottom: 24px;
    }
    .logo-title {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 26px;
      font-weight: 800;
      color: #0b1a30;
      letter-spacing: 0.05em;
    }
    .logo-sub {
      font-size: 11px;
      font-weight: 700;
      color: #0066cc;
      text-transform: uppercase;
      letter-spacing: 0.15em;
    }
    .tagline-badge {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      color: #0066cc;
      background: #e0f2fe;
      padding: 3px 8px;
      border-radius: 3px;
      margin-top: 4px;
    }
    .doc-meta {
      text-align: right;
      font-size: 12px;
      color: #64748b;
    }
    h1 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 21px;
      color: #0b1a30;
      margin-bottom: 10px;
    }
    h2 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 15px;
      color: #0066cc;
      margin: 22px 0 10px 0;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    p {
      font-size: 13px;
      color: #475569;
      margin-bottom: 10px;
    }
    .spec-table {
      width: 100%;
      border-collapse: collapse;
      margin: 14px 0 20px 0;
      font-size: 12px;
    }
    .spec-table th, .spec-table td {
      border: 1px solid #e2e8f0;
      padding: 8px 10px;
      text-align: left;
    }
    .spec-table th {
      background: #f1f5f9;
      color: #0b1a30;
      font-weight: 700;
    }
    .badge {
      display: inline-block;
      padding: 3px 8px;
      border-radius: 3px;
      background: #e0f2fe;
      color: #0369a1;
      font-size: 11px;
      font-weight: 600;
    }
    .locations-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      padding: 14px;
      border-radius: 4px;
      margin-top: 14px;
      font-size: 12px;
    }
    .footer-bar {
      margin-top: 30px;
      padding-top: 16px;
      border-top: 1px solid #e2e8f0;
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      color: #94a3b8;
    }
    @media print {
      body { background: white; padding: 0; }
      .catalogue-page { box-shadow: none; border: none; padding: 15px; }
      .print-actions { display: none; }
    }
  </style>
</head>
<body>
  <div class="print-actions">
    <span style="font-size: 13px; color: #64748b;">ACE INTERNATIONAL Official Technical Documentation</span>
    <button class="btn-print" onclick="window.print()">Print / Save as PDF &darr;</button>
  </div>

  <div class="catalogue-page">
    <div class="header-bar">
      <div>
        <div class="logo-title">ACE</div>
        <div class="logo-sub">INTERNATIONAL</div>
        <div class="tagline-badge">WE BELIEVE IN STABILITY &bull; SINCE 1987</div>
      </div>
      <div class="doc-meta">
        <div><strong>GSTIN:</strong> 27DMJPK3452A1ZA</div>
        <div><strong>Quality Standard:</strong> cGMP & FDA 21 CFR Compliant</div>
        <div><strong>Direct Contact:</strong> +91 9930051896 / +91 9820702479</div>
        <div><strong>Email:</strong> aceinternational05@gmail.com</div>
      </div>
    </div>

    <h1>Corporate Profile & Machinery Technical Catalogue</h1>
    <p>Founded by tooling and machinery experts with over three decades of engineering excellence, ACE INTERNATIONAL specializes in the design, development, and manufacturing of high-precision pharmaceutical machinery, OEM-compatible spare parts, compression tooling (punches & dies), and processing equipment.</p>

    <h2>1. Tablet Compression Machinery & Tooling Scope</h2>
    <table class="spec-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Standard Models</th>
          <th>Key Replacement Spares / Scope</th>
          <th>Material of Construction</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Rotary Tablet Press</strong></td>
          <td>ACE-II (Bolus 5/8/10 Stn), ACE-III (16/20/23 Stn), ACE-IV (Double Sided Square cGMP 27/35/45 Stn)</td>
          <td>Turret Segments, Upper/Lower Cams, Feed Frames, Pressure Rollers, Scraper Blades, Worm Gears</td>
          <td>SS 316L Contact, Hard Chrome Plated Tool Steel, Bronze Drive Gears</td>
        </tr>
        <tr>
          <td><strong>Compression Tooling</strong></td>
          <td>EURO 'B', 'D', 'BB', 'DB' & TSM; Multi-Tip (Cup & Mono-block), Micro Tip, 3D Tip</td>
          <td>Punches & Dies for Cadmach, Fette, Korsch, Sejong, Romaco, GEA Courtoy, Kilian, Bosch, PTK</td>
          <td>O1, S7 (High Impact), D2, D3, 440C, S1 Tungsten, K340, PK5, N690 Cobalt Steel</td>
        </tr>
        <tr>
          <td><strong>Tool Coatings</strong></td>
          <td>HCP, ENi (Electroless Nickel), TiN (Golden), CrN, CrN+, CRX, SPN+ (Anti-sticking), DLC</td>
          <td>Tailored for sticky, abrasive, and corrosive tablet formulations to eliminate sticking & picking</td>
          <td>Multi-layer PVD & CVD Nano-Coatings</td>
        </tr>
      </tbody>
    </table>

    <h2>2. Processing, Encapsulation & Packaging Machinery</h2>
    <table class="spec-table">
      <thead>
        <tr>
          <th>Equipment</th>
          <th>Capacity & Models</th>
          <th>Key Spares & Change Parts</th>
          <th>Salient Features</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Rapid Mixer Granulator (RMG)</strong></td>
          <td>10L to 1200L Production & Lab Models</td>
          <td>Main Impeller Blades, Granulator Chopper Knives, Air Purge Mechanical Shaft Seals, Discharge Valves</td>
          <td>SS 316L, 4-arm outward mixing impeller, electro-pneumatic flush plug, cGMP</td>
        </tr>
        <tr>
          <td><strong>Fluid Bed Dryer (FBD)</strong></td>
          <td>30 kg to 500 kg Batch Dryers & Coaters</td>
          <td>Dutch Weave Sieve Mesh, Inflatable Silicon Gaskets, Retarding Chamber Flaps, Twin-Fluid Spray Nozzles</td>
          <td>Pneumatic sealing, HEPA filtration, explosion isolation, anti-static filter bags</td>
        </tr>
        <tr>
          <td><strong>Capsule Filling Machines</strong></td>
          <td>Automatic, Semi-Auto & 300-Hole Manual (Size 000 to 5)</td>
          <td>ACG, Pam-Pac, Bosch compatible dosing discs, tamping pins, segment blocks, capsule loaders</td>
          <td>VFD speed control, automated cap/body alignment, de-blistering & sorting systems</td>
        </tr>
        <tr>
          <td><strong>Vibro Sifter & Multi Mill</strong></td>
          <td>20" to 48" Sifters; ACE-50 Multi Mill</td>
          <td>Lead-free silicone bonded sieves (10-500 mesh), ultrasonic deblinding rings, knife/impact beaters</td>
          <td>High-speed gyratory vibration, easy mobility, dust-tight operation</td>
        </tr>
      </tbody>
    </table>

    <h2>3. Client Portfolio & International Footprint</h2>
    <p>ACE INTERNATIONAL supplies leading pharmaceutical manufacturers across India and internationally, including <strong>Essential Drugs Company Ltd (EDCL)</strong>, <strong>Kumudini Pharma</strong>, <strong>Biogen Pharmaceuticals</strong>, <strong>One Pharma Ltd</strong>, <strong>Benham Pharma</strong>, <strong>Zenith Pharmaceutical</strong>, and <strong>MSP International</strong>.</p>

    <div class="locations-grid">
      <div>
        <strong>Registered Office:</strong><br>
        G-2, Abdul Raheman Usman Shaikh House, Marol Village, Bhandarwada, Opp. Thakur House, Andheri (E), Mumbai - 400059, India.
      </div>
      <div>
        <strong>Manufacturing Facility (Plant):</strong><br>
        01 Kuddus Compound, A.K. Road, Opp. M.K. Brothers, Jarimari, Kurla, Mumbai - 400072, India.<br>
        <strong>Phone / WhatsApp:</strong> +91 9930051896 / +91 9820702479
      </div>
    </div>

    <div class="footer-bar">
      <div>ACE INTERNATIONAL &bull; www.acepharmamachinery.in &bull; aceinternational05@gmail.com</div>
      <div>When Quality is the Requirement, We Are the 1st Choice</div>
    </div>
  </div>
</body>
</html>
  `;

  brochureWindow.document.open();
  brochureWindow.document.write(brochureHTML);
  brochureWindow.document.close();
}
