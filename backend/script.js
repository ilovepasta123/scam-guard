// script.js - Scam Guard Website

// Function called when "Scan" button is clicked
async function scan() {
  const value = document.getElementById('input').value;
  const resultDiv = document.getElementById('result');

  if (!value) {
    alert("Please enter a website or phone number!");
    return;
  }

  resultDiv.innerHTML = "Scanning... ⏳";

  try {
    // Call backend API
    const response = await fetch("http://localhost:3000/scan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: "demo",      // placeholder user
        value: value,
        type: "website"      // change to "phone" if scanning a phone number
      })
    });

    if (!response.ok) throw new Error("Scan failed");

    const data = await response.json();

    // Show result
    resultDiv.innerHTML = `
      <strong>Value:</strong> ${data.value} <br>
      <strong>Risk Score:</strong> ${data.riskScore}% <br>
      <strong>Status:</strong> ${data.result}
    `;
  } catch (err) {
    console.error(err);
    resultDiv.innerHTML = "❌ Error: Could not scan. Make sure backend is running.";
  }
}

// Optional: Press Enter to scan
document.getElementById("input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    scan();
  }
});
