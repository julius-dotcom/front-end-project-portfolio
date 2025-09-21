
const destinations = [
  {name: "Paris, France", region: "europe", budget: "high", type: "heritage", img: "images/paris.jpg", map: "https://maps.google.com?q=Paris"},
  {name: "Dubai, UAE", region: "middleeast", budget: "high", type: "luxury", img: "images/dubai.jpg", map: "https://maps.google.com?q=Dubai"},
  {name: "Tokyo, Japan", region: "asia", budget: "medium", type: "heritage", img: "images/tokyo.jpg", map: "https://maps.google.com?q=Tokyo"},
  {name: "New York, USA", region: "americas", budget: "high", type: "adventure", img: "images/newyork.jpg", map: "https://maps.google.com?q=New+York"},
  {name: "Cape Town, South Africa", region: "africa", budget: "medium", type: "beach", img: "images/capetown.jpg", map: "https://maps.google.com?q=Cape+Town"},
  {name: "Sydney, Australia", region: "oceania", budget: "high", type: "beach", img: "images/sydney.jpg", map: "https://maps.google.com?q=Sydney"},
  {name: "Bangkok, Thailand", region: "asia", budget: "low", type: "adventure", img: "images/bangkok.jpg", map: "https://maps.google.com?q=Bangkok"},
  {name: "Rome, Italy", region: "europe", budget: "medium", type: "heritage", img: "images/rome.jpg", map: "https://maps.google.com?q=Rome"},
  {name: "Rio de Janeiro, Brazil", region: "americas", budget: "medium", type: "beach", img: "images/rio.jpg", map: "https://maps.google.com?q=Rio+de+Janeiro"},
  {name: "Marrakech, Morocco", region: "africa", budget: "medium", type: "heritage", img: "images/marrakech.jpg", map: "https://maps.google.com?q=Marrakech"},
  {name: "Bali, Indonesia", region: "asia", budget: "low", type: "beach", img: "images/bali.jpg", map: "https://maps.google.com?q=Bali"},
  {name: "London, UK", region: "europe", budget: "high", type: "heritage", img: "images/london.jpg", map: "https://maps.google.com?q=London"},
  {name: "San Francisco, USA", region: "americas", budget: "high", type: "adventure", img: "images/sanfran.jpg", map: "https://maps.google.com?q=San+Francisco"},
  {name: "Cairo, Egypt", region: "africa", budget: "low", type: "heritage", img: "images/cairo.jpg", map: "https://maps.google.com?q=Cairo"},
  {name: "Auckland, New Zealand", region: "oceania", budget: "medium", type: "adventure", img: "images/auckland.jpg", map: "https://maps.google.com?q=Auckland"},
];


function loadDestinations(listId) {
  const container = document.getElementById(listId);
  if (!container) return;

  container.innerHTML = "";
  destinations.forEach(dest => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.region = dest.region;
    card.dataset.budget = dest.budget;
    card.dataset.type = dest.type;
    card.innerHTML = `
      <img src="${dest.img}" alt="${dest.name}">
      <h3>${dest.name}</h3>
      <p>${dest.type.charAt(0).toUpperCase() + dest.type.slice(1)}</p>
      <a href="${dest.map}" target="_blank" class="btn">View on Map</a>
    `;
    container.appendChild(card);
  });
}


function searchDestinations() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll("#destinationList .card");

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(input) ? "block" : "none";
  });
}


function applyFilters() {
  const region = document.getElementById("regionFilter").value;
  const budget = document.getElementById("budgetFilter").value;
  const type = document.getElementById("typeFilter").value;

  const cards = document.querySelectorAll("#destList .card");
  cards.forEach(card => {
    const matchesRegion = !region || card.dataset.region === region;
    const matchesBudget = !budget || card.dataset.budget === budget;
    const matchesType = !type || card.dataset.type === type;
    card.style.display = (matchesRegion && matchesBudget && matchesType) ? "block" : "none";
  });
}


document.getElementById("newsletterForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("🎉 Thank you for subscribing to ExploreEase!");
  this.reset();
});


document.getElementById("commentForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("username").value;
  const text = document.getElementById("commentText").value;
  if (!name || !text) return;

  const commentList = document.getElementById("commentList");
  const div = document.createElement("div");
  div.classList.add("comment-item");
  div.innerHTML = `<strong>${name}:</strong> <p>${text}</p>`;
  commentList.prepend(div);
  this.reset();
});


document.getElementById("bookingForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const destination = document.getElementById("destination").value;
  const msg = document.getElementById("bookingMessage");
  msg.textContent = `✅ Thank you, ${name}! Your trip to ${destination} has been planned. We’ll contact you soon.`;
  this.reset();
});


const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) backToTop.style.display = "block";
  else backToTop.style.display = "none";
});
backToTop?.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));


document.addEventListener("DOMContentLoaded", () => {
  loadDestinations("destinationList");
  loadDestinations("destList"); 
});
const bookingPopup = document.getElementById("bookingPopup");
const popupClose = bookingPopup.querySelector(".closeBtn");
const popupForm = document.getElementById("popupBookingForm");
const popupMessage = document.getElementById("popupMessage");


document.querySelectorAll(".destinations .card .btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const destName = btn.closest(".card").querySelector("h3").innerText;
    document.getElementById("popupDestination").value = destName;
    bookingPopup.style.display = "flex";
  });
});


popupClose.addEventListener("click", () => bookingPopup.style.display = "none");


popupForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("popupName").value;
  const destination = document.getElementById("popupDestination").value;
  popupMessage.textContent = `✅ Thank you, ${name}! Your trip to ${destination} is booked.`;
  popupForm.reset();
  setTimeout(() => bookingPopup.style.display = "none", 2500);
});


window.addEventListener("click", e => {
  if (e.target === bookingPopup) bookingPopup.style.display = "none";
});
const newsletterPopup = document.getElementById("newsletterPopup");
const newsletterClose = newsletterPopup.querySelector(".closeBtn");
const newsletterSubscribe = document.getElementById("newsletterSubscribe");

setTimeout(() => { newsletterPopup.style.display = "flex"; }, 3000);

newsletterClose.addEventListener("click", () => newsletterPopup.style.display = "none");

newsletterSubscribe.addEventListener("click", () => {
  const email = document.getElementById("newsletterEmail").value;
  if(email) alert(`🎉 Thank you for subscribing: ${email}`);
  newsletterPopup.style.display = "none";
});
document.getElementById("loginForm")?.addEventListener("submit", async e => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    document.getElementById("loginMessage").textContent = data.message;
    if(res.ok) { this.reset(); }
  } catch(err) {
    document.getElementById("loginMessage").textContent = "❌ Error connecting to server";
  }
});

document.getElementById("signupForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("signupConfirm").value;
  const message = document.getElementById("signupMessage");

  
  if(password.length < 6){
    message.textContent = "Password must be at least 6 characters";
    return;
  }
  if(password !== confirm){
    message.textContent = "Passwords do not match";
    return;
  }

  message.style.color = "green";
  message.textContent = "✅ Account created successfully! (Ready for backend integration)";
  this.reset();
});



document.getElementById("loginForm")?.addEventListener("submit", function(e){
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;
  const message = document.getElementById("loginMessage");

  if(!email || !password){
    message.textContent = "Please enter email and password";
    return;
  }

  
  message.style.color = "green";
  message.textContent = "✅ Login successful! (Ready for backend integration)";
  this.reset();
});

function openBookingModal(destination){
  document.getElementById("modalDestination").textContent = destination;
  document.getElementById("bookingModal").style.display = "flex";
}
function closeBookingModal(){
  document.getElementById("bookingModal").style.display = "none";
}

document.getElementById("modalBookingForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("modalName").value;
  const email = document.getElementById("modalEmail").value;
  const start = document.getElementById("modalStart").value;
  const end = document.getElementById("modalEnd").value;

  document.getElementById("modalBookingMessage").textContent = `✅ Thanks ${name}! Your trip to ${document.getElementById("modalDestination").textContent} is booked from ${start} to ${end}.`;
  this.reset();
});
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); 

  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("signupConfirm").value;
  const msg = document.getElementById("signupMessage");

  if (password !== confirm) {
    msg.textContent = "❌ Passwords do not match!";
    msg.style.color = "red";
    return;
  }

  if (password.length < 6) {
    msg.textContent = "❌ Password must be at least 6 characters!";
    msg.style.color = "red";
    return;
  }

  
  msg.textContent = `✅ Sign Up successful! Welcome, ${name}!`;
  msg.style.color = "green";

  
  this.reset();

 
});
document.getElementById("forgotPasswordLink").addEventListener("click", function(e) {
  e.preventDefault();
  const email = prompt("Enter your registered email:");
  if (!email) return alert("You must enter an email!");

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => u.email === email.trim());

  if(user){
    alert(`✅ Your password is: ${user.password}`);
  } else {
    alert("❌ Email not found! Please sign up.");
  }
});

