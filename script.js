//your JS code here. If required.
const form = document.getElementById("loginForm");

    const usernameInput =
      document.getElementById("username");

    const passwordInput =
      document.getElementById("password");

    const checkbox =
      document.getElementById("checkbox");

    const existingButton =
      document.getElementById("existing");

    // Check localStorage on page load
    const savedUsername =
      localStorage.getItem("username");

    const savedPassword =
      localStorage.getItem("password");

    // Show existing user button if credentials exist
    if (savedUsername && savedPassword) {
      existingButton.style.display = "block";
    }

    // Form submit
    form.addEventListener("submit", function (e) {

      e.preventDefault();

      const username = usernameInput.value;
      const password = passwordInput.value;

      alert(`Logged in as ${username}`);

      // Save credentials
      if (checkbox.checked) {

        localStorage.setItem(
          "username",
          username
        );

        localStorage.setItem(
          "password",
          password
        );

      } else {

        // Remove saved credentials
        localStorage.removeItem("username");

        localStorage.removeItem("password");
      }
    });

    // Existing user login
    existingButton.addEventListener("click", function () {

      const savedUser =
        localStorage.getItem("username");

      alert(`Logged in as ${savedUser}`);
    });
