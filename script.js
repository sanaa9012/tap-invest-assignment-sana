// 1. Geolocation API
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      document.getElementById("location-output").innerText =
        `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
    });
  } else {
    alert("Geolocation not supported.");
  }
}

// 2. Network Information API
function checkNetwork() {
  const info = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (info) {
    document.getElementById("network-info").innerText =
      `📶 Network Type: ${info.effectiveType}`;
  }
}
checkNetwork();

// 3. Background Tasks (Simulated with setTimeout for demo)
function setReminder() {
  const text = document.getElementById("reminder-text").value;
  const list = document.getElementById("reminder-list");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);

  setTimeout(() => {
    alert(`🔔 Reminder: ${text}`);
  }, 5000);
}

// 4. Canvas API - Drawing route
const canvas = document.getElementById("routeCanvas");
const ctx = canvas.getContext("2d");
canvas.addEventListener("click", (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  ctx.fillStyle = "#007bff";
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fill();
});

// 5. Intersection Observer API - Lazy load
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.getAttribute('data-src');
      observer.unobserve(img);
    }
  });
});
document.querySelectorAll('.lazy').forEach(img => observer.observe(img));
