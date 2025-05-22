document
  .getElementById("login-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    try {
      const response = await fetch("http://127.0.0.1:1199/api/v1/auth/log-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        // Save tokens and user info
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("act", data.act);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("name", data.user.name);

        // Redirect to home page
        window.location.href = "home.html"; // ✅ Use relative path
      } else {
        alert(`Login failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("An error occurred while logging in.");
    }
  });
