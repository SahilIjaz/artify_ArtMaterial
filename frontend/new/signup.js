document
  .getElementById("signup-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
      const response = await fetch(
        "http://127.0.0.1:1199/api/v1/auth/sign-Up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            confirmPassword: password, // Same as password
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "Signup successful!");

        // Save tokens and user info
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("act", data.act);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Show OTP form if required
        document.getElementById("signup-box").style.display = "none";
        document.getElementById("otp-box").style.display = "block";
        document.getElementById("otp-email").value = email;
      } else {
        alert(`Signup failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("An error occurred during signup.");
    }
  });
