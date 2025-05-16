document.getElementById('idForm').addEventListener('submit', function(e) {
  e.preventDefault();

  document.getElementById('outName').textContent = document.getElementById('fullName').value;
  document.getElementById('outDOB').textContent = document.getElementById('dob').value;
  document.getElementById('outNationality').textContent = document.getElementById('nationality').value;
  document.getElementById('outSex').textContent = document.getElementById('sex').value;
  document.getElementById('outExpiry').textContent = document.getElementById('expiry').value;

  const randomID = 'DV-' + Math.floor(Math.random() * 900000000 + 100000000);
  document.getElementById('outID').textContent = randomID;

  const reader = new FileReader();
  const file = document.getElementById('photo').files[0];

  reader.onload = function(event) {
    const img = document.createElement('img');
    img.src = event.target.result;
    img.style.width = '100px';
    img.style.height = '120px';
    img.style.objectFit = 'cover';
    const photoBox = document.getElementById('photo-box');
    photoBox.innerHTML = '';
    photoBox.appendChild(img);
  };

  if (file) {
    reader.readAsDataURL(file);
  }
});

// Template switcher
document.getElementById('idType').addEventListener('change', function() {
  const type = this.value;
  const card = document.getElementById('idCard');
  const title = document.getElementById('cardTitle');

  card.classList.remove('passport-template', 'national-template');

  if (type === 'passport') {
    card.classList.add('passport-template');
    title.innerHTML = 'United States of America<br>Passport';
  } else if (type === 'national') {
    card.classList.add('national-template');
    title.innerHTML = 'United States of America<br>National ID Card';
  }
});

function downloadID() {
  html2canvas(document.getElementById('idCard')).then(function(canvas) {
    const link = document.createElement('a');
    link.download = 'Devland_ID.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}