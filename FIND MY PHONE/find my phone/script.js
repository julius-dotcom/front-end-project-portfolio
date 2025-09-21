// ===== Ring Phone Overlay with Countdown =====
let countdownTimer;
function ringPhone() {
  let overlay = document.getElementById("ringOverlay");
  let screen = document.getElementById("screenText");

  let timeLeft = 15; // countdown seconds

  // Reset popup content
  screen.innerHTML = `
    <div id="callStatus">📞 Incoming Call...</div>
    <div id="countdown" style="margin: 10px 0; font-size: 1.2rem;">⏳ ${timeLeft}s</div>
    <div style="margin-top: 40px; display: flex; justify-content: space-around; width: 100%;">
      <button onclick="acceptCall()" 
        style="background: #28a745; border: none; padding: 10px 20px; border-radius: 30px; color: white; font-size: 1rem; cursor: pointer;">
        ✅ Accept
      </button>
      <button onclick="stopRing()" 
        style="background: #dc3545; border: none; padding: 10px 20px; border-radius: 30px; color: white; font-size: 1rem; cursor: pointer;">
        ❌ Decline
      </button>
    </div>
  `;

  overlay.style.display = "flex";

  // Play ringtone
  let sound = document.getElementById("ringtone");
  sound.currentTime = 0;
  sound.play();

  // Start countdown
  countdownTimer = setInterval(() => {
    timeLeft--;
    let countdownEl = document.getElementById("countdown");
    let statusEl = document.getElementById("callStatus");

    if (timeLeft > 0 && countdownEl) {
      countdownEl.textContent = `⏳ ${timeLeft}s`;
    } else if (timeLeft <= 0) {
      clearInterval(countdownTimer);
      if (statusEl) statusEl.textContent = "❌ Missed Call";
      if (countdownEl) countdownEl.textContent = "";
      sound.pause();
      sound.currentTime = 0;
      setTimeout(() => { overlay.style.display = "none"; }, 2000);
    }
  }, 1000);
}

function acceptCall() {
  clearInterval(countdownTimer);
  let sound = document.getElementById("ringtone");
  let overlay = document.getElementById("ringOverlay");
  let screen = document.getElementById("screenText");

  screen.innerHTML = "📲 Call Connected...";
  sound.pause();
  sound.currentTime = 0;

  setTimeout(() => {
    overlay.style.display = "none";
  }, 2000);
}

function stopRing() {
  clearInterval(countdownTimer);
  let sound = document.getElementById("ringtone");
  let overlay = document.getElementById("ringOverlay");

  sound.pause();
  sound.currentTime = 0;
  overlay.style.display = "none";
}

// ===== Battery Status =====
if (navigator.getBattery) {
  navigator.getBattery().then(function(battery) {
    function updateBatteryStatus() {
      document.getElementById("batteryInfo").innerText =
        `🔋 Battery: ${Math.round(battery.level * 100)}% ${battery.charging ? "(Charging)" : ""}`;
    }
    updateBatteryStatus();
    battery.addEventListener('levelchange', updateBatteryStatus);
    battery.addEventListener('chargingchange', updateBatteryStatus);
  });
}
