// Your script.js code

// Get elements from the DOM
const inputText = document.getElementById('inputText');
const generateBtn = document.getElementById('generateBtn');
const qrcodeDiv = document.getElementById('qrcode');
const downloadBtn = document.getElementById('downloadBtn');
let qrCodeInstance = null;

// Function to generate the QR code
function generateQRCode() {
  const text = inputText.value;

  // Clear previous QR code, if any
  qrcodeDiv.innerHTML = '';

  // Create QR code instance (initialize if not already created)
  if (!qrCodeInstance) {
    qrCodeInstance = new QRCode(qrcodeDiv, {
      width: 200,
      height: 200,
    });
  }

  // Generate the QR code
  qrCodeInstance.makeCode(text);

  // Enable the download button
  downloadBtn.disabled = false;
}

// Event listener for the Generate button
generateBtn.addEventListener('click', generateQRCode);

// Event listener for the Download button
downloadBtn.addEventListener('click', function () {
  const qrImage = qrcodeDiv.querySelector('img');
  const downloadLink = document.createElement('a');
  downloadLink.href = qrImage.src;
  downloadLink.download = 'qrcode.png';
  downloadLink.click();
});

// Disable the download button initially
downloadBtn.disabled = true;
