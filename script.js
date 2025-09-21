const input = document.getElementById('qr-input');
const qrDiv = document.getElementById('qrcode');
const btn = document.getElementById('generate-btn');

btn.addEventListener('click', function() {
  const value = input.value.trim();
  qrDiv.style.display = 'none'; // Always hide first
  qrDiv.innerHTML = '';
  if (!value) {
    // Add error class for shake
    input.classList.add('input-error');
    // Remove error class after animation
    setTimeout(() => input.classList.remove('input-error'), 400);
    input.focus();
    return;
  }
  // Generate QR code
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(value)}&size=200x200`;
  qrDiv.innerHTML = `<img src="${apiUrl}" alt="QR Code">`;
  qrDiv.style.display = 'flex';
});

// Optional: Remove error state on typing
input.addEventListener('input', () => {
  input.classList.remove('input-error');
});