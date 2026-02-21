
const form = document.querySelector("form");

form.addEventListener("submit", async function(e) {
  e.preventDefault(); // stop page reload

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Login failed");
    }

    alert("Login Successful ✅");
    console.log("Token:", data.token);

    // Save token
    localStorage.setItem("token", data.token);

  } catch (error) {
    alert("Error: " + error.message);
  }
});
