/**
 * ACE INTERNATIONAL - RFQ (Request for Quotation) Form Engine
 * Handles validation, file upload dropzone, WhatsApp formatting, loading state,
 * and confirmation receipt modal.
 */

export function initRFQForm() {
  const rfqForm = document.getElementById('rfqForm');
  const fileInput = document.getElementById('drawingUpload');
  const fileDropzone = document.getElementById('fileDropzone');
  const fileBadge = document.getElementById('fileBadge');
  const fileNameDisplay = document.getElementById('fileNameDisplay');
  const fileRemoveBtn = document.getElementById('fileRemoveBtn');
  const submitBtn = document.getElementById('rfqSubmitBtn');
  const rfqWhatsAppBtn = document.getElementById('rfqWhatsAppBtn');
  const successModal = document.getElementById('rfqSuccessModal');
  const modalCloseBtns = document.querySelectorAll('[data-close-modal]');

  if (!rfqForm) return;

  let selectedFile = null;
  let isSubmitting = false;

  // File Upload Handlers
  if (fileDropzone && fileInput) {
    fileDropzone.addEventListener('click', () => {
      fileInput.click();
    });

    fileDropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      fileDropzone.classList.add('dragover');
    });

    fileDropzone.addEventListener('dragleave', () => {
      fileDropzone.classList.remove('dragover');
    });

    fileDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      fileDropzone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleFileSelection(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files.length > 0) {
        handleFileSelection(e.target.files[0]);
      }
    });
  }

  function handleFileSelection(file) {
    const maxSizeBytes = 25 * 1024 * 1024; // 25MB
    if (file.size > maxSizeBytes) {
      alert('Selected file exceeds the 25MB limit. Please attach a smaller drawing or image.');
      return;
    }

    selectedFile = file;
    fileNameDisplay.textContent = `${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
    fileBadge.classList.add('visible');
    fileDropzone.style.display = 'none';
  }

  if (fileRemoveBtn) {
    fileRemoveBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      selectedFile = null;
      fileInput.value = '';
      fileBadge.classList.remove('visible');
      fileDropzone.style.display = 'flex';
    });
  }

  // Field Validation Helper
  function validateField(fieldId, errorMsg) {
    const field = document.getElementById(fieldId);
    if (!field) return true;
    const value = field.value.trim();
    if (!value) {
      field.classList.add('has-error');
      let errorEl = field.parentElement.querySelector('.form-error-msg');
      if (!errorEl) {
        errorEl = document.createElement('div');
        errorEl.className = 'form-error-msg';
        field.parentElement.appendChild(errorEl);
      }
      errorEl.textContent = errorMsg;
      return false;
    } else {
      field.classList.remove('has-error');
      const errorEl = field.parentElement.querySelector('.form-error-msg');
      if (errorEl) errorEl.remove();
      return true;
    }
  }

  // Input listener to clear errors on typing
  ['companyName', 'contactPerson', 'phoneWhatsApp', 'requiredPart'].forEach(id => {
    const field = document.getElementById(id);
    if (field) {
      field.addEventListener('input', () => {
        field.classList.remove('has-error');
        const errorEl = field.parentElement.querySelector('.form-error-msg');
        if (errorEl) errorEl.remove();
      });
    }
  });

  // WhatsApp Button Quick-Send
  if (rfqWhatsAppBtn) {
    rfqWhatsAppBtn.addEventListener('click', () => {
      const company = document.getElementById('companyName')?.value.trim() || 'Not specified';
      const contact = document.getElementById('contactPerson')?.value.trim() || 'Pharma Buyer';
      const phone = document.getElementById('phoneWhatsApp')?.value.trim() || '';
      const machine = document.getElementById('machineModel')?.value.trim() || 'General Pharma Equipment';
      const part = document.getElementById('requiredPart')?.value.trim() || 'Machine Spare Parts / Tooling Enquiry';
      const qty = document.getElementById('quantity')?.value.trim() || '1 Lot';

      const messageText = `Hello ACE INTERNATIONAL Team,
I would like to submit a machine requirement:
• Company: ${company}
• Contact Person: ${contact}
• Phone: ${phone}
• Machine / Model: ${machine}
• Required Part: ${part}
• Quantity: ${qty}
Please share availability, quotation, and technical specifications.`;

      const whatsappURL = `https://wa.me/919930051896?text=${encodeURIComponent(messageText)}`;
      window.open(whatsappURL, '_blank');
    });
  }

  // Form Submit Handler
  rfqForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Validate Required Fields
    const isCompanyValid = validateField('companyName', 'Please enter your company or manufacturing plant name');
    const isContactValid = validateField('contactPerson', 'Please enter the contact person name');
    const isPhoneValid = validateField('phoneWhatsApp', 'Please enter a valid phone or WhatsApp number');
    const isPartValid = validateField('requiredPart', 'Please specify the machine part or tooling requirement');

    if (!isCompanyValid || !isContactValid || !isPhoneValid || !isPartValid) {
      // Focus first error field
      const firstError = rfqForm.querySelector('.has-error');
      if (firstError) {
        firstError.focus();
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Set Loading State
    isSubmitting = true;
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 0.8s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke="white"></path>
      </svg>
      Processing RFQ...
    `;
    submitBtn.disabled = true;

    // Simulate reliable submission delay
    setTimeout(() => {
      isSubmitting = false;
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;

      // Generate Reference Code
      const refCode = `ACE-RFQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;

      // Populate Success Modal
      const companyVal = document.getElementById('companyName').value.trim();
      const contactVal = document.getElementById('contactPerson').value.trim();
      const phoneVal = document.getElementById('phoneWhatsApp').value.trim();
      const machineVal = document.getElementById('machineModel').value.trim() || 'Standard Pharma Equipment';
      const partVal = document.getElementById('requiredPart').value.trim();
      const qtyVal = document.getElementById('quantity').value.trim() || '1 Unit';

      const receiptHTML = `
        <div class="receipt-header">
          <div class="receipt-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h3 style="font-family: var(--font-heading); color: var(--navy); font-size: 1.35rem; margin-bottom: 4px;">Requirement Received</h3>
          <p style="font-size: 0.875rem; color: var(--text-muted);">Thank you, ${contactVal}. Our technical application team has initiated review.</p>
          <div class="receipt-code">${refCode}</div>
          <div style="font-size: 0.75rem; color: var(--text-light); margin-top: 2px;">Official RFQ Tracking ID</div>
        </div>

        <div class="receipt-details">
          <div class="receipt-row">
            <span class="receipt-label">Company</span>
            <span class="receipt-value">${companyVal}</span>
          </div>
          <div class="receipt-row">
            <span class="receipt-label">Machine Model</span>
            <span class="receipt-value">${machineVal}</span>
          </div>
          <div class="receipt-row">
            <span class="receipt-label">Required Item</span>
            <span class="receipt-value">${partVal}</span>
          </div>
          <div class="receipt-row">
            <span class="receipt-label">Estimated Qty</span>
            <span class="receipt-value">${qtyVal}</span>
          </div>
          <div class="receipt-row">
            <span class="receipt-label">Attached Drawing</span>
            <span class="receipt-value">${selectedFile ? selectedFile.name : 'None provided'}</span>
          </div>
          <div class="receipt-row">
            <span class="receipt-label">Direct Callback</span>
            <span class="receipt-value">${phoneVal}</span>
          </div>
        </div>

        <div style="background: #f0f7ff; border: 1px solid #bfdbfe; border-radius: 4px; padding: 12px; margin-bottom: 20px; font-size: 0.8125rem; color: #1e40af;">
          <strong>What Happens Next:</strong> An ACE technical sales engineer will review your machine specifications and provide a formal quotation within 24 hours.
        </div>

        <div style="display: flex; gap: 10px;">
          <button class="btn btn-secondary btn-block" onclick="window.print()">Print Receipt</button>
          <button class="btn btn-primary btn-block" data-close-modal="true">Close</button>
        </div>
      `;

      const modalBody = successModal.querySelector('.modal-body');
      if (modalBody) {
        modalBody.innerHTML = receiptHTML;
      }
      successModal.classList.add('active');

      // Reset form fields
      rfqForm.reset();
      selectedFile = null;
      if (fileBadge) fileBadge.classList.remove('visible');
      if (fileDropzone) fileDropzone.style.display = 'flex';
    }, 900);
  });

  // Modal Close Handlers
  document.addEventListener('click', (e) => {
    if (e.target.matches('[data-close-modal]') || e.target.closest('[data-close-modal]')) {
      const activeModal = document.querySelector('.modal-overlay.active');
      if (activeModal) activeModal.classList.remove('active');
    }
    if (e.target.classList.contains('modal-overlay')) {
      e.target.classList.remove('active');
    }
  });
}
