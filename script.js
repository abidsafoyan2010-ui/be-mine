06.20 1:55 PM
// EmailJS Initialization
emailjs.init("3JxqsV9IHlgWSYIJz");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// YES → EMAIL
yesBtn.addEventListener("click", function () {
  emailjs.send("service_apgzpia", "template_se5p46l", {
    message: " YES clicked! Proposal accepted!"
  }).then(() => {
    alert("Email sent ");
  });
});

// NO → ALWAYS MOVE (FIXED BUG)
function moveNoButton() {
  // Screen bounds hishebe math random calculations
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Hover ebong Click dutotei button shore jabe
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

