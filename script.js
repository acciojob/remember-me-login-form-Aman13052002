const form =
      document.getElementById("loginForm");

    const username =
      document.getElementById("username");

    const password =
      document.getElementById("password");

    const checkbox =
      document.getElementById("checkbox");

    const existingBtn =
      document.getElementById("existing");

    // Check saved credentials
    const savedUsername =
      localStorage.getItem("username");

    const savedPassword =
      localStorage.getItem("password");

    // Show existing user button
    if (savedUsername && savedPassword) {
      existingBtn.style.display = "block";
    }

    // Form submit
    form.addEventListener("submit", function (e) {

      e.preventDefault();

      alert(`Logged in as ${username.value}`);

      if (checkbox.checked) {

        localStorage.setItem(
          "username",
          username.value
        );

        localStorage.setItem(
          "password",
          password.value
        );

      } else {

        localStorage.removeItem("username");

        localStorage.removeItem("password");
      }
    });

    // Existing user login
    existingBtn.addEventListener("click", function () {

      const savedUser =
        localStorage.getItem("username");

      alert(`Logged in as ${savedUser}`);
    });
