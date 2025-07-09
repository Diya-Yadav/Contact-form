document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('https://n6kmc57co3.execute-api.eu-north-1.amazonaws.com/submitContactForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        message: document.getElementById('message').value
      })
    });

    // If response is not OK, log the whole response
    if (!response.ok) {
      const errorText = await response.text();
      console.error("API response error:", errorText);
      alert("Submission failed: " + errorText);
      return;
    }

    const result = await response.json();
    alert(result.message);
  } catch (error) {
    console.error("JavaScript Fetch Error:", error);
    alert("Something went wrong. Please try again later.");
  }
});
