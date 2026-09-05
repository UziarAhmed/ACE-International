new_css_chunk = '''/* ---- Coverage Section Breadcrumb & Toolbar ---- */
.coverage-breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #e0edfb;
  color: var(--primary);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 20px;
  margin-bottom: 12px;
}

.coverage-toolbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
}

.coverage-filter-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1180px;
  gap: 16px;
  flex-wrap: wrap;
}

.coverage-count-pill {
  font-size: 0.85rem;
  font-weight: 700;
  color: #475569;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 6px 14px;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}

.coverage-search-wrap {
  position: relative;
  display: flex;
  align-items: center;
  width: 320px;
  max-width: 100%;
}

.coverage-search-wrap svg {
  position: absolute;
  left: 14px;
  color: #94a3b8;
  pointer-events: none;
}

.coverage-search-input {
  width: 100%;
  padding: 9px 14px 9px 38px;
  font-size: 0.875rem;
  color: var(--navy);
  background: #ffffff;
  border: 1.5px solid #cbd5e1;
  border-radius: 24px;
  outline: none;
  transition: all 0.25s ease;
  font-family: var(--font-body);
}

.coverage-search-input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.15);
}

/* ---- Products Grid (Reference Design: 3-column cards) ---- */
.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
}

/* ---- Product Card ---- */
.pcard {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease, border-color 0.3s ease;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);
}

.pcard:hover {
  transform: translateY(-5px);
  border-color: #93c5fd;
  box-shadow: 0 18px 36px -6px rgba(0, 102, 204, 0.12), 0 6px 14px -2px rgba(0, 0, 0, 0.05);
}

.pcard-img-wrap {
  position: relative;
  width: 100%;
  height: 230px;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-bottom: 1px solid #edf2f7;
  overflow: hidden;
}

.pcard-img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

.pcard:hover .pcard-img {
  transform: scale(1.08);
}

.pcard-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: #0b1a30;
  color: #ffffff;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  padding: 4px 10px;
  border-radius: 12px;
  text-transform: uppercase;
  box-shadow: 0 2px 6px rgba(0,0,0,0.25);
  z-index: 2;
}

.pcard-body {
  padding: 22px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.pcard-title {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--navy);
  line-height: 1.35;
  margin-bottom: 8px;
}

.pcard-desc {
  font-size: 0.84rem;
  color: #64748b;
  line-height: 1.5;
  margin-bottom: 12px;
  flex-grow: 1;
}

.pcard-oem {
  font-size: 0.77rem;
  color: #334155;
  background: #f1f5f9;
  padding: 6px 10px;
  border-radius: 6px;
  margin-bottom: 16px;
  line-height: 1.4;
}

.pcard-oem-lbl {
  font-weight: 700;
  color: var(--primary);
}

.pcard-actions {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: auto;
}

.pcard-spec-btn {
  flex: 1;
  padding: 9px 12px;
  font-size: 0.8125rem;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
}

.pcard-rfq-btn {
  flex: 1;
  padding: 9px 12px;
  font-size: 0.8125rem;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
}

.pcard[hidden] {
  display: none !important;
}

/* ---- Responsive Products Grid ---- */
@media (max-width: 1080px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 680px) {
  .products-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .coverage-filter-bar {
    flex-direction: column;
    align-items: stretch;
  }

  .coverage-search-wrap {
    width: 100%;
  }

  .pcard-img-wrap {
    height: 200px;
  }
}

/* Pulse animation for RFQ prefill */
@keyframes highlightPulse {
  0% { box-shadow: 0 0 0 0 rgba(0, 102, 204, 0.7); }
  50% { box-shadow: 0 0 0 8px rgba(0, 102, 204, 0.25); border-color: var(--primary); }
  100% { box-shadow: 0 0 0 0 rgba(0, 102, 204, 0); }
}

.highlight-pulse {
  animation: highlightPulse 1.4s ease;
  border-color: var(--primary) !important;
}
'''

with open('css/style.css', 'r', encoding='utf-8') as f:
    css_content = f.read()

# Replace from /* ---- Three-Column Grid ---- */ until /* ==========================================================================\n   4. WHY ACE
import re
target_regex = r'/\* ---- Three-Column Grid ---- \*/.*?/\* ==========================================================================\n   4\. WHY ACE'
replacement = new_css_chunk + '\n/* ==========================================================================\n   4. WHY ACE'

if re.search(target_regex, css_content, re.DOTALL):
    css_content = re.sub(target_regex, replacement, css_content, count=1, flags=re.DOTALL)
    with open('css/style.css', 'w', encoding='utf-8') as f:
        f.write(css_content)
    print("Updated css/style.css successfully!")
else:
    print("Could not find target regex in css/style.css")
